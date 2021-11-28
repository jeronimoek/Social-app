import axios from "axios";

async function getPhotos(n=1){
  const resp = await axios.get(`https://picsum.photos/v2/list?limit=${n}`)
  return(resp.data)
}

export default getPhotos