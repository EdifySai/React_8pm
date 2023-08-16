
function VideoPlayer(props) {
    console.log("video", props.video)
    if (props.video) {
        var videoId = props.video.id.videoId;
        var url = `https://www.youtube.com/embed/${videoId}`;
        return (
            <div>
                <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }



}

export default VideoPlayer;