import Navbar from '../Navbar';
import team from '../Teammates';

export default function ShopX(){

    const teammatePanels = team.map( barber =>{
        return <div className="barber-panel" key={barber.id}>
                    <div className="panel-left">
                        <div className="panel-image-container">    
                            <img src={barber.photo} alt="barber" className="panel-image"/>
                        </div>

                        <p className="panel-name">{barber.name}</p>
                    </div>
                    <a className="button barber-selection-btn" href="/book/shopx/barber/services">Next</a>
                </div>
    })
    return(
        <div className="shopx-container">
            <Navbar theme="dark"/>
            <h4>Choose a Barber</h4>
            {teammatePanels}
        </div>
    )
}