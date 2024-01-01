import React from "react";
import User from "./User";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            count:0,
            location2:"dehradun",
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"dummy"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ydv-prdp")
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
    }
    render(){
        const {location2} = this.state;
        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className='user-card'>
                <h4>Class Based Component</h4>
                <h1>{name}</h1>
                <h2>{location}</h2>
                <img src={avatar_url}/>

                <button onClick={()=>{
                    this.setState({
                        count:this.state.count +   1
                        })
                }}>Click to increment count</button>
            </div>
        )
    }
}

export default UserClass;