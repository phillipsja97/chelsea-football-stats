import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

export default function TeamStats() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/totalOffense')
    }
    return (
        <div className="teamStatsContainer">
            <h1 className="teamStats">TeamStats</h1>
            <Button variant="outlined" onClick={handleClick}>Total Offense</Button>
        </div>
    )
}