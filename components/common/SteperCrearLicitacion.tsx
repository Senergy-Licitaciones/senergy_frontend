import { useState } from "react";
import AsideSteper from "./AsideSteper";
import FormCrearLicitacion from "./FormCrearLicitacion";
type Props={
    token:string
}
export default function SteperCrearLicitacion(){
    const [step,setStep]=useState(1);
    return(
        <>
        <FormCrearLicitacion step={step} setStep={setStep} />
        <AsideSteper step={step} setStep={setStep} />
        </>
    )
}