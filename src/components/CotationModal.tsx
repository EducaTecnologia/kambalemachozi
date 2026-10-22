import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, FileText } from 'lucide-react';
import { getTranslation } from '../data/content';
import { Language } from '../types';
import {
  WHATSAPP_DISPLAY,
  createWhatsAppUrl,
  sendToWhatsApp,
  isMobileOrTablet,
} from '../utils/whatsapp';

interface CotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang?: Language;
}

export const CotationModal: React.FC<CotationModalProps> = ({
  isOpen,
  onClose,
  currentLang = 'fr',
}) => {
  const t = getTranslation(currentLang).contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: t.subjectOptions[0] || '1. Routes, Travaux Publics & Engins Lourds (ITPR)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');
  const [lastWhatsAppMessage, setLastWhatsAppMessage] = useState('');

  // Sync initial subject if language changes
  useEffect(() => {
    if (t.subjectOptions && t.subjectOptions.length > 0) {
      setFormData((prev) => ({
        ...prev,
        subject: prev.subject || t.subjectOptions[0],
      }));
    }
  }, [t.subjectOptions]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const waText =
      `DEMANDE DE COTATION & CAHIER DES CHARGES — ETS KAMBALE MACHOZI\n\n` +
      `👤 Nom complet / Société: ${formData.name}\n` +
      `✉️ Adresse E-mail: ${formData.email}\n` +
      `📞 Téléphone / WhatsApp: ${formData.phone || 'Non renseigné'}\n` +
      `📋 Secteur d’activité: ${formData.subject}\n\n` +
      `💬 Message / Cahier des charges:\n${formData.message}`;

    const waUrl = createWhatsAppUrl(waText);
    setLastWhatsAppUrl(waUrl);
    setLastWhatsAppMessage(waText);
    setSubmitted(true);

    // Auto-trigger WhatsApp dispatch (WhatsApp Web on desktop, native WhatsApp App on mobile/tablet)
    sendToWhatsApp(waText);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: t.subjectOptions[0] || '1. Routes, Travaux Publics & Engins Lourds (ITPR)',
      message: '',
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/75 backdrop-blur-md animate-[fadeIn_0.2s_ease-out] overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cotation-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Close Button Header */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer z-20 shadow-xs"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 sm:pt-9 space-y-6">
          {/* Header */}
          <div className="pr-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#D71920]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#1B2A6B] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#D71920]" />
                <span>
                  {currentLang === 'pt'
                    ? 'Cotação & Atendimento Direto'
                    : currentLang === 'en'
                    ? 'Official Quotation & Direct Service'
                    : 'Cotation & Devis Officiel'}
                </span>
              </span>
            </div>
            <h3
              id="cotation-modal-title"
              className="text-xl sm:text-2xl font-black text-slate-900 font-display leading-tight"
            >
              {t.formTitle}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t.formSub}
            </p>
          </div>

          {submitted ? (
            /* Success confirmation screen */
            <div className="py-6 px-4 sm:px-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-[fadeIn_0.3s_ease-out]">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-emerald-950 font-display">
                {t.sentSuccessTitle || 'Informations préparées pour WhatsApp !'}
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                {t.sentSuccessDesc ||
                  `Votre demande de cotation a été préparée pour transmission immédiate sur WhatsApp au ${WHATSAPP_DISPLAY}.`}
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-medium">
                <span>
                  {isMobileOrTablet()
                    ? '📱 Redirection vers WhatsApp'
                    : '💻 Redirection vers WhatsApp Web'}
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={lastWhatsAppUrl || createWhatsAppUrl()}
                  onClick={(e) => {
                    if (lastWhatsAppMessage) {
                      e.preventDefault();
                      sendToWhatsApp(lastWhatsAppMessage);
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>
                    {currentLang === 'pt'
                      ? 'Abrir no WhatsApp'
                      : currentLang === 'en'
                      ? 'Open WhatsApp'
                      : 'Ouvrir WhatsApp'}{' '}
                    ({WHATSAPP_DISPLAY})
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    handleReset();
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  {currentLang === 'pt'
                    ? 'Fechar'
                    : currentLang === 'en'
                    ? 'Close'
                    : 'Fermer'}
                </button>
              </div>
            </div>
          ) : (
            /* Contact Form matching image_b3479f37.png */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.namePlaceholder || 'Votre nom et organisation'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nom@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Téléphone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+243 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t.subjectLabel}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B] cursor-pointer transition-all"
                  >
                    {t.subjectOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t.msgLabel}
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={
                    t.msgPlaceholder ||
                    'Décrivez votre projet, les quantités souhaitées ou le site d’intervention...'
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B] resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#1B2A6B] hover:bg-[#2A3EB1] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99]"
              >
                <span>{t.sendBtn}</span>
                <Send className="w-4 h-4 text-[#F7C600]" />
              </button>

              <p className="text-[11px] text-center text-slate-500 pt-1">
                Envoi direct et sécurisé vers le WhatsApp officiel{' '}
                <span className="font-semibold text-emerald-700">{WHATSAPP_DISPLAY}</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
