import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './Homepage.css';
import crossPlatformLogo from './cross-platform.svg';


class Homepage extends Component {
  render() {
    return (
      
      <div className="homepage">
        <Header />

        <div className="banner">
          <div className="govuk-width-container">
            <div class="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds">
                <h1 className="govuk-heading-xl">
                  Build it once then share it with everyone.
                </h1>
                <p className="govuk-body-l">
                  Replicate good practice, reduce wasted cost.
                </p>
              </div>
              <div className="govuk-grid-column-one-third">
                <img src={crossPlatformLogo} />
              </div>
            </div> 
          </div>
        </div>

        <div class="govuk-width-container">
          <main class="govuk-main-wrapper " id="main-content" role="main">
            <div class="govuk-grid-row">
              <div class="govuk-grid-column-two-thirds">
                <h1 className="govuk-heading-xl">
                  Welcome
                </h1>                
                <p className="govuk-body-l">
                  Charity as a Platform is a new way of building digital services. We’re creating a set of shared components, service designs, platforms, data and hosting, that every charity service can use.
                </p>
                <p className="govuk-body-l">
                  This saves time and money for charities to spend their efforts on providing charitable services.
                </p>
              </div>
            </div>
          </main>
        </div>
        
      </div>
      
    );
  }
}

export default Homepage;
