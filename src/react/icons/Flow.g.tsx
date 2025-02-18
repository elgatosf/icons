import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFlow = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M13.068 5.518a2 2 0 1 0-.009-1.002c-.996.073-1.71.4-2.265.89-.54.477-.908 1.096-1.235 1.648l-.113.189c-.372.62-.734 1.165-1.3 1.569-.488.35-1.168.618-2.212.676a2 2 0 1 0 0 1.024c1.044.058 1.724.327 2.213.676.565.404.927.948 1.3 1.57l.112.188c.327.552.694 1.17 1.235 1.648.555.49 1.27.817 2.265.89a2 2 0 1 0 .009-1.002c-.763-.068-1.248-.317-1.612-.638-.416-.367-.701-.846-1.043-1.419l-.11-.182c-.377-.63-.827-1.335-1.575-1.869A4 4 0 0 0 8.09 10q.347-.165.64-.374c.747-.534 1.197-1.24 1.575-1.869l.109-.182c.342-.573.627-1.052 1.043-1.419.364-.321.85-.57 1.612-.638M16 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-9-5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFlow.iconName = "flow";

export default IconFlow;
