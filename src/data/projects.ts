
export interface ProjectType {
  index: number;
  title: string;
  tech: string[];
  img: string;
  vid?: string;
  link?: string;
  desc: string;
  source: string;
  position: number[];
}

export const projects: ProjectType[] = [
  {
    index: 1,
    title: "NGO Nexus",
    tech: ["Flutter", "Firebase"],
    img: "/images/ngo.jpg",
    link: "https://github.com/KiranBendkoli1/ngo_app/releases/tag/v0.0.2",
    desc: "The NGO Nexus app is designed to connect NGOs with volunteers and donors, facilitating collaboration and support for various social causes.",
    source: "https://github.com/KiranBendkoli1/ngo_app",
    vid: "/videos/ngo.mp4",
    position: [-5, 3, -5], // Project 3 - top right
  },
  {
    index: 0,
    title: "Food Places App",
    tech: ["ReactJs", "Firebase", "AntDesign"],
    img: "/images/foodplaces.png",
    link: "https://food-places-e37db.web.app/",
    desc: "A react app where you can find nearby foodshops listed by foodshops owners, you can also add your likes and reviews",
    source: "https://github.com/KiranBendkoli1/foodshops",
    vid: "/videos/foodplaces.mp4",
    position: [0, 3, -6], // Project 2 - top center
  },

  {
    index: 2,
    title: "K-setup",
    tech: ["npm"],
    img: "/images/ksetup.png",
    vid: "/videos/ksetup.mp4",
    desc: "A lightweight CLI tool to quickly scaffold React.js or React Native projects with custom configurations and templates.",
    source: "https://github.com/KiranBendkoli1/k-setup",
    link: "https://www.npmjs.com/package/k-setup",
    position: [-5, 0, -6], // Project 4 - middle left
  },
  {
    index: 4,
    title: "Crypto App",
    tech: ["ReactJs", "Chart.js"],
    img: "/images/crypto.png",
    vid: "/videos/crypto.mp4",
    link: "https://crypto-app-react-pearl.vercel.app/",
    desc: "Want to track ups and downs of crypto market. visit crypto app you'll get stats of most of the crypto currencies flowing through with visuals",
    source: "https://github.com/KiranBendkoli1/crypto-app-react",
    position: [5, 0, -6], // Project 6 - middle right
  },
  {
    index: 3,
    title: "Lets Quick Share",
    tech: ["Flutter", "Firebase"],
    img: "/images/lqs2.jpg",
    link: "https://lets-quick-share.web.app/#/",
    desc: "This app helps users to share important texts and links between devices. it's present in web app as well as android app",
    source: "https://github.com/KiranBendkoli1/lets-quick-share",
    position: [0, 0, -7], // Project 5 - middle center (depth)
  },

  {
    index: 5,
    title: "Blood Bank Management System",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    img: "/images/bb2-min.png",
    desc: "This is web based blood bank management system which can be use as a solution over traditional blood bank management system",
    source: "https://github.com/KiranBendkoli1/blood-bank-management-system",
    position: [5, 3, -5], // Project 1 - top left
  },
];

