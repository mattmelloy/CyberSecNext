# Cybersecurity Made Simple — Web Slideshow Content Specification

### Queensland Small Business Staff Training

*Based on guidance from the Australian Cyber Security Centre (ACSC)*

-----

## Design System

Use these values consistently across all slides.

### Colour Palette

|Token       |Hex      |Usage                                                      |
|------------|---------|-----------------------------------------------------------|
|`navy`      |`#0D1B2A`|Primary dark background, title bars                        |
|`teal`      |`#028090`|Left accent bar, section headers, primary highlights       |
|`mint`      |`#02C39A`|Key callouts, subtitle text on dark slides, checklist icons|
|`off-white` |`#F4F8FB`|Content slide backgrounds                                  |
|`light-gray`|`#E8EFF5`|Card backgrounds, subtle fills                             |
|`mid-gray`  |`#8BA0B2`|Footer text, captions                                      |
|`dark-text` |`#1A2B3C`|Body copy on light backgrounds                             |
|`red`       |`#D62839`|Threat / danger indicators                                 |
|`amber`     |`#F4A261`|Warning / caution indicators                               |
|`green`     |`#2D9E6B`|Positive / “do this” indicators                            |
|`white`     |`#FFFFFF`|Text on dark backgrounds, card surfaces                    |

### Typography

|Element            |Font                       |Size   |Weight        |Colour                                       |
|-------------------|---------------------------|-------|--------------|---------------------------------------------|
|Slide title        |Calibri / system sans-serif|30–52pt|Bold          |`navy` (light slides) / `white` (dark slides)|
|Subtitle / tagline |Calibri                    |13pt   |Regular Italic|`teal` (light slides) / `mint` (dark slides) |
|Section header     |Calibri                    |13–15pt|Bold          |Varies by context                            |
|Body copy          |Calibri                    |11–13pt|Regular       |`dark-text`                                  |
|Stat / large number|Calibri                    |36–52pt|Bold          |Varies by context                            |
|Caption / footer   |Calibri                    |9pt    |Regular       |`mid-gray`                                   |

### Recurring Layout Elements

**Left accent bar:** A vertical coloured bar (`teal` or `mint`), ~22px wide, full slide height on the left edge. Present on all content slides.

**Footer strip:** A full-width dark bar (`navy` or darker) at the very bottom of every slide, ~38px tall. Contains left-aligned footer text in `mid-gray` (9pt) and a right-aligned slide number in `teal`.

- Footer text (content slides): `Australian Cyber Security Centre | cyber.gov.au`
- Footer text (dark slides): `cyber.gov.au  |  ReportCyber  |  1300 CYBER 1`
- Slide number format: `X / 12` (right-aligned)

**White content cards:** Rounded-corner white rectangles with a soft drop shadow, used to group related content. Often have a thin coloured top-edge accent bar.

**Icon circles:** Icons displayed inside filled circles (matching the relevant accent colour). Used on threat rows, step cards, and checklist items.

-----

## Slide 1 — Title Slide

**Background:** Full bleed `navy` (`#0D1B2A`)

**Layout:** Two-zone — large typography block on the left two-thirds, decorative icon on the right third.

**Left accent bar:** `mint` (`#02C39A`), full height, ~22px wide, flush left edge.

**Content (left zone, vertically centred):**

- Line 1 — Large headline: **“Cybersecurity”** | white, 52pt bold
- Line 2 — Large headline in accent colour: **“Made Simple”** | `mint`, 52pt bold
- Line 3 — Subtitle: **“Protecting Our Small Business”** | light-gray, 20pt regular
- Line 4 — Source attribution (italic): *“Based on guidance from the Australian Cyber Security Centre (ACSC)”* | `mid-gray`, 13pt italic

**Thin horizontal separator line** in `teal`, spanning from the left accent bar to the right edge, positioned below the subtitle block.

**Session info line** (below separator): `[Your Business Name]  |  Staff Training Session  |  [Date]  |  15–17 minutes` | `mid-gray`, 12pt

**Right zone — Decorative icon:**

- Large shield icon (security/shield SVG or emoji equivalent: 🛡️)
- Colour: `teal`, semi-transparent (approximately 85% opacity)
- Size: approximately 280×280px
- Position: upper-right quadrant, vertically centred in top half of slide

**Footer strip (bottom):** Darker navy (`#0A1520`), full width.

- Text: `cyber.gov.au  |  ReportCyber  |  1300 CYBER 1` | `mid-gray`, 9pt
- No slide number on title slide

-----

## Slide 2 — Why Cybersecurity Matters to Us

**Background:** `off-white` (`#F4F8FB`)

**Left accent bar:** `teal`, full height.

**Slide title (top-left, after accent bar):**

- Main title: **“Why Cybersecurity Matters to Us”** | `navy`, 30pt bold
- Subtitle (italic): *“The real cost of doing nothing”* | `teal`, 13pt italic

**Main content — Three stat cards in a horizontal row:**

Three equal-width white cards with drop shadow, arranged side by side with even spacing. Each card has a coloured top accent bar and centred content.

|Card      |Accent colour|Large stat |Description text                                          |
|----------|-------------|-----------|----------------------------------------------------------|
|1 (left)  |`red`        |**$56,600**|Average cost of a cybercrime incident for a small business|
|2 (centre)|`teal`       |**84,700+**|Cybercrime reports to the ACSC last year                  |
|3 (right) |`amber`      |**↑ 14%**  |Increase in costs to small business in just one year      |

Each card structure:

- Thin coloured top bar (full card width, ~6px tall) in the card’s accent colour
- Large stat number in the card’s accent colour, ~38pt bold, centred
- Description text in `dark-text`, ~13pt, centred, 2–3 lines

**Key message banner (full width, below the cards):**

- Background: `navy`
- Drop shadow
- Text: `💡  Small businesses are targeted MORE than large ones — because criminals see us as easier targets. But simple habits stop most attacks.`
- Text colour: white, ~12pt

**Footer strip:** Standard content footer. Slide number: `2 / 12`

-----

## Slide 3 — The 3 Biggest Threats to Small Businesses

**Background:** `off-white`

**Left accent bar:** `teal`, full height.

**Slide title:**

- Main title: **“The 3 Biggest Threats to Small Businesses”** | `navy`, 30pt bold
- Subtitle (italic): *“How cybercriminals get in”* | `teal`, 13pt italic

**Main content — Three horizontal threat rows:**

Each row is a full-width white card with a drop shadow. Inside each card:

- **Left edge:** Thin vertical coloured bar (~18px wide, full card height) in the threat’s accent colour
- **Icon circle:** Filled circle in the threat’s accent colour, containing a white icon. Positioned left of the description text.
- **Threat title:** Bold, ~15pt, `dark-text`
- **Description text:** Regular, ~11pt, `dark-text`, 2 lines
- **Right-side quote box:** Coloured rectangle (same accent colour as the threat) on the right edge of the card, containing an italic example quote in white text (~10pt)

|Row|Accent |Icon                 |Title                      |Description                                                                                                                                                                    |Example quote                                      |
|---|-------|---------------------|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
|1  |`red`  |✉️ envelope/email icon|**Phishing Emails & Texts**|A message pretending to be from ATO, Australia Post, or your bank with a dodgy link. One click can hand criminals the keys to your whole system.                               |*“Your invoice is attached. Click to view.”*       |
|2  |`amber`|👥 group/people icon  |**Fake Boss Emails (BEC)** |Criminals impersonate your manager or a supplier, asking to change bank details or make an urgent payment. 15% of business reports last year involved real money lost this way.|*“Pay this supplier ASAP — I’m in a meeting.”*     |
|3  |`teal` |🔒 lock icon          |**Ransomware**             |Malicious software locks all your files and demands payment — often in Bitcoin. Paying doesn’t guarantee you get your files back. Your best defence is a good backup.          |*“Your files are encrypted. Pay $8,000 to unlock.”*|

**Footer strip:** Standard content footer. Slide number: `3 / 12`

-----

## Slide 4 — How to Spot a Scam — Every Time

**Background:** `off-white`

**Left accent bar:** `teal`, full height.

**Slide title:**

- Main title: **“How to Spot a Scam — Every Time”** | `navy`, 30pt bold
- Subtitle (italic): *“Trust your gut. These are the warning signs.”* | `teal`, 13pt italic

**Main content — Two equal-width columns, side by side:**

Each column is a white card with a drop shadow, filled with bullet points. Each card has a coloured header bar.

**Left column — Suspicious Emails & Texts**

- Header bar: `red` background, full card width
- Header icon: ⚠️ warning/triangle icon (white) — left-aligned in header
- Header text: **SUSPICIOUS EMAILS & TEXTS** | white, 11pt bold, uppercase
- Bullet list (12pt, `dark-text`):
  - Urgent language — “Act NOW or lose access”
  - Sender email doesn’t match the company name
  - Hovering shows a suspicious link address
  - Asks for your password, payment or personal details
  - You weren’t expecting this email
  - Spelling mistakes or awkward phrasing

**Right column — Suspicious Computer Behaviour**

- Header bar: `teal` background, full card width
- Header icon: 👁️ eye icon (white) — left-aligned in header
- Header text: **SUSPICIOUS COMPUTER BEHAVIOUR** | white, 11pt bold, uppercase
- Bullet list (12pt, `dark-text`):
  - Computer suddenly very slow for no reason
  - Pop-ups you haven’t seen before
  - Files or folders you don’t recognise
  - You’ve been logged out of accounts unexpectedly
  - Your mouse moves on its own
  - Colleagues receive strange emails ‘from you’

**Footer strip:** Standard content footer. Slide number: `4 / 12`

-----

## Slide 5 — Something Looks Wrong — Here’s Exactly What To Do

**Background:** `navy` (`#0D1B2A`) — this is a dark “hero” slide for emphasis

**Left accent bar:** `mint`, full height.

**Slide title:**

- Main title: **“Something Looks Wrong — Here’s Exactly What To Do”** | white, 26pt bold
- Subtitle (italic): *“Follow these 5 steps in order. Every second counts.”* | `mint`, 13pt italic

**Main content — Five equal-width vertical step cards in a horizontal row:**

Each step card is a dark panel (`#162535`) with a soft drop shadow. Cards are evenly spaced across the slide width.

Each card structure (top to bottom):

1. **Top accent bar** (~8px tall) in the step’s colour
1. **Icon circle** (centred) — filled circle in step colour containing a white icon
1. **“STEP X” label** — small caps, 9pt, in the step’s colour, centred
1. **Step title** — bold, 16pt, white, centred
1. **Description text** — ~10.5pt, `light-gray`, centred, 3–4 lines

|Step|Colour            |Icon                |Title            |Description                                                                                                    |
|----|------------------|--------------------|-----------------|---------------------------------------------------------------------------------------------------------------|
|1   |`red`             |✋ stop/hand icon    |**STOP**         |Don’t click anything else. Don’t download. Don’t panic — just stop.                                            |
|2   |`amber`           |📶 Wi-Fi/signal icon |**Disconnect**   |Unplug the network cable OR turn off Wi-Fi. This stops the attack spreading to other devices.                  |
|3   |`mint`            |🔔 bell/alert icon   |**Tell Someone** |Tell your manager or the nominated IT contact immediately — even if you’re not sure it’s serious.              |
|4   |`teal`            |📞 phone icon        |**Call the Bank**|If money or payment details are involved, call your bank immediately using the number on the back of your card.|
|5   |`#7C5CBF` (purple)|📄 document/file icon|**Report It**    |Report to the ACSC at cyber.gov.au/report or call 1300 CYBER 1 (1300 292 371).                                 |

**Footer strip (bottom):** Darker navy (`#0A1520`), full width.

- Text: `📌  Print our Emergency Response Plan and keep it next to every workstation.` | `mint`, 9pt
- No slide number (or omit for design consistency)

-----

## Slide 6 — Passwords & Multi-Factor Authentication (MFA)

**Background:** `off-white`

**Left accent bar:** `teal`, full height.

**Slide title:**

- Main title: **“Passwords & Multi-Factor Authentication (MFA)”** | `navy`, 30pt bold
- Subtitle (italic): *“Your first and most important line of defence”* | `teal`, 13pt italic

**Main content — Two equal-width columns, side by side:**

**Left column — Strong Passwords**

- Header bar: `teal` background
- Header icon: 🔑 key icon (white)
- Header text: **STRONG PASSWORDS** | white, 13pt bold, uppercase
- Bullet list (12pt, `dark-text`):
  - Use a different password for every account. Yes, every one.
  - Make it at least 14 characters — a passphrase works well, e.g. “RedKangaroo!Sunshine42”
  - Never share your password — not even with IT.
  - Use a password manager (like Bitwarden or 1Password) so you only need to remember one master password.
  - Change passwords immediately if you suspect a breach.

**Right column — Multi-Factor Auth (MFA)**

- Header bar: `mint` background
- Header icon: 📱 mobile/phone icon (navy)
- Header text: **MULTI-FACTOR AUTH (MFA)** | `navy`, 13pt bold, uppercase
- Bullet list (12pt, `dark-text`):
  - MFA = a second check after your password. Like needing both your key AND a PIN to open a safe.
  - Turn it on for email, banking, Xero/MYOB, and any cloud system first.
  - Use an authenticator app (like Google Authenticator) where possible — it’s safer than SMS.
  - Even if a criminal steals your password, MFA stops them getting in.
  - Takes 2 minutes to set up. Do it today.

**Footer strip:** Standard content footer. Slide number: `6 / 12`

-----

## Slide 7 — Keep Everything Updated

**Background:** `off-white`

**Left accent bar:** `teal`, full height.

**Slide title:**

- Main title: **“Keep Everything Updated”** | `navy`, 30pt bold
- Subtitle (italic): *“Software updates close the doors criminals walk through”* | `teal`, 13pt italic

**Main content — Three-zone horizontal layout:**

**Left card — “What needs updating?”**

- White card with drop shadow
- Thin `teal` top accent bar
- Section header: **What needs updating?** | `teal`, 13pt bold
- Bullet list (12pt, `dark-text`):
  - Windows / macOS
  - iPhone / Android phones
  - Microsoft Office / Google Workspace
  - Your web browser (Chrome, Edge, Firefox)
  - Antivirus / security software
  - Accounting software (Xero, MYOB)

**Centre zone — Visual focal point:**

- Large filled circle in `teal`
- Large circular arrow / sync icon (🔄) in white, filling most of the circle
- Three lines of centred bold white text inside/below the circle: **AUTO** / **UPDATE** / **ON**
- This acts as a visual anchor between the two text columns

**Right card — “Why it matters”**

- White card with drop shadow
- Thin `amber` top accent bar
- Section header: **Why it matters** | `amber`, 13pt bold
- Bullet list (12pt, `dark-text`):
  - Criminals specifically look for businesses running old, unpatched software.
  - Updates fix the “holes” in software before criminals exploit them.
  - Enable automatic updates so it happens while you sleep.

**Tip banner (full width, below the three zones):**

- Background: `navy`
- Drop shadow
- Text: `✅  Tip: Schedule a 5-minute "Update Friday" — every Friday, check your devices are up to date before leaving for the weekend.` | white, 12pt

**Footer strip:** Standard content footer. Slide number: `7 / 12`

-----

## Slide 8 — Backups — Your Safety Net

**Background:** `off-white`

**Left accent bar:** `teal`, full height.

**Slide title:**

- Main title: **“Backups — Your Safety Net”** | `navy`, 30pt bold
- Subtitle (italic): *“If ransomware strikes, a good backup means you’re back up and running fast”* | `teal`, 13pt italic

**Main content — Three equal-width cards showing the 3-2-1 Backup Rule:**

Three white cards with drop shadows, arranged side by side with even spacing.

Each card structure:

- Large filled circle centred near the top of the card, containing a large bold number
- Bold label text below the circle
- Lighter description text below the label

|Card      |Circle colour|Number|Label                  |Description                             |
|----------|-------------|------|-----------------------|----------------------------------------|
|1 (left)  |`teal`       |**3** |Copies of your data    |Original + at least 2 backups           |
|2 (centre)|`navy`       |**2** |Different storage types|e.g. hard drive AND cloud               |
|3 (right) |`mint`       |**1** |Copy kept off-site     |Cloud or external drive stored elsewhere|

**Centred label below the three cards:**

- Text: **The 3-2-1 Backup Rule** | `teal`, 14pt bold, centred

**Warning banner (full width, below the label):**

- Background: `navy`
- Drop shadow
- Text: `⚠️  Always TEST your backups — a backup you've never tested might not work when you need it most. Try restoring one file today.` | white, 12pt

**Footer strip:** Standard content footer. Slide number: `8 / 12`

-----

## Slide 9 — Control Who Has Access to What

**Background:** `off-white`

**Left accent bar:** `teal`, full height.

**Slide title:**

- Main title: **“Control Who Has Access to What”** | `navy`, 30pt bold
- Subtitle (italic): *“Not everyone needs the keys to everything”* | `teal`, 13pt italic

**Main content — Two columns, side by side:**

**Left column — Concept explanation**

- White card with drop shadow
- No header bar; instead a large `teal` icon circle near the top centre of the card containing a 🛡️ shield icon
- Section label below icon: **“Least Privilege” — What is it?** | `teal`, 13pt bold
- Body text (12pt, `dark-text`):
  *Only give people access to the systems and files they actually need for their job — nothing more. It’s like giving the delivery driver access to the loading dock, not the entire building.*

**Right column — Action items**

- White card with drop shadow
- Header bar: `navy` background
- Header icon: 👤🔒 user-shield icon (white)
- Header text: **WHAT YOUR BUSINESS SHOULD DO** | white, 11pt bold, uppercase
- Bullet list (12pt, `dark-text`):
  - Don’t use an admin account for daily work — use a standard account.
  - Only IT (or the business owner) should have admin or ‘full access’ rights.
  - When staff leave, remove their access the same day.
  - Review who has access to your systems at least every 6 months.
  - Use separate logins — never share a single account across the team.

**Footer strip:** Standard content footer. Slide number: `9 / 12`

-----

## Slide 10 — Safe Email & Online Habits

**Background:** `off-white`

**Left accent bar:** `teal`, full height.

**Slide title:**

- Main title: **“Safe Email & Online Habits”** | `navy`, 30pt bold
- Subtitle (italic): *“Most attacks start with a single click — make that click a good one”* | `teal`, 13pt italic

**Main content — Two equal-width columns, side by side:**

**Left column — DO THIS**

- White card with drop shadow
- Header bar: `green` (`#2D9E6B`) background
- Header text: **✅   DO THIS** | white, 14pt bold
- Bullet list (12pt, `dark-text`):
  - Hover over links before clicking — check the real URL in the status bar
  - Call the sender to verify any unexpected invoice or payment request
  - Type web addresses directly rather than clicking links in emails
  - Log out of systems when you’re done, especially on shared computers
  - Only download software from official, trusted sources

**Right column — AVOID THIS**

- White card with drop shadow
- Header bar: `red` (`#D62839`) background
- Header text: **❌   AVOID THIS** | white, 14pt bold
- Bullet list (12pt, `dark-text`):
  - Open attachments from unknown senders
  - Enable macros in Word or Excel unless you know the source
  - Use work email for personal shopping, social media or sign-ups
  - Click “Unsubscribe” in spam emails — it confirms your address is active
  - Use public Wi-Fi for banking or accessing business systems without a VPN

**Footer strip:** Standard content footer. Slide number: `10 / 12`

-----

## Slide 11 — Staying Safe When Working from Home

**Background:** `off-white`

**Left accent bar:** `teal`, full height.

**Slide title:**

- Main title: **“Staying Safe When Working from Home”** | `navy`, 30pt bold
- Subtitle (italic): *“Your home network is part of the business now”* | `teal`, 13pt italic

**Main content — 2×2 grid of tip cards:**

Four equal-sized white cards with drop shadows, arranged in a 2-column, 2-row grid. Each card has a left-edge vertical accent bar (~18px wide, full card height) in its assigned colour, and a bold title in that colour.

|Position    |Accent colour|Title                              |Body text                                                                                                                                                        |
|------------|-------------|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Top-left    |`teal`       |**Secure your home Wi-Fi**         |Change the default router password to something strong and unique. Use WPA3 or WPA2 encryption. Don’t use your name or address as the Wi-Fi name.                |
|Top-right   |`navy`       |**Keep work and personal separate**|Avoid using your personal laptop for work if possible. If you must, don’t mix work accounts with personal ones and keep the device clean of unnecessary apps.    |
|Bottom-left |`amber`      |**Use a VPN if required**          |If your business uses a VPN (Virtual Private Network), always connect before accessing work systems. It encrypts your data so others on the network can’t see it.|
|Bottom-right|`green`      |**Lock your screen**               |Always lock your screen when stepping away — even at home. Other household members shouldn’t have access to your work data, even accidentally.                   |

**Footer strip:** Standard content footer. Slide number: `11 / 12`

-----

## Slide 12 — Your Action Checklist — Do These This Week

**Background:** `navy` (`#0D1B2A`) — dark closing slide for impact

**Left accent bar:** `mint`, full height.

**Slide title:**

- Main title: **“Your Action Checklist — Do These This Week”** | white, 26pt bold
- Subtitle (italic): *“Small actions, big protection. Tick these off and you’ve blocked most attacks.”* | `mint`, 13pt italic

**Main content — Five horizontal checklist rows:**

Five dark panel rows (`#162535`), stacked vertically with small gaps between them, spanning the full usable width. Each row has a soft drop shadow.

Each row contains (left to right):

1. **Check icon circle** — `mint`-filled circle with a white ✓ checkmark icon
1. **Action title** — `mint`, 13pt bold
1. **Detail text** — `light-gray`, 11pt, same line or directly below the title

|Row|Title                          |Detail                                                                              |
|---|-------------------------------|------------------------------------------------------------------------------------|
|1  |**Turn on MFA**                |Start with email, banking, and accounting software today — takes 2 minutes each.    |
|2  |**Enable auto-updates**        |Check that Windows/Mac, phones, and all key apps are set to update automatically.   |
|3  |**Test your backups**          |Find where backups live and restore a single file to confirm they work.             |
|4  |**Review who has admin access**|Ask your IT contact or check yourself — remove anyone who no longer needs it.       |
|5  |**Print the Emergency Plan**   |Place it at each workstation so everyone knows the 5 steps without needing to think.|

**Footer strip (bottom):** Darker navy (`#0A1520`), full width.

- Text: `🌐  cyber.gov.au  |  📞  1300 CYBER 1  |  📋  ReportCyber: cyber.gov.au/report  |  Questions? Ask your manager or IT contact.`
- Text colour: `mint`, 9pt
- No slide number (closing slide)

-----

## Navigation & Interaction Notes

- **Slide count:** 12 slides total
- **Recommended transition:** Simple fade or slide-left — avoid flashy transitions that distract from content
- **Progress indicator:** A progress bar or dot indicators (1–12) recommended at the top or bottom of every slide
- **Keyboard / swipe navigation:** Left/right arrow keys on desktop; swipe left/right on mobile
- **Presenter mode:** If the module supports it, the full presenter dialogue is available in the companion file `Cybersecurity-Training-Presenter-Notes.md`
- **Mobile considerations:** On small screens, two-column layouts (slides 4, 6, 9, 10) should stack vertically. The 5-step row (slide 5) should scroll horizontally or stack 2–3 per row. The 2×2 grid (slide 11) can remain as-is on tablets but should stack on phones.
- **Accessibility:** Ensure all coloured header bars have sufficient contrast with text. All icon circles should include an `aria-label` or `alt` attribute describing the icon’s meaning.