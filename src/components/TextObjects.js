import QVA from '../images/qva.jpg';
import Tabija from '../images/tabija.jpg';
import KoncentrisiseBaba from '../images/baba.jpg';
import Balada from '../images/Balada.jpg'
import Bones from '../images/Kosti.jpg';
import RadioFreedom from '../images/Radio Freedom.jpg';
import Muttering from '../images/Mrmljanje.jpg';
import UniCredit from '../images/UniCredit.png';
import Imdb from '../images/imdb-icon.png';
import Youtube from '../images/youtube-icon.png';
import CuvarVremena from '../images/cuvarvremena.jpg';
import Soumission from '../images/pokoravanje.jpg';
import CovjekCelicneVolje from '../images/covjekcelicnevolje.jpg';

export const filmBio_EN = ["assistant director", "feature-lengths, shorts & commercials", "competition assistant at SFF"];
export const devBio_EN = ["M.E.R.N. stack developer", "finished freeCodeCamp bootcamp","hobby for 3 years"];
export const nameAndAge_EN = "Amar Spahić, 28";



export const featureLengthObject = [
    {
        director: "Directed by: Aida Begić - Zubčević",
        extraInfo: "working under COVID guidelines",
        externalLink: "TBD",
        icon: "none",
        imgAlt: "The Ballad",
        imgSource: Balada,
        name: "The Ballad (2021)",
        mainInfo: "position: 2nd AD"
    },
    {
        director: "Directed by: Igor Drljača",
        extraInfo: "shot without a base on 10+ locations",
        externalLink: "https://www.imdb.com/title/tt12552352",
        icon: Imdb,
        imgAlt: "Tabija",
        imgSource: Tabija,
        name: "Tabija (2021)",
        mainInfo: "position: 2nd AD"
    },
    {
        director: "Directed by: Pjer Žalica",
        extraInfo: "shooting in tight schedule (16 days)",
        externalLink: "https://www.imdb.com/title/tt11223148",
        icon: Imdb,
        imgAlt: "Focus, Grandma",
        imgSource: KoncentrisiseBaba,
        name: "Focus, Grandma (2020)",
        mainInfo: "position: 2nd AD"
    },
    {
        director: "Directed by: Jasmila Žbanić",
        extraInfo: "coordination of 6000+ extras",
        externalLink: "https://www.imdb.com/title/tt8633462",
        icon: Imdb,
        imgAlt: "Quo vadis, Aida?",
        imgSource: QVA,
        name: "Quo vadis, Aida? (2020)",
        mainInfo: "position: 4th AD"
    }
]

export const shortsObject = [
    {
        director: "Directed by: Bafl Sarhang & Ismar Vejzović",
        extraInfo: "",
        externalLink: "https://www.imdb.com/title/tt10243688",
        icon: Imdb,
        imgAlt: "Radio freedom",
        imgSource: RadioFreedom,
        name: "Radio freedom (2021)",
        mainInfo: "position: 1st AD"
    },
    {
        director: "Directed by: Amina Huseinčehajić",
        extraInfo: "",
        externalLink: "https://www.imdb.com/title/tt9418480",
        icon: Imdb,
        imgAlt: "Muttering (2020)",
        imgSource: Muttering,
        name: "Muttering (2020)",
        mainInfo: "position: 1st AD"
    },
    {
        director: "Directed by: Adi Selimović",
        extraInfo: "",
        externalLink: "https://www.imdb.com/title/tt9420176",
        icon: Imdb,
        imgAlt: "Bones (2019)",
        imgSource: Bones,
        name: "Bones (2019)",
        mainInfo: "position: 1st AD"
    }
]

export const otherObject = [
    {
        director: "Directed by: Ademir Kenović",
        extraInfo: "Working with weather special effects",
        externalLink: "https://www.youtube.com/watch?v=aELvVT9cv18",
        icon: Youtube,
        imgAlt: "UniCredit bank Commercial",
        imgSource: UniCredit,
        name: "UniCredit bank Commercial (2020)",
        mainInfo: "position: 2nd AD"
    }
]

export const myWorksObject = [
    {
        director: "Directed by: Amar Spahić",
        extraInfo: "premiered on BHT (national television)",
        externalLink: "https://www.imdb.com/title/tt10634782",
        icon: Imdb,
        imgAlt: "Guardian of time (2019)",
        imgSource: CuvarVremena,
        name: "Guardian of time (2019)",
        mainInfo: "short documentary"
    },
    {
        director: "Directed by: Amar Spahić",
        extraInfo: "won few regional awards: KRAF, MOFF, TIFF, Jahorina film festival",
        externalLink: "https://www.imdb.com/title/tt5995910",
        icon: Imdb,
        imgAlt: "Man with the will of steel (2016)",
        imgSource: CovjekCelicneVolje,
        name: "Man with the will of steel (2016)",
        mainInfo: "short documentary"
    },
    {
        director: "Directed by: Amar Spahić",
        extraInfo: "shown on Herceg-Novi film festival",
        externalLink: "https://www.imdb.com/title/tt6281096",
        icon: Imdb,
        imgAlt: "Soumission (2016)",
        imgSource: Soumission,
        name: "Soumission (2016)",
        mainInfo: "short feature film"
    }
]

export const betAppObject = {
    leftLi: ["Fully functional user authentication","Add regular or group bets", "Add bets with same or different stakes", "Edit, finish & manage your bets", ],
    middleLi: ["Add profile picture to display on your public profile", "Create seperate groups for each circle of friends ", "Seperate statistics for each group", "Bets and groups function on mutual approval system"],
    rightLi: ["Track your balance", "Notification system", "Option to deactivate your account", "Created without Redux", ]
}

export const shopAppObject = {
    leftLi: ["Shoe shop with 100+ different products", "Filtering, sorting and searching for products", "User and admin authentication", "Ratings and favourites for every user"],
    middleLi: ["Cart, recommendations and previous purchases", "Every item has its details page","Payments are fully connected to the database", "Checkout with sandbox Paypal and fake Credit card"],
    rightLi: ["Fully functional admin panel", "Add & regulate products and stocks", "Customer feedback messaging system", "Stats & income, discounts and newsletter"]
}

export const codepenTitles_EN = {
    mainTitle: "Codepen projects",
    title1: "Tic Tac Toe",
    title2: "Calculator",
    title3: "Pig Dice Game",
    title4: "Simon Says"
}

export const betAppLoginData = [
    {email:"maciasip@hotmail.com", password:"testtest123"},
    {email:"jerryseinfeld@hotmail.com", password: "testtest123"}
];

export const shopAppLoginData = [
    {email:"johndoe@gmail.com", password:"testtest123"},
    {email:"janedoe@gmail.com", password: "testtest123"}
]

export const betAppLoginTitle = "Login data for accounts with precreated bets & groups";
export const shopAppLoginTitle = "First login data is for admin. Second is for user with a history of purchases."