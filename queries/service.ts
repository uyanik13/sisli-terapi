
import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'

import { PublishedServicesConnection } from '@/graphql/service.graphql';



export function useGetServices() {
  return VueApolloComposable.useQuery<any, any>(PublishedServicesConnection, {}, {
    //prefetch: false, // prefetch: false will fetch on client
  })
}