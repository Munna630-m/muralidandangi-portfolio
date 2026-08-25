import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Mail, MessageSquare, Trash2, CheckCircle2, Send } from 'lucide-react';

export const MessagesManager: React.FC = () => {
  const { messages, deleteMessage, markMessageRead } = usePortfolio();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-accent" />
            Contact Messages & Inquiries ({messages.length})
          </h3>
          <p className="text-xs text-zinc-400">Direct inquiries received from your website contact form.</p>
        </div>
      </div>

      {messages.length > 0 ? (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-6 rounded-3xl border transition-all space-y-4 ${
                msg.read
                  ? 'bg-dark-900/60 border-white/5'
                  : 'bg-dark-900 border-accent/40 shadow-lg shadow-accent/10'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${msg.read ? 'bg-dark-950 text-zinc-500' : 'bg-accent text-white'}`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{msg.name}</h4>
                    <span className="text-xs text-accent font-mono">{msg.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-dark-950 text-zinc-400 border border-white/10 font-mono">
                    {msg.service}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono">
                    {new Date(msg.sentAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed whitespace-pre-wrap">
                {msg.message}
              </p>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                {!msg.read ? (
                  <button
                    onClick={() => markMessageRead(msg.id)}
                    className="text-xs text-zinc-400 hover:text-emerald-400 font-mono flex items-center gap-1.5 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Mark as Read
                  </button>
                ) : (
                  <span className="text-[11px] text-zinc-600 font-mono">Read</span>
                )}

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${msg.email}?subject=Re: Inquiry from Murali Dandangi Portfolio (${encodeURIComponent(msg.service)})`}
                    className="px-3.5 py-1.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs font-bold font-mono flex items-center gap-1.5 transition-colors shadow-md shadow-accent/20"
                  >
                    <Send className="w-3 h-3" />
                    Reply
                  </a>

                  <button
                    onClick={() => {
                      if (confirm(`Delete message from ${msg.name}?`)) {
                        deleteMessage(msg.id);
                      }
                    }}
                    className="p-1.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-3xl bg-dark-950/40 border border-white/5 space-y-2">
          <MessageSquare className="w-8 h-8 text-zinc-600 mx-auto" />
          <h4 className="text-sm font-bold text-white">No Inquiries Yet</h4>
          <p className="text-xs text-zinc-500">
            Messages submitted via the public contact section will appear here in real time.
          </p>
        </div>
      )}
    </div>
  );
};
