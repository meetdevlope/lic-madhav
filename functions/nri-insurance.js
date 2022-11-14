import { gql } from '@apollo/client'

export const allNriInsurance = gql`query{
    nriInsurances{
      data{
        attributes{
          title
          description
          image{
            data{
              attributes{
                url
              }
            }
          }
          cover_image{
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