import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Avatar = ({ size = "m", label = "Icon", ...props }: IconProps) => {
	const iconSize = sizeMap[size];
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={iconSize}
			height={iconSize}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fillRule="evenodd" d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13ZM12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM18.8743 17.0004C19.8967 15.5972 20.5 13.8691 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 13.8691 4.10328 15.5973 5.12575 17.0005C6.2149 15.4861 7.99231 14.5 10 14.5H14C16.0078 14.5 17.7851 15.4861 18.8743 17.0004ZM17.8491 18.1675C17.06 16.8681 15.6314 16 14 16H10C8.36867 16 6.94006 16.8681 6.15094 18.1676C7.67473 19.6131 9.7338 20.5 12 20.5C14.2662 20.5 16.3253 19.6131 17.8491 18.1675Z" clipRule="evenodd" />
		</svg>
	);
};

Avatar.iconName = "avatar";

export default Avatar;