import * as React from 'react';

export interface TextCellProps {
  content: string;
}

class TextCell extends React.Component<TextCellProps, {}> {
  render() {
    return (
      <div className="image is-square level is-marginless">
        <div
          className={
            'text-cell has-text-centered level-item card-content' +
            'is-size-4-widescreen is-size-5-tablet is-size-6-phone'
          }
        >
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default TextCell;
