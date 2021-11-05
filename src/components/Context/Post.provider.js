import { createContext } from "react";
import Hike1 from "../../assets/images/hike1.jpg";
import Hike2 from "../../assets/images/hike2.jpg";
import Hike3 from "../../assets/images/hike3.jpg";

export const PostContext = createContext({
  items: [
    {
      id: 1,
      intro: "GET STARTED",
      title: " What level of hiker are you?",
      desc: `Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various website like All Trails and Modern hiker. What type of hiker are you - novice, moderate, advanced, moderate,expert, or export backpacker?`,
      more: "read more",
      img: Hike1,
    },
    {
      id: 2,
      intro: "HIKING ESSENTIALS",
      title: " Picking The Right Hiking Gear",
      desc: `The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already havee. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.`,
      more: "read more",
      img: Hike2,
    },
    {
      id: 3,
      intro: "GET STARTED",
      title: " What level of hiker are you?",
      desc: `Determining what level of hiker you are can be an important toolwhen  planning future hikes. This hiking level guide will helpyou plan hikes accordind to different hike ratings set byvarious website like All Trails and Modern Kiker. What typeof hiker are you - novice, moderate, advanced, moderate,expert, or export backpacker?`,
      more: "read more",
      img: Hike3,
    },
  ],
});
