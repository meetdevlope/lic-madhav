import { gql } from '@apollo/client'

export const allClia = gql`
query{
    clias{
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