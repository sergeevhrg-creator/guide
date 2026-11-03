import { Link } from "@tanstack/react-router";
import { CONTACTS } from "@/lib/contacts";
import { useLang } from "@/lib/i18n/lang";

const privacy = {
  ru: {
    title: "Конфиденциальность",
    intro: "Здесь описано фактическое обращение с данными на сайте Madeira Mosaic.",
    sections: [
      "Контактная форма не отправляет и не сохраняет данные на сервере сайта. Она составляет сообщение и открывает выбранный мессенджер; отправку выполняете вы.",
      "Если вы отправляете сообщение, оно может содержать ваше имя, контакт и сведения, которые вы указали самостоятельно. Они используются только для ответа, обсуждения маршрута и возможного бронирования.",
      "Когда вы обращаетесь по поводу маршрута или возможного бронирования, обработка нужна, чтобы по вашему запросу обсудить условия до заключения договора (статья 6(1)(b) GDPR). Рекламные сообщения без отдельного добровольного согласия не отправляются.",
      "WhatsApp и Telegram являются внешними сервисами и обрабатывают данные по собственным правилам конфиденциальности. Перед отправкой сообщения вы покидаете сайт Madeira Mosaic.",
      "Данные переписки хранятся только пока это необходимо для ответа, согласования или бронирования, а также дольше, если этого требует применимый закон.",
      "Вы можете запросить доступ, исправление, удаление или ограничение обработки своих данных, а также воспользоваться правом на возражение и переносимость данных, когда эти права применимы. Вы также можете подать жалобу в португальскую CNPD.",
      `Оператор данных: Павел Сергеев, Madeira Mosaic, Мадейра, Португалия. Для вопросов о персональных данных используйте WhatsApp ${CONTACTS.whatsappNumber}.`,
    ],
  },
  en: {
    title: "Privacy",
    intro: "This notice describes how the Madeira Mosaic website actually handles information.",
    sections: [
      "The contact form does not send or store your data on the website’s own server. It prepares a message and opens your chosen messenger; you decide whether to send it.",
      "If you send the message, it may contain your name, contact details and information you provide voluntarily. It is used only to reply, discuss a route and consider a possible booking.",
      "When you contact us about a route or possible booking, processing is necessary to discuss the arrangements at your request before entering into a contract (Article 6(1)(b) GDPR). No marketing messages are sent without separate, freely given consent.",
      "WhatsApp and Telegram are external services and process data under their own privacy policies. You leave the Madeira Mosaic website before sending a message.",
      "Conversation data is kept only for as long as needed to reply, plan or arrange a booking, and longer only where applicable law requires it.",
      "You may request access, correction, deletion or restriction of your data and, where applicable, exercise your rights to object and data portability. You may also lodge a complaint with Portugal’s CNPD.",
      `Data controller: Pavel Sergeev, Madeira Mosaic, Madeira, Portugal. For personal-data questions, use WhatsApp ${CONTACTS.whatsappNumber}.`,
    ],
  },
  be: {
    title: "Канфідэнцыяльнасць",
    intro: "Тут апісана фактычная апрацоўка даных на сайце Madeira Mosaic.",
    sections: [
      "Кантактная форма не адпраўляе і не захоўвае даныя на серверы сайта. Яна складае паведамленне і адкрывае выбраны мэсенджар; адпраўку выконваеце вы.",
      "Калі вы адпраўляеце паведамленне, яно можа ўтрымліваць ваша імя, кантакт і звесткі, якія вы паведамілі добраахвотна. Яны выкарыстоўваюцца толькі для адказу, абмеркавання маршруту і магчымага браніравання.",
      "Калі вы звяртаецеся наконт маршруту або магчымага браніравання, апрацоўка патрэбна, каб па вашым запыце абмеркаваць умовы да заключэння дамовы (артыкул 6(1)(b) GDPR). Рэкламныя паведамленні без асобнай добраахвотнай згоды не адпраўляюцца.",
      "WhatsApp і Telegram — знешнія сэрвісы, якія апрацоўваюць даныя паводле ўласных палітык прыватнасці. Перад адпраўкай паведамлення вы пакідаеце сайт Madeira Mosaic.",
      "Даныя перапіскі захоўваюцца толькі столькі, колькі патрэбна для адказу, узгаднення або браніравання, а даўжэй — толькі калі гэтага патрабуе закон.",
      "Вы можаце запытаць доступ, выпраўленне, выдаленне або абмежаванне апрацоўкі даных, а таксама, калі гэта дастасавальна, скарыстацца правам на пярэчанне і пераноснасць даных. Вы таксама можаце падаць скаргу ў партугальскую CNPD.",
      `Аператар даных: Павел Сяргееў, Madeira Mosaic, Мадэйра, Партугалія. Па пытаннях персанальных даных звяртайцеся праз WhatsApp ${CONTACTS.whatsappNumber}.`,
    ],
  },
  uk: {
    title: "Конфіденційність",
    intro: "Тут описано фактичне поводження з даними на сайті Madeira Mosaic.",
    sections: [
      "Контактна форма не надсилає й не зберігає дані на сервері сайту. Вона складає повідомлення та відкриває вибраний месенджер; надсилання виконуєте ви.",
      "Якщо ви надсилаєте повідомлення, воно може містити ваше ім’я, контакт і відомості, які ви надали добровільно. Вони використовуються лише для відповіді, обговорення маршруту та можливого бронювання.",
      "Коли ви звертаєтеся щодо маршруту або можливого бронювання, обробка потрібна, щоб на ваш запит обговорити умови до укладення договору (стаття 6(1)(b) GDPR). Рекламні повідомлення без окремої добровільної згоди не надсилаються.",
      "WhatsApp і Telegram є зовнішніми сервісами та обробляють дані за власними політиками конфіденційності. Перед надсиланням повідомлення ви залишаєте сайт Madeira Mosaic.",
      "Дані листування зберігаються лише стільки, скільки потрібно для відповіді, погодження або бронювання, а довше — тільки якщо цього вимагає закон.",
      "Ви можете запросити доступ, виправлення, видалення або обмеження обробки даних, а також, коли це застосовно, скористатися правом на заперечення та перенесення даних. Ви також можете подати скаргу до португальської CNPD.",
      `Оператор даних: Павло Сергєєв, Madeira Mosaic, Мадейра, Португалія. Для питань про персональні дані використовуйте WhatsApp ${CONTACTS.whatsappNumber}.`,
    ],
  },
};

const privacyLinks = {
  ru: {
    whatsapp: "Политика конфиденциальности WhatsApp",
    telegram: "Политика конфиденциальности Telegram",
    cnpd: "Подать жалобу в CNPD",
  },
  en: {
    whatsapp: "WhatsApp Privacy Policy",
    telegram: "Telegram Privacy Policy",
    cnpd: "Lodge a complaint with the CNPD",
  },
  be: {
    whatsapp: "Палітыка прыватнасці WhatsApp",
    telegram: "Палітыка прыватнасці Telegram",
    cnpd: "Падаць скаргу ў CNPD",
  },
  uk: {
    whatsapp: "Політика конфіденційності WhatsApp",
    telegram: "Політика конфіденційності Telegram",
    cnpd: "Подати скаргу до CNPD",
  },
} as const;

const cookies = {
  ru: {
    title: "Cookies и локальное хранение",
    intro: "Сайт использует только необходимое локальное хранение для работы интерфейса.",
    sections: [
      "Сохраняются выбранный язык, решение об уведомлении, а также показ и закрытие подсказок и контактного окна.",
      "Язык, решение об уведомлении и отметка о предыдущем посещении хранятся до очистки данных сайта или смены версии настройки. Отметка о закрытой продающей подсказке действует до 7 дней; счётчик просмотров и отметка автопоказа контактного окна удаляются по окончании сессии браузера.",
      "Аналитика и маркетинговые трекеры сейчас не подключены. Согласие на будущие неопределённые инструменты заранее не запрашивается.",
      "Если необязательные инструменты появятся позже, сайт должен отдельно описать их назначение и запросить новое согласие до запуска.",
      "Проверить текущий статус можно через ссылку «Настройки cookies» внизу сайта.",
    ],
  },
  en: {
    title: "Cookies and local storage",
    intro: "The site uses only necessary local storage for interface functions.",
    sections: [
      "It stores your selected language, this notice decision, and whether interface hints and the contact prompt were shown or dismissed.",
      "The language, notice decision and previous-visit marker remain until you clear the site data or the settings version changes. A dismissed sales prompt is remembered for up to 7 days; page-view and contact auto-open markers are removed when the browser session ends.",
      "Analytics and marketing trackers are not currently connected. The site does not request advance consent for undefined future tools.",
      "If optional tools are added later, the site must describe their purpose and request new consent before they run.",
      "You can review the current status through the Cookie settings link in the footer.",
    ],
  },
  be: {
    title: "Cookies і лакальнае захоўванне",
    intro: "Сайт выкарыстоўвае толькі неабходнае лакальнае захоўванне для працы інтэрфейсу.",
    sections: [
      "Захоўваюцца выбраная мова, рашэнне пра паведамленне, а таксама паказ і закрыццё падказак і кантактнага акна.",
      "Мова, рашэнне пра паведамленне і адзнака папярэдняга наведвання захоўваюцца да ачысткі даных сайта або змены версіі налад. Адзнака пра закрытую падказку продажу дзейнічае да 7 дзён; лічыльнік праглядаў і адзнака аўтапаказу кантактнага акна выдаляюцца пасля завяршэння сесіі браўзера.",
      "Аналітыка і маркетынгавыя трэкеры цяпер не падключаны. Згода на будучыя нявызначаныя інструменты загадзя не запытваецца.",
      "Калі неабавязковыя інструменты з’явяцца пазней, сайт павінен асобна апісаць іх прызначэнне і запытаць новую згоду да запуску.",
      "Праверыць бягучы статус можна праз спасылку «Налады cookies» ўнізе сайта.",
    ],
  },
  uk: {
    title: "Cookies і локальне зберігання",
    intro: "Сайт використовує лише необхідне локальне зберігання для роботи інтерфейсу.",
    sections: [
      "Зберігаються вибрана мова, рішення щодо повідомлення, а також показ і закриття підказок та контактного вікна.",
      "Мова, рішення щодо повідомлення та позначка попереднього відвідування зберігаються до очищення даних сайту або зміни версії налаштувань. Позначка про закриту підказку продажу діє до 7 днів; лічильник переглядів і позначка автопоказу контактного вікна видаляються після завершення сесії браузера.",
      "Аналітика й маркетингові трекери зараз не підключені. Згода на майбутні невизначені інструменти наперед не запитується.",
      "Якщо необов’язкові інструменти з’являться пізніше, сайт має окремо описати їх призначення та запросити нову згоду до запуску.",
      "Перевірити поточний статус можна через посилання «Налаштування cookies» внизу сайту.",
    ],
  },
};

export function LegalPage({ kind }: { kind: "privacy" | "cookies" }) {
  const { lang } = useLang();
  const t = (kind === "privacy" ? privacy : cookies)[lang];
  const links = privacyLinks[lang];
  return (
    <main className="min-h-[70vh] bg-background px-4 py-12 sm:px-6 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <Link to="/" search={{ lang }} className="text-sm font-bold text-mosaic-ocean">
          ← Madeira Mosaic
        </Link>
        <h1 className="mt-6 break-words font-display text-3xl font-extrabold text-mosaic-deep sm:text-4xl">
          {t.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{t.intro}</p>
        <div className="mt-8 space-y-5">
          {t.sections.map((section) => (
            <p key={section} className="leading-7 text-foreground/80">
              {section}
            </p>
          ))}
        </div>
        {kind === "privacy" ? (
          <ul className="mt-8 grid gap-3 text-sm font-bold text-mosaic-ocean">
            <li>
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                {links.whatsapp}
              </a>
            </li>
            <li>
              <a
                href="https://telegram.org/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                {links.telegram}
              </a>
            </li>
            <li>
              <a
                href="https://www.cnpd.pt/cidadaos/participacoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                {links.cnpd}
              </a>
            </li>
          </ul>
        ) : null}
      </article>
    </main>
  );
}
