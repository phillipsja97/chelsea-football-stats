import axios from 'axios';
const baseUrl = 'http://localhost:5000';

const getAllOffenseStats = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/api/offense`)
        .then((response) => {
            resolve(response.data)
        })
        .catch((error) => reject(error))
});

const getByTeamName = (team) => new Promise((resolve, reject) =>  {
    axios.get(`${baseUrl}/api/teamStats/${team}`)
        .then((response) => {
            resolve(response.data)
        })
        .catch((error) => reject(error))
});

export default { getAllOffenseStats, getByTeamName };