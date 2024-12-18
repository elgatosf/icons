import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MessageAddFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12.0378 21.9244C12.2661 21.9244 12.4926 21.9167 12.7171 21.9016C11.651 20.7438 11 19.1979 11 17.5C11 13.9101 13.9101 11 17.5 11C19.2301 11 20.8024 11.676 21.9671 12.7782C21.9889 12.5091 22 12.2369 22 11.9622C22 6.46023 17.5398 2 12.0378 2C6.53583 2 2.0756 6.46023 2.0756 11.9622C2.0756 13.6098 2.47557 15.164 3.18372 16.533L2.0362 20.7406C1.83338 21.4842 2.51576 22.1666 3.25944 21.9638L7.46701 20.8163C8.83599 21.5244 10.3902 21.9244 12.0378 21.9244Z" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM17.5 14C17.7761 14 18 14.2239 18 14.5V17H20.5001C20.7762 17 21.0001 17.2239 21.0001 17.5C21.0001 17.7761 20.7762 18 20.5001 18H18V20.5C18 20.7761 17.7761 21 17.5 21C17.2239 21 17 20.7761 17 20.5V18H14.5001C14.2239 18 14.0001 17.7761 14.0001 17.5C14.0001 17.2239 14.2239 17 14.5001 17H17V14.5C17 14.2239 17.2239 14 17.5 14Z" clipRule="evenodd" />
		</svg>
	);
};

MessageAddFilled.iconName = "message-add--filled";

export default MessageAddFilled;