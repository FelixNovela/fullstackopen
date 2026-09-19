const Persons = (props) => {
    return(
        <div>
            {props.personsToShow.map(person => <p key={person.id} ><b>{person.name} {person.number}</b></p>)}
        </div>
    )
}

export default Persons