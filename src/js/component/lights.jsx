import React, { useState } from "react"


const Light = () => {

    const [red, setColor1] = useState("bg-white")
    const [orange, setColor2] = useState("bg-white")
    const [green, setColor3] = useState("bg-white")

    return (
        <div className= "container">
               
                    <div id="red-circle" className={red}  onClick={() => setColor1 ('bg-danger')}>
                        
                </div>

                    <div id="orange-circle" className={orange} onClick={() => setColor2 ('bg-warning')}>
                        
                        </div>

                        <div id="green-circle" className={green} onClick={() => setColor3 ('bg-success')}>
                        
                    </div>
                    
               </div>   
               
               
    


    )
}



export default Light;