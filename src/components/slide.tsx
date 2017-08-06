import * as React from 'react';
import { Asset } from 'contentful';
import WidescreenSlide from './widescreen-slide';
import TextSlide from './text-slide';
import controller from '../modules/scroll-controller';
import { Scene } from '../modules/scrollmagic';
import { Linear } from '../modules/gsap';

export type WidescreenSlideData = {
  type: 'widescreenSlide';
  fields: {
    image: Asset;
  };
};
export type GridSlideData = {
  type: 'imageGridSlide';
  fields: {
    images: Array<Asset>;
    textBlocks: Array<string>;
  };
};
export type TextSlideData = {
  type: 'textSlide';
  fields: {
    title: string;
    content: string;
  };
};
export type SlideData = WidescreenSlideData | GridSlideData | TextSlideData;

export interface SlideProps {
  slide: SlideData;
}

interface SlideState {
  // TODO: Proper typings for scrollmagic
  scene: { remove(): void };
}

class Slide extends React.Component<SlideProps, SlideState> {
  attachScene = (element: HTMLElement | null) => {
    if (element) {
      this.setState({
        scene: new Scene({ triggerElement: element })
          .setTween(element.firstChild, { y: '100%', ease: Linear.easeIn })
          .addTo(controller)
      });
    } else if (this.state.scene) {
      this.state.scene.remove();
    }
  };
  render() {
    const slide = this.props.slide;
    if (slide.type === 'widescreenSlide') {
      return (
        <div className="parallax section is-paddingless" ref={this.attachScene}>
          <WidescreenSlide imageUrl={slide.fields.image.fields.file.url}>
            {this.props.children}
          </WidescreenSlide>
        </div>
      );
    }
    if (slide.type === 'textSlide') {
      return <TextSlide {...slide.fields} />;
    }
    return <div />;
  }
}

export default Slide;
