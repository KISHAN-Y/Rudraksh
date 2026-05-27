import React, { useState, useEffect, useRef } from 'react';
import { Cookie, Settings } from 'lucide-react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const bannerRef = useRef(null);

  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('rudreksh-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissBanner = (consentData) => {
    setIsExiting(true);
    localStorage.setItem('rudreksh-cookie-consent', JSON.stringify(consentData));
    setTimeout(() => setVisible(false), 400);
  };

  const handleAcceptAll = () => {
    dismissBanner({
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
      timestamp: Date.now(),
    });
  };

  const handleRejectAll = () => {
    dismissBanner({
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
      timestamp: Date.now(),
    });
  };

  const handleSavePreferences = () => {
    dismissBanner({ ...preferences, timestamp: Date.now() });
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!visible) return null;

  const cookieCategories = [
    {
      key: 'necessary',
      label: 'Strictly Necessary',
      desc: 'Essential for the website to function. Cannot be disabled.',
      locked: true,
    },
    {
      key: 'analytics',
      label: 'Analytics & Performance',
      desc: 'Help us understand how visitors interact with our website.',
      locked: false,
    },
    {
      key: 'marketing',
      label: 'Marketing',
      desc: 'Used to deliver relevant advertisements and track campaigns.',
      locked: false,
    },
    {
      key: 'personalization',
      label: 'Personalization',
      desc: 'Allow us to remember your preferences and customize your experience.',
      locked: false,
    },
  ];

  return (
    <div
      ref={bannerRef}
      className={`fixed bottom-0 left-0 right-0 z-[9999] ${
        isExiting ? 'animate-cookie-exit' : 'animate-cookie-enter'
      }`}
      role="dialog"
      aria-label="Cookie consent"
    >
      {/* Light frosted glass banner */}
      <div className="bg-white/90 backdrop-blur-2xl border-t-2 border-primary/20 shadow-[0_-4px_32px_rgba(90,172,224,0.10)]">
        <div className="container mx-auto px-4 py-4">
          {/* Main row */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Icon + copy */}
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                <Cookie size={20} className="text-primary-dark" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed min-w-0">
                By clicking &quot;Accept All Cookies&quot;, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and provide our ad partners with information for ad personalization and measurement.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 shrink-0 flex-wrap lg:flex-nowrap">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-primary border border-border hover:border-primary/40 rounded-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer bg-white hover:bg-primary-light/50"
                id="cookie-settings-btn"
              >
                <Settings size={14} />
                Cookies Settings
              </button>
              <button
                onClick={handleRejectAll}
                className="px-5 py-2.5 text-sm font-medium text-text-primary bg-white hover:bg-surface-alt border border-border-strong rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer"
                id="cookie-reject-btn"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2.5 text-sm font-semibold bg-primary hover:bg-primary-mid text-white rounded-xl transition-all duration-200 whitespace-nowrap shadow-md shadow-primary/20 cursor-pointer"
                id="cookie-accept-btn"
              >
                Accept All Cookies
              </button>
            </div>
          </div>

          {/* Expandable settings */}
          {showSettings && (
            <div className="mt-4 pt-4 border-t border-border animate-slide-up-fade">
              <div className="grid sm:grid-cols-2 gap-3">
                {cookieCategories.map((cat) => (
                  <label
                    key={cat.key}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                      preferences[cat.key]
                        ? 'bg-primary-light/60 border-primary/30 shadow-sm shadow-primary/5'
                        : 'bg-surface-alt border-border hover:border-primary/20 hover:bg-primary-light/20'
                    } ${cat.locked ? 'opacity-75' : ''}`}
                  >
                    {/* Toggle switch */}
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        checked={preferences[cat.key]}
                        onChange={() => togglePreference(cat.key)}
                        disabled={cat.locked}
                        className="sr-only peer"
                      />
                      <div
                        className={`w-9 h-5 rounded-full transition-colors duration-200 ${
                          preferences[cat.key] ? 'bg-teal' : 'bg-text-muted/30'
                        } ${cat.locked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        onClick={(e) => {
                          if (!cat.locked) {
                            e.preventDefault();
                            togglePreference(cat.key);
                          }
                        }}
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                            preferences[cat.key] ? 'translate-x-4.5' : 'translate-x-0.5'
                          }`}
                        />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <span className="text-text-primary text-sm font-semibold block font-heading">
                        {cat.label}
                      </span>
                      <span className="text-text-muted text-xs leading-relaxed block mt-0.5">
                        {cat.desc}
                      </span>
                    </div>
                  </label>
                ))}
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={handleSavePreferences}
                  className="px-5 py-2.5 text-sm font-semibold bg-primary-dark hover:bg-primary-mid text-white rounded-xl transition-colors duration-200 cursor-pointer shadow-md shadow-primary-dark/15"
                  id="cookie-save-btn"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
