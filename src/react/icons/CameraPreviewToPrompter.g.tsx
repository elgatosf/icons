import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraPreviewToPrompter = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 3a1 1 0 0 1 1-1h2.25a.75.75 0 0 1 0 1.5H3.5v1.75a.75.75 0 0 1-1.5 0z" />
			<path
				fillRule="evenodd"
				d="M11.8 8.927a3 3 0 1 0-4.6 0A4 4 0 0 0 5 12.5a2 2 0 0 0 2 2h2.754a.75.75 0 0 0 0-1.5H7a.5.5 0 0 1-.5-.5A2.5 2.5 0 0 1 9 10h1c.618 0 1.183.224 1.62.595a.75.75 0 1 0 .972-1.142 4 4 0 0 0-.793-.526M11 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12.142 13.962A1.75 1.75 0 0 1 13.88 12h6.242c1.05 0 1.864.92 1.737 1.962l-.427 3.5A1.75 1.75 0 0 1 19.693 19h-5.387a1.75 1.75 0 0 1-1.737-1.538zm1.737-.462a.25.25 0 0 0-.248.28l.427 3.5a.25.25 0 0 0 .248.22h5.388a.25.25 0 0 0 .248-.22l.427-3.5a.25.25 0 0 0-.248-.28z"
				clipRule="evenodd"
			/>
			<path d="M12 21.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M17 3a1 1 0 0 0-1-1h-2.25a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0zM3 17a1 1 0 0 1-1-1v-2.25a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5z" />
		</svg>
	);
};

IconCameraPreviewToPrompter.iconName = "camera-preview-to-prompter";

export default IconCameraPreviewToPrompter;
