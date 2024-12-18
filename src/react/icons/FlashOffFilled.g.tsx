import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FlashOffFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M15.964 2.97953C16.072 2.64375 15.9314 2.27814 15.6262 2.10122C15.3211 1.92429 14.934 1.98386 14.6962 2.24432L10.2719 7.08993L16.7655 13.5835L19.8039 10.2557C20.0042 10.0363 20.0562 9.71924 19.9362 9.44735C19.8163 9.17547 19.5472 9.00003 19.25 9.00003H14.0289L15.964 2.97953Z" /><path d="M14.7406 15.8012L18.7197 19.7803C19.0126 20.0732 19.4874 20.0732 19.7803 19.7803C20.0732 19.4874 20.0732 19.0126 19.7803 18.7197L5.28033 4.21967C4.98744 3.92678 4.51256 3.92678 4.21967 4.21967C3.92678 4.51256 3.92678 4.98744 4.21967 5.28033L8.24701 9.30767L4.19615 13.7443C3.99579 13.9638 3.94388 14.2808 4.0638 14.5527C4.18372 14.8246 4.45286 15 4.75001 15H9.97115L8.03599 21.0205C7.92806 21.3563 8.06868 21.7219 8.37379 21.8988C8.6789 22.0758 9.06606 22.0162 9.30388 21.7557L14.7406 15.8012Z" />
		</svg>
	);
};

FlashOffFilled.iconName = "flash-off--filled";

export default FlashOffFilled;