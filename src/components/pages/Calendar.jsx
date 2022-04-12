import Calendar from "../CalendarData"
import Navbar from "../Navbar"

export default function Scheduler(){

    const set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ]

    const calendarElements = set.map(item =>{     
        return(
            <div key={item} className="calendar-item">  
                <div className={`item item${item}`}>
                    <div className="item-content">
                        <span className="calendar-day">
                            <i>
                                Tues
                            </i></span>
                        <span className="num-day">{item}</span>
                        Apr
                    </div>
                </div>
            </div>
        )
    })


    return(
        <div className="calendar-container">
            <Navbar theme="dark" backBtn={true}/>
           <h4 className="calendar-header">
               Choose a day
            </h4> 
           <p className="calendar-subheader">Houston Barber Shop, Houston</p>
           <div className="calendar-items-container">
            {calendarElements}
           </div>
        </div>
    )
}