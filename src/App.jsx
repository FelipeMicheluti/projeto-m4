import { Card } from "./components/Card";
import { Hello } from "./components/Hello";
import { useState} from "react";

const CARDS = [
  { id: 0, title: 'Card A', description: 'lala' },
  { id: 1, title: 'Card B', description: 'kkk' },
  { id: 2, title: 'Card C', description: 'hoh' },
]

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  const inc = () => setCount(c => c + 1)
  return (
    <main className="min-h-dvh grid place-items-center bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-800">
        Hello tailwind
      </h1>

      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(item => (
          <Card key={item.id} title={item.title}>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
<form>
  <input type="text" valeu={name} onChage={event => setName(event.target.valeu)}/>
</form>
      <a href="#" className="inline-block px-4 py-2 rounded-lg border hover:bg-slate-500 focus:ring-2  focus:ring-amber-500">link com foco</a>

      <button 
      className="inline-block px-4 py-2 rounded-lg border hover:bg-slate-500 focus:ring-2  focust:ring-blue-500 cursor-pointer"
      onClick={inc}>
        Contador: {count}</button>



      <Hello name="Micheluti" />

    </main>

  );
}

export default App