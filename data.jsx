export const languageData = {
    en: {
      header: {
        name: "Berk",
        introText(nameParam) {
          return `Hi, I’m ${nameParam}. I’m a junior full-stack web developer. I've been trying to build decent frontend products with all I learned in my course. Let's meet.`;
        },
        headerImgLocalPath: "images/header_img.png",
        gitHubLogoLocalPath: "images/github_logo.svg",
        currentWorkingStatusText:
          "Currently, I've been taking a full-stack web developer course in ",
        courseLinkHref: "https://www.workintech.com.tr/",
        eMailContact: "berk.karademir@hotmail.com",
      },
    },
  };
  
  export const skills = {
    skillsHeadingEN:"Skills",
    skillsHeadingTR:"Yetenekler",
    currentSkills:["Javascript","HTML-5","CSS-3", "React", "Redux", "VS Code" , "Any Skill"]
  }