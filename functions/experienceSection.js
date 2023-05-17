import { gql } from "@apollo/client";

export const getExperienceData = gql`query{
    experienceSections{
      data{
        attributes{
          totalExperience
          experienceText
          experienceDescription
          image{
            data{
              attributes{
                url
              }
            }
          }
          experience_counters{
            data{
              attributes{
                experienceYear
                experienceText
              }
            }
          }
        }
      }
    }
  }`