import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTag = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.8284 3C12.298 3 11.7893 3.21071 11.4142 3.58579L3.41421 11.5858C2.63316 12.3668 2.63317 13.6332 3.41421 14.4142L9.58579 20.5858C10.3668 21.3668 11.6332 21.3668 12.4142 20.5858L20.4142 12.5858C20.7893 12.2107 21 11.702 21 11.1716V5C21 3.89543 20.1046 3 19 3H12.8284ZM19 4.5H12.8284C12.6958 4.5 12.5686 4.55268 12.4749 4.64645L4.47487 12.6464C4.27961 12.8417 4.27961 13.1583 4.47487 13.3536L10.6464 19.5251C10.8417 19.7204 11.1583 19.7204 11.3536 19.5251L19.3536 11.5251C19.4473 11.4314 19.5 11.3042 19.5 11.1716V5C19.5 4.72386 19.2761 4.5 19 4.5Z"
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
					<path d="M14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5C13.4477 5 13 5.44772 13 6C13 6.55228 13.4477 7 14 7Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M18 9.17157C18 9.70201 17.7893 10.2107 17.4142 10.5858L10.4142 17.5858C9.63317 18.3668 8.36684 18.3668 7.58579 17.5858L2.41421 12.4142C1.63317 11.6332 1.63316 10.3668 2.41421 9.58579L9.41421 2.58579C9.78929 2.21071 10.298 2 10.8284 2H16C17.1046 2 18 2.89543 18 4V9.17157ZM16 3H10.8284C10.5632 3 10.3089 3.10536 10.1213 3.29289L3.12132 10.2929C2.7308 10.6834 2.73079 11.3166 3.12132 11.7071L8.29289 16.8787C8.68342 17.2692 9.31658 17.2692 9.70711 16.8787L16.7071 9.87868C16.8946 9.69114 17 9.43679 17 9.17157V4C17 3.44772 16.5523 3 16 3Z"
					/>
				</svg>
			);
	}
};

IconTag.iconName = "tag";

export default IconTag;
