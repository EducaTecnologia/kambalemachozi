import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  FileText,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { getTranslation } from '../data/content';
import { Language } from '../types';

interface NewsDetailPageProps {
  articleId: string;
  currentLang: Language;
  onBackToNews: () => void;
  onSelectArticle: (id: string) => void;
  onOpenDonate: (amount?: number) => void;
}

export const NewsDetailPage: React.FC<NewsDetailPageProps> = ({
  articleId,
  currentLang,
  onBackToNews,
  onSelectArticle,
  onOpenDonate,
}) => {
  const [copied, setCopied] = useState(false);
  const trans = getTranslation(currentLang);
  const t = trans.newsDetail;
  const allArticles = trans.news.items;

  const article = allArticles.find((item) => item.id === articleId) || allArticles[0];
  const relatedArticles = allArticles.filter((item) => item.id !== article.id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [articleId]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-0 pb-20">
      {/* 1. Article Hero Banner */}
      <div className="relative w-full min-h-[440px] sm:min-h-[500px] flex items-end overflow-hidden bg-slate-950">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/80 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 w-full text-white">
          <div className="flex items-center justify-between gap-4 mb-6">
            <button
              onClick={onBackToNews}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#D71920]" />
              <span>{t.backToNews}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
              title={t.share}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">{t.linkCopied}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-300" />
                  <span className="hidden sm:inline">{t.share}</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-[#D71920] text-white text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-200 bg-white/15 backdrop-blur-xs px-3 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5 text-[#F7C600]" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-200 bg-white/15 backdrop-blur-xs px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5 text-slate-300" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header Metadata Excerpt */}
          <div className="p-6 sm:p-10 border-b border-slate-100">
            <p className="text-base sm:text-xl text-slate-700 font-normal leading-relaxed border-l-4 border-[#D71920] pl-4 sm:pl-6 italic">
              {article.excerpt}
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Official Corporate Credentials Block */}
            <div className="my-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B2A6B]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{trans.mission.ngoLegalCert}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ETS KAMBALE MACHOZI (KM) — Kinshasa, RDC</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>RCCM: CD/KNG/RCCM/20-A-01815 • ARSP: 3914908074</span>
                </div>
              </div>
            </div>

            {/* Action Callout inside Article */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0B1030] to-[#1B2A6B] text-white my-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F7C600]">
                  ETS KAMBALE MACHOZI (KM)
                </span>
                <h4 className="text-xl sm:text-2xl font-black font-display">
                  {t.supportTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                  {t.supportDesc}
                </p>
              </div>

              <button
                onClick={() => onOpenDonate(50)}
                className="px-6 py-3.5 bg-[#D71920] hover:bg-[#b81218] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t.donateCta}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block mb-1">
                {trans.news.sectionKicker}
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900">
                {t.relatedTitle}
              </h3>
            </div>

            <button
              onClick={onBackToNews}
              className="text-xs font-bold uppercase tracking-wider text-[#1B2A6B] hover:text-[#D71920] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>{t.backToNews}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectArticle(item.id)}
                className="group p-5 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 text-[10px] font-bold text-[#1B2A6B]">
                      {item.category}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-500 font-semibold mb-1 block">
                    {item.date}
                  </span>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display group-hover:text-[#1B2A6B] transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#D71920]">
                  <span>{trans.news.readArticle}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onBackToNews}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToNews}</span>
          </button>
        </div>
      </article>
    </div>
  );
};
