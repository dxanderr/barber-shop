import { useState } from 'react';
import Navbar from "../Navbar";
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { AiOutlineSchedule } from 'react-icons/ai'
import Service from '../Service';
import ServicesData from '../ServicesData';

export default function Services(){
    const [services, setServices] = useState(ServicesData)
    

    const servicesElements = services.map((service)=>(
        <Service 
            key={service.id}
            title={service.category}
            open={service.open}
            services={service.services}
            toggle={()=>toggle(service.id)}
        />
    ))

    function toggle(id){
        setServices(prevServices => {
            return prevServices.map((service)=>{
                return service.id === id ? {...service, open: !service.open, title: service.title} : service
            })
        })
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
                            {servicesElements}
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