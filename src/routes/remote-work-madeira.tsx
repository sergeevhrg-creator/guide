import { createFileRoute } from "@tanstack/react-router";

import { MosaicPage } from "@/components/MosaicPage";

export const Route = createFileRoute("/remote-work-madeira")({
  head: () => ({
    meta: [
      { title: "Remote Work & Concierge Madeira" },
      {
        name: "description",
        content:
          "Housing, internet, work spots and networking for people working remotely from Madeira for weeks or a season.",
      },
      { property: "og:title", content: "Remote Work & Concierge Madeira" },
      {
        property: "og:description",
        content:
          "Practical help to live and work from Madeira: apartments, fibre, coworking and local community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <MosaicPage pageKey="remote" />,
});
