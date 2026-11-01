export type Update = {
  /** ISO date, e.g. "2026-11-01" */
  date: string;
  title: string;
  body: string[];
};

// Newest first. Add new entries to the top of this list.
export const updates: Update[] = [
  {
    date: "2026-11-01",
    title: "The countdown is live",
    body: [
      "Project Nosta has a home on the web. The countdown on the front page runs to 10 October 2028, 13:00, the moment the final look of the Backrooms will be revealed.",
      "This page is where progress on the build will be posted until then.",
    ],
  },
];
