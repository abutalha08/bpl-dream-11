import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const PlayerCard = ({ player, coins, setCoins, selectedPlayers, setSelectedPlayers }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () => {

        let newCoins = coins - player.price;
        if (newCoins >= 0) {
            setCoins(newCoins);
        } else {
            toast.error("Not enough coins to purchase this player");
            return;
        }

        toast.success(`${player.playerName} is selected`);
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers, player])

    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <figure className="p-4">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className=" w-full h-64 object-cover rounded-xl"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {" "}
                    <FaUser></FaUser> {player.playerName}
                </h2>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <FaFlag className="text-gray-500"></FaFlag>
                        <p className="text-gray-500 font-semibold">
                            {player.playerCountry}
                        </p>
                    </div>
                    <button className="btn">{player.playerType}</button>
                </div>
                <div className="divider"></div>
                <h2 className="font-bold">Rating: {player.rating}</h2>
                <div className="flex justify-between font-bold items-center">
                    <p>{player.battingStyle}</p>
                    <p className="text-right">{player.bowlingStyle}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-semibold">
                        Price: $<span>{player.price}</span>
                    </p>
                    <button
                        type="button"
                        className="btn"
                        onClick={handleChoosePlayer}
                        disabled={isSelected ? true : false}
                    >
                        {isSelected === true ? "Selected" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
