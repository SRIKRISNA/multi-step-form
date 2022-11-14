
function Step3 (props) {
    const {data, handleChange, next, prev } = props;
    return(
        <>
            <form>
            <h2>Multi Step Form</h2>
                <h4>Step 3</h4>
                <p><lable htmlFor="email">Email :</lable>
                <input type="email" name="email" value={data.email} onChange={handleChange} /></p>
                <p><lable htmlFor="phone">Phone :</lable>
                <input type="text" name="phone" value={data.phone} onChange={handleChange} /></p>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </form>
        </>
    )
}
export default Step3;