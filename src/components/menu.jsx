import React from 'react';
import MenuItem from './menuItem.jsx';
import HeatmapThumb from './logo.jsx';

const menuFrame ={
	backgroundColor:"ffffff",
	height:"70vh",
	width:"85vh",
	border: "1px solid",
	borderRadius:"20% 70% / 10%",
	marginTop: "5vh" 
};



const Menu =()=>{
	return(
		<div className='flex -col -center' style={menuFrame}>
		    <h3>CCC heat map</h3>
	            <MenuItem btn1='About' btn2='Contact' content ={<HeatmapThumb/>}/> 
		</div>  
	);

};

export default Menu;

	
