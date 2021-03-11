import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router';
import image from '../../images/Photo/male.png';
import './LeagueDetails.css';

const LeagueDetails = () => {

    const { idLeague } = useParams()

    const [leagueDetails, setleagueDetails] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setleagueDetails(data.leagues[0]))
    }, [idLeague])


    return (
        <div>
            <Header></Header>
            {/* <div className="header-logo">
                <img src={leagueDetails.strBadge} alt="" />
            </div> */}

            <div className="card-container">
                <div className="card-text">
                    <p>Founded: {leagueDetails.intFormedYear}</p>
                    <p>Country: {leagueDetails.strCountry}</p>
                    <p>Spote Type: {leagueDetails.strSport}</p>
                    <p>Gender: {leagueDetails.strGender}</p>
                </div>
                <div className="card-img">
                    <img src={image} alt=""/>
                </div>
            </div>
            <div className="description"> <p>{leagueDetails.strDescriptionEN}</p></div>

        </div>
    );
};

export default LeagueDetails;