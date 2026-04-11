import React from 'react';
import { FaTrash } from 'react-icons/fa';

const SelectedPlayers = ({ player }) => {
    return (
        <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4 shadow-sm">
            
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
            <button className="text-red-500 hover:text-red-700">
                <FaTrash />
            </button>
        </div>
    );
};

export default SelectedPlayers;