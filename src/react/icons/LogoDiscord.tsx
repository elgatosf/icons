/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoDiscord = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M19.624 5.006a18.1 18.1 0 0 0-4.478-1.39.07.07 0 0 0-.072.035c-.194.344-.408.793-.558 1.145a16.8 16.8 0 0 0-5.03 0c-.15-.36-.371-.801-.565-1.145a.07.07 0 0 0-.072-.034c-1.572.27-3.075.745-4.478 1.389a.06.06 0 0 0-.03.025C1.49 9.292.708 13.448 1.091 17.553q.004.032.029.052a18.2 18.2 0 0 0 5.493 2.776.07.07 0 0 0 .077-.025q.636-.867 1.124-1.828a.07.07 0 0 0-.038-.097 12 12 0 0 1-1.716-.818.07.07 0 0 1-.007-.117 9 9 0 0 0 .34-.267.07.07 0 0 1 .072-.01c3.6 1.644 7.498 1.644 11.056 0a.07.07 0 0 1 .072.01q.166.136.342.267a.07.07 0 0 1-.006.117q-.82.479-1.717.817a.07.07 0 0 0-.038.098c.33.64.708 1.25 1.123 1.827a.07.07 0 0 0 .078.026 18.2 18.2 0 0 0 5.502-2.776.07.07 0 0 0 .028-.051c.459-4.746-.768-8.868-3.253-12.522a.06.06 0 0 0-.028-.026M8.352 15.054c-1.084 0-1.977-.995-1.977-2.218s.875-2.217 1.977-2.217c1.11 0 1.994 1.004 1.977 2.217 0 1.223-.876 2.218-1.977 2.218m7.31 0c-1.084 0-1.977-.995-1.977-2.218s.876-2.217 1.977-2.217c1.11 0 1.994 1.004 1.977 2.217 0 1.223-.867 2.218-1.977 2.218" />
		</svg>
	);
};

export default IconLogoDiscord;
