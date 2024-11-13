/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
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
			<path d="M14.492 12.75H9.508c.056 2.612.399 4.938.912 6.634.282.934.603 1.634.925 2.085.333.465.563.53.653.531H12c.088 0 .32-.062.655-.53.322-.452.643-1.152.925-2.086.513-1.696.857-4.022.912-6.634m-4.984-1.5h4.984c-.056-2.612-.399-4.938-.912-6.634-.282-.934-.603-1.634-.925-2.085C12.32 2.06 12.088 2 12 2s-.32.062-.655.53c-.322.452-.643 1.152-.925 2.086-.513 1.696-.856 4.022-.912 6.634m6.484 1.5c-.055 2.727-.413 5.204-.976 7.068-.22.727-.477 1.382-.773 1.93 4.207-.965 7.402-4.582 7.73-8.998h-5.98Zm5.98-1.5h-5.98c-.055-2.727-.413-5.205-.976-7.068-.22-.727-.477-1.382-.773-1.93 4.207.965 7.402 4.582 7.73 8.998Zm-13.964 0h-5.98c.327-4.416 3.522-8.034 7.73-8.998-.297.548-.554 1.203-.774 1.93-.564 1.863-.92 4.341-.976 7.068m0 1.5h-5.98c.327 4.416 3.522 8.034 7.73 8.998-.297-.548-.554-1.203-.774-1.93-.564-1.864-.92-4.341-.976-7.068" />
		</svg>
	);
};

export default IconGlobeFilled;
