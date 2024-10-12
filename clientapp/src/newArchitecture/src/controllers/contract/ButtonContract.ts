import { FormEventHandler,MouseEventHandler } from "react"

interface ButtonContract {
    text:string
    onClickAction:MouseEventHandler<HTMLButtonElement>
    onHover?:FormEventHandler<HTMLButtonElement>
    id:string
    beforeHook?:any
    afterHook?:any
}

export default ButtonContract