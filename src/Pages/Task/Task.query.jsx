import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(
    gql`
    query allRewards($page: Int!) { allRewards(page: $page) { 
        id,
        name,
        campaign_id,
        description,
        image,
        quantity,
        capPerAmbassador, 
        points
      }}
    `,
    {
        options: () => ({ variables: { page: 0 } }),
        props: ({ data = {} }) => ({ allRewards: data.allRewards || [] }),
    },
);
