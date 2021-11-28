import axios from 'axios';

async function getUsers(n=1) {
  const resp = await axios.get(`https://randomuser.me/api/?results=${n}`)
  const usersRawData = resp.data.results
  return usersRawData
}

export default getUsers