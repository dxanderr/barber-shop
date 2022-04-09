import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function Service(props){
    const {open, title,  toggle, services} = props

    // Number of services for each category (Adult, Kid, etc..)
    const len = services.length

    // Services Options Per Category
    const serviceOptions = services.map((service, index) =>{
        return(<li className="services-option">
            <div className="services-option-left">
                <p className="services-option-title">{services[index].service}</p>
                <p className="price-time"><i>{`${services[index].price}, ${services[index].duration}`}</i></p>
            </div>
            <div className="services-option-right">
                <label className="service-option-select">
                    <input className="checkbox" type="checkbox" />
                    <span>Select</span>
                </label>
            </div>
        </li>)        
    })

    const servicesSection = {
        maxHeight: open ? "inherit" : "400px"
    }
    const expandBtn = {
        display: open ? "none" : "flex"
    }

    return(
        <div className="services-section" style={servicesSection}>
            <li className="list-group-item">
                <div className="section-title" id="adults" onClick={toggle}>
                    <h2 className="section-title-text">{title}</h2>
                    {open ?
                        <span className="section-icon"><IoIosArrowUp /></span> :
                        <span className="section-icon"><IoIosArrowDown /></span>
                    }
                </div>
                {
                    len > 4 && 
                    <div 
                        className="expand-btn" 
                        style={expandBtn}
                        onClick={toggle}
                    >
                        <p>{`Show all ${len} services`}</p>
                    </div>
                }
                {serviceOptions}
            </li>
        </div>
    )   
}