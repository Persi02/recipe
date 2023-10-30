import './style.scss'
interface Ibutton {
    className: string,
    type?: "button" | "submit" | "reset",
    text: string,
    postUser?: React.MouseEventHandler<HTMLButtonElement>
}


function Button(props: Ibutton) {
    const { postUser, className, type, text } = props;

    return (
        <button
            className={`btn ${className}`}
            type={type}
            onClick={postUser}
        >
            {text}
        </button>
    )
}

export default Button