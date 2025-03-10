import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFolderBack = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.78 10.78a.75.75 0 1 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h4.69a.75.75 0 0 0 0-1.5h-4.69z" />
			<path
				fillRule="evenodd"
				d="M2 5a2 2 0 0 1 2-2h4.172a2 2 0 0 1 1.414.586l2.121 2.121a1 1 0 0 0 .707.293H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm18.5 3v10a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4.172a.5.5 0 0 1 .353.146l2.121 2.122a2.5 2.5 0 0 0 1.768.732H20a.5.5 0 0 1 .5.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFolderBack.iconName = "folder-back";

export default IconFolderBack;
