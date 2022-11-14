import { gql } from '@apollo/client'

export const awardsGallery = gql`query{
    awardsGalleries{
      data{
        attributes{
          src{
            data{
              attributes{
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }`