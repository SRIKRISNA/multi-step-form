

function Submit (props) {
    const {data} = props;
    const listItems = Object.entries(data).map(([key, value]) => (
        <li>
            <strong>{key}:</strong> {value}
        </li>
    )
    )
    return(
        <>
            <div style={{color:"#fff"}}>
                <ul>{listItems}</ul>
                <p >user has Successfully subscribed</p>
                <button type="submit">Submit</button>
            </div>
        </>
    )
}
export default Submit;