import * as React from 'react';
import { Slide } from './';
import { SlideData } from './slide';
import { Icon } from 'react-fa';
import { TweenMax } from '../modules/gsap';

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
          <a
            className="icon button is-outlined is-large return-to-top"
            href="#"
            onClick={e => {
              e.preventDefault();
              TweenMax.to(window, 0.5, { scrollTo: 0 });
            }}
          >
            <Icon name="chevron-up" />
          </a>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Page;
