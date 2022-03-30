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
                    <button className="barber-selection-btn">Next</button>
                </div>
    })
    return(
        <div className="shopx-container">
            <h4>Choose a Barber</h4>
            {teammatePanels}
        </div>
    )
}