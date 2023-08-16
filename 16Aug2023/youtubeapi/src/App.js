import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(
    () => {
      console.log("useeffect called");
      makeAPICall('cricket');
      
    }, []
  )
const makeAPICall =(query) =>{
  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDqTvvU5Nq3haVUEp9XEEXIKCSVxWjh3UU&q=${query}&type=video&maxResults=5`).then(
        response => {
          console.log("response", response);
          setVideos(response.data.items);
          setSelectedVideo(response.data.items[0]);
        }
      )
}
  return (
    <div className="App">
      {videos.length}
      <VideoPlayer video={selectedVideo}></VideoPlayer>
      <VideoList onVideoClick={ (video) =>{
        
               setSelectedVideo(video);  
      }} videos={videos}></VideoList>
    </div>
  );
}
export default App;

