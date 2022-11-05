import { useEffect, useState } from 'react';
import teamData from '../../Data/teamStats.Data'
import './TeamCard.css'

export default function TeamCard(props) {
    const [team, setTeam] = useState({});

    useEffect(() => {
        setTeam(props.teams);
        console.log(props.teams);
;    },[props.team])
    
    return (
        <div>
        <h1 className="teamCard">#{team.ranking} {team.team}</h1>
        </div>
    )
}