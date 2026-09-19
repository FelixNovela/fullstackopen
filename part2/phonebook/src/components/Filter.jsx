const Filter = (props) => {
    return(
        <div>
            filter shown with <input value={props.filterPersonValue} onChange={props.handleFilter} />
        </div>
    )
}

export default Filter