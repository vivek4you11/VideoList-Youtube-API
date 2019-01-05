import axios from 'axios';

const KEY = 'YOUR_API_KEY';
//const KEY = 'AIzaSyBAPmVeuE0ubRTfmY9LnRSlvxlHB95ivL4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
