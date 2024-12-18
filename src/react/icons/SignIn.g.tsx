import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const SignIn = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8.75 9C8.33579 9 8 8.66421 8 8.25V6C8 4.89543 8.89543 4 10 4L19 4C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H10C8.89543 20 8 19.1046 8 18V15.75C8 15.3358 8.33579 15 8.75 15C9.16421 15 9.5 15.3358 9.5 15.75V18C9.5 18.2761 9.72386 18.5 10 18.5H19C19.2761 18.5 19.5 18.2761 19.5 18V6C19.5 5.72386 19.2761 5.5 19 5.5L10 5.5C9.72386 5.5 9.5 5.72386 9.5 6V8.25C9.5 8.66421 9.16421 9 8.75 9Z" /><path d="M11.2145 9.52508C10.9216 9.23219 10.9216 8.75731 11.2145 8.46442C11.5074 8.17153 11.9822 8.17153 12.2751 8.46442L15.2803 11.4696C15.5732 11.7625 15.5732 12.2374 15.2803 12.5303L12.2751 15.5355C11.9822 15.8284 11.5074 15.8284 11.2145 15.5355C10.9216 15.2426 10.9216 14.7677 11.2145 14.4748L12.9445 12.7448L3.2448 12.7448C2.83058 12.7448 2.4948 12.409 2.4948 11.9948C2.4948 11.5805 2.83058 11.2448 3.2448 11.2448L12.9341 11.2448L11.2145 9.52508Z" />
		</svg>
	);
};

SignIn.iconName = "sign-in";

export default SignIn;