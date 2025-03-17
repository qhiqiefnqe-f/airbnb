import { useState, memo } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import routes from '@/router'


import AppHeader from './components/app-header'

const App = memo(() => {
  const [count, setCount] = useState(0)

  // 在组件顶层调用 useRoutes 钩子
  const element = useRoutes(routes)

  // 添加这行帮助调试
  const location = useLocation()
  console.log("当前路径:", location.pathname)

  return (
    <div className='app'>
      <AppHeader />
      <div className='page'>
        {element} {/* 使用钩子返回的元素 */}
      </div>

    </div>
  )
})

export default App
