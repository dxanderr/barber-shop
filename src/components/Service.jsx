import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function Service(props){
    const {open, title, toggle, services, formData, handleChange} = props
    
    // Service Option Component
    // Number of services for each category (Adult, Kid, etc..)
    const len = services.length

    // Creating all components based on services passed from each category
    const serviceOptions = services.map((service, index) =>{
        const selection = services[index].service
        const price = services[index].price
        const duration = services[index].duration
        const id = services[index].id
        return(
            <div className="services-option" key={index}>
                <div className="services-option-left">
                    <p className="services-option-title">{selection}</p>
                    <p className="price-time"><i>{`${price}, ${duration}`}</i></p>
                </div>
                <div className="services-option-right">
                    <label 
                        className="service-option-select"
                        htmlFor={id}
                    >
                        <input 
                            className="checkbox" 
                            type="checkbox"
                            id={id}
                            checked={formData.id}
                            onChange={handleChange}
                        />
                        <span>Select</span>
                    </label>
                </div>
            </div>
        )        
    })

    // Dynamic Styles - Show All Vs Default (3)
    const servicesSection = {
        maxHeight: open ? "inherit" : "400px"
    }
    const expandBtn = {
        display: open ? "none" : "flex"
    }

    // Only display arrow icon if more than 3 options
    const arrowIcons = {
        display: len > 3 ? "inherit" : "none"
    }

    return(
        <div className="services-section" style={servicesSection}>
            <li className="list-group-item">
                <div className="section-title" id="adults" onClick={toggle}>
                    <h2 className="section-title-text">{title}</h2>
                    {open ?
                        <span className="section-icon" style={arrowIcons}><IoIosArrowUp /></span> :
                        <span className="section-icon" style={arrowIcons}><IoIosArrowDown /></span>
                    }
                </div>
                {
                    len > 3 && 
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