import { gql } from '@apollo/client'

export const policy = gql`query {
    policies{
      data{
        attributes{
          Text
        }
      }
    }
  }`