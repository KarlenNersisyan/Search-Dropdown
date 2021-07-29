import React,{Component} from 'react';
import requestCountry from '../../helpers/requestCountry/requestCountry';
import CountriesBox from '../CountriesBox/CountriesBox';
import './SearchDropdown.css';

export default class SearchDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delayTimeout: null,
      results: [],
      error: false,
    };
  }

  getCountry = (countryName) => {
    if (this.state.delayTimeout) {
      clearTimeout(this.state.delayTimeout);
    }

    return setTimeout(() => {
      requestCountry(countryName)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            this.setState({ results: [], error: true });
          }
        })
        .then((data) => {
          if (data) {
            this.setState(() => {
              console.log(data);
              data.forEach((item) => (item.id = Math.random()));
              return { results: data, error: false };
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 200);
  };

  render() {
    return (
      <div className="box">
        <input
          onChange={(e) => {
            if (e.target.value) {
              const delayTimeout = this.getCountry(e.target.value);
              this.setState({ delayTimeout });
            } else {
              this.setState({ results: [] });
            }
          }}
          type="search"
          placeholder="Search country..."
          className="search-input"
        />

        <CountriesBox results={this.state.results} isError={this.state.error} />
      </div>
    );
  }
}
