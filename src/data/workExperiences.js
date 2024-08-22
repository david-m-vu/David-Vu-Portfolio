import homiesLogo from "../assets/logos/homies-logo.jpeg";
import bachLogo from "../assets/logos/bach-logo.png";
import slacLogo from "../assets/logos/slac-logo.jpeg"
import nasaLogo from "../assets/logos/nasa-logo.png";

export const workExperiences = [
    {
      dates: ["January 2024", "June 2024"],
      logo: homiesLogo,
      role: "Software Engineer",
      company: "Homies",
      points: ["Created a platform w/ Next.js to help > 100 waiting individuals w/ disabilities find housing + match with the right caregivers",
        "Built the page displaying requests from compatible roommates and let users see others’ profiles and info through unique URLs",
        "Built a working Settings page and an admin-only view of the app through database authorization with Prisma + PostgreSQL"]
    },
    {
      dates: ["June 2023", "August 2023"],
      logo: bachLogo,
      role: "Software Engineer",
      company: "Bach",
      points: ["Architected and built an AI generated personalized playlist web app using React, serving ~10 users on release with in-app music playback, user authentication, and persisted data using Node,  JSON Web Tokens, MongoDB, and Redux",
        "Converted user-prompted GPT responses into usable Spotify playlists to be saved on users’ accounts, both on Spotify and in-app",
        "Implemented a RESTful Express API and a React UI following an MVC architecture and material design guidelines"
      ]
    },
    {
      dates: ["June 2022", "August 2022"],
      logo: slacLogo,
      role: "Data Analyst Intern",
      company: "SLAC National Accelerator Laboratory",
      points: ["Conducted device audits and data importation + validation of the entire data center (~4000 total assets), discussing and executing on the best ways to implement Nlyte, the new data management program, from the ground up",
        "Built a hard drive inventory management system with Confluence, revamping the previous rigid user ticketing system",
        "Facilitated the categorization of all assets by designing data sheets in Excel with Python for integration into the database"
      ]
    },
    {
      dates: ["May 2022", "August 2022"],
      logo: nasaLogo,
      role: "Robotics and Microcomputing Intern",
      company: "NASA / California Space Grant Consortium",
      points: ["Designed, assembled, and programmed a robot that advanced research towards climate change by targeting California wildfires",
        "Led a team of 4 using a modular approach to finish the robot with a week to spare + with blueprints we could still implement",
        "Engineered a GPS module, surface temperature and CH4 + CO2 sensors, and RF links to notify rangers of potential wildfires"
      ]
    }
  ]
