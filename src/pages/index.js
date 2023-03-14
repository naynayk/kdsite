import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Anwälte from '../components/Anwälte/Anwälte'
import Kanzlei from '../components/Kanzlei/Kanzlei'
import Privatperson from '../components/Privatperson/Privatperson'
import Unternehmen from '../components/Unternehmen/Unternehmen'
import Beratungstermin from '../components/Beratungstermin/Beratungstermin'
import Home from '../components/Home/Home'

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='anwälte' element={<Anwälte/>}/>
          <Route path='kanzlei' element={<Kanzlei/>}/>
          <Route path='privatperson' element={<Privatperson/>}/>
          <Route path='unternehmen' element={<Unternehmen/>}/>
          <Route path='beratungstermin' element={<Beratungstermin/>}/>
        </Route>
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default index
