import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FlashOff = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M15.6262 2.10122C15.9314 2.27814 16.072 2.64375 15.964 2.97953L14.0289 9.00003H19.25C19.5472 9.00003 19.8163 9.17547 19.9362 9.44735C20.0562 9.71924 20.0042 10.0363 19.8039 10.2557L16.7655 13.5835L15.7037 12.5218L17.5496 10.5H13.682L12.3873 9.20534L13.4824 5.79827L11.3337 8.15169L10.2719 7.08994L14.6962 2.24432C14.934 1.98386 15.3211 1.92429 15.6262 2.10122Z" /><path fillRule="evenodd" d="M14.7406 15.8012L18.7197 19.7803C19.0126 20.0732 19.4874 20.0732 19.7803 19.7803C20.0732 19.4874 20.0732 19.0126 19.7803 18.7197L5.28033 4.21967C4.98744 3.92678 4.51256 3.92678 4.21967 4.21967C3.92678 4.51256 3.92678 4.98744 4.21967 5.28033L8.24701 9.30767L4.19615 13.7443C3.99579 13.9638 3.94388 14.2808 4.0638 14.5527C4.18372 14.8246 4.45286 15 4.75001 15H9.97115L8.03599 21.0205C7.92806 21.3563 8.06868 21.7219 8.37379 21.8988C8.6789 22.0758 9.06606 22.0162 9.30388 21.7557L14.7406 15.8012ZM13.6788 14.7395L9.30876 10.3694L6.45039 13.5H11C11.2397 13.5 11.4649 13.6146 11.6061 13.8082C11.7473 14.0019 11.7874 14.2514 11.714 14.4795L10.5176 18.2018L13.6788 14.7395Z" clipRule="evenodd" />
		</svg>
	);
};

FlashOff.iconName = "flash-off";

export default FlashOff;