import ReactDOM from 'react-dom';
import logo from "../assets/barber.svg"
import Map from "../assets/map.png"
import team from "../components/Teammates"

export default function Main(){
    const teammateObjects = team.map(group =>{
        return <li 
            key={group.id}
            className="teammate_object">
                <img src={group.photo} className="teammate-photo" alt={group.name} />
                <p className="teammate-name"><strong>{group.name}</strong></p>
            </li>
    })

    return(
        <div className="main-container">
            
            {/* Button Group */}
            <section className="button-group">
                <a className="button main-buttons" href="/register">Register</a>    
                <a className="button main-buttons" href="/login">Login</a>    
                <a className="button main-buttons" href="/book">Book</a>    
            </section>

            {/* Flex Group | Logo Block and Welcome Message */}
            <div className="flex-group">

                {/* Logo Block */}  
                <section className="logo-block">
                    <img src={logo} alt="logo" className="logo-block-img"/>
                </section>

                {/* Welcome Message */}
                <section className="welcome-section">
                    <h4 className="welcome-header">Welcome</h4>
                    <p className="welcome-message first"><strong>Thank you for booking with clips and fade 💈</strong></p>    
                    <p className="welcome-message second">We are experts in Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quibusdam. <br/> Feel free to contact the salon with questions.</p>
                </section>

            </div>

            {/* Team Section */}
            <section className="team-section">
                <h4 className="team-section-header">About</h4>
                <ul className="team-members">
                    { teammateObjects }
                </ul>
            </section>

            {/* Map Section */}
            
            <section className="map-section">
                <img src={Map} alt="map" className="map"/>
            </section>

        </div>
    )
}