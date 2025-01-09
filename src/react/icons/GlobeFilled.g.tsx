import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGlobeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14.492 12.75H9.508c.056 2.612.399 4.938.912 6.634.282.934.603 1.634.925 2.085.333.465.563.53.653.531H12c.088 0 .32-.062.655-.53.322-.452.643-1.152.925-2.086.513-1.696.857-4.022.912-6.634M9.508 11.25h4.984c-.056-2.612-.399-4.938-.912-6.634-.282-.934-.603-1.634-.925-2.085C12.32 2.06 12.088 2 12 2s-.32.062-.655.53c-.322.452-.643 1.152-.925 2.086-.513 1.696-.856 4.022-.912 6.634M15.992 12.75c-.055 2.727-.413 5.204-.976 7.068-.22.727-.477 1.382-.773 1.93 4.207-.965 7.402-4.582 7.73-8.998zM21.972 11.25h-5.98c-.055-2.727-.413-5.205-.976-7.068-.22-.727-.477-1.382-.773-1.93 4.207.965 7.402 4.582 7.73 8.998M8.008 11.25h-5.98c.327-4.416 3.522-8.034 7.73-8.998-.297.548-.554 1.203-.774 1.93-.564 1.863-.92 4.341-.976 7.068M8.008 12.75h-5.98c.327 4.416 3.522 8.034 7.73 8.998-.297-.548-.554-1.203-.774-1.93-.564-1.864-.92-4.341-.976-7.068" />
		</svg>
	);
};

IconGlobeFilled.iconName = "globe--filled";

export default IconGlobeFilled;
