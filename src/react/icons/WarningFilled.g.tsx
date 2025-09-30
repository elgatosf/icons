import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWarningFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10.268 3.94727C11.0378 2.61393 12.9623 2.61393 13.7321 3.94727L21.268 16.9998C22.0378 18.3332 21.0756 19.9998 19.536 19.9998H4.46417C2.92457 19.9998 1.96231 18.3332 2.73211 16.9998L10.268 3.94727ZM12.0001 7.99988C12.4143 7.99988 12.7501 8.33566 12.7501 8.74988V13.2499C12.7501 13.6641 12.4143 13.9999 12.0001 13.9999C11.5859 13.9999 11.2501 13.6641 11.2501 13.2499V8.74988C11.2501 8.33566 11.5859 7.99988 12.0001 7.99988ZM12 16.9998C12.5523 16.9998 13 16.552 13 15.9998C13 15.4475 12.5523 14.9998 12 14.9998C11.4477 14.9998 11 15.4475 11 15.9998C11 16.552 11.4477 16.9998 12 16.9998Z"
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.86604 1.5C8.48114 0.833333 7.51889 0.833334 7.13399 1.5L0.78314 12.5C0.39824 13.1667 0.879366 14 1.64917 14H14.3509C15.1207 14 15.6018 13.1667 15.2169 12.5L8.86604 1.5ZM8.5 5.5C8.5 5.22386 8.27614 5 8 5C7.72386 5 7.5 5.22386 7.5 5.5V9C7.5 9.27614 7.72386 9.5 8 9.5C8.27614 9.5 8.5 9.27614 8.5 9V5.5ZM8.75 11.25C8.75 11.6642 8.41421 12 8 12C7.58579 12 7.25 11.6642 7.25 11.25C7.25 10.8358 7.58579 10.5 8 10.5C8.41421 10.5 8.75 10.8358 8.75 11.25Z"
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
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.26795 3.5C9.03775 2.16667 10.9622 2.16667 11.732 3.5L17.7942 14C18.564 15.3333 17.6018 17 16.0622 17H3.93782C2.39822 17 1.43597 15.3333 2.20577 14L8.26795 3.5ZM10 6C10.2761 6 10.5 6.22386 10.5 6.5V11C10.5 11.2761 10.2761 11.5 10 11.5C9.72386 11.5 9.5 11.2761 9.5 11V6.5C9.5 6.22386 9.72386 6 10 6ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44771 13 9 13.4477 9 14C9 14.5523 9.44771 15 10 15Z"
					/>
				</svg>
			);
	}
};

IconWarningFilled.iconName = "warning--filled";

export default IconWarningFilled;
