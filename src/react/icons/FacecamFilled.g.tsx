import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FacecamFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" /><path fillRule="evenodd" d="M2.48487 18.1913C2.77877 18.7231 3.35368 19 3.96125 19L20.0388 19C20.6463 19 21.2212 18.7231 21.5153 18.1914C22.1078 17.1198 23 15.0084 23 12.0088V11.9912C23 8.99157 22.1078 6.88018 21.5153 5.80859C21.2212 5.27691 20.6463 5 20.0387 5H3.96125C3.35368 5 2.77877 5.27692 2.48487 5.80867C1.89229 6.88083 1 8.99427 1 12C1 15.0057 1.89229 17.1192 2.48487 18.1913ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM3.25 12.75H5.25C5.66421 12.75 6 12.4142 6 12C6 11.5858 5.66421 11.25 5.25 11.25H3.25C2.83579 11.25 2.5 11.5858 2.5 12C2.5 12.4142 2.83579 12.75 3.25 12.75Z" clipRule="evenodd" />
		</svg>
	);
};

FacecamFilled.iconName = "facecam--filled";

export default FacecamFilled;