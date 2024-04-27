// ==================== Image Imports ============================
import {
  jarvis,
  apkColorFinder,
  apkPetShop,
  webArtStore,
  webExam,
  webExpense,
  webInterior,
  webPetShop,
  webPortfolio,
  onRoad
} from '../images/ImagePaths'

// ==================== Image Imports ============================

const products = [

  // ================= Online Pet Shop ======================

  {
    id: "G1101",
    productName: "Online Pet Shop",
    imgUrl: webPetShop,
    category: "PHP",
    price: 3500,

    abstract: 'Online Pet Shop is an web application where the purchase and sale of pets took place. Thus this website provides a platform where the users could buy or sell pets by providing the contact details of the buyers/sellers. Our project also includes a special feature for buying street dogs through the app whereas its maintenance and operation are carried out by different non-government organizations [NGO] through a website. Through this, we desire to contribute something for reducing the count of street dogs in public places. We are building this web application in a way that we create a login for all users. Thus this app makes a perfect choice for the ones who loves pets and seeks variant breeds of them.',

    objectives: "This application ‘Online Pet Store’ is a platform for buying and selling different categories of pets. This project also enables NGO's to advertise their campaigns. Through this project, users can directly contact the buyer/seller so that they are benefited by removing the commission fee paid to agents while buying their favoured pets.",

    swreq: 'Front End: HTML, CSS\nBack End: PHP, MYSQL\nControl End: Xampp',

    proposed: 'Digitalize the process of pet marketing. Eliminating the commission paid to agents. This project reduces human efforts, saves time and resources. A special feature for adopting street dogs from NGO Campaigns. Can locate nearby pet shop through maps. An advanced search option for searching desired breeds of pets.',

    modules: [
      {
        desc: 'Login\nVerify NGO\nView User Details\nView NGO Details',
        name: 'Admin'
      },
      {
        desc: 'Register\nLogin\nCreate Pet\nUpdate/Delete Pet\nBuy Pet\nContact Sellers\nMake Wishlist\nLogout\nSearch Pet\nFilter Posts',
        name: 'User'
      },
      {
        desc: 'Register\nLogin\nPost Ads\nEdit Ads\nDelete Ads\nLogout',
        name: 'NGO'
      }
    ],

    documentLink: 'https://drive.google.com/file/d/1S8UBxmxyZ3DkW_kHXGAV2p2YcaYRJbzu/view?usp=drive_link',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Android Pet Store ======================

  {
    id: "G1102",
    productName: "Android Pet Shop",
    imgUrl: apkPetShop,
    category: "Android",
    price: 4000,

    abstract: 'Online Pet Shop is an Android application where the purchase and sale of pets took place. Thus this website provides a platform where the users could buy or sell pets by providing the contact details of the buyers/sellers. Our project also includes a special feature for buying street dogs through the app whereas its maintenance and operation are carried out by different non-government organizations [NGO] through a website. Through this, we desire to contribute something for reducing the count of street dogs in public places. We are building this web application in a way that we create a login for all users. Thus this app makes a perfect choice for the ones who loves pets and seeks variant breeds of them.',

    objectives: "This application ‘Online Pet Store’ is a platform for buying and selling different categories of pets. This project also enables NGO's to advertise their campaigns. Through this project, users can directly contact the buyer/seller so that they are benefited by removing the commission fee paid to agents while buying their favoured pets.",

    swreq: 'Front End: Flutter\nBack End: Google Firebase',

    proposed: 'Digitalize the process of pet marketing. Eliminating the commission paid to agents. This project reduces human efforts, saves time and resources. A special feature for adopting street dogs from NGO Campaigns. Can locate nearby pet shop through maps. An advanced search option for searching desired breeds of pets.',

    modules: [
      {
        desc: 'Login\nVerify NGO\nView User Details\nView NGO Details',
        name: 'Admin'
      },
      {
        desc: 'Register\nLogin\nCreate Pet\nUpdate/Delete Pet\nBuy Pet\nContact Sellers\nMake Wishlist\nLogout\nSearch Pet\nFilter Posts',
        name: 'User'
      },
      {
        desc: 'Register\nLogin\nPost Ads\nEdit Ads\nDelete Ads\nLogout',
        name: 'NGO'
      }
    ],

    documentLink: 'https://drive.google.com/file/d/1UblW9vcH0ENFwT1SMKN-PiZMFIQ5ZFFt/view?usp=drive_link',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Color Finder App ======================

  {
    id: "G1103",
    productName: "Color Finder App",
    imgUrl: apkColorFinder,
    category: "Android",
    price: 173,

    abstract: 'Coloration is an android application to create their own color combination. Today we came to know the circumstances that most of the people are dependent on physical designers or manuals to get color combinations. Through this application the user can get to know more about unknown colors and creative combinations. This application will be utilized for a variety of purposes, including animation, web design, art, architecture, costume design and etc. This project also includes a special feature where the user can create their own combinations of colors through this application. The user has many choices that can be selected by themselves instead of the designers influence or the limited options given by their designers. The details of each color have been provided under each family of colors such as color name, hexacode and description of the color. One could know all about the unknown colors in the color family so that they could decide their favorite colors and it perfect complementary color.',

    objectives: "This project helps to consumes the time and effort of the user. This project helps to create new colors using the complementary color. This project helps to create new colors using the complementary color. It also helps the user to make their vision into reality. We can also add our favorite combinations to Wishlist.",

    swreq: 'Front End: Flutter, Dart\nBack End: Google Firebase',

    proposed: 'Users activities can be tracked through the Admin. The concept of color theory can also be referred through this app. Application has a login system which makes the app portable. Search option will benefit the users to access all the colors. Users can create their own colors with their own complementary colors. Create colors has two modes i.e., custom mode and coloration mode.',

    modules: [
      {
        desc: 'Login\nAdd Colors\nAdd Color Family\nColor Management',
        name: 'Admin'
      },
      {
        desc: 'Color Exploration\nFavourites\nCreate Colors',
        name: 'User'
      },
    ],

    documentLink: 'https://drive.google.com/file/d/1e2F22doNbOG9yFGBGteGllPiETuyTdqX/view?usp=drive_link',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Interior Design Website ======================

  {
    id: "G1104",
    productName: "Interior Design Website",
    imgUrl: webInterior,
    category: "PHP",
    price: 3500,

    abstract: "The “Interior Design Website” project presents an innovative online platform that bridges the gap between homeowners seeking interior design solutions and the expertise of professional designers. This web-based solution is designed to offer a comprehensive and user- friendly experience, enabling homeowners to explore, engage and envision their dream living spaces. It categorizes projects into “Completed”, “Running” and “Upcoming” providing homeowners with a curated gallery of design inspiration. The website also empowers users to book appointments, initiate direct communication and access a wide array of educational resources.The project encompasses two primary modules: the “User Module” and the “Admin Module”. Users can explore projects, book appointments, contact the company, view company information, access team member profiles and monitor project statuses. Meanwhile, administrators can efficiently manage website content, add project details, include team member information, and directly respond to user inquiries.",

    objectives: "Educate homeowners about the interior design process and available options, fostering transparency and informed decision-making. Showcase the expertise and talents of interior design companies, helping them stand out in a competitive market. Streamline project management by categorizing and presenting projects in an organized manner, making it easier for clients to explore the company's portfolio.",

    swreq: 'Front End: HTML, CSS\nBack End: PHP,MYSQL\nControl End: Xampp',

    proposed: 'The proposed system for the Jisha Interiors project is a comprehensive and user-centric online platform that aims to revolutionize the interior design industry by bridging the gap between homeowners and design professionals.',

    modules: [
      {
        desc: 'Login\nAdding Team Members\nProject Portfolio Management',
        name: 'Admin'
      },
      {
        desc: 'Appointment Booking\nProject Exploration\nReviews and Feedback',
        name: 'User'
      },
    ],

    documentLink: 'https://drive.google.com/file/d/1PEfH55JIpcnyTlmU92j4EGfXEXyaRjTp/view?usp=drive_link',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Photographer Portfolio Website ======================

  {
    id: "G1105",
    productName: "Photographer Portfolio Website",
    imgUrl: webPortfolio,
    category: "PHP",
    price: 3000,

    abstract: 'Step into the world of visual storytelling, where the art of photography transforms fleeting moments into timeless memories. My portfolio website is a curated collection of photographs that transcend the ordinary and invite you to see the world through lens. Each image you encounter has a story to tell, an emotion to convey, or a scene to capture. I believe in the power of photography to freeze a single moment in time, preserving its essence and allowing you to relive it whenever you visit my site. Photography to me is a language that speaks without words. It transcends barriers and connects us through the universal language of visuals.',

    objectives: "To promote one’s photography services and attract potential clients. To demonstrate technical skills, proficiency with photography equipment and mastery of various photographic techniques. To use the portfolio as a marketing tool in photography competitions, exhibitions, or grant applications.",

    swreq: 'Front End: HTML, CSS\nBack End: PHP,MYSQL\nControl End: Xampp',

    proposed: 'Design an intuitive and user friendly interface for managing and showcasing the portfolio, which include options like photo upload, selection and categorization. Enable the user to select and mark their best photographs for inclusion in the portfolio. Implement a mobile-friendly design to ensure a seamless viewing experience on smartphones',

    modules: [
      {
        desc: 'Portfolio Management\nBooking Management\nAdd/Update Details\nReviews Management',
        name: 'Admin'
      },
      {
        desc: 'View Photos\nBook Photographer\nWrite Review',
        name: 'User'
      },
    ],

    documentLink: 'https://drive.google.com/file/d/1ik-IVO76zaU0-tNbvfD7UVwh6eCnOZDs/view?usp=drive_link',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Online Exam System ======================

  {
    id: "G1106",
    productName: "Online Exam System",
    imgUrl: webExam,
    category: "PHP",
    price: 4000,

    abstract: "The Online Exam System represents a groundbreaking initiative aimed at modernizing and enhancing the examination processes within educational institutions. This project addresses the inherent challenges and limitations associated with traditional paper-based examination systems by introducing a contemporary, efficient, and user-centric online platform. The system comprises three distinct but interconnected modules: Admin, Teacher, and Student, each tailored to fulfill specific roles within the examination ecosystem. The system's accessibility feature allows students to access exams from any location with an internet connection, making it more inclusive for remote learners",

    objectives: "The project aims to streamline and automate various aspects of examination processes, from class management to exam creation and result analysis. By centralizing these functions into an integrated online platform, the project simplifies the dministrative burden and reduces the scope for manual errors.",

    swreq: 'Front End: HTML, CSS\nBack End: PHP,MYSQL\nControl End: Xampp',

    proposed: 'The system will be divided into three core modules: Admin, Teacher, and Student, each with specific roles and responsibilities. Administrators will be able to manage classes, teachers, and students efficiently, streamlining the user registration and allocation processes. Teachers can set custom timers for each exam, enabling flexibility in exam duration.',

    modules: [
      {
        desc: 'User Management\nClass Management\nExam Approval\nUser Support\nData Management',
        name: 'Admin'
      },
      {
        desc: 'Exam Creation\nResult Analysis\nUser Profile\nExam Management',
        name: 'Teacher'
      },
      {
        desc: 'Exam Participation\nTimer and Navigation\nUser Profile\nInstant Results',
        name: 'Student'
      }
    ],

    documentLink: 'https://drive.google.com/file/d/1JNCd7z16wA435jKEUhORDfUtp1io5PJy/view?usp=drive_link',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Online Art Store ======================

  {
    id: "G1107",
    productName: "Online Art Store",
    imgUrl: webArtStore,
    category: "React JS",
    price: 5000,

    abstract: 'The project aims to create a system that makes it easy for artists to sell their artwork and for buyers to find and purchase artwork. It includes features like showcasing artwork, connecting with buyers, chatting through WhatsApp, following and unfollowing artists, saving posts for future reference, zooming in on images, sharing artwork on social media, downloading images, and filtering artwork categories. The system also has a user-friendly interface and an admin module for managing accounts. The admin module allows for viewing registered users, posted artwork, login/logout, and tracking saved posts and followers.',

    objectives: "The main objective of this project is to create a application in which the users can buy arts from the website that have been posted in the application by the seller. If the user likes it he can contact the seller via inbuilt Chat Application",

    swreq: 'Front End: HTML,CSS\nBack End: Google Firebase\nServer End: React JS',

    proposed: 'The proposed system is an online platform that provides a marketplace for artists to showcase and sell their artwork to potential buyers. The system allows artists to create accounts, upload images of their artwork, and provide information such as pricing and descriptions. Buyers can create accounts, browse the available artwork, and engage in chat conversations with artists through WhatsApp integration and chat option. The system also includes an administrative interface for managing artist and buyer accounts. This intermediate system aims to simplify the process of buying, selling and showcasing the artworks, facilitating communication and fostering connections between artists and buyers',

    modules: [
      {
        desc: 'Login\nUser Management\nPost Management',
        name: 'Admin'
      },
      {
        desc: 'Login\nUpdate Profile\nFollow/Unfollow\nSearch Arts\nText Sellers\nShare Post\nAdd/Update Post',
        name: 'User'
      },
    ],

    documentLink: 'https://drive.google.com/file/d/1_TJnQtDeZoS79B6Ut-z9Z92i0-noAvLI/view?usp=drive_link',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Online Expense Tracker ======================

  {
    id: "G1108",
    productName: "Online Expense Tracker",
    imgUrl: webExpense,
    category: "PHP",
    price: 4500,

    abstract: 'This project is based on an expense and income tracking system. This project aims to create an easy, faster and smooth tracking system between the expense and the income.This project also offers some opportunities that will help the user to sustain all financial activities like digital automated diary. So, for the better expense tracking system, we developed our project that will help the users a lot. Most of the people cannot track their expenses and income one way they face a money crisis, in this case daily expense tracker can help the people to track income-expense day to day and making life tension free. Money is the most valuable portion of our daily life and without money we will not last one day on the earth. So using the daily expense tracker application is important to load a happy family.',

    objectives: 'Daily expense tracker helps the user to avoid unexpected expenses and bad financial situations. This Project will save time and provide a responsible lifestyle.',

    swreq: 'Front End: HTML, CSS, Bootstrap\nBack End: PHP, MYSQL\nControl End: Java Script',

    proposed: 'To bring a seamless interface for all type of users where they can track their expenses and also comes to a solution about their spends. Having a various cards options to store the users balance and categorsiing the users spends.',

    modules: [
      {
        desc: 'Login\nAdd/Edit Expense\nView Spends\nDebit Cards Management\nCategory Management',
        name: 'User'
      },
    ],

    documentLink: '',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Onroad Breakdown Assistant =================

  {
    id: "G1109",
    productName: "Onroad Breakdown Assistant",
    imgUrl: onRoad,
    category: "PHP",
    price: 3500,

    abstract: 'All vehicles will cause some issues in the long run due to wear and tear it is uncertain to predict them in advance. So as to tackle this problem I have come up with this project which helps the users in the uncertain situations to find assistance through our website. It is a web based application that was designed to ensure faster and efficiency of user search on the local mechanics nearby. This also give full control to the admins over the data of mechanics contact details, their personal information like name, location etc. to provide more authentic details to its website users',

    objectives: 'The main objective of this project is to create a web application in which admin can view each customer order and give a solution and contact details of the nearby mechanic to the customer to solve those vehicle problems.',

    swreq: 'Front End: HTML, CSS\nBack End: PHP,MYSQL\nControl End: Xampp',

    proposed: 'In this website users can find assistance easily by just visiting in the website and just taping on the help key, to find the nearby servicemen and let them know your problem and by sharing your location the servicemen will reach the destination to help you with the problem that has been occurred. And also, this helps in saving work and time, which also saves more of the manual work of the user. The user has to just login in the website and have to request a nearby servicemen for help.',

    modules: [
      {
        desc: 'Login\nEdit Profile\nEdit Address\nUpdate Location\nView History\nApprove/Decline Requests',
        name: 'Mechanic'
      },
      {
        desc: 'Login\nUpdate Location\nUpdate Location\nSearch Mechanics\nGive Request to Mechanic',
        name: 'User'
      },
    ],

    documentLink: 'https://drive.google.com/file/d/1kNK8W620cbREJWt1dP8O61DzuranP7V5/view?usp=drive_link',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Jarvis Desktop Assistant ======================

  {
    id: "G1110",
    productName: "Jarvis Desktop Assistant",
    imgUrl: jarvis,
    category: "Python",
    price: 8000,

    abstract: 'In an era where flexibility and mobility are paramount, the Bike Rental Management System Application emerges as a game-changer in the urban transportation. This innovative application redefines the way individuals interact with bike rentals, seamlessly connecting users with a multitude of vendors through a unified, user-friendly platform. The proposed application presents a unique multi-vendor approach, allowing various bike rental vendors to showcase their offerings. Vendors can effortlessly post their bikes, and handle bookings, offering users a diverse array of options. Users experience unparalleled convenience in discovering bikes for rent. Through an intuitive interface, they can explore a wide selection of bikes, view detailed specifications, and seamlessly book their preferred ride. This streamlined process ensures a hassle-free experience from selection to confirmation. Navigating the city becomes effortless as users can locate bikes but also reach the vendor’s precise location using integrated Google Maps.',

    objectives: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut',

    swreq: 'Front End: HTML5, CSS3, Bootstrap\nEnd: PHP, MYSQL\nControl End: Angular Java Script',

    proposed: 'The proposed Bike Rental Management System introduces a comprehensive digital platform that revolutionizes the bike rental process. Utilizing advanced technologies, user-friendly interfaces, and robust backend systems, the proposed system ensures seamless interactions between vendors and users, enhancing efficiency, transparency, and overall user satisfaction.',

    modules: [
      {
        desc: 'Login\nApprove Vendor\nView User Details',
        name: 'Admin'
      },
      {
        desc: 'Register\nLogin\nCreate Bike\nUpdate/Delete Bike\nUpdate Google geo Location\nUpdate Booking request\nView Feedback & Rating\nMy Profile',
        name: 'Vendor'
      },
      {
        desc: 'Register\nLogin\nSearch Bike\nSearch City, area wise\nView Google Geo location\nMake Booking Request\nView Booking Status\nPost Feedback & Rating\nMy Profile',
        name: 'User'
      }
    ],

    documentLink: 'drive.com',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

]

export default products;