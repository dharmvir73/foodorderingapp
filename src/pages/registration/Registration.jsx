import { useState } from "react"
import "./Registration.css"

const Registration = () => {

    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)

    const handleClick = () => {
        setFirst(true)
        setSecond(true)
    }
    const handleSecond = () => {
       setSecond(false)
       setThird(true)
    }
    return(

    <div className="container-wrapper" style={{backgroundImage:"lavender", width: "100%", height: "100%", position: "absolute"}}>

        {/* first input */}
        <div className="block-one" style={{display: first? "none":"inline"}}>
        <div className="wrapper">
            <div className="text">Register</div>
            <div className="input-field">
                <span className="text light">Email*</span>
                <input type="email" />
            </div>
            <div className="input-field">
                <span className="text light">Password*</span>
                <input type="password" />
            </div>
            <div className="input-field">
                <span className="text light">Confirm Password</span>
                <input type="password" />
            </div>
            <div className="next-btn" onClick={handleClick}>
                Next
            </div>
        </div>
        </div>
       
        {/* second input */}
        <div className="block-two" style={{display: !second? "none":"inline"}}    >
        <div className="wrapper">
            <div className="text">Personal Detail</div>
            <div className="input-field">
                <span className="text light">Name*</span>
                <input type="email" />
            </div>
            <div className="input-field">
                <span className="text light">Phone*</span>
                <input type="phone" />
            </div>
            <div className="input-field">
                <span className="text light">Address*</span>
                <input type="password" />
            </div>
            <div className="next-btn" onClick={handleSecond}>
                Next
            </div>
        </div>
        </div>

         {/* third input */}
        <div className="block-three" style={{display: !third? "none":"inline"}}   >
        <div className="wrapper">
            <div className="text">Business Detail</div>
            <div className="input-field">
                <span className="text light">Restaurant Name*</span>
                <input type="email" />
            </div>
            <div className="input-field">
                <span className="text light">City*</span>
                <select className="select-field" >
                    <option>delhi</option>
                    <option>mumbai</option>
                    <option>goa</option>
                </select>
            </div>
            <div className="input-field">
                <span className="text light">Restaurant Address*</span>
                <input type="text" />
            </div>
            <div className="next-btn">
                Submit
            </div>
        </div>
        </div>

    </div>
    )

}

export default Registration