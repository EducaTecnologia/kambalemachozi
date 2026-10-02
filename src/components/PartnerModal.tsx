import React, { useState } from 'react';
import { X, CheckCircle2, Handshake } from 'lucide-react';
import { Logo } from './Logo';
import { getTranslation } from '../data/content';
import { Language } from '../types';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang?: Language;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose, currentLang = 'fr' }) => {
  const [submitted, setSubmitted] = useState(false);
  const t = getTranslation(currentLang).partnerModal;

  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    type: t.typeOptions[0] || 'Collectivité',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#141B44] border border-white/20 p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-white/10 transition-colors cursor-pointer"
          aria-label={t.closeBtn}
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <Logo variant="dark" size="sm" className="mb-3 inline-flex" />
              <h3 className="text-2xl font-extrabold font-display">
                {t.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {t.sub}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                  {t.orgLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.orgPlaceholder}
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                    {t.repLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.repPlaceholder}
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@institution.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                  {t.typeLabel}
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F1635] border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600] cursor-pointer"
                >
                  {t.typeOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                  {t.msgLabel}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={t.msgPlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-[#F7C600] hover:bg-[#e0b400] text-slate-900 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Handshake className="w-4 h-4 text-slate-900" />
                <span>{t.submitBtn}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-display">{t.successTitle}</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              {t.successDesc}
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              {t.closeBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
