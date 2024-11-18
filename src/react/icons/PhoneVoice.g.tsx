import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPhoneVoice = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m14.979 14.521 1.452-1.452a1.25 1.25 0 0 1 1.323-.286l2.435.913c.488.183.81.65.81 1.17V19c0 1.105-.897 2.012-1.995 1.889A18 18 0 0 1 3.111 4.996C2.988 3.898 3.895 3 5 3h4.134c.52 0 .987.323 1.17.811l.913 2.435c.172.46.06.977-.286 1.323L9.479 9.021a13 13 0 0 0 5.5 5.5m1.06 1.061a1.5 1.5 0 0 1-1.755.269 14.5 14.5 0 0 1-6.135-6.135 1.5 1.5 0 0 1 .269-1.755l1.338-1.339L8.96 4.5H5a.45.45 0 0 0-.326.129.23.23 0 0 0-.072.2A16.5 16.5 0 0 0 19.17 19.4a.23.23 0 0 0 .201-.073A.45.45 0 0 0 19.5 19v-3.96l-2.122-.796z"
				clipRule="evenodd"
			/>
			<path d="M14.25 3.75A.75.75 0 0 1 15 3a6 6 0 0 1 6 6 .75.75 0 1 1-1.5 0A4.5 4.5 0 0 0 15 4.5a.75.75 0 0 1-.75-.75" />
			<path d="M15 6a.75.75 0 0 0 0 1.5A1.5 1.5 0 0 1 16.5 9 .75.75 0 0 0 18 9a3 3 0 0 0-3-3" />
		</svg>
	);
};

IconPhoneVoice.iconName = "phone-voice";

export default IconPhoneVoice;
