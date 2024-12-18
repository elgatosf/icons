import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AccessibilityFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 9.5C13.1046 9.5 14 8.60457 14 7.5C14 6.39543 13.1046 5.5 12 5.5C10.8954 5.5 10 6.39543 10 7.5C10 8.60457 10.8954 9.5 12 9.5ZM7.22548 10.2697C7.43259 9.91099 7.89128 9.78808 8.25 9.99519C9.39014 10.6535 10.6835 11 12 11C13.3165 11 14.6099 10.6535 15.75 9.99519C16.1087 9.78808 16.5674 9.91099 16.7745 10.2697C16.9816 10.6284 16.8587 11.0871 16.5 11.2942C15.3491 11.9587 14.0682 12.3585 12.75 12.4687V13.9906L15.3397 17.2866C15.5956 17.6123 15.5391 18.0838 15.2134 18.3397C14.8877 18.5956 14.4162 18.5391 14.1603 18.2134L12 15.4639L9.83974 18.2134C9.58383 18.5391 9.11234 18.5956 8.78663 18.3397C8.46093 18.0838 8.40435 17.6123 8.66026 17.2866L11.25 13.9906V12.4687C9.93183 12.3585 8.65088 11.9587 7.5 11.2942C7.14128 11.0871 7.01837 10.6284 7.22548 10.2697Z" clipRule="evenodd" />
		</svg>
	);
};

AccessibilityFilled.iconName = "accessibility--filled";

export default AccessibilityFilled;