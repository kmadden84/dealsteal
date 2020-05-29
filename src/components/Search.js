import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import $ from 'jquery';
import {search, setHistory} from '../actions';
//import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux'

// const checkboxes = [
//   {
//     value: "",
//     key: "checkbox1",
//     label: "All",
//     name: "All"
//   },
//   {
//     value: "1",
//     key: "checkbox2",
//     label: "amazon",
//     name: "1"
//   },
//   {
//     value: "2",
//     key: "checkbox3",
//     label: "best buy",
//     name: "2"
//   },
//   {
//     value: "3",
//     key: "checkbox4",
//     label: "Walmart",
//     name: "3"
//   },
//   {
//     value: "4",
//     key: "checkbox5",
//     label: "Toys 'R Us'",
//     name: "4"
//   },
//   {
//     value: "5",
//     key: "checkbox6",
//     label: "EB Games",
//     name: "5"
//   },
//   {
//     value: "6",
//     key: "checkbox7",
//     label: "Think Geek",
//     name: "6"
//   },
//   {
//     value: "7",
//     key: "checkbox8",
//     label: "One Plus",
//     name: "7"
//   },
//   {
//     value: "8",
//     key: "checkbox9",
//     label: "Amazon Japan",
//     name: "8"
//   },
//   {
//     value: "9",
//     key: "checkbox10",
//     label: "Amazon Us",
//     name: "9"
//   }
// ];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.submit,
      checkedItems: new Map(),
      merchant: new Map(),
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const item = e.target.value;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
      merchant: prevState.merchant.set(item, isChecked)
    })
    );
  }
  handleSubmit(e, props) {
    e.preventDefault();

    const searchTerm = {
      search: this.query.value
    }
    this.props.search(this.query.value)
  }
  render(props) {
    //    if ($('.search-form label:first input').is(':checked')) {
    // $('input[type="checkbox"]').not('input[name="All"]').prop('disabled',true);
    //    } else {
    //    $('input[type="checkbox"]').removeAttr('disabled', true);
    //   }
    //   $('.search-form label:first input').on('change', function() {
    //     $('input[type="checkbox"]').not(this).prop('checked', false);  
    // });
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="search"
          name="search"
          ref={(input) => this.query = input}
          placeholder="Search" />

        {/* {
          checkboxes.map(item => (
            <label key={item.key}>
              {item.label}
              <Checkbox name={item.name}
                value={item.value}
                checked={this.state.checkedItems.get(item.value)}
                onChange={this.handleChange}
                ref={(input) => this.checkbox = input}
              />
            </label>
          ))
        } */}
        <button type="submit" id="submit" className="search-button"><svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg></button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    historyData: state.history,
    searchData: state.search
  }
 };
 

Search.propTypes = {
  search: PropTypes.func.isRequired,
  setHistory: PropTypes.func.isRequired,
  historyData: PropTypes.array.isRequired,
  searchData: PropTypes.array.isRequired
};

 export default connect(mapStateToProps, {search, setHistory})(Search)