import MerchDropperCover from '../Images/PortfolioGallery/MerchDropperCover.JPG';
import CainAfrica from '../Images/PortfolioGallery/CainAfrica.JPG'


export const PortfolioData = [
    {
        index: 1,    //These should be incremental from the last interger
        title: "Merch Dropper",
        cover: `${MerchDropperCover}`,
        description: "It's the fastest way to set up a hassle free merch shop. Platform to upload designs and create products that plug into scalablepress.com to create a drop-shipping online shop.",
        technologies: ["ReactJS", "NodeJS", "Express", "Redux", "knex", "PostgressSQL", "Jest"],
        link: "https://www.merch-dropper.com/"
    },
    {
        index: 2,    //These should be incremental from the last interger
        title: "CAIN Africa",
        cover: `${CainAfrica}`,
        description: "A fully responsive informational website for a non profit focused on Education and Healthcare for the less priviledged in Africa. The website needed to have donations, blogging, forms, and gallery capabilities. Being a front end only website, I had to be creative given the circumstances. After a lot of research, the client and I decided to go with Paypal, Paystack, and amazon smile for donations from donors, google forms for volunteer signups, medium for blogging, and an open source library for a carousel photo gallery.",
        technologies: ["ReactJS", "axios", "react-grid-gallery", "styled-components"],
        link: "https://www.cainafrica.org/#/"
    }
]