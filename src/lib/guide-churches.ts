import type { GuideTab, LocalizedText } from "@/lib/guide-content";

const l = (en: string, be: string, uk: string, ru: string): LocalizedText => ({ en, be, uk, ru });
const checkedOn = "2026-11-23";

/**
 * "Churches & shrines of Madeira" guide section.
 * Facts come from the sources linked on each card (visitmadeira.com, visit.funchal.pt,
 * Elucidário Madeirense, local press). Local legends told in Machico are always
 * labelled as legends, next to the documented dates.
 */
export const churchesTab: GuideTab = {
  id: "churches",
  title: l(
    "Churches & shrines of Madeira",
    "Храмы і святыні Мадэйры",
    "Храми та святині Мадейри",
    "Храмы и святыни Мадейры",
  ),
  intro: l(
    "Six centuries of faith on one island: the first chapel of 1425, the cathedral of Funchal, a crucifix that came back from the sea and processions by torchlight and by boat. Places, stories and feast days, from a guide who serves in Madeira’s oldest chapel.",
    "Шэсць стагоддзяў веры на адным востраве: першая капліца 1425 года, сабор Фуншала, укрыжаванне, якое вярнулася з мора, працэсіі з паходнямі і на лодках. Месцы, гісторыі і святы ад гіда, які служыць у найстарэйшай капліцы Мадэйры.",
    "Шість століть віри на одному острові: перша каплиця 1425 року, собор Фуншала, розп’яття, що повернулося з моря, процесії зі смолоскипами й на човнах. Місця, історії та свята від гіда, який служить у найстарішій каплиці Мадейри.",
    "Шесть веков веры на одном острове: первая часовня 1425 года, собор Фуншала, распятие, вернувшееся из моря, крестные ходы с факелами и на лодках. Места, истории и праздники от гида, который служит в старейшей часовне Мадейры.",
  ),
  cards: [
    {
      id: "churches-santa-catarina",
      imageId: "santa-catarina-interior",
      name: l(
        "Chapel of Santa Catarina",
        "Капліца святой Кацярыны (Santa Catarina)",
        "Каплиця святої Катерини (Santa Catarina)",
        "Часовня святой Екатерины (Santa Catarina)",
      ),
      area: l(
        "Funchal, Santa Catarina Park",
        "Фуншал, парк Santa Catarina",
        "Фуншал, парк Santa Catarina",
        "Фуншал, парк Santa Catarina",
      ),
      description: l(
        "Founded in 1425 by Constança Rodrigues de Almeida, wife of the discoverer João Gonçalves Zarco, and dedicated to Saint Catherine of Alexandria. It is regarded as the first church built on Madeira and the oldest religious monument in Funchal. Look for the Mannerist portal, the porch on red-stone columns, the Cross of the Order of Christ, the carved holy-water font from the early 16th century and the small bell gable.",
        "Заснавана ў 1425 годзе Канстансай Радрыгеш дэ Алмейда, жонкай першаадкрывальніка Жуана Гансалвіша Зарку, і прысвечана святой Кацярыне Александрыйскай. Лічыцца першым храмам Мадэйры і найстарэйшым рэлігійным помнікам Фуншала. Звярніце ўвагу на маньерысцкі партал, галерэю на калонах з чырвонага каменю, крыж Ордэна Хрыста, разную чашу для святой вады пачатку XVI стагоддзя і маленькую званіцу.",
        "Заснована 1425 року Констансою Родрігеш де Алмейда, дружиною першовідкривача Жуана Гонсалвіша Зарку, і присвячена святій Катерині Олександрійській. Вважається першим храмом Мадейри та найстарішою релігійною пам’яткою Фуншала. Зверніть увагу на маньєристський портал, галерею на колонах із червоного каменю, хрест Ордену Христа, різьблену чашу для святої води початку XVI століття й маленьку дзвіницю.",
        "Основана в 1425 году Констансой Родригеш де Алмейда, женой первооткрывателя Жуана Гонсалвиша Зарку, и посвящена святой Екатерине Александрийской. Считается первым храмом Мадейры и старейшим религиозным памятником Фуншала. Обратите внимание на маньеристский портал, галерею на колоннах из красного камня, крест Ордена Христа, резную чашу для святой воды начала XVI века и маленькую звонницу.",
      ),
      benefit: l(
        "The chapel belongs to the Catholic Church; by agreement, the Orthodox parish of St Spyridon (on Madeira since 2006) celebrates services here on Saturdays and Sundays. Pavel, the guide of Madeira Mosaic, is the priest of this community, so on a private tour he can open the chapel and show it from the inside.",
        "Капліца належыць Каталіцкай Царкве; па дамоўленасці праваслаўны прыход святога Спірыдона (на Мадэйры з 2006 года) служыць тут па суботах і нядзелях. Павел, гід Madeira Mosaic, — святар гэтай абшчыны, таму на індывідуальнай экскурсіі ён можа адчыніць капліцу і паказаць яе знутры.",
        "Каплиця належить Католицькій Церкві; за домовленістю православна парафія святителя Спиридона (на Мадейрі з 2006 року) служить тут щосуботи й щонеділі. Павло, гід Madeira Mosaic, — священник цієї громади, тож на індивідуальній екскурсії він може відчинити каплицю й показати її зсередини.",
        "Часовня принадлежит Католической Церкви; по договорённости православный приход святителя Спиридона Тримифунтского (на Мадейре с 2006 года) служит здесь по субботам и воскресеньям. Павел, гид Madeira Mosaic, — священник этой общины, поэтому на индивидуальной экскурсии он может открыть часовню и показать её изнутри.",
      ),
      fit: l(
        "Orthodox Christians looking for a church on Madeira, history lovers and anyone starting a Funchal walk: the park above the port is a natural first stop.",
        "Праваслаўным, якія шукаюць храм на Мадэйры, аматарам гісторыі і ўсім, хто пачынае прагулку па Фуншале: парк над портам — зручная першая кропка.",
        "Православним, які шукають храм на Мадейрі, шанувальникам історії та всім, хто починає прогулянку Фуншалом: парк над портом — зручна перша зупинка.",
        "Православным, которые ищут храм на Мадейре, любителям истории и всем, кто начинает прогулку по Фуншалу: парк над портом — удобная первая точка.",
      ),
      practical: l(
        "Usually seen from the outside; inside by arrangement with Pavel. Orthodox services in Church Slavonic and English: current times on orthodoxmadeira.com and the parish WhatsApp channel.",
        "Звычайна яе бачаць толькі звонку; унутр — па дамоўленасці з Паўлам. Праваслаўныя богаслужэнні на царкоўнаславянскай і англійскай: актуальны расклад на orthodoxmadeira.com і ў WhatsApp-канале прыхода.",
        "Зазвичай її бачать лише ззовні; всередину — за домовленістю з Павлом. Православні богослужіння церковнослов’янською та англійською: актуальний розклад на orthodoxmadeira.com і в WhatsApp-каналі парафії.",
        "Обычно её видят только снаружи; внутрь — по договорённости с Павлом. Православные богослужения на церковнославянском и английском: актуальное расписание на orthodoxmadeira.com и в WhatsApp-канале прихода.",
      ),
      source: {
        url: "https://visitmadeira.com/en/what-to-do/experiencing-the-city-of-funchal/exploring-the-city/funchal-churches/chapel-of-santa-catarina/",
        checkedOn,
      },
    },
    {
      id: "churches-se",
      name: l(
        "Funchal Cathedral (Sé)",
        "Сабор Фуншала (Sé)",
        "Собор Фуншала (Sé)",
        "Кафедральный собор Фуншала (Sé)",
      ),
      area: l(
        "Funchal, historic centre",
        "Фуншал, гістарычны цэнтр",
        "Фуншал, історичний центр",
        "Фуншал, исторический центр",
      ),
      description: l(
        "Cathedral of Our Lady of the Assumption, built in the late 15th century and one of the oldest buildings on the island. It became a cathedral when the diocese of Funchal was created in 1514 — at the time the largest diocese in the world, reaching as far as Brazil and Asia.",
        "Сабор Унебаўзяцця Багародзіцы, пабудаваны ў канцы XV стагоддзя, — адзін са старэйшых будынкаў вострава. Ён стаў кафедральным у 1514 годзе, калі была створана Фуншальская епархія, тады найбуйнейшая ў свеце.",
        "Собор Успіння Богородиці, збудований наприкінці XV століття, — одна з найстаріших будівель острова. Він став кафедральним 1514 року, коли створили Фуншальську єпархію, тоді найбільшу у світі.",
        "Собор Успения Богородицы, построенный в конце XV века, — одно из старейших зданий острова. Он стал кафедральным в 1514 году, когда была создана Фуншальская епархия — в то время крупнейшая в мире.",
      ),
      benefit: l(
        "A carved cedar ceiling inlaid with ivory and gold and Flemish paintings inside. This is also where the crucifix of Machico was kept for ten years after the 1803 flood — see the Senhor dos Milagres story below.",
        "Унутры — разная столь з мясцовага кедра з інкрустацыяй косцю і золатам і фламандскія карціны. Менавіта тут дзесяць гадоў пасля паводкі 1803 года захоўвалася ўкрыжаванне з Машыку — гл. гісторыю Senhor dos Milagres ніжэй.",
        "Усередині — різьблена стеля з місцевого кедра з інкрустацією слоновою кісткою й золотом і фламандський живопис. Саме тут десять років після повені 1803 року зберігалося розп’яття з Машику — див. історію Senhor dos Milagres нижче.",
        "Внутри — резной потолок из местного кедра с инкрустацией слоновой костью и золотом и фламандская живопись. Именно здесь десять лет после наводнения 1803 года хранилось распятие из Машику — см. историю Senhor dos Milagres ниже.",
      ),
      fit: l(
        "Everyone visiting Funchal; easy to combine with the market, the Old Town and Santa Catarina on foot.",
        "Усім, хто ў Фуншале; лёгка аб’яднаць пешшу з рынкам, Старым горадам і Santa Catarina.",
        "Усім, хто у Фуншалі; легко поєднати пішки з ринком, Старим містом і Santa Catarina.",
        "Всем, кто в Фуншале; легко объединить пешком с рынком, Старым городом и Santa Catarina.",
      ),
      practical: l(
        "An active cathedral: dress modestly and avoid walking around during Mass. Opening hours change — check before you go.",
        "Дзейны сабор: сціплае адзенне, не хадзіце па храме падчас імшы. Час працы мяняецца — праверце перад візітам.",
        "Діючий собор: скромний одяг, не ходіть храмом під час меси. Години відкриття змінюються — перевірте перед візитом.",
        "Действующий собор: скромная одежда, не ходите по храму во время мессы. Часы работы меняются — проверьте перед визитом.",
      ),
      source: { url: "https://www.catedraldofunchal.com/", checkedOn },
    },
    {
      id: "churches-monte",
      name: l(
        "Church of Our Lady of Monte",
        "Царква Маці Божай дэ Монтэ",
        "Церква Богоматері Монте",
        "Церковь Богоматери Монте",
      ),
      area: l(
        "Monte, above Funchal",
        "Монтэ, над Фуншалам",
        "Монте, над Фуншалом",
        "Монте, над Фуншалом",
      ),
      description: l(
        "The most important pilgrimage church on Madeira, high above Funchal, reached by a steep stairway. It houses the tomb of the last Austrian emperor, Blessed Charles I, who died in exile on Madeira.",
        "Галоўная паломніцкая царква Мадэйры высока над Фуншалам, да яе вядзе стромкая лесвіца. Тут пахаваны апошні аўстрыйскі імператар, блажэнны Карл I, які памёр у выгнанні на Мадэйры.",
        "Головна паломницька церква Мадейри високо над Фуншалом, до неї ведуть круті сходи. Тут похований останній австрійський імператор, блаженний Карл I, який помер у вигнанні на Мадейрі.",
        "Главная паломническая церковь Мадейры высоко над Фуншалом, к ней ведёт крутая лестница. Здесь похоронен последний австрийский император, блаженный Карл I, умерший в изгнании на Мадейре.",
      ),
      benefit: l(
        "Every August, around the feast of the Assumption, pilgrims climb to Monte for the island’s biggest Marian feast. The rest of the year it is a quiet place with the best view over the bay of Funchal.",
        "Кожны жнівень, на свята Унебаўзяцця, паломнікі падымаюцца на Монтэ на найбуйнейшае на востраве богародзіцкае свята. У астатні час — ціхае месца з лепшым выглядам на бухту Фуншала.",
        "Щосерпня, на свято Успіння, паломники піднімаються на Монте на найбільше на острові богородичне свято. Решту року це тихе місце з найкращим видом на затоку Фуншала.",
        "Каждый август, на праздник Успения, паломники поднимаются на Монте на самый большой богородичный праздник острова. В остальное время — тихое место с лучшим видом на бухту Фуншала.",
      ),
      fit: l(
        "Pilgrims, families and anyone combining a church visit with the Monte gardens or the famous wicker toboggan ride down.",
        "Паломнікам, сем’ям і тым, хто аб’ядноўвае храм з садамі Монтэ або спускам на славутых плеценых санях.",
        "Паломникам, родинам і тим, хто поєднує храм із садами Монте або спуском на відомих плетених санях.",
        "Паломникам, семьям и тем, кто совмещает храм с садами Монте или спуском на знаменитых плетёных санях.",
      ),
      practical: l(
        "Reached by car, bus or cable car from Funchal; the stairway is steep. The August feast draws large crowds — come early.",
        "Даехаць можна на машыне, аўтобусе або канатнай дарозе з Фуншала; лесвіца стромкая. На жнівеньскае свята — шмат людзей, прыязджайце раней.",
        "Дістатися можна автомобілем, автобусом або канатною дорогою з Фуншала; сходи круті. На серпневе свято — натовпи, приїжджайте раніше.",
        "Добраться можно на машине, автобусе или канатной дороге из Фуншала; лестница крутая. На августовский праздник — много людей, приезжайте заранее.",
      ),
      source: {
        url: "https://www.visitmadeira.com/en/what-to-do/culture-passionates/heritage/churches-and-chapels/south-coast/",
        checkedOn,
      },
    },
    {
      id: "churches-socorro",
      name: l(
        "Socorro Church (São Tiago)",
        "Царква Сакору (São Tiago)",
        "Церква Сокору (São Tiago)",
        "Церковь Сокору (São Tiago)",
      ),
      area: l(
        "Funchal, Old Town",
        "Фуншал, Стары горад",
        "Фуншал, Старе місто",
        "Фуншал, Старый город",
      ),
      description: l(
        "A Baroque church completed in 1768 at the edge of the Old Town. It keeps the memory of the vow the people of Funchal made to Saint James in 1523, when plague swept the island; Saint James the Less remains the patron of the city.",
        "Барочная царква, завершаная ў 1768 годзе на ўскраіне Старога горада. Яна захоўвае памяць пра зарок, які жыхары Фуншала далі святому Якаву ў 1523 годзе, калі востраў апанавала чума; апостал Якаў — апякун горада.",
        "Барокова церква, завершена 1768 року на краю Старого міста. Вона зберігає пам’ять про обітницю, яку мешканці Фуншала дали святому Якову 1523 року, коли острів охопила чума; апостол Яків — покровитель міста.",
        "Барочная церковь, завершённая в 1768 году на краю Старого города. Она хранит память об обете, который жители Фуншала дали святому Иакову в 1523 году, когда остров охватила чума; апостол Иаков — покровитель города.",
      ),
      benefit: l(
        "A short walk from the cable car and the Old Town restaurants; a good place to tell how the island prayed through plague, floods and earthquakes.",
        "Некалькі хвілін пешшу ад канатнай дарогі і рэстаранаў Старога горада; добрае месца, каб расказаць, як востраў маліўся ў час чумы, паводак і землятрусаў.",
        "Кілька хвилин пішки від канатної дороги й ресторанів Старого міста; добре місце, щоб розповісти, як острів молився під час чуми, повеней і землетрусів.",
        "Несколько минут пешком от канатной дороги и ресторанов Старого города; хорошее место, чтобы рассказать, как остров молился во время чумы, наводнений и землетрясений.",
      ),
      fit: l(
        "Walkers exploring the Old Town and travellers interested in local history.",
        "Тым, хто гуляе па Старым горадзе, і аматарам мясцовай гісторыі.",
        "Тим, хто гуляє Старим містом, і шанувальникам місцевої історії.",
        "Тем, кто гуляет по Старому городу, и любителям местной истории.",
      ),
      practical: l(
        "Often open only around service times; check before visiting the interior.",
        "Часта адчынена толькі каля часу службаў; праверце, калі хочаце ўвайсці.",
        "Часто відчинена лише біля часу служб; перевірте, якщо хочете зайти.",
        "Часто открыта только около времени служб; проверьте, если хотите зайти внутрь.",
      ),
      source: {
        url: "https://visit.funchal.pt/item/nossa-senhora-do-socorro-church/?lang=en",
        checkedOn,
      },
    },
    {
      id: "churches-milagres",
      imageId: "machico",
      name: l(
        "Senhor dos Milagres — the Lord of Miracles chapel",
        "Senhor dos Milagres — капліца Госпада Цудаў",
        "Senhor dos Milagres — каплиця Господа Чудес",
        "Senhor dos Milagres — часовня Господа Чудес",
      ),
      area: l("Machico", "Машыку", "Машику", "Машику"),
      description: l(
        "The chapel stands where, by tradition, the first Mass on Madeira was said in 1419. On 9 October 1803 a great flood destroyed it and swept the crucifix out to sea. Three days later a ship heading for Funchal found it and handed it to the cathedral, where it stayed until 15 April 1813, when it was solemnly returned to the rebuilt chapel in Machico.",
        "Капліца стаіць там, дзе, паводле традыцыі, у 1419 годзе адслужылі першую імшу на Мадэйры. 9 кастрычніка 1803 года вялікая паводка разбурыла яе і знесла ўкрыжаванне ў мора. Праз тры дні яго знайшоў карабель, што ішоў у Фуншал, і перадаў у сабор; там яно заставалася да 15 красавіка 1813 года, калі яго ўрачыста вярнулі ў адноўленую капліцу ў Машыку.",
        "Каплиця стоїть там, де, за переказом, 1419 року відслужили першу месу на Мадейрі. 9 жовтня 1803 року велика повінь зруйнувала її та віднесла розп’яття в море. Через три дні його знайшов корабель, що йшов до Фуншала, і передав до собору; там воно залишалося до 15 квітня 1813 року, коли його урочисто повернули до відновленої каплиці в Машику.",
        "Часовня стоит там, где, по преданию, в 1419 году отслужили первую мессу на Мадейре. 9 октября 1803 года великое наводнение разрушило её и унесло распятие в море. Через три дня его нашёл корабль, шедший в Фуншал, и передал в собор; там оно оставалось до 15 апреля 1813 года, когда его торжественно вернули в восстановленную часовню в Машику.",
      ),
      benefit: l(
        "The legend told in Machico: the sailors wanted to sail away with the cross, but their ship would not move — neither sails nor oars helped — until they decided to give it to the bishop; then the ship sailed off easily. Hence the name, the Lord of Miracles. When the bishop refused to return the cross, the people of Machico rowed to Caniço, walked to Funchal by night, took the crucifix from the cathedral and carried it home by sea, where it was welcomed with a feast.",
        "Паданне, якое расказваюць у Машыку: маракі хацелі адплыць з крыжам, але карабель стаяў як укапаны — не дапамагалі ні ветразі, ні вёслы, — пакуль яны не вырашылі аддаць яго біскупу; тады карабель лёгка адплыў. Адсюль імя — Госпад Цудаў. Калі біскуп адмовіўся вярнуць крыж, машыкаўцы на лодках дабраліся да Канісу, уначы пешшу дайшлі да Фуншала, забралі ўкрыжаванне з сабора і морам прывезлі дадому, дзе яго сустрэлі святам.",
        "Переказ, який розповідають у Машику: моряки хотіли відплисти з хрестом, але корабель стояв як укопаний — не допомагали ні вітрила, ні весла, — доки вони не вирішили віддати його єпископу; тоді корабель легко відплив. Звідси ім’я — Господь Чудес. Коли єпископ відмовився повернути хрест, машиківці на човнах дісталися Канісу, вночі пішки дійшли до Фуншала, забрали розп’яття із собору й морем привезли додому, де його зустріли святом.",
        "Предание, которое рассказывают в Машику: моряки хотели уплыть с крестом, но корабль стоял как вкопанный — не помогали ни паруса, ни вёсла, — пока они не решили отдать его епископу; тогда корабль легко отплыл. Отсюда имя — Господь Чудес. Когда епископ отказался вернуть крест, машиковцы на лодках доплыли до Канису, ночью пешком дошли до Фуншала, забрали распятие из собора и морем привезли домой, где его встретили праздником.",
      ),
      fit: l(
        "Pilgrims and anyone who wants to see a living island tradition rather than a museum; Machico is also where Pavel lives.",
        "Паломнікам і ўсім, хто хоча ўбачыць жывую астраўную традыцыю, а не музей; у Машыку жыве і Павел.",
        "Паломникам і всім, хто хоче побачити живу острівну традицію, а не музей; у Машику живе й Павло.",
        "Паломникам и всем, кто хочет увидеть живую традицию острова, а не музей; в Машику живёт и Павел.",
      ),
      practical: l(
        "Feast on 8–9 October. On the 8th pilgrims walk from all over the island (an organised walk leaves Funchal in the morning); at night fishermen carry the image with torches from the chapel through the town to the main church, followed by Mass and a street festival. Visitors may take a candle and walk with the procession. On the 9th the image returns to the chapel. Times vary each year.",
        "Свята 8–9 кастрычніка. 8-га паломнікі ідуць пешшу з усяго вострава (арганізаваны пераход выходзіць з Фуншала раніцай); увечары рыбакі з паходнямі нясуць вобраз ад капліцы праз горад да галоўнай царквы, потым імша і народнае свята. Госці могуць узяць свечку і прайсці з працэсіяй. 9-га вобраз вяртаецца ў капліцу. Час мяняецца кожны год.",
        "Свято 8–9 жовтня. 8-го паломники йдуть пішки з усього острова (організований перехід виходить із Фуншала зранку); увечері рибалки зі смолоскипами несуть образ від каплиці через місто до головної церкви, далі меса й народне свято. Гості можуть узяти свічку й пройти з процесією. 9-го образ повертається до каплиці. Час змінюється щороку.",
        "Праздник 8–9 октября. 8-го паломники идут пешком со всего острова (организованный переход выходит из Фуншала утром); вечером рыбаки с факелами несут образ от часовни через город к главной церкви, затем месса и народный праздник. Гости могут взять свечу и пройти с процессией. 9-го образ возвращается в часовню. Время меняется каждый год.",
      ),
      source: {
        url: "https://visitmadeira.com/en/where-to-go/madeira/east-coast/machico/miracles-chapel/",
        checkedOn,
      },
    },
    {
      id: "churches-machico-matriz",
      name: l(
        "Machico Parish Church (Nossa Senhora da Conceição)",
        "Галоўная царква Машыку (Nossa Senhora da Conceição)",
        "Головна церква Машику (Nossa Senhora da Conceição)",
        "Главная церковь Машику (Nossa Senhora da Conceição)",
      ),
      area: l("Machico", "Машыку", "Машику", "Машику"),
      description: l(
        "Built at the end of the 15th century, with Gothic and Manueline features, in the town where the discovery of Madeira began. King Manuel I gave the church the marble for the columns of its portal; it is classified as a monument of public interest.",
        "Пабудавана ў канцы XV стагоддзя, з гатычнымі і мануэлінскімі рысамі, у горадзе, адкуль пачалося адкрыццё Мадэйры. Кароль Мануэл I падараваў царкве мармур для калон партала; яна мае статус помніка грамадскага значэння.",
        "Збудована наприкінці XV століття, з готичними й мануелінськими рисами, у місті, звідки почалося відкриття Мадейри. Король Мануел I подарував церкві мармур для колон порталу; вона має статус пам’ятки суспільного значення.",
        "Построена в конце XV века, с готическими и мануэлинскими чертами, в городе, откуда началось открытие Мадейры. Король Мануэл I подарил церкви мрамор для колонн портала; она имеет статус памятника общественного значения.",
      ),
      benefit: l(
        "The end point of the torchlight procession of the Lord of Miracles on 8 October; on other days a quiet church a few steps from Machico’s beach and bay.",
        "Канцавы пункт працэсіі з паходнямі 8 кастрычніка; у іншыя дні — ціхая царква за некалькі крокаў ад пляжу і бухты Машыку.",
        "Кінцевий пункт процесії зі смолоскипами 8 жовтня; в інші дні — тиха церква за кілька кроків від пляжу й затоки Машику.",
        "Конечная точка факельного крестного хода 8 октября; в остальные дни — тихая церковь в нескольких шагах от пляжа и бухты Машику.",
      ),
      fit: l(
        "Travellers on the east of the island, especially on the way to São Lourenço.",
        "Тым, хто едзе на ўсход вострава, асабліва па дарозе на São Lourenço.",
        "Тим, хто їде на схід острова, особливо дорогою до São Lourenço.",
        "Тем, кто едет на восток острова, особенно по пути на São Lourenço.",
      ),
      practical: l(
        "Usually open during the day; easy to combine with the Lord of Miracles chapel across the river.",
        "Звычайна адчынена днём; лёгка аб’яднаць з капліцай Госпада Цудаў за ракой.",
        "Зазвичай відчинена вдень; легко поєднати з каплицею Господа Чудес за річкою.",
        "Обычно открыта днём; легко совместить с часовней Господа Чудес за рекой.",
      ),
      source: {
        url: "https://visitmadeira.com/en/where-to-go/madeira/east-coast/machico/nossa-senhora-da-conceicao-church/",
        checkedOn,
      },
    },
    {
      id: "churches-canical-piedade",
      imageId: "sao-lourenco",
      name: l(
        "Chapel of Nossa Senhora da Piedade and the sea procession",
        "Капліца Nossa Senhora da Piedade і марскі хрэсны ход",
        "Каплиця Nossa Senhora da Piedade і морський хресний хід",
        "Часовня Nossa Senhora da Piedade и морской крестный ход",
      ),
      area: l("Caniçal, Machico", "Канісал, Машыку", "Канісал, Машику", "Канисал, Машику"),
      description: l(
        "A small chapel on a hill above the sea between Prainha beach and the Quinta do Lorde marina, visible to ships from far away. By local tradition, fishermen caught in a storm promised to build it if Our Lady saved them.",
        "Невялікая капліца на ўзгорку над морам паміж пляжам Прайнья і марынай Quinta do Lorde, яе бачна з караблёў здалёк. Паводле мясцовага падання, рыбакі, якія трапілі ў шторм, паабяцалі пабудаваць яе, калі Багародзіца іх выратуе.",
        "Невелика каплиця на пагорбі над морем між пляжем Праїнья і мариною Quinta do Lorde, її видно з кораблів здалеку. За місцевим переказом, рибалки, що потрапили в шторм, пообіцяли збудувати її, якщо Богородиця їх урятує.",
        "Небольшая часовня на холме над морем между пляжем Праинья и мариной Quinta do Lorde, её видно с кораблей издалека. По местному преданию, рыбаки, попавшие в шторм, пообещали построить её, если Богородица их спасёт.",
      ),
      benefit: l(
        "On the third weekend of September Caniçal holds one of Madeira’s most unusual feasts: on Saturday fishing boats carry the image by sea to the parish church, and on Sunday, after Mass, dozens of boats escort it back to the chapel.",
        "У трэція выхадныя верасня ў Канісале адбываецца адно з самых незвычайных свят Мадэйры: у суботу рыбацкія лодкі вязуць вобраз морам у прыходскую царкву, а ў нядзелю пасля імшы дзясяткі лодак суправаджаюць яго назад да капліцы.",
        "У треті вихідні вересня в Канісалі відбувається одне з найнезвичайніших свят Мадейри: у суботу рибальські човни везуть образ морем до парафіяльної церкви, а в неділю після меси десятки човнів супроводжують його назад до каплиці.",
        "В третьи выходные сентября в Канисале проходит один из самых необычных праздников Мадейры: в субботу рыбацкие лодки везут образ морем в приходскую церковь, а в воскресенье после мессы десятки лодок сопровождают его обратно к часовне.",
      ),
      fit: l(
        "Travellers on the São Lourenço side of the island and anyone curious about fishing traditions.",
        "Тым, хто на баку São Lourenço, і ўсім, каму цікавыя рыбацкія традыцыі.",
        "Тим, хто на боці São Lourenço, і всім, кому цікаві рибальські традиції.",
        "Тем, кто на стороне São Lourenço, и всем, кому интересны рыбацкие традиции.",
      ),
      practical: l(
        "The hill path is short but steep. During the feast the village is crowded; the procession by sea starts in the afternoon.",
        "Сцежка на ўзгорак кароткая, але стромкая. На свята ў пасёлку шмат людзей; марская працэсія пачынаецца пасля поўдня.",
        "Стежка на пагорб коротка, але крута. На свято в селищі багато людей; морська процесія починається після полудня.",
        "Тропа на холм короткая, но крутая. В праздник в посёлке многолюдно; морская процессия начинается после полудня.",
      ),
      source: {
        url: "https://cultura.madeira.gov.pt/en/works,-artists-and-collections/1213-immaterial-cultural-heritage-madeira-festivals-and-pilgrimages.html",
        checkedOn,
      },
    },
    {
      id: "churches-santa-cruz",
      name: l(
        "São Salvador Church",
        "Царква São Salvador",
        "Церква São Salvador",
        "Церковь São Salvador",
      ),
      area: l("Santa Cruz", "Санта-Круш", "Санта-Круш", "Санта-Круш"),
      description: l(
        "The parish church of Santa Cruz, begun in the mid-15th century and completed in 1517, modelled on Funchal Cathedral. Its Gothic-Manueline interior with a ribbed vault is considered one of the most beautiful on the island.",
        "Прыходская царква Санта-Круш, пачатая ў сярэдзіне XV стагоддзя і завершаная ў 1517 годзе па ўзоры сабора Фуншала. Яе гатычна-мануэлінскі інтэр’ер з нервюрным скляпеннем лічыцца адным з самых прыгожых на востраве.",
        "Парафіяльна церква Санта-Круша, розпочата в середині XV століття й завершена 1517 року за зразком собору Фуншала. Її готично-мануелінський інтер’єр із нервюрним склепінням вважається одним із найкрасивіших на острові.",
        "Приходская церковь Санта-Круша, начатая в середине XV века и завершённая в 1517 году по образцу собора Фуншала. Её готико-мануэлинский интерьер с нервюрным сводом считается одним из самых красивых на острове.",
      ),
      benefit: l(
        "Inside is a polyptych of six 16th-century oil paintings on wood from a good Portuguese workshop.",
        "Унутры — паліптых з шасці карцін алеем на дрэве XVI стагоддзя добрай партугальскай майстэрні.",
        "Усередині — поліптих із шести олійних картин на дереві XVI століття доброї португальської майстерні.",
        "Внутри — полиптих из шести картин маслом на дереве XVI века хорошей португальской мастерской.",
      ),
      fit: l(
        "A short stop near the airport — good on arrival or departure day.",
        "Кароткі прыпынак каля аэрапорта — зручна ў дзень прылёту ці вылету.",
        "Коротка зупинка біля аеропорту — зручно в день прильоту чи вильоту.",
        "Короткая остановка рядом с аэропортом — удобно в день прилёта или вылета.",
      ),
      practical: l(
        "In the town centre by the seafront; check opening times before entering.",
        "У цэнтры горада каля набярэжнай; праверце час працы перад візітам.",
        "У центрі міста біля набережної; перевірте години відкриття перед візитом.",
        "В центре города у набережной; проверьте часы работы перед визитом.",
      ),
      source: {
        url: "https://visitmadeira.com/en/where-to-go/madeira/east-coast/santa-cruz/sao-salvador-church/",
        checkedOn,
      },
    },
    {
      id: "churches-santo-da-serra",
      name: l(
        "Santo António da Serra",
        "Санту-Антоніу-да-Сера",
        "Санту-Антоніу-да-Сера",
        "Санту-Антониу-да-Серра",
      ),
      area: l(
        "Plateau above Machico and Santa Cruz",
        "Плато над Машыку і Санта-Круш",
        "Плато над Машику та Санта-Крушем",
        "Плато над Машику и Санта-Крушем",
      ),
      description: l(
        "A green plateau village about 700 metres above sea level, named after the local devotion to Saint Anthony; the parish church of Santo António stands in its main square.",
        "Зялёная вёска на плато каля 700 метраў над морам, названая ў гонар мясцовага шанавання святога Антонія; прыходская царква Santo António стаіць на галоўнай плошчы.",
        "Зелене селище на плато близько 700 метрів над морем, назване на честь місцевого шанування святого Антонія; парафіяльна церква Santo António стоїть на головній площі.",
        "Зелёная деревня на плато около 700 метров над морем, названная в честь местного почитания святого Антония; приходская церковь Santo António стоит на главной площади.",
      ),
      benefit: l(
        "Cooler mountain air, a quiet village church and views down to the east coast — a calm stop between Machico and the mountains.",
        "Халаднейшае горнае паветра, ціхая вясковая царква і краявіды на ўсходняе ўзбярэжжа — спакойны прыпынак паміж Машыку і горамі.",
        "Прохолодніше гірське повітря, тиха сільська церква й краєвиди на східне узбережжя — спокійна зупинка між Машику й горами.",
        "Прохладный горный воздух, тихая деревенская церковь и виды на восточное побережье — спокойная остановка между Машику и горами.",
      ),
      fit: l(
        "Travellers who like quiet villages more than busy sights.",
        "Тым, хто любіць ціхія вёскі больш, чым людныя славутасці.",
        "Тим, хто любить тихі села більше, ніж людні пам’ятки.",
        "Тем, кто любит тихие деревни больше людных достопримечательностей.",
      ),
      practical: l(
        "Often misty and cooler than the coast — bring a layer.",
        "Часта туманна і халадней, чым на ўзбярэжжы, — вазьміце цёплую вопратку.",
        "Часто туманно й прохолодніше, ніж на узбережжі, — візьміть теплий шар одягу.",
        "Часто туманно и прохладнее, чем на побережье, — возьмите тёплую кофту.",
      ),
      source: { url: "https://elucidariomadeirense.pt/en/articles/3202", checkedOn },
    },
    {
      id: "churches-camara",
      name: l(
        "Câmara de Lobos: São Sebastião and the fishermen’s chapel",
        "Камара-дэ-Лобуш: São Sebastião і рыбацкая капліца",
        "Камара-ді-Лобуш: São Sebastião і рибальська каплиця",
        "Камара-ди-Лобуш: São Sebastião и рыбацкая часовня",
      ),
      area: l("Câmara de Lobos", "Камара-дэ-Лобуш", "Камара-ді-Лобуш", "Камара-ди-Лобуш"),
      description: l(
        "The Baroque church of São Sebastião goes back to a chapel ordered in 1426 by Prince Henry the Navigator and was enlarged in the 17th–18th centuries. By the harbour stands the small chapel of Nossa Senhora da Conceição: late 15th century, rebuilt in 1702, with paintings by Nicolau Ferreira and Luís Bernes. Tradition links it to the first settlers and to Zarco, though historians are not sure who founded it.",
        "Барочная царква São Sebastião паходзіць ад капліцы, пабудаванай у 1426 годзе па загадзе прынца Генрыха Мараплаўца, і была пашырана ў XVII–XVIII стагоддзях. Каля гавані стаіць маленькая капліца Nossa Senhora da Conceição: канец XV стагоддзя, перабудавана ў 1702 годзе, з карцінамі Нікалау Фэрэйры і Луіша Бернеша. Традыцыя звязвае яе з першымі пасяленцамі і Зарку, але гісторыкі не ўпэўнены, хто яе заснаваў.",
        "Барокова церква São Sebastião походить від каплиці, збудованої 1426 року за наказом принца Генріха Мореплавця, і була розширена в XVII–XVIII століттях. Біля гавані стоїть маленька каплиця Nossa Senhora da Conceição: кінець XV століття, перебудована 1702 року, з картинами Ніколау Феррейри та Луїша Бернеша. Традиція пов’язує її з першими поселенцями й Зарку, але історики не певні, хто її заснував.",
        "Барочная церковь São Sebastião ведёт историю от часовни, построенной в 1426 году по приказу принца Генриха Мореплавателя, и была расширена в XVII–XVIII веках. У гавани стоит маленькая часовня Nossa Senhora da Conceição: конец XV века, перестроена в 1702 году, с картинами Николау Феррейры и Луиша Бернеша. Предание связывает её с первыми поселенцами и Зарку, но историки не уверены, кто её основал.",
      ),
      benefit: l(
        "Two churches a few minutes apart in Madeira’s most photogenic fishing town, among colourful boats.",
        "Дзве царквы за некалькі хвілін адна ад адной у самым фотагенічным рыбацкім горадзе Мадэйры, сярод каляровых лодак.",
        "Дві церкви за кілька хвилин одна від одної в найфотогенічнішому рибальському містечку Мадейри, серед кольорових човнів.",
        "Две церкви в нескольких минутах друг от друга в самом фотогеничном рыбацком городке Мадейры, среди цветных лодок.",
      ),
      fit: l(
        "Everyone heading west of Funchal or to Cabo Girão.",
        "Усім, хто едзе на захад ад Фуншала або на Кабу-Жыран.",
        "Усім, хто їде на захід від Фуншала або до Кабу-Жирана.",
        "Всем, кто едет на запад от Фуншала или на Кабу-Жиран.",
      ),
      practical: l(
        "Feast of São Sebastião on 20 January. The chapel by the harbour is often closed outside service times.",
        "Свята São Sebastião — 20 студзеня. Капліца каля гавані часта зачынена па-за часам службаў.",
        "Свято São Sebastião — 20 січня. Каплиця біля гавані часто зачинена поза часом служб.",
        "Праздник São Sebastião — 20 января. Часовня у гавани часто закрыта вне времени служб.",
      ),
      source: {
        url: "https://visitmadeira.com/pt/onde-ir/madeira/costa-sul/camara-de-lobos/igreja-de-sao-sebastiao/",
        checkedOn,
      },
    },
    {
      id: "churches-bom-jesus",
      name: l(
        "Senhor Bom Jesus Church",
        "Царква Senhor Bom Jesus",
        "Церква Senhor Bom Jesus",
        "Церковь Senhor Bom Jesus",
      ),
      area: l(
        "Ponta Delgada, north coast",
        "Понта-Дэлгада, паўночнае ўзбярэжжа",
        "Понта-Делгада, північне узбережжя",
        "Понта-Делгада, северное побережье",
      ),
      description: l(
        "A Baroque church in a remote fishing village on the north coast. It keeps an 18th-century crucifix that, according to tradition, was washed ashore here in 1740 — Madeira’s second crucifix that came from the sea.",
        "Барочная царква ў аддаленай рыбацкай вёсцы на паўночным узбярэжжы. Тут захоўваецца ўкрыжаванне XVIII стагоддзя, якое, паводле падання, у 1740 годзе выкінула морам на бераг, — другі крыж Мадэйры, што прыйшоў з мора.",
        "Барокова церква у віддаленому рибальському селищі на північному узбережжі. Тут зберігається розп’яття XVIII століття, яке, за переказом, 1740 року море винесло на берег, — другий хрест Мадейри, що прийшов з моря.",
        "Барочная церковь в отдалённой рыбацкой деревне на северном побережье. Здесь хранится распятие XVIII века, которое, по преданию, в 1740 году вынесло морем на берег, — второй крест Мадейры, пришедший из моря.",
      ),
      benefit: l(
        "On the first weekend of September thousands of pilgrims from the whole island come for the feast of Bom Jesus — the north coast’s great pilgrimage.",
        "У першыя выхадныя верасня тысячы паломнікаў з усяго вострава прыязджаюць на свята Bom Jesus — вялікае паломніцтва паўночнага ўзбярэжжа.",
        "У перші вихідні вересня тисячі паломників з усього острова приїжджають на свято Bom Jesus — велике паломництво північного узбережжя.",
        "В первые выходные сентября тысячи паломников со всего острова приезжают на праздник Bom Jesus — главное паломничество северного побережья.",
      ),
      fit: l(
        "Travellers on a north-coast day (São Vicente, Seixal, Porto Moniz).",
        "Тым, хто едзе ў дзень па поўначы (Сан-Вісэнтэ, Сейшал, Порту-Моніш).",
        "Тим, хто їде на день північчю (Сан-Вісенте, Сейшал, Порту-Моніш).",
        "Тем, кто едет на день по северу (Сан-Висенте, Сейшал, Порту-Мониш).",
      ),
      practical: l(
        "Next to the Ponta Delgada sea pools; during the feast parking is very limited.",
        "Побач з марскімі басейнамі Понта-Дэлгады; у час свята паркоўкі вельмі мала.",
        "Поруч із морськими басейнами Понта-Делгади; під час свята паркування дуже мало.",
        "Рядом с морскими бассейнами Понта-Делгады; во время праздника парковки очень мало.",
      ),
      source: {
        url: "https://visitmadeira.com/pt/onde-ir/madeira/costa-norte/sao-vicente/ponta-delgada/",
        checkedOn,
      },
    },
    {
      id: "churches-sao-jorge",
      imageId: "santana",
      name: l(
        "São Jorge and Santana parish churches",
        "Царквы Сан-Жоржы і Сантаны",
        "Церкви Сан-Жорже та Сантани",
        "Церкви Сан-Жорже и Сантаны",
      ),
      area: l(
        "São Jorge and Santana, north coast",
        "Сан-Жоржы і Сантана, поўнач",
        "Сан-Жорже та Сантана, північ",
        "Сан-Жорже и Сантана, север",
      ),
      description: l(
        "The 17th-century parish church of São Jorge is the largest Baroque church in the Madeira region, with rich gilded woodwork. Nearby, the parish church of Santana, completed in 1745, was built where a small chapel of the São Jorge parish once stood.",
        "Прыходская царква Сан-Жоржы XVII стагоддзя — найбуйнейшая барочная царква рэгіёна Мадэйра з багатай пазалочанай разьбой. Побач — прыходская царква Сантаны, завершаная ў 1745 годзе на месцы маленькай капліцы парафіі Сан-Жоржы.",
        "Парафіяльна церква Сан-Жорже XVII століття — найбільша барокова церква регіону Мадейра з багатим позолоченим різьбленням. Поруч — парафіяльна церква Сантани, завершена 1745 року на місці маленької каплиці парафії Сан-Жорже.",
        "Приходская церковь Сан-Жорже XVII века — крупнейшая барочная церковь региона Мадейра с богатой золочёной резьбой. Рядом — приходская церковь Сантаны, завершённая в 1745 году на месте маленькой часовни прихода Сан-Жорже.",
      ),
      benefit: l(
        "Easy to add to a day in Santana with its thatched houses, or to the Pico do Arieiro road.",
        "Лёгка дадаць да дня ў Сантане з яе саламянымі домікамі або да дарогі на Піку-ду-Арыейру.",
        "Легко додати до дня в Сантані з її солом’яними будиночками або до дороги на Піку-ду-Арієйру.",
        "Легко добавить ко дню в Сантане с её соломенными домиками или к дороге на Пику-ду-Ариейру.",
      ),
      fit: l(
        "Lovers of Baroque art and travellers exploring the north-east.",
        "Аматарам барока і тым, хто падарожнічае па паўночным усходзе.",
        "Шанувальникам бароко й тим, хто подорожує північним сходом.",
        "Любителям барокко и тем, кто путешествует по северо-востоку.",
      ),
      practical: l(
        "Village churches: often open around services only; weather on the north coast changes fast.",
        "Вясковыя цэрквы: часта адчыненыя толькі каля службаў; надвор’е на поўначы мяняецца хутка.",
        "Сільські церкви: часто відчинені лише біля служб; погода на півночі змінюється швидко.",
        "Деревенские церкви: часто открыты только около служб; погода на севере меняется быстро.",
      ),
      source: {
        url: "https://www.visitmadeira.com/en/what-to-do/culture-passionates/heritage/churches-and-chapels/",
        checkedOn,
      },
    },
  ],
};
