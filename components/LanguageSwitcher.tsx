"use client";

import { useState } from "react";

const languageOptions = [
  { label: "English", value: "en" },
  { label: "繁體中文", value: "zh-HK" }
];

export function LanguageSwitcher() {
  const [language, setLanguage] = useState(languageOptions[0].value);

  return (
    <div className="relative h-14 w-56" aria-label="Language switcher">
      <select
        className="h-full w-full appearance-none border border-[#c7d5dc] bg-[#acd3e9] pl-5 pr-12 text-center text-lg font-semibold text-white outline-none transition hover:bg-[#9fcbe5] focus:border-white focus:ring-2 focus:ring-white/35"
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span
        className="pointer-events-none absolute right-6 top-1/2 size-0 -translate-y-1/2 border-x-[8px] border-t-[12px] border-x-transparent border-t-white"
        aria-hidden="true"
      />
    </div>
  );
}
