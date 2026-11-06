const Notification = ({message, errorMessageStyle}) => {
    if(message === null){
        return null
    }

    return (
        <div className={errorMessageStyle}>
            {message}
        </div>
    )
}

export default Notification