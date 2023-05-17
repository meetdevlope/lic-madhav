import { gql } from "@apollo/client";

export const getHeroData = gql`query{
    heroSections {
      data{
        attributes{
          title
          subTitle
          image{
            data{
              attributes{
                url
              }
            }
          }
          buttons{
            data{
              attributes{
                buttonText
                buttonLink
                buttonType
              }
            }
          }
        }
      }
    }
  }`