import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Phone, ShieldCheck, Building2, MessageSquare } from 'lucide-react';
import { getTranslation } from '../data/content';
import { Language } from '../types';
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, EMAIL_DIRECTEUR, EMAIL_COMMERCIAL, createWhatsAppUrl, sendToWhatsApp } from '../utils/whatsapp';

interface ContactNewsletterProps {
  currentLang?: Language;
}

export const ContactNewsletter: React.FC<ContactNewsletterProps> = ({ currentLang = 'fr' }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string>('');
  const t = getTranslation(currentLang).contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: t.subjectOptions[0] || 'Génie Civil & Infrastructures',
    message: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const waText =
      `*NOUVEAU MESSAGE DE CONTACT — ETS KAMBALE MACHOZI*\n\n` +
      `👤 *Nom / Nome:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Téléphone / WhatsApp:* ${formData.phone || 'Non renseigné'}\n` +
      `📋 *Sujet / Assunto:* ${formData.subject}\n\n` +
      `💬 *Message / Mensagem:*\n${formData.message}`;

    const waUrl = createWhatsAppUrl(waText);
    setLastWhatsAppUrl(waUrl);
    setContactSubmitted(true);

    // Auto-trigger WhatsApp dispatch
    sendToWhatsApp(waText);

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: t.subjectOptions[0] || 'Génie Civil & Infrastructures',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Coordinates & Sedes */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-[#D71920]" />
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
                  {t.sectionKicker}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
                {t.title}
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {t.sub}
              </p>
            </div>

            {/* Sede Card DRC */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="flex items-center gap-2 text-[#D71920] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{t.hqDrcTitle}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display">{t.hqDrcOrg}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.hqDrcLoc}
              </p>
            </div>

            {/* Legal & Fiscal Identifiers Card (from PDF Page 1 & 2) */}
            <div className="p-5 rounded-2xl bg-[#071026] text-white border border-slate-800 space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-[#F7C600] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Identifiants Légaux & Fiscaux (RDC)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
                <div className="bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <span className="text-slate-400 block text-[10px] uppercase">RCCM</span>
                  <span className="text-white font-bold">CD/KNG/RCCM/20-A-01815</span>
                </div>
                <div className="bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <span className="text-slate-400 block text-[10px] uppercase">ID. Nationale</span>
                  <span className="text-white font-bold">01-F4300-N63029P</span>
                </div>
                <div className="bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <span className="text-slate-400 block text-[10px] uppercase">N° Impôt (DGI)</span>
                  <span className="text-white font-bold">A2161439L</span>
                </div>
                <div className="bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <span className="text-slate-400 block text-[10px] uppercase">ARSP / CD</span>
                  <span className="text-[#F7C600] font-bold">3914908074</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Points (PDF & Updated user coordinates) */}
            <div className="space-y-3 text-sm text-slate-700 pt-2 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Téléphone Direct & WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600 transition-colors font-bold text-slate-900 inline-flex items-center gap-1.5"
                  >
                    <span>{WHATSAPP_DISPLAY}</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.2 rounded font-semibold">WhatsApp 24/7</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1B2A6B] flex items-center justify-center shrink-0 border border-blue-200">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Direction Générale
                  </span>
                  <a
                    href={`mailto:${EMAIL_DIRECTEUR}`}
                    className="hover:text-[#1B2A6B] transition-colors font-bold text-slate-900 block"
                  >
                    {EMAIL_DIRECTEUR}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Service Commercial & Cotations
                  </span>
                  <a
                    href={`mailto:${EMAIL_COMMERCIAL}`}
                    className="hover:text-[#1B2A6B] transition-colors font-bold text-slate-900 block"
                  >
                    {EMAIL_COMMERCIAL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
              {t.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 font-normal">
              {t.formSub}
            </p>

            {contactSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-[fadeIn_0.3s_ease-out]">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950 font-display">
                  {t.sentSuccessTitle || 'Informations préparées pour WhatsApp'}
                </h4>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Votre demande a été transmise au numéro officiel WhatsApp <strong className="font-mono">{WHATSAPP_DISPLAY}</strong>. Si l'application ne s'est pas ouverte automatiquement, cliquez sur le bouton ci-dessous :
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={lastWhatsAppUrl || `https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ouvrir WhatsApp ({WHATSAPP_DISPLAY})</span>
                  </a>
                  <button
                    onClick={() => setContactSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                  >
                    Nouveau Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B]"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B]"
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
                      placeholder="+243 ... / +55 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {t.subjectLabel}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B] cursor-pointer"
                    >
                      {t.subjectOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
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
                    placeholder={t.msgPlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1B2A6B] resize-none"
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
                  Envoi direct et sécurisé vers le WhatsApp officiel <span className="font-semibold text-emerald-700">{WHATSAPP_DISPLAY}</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
