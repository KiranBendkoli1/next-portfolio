import bb1 from "@/assets/images/project/bb2-min.png";

export interface ProjectType {
  index: number;
  title: string;
  domain: string;
  img: string;
  vid?: string;
  link?: string;
  desc: string;
  source: string;
  position: number[];
}

const projects: ProjectType[] = [
  {
    index: 0,
    title: "Food Places App",
    domain: "ReactJs",
    img: "/images/foodplaces.png",
    link: "https://food-places-e37db.web.app/",
    desc: "A react app where you can find nearby foodshops listed by foodshops owners, you can also add your likes and reviews",
    source: "https://github.com/KiranBendkoli1/foodshops",
    position: [0, 3, -6], // Project 2 - top center
  },
  {
    index: 1,
    title: "NGO Nexus",
    domain: "Flutter",
    img: "/images/ngo.jpg",
    link: "https://github.com/KiranBendkoli1/ngo_app/releases/tag/v0.0.2",
    desc: "The NGO Nexus app is designed to connect NGOs with volunteers and donors, facilitating collaboration and support for various social causes.",
    source: "https://github.com/KiranBendkoli1/ngo_app",
    position:[-5, 3, -5] , // Project 3 - top right
  },
  {
    index: 2,
    title: "K-setup",
    domain: "npm",
    img: "/images/ksetup.png",
    vid: "/videos/ksetup.mp4",
    desc: "A lightweight CLI tool to quickly scaffold React.js or React Native projects with custom configurations and templates.",
    source: "https://github.com/KiranBendkoli1/k-setup",
    link: "https://www.npmjs.com/package/k-setup",
    position: [-5, 0, -6], // Project 4 - middle left
  },
  {
    index: 3,
    title: "Lets Quick Share",
    domain: "Flutter",
    img: "/images/lqs2.jpg",
    link: "https://lets-quick-share.web.app/#/",
    desc: "This app helps users to share important texts and links between devices. it's present in web app as well as android app",
    source: "https://github.com/KiranBendkoli1/lets-quick-share",
    position: [0, 0, -7], // Project 5 - middle center (depth)
  },
  {
    index: 4,
    title: "Crypto App",
    domain: "ReactJs",
    img: "/images/crypto.png",
    link: "https://crypto-app-react-pearl.vercel.app/",
    desc: "Want to track ups and downs of crypto market. visit crypto app you'll get stats of most of the crypto currencies flowing through with visuals",
    source: "https://github.com/KiranBendkoli1/crypto-app-react",
    position: [5, 0, -6], // Project 6 - middle right
  },
  {
    index: 5,
    title: "Blood Bank Management System",
    domain: "PHP",
    img: "/images/bb2-min.png",
    desc: "This is web based blood bank management system which can be use as a solution over traditional blood bank management system",
    source: "https://github.com/KiranBendkoli1/blood-bank-management-system",
    position: [5, 3, -5], // Project 1 - top left
  },
  
];

export default projects;
