
function Step3 (props) {
    const {data, handleChange, next, prev } = props;
    return(
        <>
            <form>
                <p><lable htmlFor="message">Message :</lable>
                <textarea name="message" value={data.message} onChange={handleChange} /></p>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </form>
        </>
    )
}
export default Step3;