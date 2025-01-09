import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMeta = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
			<path
				fillRule="evenodd"
				d="M2.204 17.308c-.498-.83-.743-1.917-.743-3.157 0-2.254.619-4.603 1.795-6.417C4.3 6.125 5.806 5 7.534 5c1 0 1.995.296 3.034 1.144.547.447 1.112 1.033 1.72 1.802.493-.667 1.025-1.297 1.598-1.797C14.733 5.41 15.647 5 16.567 5c1.544 0 3.015.895 4.141 2.574 1.233 1.838 1.83 4.153 1.83 6.543 0 1.42-.28 2.464-.756 3.289a3.1 3.1 0 0 1-1.736 1.423q-.386.127-.855.162-.135.009-.275.009c-.939 0-1.77-.204-2.69-1.07-.706-.666-1.532-1.849-2.167-2.912l-1.89-3.157q-.082-.136-.162-.267l-.827 1.466c-1.334 2.365-1.672 2.904-2.339 3.793C7.672 18.41 6.674 19 5.36 19c-1.56 0-2.545-.675-3.156-1.692m1.941-1.279c-.23-.374-.407-.992-.407-1.796 0-1.952.553-3.983 1.457-5.347.602-.91 1.315-1.523 2.147-1.59q.066-.006.134-.007h.021c1.111 0 1.808.695 2.35 1.27.27.288.646.762 1.084 1.385l-.896 1.377c-.197.302-.42.656-.661 1.035-.574.907-1.24 1.957-1.83 2.775-1.047 1.448-1.59 1.595-2.184 1.595-.46 0-.912-.207-1.215-.697m10.28-4.914a40 40 0 0 0-1.103-1.743q.093-.145.186-.283c.985-1.464 1.86-2.285 2.95-2.285 1.005 0 1.92.665 2.626 1.755.995 1.535 1.446 3.684 1.446 5.62 0 1.19-.247 2.248-1.174 2.494a1.7 1.7 0 0 1-.44.053c-.51 0-.902-.202-1.462-.88-.435-.53-1.18-1.65-2.487-3.828z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoMeta.iconName = "logo-meta";

export default IconLogoMeta;
