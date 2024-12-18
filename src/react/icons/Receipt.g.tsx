import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Receipt = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7.75 6C7.33579 6 7 6.33579 7 6.75C7 7.16421 7.33579 7.5 7.75 7.5H16.25C16.6642 7.5 17 7.16421 17 6.75C17 6.33579 16.6642 6 16.25 6H7.75Z" /><path d="M7 9.75C7 9.33579 7.33579 9 7.75 9H11.25C11.6642 9 12 9.33579 12 9.75C12 10.1642 11.6642 10.5 11.25 10.5H7.75C7.33579 10.5 7 10.1642 7 9.75Z" /><path d="M7.75 12C7.33579 12 7 12.3358 7 12.75C7 13.1642 7.33579 13.5 7.75 13.5H11.25C11.6642 13.5 12 13.1642 12 12.75C12 12.3358 11.6642 12 11.25 12H7.75Z" /><path d="M13.5 9.75C13.5 9.33579 13.8358 9 14.25 9H16.25C16.6642 9 17 9.33579 17 9.75C17 10.1642 16.6642 10.5 16.25 10.5H14.25C13.8358 10.5 13.5 10.1642 13.5 9.75Z" /><path d="M14.25 12C13.8358 12 13.5 12.3358 13.5 12.75C13.5 13.1642 13.8358 13.5 14.25 13.5H16.25C16.6642 13.5 17 13.1642 17 12.75C17 12.3358 16.6642 12 16.25 12H14.25Z" /><path fillRule="evenodd" d="M6 2C4.89543 2 4 2.89543 4 4V21.25C4 21.5557 4.18549 21.8307 4.46887 21.9453C4.75224 22.0599 5.0768 21.991 5.28924 21.7713L7.16667 19.8291L9.04409 21.7713C9.1854 21.9175 9.38001 22 9.58333 22C9.78665 22 9.98126 21.9175 10.1226 21.7713L12 19.8291L13.8774 21.7713C14.0187 21.9175 14.2133 22 14.4167 22C14.62 22 14.8146 21.9175 14.9559 21.7713L16.8333 19.8291L18.7108 21.7713C18.9232 21.991 19.2478 22.0599 19.5311 21.9453C19.8145 21.8307 20 21.5557 20 21.25V4C20 2.89543 19.1046 2 18 2H6ZM5.5 4C5.5 3.72386 5.72386 3.5 6 3.5H18C18.2761 3.5 18.5 3.72386 18.5 4V19.395L17.3726 18.2287C17.2313 18.0825 17.0367 18 16.8333 18C16.63 18 16.4354 18.0825 16.2941 18.2287L14.4167 20.1709L12.5392 18.2287C12.3979 18.0825 12.2033 18 12 18C11.7967 18 11.6021 18.0825 11.4608 18.2287L9.58333 20.1709L7.70591 18.2287C7.5646 18.0825 7.36999 18 7.16667 18C6.96335 18 6.76874 18.0825 6.62743 18.2287L5.5 19.395V4Z" clipRule="evenodd" />
		</svg>
	);
};

Receipt.iconName = "receipt";

export default Receipt;