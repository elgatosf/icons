import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoRaycast = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.00063 14.9137V17.0007L2 12L3.04263 10.9574L7.00063 14.9137ZM9.08755 17.0007H7.00063L12.0013 22.0013L13.0439 20.9586L9.08755 17.0007ZM20.9557 13.0443L22 12L11.9987 1.99878L10.957 3.04558L14.9133 7.0019H12.523L9.76097 4.24573L8.71834 5.28836L10.4352 7.00607H9.23507V14.7687H16.9977V13.5686L18.7154 15.2854L19.7581 14.2436L16.9977 11.4816V9.08967L20.9557 13.0443ZM7.52236 6.48184L6.47556 7.52614L7.5957 8.64544L8.63916 7.60198L7.52236 6.48184ZM16.4035 15.3629L15.36 16.4072L16.4793 17.5274L17.5236 16.4831L16.4035 15.3629ZM5.28291 8.72045L4.23861 9.76642L7.00063 12.5268V10.4382L5.28291 8.72045ZM13.5681 17.0048H11.4795L14.2407 19.7668L15.285 18.7225L13.5681 17.0048Z"
			/>
		</svg>
	);
};

IconLogoRaycast.iconName = "logo-raycast";

export default IconLogoRaycast;
