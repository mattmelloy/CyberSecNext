import { FAQ } from "@/types/faq";

export const faqData: FAQ[] = [
  {
    "question": "What are the most common cybersecurity risks for small businesses?",
    "answer": {
      "text": "Common risks include phishing scams, ransomware, weak or reused passwords, and unpatched software, including applications.",
      "advice": "Small businesses are often targeted due to perceived weaker security. To mitigate these risks, regularly train staff to recognize threats, use strong, unique passwords with multi-factor authentication, and keep all software updated, including applications.",
      "recommendation": "Consider security suites like Bitdefender or Norton for comprehensive protection."
    }
  },
  {
    "question": "How can I protect my business from phishing attacks?",
    "answer": {
      "text": "Phishing attacks use deceptive emails to steal sensitive information.",
      "advice": "Educate employees to verify senders and report suspicious emails, use spam filters, and run regular simulated phishing tests to build awareness. Be aware that sophisticated techniques like spear phishing target specific individuals.",
      "recommendation": "Tools such as Barracuda Email Security can help filter out suspicious emails."
    }
  },
  {
    "question": "Do I need antivirus software for my small business?",
    "answer": {
      "text": "Yes, antivirus software helps detect and block malicious software before it causes harm.",
      "advice": "Install reputable antivirus software on all devices, including built-in options like Windows Defender, and update it regularly. For sensitive data, consider advanced protection features.",
      "recommendation": "Products like McAfee Small Business Security, Kaspersky Small Office Security, or Windows Defender with additional tools are good choices."
    }
  },
  {
    "question": "What is ransomware, and how can I prevent it?",
    "answer": {
      "text": "Ransomware is malware that locks your data and demands payment for its release.",
      "advice": "Back up data frequently and test your backups to ensure they can be restored. Update all software, avoid clicking on suspicious links or attachments, and remember that paying the ransom does not guarantee recovery.",
      "recommendation": "Consider additional protection with solutions like Malwarebytes for malware detection and backup services for reliable recovery."
    }
  },
  {
    "question": "What is two-factor authentication (2FA), and should I use it?",
    "answer": {
      "text": "2FA adds an extra verification step—such as a text code or authenticator app—when logging in.",
      "advice": "Enable 2FA on all critical accounts to add a strong layer of security. App-based 2FA is more secure than SMS. Consider passwordless options like biometrics where available.",
      "recommendation": "Free apps like Google Authenticator or Authy are easy to set up."
    }
  },
  {
    "question": "How can I train my employees on cybersecurity?",
    "answer": {
      "text": "Employee training is essential to help your team recognize and avoid cyber threats.",
      "advice": "Use regular, engaging online training sessions tailored to roles, and run simulated phishing exercises to test awareness. Make training ongoing to address new threats.",
      "recommendation": "Platforms like KnowBe4 or SANS Security Awareness provide user-friendly training modules."
    }
  },
  {
    "question": "How can I secure my business's Wi-Fi network?",
    "answer": {
      "text": "Securing your Wi-Fi involves changing default passwords, using strong encryption (WPA2/WPA3), and limiting access to trusted devices.",
      "advice": "Regularly update your router firmware, hide your network name, and use a guest network for visitors. For remote access, consider a VPN.",
      "recommendation": "Consider routers from brands like Netgear or Linksys that offer robust security features, and VPN services like NordVPN for remote work."
    }
  },
  {
    "question": "How often should I back up my business data?",
    "answer": {
      "text": "Frequent backups are critical; daily or weekly backups are recommended depending on your data changes.",
      "advice": "Use both local and cloud-based backups, and test them regularly to ensure they can be restored. Follow the 3-2-1 strategy: three copies, two different media, one offsite.",
      "recommendation": "Backup services such as Backblaze or Carbonite are trusted by many small businesses."
    }
  },
  {
    "question": "What are the signs my business has been hacked?",
    "answer": {
      "text": "Signs include unexpected system slowdowns, unusual account activity, unauthorized changes to files, sudden data usage spikes, and odd network traffic.",
      "advice": "Regularly monitor your systems, use security software to alert you of suspicious behavior, and have an incident response plan in place.",
      "recommendation": "Network monitoring tools like SolarWinds or Splunk can help detect intrusions early."
    }
  },
  {
    "question": "Is HTTPS important for my business website?",
    "answer": {
      "text": "Yes, HTTPS encrypts the connection between your website and visitors, protecting sensitive information, especially for sites handling user data.",
      "advice": "Ensure your website has an SSL certificate to build trust with visitors and improve search engine rankings. Many hosting providers include free SSL.",
      "recommendation": "Services like Let's Encrypt offer free SSL certificates, or you can use products from DigiCert. Check with your hosting provider for included options."
    }
  },
  {
    "question": "How can I manage passwords securely for my business?",
    "answer": {
      "text": "Using strong, unique passwords for each account is crucial to prevent unauthorized access.",
      "advice": "Use a reputable password manager to generate and store complex passwords, enable two-factor authentication where possible, and regularly update passwords. Educate employees on password best practices.",
      "recommendation": "Password managers like LastPass or 1Password are excellent for small businesses, offering secure storage and easy sharing features."
    }
  }
];