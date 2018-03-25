import * as React from 'react';
import { Icon } from 'react-fa';

export interface FooterProps {}

const currentYear = new Date().getFullYear();

class Footer extends React.Component<FooterProps, {}> {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              Source code by{' '}
              <a
                href="https://github.com/jbachhardie"
                className="has-text-info"
              >
                Jae Bach Hardie
              </a>{' '}
              is{' '}
              <a
                href="https://opensource.org/licenses/MIT"
                className="has-text-info"
              >
                MIT licensed
              </a>. Content is © {currentYear} Allison Declercq-Matthas.
            </p>
            <p>
              <a href="https://www.contentful.com">
                <img style={{ height: '2rem' }} src="contentful.svg" />
              </a>
            </p>
            <p>
              <a
                className="icon has-text-info"
                href="https://github.com/jbachhardie/allisondm-react"
              >
                <Icon name="github" />
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
