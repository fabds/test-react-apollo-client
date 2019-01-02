import React, {Component} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import './App.css';


class App extends Component {

  render () {
    //Magento graphql request
    let TEST_QUERY = gql`{
        products(filter: {date_start: {gteq: "1970-01-01"}}) {
        items {
          name
          sku
        }
      }
    }`;

    //Uncomment for non Magento graphql request 
    /*TEST_QUERY = gql`{
      allUsers {
        id
        name
      }
  }`; */

    return (
      <Query query={TEST_QUERY}>
        {({ data, error, loading }) => {
          //IF ERROR
          if (error) return JSON.stringify(error);
          //IF LOADING
          if (loading) return <h1>Caricamento...</h1>;
          //IF SUCCESS
          return (JSON.stringify(data));
        }}
      </Query>
    )
  }

}

export default App;