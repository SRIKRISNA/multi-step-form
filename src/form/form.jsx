import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Submit from "./submit";


function Form() {
    const [curStep, setCurStep] = useState(1);
    const [formData, setFormData] = useState({
        fname: "", lname:"", nickName:"", country:"", city: "", pincode: "", email:"", phone: ""
    })
    const prev = () => {
        setCurStep(curStep-1);
    }
    const next = () => {
        setCurStep(curStep+1);
    }
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    switch (curStep) {
        case 1:
            return (
                <Step1 data={formData} handleChange={handleChange} next={next} />
            );
        case 2:
            return (
                <Step2 data={formData} handleChange={handleChange} prev={prev} next={next} />
            );
        case 3:
            return (
                <Step3 data={formData} handleChange={handleChange} prev={prev} next={next} />
            )
        default:
            return <Submit data={formData} prev={prev} />
    }
}
export default Form;