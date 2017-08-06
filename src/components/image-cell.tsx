import * as React from 'react';
import { Asset } from 'contentful';

export interface ImageCellProps {
  image: Asset;
}

interface ImageCellState {
  modal?: HTMLElement;
}

class ImageCell extends React.Component<ImageCellProps, ImageCellState> {
  showModal = () => {
    const { modal } = this.state;
    if (modal) {
      modal.classList.add('is-active');
    }
  };
  hideModal = () => {
    const { modal } = this.state;
    if (modal) {
      modal.classList.remove('is-active');
    }
  };
  registerModal = (element: HTMLElement | null) => {
    if (element) {
      this.setState({ modal: element });
    }
  };
  render() {
    return (
      <div>
        <figure className="image is-square">
          <a
            className="image-cell"
            href="#"
            onClick={e => {
              e.preventDefault();
              this.showModal();
            }}
          >
            <div className="overlay" />
            <img src={this.props.image.fields.file.url} />
          </a>
        </figure>
        <div className="modal" ref={this.registerModal}>
          <div className="modal-background" onClick={this.hideModal} />
          <div className="modal-content" onClick={this.hideModal}>
            <p className="image is-square">
              <img src={this.props.image.fields.file.url} />
            </p>
          </div>
          <button className="modal-close is-large" onClick={this.hideModal} />
        </div>
      </div>
    );
  }
}

export default ImageCell;
