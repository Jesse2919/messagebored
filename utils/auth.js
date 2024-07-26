const { GraphQLError } = require('graphql');
const jwt = require ('jsonwebtoken');

const secret = 'password';
const expiration = '2h';

module.exports = {
    AuthenticationErorr: new GraphQLError('Could not authenticate user.', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    
}