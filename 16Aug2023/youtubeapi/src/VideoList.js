
function VideoList(props) {
    const renderList = () => {
        var list = props.videos.map(video => {
            return <li onClick={() => { props.onVideoClick(video) }} key={video.etag}><img src={video.snippet.thumbnails.default.url}></img></li>
        })
        return list;
    }

    return (
        <div>
            <h1>VideoList</h1>

            <ul style={{ listStyleType: 'none' }}>
                {renderList()}
            </ul>
        </div>
    )
}
export default VideoList;
