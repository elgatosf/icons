import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPhoneVoiceFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21 14.866V19c0 1.105-.898 2.012-1.996 1.889A18 18 0 0 1 3.111 4.996C2.988 3.898 3.895 3 5 3h4.134c.52 0 .987.323 1.17.811l.913 2.435c.172.46.06.977-.286 1.323L9.479 9.021a13 13 0 0 0 5.5 5.5l1.452-1.452a1.25 1.25 0 0 1 1.323-.286l2.435.913c.488.183.81.65.81 1.17ZM15 3a.75.75 0 0 0 0 1.5A4.5 4.5 0 0 1 19.5 9 .75.75 0 0 0 21 9a6 6 0 0 0-6-6" />
			<path d="M14.25 6.75A.75.75 0 0 1 15 6a3 3 0 0 1 3 3 .75.75 0 0 1-1.5 0A1.5 1.5 0 0 0 15 7.5a.75.75 0 0 1-.75-.75" />
		</svg>
	);
};

IconPhoneVoiceFilled.iconName = "phone-voice--filled";

export default IconPhoneVoiceFilled;
