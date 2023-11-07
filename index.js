import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema/schema.js';
import { games, authors, reviews } from './db/_db.js';

const resolvers = {
    Query: {
        authors(){
            return authors
        },
        author(_, args){
            return authors.find((author) => author.id === args.id);
        },
        games(){
            return games
        },
        game(_, args){
            return games.find((game) => game.id === args.id);
        },
        reviews(){
            return reviews
        },
        review(_, args){
            return reviews.find((review) => review.id === args.id);
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
});

const {url} = await startStandaloneServer(server, {
    listen: {port: 4000}
});

console.log(`Server on port : ${url} `);
