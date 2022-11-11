import { gql } from '@apollo/client'

export const allMututalFunds = gql`
query{
    mutualFunds{
      data{
        attributes{
          title
          details
        }
      }
    }
  }
`