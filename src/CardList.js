import React from 'react';
import Card from './Card'

const CardList = ({ dogs }) => {
    const cardComponent = dogs.map((dog, i) => {
        return <Card key={dogs[i].id}
            id={dogs[i].id}
            name={dogs[i].name}
            sex={dogs[i].sex}
            photo_url={dogs[i].photo_url}
        />
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;