
import Button from './Button'


const Persons = (props) => {
    return(
        <div>
            {props.personsToShow.map(person => 
            <p key={person.id} ><b>{person.name} {person.number}</b>
             <Button idP={person.id} deletePersonNumber={props.deletePerson}/> </p>)}
        </div>
    )
}

export default Persons