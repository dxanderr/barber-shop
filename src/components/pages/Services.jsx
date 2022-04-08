import { useState } from 'react';
import Navbar from "../Navbar";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function Services(){
    const [servicesDropdown, setServicesDropdown] = useState(true);

    function toggleDropdown(){
        setServicesDropdown(prevState => !prevState)
    }

    return(
        <div className="services-container">
            <Navbar theme="dark" backBtn={true}/>
            <h4 className="services-header">Select up to 20 services</h4>
            <div className="collapsible-menu">
                <div className="sizing">
                    <ul className="list-group">
                        <form className="services-form">
                            <li className="services-summary">
                                <div className="left-side">
                                    <p>0 services selected</p>    
                                </div>
                                <div className="right-side">
                                    <a className="next-btn active" href="/">Next</a>    
                                </div>    
                            </li>
                            <div className="services-section">
                                <li className="list-group-item">
                                    <div className="section-title" onClick={toggleDropdown}>
                                        <h2 className="section-title-text">Services</h2>    
                                        { servicesDropdown ? 
                                            <span      className="section-icon"><IoIosArrowDown/></span> :
                                            <span className="section-icon"><IoIosArrowUp /></span>
                                        } 
                                    </div>    
                                </li>
                            </div>
                        </form>    
                    </ul>    
                </div>    
            </div>
        </div>
    )
}