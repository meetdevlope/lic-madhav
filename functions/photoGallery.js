import { gql } from '@apollo/client'

export const photoGallery = gql`query{
    photoGalleries{
      data{
        attributes{
          src{
            data{
              attributes{
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }`