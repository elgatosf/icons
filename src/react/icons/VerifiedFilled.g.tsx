import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVerifiedFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M13 2.18494C12.3812 1.82768 11.6188 1.82768 11 2.18494L4 6.22639C3.3812 6.58366 3 7.24391 3 7.95844V16.0413C3 16.7559 3.3812 17.4161 4 17.7734L11 21.8148C11.6188 22.1721 12.3812 22.1721 13 21.8148L20 17.7734C20.6188 17.4161 21 16.7559 21 16.0413V7.95844C21 7.24391 20.6188 6.58366 20 6.22639L13 2.18494ZM15.7803 9.21959C16.0732 9.51249 16.0732 9.98736 15.7803 10.2803L11.2803 14.7803C10.9874 15.0731 10.5126 15.0731 10.2197 14.7803L8.21967 12.7803C7.92678 12.4874 7.92678 12.0125 8.21967 11.7196C8.51256 11.4267 8.98744 11.4267 9.28033 11.7196L10.75 13.1893L14.7197 9.21959C15.0126 8.9267 15.4874 8.9267 15.7803 9.21959Z"
					/>
				</svg>
			);
		default:
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
						d="M7.33333 1.45646C7.74587 1.21829 8.25413 1.21829 8.66667 1.45646L13.3333 4.15077C13.7459 4.38894 14 4.82911 14 5.30547V10.6941C14 11.1704 13.7459 11.6106 13.3333 11.8488L8.66667 14.5431C8.25413 14.7812 7.74587 14.7812 7.33333 14.5431L2.66667 11.8488C2.25413 11.6106 2 11.1704 2 10.6941V5.30547C2 4.82911 2.25413 4.38894 2.66667 4.15077L7.33333 1.45646ZM10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355L7.35355 10.3536C7.15829 10.5488 6.84171 10.5488 6.64645 10.3536L4.64645 8.35355C4.45118 8.15829 4.45118 7.84171 4.64645 7.64645C4.84171 7.45118 5.15829 7.45118 5.35355 7.64645L7 9.29289L10.1464 6.14645C10.3417 5.95118 10.6583 5.95118 10.8536 6.14645Z"
					/>
				</svg>
			);
	}
};

IconVerifiedFilled.iconName = "verified--filled";

export default IconVerifiedFilled;
