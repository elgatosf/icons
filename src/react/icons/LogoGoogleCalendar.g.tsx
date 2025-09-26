import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleCalendar = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.126 14.868q.726.47 1.61.47.768 0 1.345-.289.576-.288.896-.789t.32-1.13q0-.684-.352-1.131a2 2 0 0 0-.843-.651v-.085q.342-.171.63-.576.298-.405.298-1.035 0-.554-.298-.992a2.03 2.03 0 0 0-.832-.704Q10.377 7.7 9.673 7.7 9 7.7 8.52 7.945q-.48.246-.779.608a2.4 2.4 0 0 0-.426.726l1.269.522q.096-.309.352-.565.255-.256.725-.256.427 0 .683.235a.76.76 0 0 1 .266.597q0 .47-.34.693-.342.224-.78.224h-.575V12h.629q.597 0 .96.266a.86.86 0 0 1 .362.736.88.88 0 0 1-.34.715q-.342.267-.79.267-1.024 0-1.29-1.088l-1.323.522q.277.97 1.002 1.451M14.97 9.695v5.472h1.397V7.87H15.31l-2.144 1.546.704 1.078z" />
			<path
				fillRule="evenodd"
				d="M2 4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v13l-5 5H4c-1.1 0-2-.9-2-2zm14.17 16L20 16.17V4H4v16z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoGoogleCalendar.iconName = "logo-google-calendar";

export default IconLogoGoogleCalendar;
