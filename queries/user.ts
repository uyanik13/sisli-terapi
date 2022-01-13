
import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'


// export const SIGNIN_USER = gql`
//   mutation($data: { email: null, password: null}) {
//     signinUser(
//       data: $data
//     ){
//       user {
//         uuid
//         email
//         username
//       }
//       token
//     }
//   }
// `

// export const CREATE_USER = gql`
//   mutation($data: RegisterInput!) {
//     createUser(
//       data: $data
//     ){
//       user {
//         uuid
//         email
//         username
//       }
//       token
//     }
//   }
// `

// export const UPDATE_USER = gql`
//   mutation($data: UpdateUserInput!) {
//     updateUser(
//       data: $data
//     ){
//       uuid
//       email
//       username
//     }
//   }
// `

// export const GET_CURRENT_USER = gql`
//   query($storiesPage: Int) {
//     getCurrentUser(storiesPage: $storiesPage) {
//       uuid
//       email
//       username
//       created_at
//       stories {
//         results {
//           uuid
//           title
//           updated_at
//           user {
//             uuid
//           }
//         }
//         total
//         totalPages
//         currentPage
//       }
//     }
//   }
// `


export const GET_USERS = gql`
  query users {
    ID,
    firstName
  }

`

export function useRegister() {
  return VueApolloComposable.useQuery<any, any>(GET_USERS, {}, {
    //prefetch: false, // prefetch: false will fetch on client
  })
}