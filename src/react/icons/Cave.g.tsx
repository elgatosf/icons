import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCave = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m17.726 10.803-.865-4.322a2 2 0 0 0-1.134-1.429L12.003 3.36a2 2 0 0 0-2.685 1.078L7.9 7.983a.5.5 0 0 1-.11.168l-3.046 3.045a2 2 0 0 0-.551 1.046L2.83 19.5H1.75a.75.75 0 0 0 0 1.5h5.29a2 2 0 0 0 1.932-1.485l.685-2.568a.5.5 0 0 1 .093-.183l1.168-1.46a.5.5 0 0 1 .638-.122l2.168 1.239a.5.5 0 0 1 .223.267l1.051 2.978A2 2 0 0 0 16.884 21h5.366a.75.75 0 0 0 0-1.5h-1.102l-1.777-7.108a2 2 0 0 0-1.084-1.323zM11.38 4.724a.5.5 0 0 0-.67.27L9.29 8.54a2 2 0 0 1-.442.672l-3.045 3.045a.5.5 0 0 0-.138.261L4.356 19.5H7.04a.5.5 0 0 0 .483-.371l.685-2.568a2 2 0 0 1 .37-.735l1.168-1.46a2 2 0 0 1 2.554-.487l2.168 1.24a2 2 0 0 1 .894 1.07l1.05 2.977a.5.5 0 0 0 .472.334h2.718l-1.686-6.745a.5.5 0 0 0-.271-.33l-4.216-1.997a.75.75 0 0 1 .642-1.356l1.965.93-.646-3.227a.5.5 0 0 0-.283-.357z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCave.iconName = "cave";

export default IconCave;
