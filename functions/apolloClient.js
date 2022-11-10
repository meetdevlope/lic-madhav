import { ApolloClient, InMemoryCache } from "@apollo/client/core";
const client = () => new ApolloClient({
    uri: 'https://197d-2401-4900-1f3e-a00-8dcc-7deb-7ab9-c4a4.in.ngrok.io/graphql',
    cache: new InMemoryCache(),

});

export default client;
