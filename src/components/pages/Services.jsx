import { useState } from 'react';
import Navbar from "../Navbar";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { AiOutlineSchedule } from 'react-icons/ai'

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
                                    <a className="next-btn" href="/">Next
                                        <AiOutlineSchedule className="cart-icon" />
                                    </a>    
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
                                    <div className="expand-btn"><p>Show all 8 services</p></div>
                                    <li className="services-option">
                                        <div className="services-option-left">
                                            <p className="services-option-title">Hair and Beard</p>
                                            <p className="price-time"><i>30 minutes, $20 </i></p>
                                        </div>
                                        <div className="services-option-right">
                                            <a className="service-option-select" ahref="/">Select</a>
                                        </div>
                                    </li>
                                    <li className="services-option">
                                        <div className="services-option-left">
                                            <p className="services-option-title">Hair and Beard</p>
                                            <p className="price-time"><i>30 minutes, $20 </i></p>
                                        </div>
                                        <div className="services-option-right">
                                            <a className="service-option-select" ahref="/">Select</a>
                                        </div>
                                    </li>
                                    <li className="services-option">
                                        <div className="services-option-left">
                                            <p className="services-option-title">Hair and Beard</p>
                                            <p className="price-time"><i>30 minutes, $20 </i></p>
                                        </div>
                                        <div className="services-option-right">
                                            <a className="service-option-select" ahref="/">Select</a>
                                        </div>
                                    </li>
                                    <li className="services-option">
                                        <div className="services-option-left">
                                            <p className="services-option-title">Hair and Beard</p>
                                            <p className="price-time"><i>30 minutes, $20 </i></p>
                                        </div>
                                        <div className="services-option-right">
                                            <a className="service-option-select" ahref="/">Select</a>
                                        </div>
                                    </li>
                                </li>
                            </div>
                            <div className="services-section">
                                <li className="list-group-item">
                                    <div className="section-title" onClick={toggleDropdown}>
                                        <h2 className="section-title-text">Kids</h2>    
                                        { servicesDropdown ? 
                                            <span      className="section-icon"><IoIosArrowDown/></span> :
                                            <span className="section-icon"><IoIosArrowUp /></span>
                                        } 
                                    </div>   
                                    <div className="expand-btn"><p>Show all 8 services</p></div>
                                    <li className="services-option">
                                        <div className="services-option-left">
                                            <p className="services-option-title">Hair and Beard</p>
                                            <p className="price-time"><i>30 minutes, $20 </i></p>
                                        </div>
                                        <div className="services-option-right">
                                            <a className="service-option-select" ahref="/">Select</a>
                                        </div>
                                    </li>
                                    <li className="services-option">
                                        <div className="services-option-left">
                                            <p className="services-option-title">Hair and Beard</p>
                                            <p className="price-time"><i>30 minutes, $20 </i></p>
                                        </div>
                                        <div className="services-option-right">
                                            <a className="service-option-select" ahref="/">Select</a>
                                        </div>
                                    </li>
                                    <li className="services-option">
                                        <div className="services-option-left">
                                            <p className="services-option-title">Hair and Beard</p>
                                            <p className="price-time"><i>30 minutes, $20 </i></p>
                                        </div>
                                        <div className="services-option-right">
                                            <a className="service-option-select" ahref="/">Select</a>
                                        </div>
                                    </li>
                                    <li className="services-option">
                                        <div className="services-option-left">
                                            <p className="services-option-title">Hair and Beard</p>
                                            <p className="price-time"><i>30 minutes, $20 </i></p>
                                        </div>
                                        <div className="services-option-right">
                                            <a className="service-option-select" ahref="/">Select</a>
                                        </div>
                                    </li>
                                </li>
                            </div>
                            <li id="cart-summary">
                                <div className="cart-summary-left">
                                    <p>0 services selected</p>
                                </div>
                                <div className="cart-summary-right">
                                    <a className="cart-summary-next-btn" href="/">Next 
                                        <AiOutlineSchedule className="cart-icon" />
                                    </a>
                                </div>
                            </li>
                        </form>    
                    </ul>    
                </div>    
            </div>
        </div>
    )
}