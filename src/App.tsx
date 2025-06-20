import MenuItem from "./components/menuItem";
import { menuItems } from "./data/db"

function App() {


  return (
    <>
    <header className="bg-teal-400 py-5">
      <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumos</h1>
    </header>
      
    <main className="max-w-7xl mx-auto py-20 px-20 grid md:grid-cols-2">
      <div>
        <h2 className="text-4xl font-black">Menu</h2>
        <div className="space-y-3 mt-10">
          {menuItems.map(item => (

          <MenuItem
           key={item.id}    
           item={item}
          
          />
        
        ))}
        </div>
        
      </div>
      
      <div className="text-4xl font-black">
        <h2>Consumo</h2>
      </div>
      
    </main>
    </>
  )
}

export default App
