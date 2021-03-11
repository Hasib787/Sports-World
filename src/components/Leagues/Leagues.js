import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Leagues = (props) => {
    const { idLeague, strLeagueAlternate, strSport } = props.leagues;

    const history = useHistory();
    const showLeagueDetails = idLeague => {
        const url  = `leagues/${idLeague}`;
        history.push(url);
    }


    return (
        <div className="container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>{strLeagueAlternate}</Card.Title>
                    <Card.Text>
                        Sports type: {strSport}
                    </Card.Text>
                    <Button onClick={()=> showLeagueDetails(idLeague)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Leagues;