import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Leagues from '../Leagues/Leagues';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php/`;
        fetch(url)
        .then (res => res.json())
        .then(data => setLeagues(data.leagues))
    },[])

    // const [leagueDetails, setLeagueDetails] = useState({}); 

    // let idLeague;
    // useEffect(()=> {
    //     const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setLeagueDetails(data))
    // },[idLeague])

    return (
        <div>   
            <Header></Header>
            <h2>All Leagues:{leagues.length}</h2> 
            {
                leagues.map(le => <Leagues leagues={le}></Leagues>)
            }
            {/* {
                leagueDetails.map(ld => <Leagues leagueDetail={ld}></Leagues>)
            } */}
        </div>
    );
};

export default Home;