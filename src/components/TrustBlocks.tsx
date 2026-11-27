import type { Lang } from "@/lib/i18n/lang";
import {
  bookingSteps,
  bookingTitle,
  cruiseGuarantee,
  faqItems,
  faqJsonLd,
  faqTitle,
} from "@/lib/trust-content";

export function BookingSteps({ lang }: { lang: Lang }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-booking-steps>
      <h2 className="font-display text-3xl font-extrabold text-mosaic-deep">
        {bookingTitle[lang]}
      </h2>
      <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {bookingSteps.map((step, i) => (
          <li key={i} className="rounded-xl border border-border bg-card p-5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-mosaic-flower font-extrabold text-mosaic-deep">
              {i + 1}
            </span>
            <h3 className="mt-4 font-display text-lg font-extrabold text-mosaic-deep">
              {step.title[lang]}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.body[lang]}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function CruiseGuarantee({ lang }: { lang: Lang }) {
  return (
    <div
      className="mx-auto max-w-7xl rounded-2xl border-2 border-mosaic-flower bg-card p-6 sm:p-8"
      data-cruise-guarantee
    >
      <h2 className="font-display text-2xl font-extrabold text-mosaic-deep sm:text-3xl">
        {cruiseGuarantee.title[lang]}
      </h2>
      <ul className="mt-5 grid gap-3">
        {cruiseGuarantee.points.map((point, i) => (
          <li key={i} className="flex gap-3 leading-7">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-mosaic-flower" aria-hidden />
            <span>{point[lang]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Faq({ lang }: { lang: Lang }) {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" data-faq>
      <h2 className="font-display text-3xl font-extrabold text-mosaic-deep">{faqTitle[lang]}</h2>
      <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
        {faqItems.map((item, i) => (
          <details key={i} className="group p-5">
            <summary className="cursor-pointer list-none font-bold text-mosaic-deep marker:hidden">
              <span className="flex items-center justify-between gap-4">
                {item.q[lang]}
                <span className="text-mosaic-ocean transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 leading-7 text-muted-foreground">{item.a[lang]}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(lang)) }}
      />
    </div>
  );
}
