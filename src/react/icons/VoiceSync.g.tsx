import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVoiceSync = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3.75 3a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zM7.25 8.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM3.75 14a.75.75 0 0 0 0 1.5H9A.75.75 0 0 0 9 14zM3.75 19.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" />
			<path
				fillRule="evenodd"
				d="M16.5 6A2.5 2.5 0 0 0 14 8.5v4a2.5 2.5 0 0 0 5 0v-4A2.5 2.5 0 0 0 16.5 6m1 6.5v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0"
				clipRule="evenodd"
			/>
			<path d="M12.506 12.712a.75.75 0 1 0-1.498.08 5.5 5.5 0 0 0 4.742 5.157V19.5h-1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1v-1.551a5.5 5.5 0 0 0 4.742-5.153.75.75 0 1 0-1.498-.08 4 4 0 0 1-7.988-.004M2.78 6.72a.75.75 0 0 0-1.06 1.06l1.47 1.47-1.47 1.47a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z" />
		</svg>
	);
};

IconVoiceSync.iconName = "voice-sync";

export default IconVoiceSync;
