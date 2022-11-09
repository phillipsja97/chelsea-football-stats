import { useEffect, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import './TotalOffenseRow.css'
import { Navigate } from 'react-router';

export default function TeamCard(props) {
    const [team, setTeam] = useState({});
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        setTeam(props.team);
        setColumns(props.columns);
        console.log(props);
    },[props.team]);

    const handleClick = (id) => {
        Navigate('/')
    }
    
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={team.id} onClick={handleClick(team.id)}>
            {columns.map((column) => {
                const value = team[column.id];
                return (
                    <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                    </TableCell>
                );
            })}
        </TableRow>
    )
}