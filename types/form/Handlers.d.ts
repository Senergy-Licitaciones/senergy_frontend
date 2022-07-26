import { ChangeEventHandler, FormEventHandler } from 'react'

export type HandlerChange=ChangeEventHandler<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>
export type HandlerSubmit=FormEventHandler<HTMLFormElement>
