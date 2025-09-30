import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCompassFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M15.2425 8.75771L10.6493 10.649L13.3512 13.3509L15.2425 8.75771Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM6.91403 15.7808C6.57559 16.6027 7.39753 17.4246 8.21946 17.0862L14.115 14.6586C14.3615 14.5571 14.5573 14.3613 14.6589 14.1147L17.0864 8.21922C17.4249 7.39728 16.6029 6.57535 15.781 6.91379L9.88552 9.34134C9.63894 9.44288 9.44312 9.63869 9.34159 9.88527L6.91403 15.7808Z"
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
					<path d="M11.1154 11.1154L8.88467 8.88467L12.6025 7.39754L11.1154 11.1154Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM13.9643 6.68571C14.0385 6.5 13.995 6.28789 13.8536 6.14646C13.7121 6.00503 13.5 5.96149 13.3143 6.03578L8.31432 8.03578C8.18727 8.0866 8.0866 8.18727 8.03578 8.31432L6.03578 13.3143C5.96149 13.5 6.00503 13.7121 6.14646 13.8536C6.28789 13.995 6.5 14.0385 6.68571 13.9643L11.6857 11.9643C11.8128 11.9134 11.9134 11.8128 11.9643 11.6857L13.9643 6.68571Z"
					/>
				</svg>
			);
	}
};

IconCompassFilled.iconName = "compass--filled";

export default IconCompassFilled;
