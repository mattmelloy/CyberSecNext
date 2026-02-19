import {
  TitleSlide,
  StatsSlide,
  ThreatsSlide,
  TwoColumnSlide,
  StepsSlide,
  UpdatesSlide,
  BackupSlide,
  GridSlide,
  ChecklistSlide,
  TrainingSlide,
} from '@/types/training';

// Slide 1: Title Slide
const titleSlide: TitleSlide = {
  id: 1,
  type: 'title',
  title: 'Cybersecurity Made Simple',
  headlineLine1: 'Cybersecurity',
  headlineLine2: 'Made Simple',
  headlineLine2Color: 'mint',
  tagline: 'Protecting Our Small Business',
  sourceAttribution: 'Based on guidance from the Australian Cyber Security Centre (ACSC)',
  businessName: 'cybersectest.com',
  date: '',
  duration: '15-17 minutes',
  background: 'navy',
  accentBarColor: 'mint',
  presenterScript: `Good morning everyone, thanks for carving out 15 minutes - I'll keep it brief and practical, I promise.

Today we're talking about cybersecurity. And before anyone mentally checks out thinking 'that's not my department' - it absolutely is. Every single person in this room is a key part of keeping our business safe online.

We're not going to wade through tech jargon. Everything I share today comes from the Australian Cyber Security Centre - that's the official government body responsible for protecting Australian businesses from cybercrime. They publish the data, they see what's happening, and we're going to use their guidance as our roadmap.

By the time we're done, you'll know exactly what the threats look like, how to spot one, and what to do if something goes wrong. Let's get into it.`,
  audioPath: '/audio/training/slide-1.mp3',
};

// Slide 2: Stats Slide
const statsSlide: StatsSlide = {
  id: 2,
  type: 'stats',
  title: 'Why Cybersecurity Matters to Us',
  subtitle: 'The real cost of doing nothing',
  statCards: [
    {
      accentColor: 'red',
      stat: '$56,600',
      description: 'Average cost of a cybercrime incident for a small business',
    },
    {
      accentColor: 'teal',
      stat: '84,700+',
      description: 'Cybercrime reports to the ACSC last year',
    },
    {
      accentColor: 'amber',
      stat: '14%',
      description: 'Increase in costs to small business in just one year',
    },
  ],
  keyMessage: 'Small businesses are targeted MORE than large ones - because criminals see us as easier targets. But simple habits stop most attacks.',
  keyMessageIcon: 'lightbulb',
  background: 'off-white',
  accentBarColor: 'teal',
  presenterScript: `Let's start with the 'why should I care' question - because it's a fair one.

Here's a scenario. You come in on a Monday morning and your computer has a message on it that says all your files are locked and you need to pay $8,000 in Bitcoin to get them back. Or maybe you get a call from a supplier saying, 'We never received that payment you transferred last week.' But you definitely made it - because someone sent an email pretending to be from your manager asking you to process it urgently.

These aren't made-up examples. The ACSC reports that the average cost of a cybercrime incident for a small business in Australia is now $56,600 - and that number went up 14% in just one year. That's not an insurance payout. That's a real financial hit that can mean delayed wages, lost stock, unhappy customers, or even having to temporarily close the doors.

Now here's the really important thing. Over 84,700 cybercrime reports were made to the ACSC last year - and small businesses are actually targeted more than big corporations. Why? Because criminals see us as easier targets. We don't have a dedicated IT security team. But we do have something powerful: a team that pays attention. And that's what today is about.`,
  audioPath: '/audio/training/slide-2.mp3',
};

// Slide 3: Threats Slide
const threatsSlide: ThreatsSlide = {
  id: 3,
  type: 'threats',
  title: 'The 3 Biggest Threats to Small Businesses',
  subtitle: 'How cybercriminals get in',
  threatRows: [
    {
      accentColor: 'red',
      icon: 'email',
      title: 'Phishing Emails & Texts',
      description: 'A message pretending to be from ATO, Australia Post, or your bank with a dodgy link. One click can hand criminals the keys to your whole system.',
      exampleQuote: 'Your invoice is attached. Click to view.',
    },
    {
      accentColor: 'amber',
      icon: 'users',
      title: 'Fake Boss Emails (BEC)',
      description: 'Criminals impersonate your manager or a supplier, asking to change bank details or make an urgent payment. 15% of business reports last year involved real money lost this way.',
      exampleQuote: "Pay this supplier ASAP - I'm in a meeting.",
    },
    {
      accentColor: 'teal',
      icon: 'lock',
      title: 'Ransomware',
      description: "Malicious software locks all your files and demands payment - often in Bitcoin. Paying doesn't guarantee you get your files back. Your best defence is a good backup.",
      exampleQuote: 'Your files are encrypted. Pay $8,000 to unlock.',
    },
  ],
  background: 'off-white',
  accentBarColor: 'teal',
  presenterScript: `So how do criminals actually get in? The ACSC is very clear - there are three main ways small businesses get hit, and they're pretty consistent year after year.

Number one: Phishing emails and texts.
This is by far the most common entry point. You get an email that looks like it's from ATO, Australia Post, your bank, or even a supplier - with a link or attachment. It might say 'your invoice is ready' or 'your account has been suspended - click here.' One click and you've handed over your login, or installed software that lets criminals in the back door.
The golden rule: if you weren't expecting it and it's asking you to click something - pause and verify before doing anything.

Number two: Business Email Compromise - or BEC.
This is where it gets a bit sneakier. Criminals either hack an email account or create one that looks almost identical to your boss's or a supplier's - maybe one letter different, or a slightly different domain. Then they send a message saying something like 'Can you transfer this invoice payment urgently? I'm in meetings all day.' Last year, 15% of business cybercrime reports involved actual money walking out the door this way.
The rule here: any request to change bank details or make an urgent payment should ALWAYS be verified by calling the person directly - on a number you already have, not one provided in the suspicious email.

Number three: Ransomware.
This is the one that can stop a business in its tracks. Malicious software gets installed - usually through a phishing link or email attachment - and it locks up every file on your system. Then you get a ransom demand. And paying doesn't even guarantee you'll get your files back. The ACSC strongly advises against paying. Your best protection? Regular, tested backups - which we'll cover shortly.`,
  audioPath: '/audio/training/slide-3.mp3',
};

// Slide 4: Two-Column Slide (How to Spot a Scam)
const spotScamSlide: TwoColumnSlide = {
  id: 4,
  type: 'two-column',
  title: 'How to Spot a Scam - Every Time',
  subtitle: 'Trust your gut. These are the warning signs.',
  leftColumn: {
    headerColor: 'red',
    headerIcon: 'warning',
    headerText: 'SUSPICIOUS EMAILS & TEXTS',
    items: [
      'Urgent language - "Act NOW or lose access"',
      'Sender email doesn\'t match the company name',
      'Hovering shows a suspicious link address',
      'Asks for your password, payment or personal details',
      'You weren\'t expecting this email',
      'Spelling mistakes or awkward phrasing',
    ],
  },
  rightColumn: {
    headerColor: 'teal',
    headerIcon: 'eye',
    headerText: 'SUSPICIOUS COMPUTER BEHAVIOUR',
    items: [
      'Computer suddenly very slow for no reason',
      'Pop-ups you haven\'t seen before',
      'Files or folders you don\'t recognise',
      'You\'ve been logged out of accounts unexpectedly',
      'Your mouse moves on its own',
      'Colleagues receive strange emails \'from you\'',
    ],
  },
  background: 'off-white',
  accentBarColor: 'teal',
  presenterScript: `Right, so you know what they're trying to do. Now let's make sure you can spot it.

Think of it like recognising a dodgy tradie who rocks up unannounced wanting access to your building. Something just feels off. Same thing applies online.

For emails and texts, look for:
- That urgent pressure - 'act now or lose access'. Criminals use urgency because it stops you thinking clearly.
- The sender's email address - hover over it. Does it actually match the company? 'support@australiapost.com.au' is real. 'support@aust-post-delivery.net' is definitely not.
- Were you expecting this email? If not, be suspicious.
- Anything asking for passwords, payments, or clicking a link to update your details.

For your computer, watch out for:
- Suddenly running really slowly for no obvious reason
- Pop-ups you've never seen before
- Files or folders appearing that you didn't create
- Being logged out of accounts you're always logged into
- Your mouse seeming to move on its own - this is a red flag that someone may have remote access

The key message is this: trust your gut. If something feels off, it probably is. And there's no such thing as a silly question - asking your manager or IT contact is always the right move.`,
  audioPath: '/audio/training/slide-4.mp3',
};

// Slide 5: Steps Slide (Emergency Response)
const emergencyStepsSlide: StepsSlide = {
  id: 5,
  type: 'steps',
  title: 'Something Looks Wrong - Here\'s Exactly What To Do',
  subtitle: 'Follow these 5 steps in order. Every second counts.',
  steps: [
    {
      color: 'red',
      icon: 'hand',
      title: 'STOP',
      description: "Don't click anything else. Don't download. Don't panic - just stop.",
    },
    {
      color: 'amber',
      icon: 'wifi',
      title: 'Disconnect',
      description: 'Unplug the network cable OR turn off Wi-Fi. This stops the attack spreading to other devices.',
    },
    {
      color: 'mint',
      icon: 'bell',
      title: 'Tell Someone',
      description: "Tell your manager or the nominated IT contact immediately - even if you're not sure it's serious.",
    },
    {
      color: 'teal',
      icon: 'phone',
      title: 'Call the Bank',
      description: 'If money or payment details are involved, call your bank immediately using the number on the back of your card.',
    },
    {
      color: 'purple',
      icon: 'document',
      title: 'Report It',
      description: 'Report to the ACSC at cyber.gov.au/report or call 1300 CYBER 1 (1300 292 371).',
    },
  ],
  footerTip: 'Print our Emergency Response Plan and keep it next to every workstation.',
  background: 'navy',
  accentBarColor: 'mint',
  presenterScript: `So you've spotted something suspicious - maybe you've clicked a link that felt wrong, or your computer is doing something weird. What do you do?

The ACSC has a clear five-step plan, and we've printed it out for every workstation. Here's how it goes:

Step 1: STOP. Don't click anything else. Close the email or webpage. Don't try to fix it yourself, don't download anything to 'clean it up'. Just stop.

Step 2: Disconnect. Unplug your network cable from the back of the computer - or turn off Wi-Fi on a laptop. This is critical because it stops the attack from spreading to other devices in our network. Every second connected could mean more damage.

Step 3: Tell someone. Come and find me, your manager, or whoever we've nominated as the IT contact. Right now, even if you're not sure whether it was anything. It is never too small to report internally.

Step 4: Call the bank. If money, banking details, or payment information was involved, call our bank immediately using the number on the back of our card - not a number from an email. Banks have fraud teams available 24/7.

Step 5: Report it to the ACSC. We can report through cyber.gov.au/report or call 1300 CYBER 1. This helps other businesses too - the ACSC tracks trends and warns the broader community.

We've got the printed one-page emergency plan going up beside every workstation - please don't ignore it!`,
  audioPath: '/audio/training/slide-5.mp3',
};

// Slide 6: Two-Column Slide (Passwords & MFA)
const passwordsSlide: TwoColumnSlide = {
  id: 6,
  type: 'two-column',
  title: 'Passwords & Multi-Factor Authentication (MFA)',
  subtitle: 'Your first and most important line of defence',
  leftColumn: {
    headerColor: 'teal',
    headerIcon: 'key',
    headerText: 'STRONG PASSWORDS',
    items: [
      'Use a different password for every account. Yes, every one.',
      'Make it at least 14 characters - a passphrase works well, e.g. "RedKangaroo!Sunshine42"',
      'Never share your password - not even with IT.',
      'Use a password manager (like Bitwarden or 1Password) so you only need to remember one master password.',
      'Change passwords immediately if you suspect a breach.',
    ],
  },
  rightColumn: {
    headerColor: 'mint',
    headerIcon: 'mobile',
    headerText: 'MULTI-FACTOR AUTH (MFA)',
    items: [
      'MFA = a second check after your password. Like needing both your key AND a PIN to open a safe.',
      'Turn it on for email, banking, Xero/MYOB, and any cloud system first.',
      'Use an authenticator app (like Google Authenticator) where possible - it\'s safer than SMS.',
      'Even if a criminal steals your password, MFA stops them getting in.',
      'Takes 2 minutes to set up. Do it today.',
    ],
  },
  background: 'off-white',
  accentBarColor: 'teal',
  presenterScript: `Okay, now let's talk about what you can actively do to protect yourself. Starting with the biggie: passwords and MFA.

Passwords first.
I know everyone's heard 'use a strong password' a thousand times. But let me give you the practical version. The best password is actually a passphrase - a string of random words plus a number and symbol. Something like 'RedKangaroo!Sunshine42' - it's long, it's random, it's hard to crack, and it's actually memorable.

The most important rule: never reuse passwords across different accounts. If your LinkedIn password gets stolen in a data breach - and data breaches happen all the time - criminals immediately try that same password on your email, your banking, your accounting software. If you use the same password everywhere, one breach becomes a catastrophe.

The practical solution is a password manager. Apps like Bitwarden or 1Password let you store unique, complex passwords for every account, and you only need to remember one master password. Your phone browser probably has one built in too.

Now MFA - Multi-Factor Authentication.
Think of this as a second lock on your digital front door. Even if a criminal somehow gets your password, they still can't get in without the second factor - usually a code sent to your phone or generated by an app.

Turn it on for your work email first. Then banking. Then Xero or MYOB. Then any cloud storage.

It takes about two minutes to set up per account. And it is genuinely one of the most effective things you can do. The ACSC says MFA blocks the overwhelming majority of account takeover attempts.`,
  audioPath: '/audio/training/slide-6.mp3',
};

// Slide 7: Updates Slide
const updatesSlide: UpdatesSlide = {
  id: 7,
  type: 'updates',
  title: 'Keep Everything Updated',
  subtitle: 'Software updates close the doors criminals walk through',
  leftCardTitle: 'What needs updating?',
  leftCardItems: [
    'Windows / macOS',
    'iPhone / Android phones',
    'Microsoft Office / Google Workspace',
    'Your web browser (Chrome, Edge, Firefox)',
    'Antivirus / security software',
    'Accounting software (Xero, MYOB)',
  ],
  leftCardAccentColor: 'teal',
  rightCardTitle: 'Why it matters',
  rightCardItems: [
    'Criminals specifically look for businesses running old, unpatched software.',
    'Updates fix the "holes" in software before criminals exploit them.',
    'Enable automatic updates so it happens while you sleep.',
  ],
  rightCardAccentColor: 'amber',
  centerVisualText: ['AUTO', 'UPDATE', 'ON'],
  tipBanner: 'Tip: Schedule a 5-minute "Update Friday" - every Friday, check your devices are up to date before leaving for the weekend.',
  background: 'off-white',
  accentBarColor: 'teal',
  presenterScript: `Here's one that feels boring but makes a massive difference: keeping your software up to date.

When you see that 'update available' notification and you dismiss it - that's understandable, it's annoying. But here's what's actually happening. Software companies find security holes in their own products - or researchers find them - and they patch them with updates. Criminals know about those holes too, and they specifically go looking for computers and businesses that haven't installed the patch yet.

Running an old, unpatched version of Windows or an outdated browser is like leaving a well-known broken lock on your door.

What needs updating?
Windows or Mac operating system, your iPhone or Android, Microsoft Office or Google Workspace, your web browser, your antivirus software, and your accounting tools like Xero or MYOB.

The easy fix: turn on automatic updates. Set and forget. Your computer will update overnight or when you're not using it.

One habit I'd encourage: we call it 'Update Friday.' Before you head off for the weekend, take 60 seconds to check everything is up to date. It's a good routine and takes almost no time.`,
  audioPath: '/audio/training/slide-7.mp3',
};

// Slide 8: Backup Slide
const backupSlide: BackupSlide = {
  id: 8,
  type: 'backup',
  title: 'Backups - Your Safety Net',
  subtitle: 'If ransomware strikes, a good backup means you\'re back up and running fast',
  backupCards: [
    {
      circleColor: 'teal',
      number: '3',
      label: 'Copies of your data',
      description: 'Original + at least 2 backups',
    },
    {
      circleColor: 'navy',
      number: '2',
      label: 'Different storage types',
      description: 'e.g. hard drive AND cloud',
    },
    {
      circleColor: 'mint',
      number: '1',
      label: 'Copy kept off-site',
      description: 'Cloud or external drive stored elsewhere',
    },
  ],
  ruleLabel: 'The 3-2-1 Backup Rule',
  warningBanner: "Always TEST your backups - a backup you've never tested might not work when you need it most. Try restoring one file today.",
  background: 'off-white',
  accentBarColor: 'teal',
  presenterScript: `If there's one thing that can save a business from a ransomware attack, it's a solid backup.

Imagine criminals lock all your files and demand $15,000 ransom. If your last backup was from this morning, your response can be: 'Thanks, but no thanks. We've got it covered.' You wipe the affected machine, restore from backup, and you're back up and running. Compare that to a business with no backup having to decide whether to pay criminals or lose everything.

We follow what's called the 3-2-1 rule:
- 3 copies of your important data - the original plus at least two backups
- 2 different storage types - for example, an external hard drive AND a cloud backup like OneDrive or Google Drive
- 1 copy off-site - the cloud counts, or a drive kept at a different location

The most important thing most businesses forget: Test your backup. A backup you've never tested might not actually work when you need it most. Every month or quarter, pick one file and restore it. Just to confirm it works.

And be clear on which files matter most. Customer data, financial records, job files, contacts - these should all be included in your backup schedule.`,
  audioPath: '/audio/training/slide-8.mp3',
};

// Slide 9: Two-Column Slide (Access Control)
const accessControlSlide: TwoColumnSlide = {
  id: 9,
  type: 'two-column',
  title: 'Control Who Has Access to What',
  subtitle: 'Not everyone needs the keys to everything',
  leftColumn: {
    headerColor: 'teal',
    headerIcon: 'shield',
    headerText: '"Least Privilege" - What is it?',
    items: [
      'Only give people access to the systems and files they actually need for their job - nothing more.',
      'It\'s like giving the delivery driver access to the loading dock, not the entire building.',
    ],
  },
  rightColumn: {
    headerColor: 'navy',
    headerIcon: 'user-shield',
    headerText: 'WHAT YOUR BUSINESS SHOULD DO',
    items: [
      'Don\'t use an admin account for daily work - use a standard account.',
      'Only IT (or the business owner) should have admin or \'full access\' rights.',
      'When staff leave, remove their access the same day.',
      'Review who has access to your systems at least every 6 months.',
      'Use separate logins - never share a single account across the team.',
    ],
  },
  background: 'off-white',
  accentBarColor: 'teal',
  presenterScript: `Here's one that's often overlooked in small businesses: controlling who has access to what.

The concept is called 'least privilege' - and it just means people only have access to the systems and information they actually need to do their job. Nothing more.

Think of it like your business premises. Your delivery driver gets access to the loading dock. Your admin team gets the office. You wouldn't give every staff member a key to the filing cabinet with financial records, or the server room. Same principle applies online.

In practice, this means a few things:
- Don't do your everyday computer work using an administrator account. Use a standard account and only elevate to admin when you actually need to install something. If malware gets on a standard account, it has far less power to damage your system.
- When a staff member leaves - same day, remove their access. This is one that often gets forgotten and can become a real problem.
- Review your access list regularly. Who can log into your accounting software? Who has shared drive access? Do they still need it?
- Everyone should have their own login - never share passwords or accounts, even if it seems convenient.`,
  audioPath: '/audio/training/slide-9.mp3',
};

// Slide 10: Two-Column Slide (Safe Habits)
const safeHabitsSlide: TwoColumnSlide = {
  id: 10,
  type: 'two-column',
  title: 'Safe Email & Online Habits',
  subtitle: 'Most attacks start with a single click - make that click a good one',
  leftColumn: {
    headerColor: 'green',
    headerIcon: 'check',
    headerText: 'DO THIS',
    items: [
      'Hover over links before clicking - check the real URL in the status bar',
      'Call the sender to verify any unexpected invoice or payment request',
      'Type web addresses directly rather than clicking links in emails',
      'Log out of systems when you\'re done, especially on shared computers',
      'Only download software from official, trusted sources',
    ],
  },
  rightColumn: {
    headerColor: 'red',
    headerIcon: 'x',
    headerText: 'AVOID THIS',
    items: [
      'Open attachments from unknown senders',
      'Enable macros in Word or Excel unless you know the source',
      'Use work email for personal shopping, social media or sign-ups',
      'Click "Unsubscribe" in spam emails - it confirms your address is active',
      'Use public Wi-Fi for banking or accessing business systems without a VPN',
    ],
  },
  background: 'off-white',
  accentBarColor: 'teal',
  presenterScript: `Most cyberattacks ultimately come down to human habits - which means human habits are also our best defence.

Things to do:
When you hover over a link in an email before clicking it, look at the bottom of your browser screen - it shows the real destination address. Does it look right? If not, don't click.

If you get an invoice or payment request that you weren't expecting - even if it looks legit - pick up the phone and call the person directly using a number you already have. Don't reply by email.

Log out properly when you finish for the day, especially from any cloud system or accounting software.

Things to avoid:
Don't open attachments from people you don't know - even if they look official.

Don't enable 'macros' in Word or Excel documents unless you know exactly what they do and trust the source. Macro viruses are still a very common attack method.

Don't use your work email for personal accounts - social media, newsletters, online shopping. It increases your exposure and mixes your digital footprint.

And this one surprises people: don't click 'Unsubscribe' in spam emails. It confirms your email address is real and active - and often leads to more spam or being sold to other scammers.`,
  audioPath: '/audio/training/slide-10.mp3',
};

// Slide 11: Grid Slide (Working from Home)
const workFromHomeSlide: GridSlide = {
  id: 11,
  type: 'grid',
  title: 'Staying Safe When Working from Home',
  subtitle: 'Your home network is part of the business now',
  gridCards: [
    {
      accentColor: 'teal',
      title: 'Secure your home Wi-Fi',
      bodyText: "Change the default router password to something strong and unique. Use WPA3 or WPA2 encryption. Don't use your name or address as the Wi-Fi name.",
    },
    {
      accentColor: 'navy',
      title: 'Keep work and personal separate',
      bodyText: "Avoid using your personal laptop for work if possible. If you must, don't mix work accounts with personal ones and keep the device clean of unnecessary apps.",
    },
    {
      accentColor: 'amber',
      title: 'Use a VPN if required',
      bodyText: "If your business uses a VPN (Virtual Private Network), always connect before accessing work systems. It encrypts your data so others on the network can't see it.",
    },
    {
      accentColor: 'green',
      title: 'Lock your screen',
      bodyText: "Always lock your screen when stepping away - even at home. Other household members shouldn't have access to your work data, even accidentally.",
    },
  ],
  background: 'off-white',
  accentBarColor: 'teal',
  presenterScript: `More of us are working from home at least some of the time, and that's completely normal - but it does mean your home network is now part of our business infrastructure.

Four quick things:

First, secure your home Wi-Fi. Your internet router came with a default password - something like 'admin' or 'password123'. Change it to something unique. And make sure your Wi-Fi is using WPA2 or WPA3 encryption - your router's settings page will tell you.

Second, try to keep work and personal separate. Ideally use your work device for work only. If you have to use a personal laptop, keep it clean - don't mix accounts, and be cautious about what else is installed.

Third, if we use a VPN at work, always connect to it before accessing business systems from home. A VPN encrypts your connection so that even if someone's snooping on your network, they can't see what you're doing.

And fourth - lock your screen when you step away. At home this might feel unnecessary, but kids, partners, or flatmates accidentally accessing your work system is a real risk, not a paranoid one. On Windows it's the Windows key + L. On Mac it's Command + Control + Q. Gets to be a habit pretty quickly.`,
  audioPath: '/audio/training/slide-11.mp3',
};

// Slide 12: Checklist Slide
const checklistSlide: ChecklistSlide = {
  id: 12,
  type: 'checklist',
  title: 'Your Action Checklist - Do These This Week',
  subtitle: 'Small actions, big protection. Tick these off and you\'ve blocked most attacks.',
  checklistItems: [
    {
      title: 'Turn on MFA',
      detail: 'Start with email, banking, and accounting software today - takes 2 minutes each.',
    },
    {
      title: 'Enable auto-updates',
      detail: 'Check that Windows/Mac, phones, and all key apps are set to update automatically.',
    },
    {
      title: 'Test your backups',
      detail: 'Find where backups live and restore a single file to confirm they work.',
    },
    {
      title: 'Review who has admin access',
      detail: 'Ask your IT contact or check yourself - remove anyone who no longer needs it.',
    },
    {
      title: 'Print the Emergency Plan',
      detail: 'Place it at each workstation so everyone knows the 5 steps without needing to think.',
    },
  ],
  footerText: 'cyber.gov.au | 1300 CYBER 1 | ReportCyber: cyber.gov.au/report | Questions? Ask your manager or IT contact.',
  background: 'navy',
  accentBarColor: 'mint',
  presenterScript: `So that's the lot - 17 minutes and you're now significantly better equipped than most small businesses in Queensland.

Let me leave you with five things to do this week. Not someday - this week.

Turn on MFA. Start with work email. Then banking. Takes two minutes per account. This is the single most impactful thing you can do right now.

Check auto-updates are on. On your work computer, your phone, and any key business apps. Set it and forget it.

Test your backup. Find where your business backup lives, pick one file, and restore it. Just to confirm it actually works.

Review who has admin access. Have a quick look or ask your IT contact - anyone who doesn't need it shouldn't have it.

Print the emergency plan. The five-step response plan - we're putting it up at workstations today. Know where it is before you need it.

Do these five things and you will have blocked the vast majority of attacks the ACSC sees targeting businesses like ours.

I'll hang around for questions. And remember - no question is too small. If you're ever unsure about an email or something on your screen, you can always come and ask.

Thanks for your time today. You've just made [Business Name] a much harder target.`,
  audioPath: '/audio/training/slide-12.mp3',
};

// Export all slides as an array
export const trainingSlides: TrainingSlide[] = [
  titleSlide,
  statsSlide,
  threatsSlide,
  spotScamSlide,
  emergencyStepsSlide,
  passwordsSlide,
  updatesSlide,
  backupSlide,
  accessControlSlide,
  safeHabitsSlide,
  workFromHomeSlide,
  checklistSlide,
];

export const totalSlides = trainingSlides.length;

export function getSlideById(id: number): TrainingSlide | undefined {
  return trainingSlides.find(slide => slide.id === id);
}
