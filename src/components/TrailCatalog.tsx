import { useState } from "react";
import { ArrowRight, ExternalLink, Mountain, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Lang } from "@/lib/i18n/lang";
import {
  trails,
  trailBookingUrl,
  trailStatusUrl,
  statusCheckedAt,
  type Trail,
} from "@/lib/trail-content";

type Filter =
  | "all"
  | "easy"
  | "moderate"
  | "demanding"
  | "forest"
  | "peaks"
  | "waterfalls"
  | "coast"
  | "family"
  | "short"
  | "day";
const copy = {
  en: {
    eyebrow: "LEVADAS & MOUNTAINS",
    title: "Find your trail, then check the conditions",
    intro:
      "Eight places to start. Explore the full candidate catalogue below; none is offered as confirmed open until Pavel checks the official status, booking slot and weather for your date.",
    all: "All routes",
    easy: "Easy",
    moderate: "Moderate",
    demanding: "Demanding",
    forest: "Forest & levadas",
    peaks: "Peaks",
    waterfalls: "Waterfalls",
    coast: "Coast",
    family: "Family ideas",
    short: "Short · up to 4h",
    day: "Full-day ideas",
    more: "Explore all routes",
    less: "Show highlights",
    inquire: "Discuss this trail",
    check: "Status & slot are checked before confirmation",
    source: "Check IFCN status",
    book: "Check SIMplifica booking",
    expenses:
      "PR admission, meals and transport between route ends are not automatically included. Any ticket cost is confirmed separately after checking the current rate.",
    verified: "Reference status checked",
  },
  be: {
    eyebrow: "ЛЕВАДЫ І ГОРЫ",
    title: "Знайдзіце сваю сцежку — потым праверце ўмовы",
    intro:
      "Восем ідэй для пачатку. Поўны каталог ніжэй; адкрытасць маршруту пацвярджаецца толькі пасля праверкі статусу, слота і надвор’я на ваш дзень.",
    all: "Усе маршруты",
    easy: "Лёгкія",
    moderate: "Сярэднія",
    demanding: "Складаныя",
    forest: "Лес і левады",
    peaks: "Вяршыні",
    waterfalls: "Вадаспады",
    coast: "Узбярэжжа",
    family: "Для сям'і",
    short: "Да 4 гадзін",
    day: "На ўвесь дзень",
    more: "Усе маршруты",
    less: "Абраныя",
    inquire: "Абмеркаваць маршрут",
    check: "Статус і слот правяраюцца перад пацвярджэннем",
    source: "Праверыць IFCN",
    book: "Браніраванне SIMplifica",
    expenses:
      "Квіток PR, харчаванне і транспарт паміж канцамі маршруту не ўключаны аўтаматычна. Кошт квітка ўдакладняецца асобна.",
    verified: "Статус паводле крыніцы на",
  },
  uk: {
    eyebrow: "ЛЕВАДИ Й ГОРИ",
    title: "Оберіть маршрут — потім перевірте умови",
    intro:
      "Вісім ідей для початку. Повний каталог нижче; відкритість підтверджується тільки після перевірки статусу, слота й погоди на вашу дату.",
    all: "Усі маршрути",
    easy: "Легкі",
    moderate: "Середній",
    demanding: "Складний",
    forest: "Ліс і левади",
    peaks: "Вершини",
    waterfalls: "Водоспади",
    coast: "Узбережжя",
    family: "Для родини",
    short: "До 4 годин",
    day: "На весь день",
    more: "Усі маршрути",
    less: "Вибрані",
    inquire: "Обговорити маршрут",
    check: "Статус і слот перевіряються до підтвердження",
    source: "Перевірити IFCN",
    book: "Бронювання SIMplifica",
    expenses:
      "Квиток PR, харчування й транспорт між кінцями маршруту не включено автоматично. Вартість квитка уточнюється окремо.",
    verified: "Статус за джерелом на",
  },
  ru: {
    eyebrow: "ЛЕВАДЫ И ГОРЫ",
    title: "Найдите свою тропу — и проверьте условия",
    intro:
      "Восем идей для начала. Ниже — полный каталог кандидатов; открытие маршрута подтверждается только после проверки статуса, слота и погоды на вашу дату.",
    all: "Все маршруты",
    easy: "Лёгкие",
    moderate: "Средние",
    demanding: "Сложные",
    forest: "Лес и левады",
    peaks: "Вершины",
    waterfalls: "Водопады",
    coast: "Побережье",
    family: "С семьёй",
    short: "До 4 часов",
    day: "На полный день",
    more: "Все маршруты",
    less: "Избранные",
    inquire: "Обсудить маршрут",
    check: "Статус и слот проверяются перед подтверждением",
    source: "Проверить статус IFCN",
    book: "Бронирование SIMplifica",
    expenses:
      "Билет PR, питание и транспорт между концами маршрута не включены автоматически. Стоимость билета уточняется отдельно после проверки.",
    verified: "Статус по источнику на",
  },
} as const;
const filters: Filter[] = [
  "all",
  "easy",
  "moderate",
  "demanding",
  "forest",
  "peaks",
  "waterfalls",
  "coast",
  "family",
  "short",
  "day",
];
function matches(trail: Trail, filter: Filter) {
  if (filter === "all") return true;
  if (filter === "family") return !!trail.family;
  if (filter === "short") return !!trail.short;
  if (filter === "day")
    return (
      !trail.short && (trail.level === "demanding" || ["PR6", "PR10", "PR13"].includes(trail.code))
    );
  return trail.level === filter || trail.kind === filter;
}
export function TrailCatalog({
  lang,
  onInquire,
}: {
  lang: Lang;
  onInquire: (title: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const t = copy[lang];
  const shown = (expanded ? trails : trails.filter((route) => route.featured)).filter((route) =>
    matches(route, filter),
  );
  return (
    <section
      id="trails"
      className="scroll-mt-20 bg-mosaic-deep py-16 text-primary-foreground sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-extrabold tracking-widest text-mosaic-flower">{t.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold sm:text-5xl">
          {t.title}
        </h2>
        <p className="mt-5 max-w-3xl text-primary-foreground/80">{t.intro}</p>
        <p className="mt-4 text-sm font-semibold text-mosaic-flower">
          {t.check} · {t.verified} {statusCheckedAt}
        </p>
        {expanded && (
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={t.all}>
            {filters.map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={filter === key}
                onClick={() => setFilter(key)}
                className={`rounded-full border px-3 py-2 text-xs font-bold transition ${filter === key ? "border-mosaic-flower bg-mosaic-flower text-mosaic-deep" : "border-white/35 text-white hover:border-white"}`}
              >
                {t[key]}
              </button>
            ))}
          </div>
        )}
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((route) => (
            <article
              key={route.code}
              className="flex min-w-0 flex-col rounded-md bg-card p-5 text-foreground"
            >
              <span className="flex items-center gap-2 text-xs font-extrabold text-mosaic-ocean">
                {route.kind === "peaks" ? <Mountain size={16} /> : <Trees size={16} />} {route.code}{" "}
                · {t[route.level]}
              </span>
              <h3 className="mt-3 font-display text-xl font-extrabold text-mosaic-deep">
                {lang === "ru" ? route.nameRu : route.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{route.distance}</p>
              {route.note && (
                <p className="mt-3 text-sm leading-6 text-mosaic-roof">
                  {lang === "ru" ? route.noteRu : route.note}
                </p>
              )}
              <button
                type="button"
                onClick={() =>
                  onInquire(`${route.code} · ${lang === "ru" ? route.nameRu : route.name}`)
                }
                className="mt-auto inline-flex items-center gap-2 self-start pt-5 text-sm font-extrabold text-mosaic-ocean hover:underline"
              >
                {t.inquire}
                <ArrowRight size={16} />
              </button>
            </article>
          ))}
        </div>
        <Button
          type="button"
          onClick={() => {
            setExpanded(!expanded);
            setFilter("all");
          }}
          className="mt-7 bg-mosaic-flower font-extrabold text-mosaic-deep hover:bg-primary-foreground"
        >
          {expanded ? t.less : t.more}
        </Button>
        <div className="mt-8 border-t border-white/25 pt-6 text-sm leading-7 text-primary-foreground/85">
          <p>{t.expenses}</p>
          <div className="mt-3 flex flex-wrap gap-6">
            {[
              [trailStatusUrl, t.source],
              [trailBookingUrl, t.book],
            ].map(([url, label]) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold underline underline-offset-4"
              >
                {label}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
