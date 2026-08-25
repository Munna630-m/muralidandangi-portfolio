import { get, set, keys } from 'idb-keyval';

const STORAGE_PREFIX = 'murali_portfolio_';

/**
 * Saves arbitrary data to IndexedDB with localStorage sync for fast hydration
 */
export async function saveItem<T>(key: string, data: T): Promise<void> {
  const fullKey = `${STORAGE_PREFIX}${key}`;
  try {
    // 1. Save to IndexedDB (supports large media, images, videos)
    await set(fullKey, data);
    
    // 2. Also save to localStorage if small enough (for synchronous SSR/hydration without flicker)
    try {
      const serialized = JSON.stringify(data);
      if (serialized.length < 3 * 1024 * 1024) { // only if < 3MB
        localStorage.setItem(fullKey, serialized);
      }
    } catch {
      // Ignore localStorage quota errors gracefully
    }
  } catch (err) {
    console.error(`Error saving ${key} to persistent storage:`, err);
  }
}

/**
 * Loads data from IndexedDB with fallback to localStorage
 */
export async function loadItem<T>(key: string, defaultValue: T): Promise<T> {
  const fullKey = `${STORAGE_PREFIX}${key}`;
  try {
    // Check IndexedDB first
    const indexedVal = await get<T>(fullKey);
    if (indexedVal !== undefined && indexedVal !== null) {
      return indexedVal;
    }

    // Fallback to localStorage
    const localVal = localStorage.getItem(fullKey);
    if (localVal) {
      const parsed = JSON.parse(localVal) as T;
      // sync to idb
      await set(fullKey, parsed);
      return parsed;
    }
  } catch (err) {
    console.warn(`Could not load ${key} from storage, using default:`, err);
  }
  return defaultValue;
}

/**
 * Converts a browser File (image or video) into a persistent Data URL / base64 or IndexedDB Blob
 */
export async function storeUploadedFile(file: File, quality: number = 0.88): Promise<{ url: string; size: number; mimeType: string; name: string }> {
  return new Promise((resolve, reject) => {
    const isImage = file.type.startsWith('image/') && !file.type.includes('svg');
    
    if (isImage) {
      // Compress and optimize image to keep browser snappy while preserving high visual fidelity
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const maxDim = 2000;
          let width = img.width;
          let height = img.height;

          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve({
              url: e.target?.result as string,
              size: file.size,
              mimeType: file.type,
              name: file.name
            });
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL(file.type === 'image/png' ? 'image/png' : 'image/jpeg', quality);
          
          resolve({
            url: compressedDataUrl,
            size: Math.round((compressedDataUrl.length * 3) / 4),
            mimeType: file.type,
            name: file.name
          });
        };
        img.onerror = () => {
          resolve({
            url: e.target?.result as string,
            size: file.size,
            mimeType: file.type,
            name: file.name
          });
        };
        img.src = e.target?.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    } else {
      // SVGs, Videos, etc.
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        resolve({
          url: result,
          size: file.size,
          mimeType: file.type,
          name: file.name
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    }
  });
}

/**
 * Exports complete portfolio dataset for backup and disaster recovery
 */
export async function exportFullDatabase(): Promise<string> {
  const allKeys = await keys();
  const dbExport: Record<string, unknown> = {};

  for (const k of allKeys) {
    if (typeof k === 'string' && k.startsWith(STORAGE_PREFIX)) {
      const cleanKey = k.replace(STORAGE_PREFIX, '');
      dbExport[cleanKey] = await get(k);
    }
  }

  return JSON.stringify(dbExport, null, 2);
}

/**
 * Imports complete portfolio dataset
 */
export async function importFullDatabase(jsonString: string): Promise<boolean> {
  try {
    const parsed = JSON.parse(jsonString);
    for (const [key, value] of Object.entries(parsed)) {
      await saveItem(key, value);
    }
    return true;
  } catch (err) {
    console.error('Failed to import database:', err);
    return false;
  }
}
