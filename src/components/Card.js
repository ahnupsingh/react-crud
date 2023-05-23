export default ({header="Card", children, className, ...rest})=> {
    return (
        <div
            className={"card " + className}
            {...rest}
        >
            <div className="card-header">{header}</div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}