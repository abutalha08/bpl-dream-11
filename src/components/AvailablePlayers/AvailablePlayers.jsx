import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playersData, coins, setCoins, selectedPlayers, setSelectedPlayers }) => {
    console.log(playersData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-64'>

            {
                playersData.map(player => <PlayerCard key={player.id} player={player} coins={coins} setCoins={setCoins} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ></PlayerCard>)
            }

        </div>
    );
};

export default AvailablePlayers;