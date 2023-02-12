import BetsCover from "../../../images/Dev/BetsCover.png";
import ShopCover from "../../../images/Dev/shopCover-img.png";
import PerformaCover from "../../../images/Dev/Performa.PNG";
import IsofiCover from "../../../images/Dev/isofiCover.png";
import LexieCover from '../../../images/Dev/LexieCover.png';
import FearlessCover from '../../../images/Dev/FearlessCover.png';
import {
  betAppLoginData,
  shopAppLoginData,
} from "../../InfoObjects/DevObjects";

const projectsObject = [
  {
    header: "Web application for reading books and editing documents tuned for people with reading disorders like dyslexia. It has the basic capabilities of a book reading app such as adding books to the library both from importing EPUB/PDF to selecting a book from a number of public libraries, tracking reading progress for users, vertical/horizontal layout, adding notes, editing documents...",
    id: 4,
    imgSrc: LexieCover,
    link: "https://lexie.omoguru.com",
    login: false,
    professional: true,
    role: "One of two core developers. Scope of work included authentication, features (themes, reading progress, overlay, infinite scroll, localization), code optimization (cancellation tokens for web workers, partial syllable splitting, partial content display, preloading) and testing.",
    stack: ["Angular", ".NET Core", "Bootstrap", "Postgres"],
    tiles: { typescript: true, angular: true, net: true, sql: true },
    text: "On top of that, the application offers text formatting to make reading easier, from basic formatting such as setting line-heights, using custom-made fonts, customizing weights, size, color to advanced features like mirroring, splitting words into syllables with applied bold, coloring, or letter-filling to accentuate and make reading easier. There is also integration with Microsoft’s Text-To-Speech feature that allows users to listen to books and have words highlighted as the words are read.",
    title: "Omoguru Lexie - App for reading (via Intellegens)",
  },
  {
    header:
      "Performa 365 Exams is a platform for managing and taking professional-level exams. The platform consists of two parts, the so-called Back Office in which authors create and maintain a catalog of questions and a register of exams for individual professional titles, and Front Office - application for taking exams",
    id: 2,
    imgSrc: PerformaCover,
    login: false,
    professional: true,
    role: "Core developer for v2 of the application. Scope of work included bug fixing, optimization for future clients, new features (email sending, one time authentication tokens, live-exam monitoring, CSV imports), code optimization for larger scope of students and testing.",
    stack: ["Angular", ".NET Core", "Materialize", "MSSQL"],
    tiles: { typescript: true, angular: true, net: true, sql: true },
    text: "On the back-end, it uses IdentityServer4 for authentication and separated .NET API for everything else. On the front, there is an admin Angular application for administrators to manage users, questions, categories, professions, exams, and exam terms. There is also a Player application, used by those who are participating in the exam. Both applications use Internationalization and localization. My starting role in this project was to fix bugs in existing application and polish it enough to work for new clients. Three months later I ended up adding new features, new ways of authentications, restructured code for better flow (1000 people to take exams simultaneously), added email sending using MailJet, and much more.",
    title: "Platform for Online Exams (via Intellegens)",
  },
  {
    header:
      "Isofi is a web platform enabling professional therapists and their patients to develop therapeutic playlists together, share feedback and help users make healthier music choices. It uses Spotify track metadata, and LyricFind database to help users select relevant songs based on presets set up by mental health professionals.",
    id: 3,
    imgSrc: IsofiCover,
    link: "https://vimeo.com/743985898",
    login: false,
    professional: true,
    role: "Core developer. Built Therapists Playlists Creator from scratch under the mentorship of a senior developer. Scoped of worked included authentication via Spotify's OAUTH, integrating with Spotify's and LyricFind Web API's, visualizing data with Chart.js and creating algorithms for song recommendations.",
    stack: ["React", "Chart.js"],
    tiles: { javascript: true, react: true },
    text: "",

    title: "Isofi Spotify App (via Intellegens)",
  },
  {
    header:
      "I am currently involved in a project consisting of series of separate independent Blazor applications aimed at automating visitor management, access control and more for various types of facilities, including buildings, factories, and parking lots.",
    id: 5,
    imgSrc: FearlessCover,
    login: false,
    professional: true,
    role: "Front-end developer",
    stack: ["Blazor"],
    tiles: { net: true},
    text: "The first application in the series focuses on providing efficient and secure management of visitor traffic, streamlining processes and improving the overall experience for both visitors and facility staff.",
    title: "Fearless Visitor Management (via Intellegens)",
  },
  {
    header:
      "This website was designed to fill that gap which professional sport betting leaves and that is betting with your friends on every single thing on this planet - for money, dare or anything your heart desires. Bet solo or in groups.",
    id: 0,
    imgSrc: BetsCover,
    link:"https://github.com/PatrickBateman91/spaha-bet-app",
    loginData: betAppLoginData,
    stack: ["React", "Redux", "Node.js", "Express", "D3", "MongoDB"],
    professional: false,
    tiles: { javascript: true, react: true, node: true, noSQL: true },
    text: "The website is fully independent of supervision and 100% user-controlled. Users can create groups for each circle of friends or family, and keep track of bets and balance in each of them cleanly and separately. Everything functions on a mutual acceptance system. They can propose, accept, decline, edit and finish bets themselves. There is a notification system in place that helps users keep track of all the changes happening in their ecosystem.",
    title: "Betting website",
  },
  {
    header:
      "Remember old school websites that sold stuff but not every item on it had a 4.9 rating with 98% positive reviews? This shop is 100% user reliant, so it’s a fair game for every manufacturer, big or small. Sometimes it’s cruel, sometimes it’s rewarding and the only thing that matters, in the end, is how users liked your product.",
    id: 1,
    imgSrc: ShopCover,
    link:"https://github.com/PatrickBateman91/spaha-shop-app",
    loginData: shopAppLoginData,
    professional: false,
    stack: ["React", "Redux", "Node.js", "Express", "D3", "MongoDB"],
    tiles: { javascript: true, react: true, node: true, noSQL: true },
    text: "Users have the ability to search, filter, and sort through the catalog and buy everything they like. They can rate every item in a shop, add them to favorites, or put them in a cart to hold for the future. Every purchase is tracked on both user’s account and in the admin dashboard, which gives admin the opportunity to keep track of shop statistics by year/month/brand/gender, to add or remove discounts, send newsletters, respond to user inquiries, add items and edit existing, whether it is to restock or rebrand the product.",
    title: "Shoe shopping website",
  },
];

export default projectsObject;
