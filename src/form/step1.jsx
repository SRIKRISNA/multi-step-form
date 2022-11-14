
function Step1 (props) {
    const {data, handleChange, next } = props;
    return(
        <>
            <form>
                <p><lable htmlFor="fname">First Name :</lable>
                <input type="text" name="fname" value={data.fname} onChange={handleChange} /></p>
                <p><lable htmlFor="lname">Last Name :</lable>
                <input type="text" name="lname" value={data.lname} onChange={handleChange} /></p>
                <p><lable htmlFor="nickName">Nick Name :</lable>
                <input type="text" name="nickName" value={data.nickName} onChange={handleChange} /></p>
                <button onClick={next}>Next</button>
            </form>
        </>
    )
}
export default Step1;