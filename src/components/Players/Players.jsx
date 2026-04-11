import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, coins, setCoins }) => {

    const playersData = use(playersPromise);

    // console.log(playersData);

    const [selectedTab, setSelectedTab] = useState("available");

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='max-w-10/12 mx-auto my-16 space-y-6     '>

            <div className='flex justify-between items-center '>
                {selectedTab === "available" ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Players ({selectedPlayers.length}/{playersData.length})</h2>}
                <div>
                    <button onClick={() => setSelectedTab("available")} className={`btn ${selectedTab === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={() => setSelectedTab("selected")} className={`btn ${selectedTab === "selected" ? "bg-[#E7FE29]" : ""}  rounded-l-none rounded-r-xl`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>

            {selectedTab === "available" ? <AvailablePlayers playersData={playersData} coins={coins} setCoins={setCoins} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}  ></AvailablePlayers> :

                <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coins={coins} setCoins={setCoins} ></SelectedPlayers>}

        </div>
    );
};

export default Players;