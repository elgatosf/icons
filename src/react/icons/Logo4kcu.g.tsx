import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogo4kcu = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10.1855 14.1846H11.0127V13.1426H10.1855V8.04541H8.01025L6.10889 12.9224V14.1846H8.66016V16H10.1855V14.1846ZM8.73535 9.10352V13.1533H7.26367L8.73535 9.10352Z"
					/>
					<path d="M15.6426 16H17.5493L15.3579 11.5796L17.415 8.04541H15.5352L13.709 11.6655L15.6426 16Z" />
					<path d="M12.001 16H13.666V8.04541H12.001V16Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6.70312 9.67969H7.30469V8.92188H6.70312V5.21484H5.12109L3.73828 8.76172V9.67969H5.59375V11H6.70312V9.67969ZM5.64844 5.98438V8.92969H4.57812L5.64844 5.98438Z"
					/>
					<path d="M10.6719 11H12.0586L10.4648 7.78516L11.9609 5.21484H10.5938L9.26562 7.84766L10.6719 11Z" />
					<path d="M8.02344 11H9.23438V5.21484H8.02344V11Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
					/>
				</svg>
			);
	}
};

IconLogo4kcu.iconName = "logo4kcu";

export default IconLogo4kcu;
