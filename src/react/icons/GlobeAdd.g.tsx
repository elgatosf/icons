import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGlobeAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10q.395 0 .78-.03a6.5 6.5 0 0 1-1.107-1.587 1.7 1.7 0 0 1-.361-.34c-.311-.373-.625-.96-.902-1.75-.498-1.416-.836-3.356-.9-5.543h3.553a6.5 6.5 0 0 1 2.925-1.573c-.07-2.294-.425-4.381-.982-5.966a9 9 0 0 0-.597-1.365 8.51 8.51 0 0 1 6.058 7.404h-1.176a6.5 6.5 0 0 1 2.679 1.53q.03-.385.03-.78m-12.49-.75c.064-2.187.402-4.127.9-5.542.277-.791.591-1.378.902-1.752.315-.379.55-.456.688-.456s.373.077.688.456c.311.374.625.961.902 1.752.498 1.415.836 3.355.9 5.542zm-1.5 0H3.533A8.51 8.51 0 0 1 9.59 3.846a9 9 0 0 0-.597 1.365c-.563 1.602-.92 3.716-.984 6.039m-4.477 1.5H8.01c.064 2.323.421 4.437.984 6.04.175.496.373.956.597 1.364a8.51 8.51 0 0 1-6.058-7.404"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconGlobeAdd.iconName = "globe-add";

export default IconGlobeAdd;
