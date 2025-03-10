"use client"

import { SiteHeader } from "@/components/site-header";
import { Shield, Users, Computer, Wifi, Smartphone, HardDrive, Key, Lock, CreditCard, ShieldCheck } from "lucide-react";

const tips = [
  {
    id: 1,
    title: "Teach Your Team About Online Safety",
    icon: Users,
    content: [
      "Hold short training sessions every few months to go over the basics, like staying safe online and spotting risks.",
      "Show employees how to identify phishing emails by pointing out red flags like odd sender addresses, urgent demands, or unexpected links.",
      "Write down clear rules for using the internet at work, such as no personal browsing on company devices, and share them with everyone.",
      "Teach why strong passwords matter and how to make them—like using a mix of words and numbers (e.g., \"BlueSky2023!\")—and encourage changing them regularly.",
      "Set firm consequences, like a warning or training review, for anyone who ignores the rules, so everyone takes it seriously.",
      "Build a team vibe where staying safe online is normal by praising good habits and keeping reminders visible, like posters or quick tips in meetings."
    ]
  },
  {
    id: 2,
    title: "Keep Your Computers Safe from Attacks",
    icon: Computer,
    content: [
      "Install antivirus software on every computer—pick a trusted one like Norton or McAfee—and check it's running all the time.",
      "Update your operating system (like Windows or macOS) and programs whenever you get a notification, or set them to update automatically overnight.",
      "Turn on automatic updates for your software so you don't have to remember, keeping everything current without extra effort.",
      "Stick to a safe web browser like Chrome or Firefox, and update it often to avoid holes hackers could sneak through.",
      "Run antivirus scans weekly to catch anything sneaky, and review the results to make sure nothing's hiding.",
      "Add extra protection tools like anti-malware software (e.g., Malwarebytes) for a stronger shield against new threats."
    ]
  },
  {
    id: 3,
    title: "Control Who Uses Your Computers",
    icon: Shield,
    content: [
      "Keep computers locked up—use cable locks for laptops or store them in a safe spot when no one's around.",
      "Give each employee their own account on the computer, so you can track who's doing what and keep things separate.",
      "Make everyone use a strong, unique password—no sharing or easy ones like \"1234\"—and remind them to lock their screens when stepping away.",
      "Set up access based on job roles, so only the people who need certain files or programs can get to them (e.g., only accountants see financial data).",
      "Check who has access every few months and remove it for ex-employees or anyone who doesn't need it anymore.",
      "Add multi-factor authentication (MFA)—like a code sent to their phone—to make logins tougher for outsiders to crack."
    ]
  },
  {
    id: 4,
    title: "Lock Down Your Wi-Fi",
    icon: Wifi,
    content: [
      "Pick a long, tricky Wi-Fi password—think 15+ characters, like \"SunnyHillsWiFi2023\"—and write it down somewhere safe.",
      "Use the strongest security setting, like WPA3 (check your router's manual), to make it harder for hackers to break in.",
      "Hide your Wi-Fi name (called the SSID) so it doesn't pop up for strangers—your team can still connect if they know it.",
      "Turn off remote router controls in the settings, so only someone in your office can mess with it.",
      "Update your router's software every few months—log in with the admin password and look for an \"update\" option.",
      "Set up a separate guest Wi-Fi for visitors, with its own password, to keep your main network just for work."
    ]
  },
  {
    id: 5,
    title: "Make a Plan for Phones and Tablets",
    icon: Smartphone,
    content: [
      "Require a password or fingerprint lock on every device—set a rule that they can't be left unlocked, even for a minute.",
      "Turn on encryption (usually in the security settings) to scramble data, so it's useless if someone steals the device.",
      "Download security apps, like Lookout or Bitdefender, to guard against viruses and help track a lost phone.",
      "Add a remote wipe option through a service like Find My iPhone or Google's Find My Device, so you can erase everything if it's gone.",
      "Talk to your team about safe habits, like not downloading random apps or clicking links in weird texts.",
      "Keep phones and tablets updated—check for system and app updates weekly to fix weak spots."
    ]
  },
  {
    id: 6,
    title: "Save Copies of Your Important Files",
    icon: HardDrive,
    content: [
      "Figure out what files matter most, like customer lists or invoices, and mark them for regular saving.",
      "Use two backup methods: a hard drive in your office and a cloud service like Google Drive or Dropbox for extra safety.",
      "Schedule automatic backups—set them to run daily or weekly so you don't forget, and check they're working.",
      "Test your backups every few months by restoring a file to make sure you can get it back when you need it.",
      "Keep one backup off-site, like at home or in a safe deposit box, so it's safe from fire or theft at the office.",
      "Try versioning with tools like Dropbox to save older copies, in case you need to undo a mistake."
    ]
  },
  {
    id: 7,
    title: "Use Smart Passwords and Extra Safety Checks",
    icon: Key,
    content: [
      "Make passwords long—at least 12 characters—like \"CoffeeShop2023!\" to keep them tough to guess.",
      "Mix in letters, numbers, and symbols, avoiding obvious stuff like your name or \"password123.\"",
      "Use a different password for every account, so if one gets hacked, the rest stay safe—write them down if you need to.",
      "Swap passwords every 3-6 months, and set a calendar reminder to keep it on track.",
      "Turn on two-factor authentication (2FA)—like a text code after your password—for email, banking, and key apps.",
      "Get a password manager (e.g., LastPass or 1Password) to create and store tricky passwords without the hassle."
    ]
  },
  {
    id: 8,
    title: "Limit What Your Team Can See and Do",
    icon: Lock,
    content: [
      "Only let people see what their job requires—like salespeople seeing client contacts but not payroll.",
      "Check access rights every quarter to make sure no one has more than they need, especially after someone leaves.",
      "Use settings to block sensitive stuff, like putting passwords on key files or restricting certain software.",
      "Watch for odd behavior, like someone logging in late at night, and ask questions if it doesn't add up.",
      "Train your team on handling data, like not emailing private info or saving it on personal devices.",
      "Make rules about adding software—say only the boss or IT person can install new programs to avoid risks."
    ]
  },
  {
    id: 9,
    title: "Handle Payments the Safe Way",
    icon: CreditCard,
    content: [
      "Use a trusted payment system—ask your bank for options like Stripe or Square that keep card info secure.",
      "Keep payment devices separate, like using one computer just for transactions, not for browsing or emails.",
      "Don't process payments on everyday computers—set up a dedicated tablet or terminal to lower risks.",
      "Update payment tools often—check for software updates monthly to fix any weak spots.",
      "Teach your team payment safety, like double-checking totals and never writing down card numbers.",
      "Look at transactions daily for anything weird, like big refunds or repeat charges, and report it fast."
    ]
  },
  {
    id: 10,
    title: "Put Up a Firewall for Your Internet",
    icon: ShieldCheck,
    content: [
      "Turn on your computer's built-in firewall—find it in the security settings and make sure it's active.",
      "Add a hardware firewall (like a router with extra protection) for a stronger wall—ask your internet provider for help.",
      "Set rules to block random traffic, like stopping unknown devices from connecting automatically.",
      "Update firewall software regularly—check for updates every few months to keep it sharp.",
      "Check firewall logs weekly for odd activity, like blocked attempts, and talk to an expert if it looks fishy.",
      "Make sure remote workers use firewalls too—tell them to turn it on at home or use a company laptop."
    ]
  }
];

export default function SecurityTips() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              10 Simple Cybersecurity Tips for Small Businesses
            </h1>
            <p className="text-xl text-muted-foreground">
              Protecting your small business from cyber threats is essential in today's digital world. 
              These straightforward tips will help you lower your risks and keep your business secure.
            </p>
          </div>

          <div className="space-y-6">
            {tips.map((tip) => {
              const Icon = tip.icon;
              
              return (
                <div
                  key={tip.id}
                  className="bg-card border rounded-lg shadow-md"
                >
                  <div className="px-6 py-4 flex items-center gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">
                      {tip.id}. {tip.title}
                    </h2>
                  </div>
                  
                  <div className="px-6 pb-6">
                    <ul className="space-y-3 text-muted-foreground">
                      {tip.content.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}