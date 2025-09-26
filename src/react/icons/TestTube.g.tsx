import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTestTube = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
						d="M13.22 2.22a.75.75 0 0 1 1.003-.052l.057.052 7.5 7.5.052.056a.75.75 0 0 1-1.056 1.056l-.056-.052-.72-.72-9.685 9.685a4.286 4.286 0 0 1-5.9.152l-.16-.152a4.286 4.286 0 0 1 0-6.06L13.939 4l-.72-.72-.051-.057a.75.75 0 0 1 .052-1.003m-.83 12.462a1.9 1.9 0 0 0-1.58 0 3.4 3.4 0 0 1-2.82 0 1.9 1.9 0 0 0-1.389-.074l-.191.074-1.582.72a2.79 2.79 0 0 0 .487 3.282l.212.192a2.786 2.786 0 0 0 3.728-.192l3.783-3.783a3.4 3.4 0 0 1-.649-.219M13.56 6.5l1.22 1.22.052.057a.75.75 0 0 1-1.056 1.056l-.056-.052-1.221-1.22-1.44 1.439 1.221 1.22.052.057a.75.75 0 0 1-1.056 1.056l-.056-.052-1.221-1.22-2.956 2.956a3.4 3.4 0 0 1 1.567.301 1.9 1.9 0 0 0 1.58 0 3.4 3.4 0 0 1 2.82 0l.192.074c.453.15.949.126 1.388-.074l.058-.027L18.94 9 15 5.06z"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
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
						d="M11.146 2.146a.5.5 0 0 1 .63-.064l.078.064 6 6 .064.078a.5.5 0 0 1-.693.694l-.079-.065-.646-.646-7.818 7.818a3.329 3.329 0 0 1-4.707-4.707L11.793 3.5l-.647-.647-.064-.078a.5.5 0 0 1 .064-.629m-4.87 9.801a1.74 1.74 0 0 0-1.366-.08l-.124.053-.104.105a2.329 2.329 0 0 0 3.293 3.293l3.032-3.033a2.6 2.6 0 0 1-.64-.215l-.152-.08a1.57 1.57 0 0 0-1.488-.045l-.04.02a2.66 2.66 0 0 1-2.374 0zm4.93-6.448 1.148 1.147.064.078a.5.5 0 0 1-.693.694l-.079-.065L10.5 6.206 9.206 7.499l1.148 1.147.064.078a.5.5 0 0 1-.693.694l-.079-.065L8.5 8.206l-2.588 2.589c.28.042.554.128.813.258l.037.018a1.65 1.65 0 0 0 1.478 0l.041-.02a2.57 2.57 0 0 1 2.435.073l.186.092c.373.153.79.155 1.165.01L15.793 7.5 12.5 4.207z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconTestTube.iconName = "test-tube";

export default IconTestTube;
