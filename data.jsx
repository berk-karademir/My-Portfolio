export const languageData = {
    langOptions:["TR", "EN", "DE"],
    en: {
      header: {
        languageLabelHeading:"Language",
        themeSwitchHeading:"Change Theme",
        name: "Berk",
        introText(name) {
          return `Hi, I’m ${name}. I’m a junior full-stack web developer. I've been trying to build decent frontend products with all I learned in my course. Let's meet.`;
        },
        headerImgLocalPath: "images/header_img.png",
        navToGitHubText:"My Github Profile",
        gitHubLogoLocalPath: "images/github_logo.svg",
        currentWorkingStatusText:
          "Currently, I've been taking a full-stack web developer course in ",
        courseNameText:"Workintech",
        courseLinkHref: "https://www.workintech.com.tr/",
        navToContactText:"Contact me from here ➜",
        sendMailText:"Send Mail to: ",
        eMailContact: "berk.karademir@hotmail.com",
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
        education: ["Education","Bachelor, Canakkale Onsekiz Mart Unv. Travel Man. & Tourism Guidance, 2020"],
        preferredRole: ["Preferred Role","Full-stack Web Developer"],
        aboutMe:["About me","I graduated in 2020 from universty, i have worked in chain-store brand in retail industry about 3 years. I have been in a full-stack web developer bootcamp since September 2024. My goal is learning more and more.", "Lorem Ipsum... Lorem Ipsum..."]
      },
      projects: {
        projectsHeading:"Projects"
      },
      footer: {
        footerText:"We can work together on your next project",
        linkHeadings: ["Github", "LinkedIn", "Vercel","Email"],
        footerLinksHrefs: ["https://github.com/berk-karademir", "https://www.linkedin.com/in/berk-karademir-65b150340/", "https://vercel.com/berk-karademirs-projects", "mailto:berk.karademir@hotmail.com"]
      }
    },
  };
  
