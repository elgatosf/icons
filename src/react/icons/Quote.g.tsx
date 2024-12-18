import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Quote = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M7.52119 4.30474C7.76699 4.63814 7.69597 5.10768 7.36257 5.35348C6.16488 6.23648 5.19136 7.38847 4.52045 8.71664C4.15044 9.44912 3.87818 10.2239 3.70839 11.0211C3.80358 11.0072 3.90095 11 4 11H9C10.1046 11 11 11.8954 11 13V18C11 19.1046 10.1046 20 9 20H4C2.89543 20 2 19.1046 2 18V13C2 11.2771 2.40473 9.5782 3.18157 8.04032C3.95842 6.50244 5.08565 5.16855 6.47245 4.14613C6.80585 3.90033 7.27539 3.97135 7.52119 4.30474ZM3.5 18V13C3.5 12.7239 3.72386 12.5 4 12.5H9C9.27614 12.5 9.5 12.7239 9.5 13V18C9.5 18.2761 9.27614 18.5 9 18.5H4C3.72386 18.5 3.5 18.2762 3.5 18Z" clipRule="evenodd" /><path fillRule="evenodd" d="M13 13C13 11.2774 13.4046 9.57891 14.1811 8.04128C14.9576 6.50365 16.0844 5.16988 17.4707 4.14741C17.8041 3.90154 18.2736 3.97246 18.5195 4.30582C18.7654 4.63917 18.6944 5.10872 18.3611 5.35458C17.1638 6.23763 16.1907 7.38952 15.52 8.71747C15.1502 9.44971 14.8781 10.2242 14.7084 11.0211C14.8036 11.0072 14.901 11 15 11H20C21.1046 11 22 11.8954 22 13V18C22 19.1046 21.1046 20 20 20H15C13.8954 20 13 19.1046 13 18V13ZM15 12.5H20C20.2761 12.5 20.5 12.7239 20.5 13V18C20.5 18.2761 20.2761 18.5 20 18.5H15C14.7239 18.5 14.5 18.2762 14.5 18V13C14.5 12.7239 14.7239 12.5 15 12.5Z" clipRule="evenodd" />
		</svg>
	);
};

Quote.iconName = "quote";

export default Quote;