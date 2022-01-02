import BetsCover from "../../../images/Dev/BetsCover.png";
import ShopCover from "../../../images/Dev/shopCover-img.png";
import PerformaCover from "../../../images/Dev/Performa.PNG";
import IsofiCover from "../../../images/Dev/isofiCover.png";
import {
  betAppLoginData,
  shopAppLoginData,
} from "../../InfoObjects/DevObjects";

const projectsObject = [
  {
    header:
      "This website was designed to fill that gap which professional sport betting leaves and that is betting with your friends on every single thing on this planet - for money, dare or anything your heart desires. Bet solo or in groups.",
    id: 0,
    imgSrc: BetsCover,
    link: "https://spaha-betapp.netlify.app/",
    login: true,
    loginData: betAppLoginData,
    tiles: { javascript: true, react: true, node: true, noSQL: true },
    text: "The website is fully independent from supervision and 100% user-controlled. Users can create groups for each circle of friends or family, and keep track of bets and balance in each of them cleanly and separately. Everything functions on a mutual acceptance system. They can propose, accept, decline, edit and finish bets themselves. There is a notification system in place that helps users keep track of all the changes happening in their ecosystem.",
    title: "Betting website",
  },
  {
    header:
      "Remember old school websites that sold stuff but not every item on it had 4.9 rating with 98% positive reviews? This shop is 100% user reliant, so it’s a fair game for every manufacturer, big or small. Sometimes it’s cruel, sometimes it’s rewarding and the only thing that matters in the end is how users liked your product.",
    id: 1,
    imgSrc: ShopCover,
    link: "https://spaha-shopapp.netlify.app/",
    login: true,
    loginData: shopAppLoginData,
    tiles: { javascript: true, react: true, node: true, noSQL: true },
    text: "Users have the ability to search, filter and sort through catalogue and buy everything they like. They can rate every item in a shop, add them to favourites, or put in cart to hold for future. Every purchase is tracked on both user’s account and in the admin dashboard, which gives admin opportunity to keep track of shop statistics by year/month/brand/gender, to add or remove discounts, send newsletters, respond to user inquiries, add items and edit existing, whether it is to restock or rebrand the product.",
    title: "Shoe shopping website",
  },
  {
    header:
      "Performa 365 Exams is a platform for managing and taking professional level exams. The platform consists of two parts, the so-called Back Office in which authors create and maintain a catalog of questions and a register of exams for individual professional titles, and Front Office - application for taking exams",
    id: 2,
    imgSrc: PerformaCover,
    link: "https://performa365-exams.readthedocs.io/hr/latest",
    login: false,
    tiles: { typescript: true, angular: true, net: true, sql: true },
    text: "On the back-end, it uses IdentityServer4 for authentication, and separated .NET API for everything else. On the front, there is an admin Angular application for administrators to manage users, questions, categories, professions, exams and exam terms. There is also a Player application, used by those who are participating in exam. Both application use Internationalization and localization. My starting role in this project was to fix bugs in existing application and polish it enough to work for new clients. Three months later I ended up adding new features, new ways of authentications, restructured code for better flow (1000 people to take exams simultaneously), added email sending using MailJet and much more. Not bad considering I had zero experience with Angular and C# at the beginning of this journey.",
    title: "Performa365Exams",
  },
  {
    header:
      "Project I am currently working on as a principal developer. Ambitious application in which therapists create specific and unique playlists for their patients based on their conditions and moods using Spotify.",
    id: 3,
    imgSrc: IsofiCover,
    login: false,
    tiles: { javascript: true, react: true },
    text: "Project is divided into several milestones. I am currently working on a web application using React. .NET API and React native mobile app are to follow.",
    title: "Isofi Therapist App",
  },
];

export default projectsObject;
