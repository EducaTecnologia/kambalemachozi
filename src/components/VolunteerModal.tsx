import React, { useState } from 'react';
import { X, CheckCircle2, Users, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';
import { getTranslation } from '../data/content';
import { Language } from '../types';
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, createWhatsAppUrl, sendToWhatsApp, isMobileOrTablet } from '../utils/whatsapp';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang?: Language;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose, currentLang = 'fr' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');
  const [lastMessage, setLastMessage] = useState('');
  const t = getTranslation(currentLang).volunteerModal;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'RDC',
    area: t.areaOptions[0] || 'Génie Civil & BTP',
    availability: t.availOptions[0] || 'Immédiate',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waText =
      `CANDIDATURE / SOUS-TRAITANCE & ARSP — ETS KAMBALE MACHOZI\n\n` +
      `👤 Candidat / Nom: ${formData.name}\n` +
      `✉️ Email: ${formData.email}\n` +
      `📞 Téléphone / WhatsApp: ${formData.phone}\n` +
      `📍 Localisation / Ville: ${formData.country}\n` +
      `🏗️ Domaine / Secteur: ${formData.area}\n` +
      `⏱️ Disponibilité: ${formData.availability}`;

    const waUrl = createWhatsAppUrl(waText);
    setLastWhatsAppUrl(waUrl);
    setLastMessage(waText);
    setSubmitted(true);

    sendToWhatsApp(waText);
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
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+243 ... / +55 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                  {t.areaLabel}
                </label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F1635] border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600] cursor-pointer"
                >
                  {t.areaOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                  {t.availLabel}
                </label>
                <select
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F1635] border border-white/20 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F7C600] cursor-pointer"
                >
                  {t.availOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-[#D71920] hover:bg-[#b81218] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.99]"
              >
                <Users className="w-4 h-4" />
                <span>{t.submitBtn}</span>
              </button>
              <p className="text-[10px] text-center text-slate-400">
                Transmission automatique sur WhatsApp <span className="text-emerald-400 font-semibold">{WHATSAPP_DISPLAY}</span>
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-display">{t.successTitle}</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Vos informations ont été préparées pour le numéro officiel WhatsApp <strong className="font-mono text-emerald-300">{WHATSAPP_DISPLAY}</strong>.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-medium">
              <span>{isMobileOrTablet() ? '📱 Redirection vers l’application WhatsApp' : '💻 Redirection vers WhatsApp Web'}</span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={lastWhatsAppUrl || createWhatsAppUrl()}
                onClick={(e) => {
                  if (lastMessage) {
                    e.preventDefault();
                    sendToWhatsApp(lastMessage);
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{currentLang === 'pt' ? 'Abrir no WhatsApp' : currentLang === 'en' ? 'Open WhatsApp' : 'Ouvrir WhatsApp'}</span>
              </a>
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                {t.closeBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
