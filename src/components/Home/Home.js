import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Leagues from '../Leagues/Leagues';
import './Home.css'

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php/`;
        fetch(url)
        .then (res => res.json())
        .then(data => setLeagues(data.leagues))
    },[])
    

    return (
        <div>   
            <Header></Header>
           <div className="home-container">
           {
                leagues.map(le => <Leagues leagues={le}></Leagues>)
            }
           </div>
           
        </div>
    );
};

export default Home;