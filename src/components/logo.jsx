import React from 'react';

const logo_background ={
    backgroundColor:'black',
    height:'85%',
    width:'85%'
};

const ccc_logo ={
    backgroundColor:'pink',
    height:'25vh',
    width:'25vh'
};

const HeatMapThumb =()=>{
	return(
		<div style={logo_background}>
			<div className="circle" style={ccc_logo}></div>
		</div>	
	);
};

export default HeatMapThumb;
