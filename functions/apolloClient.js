import { ApolloClient, InMemoryCache } from "@apollo/client/core";




const client = () => new ApolloClient({
    uri: `https://web.madhavinsurance.in/graphql`,
    // uri: `http://localhost:1337/graphql`,
    cache: new InMemoryCache(),
});

export default client;
