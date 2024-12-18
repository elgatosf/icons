import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PaletteFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22H13C14.1046 22 15 21.1046 15 20V19C15 17.8954 15.8954 17 17 17C19.7614 17 22 14.7614 22 12C22 6.47715 17.5228 2 12 2ZM17.5 13C18.3284 13 19 12.3284 19 11.5C19 10.6716 18.3284 10 17.5 10C16.6716 10 16 10.6716 16 11.5C16 12.3284 16.6716 13 17.5 13ZM15.067 5.68783C15.7844 6.10204 16.0302 7.01943 15.616 7.73687C15.2018 8.4543 14.2844 8.70012 13.567 8.2859C12.8495 7.87169 12.6037 6.9543 13.0179 6.23687C13.4322 5.51943 14.3495 5.27361 15.067 5.68783ZM10.116 6.73687C9.70181 6.01943 8.78442 5.77361 8.06698 6.18783C7.34954 6.60204 7.10373 7.51943 7.51794 8.23687C7.93216 8.9543 8.84954 9.20012 9.56698 8.7859C10.2844 8.37169 10.5302 7.4543 10.116 6.73687ZM5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5C8 13.3284 7.32843 14 6.5 14C5.67157 14 5 13.3284 5 12.5ZM8.38398 16.2631C7.96977 16.9806 8.21558 17.898 8.93302 18.3122C9.65046 18.7264 10.5678 18.4806 10.9821 17.7631C11.3963 17.0457 11.1505 16.1283 10.433 15.7141C9.71558 15.2999 8.79819 15.5457 8.38398 16.2631Z" clipRule="evenodd" />
		</svg>
	);
};

PaletteFilled.iconName = "palette--filled";

export default PaletteFilled;