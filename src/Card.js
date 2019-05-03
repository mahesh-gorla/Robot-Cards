import React from 'react';
const Card = (props) =>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
        <img alt='Robots image' src={`https://robohash.org/${props.id}`}/>
            <div>
            <h1>{props.id}</h1>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            </div>
        </div>
    );
}
export default Card;