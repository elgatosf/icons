import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPin = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path
						fillRule="evenodd"
						d="M11.22 2.22a.75.75 0 0 1 1.06 0l9.5 9.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22-6.94 6.94 1.22 1.22a.75.75 0 1 1-1.06 1.06L8.5 16.56l-4.22 4.22a.75.75 0 0 1-1.06-1.06l4.22-4.22-4.22-4.22a.75.75 0 1 1 1.06-1.06l1.22 1.22 6.94-6.94-1.22-1.22a.75.75 0 0 1 0-1.06m.28 15.22 6.94-6.94-4.94-4.94-6.94 6.94z"
						clipRule="evenodd"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M8.737 1.57a2 2 0 0 1 2.677.137l2.879 2.879.138.151a2 2 0 0 1 0 2.526l-.138.151A2 2 0 0 1 12.879 8h-.965a.5.5 0 0 0-.277.084l-.077.062-.414.415a.5.5 0 0 0-.146.353v1.965c0 1.782-2.154 2.674-3.414 1.414L6 10.707l-3.147 3.146a.5.5 0 1 1-.707-.707L5.293 10 3.707 8.414C2.447 7.154 3.339 5 5.121 5h1.965a.5.5 0 0 0 .353-.146l.414-.415A.5.5 0 0 0 8 4.086V3.12a2 2 0 0 1 .586-1.414zm1.97.844a1 1 0 0 0-1.338-.068l-.076.068A1 1 0 0 0 9 3.121v.965a1.5 1.5 0 0 1-.44 1.06l-.414.415A1.5 1.5 0 0 1 7.086 6H5.12c-.89 0-1.337 1.077-.707 1.707l3.879 3.879c.63.63 1.707.184 1.707-.707V8.914c0-.398.158-.78.44-1.06l.414-.415.11-.1a1.5 1.5 0 0 1 .95-.339h.965a1 1 0 0 0 .707-.293l.068-.076a1 1 0 0 0 0-1.262l-.068-.076z"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
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
						d="M13.414 2.707C12.154 1.447 10 2.34 10 4.121V5.38a1 1 0 0 1-.293.707l-.621.621A1 1 0 0 1 8.379 7H5.62C3.84 7 2.947 9.154 4.207 10.414l2.336 2.336-3.397 3.397a.5.5 0 1 0 .708.707l3.396-3.397 2.336 2.336c1.26 1.26 3.414.368 3.414-1.414V11.62a1 1 0 0 1 .293-.707l.621-.621a1 1 0 0 1 .707-.293h1.258c1.781 0 2.674-2.154 1.414-3.414zM11 4.121c0-.89 1.077-1.337 1.707-.707l3.879 3.879c.63.63.184 1.707-.707 1.707H14.62a2 2 0 0 0-1.414.586l-.621.621A2 2 0 0 0 12 11.621v2.758c0 .89-1.077 1.337-1.707.707L4.914 9.707C4.284 9.077 4.73 8 5.621 8H8.38a2 2 0 0 0 1.414-.586l.621-.621A2 2 0 0 0 11 5.379z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconPin.iconName = "pin";

export default IconPin;
