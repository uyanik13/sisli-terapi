
import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'

import { PublishedPostsConnection } from '@/graphql/post.graphql';



export function useGetPosts() {
  return VueApolloComposable.useQuery<any, any>(PublishedPostsConnection, {}, {
    //prefetch: false, // prefetch: false will fetch on client
  })
}