import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const DiagramFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21 11C21.5523 11 22.0057 10.5509 21.9445 10.002C21.8509 9.16275 21.6394 8.33913 21.3149 7.55585C20.8626 6.46392 20.1997 5.47177 19.364 4.63604C18.5282 3.80031 17.5361 3.13738 16.4442 2.68508C15.6609 2.36064 14.8373 2.14914 13.998 2.0555C13.4491 1.99426 13 2.44771 13 3V11H21Z" /><path d="M11 5C11 4.44771 10.5509 3.99425 10.002 4.05549C8.57508 4.2147 7.20175 4.71371 5.99987 5.51677C4.51983 6.5057 3.36628 7.91131 2.68509 9.55585C2.0039 11.2004 1.82567 13.01 2.17294 14.7558C2.5202 16.5016 3.37737 18.1053 4.63604 19.364C5.89471 20.6226 7.49836 21.4798 9.24419 21.8271C10.99 22.1743 12.7996 21.9961 14.4442 21.3149C16.0887 20.6337 17.4943 19.4802 18.4832 18.0001C19.2863 16.7983 19.7853 15.4249 19.9445 13.998C20.0058 13.4491 19.5523 13 19 13L11 13V5Z" />
		</svg>
	);
};

DiagramFilled.iconName = "diagram--filled";

export default DiagramFilled;