"use client";
import { useState, useEffect, useRef } from "react";

interface Airport {
  iata: string;
  name: string;
  city: string;
  country: string;
}

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function AirportInput({ label, placeholder, value, onChange }: Props) {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<Airport[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        if (!selected && query.length > 0) {
          setError("Please select a valid airport from the list");
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selected, query]);

  useEffect(() => {
    if (query.length < 2 || selected) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      const res = await fetch(`/api/airports?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
      setOpen(data.length > 0);
      if (data.length === 0 && query.length > 2) {
        setError("No airports found. Please try a different search.");
      } else {
        setError("");
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [query, selected]);

  function handleSelect(airport: Airport) {
    const formatted = `${airport.city} (${airport.iata})`;
    setQuery(formatted);
    onChange(formatted);
    setSelected(true);
    setOpen(false);
    setError("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setSelected(false);
    onChange("");
    setError("");
  }

  return (
    <div ref={ref} className="flex flex-col gap-1.5 relative">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          onFocus={() => query.length >= 2 && !selected && setOpen(true)}
          className={`w-full px-3 py-2.5 border rounded-xl text-sm text-slate-800 outline-none focus:ring-2 transition-all ${
            error
              ? "border-red-300 focus:border-red-400 focus:ring-red-100"
              : selected
              ? "border-green-300 focus:border-green-400 focus:ring-green-100"
              : "border-slate-200 focus:border-blue-400 focus:ring-blue-100"
          }`}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {selected && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
          )}
          {error && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          )}
          {!selected && !error && query.length >= 2 && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          )}
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          {error}
        </p>
      )}

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50 overflow-hidden">
          {results.map((airport, i) => (
            <button
              key={airport.iata}
              onClick={() => handleSelect(airport)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-blue-50 transition-colors ${
                i < results.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <div className="w-10 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-blue-700">{airport.iata}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">{airport.city}</p>
                <p className="text-xs text-slate-400">{airport.name} · {airport.country}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 