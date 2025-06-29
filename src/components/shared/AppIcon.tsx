import type { AppIconProps } from "../../types/components-props";

const AppIcon = ({ className, iconName }: AppIconProps) => {
    return (
        <svg className={className}>
            <use href={`#${iconName}`}></use>
        </svg>
    )
}

export default AppIcon