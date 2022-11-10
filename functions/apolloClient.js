import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const key = process.env.NEXT_PUBLIC_SERVER_LINK


const client = () => new ApolloClient({
    uri: key + '/graphql',
    cache: new InMemoryCache(),
});

export default client;
