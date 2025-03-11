export const MenuSection = () => {
    return (
        <>
        <div className="menuContainer">
            <div className="menuTitle">
                <h1>Verona</h1>
                <h2>Meny</h2>
            </div>
            
            <h3>ANTIPASTI (FÖRRÄTTER)</h3>
            <ul>
                <li>Bruschetta al Pomodoro <span className="price">85 SEK</span></li>
                <li className="menuText">Rostad brödskiva med tomater, basilika och vitlök</li>
                <li>Carpaccio di Manzo <span className="price">135 SEK</span></li>
                <li className="menuText">Tunt skivad oxfilé med rucola, parmesan och citron</li>
                <li>Caprese <span className="price">110 SEK</span></li>
                <li className="menuText">Buffelmozzarella med tomater, basilika och olivolja</li>
                <li>Antipasto Misto <span className="price">145 SEK</span></li>
                <li className="menuText">Ett urval av italienska charkuterier, ostar och oliver</li>
            </ul>
            
            <h3>SECONDI PIATTI (VARMRÄTTER)</h3>
            <ul>
                <li>Spaghetti Carbonara <span className="price">155 SEK</span></li>
                <li className="menuText">Med pancetta, ägg, pecorino och svartpeppar</li>
                <li>Tagliatelle al Tartufo <span className="price">175 SEK</span></li>
                <li className="menuText">Hemgjord pasta med tryffelsås och parmesan</li>
                <li>Lasagna alla Bolognese <span className="price">160 SEK</span></li>
                <li className="menuText">Klassisk lasagne med köttfärssås och béchamel</li>
                <li>Risotto ai Frutti di Mare <span className="price">185 SEK</span></li>
                <li className="menuText">Krämig risotto med skaldjur</li>
            </ul>
            
            <h3>DOLCI (DESSERTER)</h3>
            <ul>
                <li>Tiramisu <span className="price">95 SEK</span></li>
                <li className="menuText">Klassisk italiensk dessert med kaffe, mascarpone och kakao</li>
                <li>Cannoli Siciliani <span className="price">90 SEK</span></li>
                <li className="menuText">Spröda rullar fyllda med ricotta och choklad</li>
                <li>Gelato Artigianale <span className="price">80 SEK</span></li>
                <li className="menuText">Hemgjord italiensk glass</li>
            </ul>
            
            <h3>BEVANDE (DRYCKER)</h3>
            <ul>
                <li>Husets vin (rött/vitt) <span className="price">95 SEK</span></li>
                <li>Prosecco <span className="price">110 SEK</span></li>
                <li>Aperol Spritz <span className="price">120 SEK</span></li>
                <li>Espresso <span className="price">35 SEK</span></li>
                <li>Cappuccino <span className="price">45 SEK</span></li>
            </ul>
        </div>
        </>
    )
}