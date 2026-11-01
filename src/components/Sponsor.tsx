import Image from "next/image";

export default function Sponsor() {
  return (
    <a
      href="https://yavqo.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 transition-opacity hover:opacity-70"
    >
      <span>Sponsored by:</span>
      <Image src="/yavqo-logo.png" alt="Yavqo" width={1524} height={702} className="-my-2 h-11 w-auto" />
    </a>
  );
}
