import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Accessibility = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M14.5 7.5C14.5 8.88071 13.3807 10 12 10C10.6193 10 9.5 8.88071 9.5 7.5C9.5 6.11929 10.6193 5 12 5C13.3807 5 14.5 6.11929 14.5 7.5ZM13 7.5C13 8.05228 12.5523 8.5 12 8.5C11.4477 8.5 11 8.05228 11 7.5C11 6.94772 11.4477 6.5 12 6.5C12.5523 6.5 13 6.94772 13 7.5Z" clipRule="evenodd" /><path d="M8.25 9.99519C7.89128 9.78808 7.43259 9.91099 7.22548 10.2697C7.01837 10.6284 7.14128 11.0871 7.5 11.2942C8.65088 11.9587 9.93183 12.3585 11.25 12.4687V13.9906L8.66026 17.2866C8.40435 17.6123 8.46093 18.0838 8.78663 18.3397C9.11234 18.5956 9.58383 18.5391 9.83974 18.2134L12 15.4639L14.1603 18.2134C14.4162 18.5391 14.8877 18.5956 15.2134 18.3397C15.5391 18.0838 15.5956 17.6123 15.3397 17.2866L12.75 13.9906V12.4687C14.0682 12.3585 15.3491 11.9587 16.5 11.2942C16.8587 11.0871 16.9816 10.6284 16.7745 10.2697C16.5674 9.91099 16.1087 9.78808 15.75 9.99519C14.6099 10.6535 13.3165 11 12 11C10.6835 11 9.39014 10.6535 8.25 9.99519Z" /><path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5Z" clipRule="evenodd" />
		</svg>
	);
};

Accessibility.iconName = "accessibility";

export default Accessibility;