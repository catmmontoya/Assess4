import { useState } from 'react'
import './App.css'
import InventoryTable from './components/InventoryTable.jsx'
import data from "../server/data-mockup"

function App() {
  return ( 
    <>
    <h1>Inventory</h1>
  <InventoryTable initialInventoryList={data} />
  </>
  )
}

export default App
