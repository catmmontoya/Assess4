function ModeButtons({ isEditing, onEditClick, onSaveClick, deleteFunc }) {
    return isEditing ? (
        <td>
            <button onClick={onSaveClick}>Save</button>
        </td>
    ) : (
        <td>
            <button onClick={(deleteFunc)}>Delete</button>
            <button onClick={onEditClick}>Edit</button>
        </td>
    )
}

export default ModeButtons