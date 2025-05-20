import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Pages from './pages/index'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<Pages.HomePage />} />
        <Route path='/write-journal' element={<Pages.WriteJournal />} />
        <Route path='/journal/:id' element={<Pages.ViewJournal />} />
        <Route path='/memories' element={<Pages.Memories />} />
        <Route path='/habit' element={<Pages.Habit />} />
        <Route path='/trash' element={<Pages.Trash />} />
        <Route path='/me' element={<Pages.Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
