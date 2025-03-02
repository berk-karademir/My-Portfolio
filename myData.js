export const languageData = {
  langOptions: {tr:"TR", en:"EN"},
  en: {
    header: {
      greeting: "Hi! 👋",
      name: "Berk",
      introText(name) {
        return `I’m ${name}. I’m a junior full-stack web developer. I've been trying to build decent products with all I learned in my course. Let's meet.`;
      },
      headerImgLocalPath: "images/header_img.png",
      headerLinksImages: {
        linkedin: {
          src: "images/linkedin-logo.png",
          href: "https://www.linkedin.com/in/berk-karademir/",
          alt: "My LinkedIn Profile",
        },
        github: {
          dark: {
            src: "images/github_logo_dark.png",
            href: "https://github.com/berk-karademir",
            alt: "Image Link to My GitHub Profile url",
          },
          light: {
            src: "images/github_logo_light.png",
            href: "https://github.com/berk-karademir",
            alt: "Image Link to My GitHub Profile url",
          },
        },
      },

      currentStatusText(courseName) {
        return `Currently, I've been taking a full-stack web developer course in ${courseName}`;
      },
      courseName: "Workintech",
      courseLinkHref: "https://www.workintech.com.tr/",
      navToContactText: "Contact me from here ➜ ",
      sendMailText: "Send an email to: ",
      eMail: "berk.karademir@hotmail.com",
      eMailContactHref: "mailto:berk.karademir@hotmail.com",
    },
    skills: {
      skillsHeading: "Skills",
      currentSkills: [
        "Javascript",
        "HTML-5",
        "CSS-3",
        "React",
        "Redux",
        "VS Code",
        "Any Skill",
      ],
    },
    profile: {
      profileHeading: "Profile",
      basicInfoText: "Basic Information",
      dateOfBirth: ["Date of birth", "10.08.1996"],
      currentLocation: ["Current Location", "Milas - Mugla, Turkey"],
      education: [
        "Education",
        "Bachelor, Canakkale Onsekiz Mart Unv.",
        "Travel Man. & Tourism Guidance, 2020",
      ],
      preferredRole: ["Preferred Role", "Full-stack Web Developer"],
      aboutMe: [
        "About me",
        "I graduated in 2020 from university, i have worked in chain-store brand in retail industry about 3 years. I have been in a full-stack web developer bootcamp since September 2024. My goal is learning more and more.",
      ],
    },
    projects: [
      { header: "Projects" },
      {
        title: "WitFlix",
        description:
          "A project that imitates Netflix to practice basic html and css skills, includes static 3 html pages: design system layout, 'who`s watching' page and home page.",
        tags: ["html", "css"],
        img: {
          src: "images/witflix.png",
          alt: `WitFlix preview`,
        },
        links: [
          {
            name: "Github",
            href: "https://github.com/berk-karademir/WitFlix",
          },
          {
            name: "Live",
            href: "https://mockflix.vercel.app/",
          },
        ],
      },
      {
        title: "Pizza Order Form",
        description:
          "A vite + react project to practice react skills. Includes dynamical order page, form validation, axios requests.",
        tags: [
          "javascript",
          "react",
          "css",
          "reactstrap",
          "forms",
          "form validation",
          "axios",
          "responsive design",
          "mobile first design",
        ],
        img: {
          src: "images/pizza.png",
          alt: `Pizza Order Form preview`,
        },
        links: [
          {
            name: "Github",
            href: "https://github.com/berk-karademir/s8-pizza-project",
          },
          {
            name: "Live",
            href: "https://s8-pizza-project.vercel.app/",
          },
        ],
      },
    ],
    footer: {
      footerText: "We can work together on your next project.",
      linkHeadings: ["Github", "LinkedIn", "Email", "Vercel"],
      footerLinksHrefs: [
        "https://github.com/berk-karademir",
        "https://www.linkedin.com/in/berk-karademir/",
        "mailto:berk.karademir@hotmail.com",
        "https://vercel.com/berk-karademirs-projects",
      ],
    },
  },
  tr: {
    header: {
      greeting: "Selam! 👋",
      name: "Berk",
      introText(name) {
        return `Ben ${name}. Junior full-stack web geliştiriciyim, tüm öğrendiklerimi uygulayabileceğim projeler yapmaya çalışıyorum. Hadi tanışalım.`;
      },
      headerImgLocalPath: "images/header_img.png",
      headerLinksImages: {
        linkedin: {
          src: "images/linkedin-logo.png",
          href: "https://www.linkedin.com/in/berk-karademir/",
          alt: "My LinkedIn Profile",
        },
        github: {
          dark: {
            src: "images/github_logo_dark.png",
            href: "https://github.com/berk-karademir",
            alt: "Image Link to My GitHub Profile url",
          },
          light: {
            src: "images/github_logo_light.png",
            href: "https://github.com/berk-karademir",
            alt: "Image Link to My GitHub Profile url",
          },
        },
      },

      currentStatusText(courseName) {
        return `Şuanda ${courseName}'te full-stack web developer eğitimi alıyorum.`;
      },
      courseName: "Workintech",
      courseLinkHref: "https://www.workintech.com.tr/",
      navToContactText: "Benimle buradan iletişime geçebilirsiniz ➜ ",
      sendMailText: "",
      eMail: "berk.karademir@hotmail.com",
      eMailContactHref: "mailto:berk.karademir@hotmail.com",
    },
    skills: {
      skillsHeading: "Yetenekler - Birikim",
      currentSkills: [
        "Javascript",
        "HTML-5",
        "CSS-3",
        "React",
        "Redux",
        "VS Code",
        "Any Skill",
      ],
    },
    profile: {
      profileHeading: "Profil",
      basicInfoText: "Temel Bilgiler",
      dateOfBirth: ["Doğum tarihi", "10.08.1996"],
      currentLocation: ["Konum", "Milas - Muğla, Türkiye"],
      education: [
        "Eğitim",
        "Lisans, Çanakkale Onsekiz Mart Ünv.",
        "Seyahat İşl. & Turizm Rehb, 2020",
      ],
      preferredRole: ["Tercih edilen rol", "Full-stack Web Developer"],
      aboutMe: [
        "Hakkımda",
        " Üniversiteden 2020'de mazun oldum, yaklaşık 3 yıl perakende sektöründeki bir zincir mağazada çalıştım. Eylül 2024'den beri full-stack web developer eğitimi almaktayım. Amacım mümkün olduğunca daha fazlasını öğrenmek.",
      ],
    },
    projects: [
      { header: "Projeler" },
      {
        title: "WitFlix",
        description:
          "Temel HTML ve CSS pratiği yapmak amacıyla Netflix'i taklit ettiğim proje. 3 statik HTML sayfasından oluşmaktadır: 'Anasayfa', 'Sistem tasarımı planı' ve 'Kim izliyor?' sayfası.",
        tags: ["html", "css"],
        img: {
          src: "images/witflix.png",
          alt: `WitFlix önizleme`,
        },
        links: [
          {
            name: "Github",
            href: "https://github.com/berk-karademir/WitFlix",
          },
          {
            name: "Live",
            href: "https://mockflix.vercel.app/",
          },
        ],
      },
      {
        title: "Pizza Sipariş Formu",
        description:
          "React'ta öğrendiklerimi pratiğe döktüğüm, validasyonlu dinamik sipariş formu, axios isteklerini içeren bir vite + react projesi.",
        tags: [
          "javascript",
          "react",
          "css",
          "reactstrap",
          "forms",
          "form validation",
          "axios",
          "responsive design",
          "mobile first design",
        ],
        img: {
          src: "images/pizza.png",
          alt: `Pizza Order Form önizleme`,
        },
        links: [
          {
            name: "Github",
            href: "https://github.com/berk-karademir/s8-pizza-project",
          },
          {
            name: "Live",
            href: "https://s8-pizza-project.vercel.app/",
          },
        ],
      },
    ],
    footer: {
      footerText: "Bir sonraki projenizde beraber çalışabiliriz.",
      linkHeadings: ["Github", "LinkedIn", "Email", "Vercel"],
      footerLinksHrefs: [
        "https://github.com/berk-karademir",
        "https://www.linkedin.com/in/berk-karademir/",
        "mailto:berk.karademir@hotmail.com",
        "https://vercel.com/berk-karademirs-projects",
      ],
    },
  },
};
