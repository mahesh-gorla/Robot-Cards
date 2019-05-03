import React from 'react';
import Card from './Card';


const CardList =( {robots} )=>{
    return(
            <div>
                {
                    robots.map((i) => {
                return (
                    <Card key={i} id={i.id} name={i.name} email={i.email}
                    />
                );
                })
            }
            </div>
    );
}

export default CardList;