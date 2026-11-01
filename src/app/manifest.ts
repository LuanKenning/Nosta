import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Project Nosta — The Backrooms in Real Life",
    short_name: "Project Nosta",
    description: "The Backrooms built in real life by Luan Kenning. Final look revealed 10.10.2028, 13:00.",
    start_url: "/",
    display: "standalone",
    background_color: "#efede6",
    theme_color: "#efede6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
