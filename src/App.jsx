
import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';


const fetchPlayer = async () =>{
  const response = await fetch("/players.json");
  return response.json();
}

function App() {

  const playersPromise = fetchPlayer();

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>

    <Suspense fallback = {<span className="loading loading-dots loading-lg  "></span>}>

    <Players playersPromise = {playersPromise}></Players>

    </Suspense>
    </>
  )
}

export default App
