import bb1 from "@/assets/images/project/bb2-min.png";
import em1 from "@/assets/images/project/em2.jpg";
import gf0 from "@/assets/images/project/gg1.png";
import lqs1 from "@/assets/images/project/lqs2.jpg";
import cc0 from "@/assets/images/project/ctt1-min.png";
import mrs0 from "@/assets/images/project/mrs0-min.png";
import ksetup from "@/assets/images/project/ksetup.png";
import foodplaces from "@/assets/images/project/foodplaces.png";
import crypto from "@/assets/images/project/crypto.png";
import ngo from "@/assets/images/project/ngo.jpg";
import { StaticImageData } from "next/image";
export interface ProjectType {
  index: number;
  title: string;
  domain: string;
  img: StaticImageData;
  link?: string;
  desc: string;
  source: string;
}

const projects: ProjectType[] = [
  {
    index: 0,
    title: "Food Places App",
    domain: "ReactJs",
    img: foodplaces,
    link: "https://food-places-e37db.web.app/",
    desc: "A react app where you can find nearby foodshops listed by foodshops owners, you can also add your likes and reviews",
    source: "https://github.com/KiranBendkoli1/foodshops",
  },
  {
    index: 1,
    title: "NGO Nexus",
    domain: "Flutter",
    img: ngo,
    link: "https://github.com/KiranBendkoli1/ngo_app/releases/tag/v0.0.2",
    desc: "The NGO Nexus app is designed to connect NGOs with volunteers and donors, facilitating collaboration and support for various social causes.",
    source: "https://github.com/KiranBendkoli1/ngo_app",
  },
  {
    index: 2,
    title: "K-setup",
    domain: "npm",
    img: ksetup,
    desc: "A lightweight CLI tool to quickly scaffold React.js or React Native projects with custom configurations and templates.",
    source: "https://github.com/KiranBendkoli1/k-setup",
    link: "https://www.npmjs.com/package/k-setup",
  },
  {
    index: 3,
    title: "Lets Quick Share",
    domain: "Flutter",
    img: lqs1,
    link: "https://lets-quick-share.web.app/#/",
    desc: "This app helps users to share important texts and links between devices. it's present in web app as well as android app",
    source: "https://github.com/KiranBendkoli1/lets-quick-share",
  },
  {
    index: 4,
    title: "Crypto App",
    domain: "ReactJs",
    img: crypto,
    link: "https://crypto-app-react-pearl.vercel.app/",
    desc: "Want to track ups and downs of crypto market. visit crypto app you'll get stats of most of the crypto currencies flowing through with visuals",
    source: "https://github.com/KiranBendkoli1/crypto-app-react",
  },
  {
    index: 5,
    title: "Blood Bank Management System",
    domain: "PHP",
    img: bb1,
    desc: "This is web based blood bank management system which can be use as a solution over traditional blood bank management system",
    source: "https://github.com/KiranBendkoli1/blood-bank-management-system",
  },
  {
    index: 6,
    title: "Chrome Tab Tracker",
    domain: "ReactJs",
    img: cc0,
    link: "https://tab-tracker-ext.web.app/",
    desc: "Google chrome extension which saves employees/students visited site's url directly to the cloud",
    source: "https://github.com/KiranBendkoli1/Chrome-Tab-Tracker",
  },
  {
    index: 7,
    title: "Expense Managaer App",
    domain: "Android",
    img: em1,
    desc: "This is an android app which can track your daily expenses with the help of this app you can control your expenses",
    source: "https://github.com/KiranBendkoli1/Expense-Manager",
    link: "https://github.com/KiranBendkoli1/Expense-Manager/releases/download/v2.0.0/ExpenseManagerV2.0.0.apk",
  },
  {
    index: 8,
    title: "Github Information Finder",
    domain: "ReactJs",
    img: gf0,
    link: "http://coderays.me/github-information-finder/",
    desc: "This is web app which helps you to find users information based on their username you can many more things like get repositories infos.",
    source: "https://github.com/KiranBendkoli1/github-information-finder",
  },
  {
    index: 9,
    title: "Movie Recommendation System",
    domain: "Python",
    img: mrs0,
    link: "https://tmdbmovierecommendationsystem.herokuapp.com/",
    desc: "Movie recommendation system recommends you movies based on movies you watched.",
    source: "https://github.com/KiranBendkoli1/movie-recommendation-system",
  },
];

export default projects;
