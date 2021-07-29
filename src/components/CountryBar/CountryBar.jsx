import React from 'react';
import './CountryBar.css';

export default class CountryBar extends React.Component {
  render() {
    return (
      <div className="country-bar">
        <img
          src={this.props.flag}
          alt={this.props.countryName}
          className="country-image"
        />
        <p className="country-name">{this.props.countryName}</p>
      </div>
    );
  }
}
