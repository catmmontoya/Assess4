export default function ItemCodeCell({ value, isEditing, onValueChange }) {
    return isEditing ? (
        <td>
            <input type="text" value={value}
            onChange={(e) => onValueChange(e.target.value)} />
        </td>
    ) : (
        <td>{value}</td>
    )

}