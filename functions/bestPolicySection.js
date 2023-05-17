import { gql } from "@apollo/client";

export const bestPolicy = gql`query{
    bestPolicies{
      data{
        attributes{
          title
          description
          icon{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }`