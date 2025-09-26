import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVoiceTuneFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M11 13.75a.75.75 0 0 1 .633.348l1.077 1.691 1.692 1.078a.75.75 0 0 1 0 1.266L12.71 19.21l-1.077 1.692a.75.75 0 0 1-1.266 0L9.29 19.21l-1.691-1.077a.75.75 0 0 1 0-1.266l1.691-1.078 1.078-1.691A.75.75 0 0 1 11 13.75m6-6.5a.75.75 0 0 1 .633.348l1.271 1.997 1.998 1.272a.75.75 0 0 1 0 1.266l-1.998 1.271-1.271 1.998a.75.75 0 0 1-1.266 0l-1.272-1.998-1.997-1.271a.75.75 0 0 1 0-1.266l1.997-1.272 1.272-1.997A.75.75 0 0 1 17 7.25m-9-4.5a.75.75 0 0 1 .633.348l1.66 2.608 2.61 1.661a.75.75 0 0 1 0 1.266l-2.61 1.66-1.66 2.61a.75.75 0 0 1-1.266 0l-1.66-2.61-2.61-1.66a.75.75 0 0 1 0-1.266l2.61-1.66 1.66-2.61A.75.75 0 0 1 8 2.75" />
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M9.5 11.5a.5.5 0 0 1 .422.231l.912 1.434 1.435.913a.5.5 0 0 1 0 .844l-1.435.912-.912 1.435a.5.5 0 0 1-.844 0l-.913-1.435-1.434-.912a.5.5 0 0 1 0-.844l1.434-.913.913-1.434.037-.05A.5.5 0 0 1 9.5 11.5m4.75-5a.5.5 0 0 1 .422.231l1.009 1.587 1.588 1.01a.5.5 0 0 1 0 .844L15.68 11.18l-1.01 1.588a.5.5 0 0 1-.843 0l-1.01-1.588-1.587-1.01a.5.5 0 0 1 0-.843l1.587-1.01 1.01-1.587.037-.05a.5.5 0 0 1 .385-.181m-7.5-4a.5.5 0 0 1 .422.231L8.569 4.93l2.2 1.398a.5.5 0 0 1 0 .844l-2.2 1.397-1.397 2.2a.5.5 0 0 1-.844 0l-1.398-2.2L2.73 7.172a.5.5 0 0 1 0-.844L4.93 4.93 6.328 2.73l.037-.05A.5.5 0 0 1 6.75 2.5" />
				</svg>
			);
	}
};

IconVoiceTuneFilled.iconName = "voice-tune--filled";

export default IconVoiceTuneFilled;
