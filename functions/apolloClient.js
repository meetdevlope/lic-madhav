import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const serverLink = process.env.NEXT_PUBLIC_SERVER_LINK;


const client = () => new ApolloClient({
    uri: `${serverLink}/graphql`,
    cache: new InMemoryCache(),
});

export default client;
