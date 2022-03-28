import HeroBg from '../../assets/hero.jpeg'

export default function Book(){
    return(
        <div className="book-container">
            <h4>Choose Shop</h4>
            <div className="shop-cards-container">
                <div className="shop-card">
                    <div className="shop-image-container">
                        <img src={HeroBg} alt="barber-shop"/>
                    </div>
                    <div className='shop-details'>
                        <p className="shop-name">Houston Barber Plus</p>
                        <p className="shop-address">222 Tree Lane</p>
                        <p className="shop-contact">999-777-1823</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}
