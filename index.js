"use strict";

const request = require('request-promise');

const baseUrl = 'https://api.yelp.com/v3/graphql';

class YelpGraphQL {
  constructor({apiKey}) {
    this.apiKey = apiKey;
  }

  query({locale, query, variables}) {

    const body = {
        query,
        variables: variables ? JSON.stringify(variables) : undefined
    };

    return request({
        method: 'POST',
        uri: baseUrl,
        headers: {
            'Authorization': 'Bearer ' + this.apiKey,
            'Content-Type': 'application/json', 
            'Accept-Language': locale
        },
        body,
        json: true
    }).then((response) => {
        return response;
    }).catch((err) => {
        return err;
    });
  }
}

module.exports = YelpGraphQL;