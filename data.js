export const languageData = {
    langOptions:["TR", "EN", "DE"],
    en: {
      header: {
        languageLabelHeading:"Language",
        themeSwitchHeading:"Change Theme",
        greeting:"Hi! 👋",
        name: "Berk",
        introText(name) {
          return `I’m ${name}. I’m a junior full-stack web developer. I've been trying to build decent frontend products with all I learned in my course. Let's meet.`;
        },
        headerImgLocalPath: "images/header_img.png",
        headerLinkImages: [{src:"images/linkedin-logo.png", href:"https://www.linkedin.com/in/berk-karademir/", alt:"My LinkedIn Profile"}, {src:"images/github_logo.svg", href:"https://github.com/berk-karademir", alt:"My GitHub Profile"},],
        currentWorkingStatusText:
          "Currently, I've been taking a full-stack web developer course in ",
        courseNameText:"Workintech",
        courseLinkHref: "https://www.workintech.com.tr/",
        navToContactText:"Contact me from here ➜ ",
        sendMailText:"Send an email to: ",
        eMail:"berk.karademir@hotmail.com",
        eMailContactHref: "mailto:berk.karademir@hotmail.com",
      },
      skills: {
        skillsHeading:"Skills",
        currentSkills:["Javascript","HTML-5","CSS-3", "React", "Redux", "VS Code" , "Any Skill"]
      },
      profile: {
        profileHeading:"Profile",
        basicInfoText:"Basic Information",
        dateOfBirth:["Date of birth","10.08.1996"],
        currentLocation: ["Current Location","Milas - Mugla, Turkey"],
        education: ["Education","Bachelor, Canakkale Onsekiz Mart Unv.", "Travel Man. & Tourism Guidance, 2020"],
        preferredRole: ["Preferred Role","Full-stack Web Developer"],
        aboutMe:["About me","I graduated in 2020 from university, i have worked in chain-store brand in retail industry about 3 years. I have been in a full-stack web developer bootcamp since September 2024. My goal is learning more and more.", "Lorem Ipsum... Lorem Ipsum..."]
      },
      projects: {
        projectsHeading:"Projects",
        firstProject:["WitFlix", "A project that imitates Netflix to practice basic html and css skills, includes static 3 html pages: design system layout, 'who`s watching' page and home page. "],
        firstProjectTags:["html","css"],
        secondProject:["Pizza Order Form", "A vite + react project to practice react skills. Includes dynamical order page, form validation, axios requests."],
        secondProjectTags:["javascript", "react","css", "reactstrap", "forms","form validation", "axios", "responsive design", "mobile first design"]
      },
      footer: {
        footerText:"We can work together on your next project.",
        linkHeadings: ["Github", "LinkedIn", "Vercel","Email"],
        footerLinksHrefs: ["https://github.com/berk-karademir", "https://www.linkedin.com/in/berk-karademir/", "https://vercel.com/berk-karademirs-projects", "mailto:berk.karademir@hotmail.com"]
      }
    },
    tr: {
      header: {
        languageLabelHeading:"Dil Seçimi",
        themeSwitchHeading:"Temayı değiştir",
        greeting:"Selam! 👋",
        name: "Berk",
        introText(name) {
          return `Ben ${name}. Full-stack web geliştiriciyim, tüm öğrendiklerimi uygulayabileceğim projeler yapmaya çalışıyorum. Hadi tanışalım.`;
        },
        headerImgLocalPath: "images/header_img.png",
        headerLinkImages: [{src:"images/linkedin-logo.png", href:"https://www.linkedin.com/in/berk-karademir/", alt:"My LinkedIn Profile"}, {src:"images/github_logo.svg", href:"https://github.com/berk-karademir", alt:"My GitHub Profile"},],
        currentStatusText(courseName) {
          return `Şuanda ${courseName}'te full-stack web developer eğitim alıyorum.`;
        },
        courseNameText:"Workintech",
        courseLinkHref: "https://www.workintech.com.tr/",
        navToContactText:"Benimle buradan iletişime geçebilirsiniz ➜ ",
        sendMailText:"email yolla ",
        eMail:"berk.karademir@hotmail.com",
        eMailContactHref: "mailto:berk.karademir@hotmail.com",
      },
      skills: {
        skillsHeading:"Yetenekler",
        currentSkills:["Javascript","HTML-5","CSS-3", "React", "Redux", "VS Code" , "Any Skill"]
      },
      profile: {
        profileHeading:"Profil",
        basicInfoText:"Temel Bilgiler",
        dateOfBirth:["Doğum tarihi","10.08.1996"],
        currentLocation: ["Konum","Milas - Muğla, Türkiye"],
        education: ["Eğitim","Lisans, Çanakkale Onsekiz Mart Ünv.", "Seyahat İşl. & Turizm Rehb, 2020"],
        preferredRole: ["Tercih edilen rol","Full-stack Web Developer"],
        aboutMe:["Hakkımda", " Üniversiteden 2020'de mazun oldum, yaklaşık 3 yıl perakende sektöründeki bir zincir mağazada çalıştım. Eylül 2024'den beri full-stack web develepor eğitimi almaktayım. Amacım mümkün olduğunca daha fazlasını öğrenmek.","Lorem Ipsum... Lorem Ipsum..."]
      },
      projects: {
        projectsHeading:"Projeler"
      },
      footer: {
        footerText:"Bir sonraki projenizde beraber çalışabiliriz.",
        linkHeadings: ["Github", "LinkedIn", "Vercel","Email"],
        footerLinksHrefs: ["https://github.com/berk-karademir", "https://www.linkedin.com/in/berk-karademir/", "https://vercel.com/berk-karademirs-projects", "mailto:berk.karademir@hotmail.com"]
      }
  }
}
  
