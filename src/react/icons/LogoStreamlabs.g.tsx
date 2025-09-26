import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoStreamlabs = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M4.478 11.092v3.09c0 1.081 0 1.622.21 2.036.186.363.482.66.845.843.413.212.954.212 2.036.212h5.022c1.893 0 2.84 0 3.563-.369a3.38 3.38 0 0 0 1.477-1.477c.369-.723.369-1.67.369-3.563v-.772c0-1.894 0-2.84-.369-3.563a3.38 3.38 0 0 0-1.477-1.477c-.723-.369-1.67-.369-3.563-.369H9.887c-1.893 0-2.84 0-3.563.369a3.38 3.38 0 0 0-1.477 1.477c-.369.723-.369 1.67-.369 3.563m5.112-.297a.97.97 0 0 0-.283.683v1.93a.966.966 0 0 0 1.932 0v-1.93a.966.966 0 0 0-1.649-.683m3.581.683a.966.966 0 1 1 1.931 0v1.93a.967.967 0 1 1-1.931 0zM7.824 3.139a.966.966 0 0 0-1.05-1.216q-.546.063-1.07.223a7.24 7.24 0 0 0-4.76 4.762c-.105.339-.175.69-.223 1.07a.966.966 0 1 0 1.916.239q.043-.374.15-.735a5.32 5.32 0 0 1 3.492-3.49q.36-.108.733-.15a.97.97 0 0 0 .812-.703"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoStreamlabs.iconName = "logo-streamlabs";

export default IconLogoStreamlabs;
