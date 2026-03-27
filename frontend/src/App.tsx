import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/auth/:mode' element={<Auth />} />
      <Route path='/404' element={<PageNotFound />} />
      <Route path='*' element={<Navigate to={'/404'} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App