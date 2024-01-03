import React from "react";
import UserContext from "../utils/UserContext";

class AboutClass extends React.Component{
    render(){
        return(
            <div>
                   <div>
                <UserContext.Consumer>
                    {(data)=>console.log(data)}
                </UserContext.Consumer>
                </div>
            </div>
        )
    }
}

export default AboutClass