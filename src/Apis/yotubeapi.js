import axios from "axios"
const KEY="AIzaSyDRJRv6pdfIsT5J-NI5HIsU9cDlRzy-Rck"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});