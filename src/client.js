import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
    link: new HttpLink({ 
        // Non Magento graphql
        //uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex' 
        // Magento graphql
        uri: 'http://www.mycircle.test/graphql'
    }),
    cache: new InMemoryCache(),
    fetchOptions: {
        mode: 'no-cors'
    }
  });

export default client