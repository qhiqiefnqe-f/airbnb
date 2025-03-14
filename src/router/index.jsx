import React, { Suspense } from 'react'


const Home = React.lazy(() => import('@/views/Home'))
const Detail = React.lazy(() => import('@/views/Detail'))
const Entire = React.lazy(() => import('@/views/Entire'))

// 为懒加载组件创建一个包装器组件
const LazyLoad = (Component) => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}

const routes = [
  {
    path: '/',
    element: LazyLoad(Home)
  },
  {
    path: '/home',
    element: LazyLoad(Home)
  },
  {
    path: '/detail',
    element: LazyLoad(Detail)
  },
  {
    path: '/entire',
    element: LazyLoad(Entire)
  }
]

export default routes