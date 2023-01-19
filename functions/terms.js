import { gql } from '@apollo/client'

export const terms = gql`query {
    terms{
      data{
        attributes{
          Text
        }
      }
    }
  }`