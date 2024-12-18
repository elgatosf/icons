import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LibraryFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M7.67443 3.90583C7.31725 3.36035 6.70071 3 6 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H6C6.70071 21 7.31725 20.6397 7.67443 20.0942C7.88029 19.7798 8 19.4039 8 19V5C8 4.59614 7.88029 4.22023 7.67443 3.90583ZM9.32557 3.90583C9.11971 4.22023 9 4.59614 9 5V19C9 19.4039 9.11971 19.7798 9.32557 20.0942C9.68275 20.6397 10.2993 21 11 21H12C13.1046 21 14 20.1046 14 19V5C14 3.89543 13.1046 3 12 3H11C10.2993 3 9.68275 3.36035 9.32557 3.90583ZM15.5 5.71526C15.0062 6.16499 14.7488 6.85177 14.8785 7.557L17.0484 19.3592C17.2482 20.4455 18.2907 21.1643 19.3771 20.9646L20.3606 20.7837C21.447 20.584 22.1657 19.5414 21.966 18.455L19.7961 6.65286C19.5963 5.5665 18.5538 4.84775 17.4674 5.04748L16.4839 5.22831C16.1027 5.29839 15.7669 5.47221 15.5 5.71526Z" clipRule="evenodd" />
		</svg>
	);
};

LibraryFilled.iconName = "library--filled";

export default LibraryFilled;