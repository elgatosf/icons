import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFolderOpenFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2.65862 10.6165L2 13.1412V5C2 3.89543 2.89543 3 4 3H9.075C9.58855 3 10.0824 3.19755 10.4543 3.55172L12.3552 5.36207C12.4481 5.45061 12.5716 5.5 12.7 5.5H20C21.1046 5.5 22 6.39543 22 7.5V8.01595C21.8888 8.0054 21.7759 8 21.6614 8H6.04528C4.45255 8 3.06066 9.07537 2.65862 10.6165Z" />
					<path d="M21.6613 9.5H6.04519C5.13506 9.5 4.3397 10.1145 4.10996 10.9952L2.15344 18.4952C1.82287 19.7623 2.7791 21 4.08867 21H19.7048C20.6149 21 21.4103 20.3855 21.64 19.5048L23.5966 12.0048C23.9271 10.7377 22.9709 9.5 21.6613 9.5Z" />
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
					<path d="M7.67157 3C8.20201 3 8.71071 3.21071 9.08579 3.58579L10.2071 4.70711C10.3946 4.89464 10.649 5 10.9142 5H16C17.1046 5 18 5.89543 18 7V7.04508C17.8303 7.0155 17.655 7 17.4751 7H5.69143C4.40014 7 3.25372 7.82629 2.84538 9.05132L2 11.5875V5C2 3.89543 2.89543 3 4 3H7.67157Z" />
					<path d="M17.4751 8H5.69152C4.83066 8 4.06638 8.55086 3.79415 9.36754L2.12748 14.3675C1.6958 15.6626 2.65974 17 4.02485 17H15.8085C16.6693 17 17.4336 16.4491 17.7058 15.6325L19.3725 10.6325C19.8042 9.33739 18.8403 8 17.4751 8Z" />
				</svg>
			);
	}
};

IconFolderOpenFilled.iconName = "folder-open--filled";

export default IconFolderOpenFilled;
