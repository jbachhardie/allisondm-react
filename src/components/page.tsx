import * as React from 'react';
import { Slide } from './';
import { SlideData } from './slide';

export interface PageProps {
  title: string;
  slides: SlideData[];
}

class Page extends React.Component<PageProps, {}> {
  render() {
    const { slides } = this.props;
    const firstSlide = slides[0];
    if (firstSlide) {
      return (
        <div>
          <Slide slide={firstSlide}>
            {this.props.children}
          </Slide>
          {slides
            .slice(1)
            .map((slide, index) => <Slide key={index} slide={slide} />)}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Page;
