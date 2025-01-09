import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDiscount = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
					<path d="M12.854 7.854a.5.5 0 1 0-.708-.708l-5 5a.5.5 0 0 0 .708.708zM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
					<path
						fillRule="evenodd"
						d="M4 6.686a2 2 0 0 1-.586 1.415l-.485.485a2 2 0 0 0 0 2.828l.485.486A2 2 0 0 1 4 13.314V14a2 2 0 0 0 2 2h.686a2 2 0 0 1 1.415.586l.485.485a2 2 0 0 0 2.828 0l.486-.485A2 2 0 0 1 13.314 16H14a2 2 0 0 0 2-2v-.686a2 2 0 0 1 .586-1.414l.485-.486a2 2 0 0 0 0-2.828l-.485-.486A2 2 0 0 1 16 6.686V6a2 2 0 0 0-2-2h-.686a2 2 0 0 1-1.415-.586l-.485-.485a2 2 0 0 0-2.828 0l-.486.485A2 2 0 0 1 6.687 4H6a2 2 0 0 0-2 2zm-.364 2.607.485-.485A3 3 0 0 0 5 6.686V6a1 1 0 0 1 1-1h.686a3 3 0 0 0 2.122-.879l.485-.485a1 1 0 0 1 1.414 0l.485.485A3 3 0 0 0 13.314 5H14a1 1 0 0 1 1 1v.686a3 3 0 0 0 .879 2.122l.485.485a1 1 0 0 1 0 1.414l-.485.485a3 3 0 0 0-.88 2.122V14a1 1 0 0 1-1 1h-.685a3 3 0 0 0-2.122.879l-.485.485a1 1 0 0 1-1.414 0l-.485-.485A3 3 0 0 0 6.686 15H6a1 1 0 0 1-1-1v-.686a3 3 0 0 0-.879-2.122l-.485-.485a1 1 0 0 1 0-1.414"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconDiscount.iconName = "discount";

export default IconDiscount;
