import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconActionFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9 5.25C9 3.45507 10.4551 2 12.25 2H18.75C20.5449 2 22 3.45507 22 5.25V11.75C22 13.5449 20.5449 15 18.75 15H18.25C17.8358 15 17.5035 14.6631 17.4674 14.2504C17.1095 10.1541 13.8459 6.89051 9.74957 6.5326C9.33693 6.49654 9 6.16421 9 5.75V5.25Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22ZM6.28033 11.2197C5.98744 10.9268 5.51256 10.9268 5.21967 11.2197C4.92678 11.5126 4.92678 11.9874 5.21967 12.2803L7.71967 14.7803C8.01256 15.0732 8.48744 15.0732 8.78033 14.7803C9.07322 14.4874 9.07322 14.0126 8.78033 13.7197L6.28033 11.2197Z"
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
					<path d="M10.5 2C9.11929 2 8 3.11929 8 4.5V5.55554C8 5.81697 8.20215 6.0322 8.46076 6.07051C11.2815 6.48842 13.5116 8.71848 13.9295 11.5392C13.9678 11.7978 14.183 12 14.4445 12H15.5C16.8807 12 18 10.8807 18 9.5V4.5C18 3.11929 16.8807 2 15.5 2H10.5Z" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13 12.5C13 15.5376 10.5376 18 7.5 18C4.46243 18 2 15.5376 2 12.5C2 9.46243 4.46243 7 7.5 7C10.5376 7 13 9.46243 13 12.5ZM4.64645 9.64645C4.84171 9.45118 5.15829 9.45118 5.35355 9.64645L7.35355 11.6464C7.54882 11.8417 7.54882 12.1583 7.35355 12.3536C7.15829 12.5488 6.84171 12.5488 6.64645 12.3536L4.64645 10.3536C4.45118 10.1583 4.45118 9.84171 4.64645 9.64645Z"
					/>
				</svg>
			);
	}
};

IconActionFilled.iconName = "action--filled";

export default IconActionFilled;
