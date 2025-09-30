import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFacecamNeo = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11ZM12 13.5C10.6193 13.5 9.5 12.3807 9.5 11C9.5 9.61929 10.6193 8.5 12 8.5C13.3807 8.5 14.5 9.61929 14.5 11C14.5 12.3807 13.3807 13.5 12 13.5Z"
			/>
			<path d="M4.25 10.25C3.83579 10.25 3.5 10.5858 3.5 11C3.5 11.4142 3.83579 11.75 4.25 11.75H6.25C6.66421 11.75 7 11.4142 7 11C7 10.5858 6.66421 10.25 6.25 10.25H4.25Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 10.5C1 6.91015 3.91015 4 7.5 4H16.5C20.0898 4 23 6.91015 23 10.5V11.5C23 14.9216 20.3562 17.7257 17 17.9811V19C17 20.1046 16.1046 21 15 21H9C7.89543 21 7 20.1046 7 19V17.9811C3.64378 17.7257 1 14.9216 1 11.5V10.5ZM7.5 5.5H16.5C19.2614 5.5 21.5 7.73858 21.5 10.5V11.5C21.5 14.2614 19.2614 16.5 16.5 16.5H7.5C4.73858 16.5 2.5 14.2614 2.5 11.5V10.5C2.5 7.73858 4.73858 5.5 7.5 5.5ZM8.5 19V18H15.5V19C15.5 19.2761 15.2761 19.5 15 19.5H9C8.72386 19.5 8.5 19.2761 8.5 19Z"
			/>
		</svg>
	);
};

IconFacecamNeo.iconName = "facecam-neo";

export default IconFacecamNeo;
