import * as React from 'react';
import { Link } from 'react-router-dom';
import { kebabCase } from 'lodash';

export interface NavProps {
  pages: string[];
}

class Nav extends React.Component<NavProps, {}> {
  render() {
    return (
      <div className="nav-bar-container">
        <nav className="columns nav-bar">
          <div className="column is-one-quarter">
            <Link to="/">
              <img
                src="./logo-with-text.svg"
                alt="Allison Declercq-Matthas"
                className="logo"
              />
            </Link>
          </div>
          <div className="nav-menu column">
            {this.props.pages.filter(page => page !== 'Main').map(page => (
              <Link className="link is-size-2" to={kebabCase(page)} key={page}>
                {page}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
