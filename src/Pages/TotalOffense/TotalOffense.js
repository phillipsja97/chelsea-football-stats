import { useEffect, useState } from 'react';
import teamData from '../../Data/teamStats.Data'
import TeamCard from '../../Components/TotalOffenseRow/TotalOffenseRow.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import './TotalOffense.css'

const columns = [
    { id: 'ranking', label: 'Ranking', minWidth: 170 },
    { id: 'team', label: 'Team', minWidth: 100 },
    {
      id: 'games',
      label: 'Games Played',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'offtds',
      label: 'Offensive TDs',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'yards',
      label: 'Yards',
      minWidth: 170,
      align: 'right',
    },
    {
        id: 'ypg',
        label: 'Yards Per Game',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'ypp',
        label: 'Yards Per Play',
        minWidth: 170,
        align: 'right',
    },
  ];

export default function TotalOffense() {
    const [allteams, setAllTeams] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(50);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    useEffect(() => {
        teamData.getAllTeams()
          .then((data) => setAllTeams(data))
          .catch((error) => console.log(error))
      },[allteams.id]);
    
        return (
            <div className="totalOffense">
                <div className="titleContainer">
                    <h1 className="title">Total Offense</h1>
                </div>
                    <div className="tableContainer">
                        <Paper sx={{ width: '80%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: '80vh' }}>
                                <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        >
                                        {column.label}
                                        </TableCell>
                                    ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {allteams
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((team) => {
                                        return (
                                            <TeamCard id={team.id} team={team} columns={columns}/>
                                        );
                                    })}
                                </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={allteams.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </div>
            </div>
        );
}
