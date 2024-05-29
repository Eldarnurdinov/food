import HeroBg from "../assets/hero.png"



const Hero = () => {
    return (
        <div style={{background: `url(${HeroBg}) no-repeat center/cover`}}>
            <div className="container hero">
                <h1 className="title">Best food for
                    your taste</h1>
                <p className="desc">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
                <div className="hero-btn">
                    <button className="btn brown-btn">Book A Table</button>
                    <button className="btn">Explore Menu</button>
                </div>
            </div>
        </div>
    )
}

export default Hero