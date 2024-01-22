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
  webPortfolio
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

    documentLink: 'drive.com',
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

    documentLink: 'drive.com',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Color Finder App ======================

  {
    id: "G1103",
    productName: "Color Finder App",
    imgUrl: apkColorFinder,
    category: "Android",
    price: 173,
    
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

    documentLink: 'drive.com',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Interior Design Webiste ======================

  {
    id: "G1104",
    productName: "Interior Design Webiste",
    imgUrl: webInterior,
    category: "PHP",
    price: 3000,
    
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

    documentLink: 'drive.com',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Photographer Portfolio Webiste ======================

  {
    id: "G1105",
    productName: "Photographer Portfolio Webiste",
    imgUrl: webPortfolio,
    category: "PHP",
    price: 3000,
    
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

    documentLink: 'drive.com',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Online Exam System ======================

  {
    id: "G1106",
    productName: "Online Exam System",
    imgUrl: webExam,
    category: "PHP",
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

    documentLink: 'drive.com',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Online Art Store ======================

  {
    id: "G1107",
    productName: "Online Art Store",
    imgUrl: webArtStore,
    category: "React",
    price: 5000,
    
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

    documentLink: 'drive.com',
    youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
  },

  // ================= Online Expense Tracker ======================

  {
    id: "G1108",
    productName: "Online Expense Tracker",
    imgUrl: webExpense,
    category: "PHP",
    price: 4000,

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

  // ================= Jarvis Desktop Assistant ======================

  {
    id: "G1109",
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