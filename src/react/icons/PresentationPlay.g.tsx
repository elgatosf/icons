import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPresentationPlay = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.25 8.70096C16.25 9.27831 16.25 10.7217 15.25 11.299L10.75 13.8971C9.75 14.4745 8.5 13.7528 8.5 12.5981L8.5 7.40192C8.5 6.24722 9.75 5.52554 10.75 6.10289L15.25 8.70096ZM14.5 10L10 12.5981V7.40192L14.5 10Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1.75 3C1.33579 3 1 3.33579 1 3.75C1 4.16421 1.33579 4.5 1.75 4.5H3V15C3 16.1046 3.89543 17 5 17H11.25V17.9393L8.46967 20.7197C8.17678 21.0126 8.17678 21.4874 8.46967 21.7803C8.76256 22.0732 9.23744 22.0732 9.53033 21.7803L12 19.3107L14.4697 21.7803C14.7626 22.0732 15.2374 22.0732 15.5303 21.7803C15.8232 21.4874 15.8232 21.0126 15.5303 20.7197L12.75 17.9393V17H19C20.1046 17 21 16.1046 21 15V4.5H22.25C22.6642 4.5 23 4.16421 23 3.75C23 3.33579 22.6642 3 22.25 3H1.75ZM19.5 4.5H4.5V15C4.5 15.2761 4.72386 15.5 5 15.5H19C19.2761 15.5 19.5 15.2761 19.5 15V4.5Z"
			/>
		</svg>
	);
};

IconPresentationPlay.iconName = "presentation-play";

export default IconPresentationPlay;
