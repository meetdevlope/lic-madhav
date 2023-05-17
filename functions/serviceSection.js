import { gql } from "@apollo/client";

export const serviceSection = gql`query{
    services{
      data{
        attributes{
          title
          description
          icon{
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