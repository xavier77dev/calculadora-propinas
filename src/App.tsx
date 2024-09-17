import { useEffect } from "react";
import { menuItems } from "./data/db"
import { MenuItem } from "./components/MenuItem";

function App() {

  const getData = () => {
    console.log(menuItems)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-x-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2>Menú</h2>

          {
            menuItems.map(item => {
              return (
                <MenuItem key={item.id} />
              )
            })
          }
        </div>

        <h2>Consumo</h2>
      </main>
    </>
  )
}

export default App
