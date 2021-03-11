import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { useParams } from 'react-router';

const Footer = () => {
    const {idLeague} = useParams()
    const [leagueDetails, setleagueDetails] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setleagueDetails(data.leagues[0]))
    }, [idLeague])

    return (
        <div className="footer">
            <div className="twitter"><a href={leagueDetails.strTwitter}><FontAwesomeIcon icon={faTwitter} /></a></div>
            <div className="facebook"><a href={leagueDetails.strYoutube}><FontAwesomeIcon icon={faFacebook} /></a></div>
            <div className="youtube"> <a href={leagueDetails.strFacebook}><FontAwesomeIcon icon={faYoutube} /></a></div>
        </div>
    );
};

export default Footer;