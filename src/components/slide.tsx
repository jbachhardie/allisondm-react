import * as React from 'react';
import { Asset } from 'contentful';
import WidescreenSlide from './widescreen-slide';
import TextSlide from './text-slide';
import GridSlide from './grid-slide';
import VideoSlide from './video-slide';

export type WidescreenSlideData = {
  type: 'widescreenSlide';
  fields: {
    image: Asset;
  };
};
export type GridSlideData = {
  type: 'imageGridSlide';
  fields: {
    images: Asset[];
    textBlocks: string[];
  };
};
export type TextSlideData = {
  type: 'textSlide';
  fields: {
    title: string;
    content: string;
  };
};
export type VideoSlideData = {
  type: 'videoSlide';
  fields: {
    title: string;
    videoUrl: string;
  };
};
export type SlideData =
  | WidescreenSlideData
  | GridSlideData
  | TextSlideData
  | VideoSlideData;

export interface SlideProps {
  slide: SlideData;
}

class Slide extends React.Component<SlideProps> {
  render() {
    const slide = this.props.slide;
    if (slide.type === 'widescreenSlide') {
      return (
        <WidescreenSlide imageUrl={slide.fields.image.fields.file.url}>
          {this.props.children}
        </WidescreenSlide>
      );
    }
    if (slide.type === 'textSlide') {
      return <TextSlide {...slide.fields} />;
    }
    if (slide.type === 'imageGridSlide') {
      return <GridSlide {...slide.fields} />;
    }
    if (slide.type === 'videoSlide') {
      return <VideoSlide {...slide.fields} />;
    }
    return <div />;
  }
}

export default Slide;
