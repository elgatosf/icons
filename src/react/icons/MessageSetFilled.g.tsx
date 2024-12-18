import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MessageSetFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 22C12.2628 22 12.5232 21.9899 12.7809 21.97C11.6771 20.805 11 19.2316 11 17.5C11 13.9101 13.9101 11 17.5 11C19.2315 11 20.805 11.6771 21.9699 12.7809C21.9898 12.5232 22 12.2628 22 12C22 6.47715 17.5228 2 12 2C6.47711 2 1.99996 6.47715 1.99996 12C1.99996 13.6539 2.40145 15.214 3.11228 16.5881L1.96041 20.8117C1.75682 21.5582 2.44179 22.2431 3.18829 22.0395L7.41182 20.8877C8.786 21.5985 10.3461 22 12 22Z" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM20 15.5C20 15.2239 19.7762 15 19.5 15H16.6716C16.3955 15 16.1716 15.2239 16.1716 15.5C16.1716 15.7761 16.3955 16 16.6716 16H18.2929L15.1463 19.1466C14.9511 19.3419 14.9511 19.6584 15.1463 19.8537C15.3416 20.049 15.6582 20.049 15.8534 19.8537L19 16.7071V18.3284C19 18.6046 19.2239 18.8284 19.5 18.8284C19.7762 18.8284 20 18.6046 20 18.3284V15.5Z" clipRule="evenodd" />
		</svg>
	);
};

MessageSetFilled.iconName = "message-set--filled";

export default MessageSetFilled;