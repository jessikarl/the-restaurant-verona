import "./../styles/contact.scss"
import contactHeroImage from "./../assets/images/focaccia.jpg";
import instaImg1 from "./../assets/images/charcuterie.jpg";
import instaImg2 from "./../assets/images/bartender.jpg";
import instaImg3 from "./../assets/images/tables.jpg";
import instaImg4 from "./../assets/images/pastaaperol.jpg";
import { BookingLink } from "../components/BookingLink";

export const Contact = () => {
    return (
        <>
        <div>
            <div className="contact-hero">
                <h3 className="contact-us-heading">Kontakta oss</h3>
                <img src={contactHeroImage} alt="foccacia"/>
            </div>
        </div>
       <div className="contact-container">
        <div className="contact-content">
                <div className="contact-column-box">
                    <div className="contact-column">
                        <h4>Kontakta oss</h4>
                        <div className="restaurant-address">
                            <p>Strandvägen 1</p>
                            <p>114 51 Stockholm</p>
                        </div>
                        <div className="contact-info">
                            <p>08 49 78 15</p>
                            <p>bokning@restaurangverona.se</p>
                        </div>
                    </div>
                    <div className="contact-column">
                        <h4>Press</h4>
                        <h5>Stella Sorrentino</h5>
                        <p>Kommunikation & PR</p>
                        <p>pr@restaurangverona.se</p>
                    </div>
                    <div className="contact-column">
                        <h4>Nyckelpersoner</h4>
                        <h5>Thomas Sundqvist</h5>
                        <p>Köksmästare</p>
                        <p>thomas.sundqvist@restaurangverona.se</p>
                    </div>
                    <div className="contact-column">
                        <h4>Öppetider</h4>
                        <p>Vardagar: 18.00 - 23.30</p>
                        <p>Lördagar: 18.00 - 23.30</p>
                        <p>Söndagar: 18.00 - 23.30</p>
                    </div>
                </div>
                <div className="instagram-container">
                        <h4>@restaurangverona</h4>
                        <div className="instagram-box">
                            <img src={instaImg1}/>
                            <img src={instaImg2}/>
                            <img src={instaImg3}/>
                            <img src={instaImg4}/>
                        </div>
                    </div>
            </div>
       </div>
       
       <BookingLink/>
        </>
    );
};