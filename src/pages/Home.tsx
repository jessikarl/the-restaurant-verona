import { BookingLink } from "../components/BookingLink";
import { ImageSlider } from "../components/ImageSlider";
import { MenuSection } from "../components/MenuSection";
import "./../styles/_home.scss"
import bolognese from "../assets/images/bolognese.jpg";
import parmesan from "../assets/images/parmesan.jpg";
import pasta from "../assets/images/pasta.jpg";
import hero from "../assets/images/hero.jpg";



const IMAGES = [pasta, bolognese, parmesan]

export const Home = () => {
    return (
        <>
        <div className="heroImage">
            <img src={hero} alt="Restaurant hero image"/>
        </div>

        <div className="home-content-container">
        <div className="aboutContainer">
            <div className="aboutText">
                <h3>Ciao, välkommen till Verona!</h3>
                <p>
                    Verona är en autentisk italiensk restaurang som kombinerar traditionella 
                    smaker med en modern twist. Här möts du av en varm och inbjudande atmosfär 
                    där doften av nybakad focaccia och långkokta pastasåser fyller rummet.
                </p>
            </div>
        </div>

        <div className="slideshowContainer">
           <ImageSlider imageUrls={IMAGES}/>
        </div>

        <div className="imageContainer">
            <div className="imagesHome">
                <div className="imageBox">
                    <img src={pasta} alt="Pasta"/>
                </div>
                <div className="imageBox">
                    <img className="bolgonese" src={bolognese} alt="Bolgonese"/>
                </div>
                <div className="imageBox">
                    <img src={parmesan} alt="Parmesan"/>
                </div>
            </div>
        </div>

        <div id="menu">
            <MenuSection/> 
        </div>

        <BookingLink/>
        </div>
        </>
    );
};