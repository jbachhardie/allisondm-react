import * as React from 'react';

export interface WidescreenSlideProps {
  imageUrl: string;
  className?: string;
}

class WidescreenSlide extends React.Component<WidescreenSlideProps, {}> {
  render() {
    return (
      <div
        className="section slide-widescreen"
        style={{
          backgroundImage: `url(${this.props.imageUrl})`
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default WidescreenSlide;
