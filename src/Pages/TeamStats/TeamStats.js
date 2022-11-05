import { useEffect, useState } from 'react';
import teamData from '../../Data/teamStats.Data'
import TeamCard from '../../Components/TeamCard/TeamCard.js';
import './TeamStats.css'

export default function TeamStats() {
    const [allteams, setAllTeams] = useState([]);

    useEffect(() => {
        teamData.getAllTeams()
          .then((data) => setAllTeams(data))
          .catch((error) => console.log(error))
      },[]);
    
    return (
        <div>
        {allteams.map((teams) => <TeamCard teams={teams}/>)}
        </div>
    )
}