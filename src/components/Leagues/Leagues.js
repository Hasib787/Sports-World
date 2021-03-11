import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Leagues.css'

const Leagues = (props) => {
    const { idLeague, strLeagueAlternate, strSport } = props.leagues;

    const history = useHistory();
    const showLeagueDetails = id => {
        const url = `leagues/${id}`;
        history.push(url);
    }

    const [leagueDetails, setleagueDetails] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setleagueDetails(data.leagues[0]))
    }, [idLeague])

    return (
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="card-image" variant="top" src={leagueDetails.strBadge} />
            <Card.Body>
                <Card.Title>{strLeagueAlternate}</Card.Title>
                <p className="sports-text">Sports type: {strSport}</p>
                <Button onClick={() => showLeagueDetails(idLeague)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
            </Card.Body>
        </Card>

    );
};

export default Leagues;