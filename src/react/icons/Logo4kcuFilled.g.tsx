import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogo4kcuFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path d="M8.73535 9.10352V13.1533H7.26367L8.73535 9.10352Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.1855 14.1846H11.0127V13.1426H10.1855V8.04541H8.01025L6.10889 12.9224V14.1846H8.66016V16H10.1855V14.1846ZM15.6426 16H17.5493L15.3579 11.5796L17.415 8.04541H15.5352L13.709 11.6655L15.6426 16ZM12.001 16H13.666V8.04541H12.001V16Z"
					/>
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 16 16"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M5.64844 5.98421V8.92952H4.57813L5.64844 5.98421Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8 14.9999C11.866 14.9999 15 11.8659 15 7.99988C15 4.13388 11.866 0.999878 8 0.999878C4.13401 0.999878 1 4.13388 1 7.99988C1 11.8659 4.13401 14.9999 8 14.9999ZM6.70313 9.67953H7.30469V8.92171H6.70313V5.21468H5.1211L3.73829 8.76156V9.67953H5.59376V10.9998H6.70313V9.67953ZM10.6719 10.9998H12.0586L10.4648 7.78499L11.9609 5.21468H10.5938L9.26563 7.84749L10.6719 10.9998ZM8.02344 10.9998H9.23438V5.21468H8.02344V10.9998Z"
					/>
				</svg>
			);
	}
};

IconLogo4kcuFilled.iconName = "logo4kcu--filled";

export default IconLogo4kcuFilled;
