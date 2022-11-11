import { gql } from '@apollo/client'

export const allHealthInsurance = gql`query{
    healthInsurances{
      data{
        id
        attributes{
          company_name
          Slug
          image{
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