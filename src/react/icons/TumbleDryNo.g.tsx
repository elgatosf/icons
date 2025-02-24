import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTumbleDryNo = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.854 2.146a.5.5 0 1 0-.708.708l1.13 1.13A2 2 0 0 0 3 5v9.879l1-1V5q0-.135.034-.259l2.095 2.095A4.98 4.98 0 0 0 5 10c0 .835.204 1.621.566 2.313l.75-.75A4 4 0 0 1 6 10c0-.924.314-1.775.84-2.453L9.293 10l-7.147 7.146a.5.5 0 0 0 .708.708l1.13-1.13c.298.175.645.276 1.016.276h10c.37 0 .718-.101 1.016-.277l1.13 1.13a.5.5 0 0 0 .708-.707L10.707 10l2.453-2.453c.527.678.84 1.529.84 2.453 0 .554-.113 1.082-.316 1.562l.75.75A5 5 0 0 0 15 10a4.98 4.98 0 0 0-1.129-3.164l2.095-2.095Q16 4.866 16 5v8.879l1 1V5c0-.37-.101-.718-.277-1.016l1.13-1.13a.5.5 0 0 0-.707-.708L10 9.293zM10 10.707 7.547 13.16c.678.527 1.529.84 2.453.84s1.775-.313 2.453-.84zm3.164 3.164A4.98 4.98 0 0 1 10 15a4.98 4.98 0 0 1-3.164-1.129L4.74 15.967Q4.866 16 5 16h10a1 1 0 0 0 .259-.034z"
				clipRule="evenodd"
			/>
			<path d="M14.879 3H5.12l1 1h7.758zM12.313 5.566A5 5 0 0 0 10 5c-.834 0-1.621.204-2.313.566l.75.75A4 4 0 0 1 10 6c.554 0 1.082.113 1.562.317z" />
		</svg>
	);
};

IconTumbleDryNo.iconName = "tumble-dry-no";

export default IconTumbleDryNo;
