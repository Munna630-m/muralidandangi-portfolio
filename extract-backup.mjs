import fs from 'fs';
import path from 'path';

const backupPath = 'C:\\Users\\HP\\Downloads\\murali-portfolio-backup-2026-08-25.json';
const uploadsDir = path.resolve('d:\\My Portfolio\\public\\uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

console.log('Reading backup JSON file...');
const rawData = fs.readFileSync(backupPath, 'utf8');
const backup = JSON.parse(rawData);

console.log('Keys in backup:', Object.keys(backup));

// Function to save base64 data URI to file
function saveAsset(dataUri, filenamePrefix) {
  if (!dataUri || !dataUri.startsWith('data:')) {
    return dataUri;
  }
  
  try {
    const matches = dataUri.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return dataUri;
    }

    const mimeType = matches[1];
    const base64Data = matches[2];
    let ext = 'jpg';
    if (mimeType.includes('png')) ext = 'png';
    else if (mimeType.includes('webp')) ext = 'webp';
    else if (mimeType.includes('svg')) ext = 'svg';
    else if (mimeType.includes('mp4')) ext = 'mp4';
    else if (mimeType.includes('webm')) ext = 'webm';

    const filename = `${filenamePrefix}-${Date.now()}-${Math.random().toString(36).substr(2, 6)}.${ext}`;
    const filePath = path.join(uploadsDir, filename);
    fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
    console.log(`Saved asset: /uploads/${filename}`);
    return `/uploads/${filename}`;
  } catch (err) {
    console.error('Error saving asset:', err);
    return dataUri;
  }
}

// 1. Process Profile
let profile = backup.profile || null;
if (profile) {
  if (profile.heroImage && profile.heroImage.startsWith('data:')) {
    profile.heroImage = saveAsset(profile.heroImage, 'hero');
  }
  if (profile.aboutImage && profile.aboutImage.startsWith('data:')) {
    profile.aboutImage = saveAsset(profile.aboutImage, 'about');
  }
}

// 2. Process Startup
let startup = backup.startup || null;

// 3. Process Projects
let projects = backup.projects || [];
projects = projects.map((proj, idx) => {
  if (proj.coverImage && proj.coverImage.startsWith('data:')) {
    proj.coverImage = saveAsset(proj.coverImage, `project-cover-${idx}`);
  }
  if (proj.caseStudy && Array.isArray(proj.caseStudy.screens)) {
    proj.caseStudy.screens = proj.caseStudy.screens.map((scr, sIdx) => {
      if (scr.image && scr.image.startsWith('data:')) {
        scr.image = saveAsset(scr.image, `screen-${idx}-${sIdx}`);
      }
      return scr;
    });
  }
  return proj;
});

// 4. Process Designs
let designs = backup.designs || [];
console.log(`Processing ${designs.length} designs...`);
designs = designs.map((d, idx) => {
  if (d.imageUrl && d.imageUrl.startsWith('data:')) {
    d.imageUrl = saveAsset(d.imageUrl, `design-${idx}`);
  }
  return d;
});

// 5. Process Videos
let videos = backup.videos || [];
videos = videos.map((v, idx) => {
  if (v.thumbnailUrl && v.thumbnailUrl.startsWith('data:')) {
    v.thumbnailUrl = saveAsset(v.thumbnailUrl, `video-thumb-${idx}`);
  }
  if (v.videoUrl && v.videoUrl.startsWith('data:')) {
    v.videoUrl = saveAsset(v.videoUrl, `video-file-${idx}`);
  }
  return v;
});

// Write updated defaultData.ts
const defaultDataContent = `import type {
  Profile,
  VentureLabStartup,
  Project,
  DesignItem,
  VideoItem
} from '../types/portfolio';

export const initialProfile: Profile = ${JSON.stringify(profile, null, 2)};

export const initialStartup: VentureLabStartup = ${JSON.stringify(startup, null, 2)};

export const initialProjects: Project[] = ${JSON.stringify(projects, null, 2)};

export const initialDesigns: DesignItem[] = ${JSON.stringify(designs, null, 2)};

export const initialVideos: VideoItem[] = ${JSON.stringify(videos, null, 2)};
`;

fs.writeFileSync(path.resolve('d:\\My Portfolio\\src\\data\\defaultData.ts'), defaultDataContent, 'utf8');
console.log('Successfully updated src/data/defaultData.ts with all real uploaded data!');
