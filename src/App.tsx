import './App.css'
import { env } from "@/config/env"

function App() {
  console.log(env.appUrl);
  return (
    <div className="flex h-screen items-center justify-center bg-gray-300">
      <h1 className="text-2xl font-bold">Employee Management System</h1>
    </div>
  )
}

export default App
