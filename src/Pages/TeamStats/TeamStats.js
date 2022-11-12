import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import offenseData from '../../Data/offense.Data';
import TotalOffLogo from '../../Static/totalOffense.jpg'
import './TeamStats.css';

export default function TeamStats() {
    const [offenseStats, setOffenseStats] = useState([]);
    const navigate = useNavigate();
    const name = "hello";

    useEffect(() => {
        offenseData.getAllOffenseStats()
            .then((data) => {
                setOffenseStats(data[0]);
                console.log(data[0], 'offense');
            })
            .catch((error) => console.log(error))
        console.log(offenseStats)
    }, []);

    if (offenseStats !== null) {
        return (
            
            <div className="teamStatsContainer">
                <Card sx={{ maxWidth: 345, minWidth: 300, backgroundColor: 'black', color: 'white', border: 'solid', margin: 1 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={TotalOffLogo}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Total Offense
                        </Typography>
                        <Typography variant="body2" color="white">
                            Ranking: {offenseStats.TotalOffRank}
                        </Typography>
                        <Typography variant="body2" color="white">
                            Yards Per Game: {offenseStats.TotalOffYPG}
                        </Typography>
                        <Typography variant="body2" color="white">
                            Yard Per Play: {offenseStats.TotalOffYPP}
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345, minWidth: 300, backgroundColor: 'black', color: 'white', border: 'solid', margin: 1 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={TotalOffLogo}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Scoring Offense
                        </Typography>
                        <Typography variant="body2" color="white">
                            Ranking: {offenseStats.ScoringOffRanking}
                        </Typography>
                        <Typography variant="body2" color="white">
                            Total Points: {offenseStats.ScoringOffPoints}
                        </Typography>
                        <Typography variant="body2" color="white">
                            Points Per Games: {offenseStats.ScoringOffPPG}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
