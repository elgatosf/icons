import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSecurityFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M11.0287 2.53977L4.02872 6.42866C3.39379 6.7814 2.99141 7.45398 3.03524 8.17899C3.53104 16.3819 9.12574 20.3732 11.2173 21.5864C11.7069 21.8704 12.2932 21.8704 12.7827 21.5864C14.8743 20.3732 20.469 16.3819 20.9648 8.17899C21.0086 7.45398 20.6062 6.7814 19.9713 6.42866L12.9713 2.53977C12.3673 2.20419 11.6328 2.20419 11.0287 2.53977ZM15.5303 10.2805C15.8232 9.98761 15.8232 9.51273 15.5303 9.21984C15.2374 8.92695 14.7626 8.92695 14.4697 9.21984L11 12.6895L9.53034 11.2198C9.23745 10.9269 8.76257 10.9269 8.46968 11.2198C8.17679 11.5127 8.17679 11.9876 8.46968 12.2805L10.4697 14.2805C10.7626 14.5734 11.2374 14.5734 11.5303 14.2805L15.5303 10.2805Z"
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
						d="M4.00773 5.42412L9.00773 2.56698C9.6226 2.21563 10.3774 2.21563 10.9923 2.56698L15.9923 5.42412C16.6154 5.78021 17.0091 6.4479 16.9638 7.16418C16.5287 14.029 12.2954 16.8583 10.6497 17.7047C10.239 17.916 9.76106 17.916 9.3503 17.7047C7.70462 16.8583 3.47133 14.029 3.03626 7.16418C2.99087 6.44791 3.38458 5.78021 4.00773 5.42412ZM12.3536 8.85352C12.5488 8.65826 12.5488 8.34167 12.3536 8.14641C12.1583 7.95115 11.8417 7.95115 11.6465 8.14641L9.00001 10.7929L7.85356 9.64641C7.6583 9.45115 7.34172 9.45115 7.14646 9.64641C6.95119 9.84167 6.95119 10.1583 7.14646 10.3535L8.64646 11.8535C8.84172 12.0488 9.1583 12.0488 9.35356 11.8535L12.3536 8.85352Z"
					/>
				</svg>
			);
	}
};

IconSecurityFilled.iconName = "security--filled";

export default IconSecurityFilled;
