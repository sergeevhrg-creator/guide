import { createFileRoute } from "@tanstack/react-router";

import { MosaicPage } from "@/components/MosaicPage";

export const Route = createFileRoute("/week-of-silence")({
  head: () => ({
    meta: [
      { title: "Week of Silence — Madeira retreat" },
      {
        name: "description",
        content:
          "A quiet week on Madeira with a clear structure of silence, walks and personal questions. Separate from sightseeing tours.",
      },
      { property: "og:title", content: "Week of Silence — Madeira retreat" },
      {
        property: "og:description",
        content:
          "A separate quiet week on Madeira: silence blocks, one unhurried walk a day and one question to carry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <MosaicPage pageKey="silence" />,
});
