import { gql } from '@apollo/client'

export const filterAutoInsurance = (slug) => gql`query{
    autoInsurances(filters:{Slug:{eq:"${slug}"}}){
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