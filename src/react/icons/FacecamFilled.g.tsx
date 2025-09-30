import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFacecamFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M5.5401 4.33925C5.83151 4.10348 6.19875 4 6.57359 4H17.4264C17.8012 4 18.1685 4.10348 18.4599 4.33925C19.5112 5.18982 22 7.6616 22 12C22 16.3384 19.5112 18.8102 18.4599 19.6607C18.1685 19.8965 17.8012 20 17.4264 20H6.57359C6.19875 20 5.83151 19.8965 5.5401 19.6607C4.48882 18.8102 2 16.3384 2 12C2 7.6616 4.48882 5.18981 5.5401 4.33925ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM4.25 11.25C3.83579 11.25 3.5 11.5858 3.5 12C3.5 12.4142 3.83579 12.75 4.25 12.75H5.75C6.16421 12.75 6.5 12.4142 6.5 12C6.5 11.5858 6.16421 11.25 5.75 11.25H4.25Z"
					/>
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3.62525 4.84561C3.99812 4.31547 4.60568 4 5.25381 4H14.7424C15.3898 4 15.9968 4.31493 16.3695 4.84425C18.547 7.93655 18.547 12.0634 16.3695 15.1557C15.9968 15.6851 15.3898 16 14.7424 16H5.25381C4.60568 16 3.99812 15.6845 3.62525 15.1544C1.45044 12.0622 1.45044 7.93776 3.62525 4.84561ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34314 7 7 8.34315 7 10C7 11.6569 8.34314 13 10 13ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10H5C5.27614 10 5.5 9.77614 5.5 9.5C5.5 9.22386 5.27614 9 5 9H3.5Z"
					/>
				</svg>
			);
	}
};

IconFacecamFilled.iconName = "facecam--filled";

export default IconFacecamFilled;
