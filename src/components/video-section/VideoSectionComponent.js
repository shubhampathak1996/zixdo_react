import React from 'react';

function VideoSectionComponent() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row ptb-60">
            <div className="col-md-12">
              <div className="main-video-re">
                <div className="car-wash-video">
                  <img src="assets/images/video-image_1.png" alt />
                </div>
                <div className="play-button">
                  <a className="play-btn" href="#">
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoSectionComponent;
