import React from 'react';

const Card = (props) => {
    const { name, sex, id, photo_url } = props;
    return (
        <div className=' tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='robots' src={photo_url} width="200" height="200" />
            <div>
                <h2>{name}</h2>
                <p>{sex}</p>
            </div>
        </div>
    );
}

export default Card;
