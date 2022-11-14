
function Step1 (props) {
    const {data, handleChange, next } = props;
    return(
        <>
            <form>
                <p><lable htmlFor="name">Name :</lable>
                <input type="text" name="name" value={data.name} onChange={handleChange} /></p>
                <p><lable htmlFor="email">Email :</lable>
                <input type="email" name="email" value={data.email} onChange={handleChange} /></p>
                <button onClick={next}>Next</button>
            </form>
        </>
    )
}
export default Step1;