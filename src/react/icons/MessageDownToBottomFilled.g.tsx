import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MessageDownToBottomFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 22C12.2627 22 12.5232 21.9899 12.7808 21.97C11.677 20.805 10.9999 19.2316 10.9999 17.5C10.9999 14.9923 12.42 12.8162 14.4999 11.7322C15.3974 11.2644 16.4178 11 17.4999 11C17.9191 11 18.3291 11.0397 18.7262 11.1155C19.9694 11.3529 21.087 11.9443 21.9699 12.781C21.9898 12.5233 22 12.2628 22 12C22 6.47715 17.5228 2 12 2C6.47711 2 1.99996 6.47715 1.99996 12C1.99996 13.6539 2.40145 15.214 3.11228 16.5881L1.96041 20.8117C1.75682 21.5582 2.44179 22.2431 3.18829 22.0395L7.41182 20.8877C8.786 21.5985 10.3461 22 12 22Z" /><path fillRule="evenodd" d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM15.1464 15.8536L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536L19.8536 15.8536C20.0488 15.6583 20.0488 15.3417 19.8536 15.1464C19.6583 14.9512 19.3417 14.9512 19.1464 15.1464L17.5 16.7929L15.8536 15.1464C15.6583 14.9512 15.3417 14.9512 15.1464 15.1464C14.9512 15.3417 14.9512 15.6583 15.1464 15.8536ZM15.5 20C15.2239 20 15 19.7761 15 19.5C15 19.2239 15.2239 19 15.5 19H19.5C19.7761 19 20 19.2239 20 19.5C20 19.7761 19.7761 20 19.5 20H15.5Z" clipRule="evenodd" />
		</svg>
	);
};

MessageDownToBottomFilled.iconName = "message-down-to-bottom--filled";

export default MessageDownToBottomFilled;