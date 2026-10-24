const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <h2>add a new</h2>
        <div>name: <input value={props.valueName} onChange={props.onChangeName} /></div>
        <div>number: <input value={props.valueNumber} onChange={props.onChangeNumber} /></div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm