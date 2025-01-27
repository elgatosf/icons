import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCurrencyEuro = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.807 9c.215-.927.549-1.738 1.016-2.402C9.71 5.334 11.152 4.5 13.5 4.5c1.349 0 2.388.277 3.187.732.797.454 1.398 1.11 1.839 1.934a.75.75 0 0 0 1.323-.707C19.29 5.416 18.5 4.54 17.43 3.93 16.362 3.32 15.056 3 13.5 3c-2.76 0-4.694 1.013-5.904 2.735-.659.938-1.08 2.053-1.323 3.265H4.25a.75.75 0 0 0 0 1.5h1.812Q5.999 11.24 6 12q0 .76.062 1.5H4.25a.75.75 0 0 0 0 1.5h2.023c.243 1.212.664 2.327 1.323 3.265C8.806 19.987 10.739 21 13.5 21c1.556 0 2.862-.32 3.93-.93 1.071-.61 1.861-1.486 2.419-2.53a.75.75 0 0 0-1.323-.706c-.44.825-1.042 1.48-1.839 1.934-.8.455-1.838.732-3.187.732-2.348 0-3.79-.834-4.677-2.097-.467-.665-.8-1.476-1.016-2.403h6.443a.75.75 0 0 0 0-1.5H7.568Q7.5 12.78 7.5 12q0-.78.068-1.5h6.682a.75.75 0 0 0 0-1.5z" />
		</svg>
	);
};

IconCurrencyEuro.iconName = "currency-euro";

export default IconCurrencyEuro;
