import { useState } from 'react';
import Navbar from "../Navbar";
import { AiOutlineSchedule } from 'react-icons/ai'
import Service from '../Service';
import ServicesData from '../ServicesData';

export default function Services(){
    const [serviceGroups, setServiceGroups] = useState(ServicesData)

    // Default form state based on groups ( Each barber/salon worker may serve different groups )
    // Goal - Get 'service' keys (aka name of  service) for each group in array of groups and place in a new array. This array will be used to create a unique dictionary needed for the formState so that when users click on a particular service, this information can be updated with the form state. 

    const output = (serviceGroups.map((service, index)=>{
        return serviceGroups[index].services.map(serviceObj =>{
            return `${serviceGroups[index].category}:${serviceObj.service}`
        })
    })).join(',')

    // transform string to array
    const allServices = output.split(',')

    // Take Output ( List of Services ) and create an object that can represent our intial form state
    let dict = {}
    // Function to place services in dictionary
    let addProp = (obj, propName, propValue)=>{
        obj[propName] = propValue
    }

    for( let i=0; i < allServices.length; i++){
        addProp(dict, [i+1], false)
    }

    // Set Form State
    const [formData, setFormData] = useState(dict)
    
    // Updating Form State
    function handleChange(event) {
        const { id, checked } = event.target
        console.log(id, checked)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [id]: checked
            }
        })
    }

    // Update Next Button Once User Makes Selection
    let selected = Object.values(formData).includes(true);

    // Keep track of how many items have been selected
    let num_selected = Object.values(formData).reduce((a, item) => a + item, 0)
    console.log(num_selected)

    // Toggling Group Dropdown Menu
    function toggle(id){
        setServiceGroups(prevState => {
            return prevState.map((group)=>{
                return group.id === id ? {...group, open: !group.open} : group
            })
        })
    }
    // Service Elements
    const servicesElements = serviceGroups.map((group)=>(
        <Service 
            key={group.id}
            id={group.id}
            title={group.category}
            open={group.open}
            services={group.services}
            toggle={()=>toggle(group.id)}
            formData={formData}
            handleChange={handleChange}
        />
    ))
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
                                    <a className={selected ? 'next-btn active' : 'next-btn'} href="/">Next
                                        <AiOutlineSchedule className="cart-icon" />
                                    </a>    
                                </div>    
                            </li>
                            {servicesElements}
                            <li id="cart-summary">
                                <div className="cart-summary-left">
                                    <p>{num_selected !== 1 ? 
                                        `${num_selected} services selected` : 
                                        `${num_selected} service selected`}
                                    </p>
                                </div>
                                <div className="cart-summary-right">
                                    <a className={selected ? "cart-summary-next-btn active" : "cart-summary-next-btn"} href="/">Next 
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