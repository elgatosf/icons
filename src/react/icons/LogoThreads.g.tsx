import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoThreads = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M16.45 11.32a7 7 0 0 0-.244-.11c-.143-2.645-1.588-4.16-4.015-4.175h-.033c-1.452 0-2.659.62-3.402 1.747l1.335.916c.555-.842 1.426-1.022 2.068-1.022h.022c.799.005 1.402.238 1.792.69q.426.497.568 1.362a10.2 10.2 0 0 0-2.294-.11c-2.307.132-3.79 1.478-3.69 3.348.05.948.522 1.764 1.33 2.297.682.45 1.562.671 2.475.621 1.207-.066 2.154-.526 2.814-1.368.502-.64.819-1.468.959-2.512.575.347 1.001.804 1.236 1.353.4.933.424 2.467-.827 3.717-1.097 1.095-2.415 1.57-4.406 1.584-2.21-.017-3.88-.725-4.967-2.106C6.154 16.259 5.628 14.39 5.608 12c.02-2.39.546-4.259 1.563-5.552 1.086-1.38 2.757-2.09 4.967-2.106 2.225.017 3.925.729 5.053 2.116.553.68.97 1.537 1.245 2.534L20 8.575c-.333-1.228-.858-2.286-1.571-3.164-1.446-1.78-3.56-2.69-6.286-2.71h-.01c-2.72.02-4.811.934-6.216 2.72-1.25 1.59-1.895 3.8-1.917 6.572v.014c.022 2.771.667 4.983 1.917 6.572 1.405 1.786 3.496 2.7 6.215 2.72h.011c2.418-.017 4.122-.65 5.526-2.053 1.837-1.835 1.781-4.135 1.176-5.547-.434-1.012-1.262-1.835-2.395-2.378m-4.174 3.926c-1.011.056-2.062-.397-2.114-1.37-.038-.72.513-1.525 2.176-1.62q.285-.018.56-.017c.605 0 1.17.059 1.683.171-.191 2.393-1.315 2.781-2.305 2.836" />
		</svg>
	);
};

IconLogoThreads.iconName = "logo-threads";

export default IconLogoThreads;
