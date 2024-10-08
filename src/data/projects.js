import karimeRankThumb from "../assets/thumbnails/karime-rank-thumb2.png"
import moodifyThumb from "../assets/thumbnails/moodify-thumb.png"
import doNothingThumb from "../assets/thumbnails/do-nothing-thumb.png"
import wheresOskiThumb from "../assets/thumbnails/wheres-oski-thumb.png"
import soundbiteThumb from "../assets/thumbnails/soundbite-thumb.png";
import armageddonThumb from "../assets/thumbnails/armageddon-thumb.png";

export const projects = [
    {
      name: "KarimeRank",
      date: 2024,
      link: "https://karime-rank.vercel.app/",
      thumbnail: karimeRankThumb,
      description: "Image ranking MERN app that brings K-pop fans together as a platform for crowdsourced effort to find the best, most high quality images of Korean performers. Handles ~10,000 API/DB requests daily and pulls new, web scraped, images every month autonomously.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Cheerio", "Tailwind.css"]
    },
    {
      name: "Wheres Oski?",
      date: 2023,
      link: "https://github.com/david-m-vu/WheresMyOski",
      thumbnail: wheresOskiThumb,
      description: "Social media app for Berkeley students where, if anyone spots Oski (aka the mascot) in public, they would take a picture, post it on the app, and the last seen location of Oski would be updated as a pin on a global map that everyone could see.",
      tags: ["Firebase", "React Native", "Python", "Flask"]
    },
    {
      name: "Moodify",
      date: 2023,
      link: "https://david-m-vu.github.io/Moodify/",
      thumbnail: moodifyThumb,
      description: "AI Lyric analyzing web-app where users can discover explanations and emotional analyses for any song they’d like (divided into stanzas) using HumeAI's empathic voice interface and OpenAI's chat completion APIs. Done within 36 hours at UC Berkeley’s AI Hackathon.",
      tags: ["Python", "Flask", "React", "OpenAI", "HumeAI", "Spotify API"]
    },
    {
      name: "do-nothing",
      date: 2022,
      link: "https://david-m-vu.github.io/do-nothing/",
      thumbnail: doNothingThumb,
      description: "I wanted to solve a common problem that my generation faces: overcoming tech addiction, practicing mindfulness, and being able to stay in the present. By being on this site, you arent allowed to move your mouse or make any keyboard inputs. As a result, you are forced to do nothing and refresh your mind.",
      tags: ["React"]
    },
    // {
    //   name: "Soundbite",
    //   date: 2023,
    //   link: "https://github.com/david-m-vu/Soundbite",
    //   thumbnail: soundbiteThumb,
    //   description: "Personalized Playlists with AI",
    //   tags: ["React", "Redux", "Material UI", "Node.js", "MongoDB", "JSON Web Tokens", "OpenAI", "Spotify API"]
    // },
    {
        name: "armageddon",
        date: 2024,
        link: "https://armageddon-plum.vercel.app/",
        thumbnail: armageddonThumb,
        description: "First dive into three.js, learned the basics of placing 3D objects into a space with cameras, lighting, and shapes.",
        tags: ["three.js"]
    }
  ]