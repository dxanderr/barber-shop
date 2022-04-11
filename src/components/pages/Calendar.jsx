import Calendar from "../CalendarData"

export default function Scheduler(){


    const test = Calendar.map((month, index)=>{
        return Calendar[index]
    })

    console.log(test)

    // const calendarElements = Calendar.map(month=>{
    //     return (
    //         <div className="day">
                
    //         </div>
    //     )
    // })
    return(
        <div className="calendar-container">
           <h4>Choose a day</h4> 
           <p>Houston Barber Shop</p>

        </div>
    )
}