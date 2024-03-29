const data = [
  {
    id: "two",
    title: "DATE COUNTER",
    subtitle: "FULL STACK WEB APP",
    link: "https://datecounter.davidkwong.net",
    technologies: ["REACT", "POSTGRES", "ASP.NET CORE", "DOCKER"],
    languages: ["C#", "JS/TS"],
    description:
      "DATE COUNTER IS A WEB APP WHICH I BUILT USING REACT AND ASP.NET CORE WEB API. IT ALLOWS USERS TO CREATE ACCOUNTS AND STORE AND CREATE DATES. THE APP THEN DISPLAYS THE DIFFERENCE IN DAYS BETWEEN THE CURRENT DAY AND THE DATES GIVEN.",
    keywords: [],
    imgSrc: "datecounterlogo.svg",
    color: {
      primary: "#70919B",
      text: "#262626",
      background: "#FFFFFF",
      textOnPrimary: "#FFFFFF",
      button: {
        text: "#FFFFFF",
        idle: "#70919B",
        hover: "#8EB8C6",
        pressed: "#70919B",
      },
    },
  },
  {
    id: "one",
    title: "MOOD TRACKER",
    subtitle: "FULL STACK WEB APP",
    link: "https://moodtracker.davidkwong.net",
    technologies: ["FLUTTER", "NODEJS", "SOCKET IO"],
    languages: ["DART", "JS/TS"],
    description:
      "MOODTRACKER IS A WEB APPLICATION THAT ALLOWS FOR USERS TO RECORD THEIR MOODS. USERS WOULD INPUT A SCORE FROM 0-10 AND GIVE AN OPTIONAL REASON FOR WHY THEY ARE FEELING THAT WAY. USERS WILL THEN BE ABLE TO SEE THEIR AVERAGE MOOD SCORES FOR DIFFERENT DURATIONS OF TIME AS WELL AS VIEW INDIVIDUAL LOGS AND SEE WHY THEY FELT THAT WAY. MOODTRACKER ALSO RELIES ON GOOGLE OAUTH2 AND SOCKETIO TO IMPLEMENT A SMOOTH AUTHENTICATION FLOW.",
    keywords: [],
    imgSrc: "moodtrackerlogo.svg",
    color: {
      primary: "#434332",
      text: "##434332",
      background: "#FFFFFF",
      textOnPrimary: "#FFFFFF",
      button: {
        text: "#FFFFFF",
        idle: "#D96969",
        hover: "#F57A7A",
        pressed: "#AB5252",
      },
    },
  },
];

export default data;
