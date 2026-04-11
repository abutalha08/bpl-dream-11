import React from 'react';
import { FaTrash } from 'react-icons/fa';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coins, setCoins }) => {
    console.log(selectedPlayers);

    const handleDeleteSelectedPlayer = (player) => {

        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName);
        setSelectedPlayers(filteredPlayers);

        setCoins(coins + player.price);

    }

    return (

        <div>

            {selectedPlayers.length === 0 ? (<div className='space-y-4 '>
                <p className="text-center text-gray-500 font-bold text-4xl">
                    No players are selected
                </p>
                <p className="text-center text-gray-500  text-xl">
                    Go to available tab to select players
                </p>
            </div>
            ) : (<div className='space-y-4'>

                {
                    selectedPlayers.map(player =>

                        <div key={player.id} className="flex items-center justify-between bg-gray-100 rounded-xl p-4 shadow-sm">

                            {/* Left Side */}
                            <div className="flex items-center gap-4">

                                {/* Image */}
                                <div className="w-12 h-12 bg-gray-300 rounded-md overflow-hidden">
                                    <img
                                        src={player.playerImg}
                                        alt={player.playerName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div>
                                    <h2 className="font-semibold text-lg">
                                        {player.playerName}
                                    </h2>
                                    <p className="text-gray-500 text-sm">
                                        {player.battingStyle}
                                    </p>
                                </div>
                            </div>

                            {/* Delete Button */}
                            <button onClick={() => handleDeleteSelectedPlayer(player)} className="text-red-500 hover:text-red-700">
                                <FaTrash />
                            </button>
                        </div>)
                }




            </div>)}
        </div>
    );
};

export default SelectedPlayers;