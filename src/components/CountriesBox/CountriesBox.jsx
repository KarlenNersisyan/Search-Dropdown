import React from 'react';
import CountryBar from '../CountryBar/CountryBar';
import styles from './CountriesBox.module.css';

export default class CountriesBox extends React.Component {
  render() {
    if (this.props.isError) {
      return (
        <div>
          <h2>Country is not found!</h2>
        </div>
      );
    } else {
      return (
        <div className={styles.box}>
          {this.props.results.map((item) => {
            return (
              <CountryBar
                countryName={item.name}
                flag={item.flag}
                key={item.id}
              />
            );
          })}
        </div>
      );
    }
  }
}
