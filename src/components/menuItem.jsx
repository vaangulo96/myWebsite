import React from 'react'

const menu_content = {
	height:"80%",
	width:"100%",
	backgroundColor:"ff9966",//cream orange
	color:"000000",
};

const menu_nav= {
	//backgroundColor:"blue" //dev only
};

const nav_button={
	backgroundColor:"33ff66",//neon mint
	color:"000000",
	height:"80%",
	width:"33%",
	border:"1px solid 33ff66",
	borderRadius:"20%"
};

const content={
	backgroundColor:'grey',
	height:'50vh',
	width:'50vh'
};



const MenuItem=(props)=>{

	return(
	     <div className="flex -col" style ={menu_content}>
	         <div className='rectangle-row flex -row -center' style={menu_nav}>
		    <button lassName="flex -row =center"style={nav_button}>{props.btn1}</button>
                    <button className="flex -row -center"style={nav_button}>{props.btn2}</button>
		    <div style={content}> {props.content}</div>
		 </div>
	     </div>
	);
};

export default MenuItem;
