const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello World';
  }
};

module.exports = graphqlHTTP({
  schema: schema, 
  rootValue: root, 
  graphiql: true
});