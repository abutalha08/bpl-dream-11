import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({playersData}) => {
    console.log(playersData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {
                playersData.map((player,index) => <PlayerCard key={ index} player = {player} ></PlayerCard>)
            }
            
        </div>
    );
};

export default AvailablePlayers;