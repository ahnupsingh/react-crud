export default ({id, label, value, onChange, className, options, ...rest})=> {
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <select
                id={id}
                value={value}
                onChange={onChange}
                className={className}
                {...rest}
            >
                {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
                ))}
            </select>
        </>
    )
}