import React, { useState } from "react"


const Light = () => {

    const [background, setBackground] = useState("bg-info")

    return (
        <div className="border border-white border-radius">
            < div id="circle" className={background} >
                <div className='buttons'>
                    <button type="button" className="btn btn-success" onClick={() => setBackground('bg-success')}>
                        Green light
                    </button>
                    <button type="button" className="btn btn-warning" onClick={() => setBackground('bg-warning')}>
                        Orange light
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => setBackground('bg-danger')}>
                        Red light
                    </button>
                   
                </div>
            </div>
        </div>


    )
}



export default Light;