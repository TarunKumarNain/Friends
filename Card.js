import React from 'react';

const Card = (props) => {
	 const {name, email, username} = props;
	return (
         <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >  
	         <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
	           <div> 
	             <h2> Name - {name} </h2>
	             <p> email - {email} </p>
	             <h5> UserName - {username} </h5>
	         </div>
	      </div>
		)
}

export default Card;