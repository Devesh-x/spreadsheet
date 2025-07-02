// App.tsx
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Tabs from './components/Tabs'
import Table from './components/Table'

function App() {
  return (
    <div className="text-sm font-sans bg-gray-50 min-h-screen">
      <Header />
      <Toolbar />
      <Tabs />
      <Table />
    </div>
  )
}

export default App;
