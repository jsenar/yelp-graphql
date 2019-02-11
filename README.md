# yelp-graphql
Simple wrapper for Yelp's GraphQL API.

# Basic Setup
```javascript
const YelpGraphQL = require('yelp-graphql');

let yelp = new YelpGraphQL({
  apiKey: API_KEY
});
```

## Querying without variables
### Write your query as an ES6 template string

```javascript
const query = `{
  business(id: "garaje-san-francisco") {
     name
   }
 }` 
 
const locale = 'en_US'

yelp.query({locale, query}).then( (response) => {
  //do something with the response
}).catch( (err) => {
  //do something with the error
});
```

## Querying with variables

```javascript
const query = `query BusinessMatch($business_name: String){
  business(id: $business_name) {
    name
  }
}`

const variables = { business_name: "garaje-san-francisco" }
 
const locale = 'en_US'

yelp.query({locale, query, variables}).then( (response) => {
  //do something with the response
}).catch( (err) => {
  //do something with the error
});
```

