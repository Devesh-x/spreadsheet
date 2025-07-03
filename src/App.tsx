// App.tsx
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Spreadsheet from './components/Spreadsheet'

function App() {
  return (
    <div className="text-sm font-sans bg-gray-50 min-h-screen">
      <Header />
      <Toolbar />
      <Spreadsheet/>
    </div>
  )
}

export default App;
