import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const VolumeMutedFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M5 15.9999L9.29289 20.2928C9.92286 20.9228 11 20.4766 11 19.5857V4.41411C11 3.52321 9.92286 3.07704 9.29289 3.70701L5 7.9999H3C1.89543 7.9999 1 8.89533 1 9.9999V13.9999C1 15.1045 1.89543 15.9999 3 15.9999H5Z" clipRule="evenodd" /><path d="M14.2197 14.7197C13.9268 15.0126 13.9268 15.4874 14.2197 15.7803C14.5126 16.0732 14.9874 16.0732 15.2803 15.7803L18 13.0607L20.7197 15.7803C21.0126 16.0732 21.4874 16.0732 21.7803 15.7803C22.0732 15.4874 22.0732 15.0126 21.7803 14.7197L19.0607 12L21.7803 9.28033C22.0732 8.98744 22.0732 8.51256 21.7803 8.21967C21.4874 7.92678 21.0126 7.92678 20.7197 8.21967L18 10.9393L15.2803 8.21967C14.9874 7.92678 14.5126 7.92678 14.2197 8.21967C13.9268 8.51256 13.9268 8.98744 14.2197 9.28033L16.9393 12L14.2197 14.7197Z" />
		</svg>
	);
};

VolumeMutedFilled.iconName = "volume-muted--filled";

export default VolumeMutedFilled;