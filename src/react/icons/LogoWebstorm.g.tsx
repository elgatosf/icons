import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWebstorm = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m22 15.143-2.198-4.087L22 8.771 19.43 2.4 14.743 2l-.729.7-.928-.357-2.915 1.571L7 2.03 2 4.086l2.686 16L15.743 22l.702-3.545.475-.283h1.252v-.747zm-3.828 1.118 2.494-1.487-2.494-4.553zm-3.205 1.91H11.59l1.543 1.094zm-5.106 0 3.225 2.286 2.203-1.313-.338 1.704-9.396-1.627L3.118 4.707l3.8-1.564 3.23 1.92 3.008-1.622.062.024-2.461 2.364H5.829v12.343zM12.2 5.83h5.725l.101-.512-3.779-1.455zm6.206 2.716.887 1.597 1.537-1.597-2.1-5.2-3.622-.31-.064.062 4.126 1.589zm-6.778 7.312H7v.772h4.629zM13.715 11l-.657.8c.6.543 1.371.829 2.143.857 1.085 0 1.857-.571 1.857-1.6v-.028c0-.886-.572-1.258-1.6-1.543-.857-.229-1.086-.343-1.086-.686v-.029c0-.257.229-.457.657-.457s.857.2 1.314.515l.572-.858c-.514-.428-1.143-.657-1.886-.657-1.028 0-1.771.6-1.771 1.543v.029c0 1.028.628 1.314 1.657 1.571.857.229 1.028.372 1.028.657v.029c0 .314-.257.486-.714.486-.571 0-1.057-.258-1.514-.629m-1.658-3.571-.771 2.971-.857-2.971h-.857L8.686 10.4l-.771-2.971H6.743L8.2 12.543h.943L10 9.57l.829 2.972h.971l1.457-5.114z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoWebstorm.iconName = "logo-webstorm";

export default IconLogoWebstorm;
