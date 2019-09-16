import axios from "axios";

const KEY = 'AIzaSyAVw6DXDYZSARnHhtpvoHe6GEQjOdqEuC4';

const youtube = axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        
        part: "snippet",
        // maxResults: "5",
        key: KEY
    }
});
export default youtube;
