import HeroBg from '../assets/hero.jpeg'

export default function Hero(){
    return(
        <div className="hero-container">
            <div style={{
                backgroundImage: `radial-gradient(rgba(
              145, 146, 122, 0.62), rgba(3, 12, 18, 0.58)), url(${HeroBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="hero-bg">
            </div>
            {/* <img src={HeroBg} alt="hero background" className="hero-bg" /> */}
            
        </div>
    )
}