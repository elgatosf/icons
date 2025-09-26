import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoHtmlColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fill="#E34F26" d="M4.58 15.977 3.38 2.5h13.213L15.39 15.977 9.97 17.5" />
			<path fill="#EF652A" d="m10 16.328 4.365-1.201 1.026-11.543H10" />
			<path
				fill="#EBEBEB"
				d="M10 8.594H7.803l-.147-1.7H10v-1.64H5.84l.03.44.41 4.57H10zm0 4.306h-.03l-1.845-.498-.117-1.318h-1.64l.204 2.607 3.399.938H10z"
			/>
			<path
				fill="#fff"
				d="M9.97 8.594v1.67h2.051l-.205 2.138-1.845.498v1.729l3.398-.938.03-.293.38-4.365.059-.44H9.97m0-3.34v1.641h4.014l.03-.352.088-.85.029-.44z"
			/>
		</svg>
	);
};

IconLogoHtmlColor.iconName = "logo-html--color";

export default IconLogoHtmlColor;
