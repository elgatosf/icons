import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGlobeAddFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.501 11.25H14.5c-.056-2.612-.4-4.938-.914-6.634-.283-.934-.605-1.634-.928-2.085C12.32 2.06 12.088 2 12 2s-.32.062-.657.53c-.323.452-.645 1.152-.928 2.086-.514 1.696-.858 4.022-.914 6.634M9.501 12.75c.056 2.612.4 4.938.915 6.634.282.934.604 1.634.927 2.085.334.465.565.53.655.531H12c.074 0 .252-.044.507-.34a6.46 6.46 0 0 1-1.51-4.16c0-1.874.796-3.564 2.069-4.75zM22 12.75l-.002.03-.033-.03zM22 11.25h-2.688a6.555 6.555 0 0 0-3.31-.074c-.06-2.698-.417-5.147-.977-6.994-.22-.727-.479-1.382-.776-1.93 4.219.965 7.423 4.582 7.751 8.998M2 11.25h5.997c.055-2.727.414-5.205.979-7.068.22-.727.478-1.382.775-1.93C5.532 3.216 2.328 6.834 2 11.25M7.997 12.75H2c.328 4.416 3.532 8.034 7.751 8.998-.297-.548-.555-1.203-.775-1.93-.565-1.864-.924-4.341-.98-7.068" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconGlobeAddFilled.iconName = "globe-add--filled";

export default IconGlobeAddFilled;
