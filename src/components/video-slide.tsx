import * as React from 'react';

export interface VideoSlideProps {
  videoUrl: string;
}

export interface VideoSlideState {
  videoId: number | null;
}

export interface OEmbedResponse {
  type: string;
  version: string;
  provider_name: string;
  provider_url: string;
  title: string;
  author_name: string;
  author_url: string;
  is_plus: string;
  account_type: string;
  html: string;
  width: number;
  height: number;
  duration: number;
  description: string;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_url_with_play_button: string;
  upload_date: string;
  video_id: number;
  uri: string;
}

class WidescreenSlide extends React.Component<
  VideoSlideProps,
  VideoSlideState
> {
  state = {
    videoId: null
  };
  componentWillMount() {
    this.fetchvideoId(this.props.videoUrl);
  }
  componentWillReceiveProps(nextProps: VideoSlideProps) {
    if (nextProps.videoUrl !== this.props.videoUrl) {
      this.fetchvideoId(nextProps.videoUrl);
    }
  }
  async fetchvideoId(videoUrl: string) {
    const response: OEmbedResponse = await (await fetch(
      'https://vimeo.com/api/oembed.json?url=' + videoUrl
    )).json();
    this.setState({ videoId: response.video_id });
  }
  render() {
    return (
      <div className="slide-video">
        <div className="video-container">
          {this.state.videoId && (
            <iframe
              src={'https://player.vimeo.com/video/' + this.state.videoId}
              height="315"
              width="560"
              allowFullScreen
              frameBorder="0"
            />
          )}
        </div>
      </div>
    );
  }
}

export default WidescreenSlide;
