import React, { useState } from "react"


const Light = () => {

    const [color, setColor] = useState()

    return (
        <div className="container">

            <div  onClick={() => setColor('red')} className={"light red-palid red"+((color === "red")? " red-light  glow" : "")}>
            </div>
            <div  onClick={() => setColor('orange')} className={"light orange-palid orange"+((color === "orange")? " orange-light glow" : "")}>
            </div>
            <div  onClick={() => setColor('green')} className={"light green-palid green"+((color === "green")? " green-light glow" : "")}>
            </div>

        </div>





    )
}



export default Light;