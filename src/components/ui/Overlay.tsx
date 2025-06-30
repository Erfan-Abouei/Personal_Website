import type { OverlayProp } from "@/types/components-props.types"
import type { JSX } from "react"

const Overlay = ({ isShow }: OverlayProp): JSX.Element => {
    return (
        <div className={`z-20 fixed inset-0 size-full backdrop-blur-lg transition-all duration-500 ${isShow ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>
    )
}

export default Overlay