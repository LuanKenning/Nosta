"use client";

import { useState, useSyncExternalStore } from "react";

// 10 October 2028, 13:00 in the visitor's local time zone.
const TARGET_SECONDS = Math.floor(new Date(2028, 9, 10, 13, 0, 0).getTime() / 1000);

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 250);
  return () => clearInterval(id);
}

// Snapshot is floored to whole seconds so it stays stable between ticks.
const getSnapshot = () => Math.floor(Date.now() / 1000);
const getServerSnapshot = () => null;

/**
 * A single character that rolls when it changes: the outgoing glyph falls
 * away below while the incoming one drops in from above (countdown direction).
 */
function Digit({ char }: { char: string }) {
  const [current, setCurrent] = useState(char);
  const [previous, setPrevious] = useState<string | null>(null);

  // Adjust state during render when the prop changes (no effect needed).
  if (char !== current) {
    setPrevious(current);
    setCurrent(char);
  }

  return (
    <span className="relative inline-block overflow-hidden">
      <span key={`in-${current}`} className="digit-in block">
        {current}
      </span>
      {previous !== null && (
        <span key={`out-${previous}`} aria-hidden className="digit-out absolute inset-0 block">
          {previous}
        </span>
      )}
    </span>
  );
}

export default function Countdown() {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const remaining = now === null ? null : Math.max(0, TARGET_SECONDS - now);

  if (remaining === 0) {
    return <p className="digit-in text-[12vw] leading-none font-medium tracking-tight">Now.</p>;
  }

  const units: { label: string; value: number | null; pad: number }[] = [
    { label: "Days", value: remaining === null ? null : Math.floor(remaining / 86400), pad: 3 },
    { label: "Hours", value: remaining === null ? null : Math.floor((remaining % 86400) / 3600), pad: 2 },
    { label: "Minutes", value: remaining === null ? null : Math.floor((remaining % 3600) / 60), pad: 2 },
    { label: "Seconds", value: remaining === null ? null : remaining % 60, pad: 2 },
  ];

  return (
    <div role="timer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8">
      {units.map(({ label, value, pad }) => {
        const text = value === null ? "–".repeat(pad) : String(value).padStart(pad, "0");
        return (
          <div key={label} className="border-t border-ink pt-4">
            <div
              aria-label={`${value ?? 0} ${label.toLowerCase()}`}
              className="flex text-[19vw] leading-none font-medium tracking-[-0.04em] tabular-nums sm:text-[10vw] xl:text-[9rem]"
            >
              {text.split("").map((char, i) => (
                // Key by position so each slot keeps its own animation state.
                <Digit key={i} char={char} />
              ))}
            </div>
            <div className="mt-4 text-xs uppercase tracking-[0.18em] text-ink/55">{label}</div>
          </div>
        );
      })}
    </div>
  );
}
