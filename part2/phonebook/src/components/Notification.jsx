const Notification = ({message}) => {
    if(message === null){
        return null
    }

    return (
        <div className="confirmedMessage">
            {message}
        </div>
    )
}

export default Notification