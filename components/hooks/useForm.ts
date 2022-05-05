import { ChangeEvent, useState } from "react"

export const useForm=(initForm)=>{

    const [form,setForm]=useState(initForm);
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        });
    }
    return{
        form,
        handleChange
    }
}