import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Page1 from './components/Page1'
const App = () => {
  return (
    <main className='h-screen w-screen overflow-x-hidden '>
    <Hero/>
    <About/>
    <aside className='reqs:flex '>
    <Page1/>
    <h1>its hero time</h1>
    </aside>
    </main>
  )
}

export default App