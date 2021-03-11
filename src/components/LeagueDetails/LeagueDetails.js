import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import imageMale from '../../images/Photo/male.png';
import imageFemle from '../../images/Photo/female.png';
import './LeagueDetails.css';
import banner from '../../images/Photo/banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
import '../Footer/Footer.css';
import { Card, Col } from 'react-bootstrap';

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
            <div className="header-container">
                <img src={banner} alt="" />
                <div className="logo">
                    <img src={leagueDetails.strBadge} alt="" />
                </div>
            </div>
            <div className="card-container">
                    <div className="card-text">
                        <h1>{leagueDetails.strLeagueAlternate}</h1>
                        <p>Founded: {leagueDetails.intFormedYear}</p>
                        <p>Country: {leagueDetails.strCountry}</p>
                        <p>Spote Type: {leagueDetails.strSport}</p>
                        <p>Gender: {leagueDetails.strGender}</p>
                    </div>
                    <div className="card-img">
                        {
                            leagueDetails.strGender ? <img src={imageMale} alt="" /> : <img src={imageFemle} alt="" />
                        }
                        
                    </div>
                </div>
            <div className="description"> <p>{leagueDetails.strDescriptionEN}</p></div>

            <div className="footer">
                <div className="twitter"><a href={leagueDetails.strTwitter}><FontAwesomeIcon icon={faTwitter} /></a></div>
                <div className="facebook"><a href={leagueDetails.strYoutube}><FontAwesomeIcon icon={faFacebook} /></a></div>
                <div className="youtube"> <a href={leagueDetails.strFacebook}><FontAwesomeIcon icon={faYoutube} /></a></div>
            </div>

        </div>
    );
};

export default LeagueDetails;