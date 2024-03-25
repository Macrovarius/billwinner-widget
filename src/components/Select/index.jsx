export const Select = ({options, value, label, onChange}) => {
    const handleChange = (event) => {
        console.log(event)
    }
    return (
        <div>
            {label && <div className="bill-winner-custom-select-label">{label}</div>}
            <div className="bill-winner-custom-select-container">
                <select className="bill-winner-custom-select" value={value} onChange={handleChange}>
                    <option value="">Оберіть опцію</option>
                    <option value="option1">Опція 1</option>
                    <option value="option2">Опція 2</option>
                    <option value="option3">Опція 3</option>
                </select>
            </div>
        </div>
    )
}