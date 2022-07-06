/* eslint-disable no-unused-vars */
export type ErrorsForm<FormType> ={
    [Property in keyof FormType]:string
}
export type ValidatorForm<ParamForm, ValidationForm> =(form:ParamForm)=>ErrorsForm<ValidationForm>
