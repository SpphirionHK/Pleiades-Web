"use client";

export function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold" aria-label="Language switcher">
      <button className="text-white underline decoration-accent-orange underline-offset-4" type="button">
        English
      </button>
      <span className="text-white/35" aria-hidden="true">
        /
      </span>
      <button
        className="text-white/70 transition hover:text-white"
        type="button"
        aria-label="Traditional Chinese translation placeholder"
      >
        繁體中文
      </button>
    </div>
  );
}
