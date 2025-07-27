import React, { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import enFlag from "../assets/flags/en.png";
import loFlag from "../assets/flags/lo.png";
import thFlag from "../assets/flags/th.png";
import zhFlag from "../assets/flags/zh.png";

const languages = [
  { code: "en", label: "English", flag: enFlag },
  { code: "lo", label: "ລາວ (Lao)", flag: loFlag },
  { code: "th", label: "ไทย (Thai)", flag: thFlag },
  { code: "zh", label: "中文 (Chinese)", flag: zhFlag },
];

const LanguageSelector = ({ onSelect }) => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleSelect = (code) => {
    setSelectedLang(code);
    setOpen(false);
    if (onSelect) onSelect(code);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = languages.find((l) => l.code === selectedLang);

  return (
    <div className="relative inline-block text-sm" ref={wrapperRef}>
      <button
        className="flex items-center gap-2 px-2 py-1 text-gray-800 bg-transparent focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <img src={selected.flag} alt={selected.code} className="w-5 h-3.5" />
        <span>{selected.label}</span>
        <RiArrowDropDownLine className="text-xl text-gray-500" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-max min-w-full bg-white shadow-lg rounded-md py-1">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(lang.code)}
            >
              <img src={lang.flag} alt={lang.code} className="w-5 h-3.5" />
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
