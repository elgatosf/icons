import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FacecamNeoFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 13.5C10.6193 13.5 9.5 12.3807 9.5 11C9.5 9.61929 10.6193 8.5 12 8.5C13.3807 8.5 14.5 9.61929 14.5 11C14.5 12.3807 13.3807 13.5 12 13.5Z" /><path fillRule="evenodd" d="M7.5 4C3.91015 4 1 6.91015 1 10.5V11.5C1 14.9216 3.64378 17.7257 7 17.9811V19C7 20.1046 7.89543 21 9 21H15C16.1046 21 17 20.1046 17 19V17.9811C20.3562 17.7257 23 14.9216 23 11.5V10.5C23 6.91015 20.0898 4 16.5 4H7.5ZM15.5 18H8.5V19C8.5 19.2761 8.72386 19.5 9 19.5H15C15.2761 19.5 15.5 19.2761 15.5 19V18ZM8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11ZM3.5 11C3.5 10.5858 3.83579 10.25 4.25 10.25H6.25C6.66421 10.25 7 10.5858 7 11C7 11.4142 6.66421 11.75 6.25 11.75H4.25C3.83579 11.75 3.5 11.4142 3.5 11Z" clipRule="evenodd" />
		</svg>
	);
};

FacecamNeoFilled.iconName = "facecam-neo--filled";

export default FacecamNeoFilled;