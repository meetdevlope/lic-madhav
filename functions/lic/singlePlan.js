import { gql } from '@apollo/client'

export const singlePlan = (id) => gql`
query{
    licPlan(id:${id}){
      data{
        attributes{
          name
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
          brochure{
            data{
              attributes{
                url
              }
            }
          }
          document{
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