import * as React from 'react';
import { Asset } from 'contentful';
import { chunk, sortBy, floor } from 'lodash';
import ImageCell from './image-cell';
import TextCell from './text-cell';

export interface GridSlideProps {
  images: Asset[];
  textBlocks?: string[];
}

function buildCell(content: Asset | string, index: number) {
  if (typeof content === 'string') {
    return <TextCell content={content} key={index} />;
  } else if (content && content.fields) {
    return <ImageCell image={content} key={index} />;
  } else {
    return <div />;
  }
}

function intersperse<T, S>(array1: T[], array2: S[]): Array<T | S> {
  const result: Array<T | S> = [];
  const [short, long] = sortBy([array1, array2], x => x.length);
  const step = floor(long.length / short.length);
  let j = 0;
  for (let i = 0; i < long.length; i++) {
    result.push(long[i]);
    if (i % step === 0) {
      if (short[j]) {
        result.push(short[j]);
      }
      j++;
    }
  }
  return result;
}

class GridSlide extends React.Component<GridSlideProps, {}> {
  render() {
    const { images, textBlocks } = this.props;
    const cells = textBlocks ? intersperse(images, textBlocks) : images;
    const columns = chunk(cells, 3);
    return (
      <div className="columns is-gapless is-marginless">
        <div className="column">
          <div className="columns is-mobile is-gapless">
            <div className="column">
              {columns[0].map(buildCell)}
            </div>
            <div className="column">
              {columns[1].map(buildCell)}
            </div>
          </div>
        </div>
        <div className="column is-gapless">
          <div className="columns is-mobile is-gapless">
            <div className="column">
              {columns[2].map(buildCell)}
            </div>
            <div className="column">
              {columns[3].map(buildCell)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GridSlide;
