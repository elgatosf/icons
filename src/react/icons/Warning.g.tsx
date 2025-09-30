import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWarning = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M11.9999 8C12.4142 8 12.7499 8.33579 12.7499 8.75V13.25C12.7499 13.6642 12.4142 14 11.9999 14C11.5857 14 11.2499 13.6642 11.2499 13.25V8.75C11.2499 8.33579 11.5857 8 11.9999 8Z" />
					<path d="M11.9999 17C12.5522 17 12.9999 16.5523 12.9999 16C12.9999 15.4477 12.5522 15 11.9999 15C11.4477 15 10.9999 15.4477 10.9999 16C10.9999 16.5523 11.4477 17 11.9999 17Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13.732 3.94727C12.9622 2.61393 11.0377 2.61393 10.2679 3.94727L2.73199 16.9998C1.96219 18.3332 2.92444 19.9998 4.46404 19.9998H19.5358C21.0754 19.9998 22.0377 18.3332 21.2679 16.9998L13.732 3.94727ZM19.9689 17.7498L12.433 4.69727C12.2405 4.36393 11.7594 4.36393 11.5669 4.69727L4.03103 17.7498C3.83858 18.0832 4.07914 18.4998 4.46404 18.4998H19.5358C19.9207 18.4998 20.1613 18.0832 19.9689 17.7498Z"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					viewBox="0 0 16 16"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M8 5C8.27614 5 8.5 5.22386 8.5 5.5V9C8.5 9.27614 8.27614 9.5 8 9.5C7.72386 9.5 7.5 9.27614 7.5 9V5.5C7.5 5.22386 7.72386 5 8 5Z" />
					<path d="M8 12C8.41421 12 8.75 11.6642 8.75 11.25C8.75 10.8358 8.41421 10.5 8 10.5C7.58579 10.5 7.25 10.8358 7.25 11.25C7.25 11.6642 7.58579 12 8 12Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.86604 1.5C8.48114 0.833333 7.51889 0.833334 7.13399 1.5L0.783139 12.5C0.398239 13.1667 0.879365 14 1.64917 14H14.3509C15.1207 14 15.6018 13.1667 15.2169 12.5L8.86604 1.5ZM1.64916 13L8.00002 2L14.3509 13H1.64916Z"
					/>
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M10 6C10.2761 6 10.5 6.22386 10.5 6.5V11C10.5 11.2761 10.2761 11.5 10 11.5C9.72386 11.5 9.5 11.2761 9.5 11V6.5C9.5 6.22386 9.72386 6 10 6Z" />
					<path d="M10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44771 13 9 13.4477 9 14C9 14.5523 9.44771 15 10 15Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M11.732 3.5C10.9622 2.16667 9.03775 2.16667 8.26795 3.5L2.20577 14C1.43597 15.3333 2.39822 17 3.93782 17H16.0622C17.6018 17 18.564 15.3333 17.7942 14L11.732 3.5ZM16.9282 14.5L10.866 4C10.4811 3.33333 9.51887 3.33333 9.13397 4L3.0718 14.5C2.6869 15.1667 3.16802 16 3.93782 16H16.0622C16.832 16 17.3131 15.1667 16.9282 14.5Z"
					/>
				</svg>
			);
	}
};

IconWarning.iconName = "warning";

export default IconWarning;
