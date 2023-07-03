import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SideBar } from './components/sideBar'
import { Tasks } from './pages/tasks'
import { InvertString } from './pages/invertString'
import { CounterPage } from './pages/counterPage'
import { TaskNew } from './pages/taskNew'
import { Toaster } from 'react-hot-toast'


function App() {
  return (
    <BrowserRouter>
      <div className='bg-[#5236FE] h-screen flex items-center justify-center'>
        <Toaster />
        <SideBar />

        <Routes>
          <Route path='*' element={<Navigate to="/counter" />} />
          <Route path='/counter' element={<CounterPage />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/tasks/new' element={<TaskNew />} />
          <Route path='/invert-string' element={<InvertString />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
