import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <header className="govuk-header " role="banner" data-module="header">
        <div className="govuk-header__container govuk-width-container">

          <div className="govuk-header__logo">
            <a href="#" className="govuk-header__link govuk-header__link--homepage">
              <span className="govuk-header__logotype">
                <span className="govuk-header__logotype-text">
                  Charity as a platform
                </span>
              </span>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
