import * as React from 'react';
import { Icon } from 'react-fa';

export interface TextSlideProps {
  title: string;
  content: string;
}

class TextSlide extends React.Component<TextSlideProps, {}> {
  render() {
    const { title, content } = this.props;
    return (
      <div className="hero is-fullheight is-light">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="title">{title}</h2>
            <div className="title">
              <span className="icon is-large">
                <Icon name="quote-right" />
              </span>
            </div>
            <p className="content">{content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TextSlide;
