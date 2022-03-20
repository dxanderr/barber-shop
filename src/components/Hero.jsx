import HeroBg from '../assets/hero.jpeg'

export default function Hero(){
    return(
        <div className="hero-container">
            <div style={{
                    backgroundImage: `linear-gradient(
                        rgba(3, 12, 18, 0.95), 
                        rgba(145, 146, 122, 0.42)), 
                        url(${HeroBg})`, 
                    backgroundSize: "cover", 
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }} 
                className="hero-bg">
            </div>
            <h3>Welcome to Clips & Fade City</h3>
            <button className="book-btn">
                <a href="/">Book</a>    
            </button>
        </div>
    )
}