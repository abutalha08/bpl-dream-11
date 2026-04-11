import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
   
    const playersData = use(playersPromise);

    console.log(playersData);
    
    return (
        <div className='max-w-10/12 mx-auto'>
            <h2> Players: {playersData.length}</h2>
            <AvailablePlayers playersData = {playersData}></AvailablePlayers>
        </div>
    );
};

export default Players;