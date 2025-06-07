# TanStackQueryPractice

TanStackQuery(구 React Query)를 연습하기 위해 만들어진 레포지토리. 여기서는 영화 검색 및 열람 앱을 만듦으로써 `useQuery`와 `useInfiniteQuery`를 연습하였다.

## TanStackQuery를 사용하는 이유?

- 자동 캐싱 및 데이터 동기화
  - 동일한 요청을 여러 컴포넌트에서 해도 자동으로 캐시되고 공유된다.
  - 데이터가 오래됐으면 자동으로 refetch를 함으로써 최신으로 유지한다.
- 로딩, 에러, 성공 상태 등등을 내부에서 자동 관리해준다.
  - isFetching, isError, data 등등의 다양한 상태를 내장된 방식으로 관리할 수 있다.
- invalidateQueries를 통한 데이터 무효화(invalidation)으로 캐시 업데이트를 제어함.
  - POST/PUT/DELETE 이후 수동으로 캐시를 갱신할 필요 없이, 관련 쿼리에 대한 데이터만 무효화함으로써 자동으로 갱신한다.
- 백그라운드 갱신 (Background Refresh)
  - 사용자가 보고 있지 않더라도 백그라운드에서 최신화할 수 있다.
  - (이는 특히, 대시보드나 실시간 데이터 앱에서 유용하다.)
- useInfiniteQuery를 통한 스크롤 페이징 및 무한 스크롤 지원.
- SSR/SSG 지원.
  - Next.js에서도 dehydrate(queryClient)를 state로 가진 HydrationBoundary로 컴포넌트를 감싸고, queryClient.prefetchQuery를 통해 데이터를 가져오면, 서버에서 데이터를 미리 가져와 클라이언트에서 Hydration할 수 있다.
