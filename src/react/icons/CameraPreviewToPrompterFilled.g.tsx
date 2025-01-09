import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraPreviewToPrompterFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3 2a1 1 0 0 0-1 1v2.25a.75.75 0 0 0 1.5 0V3.5h1.75a.75.75 0 0 0 0-1.5zM11.8 8.927a3 3 0 1 0-4.6 0A4 4 0 0 0 5 12.5a2 2 0 0 0 2 2h2.754a.75.75 0 0 0 .75-.751 3.38 3.38 0 0 1 1.924-3.048.75.75 0 0 0 .164-1.248 4 4 0 0 0-.793-.526M13.88 12a1.75 1.75 0 0 0-1.738 1.962l.427 3.5A1.75 1.75 0 0 0 14.306 19h5.388c.884 0 1.63-.66 1.737-1.538l.427-3.5A1.75 1.75 0 0 0 20.12 12zM12 21.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M16 2a1 1 0 0 1 1 1v2.25a.75.75 0 0 1-1.5 0V3.5h-1.75a.75.75 0 0 1 0-1.5zM2 16a1 1 0 0 0 1 1h2.25a.75.75 0 0 0 0-1.5H3.5v-1.75a.75.75 0 0 0-1.5 0z" />
		</svg>
	);
};

IconCameraPreviewToPrompterFilled.iconName = "camera-preview-to-prompter--filled";

export default IconCameraPreviewToPrompterFilled;
