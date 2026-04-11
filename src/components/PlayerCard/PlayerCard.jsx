import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const PlayerCard = ({player}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='p-4'>
    <img
      src= {player.playerImg}
      alt= {player.playerName}
       className=" w-85 h-65 rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> <FaUser></FaUser> {player.playerName}</h2>
    <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <FaFlag className='text-gray-500'></FaFlag>
        <p className='text-gray-500 font-semibold'>{player.playerCountry}</p></div>
        <button className='btn'>{player.playerType}</button>
    </div>
    <div className="divider"></div>
    <h2 className='font-bold'>Rating: {player.rating}</h2>
    <div className='flex justify-between font-bold items-center'>
        <p>{player.battingStyle}</p>
        <p className='text-right'>{player.bowlingStyle}</p>
    </div>
    <div className="flex justify-between items-center">
        <p className='font-semibold'>Price: $<span>{player.price}</span></p>
      <button className="btn">Choose Player</button>
    </div>
  </div>
</div>
    );
};

export default PlayerCard;