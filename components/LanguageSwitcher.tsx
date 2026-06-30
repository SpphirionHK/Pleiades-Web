"use client";

import { useState } from "react";

const languageOptions = [
  { label: "English", value: "en" },
  { label: "繁體中文", value: "zh-HK" }
];

export function LanguageSwitcher() {
  const [language, setLanguage] = useState(languageOptions[0].value);

  return (
    <div className="relative w-36" aria-label="Language switcher">
      <select
        className="h-9 w-full appearance-none border border-[#cbbfae] bg-[#acd3e9] pl-4 pr-10 text-center text-sm font-semibold text-white outline-none transition hover:bg-[#9cc9e3] focus:border-white focus:ring-2 focus:ring-white/35"
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
        className="pointer-events-none absolute right-4 top-1/2 size-0 -translate-y-1/2 border-x-[8px] border-t-[12px] border-x-transparent border-t-white"
        aria-hidden="true"
      />
    </div>
  );
}
