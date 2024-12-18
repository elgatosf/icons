import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const EditFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.6037 20.9799C3.91286 21.0964 4.36483 20.9672 5.26878 20.7089L8.70301 19.7277C8.99994 19.6429 9.1484 19.6005 9.28688 19.5369C9.40984 19.4804 9.52675 19.4116 9.63582 19.3316C9.75866 19.2414 9.86786 19.1322 10.0863 18.9138L18.4697 10.5304L13.4696 5.53038L5.08648 13.9135C4.868 14.132 4.75876 14.2413 4.66854 14.3642C4.58843 14.4733 4.5196 14.5903 4.46312 14.7133C4.3995 14.8519 4.35705 15.0004 4.27216 15.2976L3.29135 18.7304C3.033 19.6346 2.90382 20.0867 3.02014 20.396C3.12153 20.6657 3.3342 20.8784 3.6037 20.9799Z" /><path d="M14.5303 4.46972L19.5303 9.46974L20.2364 8.76362C21.0287 7.97132 21.4249 7.57516 21.5733 7.11832C21.7039 6.71647 21.7039 6.28358 21.5733 5.88173C21.4249 5.42488 21.0287 5.02873 20.2364 4.23643L19.7619 3.76189C18.9701 2.97012 18.5743 2.57424 18.1178 2.42591C17.7163 2.29543 17.2838 2.29543 16.8823 2.42591C16.4258 2.57424 16.0299 2.97012 15.2381 3.76189L14.5303 4.46972Z" />
		</svg>
	);
};

EditFilled.iconName = "edit--filled";

export default EditFilled;