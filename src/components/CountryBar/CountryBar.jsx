import React,{Component} from 'react';
import './CountryBar.css';

export default class CountryBar extends Component {
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
