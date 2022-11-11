import { gql } from '@apollo/client'

export const allTestmonials = gql`query{
    testimonials{
      data{
        attributes{
          name
          company
          testimonial
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