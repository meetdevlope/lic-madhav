import { gql } from '@apollo/client'

export const filterAutoInsurance = (slug) => gql`
    query{
        mutualFunds(filters:{Slug:{eq:"${slug}"}}){
          data{
            attributes{
              title
              details
              Slug
            }
          }
        }
      }`