import Navigation from './components/Navigation'
import About from './components/About'
import Experience from './components/Experience'
import PastWork from './components/PastWork'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container-fluid p-0">
        <About />
        <hr className="my-0" />
        <Experience />
        <hr className="my-0" />
        <PastWork />
      </main>
    </div>
  )
}

export default App
