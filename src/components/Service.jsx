import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function Service({open, title, toggle}){

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
                <div className="expand-btn" style={expandBtn}><p>Show all 8 services</p></div>
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
    )   
}