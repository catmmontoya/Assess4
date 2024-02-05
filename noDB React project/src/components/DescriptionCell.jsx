export default function DescriptionCell({ value, isEditing, onValueChange }) {
    return isEditing ? (
        <td>
            <input type="text" value={value}
            onChange={(e) => onValueChange(e.target.value)} />
        </td>
    ) : (
        <td>{value}</td>
    )
}
