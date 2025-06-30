import type { JSX } from "react"

const Pattern = (): JSX.Element => {
    return (
        <div className="-z-10 absolute top-0 left-0 right-0 select-none pointer-events-none">
            <img src={`${import.meta.env.BASE_URL}images/other/Pattern.png`} alt="Pattern" className="object-cover size-full" />
        </div>
    )
}

export default Pattern