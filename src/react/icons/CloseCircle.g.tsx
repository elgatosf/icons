import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCloseCircle = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
			<path d="M9.31795 8.25736C9.02506 7.96447 8.55018 7.96447 8.25729 8.25736C7.9644 8.55025 7.9644 9.02513 8.25729 9.31802L10.9393 12L8.25729 14.682C7.9644 14.9749 7.9644 15.4497 8.25729 15.7426C8.55018 16.0355 9.02506 16.0355 9.31795 15.7426L11.9999 13.0607L14.6819 15.7426C14.9748 16.0355 15.4497 16.0355 15.7426 15.7426C16.0355 15.4497 16.0355 14.9749 15.7426 14.682L13.0606 12L15.7426 9.31802C16.0355 9.02513 16.0355 8.55025 15.7426 8.25736C15.4497 7.96447 14.9748 7.96447 14.6819 8.25736L11.9999 10.9393L9.31795 8.25736Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
			/>
		</svg>
	);
};

IconCloseCircle.iconName = "close-circle";

export default IconCloseCircle;
