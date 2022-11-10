import { gql } from '@apollo/client'

export const allAutoInsurance = gql`
query{
  autoInsurances{
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
}
`