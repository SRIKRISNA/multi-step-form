
function Step2 (props) {
    const {data, handleChange, next, prev } = props;
    return(
        <>
            <form>
                <p><lable htmlFor="address">Address :</lable>
                <input type="text" name="address" value={data.address} onChange={handleChange} /></p>
                <p><lable htmlFor="pincode">pincode :</lable>
                <input type="number" name="pincode" value={data.pincode} onChange={handleChange} /></p>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </form>
        </>
    )
}
export default Step2;