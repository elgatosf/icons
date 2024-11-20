import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPackageFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.971 2.54a2 2 0 0 0-1.942 0L8.805 3.775l8.08 4.617 3.277-1.843a2 2 0 0 0-.19-.12l-7-3.89Zm7.996 5.277-3.997 2.248-.045.078-.046-.027-4.129 2.323v9.127q.114-.045.221-.105l7-3.89A2 2 0 0 0 21 15.824V8.177q0-.184-.033-.36M11.25 21.566V12.44L3.033 7.817a2 2 0 0 0-.033.36v7.646a2 2 0 0 0 1.029 1.749l7 3.889q.108.06.221.105M3.838 6.549 12 11.139l3.361-1.89-8.089-4.622L4.03 6.429q-.1.055-.19.12Z" />
		</svg>
	);
};

IconPackageFilled.iconName = "package--filled";

export default IconPackageFilled;
