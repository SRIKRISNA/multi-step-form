
function Step2 (props) {
    const {data, handleChange, next, prev } = props;
    return(
        <>
            <form>
                <p><lable htmlFor="country">Country :</lable>
                <input type="text" name="country" value={data.country} onChange={handleChange} /></p>
                <p><lable htmlFor="city">City :</lable>
                <input type="text" name="city" value={data.city} onChange={handleChange} /></p>
                <p><lable htmlFor="pincode">Postcode :</lable>
                <input type="number" name="pincode" value={data.pincode} onChange={handleChange} /></p>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </form>
        </>
    )
}
export default Step2;