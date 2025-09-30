import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckMiniFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM7.75 11C8.44036 11 9 10.4404 9 9.75C9 9.05964 8.44036 8.5 7.75 8.5C7.05964 8.5 6.5 9.05964 6.5 9.75C6.5 10.4404 7.05964 11 7.75 11ZM9 14.25C9 14.9404 8.44036 15.5 7.75 15.5C7.05964 15.5 6.5 14.9404 6.5 14.25C6.5 13.5596 7.05964 13 7.75 13C8.44036 13 9 13.5596 9 14.25ZM13.25 9.75C13.25 10.4404 12.6904 11 12 11C11.3096 11 10.75 10.4404 10.75 9.75C10.75 9.05964 11.3096 8.5 12 8.5C12.6904 8.5 13.25 9.05964 13.25 9.75ZM13.25 14.25C13.25 14.9404 12.6904 15.5 12 15.5C11.3096 15.5 10.75 14.9404 10.75 14.25C10.75 13.5596 11.3096 13 12 13C12.6904 13 13.25 13.5596 13.25 14.25ZM17.5 9.75C17.5 10.4404 16.9404 11 16.25 11C15.5596 11 15 10.4404 15 9.75C15 9.05964 15.5596 8.5 16.25 8.5C16.9404 8.5 17.5 9.05964 17.5 9.75ZM17.5 14.25C17.5 14.9404 16.9404 15.5 16.25 15.5C15.5596 15.5 15 14.9404 15 14.25C15 13.5596 15.5596 13 16.25 13C16.9404 13 17.5 13.5596 17.5 14.25Z"
			/>
		</svg>
	);
};

IconStreamDeckMiniFilled.iconName = "stream-deck-mini--filled";

export default IconStreamDeckMiniFilled;
