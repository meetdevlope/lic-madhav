import { gql } from "@apollo/client";

const date = new Date().toISOString()
export const mutationContactForm = gql`
mutation CreateContactForm($firstName:String!,$lastName:String!,$email:String!){
    createContactForm(data:{firstName:$firstName,lastName:$lastName,email:$email,publishedAt:"${date}"}){
        data{
            attributes{
              firstName
              lastName
              email
            }
          }
  }
}
`