import axios from "axios";
import { useState } from "react";
import DescriptionCell from "./DescriptionCell";
import ItemCodeCell from "./ItemCodeCell";
import ModeButtons from "./ModeButtons";
import NotesCell from "./NotesCell";
import QuantityCell from "./QuantityCell";

export default function TableRow({ initialInventoryData, initialIsEditing, deleteFunc }) {

    const [editMode, setEditMode] = useState(initialIsEditing)
    const [description, setDescription] = useState(initialInventoryData.description)
    const [item, setItem] = useState(initialInventoryData.item)
    const [quantity, setQuantity] = useState(initialInventoryData.quantity)
    const [notes, setNotes] = useState(initialInventoryData.notes)

    const makeEditMode = () => setEditMode(true)
    const makeNormalMode = () => {
        const bodyObj = {
            item: item,
            description: description,
            quantity: quantity,
            notes: notes
        }
        axios.put(`/inventory/update/${initialInventoryData.id}`, bodyObj)
        .then((res) => {
            setEditMode(false)
        })
    }


return (
        <tr>
        <ModeButtons
        isEditing={editMode}
        onEditClick={makeEditMode}
        onSaveClick={makeNormalMode}
        deleteFunc={deleteFunc} />
        <ItemCodeCell
        value={item}
        isEditing={editMode}
        onValueChange={setItem} />
        <DescriptionCell 
        value={description}
        isEditing={editMode}
        onValueChange={setDescription} />
        <QuantityCell
        value={quantity}
        isEditing={editMode}
        onValueChange={setQuantity} />
        <NotesCell
        value={notes}
        isEditing={editMode}
        onValueChange={setNotes} />
        </tr>
)

}