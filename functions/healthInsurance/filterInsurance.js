import { gql } from '@apollo/client'

export const filterHealthInsurance = (slug) => gql`query{
    healthInsurances(filters:{Slug:{eq:"${slug}"}}){
      data{
        attributes{
          company_name
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