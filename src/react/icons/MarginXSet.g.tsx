import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MarginXset = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M16 4.5H8V19.5H11.3135C11.4858 20.0335 11.7253 20.5368 12.0218 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V12.0218C20.5368 11.7253 20.0335 11.4858 19.5 11.3135V5C19.5 4.72386 19.2761 4.5 19 4.5H17.5V11C16.9837 11 16.4815 11.0602 16 11.1739V4.5ZM5 4.5H6.5V19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM20.0001 15.4999C20.0001 15.2238 19.7762 14.9999 19.5001 14.9999H16.6716C16.3955 14.9999 16.1716 15.2238 16.1716 15.4999C16.1716 15.7761 16.3955 15.9999 16.6716 15.9999H18.293L15.1464 19.1465C14.9511 19.3418 14.9511 19.6584 15.1464 19.8536C15.3416 20.0489 15.6582 20.0489 15.8535 19.8536L19.0001 16.707V18.3284C19.0001 18.6045 19.2239 18.8284 19.5001 18.8284C19.7762 18.8284 20.0001 18.6045 20.0001 18.3284V15.4999Z" clipRule="evenodd" />
		</svg>
	);
};

MarginXset.iconName = "margin-xset";

export default MarginXset;