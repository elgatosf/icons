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
			<path d="M8.127 14.868q.725.47 1.61.47.768 0 1.344-.289.576-.288.896-.789t.32-1.13q0-.684-.352-1.131a2 2 0 0 0-.842-.651v-.085q.34-.171.629-.576.3-.405.299-1.035 0-.554-.299-.992a2.03 2.03 0 0 0-.832-.704Q10.378 7.7 9.673 7.7q-.672 0-1.152.245-.48.246-.778.608a2.4 2.4 0 0 0-.427.726l1.27.522q.095-.309.351-.565.257-.256.726-.256.427 0 .682.235a.76.76 0 0 1 .267.597q0 .47-.341.693-.341.224-.779.224h-.576V12h.63q.597 0 .96.266a.86.86 0 0 1 .362.736.88.88 0 0 1-.341.715q-.342.267-.79.267-1.024 0-1.29-1.088l-1.323.522q.278.97 1.003 1.451M14.97 9.695v5.472h1.397V7.87h-1.056l-2.144 1.546.704 1.078z" />
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
