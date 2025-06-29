import type { AppIconProps } from "../../types/components-props";

const AppIcon = ({ className, iconName }: AppIconProps) => {
    return (
        <svg className={className}>
            <use href={`/public/sprite.svg#${iconName}`} />
        </svg>
    );
};

export default AppIcon;