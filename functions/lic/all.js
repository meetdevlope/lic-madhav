import { gql } from '@apollo/client'

export const allLICCategories = gql`
query{
    licCategories{
      data{
        attributes{
          name
          image{
            data{
              attributes{
                url
              }
            }
          }
          lic_plans{
            data{
              id
              attributes{
                name
                description
                
              }
            }
          }
        }
      }
    }
  }
`