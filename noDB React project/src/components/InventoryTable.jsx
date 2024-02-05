import './InventoryTable.css'
import React from 'react'
import TableHeader from "./TableHeader"
import AddButton from './AddButton'
import TableRow from "./TableRow"
import { useState } from 'react'
import axios from "axios"

let globalId = 4;

export default function InventoryTable({ initialData, initialInventoryList }) {

    // const [inventoryList, setInventoryList] = useState(initialInventoryList)
    const [currentData, setCurrentData] = useState(initialData)

    const addRow = async () => {

        const response = await axios.post("/inventory/add", {
            description: "Enter description here"
        })
        setCurrentData([...currentData, response.data.newItem ])

        }

     const deleteRow = (id) => {
    axios.delete(`/inventory/delete/${id}`)
    .then((res) => {
        if (res.data.status) {
        const filteredList = currentData.filter((inventoryItem) => {
                return inventoryItem.id !== id
        })
        setCurrentData(filteredList)
} else {
    console.log(filteredList)
}
    })
}

    const rows = initialInventoryList.map((inventoryItem) => {
    
        return (
            <TableRow 
            key={inventoryItem.id}
            initialInventoryData={inventoryItem}
            initialIsEditing={false}
            deleteFunc={() => deleteRow(inventoryItem.id)} 
            />
        )
    }
    )

 return (
    <div>
        <table>
            <thead>
                <TableHeader />
            </thead>
            <tbody>
          {rows}
            </tbody>
            <tfoot>
                <AddButton addRow={addRow} />
            </tfoot>
        </table>
    </div>
 )
}