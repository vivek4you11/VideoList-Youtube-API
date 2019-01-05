import React from 'react';

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      <div className="ui inverted segment">
        <button className="ui inverted teal basic button" style={{ width: '100%' }}>
          <i className="sun outline loading icon" />
          Thank you for visit, I hope you enjoy viewing my work
          <i className="sun outline loading icon" style={{ marginLeft: '5px' }} />
          <br /> <br />
          <i className="trophy icon" />
          Vivek Mehta
          <i className="trophy icon" style={{ marginLeft: '5px' }} />
        </button>
      </div>
    </div>
  );
};

export default VideoDetails;
