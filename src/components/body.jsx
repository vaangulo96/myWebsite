import React from "react";
import Welcome from "./welcomeBan.jsx";
import ProfilePic from "./ProfilePic.jsx";
import Menu from "./menu.jsx";


const page_style= {
	backgroundColor: "000000",
	justifyContent: "flex-start"
	
}
const Body = () =>{
    return(
	<div className='full-screen flex -col -center' style={page_style}>
		<Welcome/>
		<ProfilePic />
		<Menu />
		
	</div>
    );
};
export default Body;


