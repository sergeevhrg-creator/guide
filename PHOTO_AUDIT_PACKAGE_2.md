# Package 2 photo and card audit

No source image contained GPS/IPTC evidence sufficient to verify a specific Madeira location. To avoid misleading imagery, all tour cards, details, product cards, programme days, and page heroes now use branded graphical photo slots with localized, precise subject/location labels. Every slot exposes the same description through `role="img"` and `aria-label`.

| Offer                      | Editorial status                                                        | Photo status                                             |
| -------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------- |
| Sunrise above the clouds   | Four-language card and eight-part Details complete                      | Slot: sunrise at Pico do Arieiro                         |
| Whales & dolphins          | Four-language card and Details; wildlife non-guarantee included         | Slot: licensed wildlife-watching boat off Madeira        |
| Balcões & ancient forest   | Four-language card and Details; no-feeding rule included                | Slot: Levada dos Balcões, Ribeiro Frio                   |
| Rum & surfing              | Four-language card and Details; 18+ and alcohol-free route included     | Slot: Porto da Cruz and Engenhos do Norte                |
| Wine north                 | Four-language card and Details; tastings separate and partner-confirmed | Slot: north-coast terraced vineyards                     |
| Gastronomic Madeira        | Four-language card and Details; dietary/allergy caveat included         | Slot: Madeira produce and bolo do caco at a local market |
| Yacht sunset               | Four-language card and Details; captain/weather confirmation included   | Slot: sailing yacht at sunset off Madeira                |
| Madeira lights & festivals | Four-language card and Details; official dates only                     | Slot: official festival lights over Funchal bay          |
| Family west                | Four-language card and Details; Porto Moniz + Seixal only, no Santana   | Slot: Seixal black-sand beach and Porto Moniz pools      |
| Wild east & north          | Four-language card and Details; route and walking options included      | Slot: Ponta de São Lourenço and north-coast road         |
| Island after the screen    | Four-language card and Details; explicitly not retreat/therapy          | Slot: quiet Madeira levada and Atlantic viewpoint        |

## Product pages

- `/return-to-what-matters`: rewritten as a joyful family journey from age 8; all seven day images replaced by precise labeled slots.
- `/week-of-silence`: adult spiritual retreat boundaries, optional prayer/conversation, and no therapeutic promises added; hero replaced by a labeled slot.
- `/remote-work-madeira`: relocation/wintering support and visa, tax, residency, and legal limits added; hero replaced by a labeled slot.
- `/madeira-guide`: hero replaced by a labeled Madeira culture/local-life slot.

## Verification

- EN, BE, UK, RU rendered on desktop and mobile.
- 11 cards and Details dialog rendered.
- All requested routes returned HTTP 200.
- No horizontal overflow at 1440×900 or 390×844.
- Browser console and page errors: none.
- TypeScript: clean. ESLint: no errors; one pre-existing Fast Refresh warning in the CTA module.
- No publishing, payment integration, backend submission, or deployment was performed.
