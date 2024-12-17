import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPrompter = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M17 15h1.284a2 2 0 0 0 1.977-1.696l1.384-9A2 2 0 0 0 19.67 2H4.33a2 2 0 0 0-1.977 2.304l1.385 9A2 2 0 0 0 5.716 15H7v2H5.132a2 2 0 0 0-1.715.971l-.6 1c-.8 1.333.16 3.029 1.715 3.029h14.936c1.554 0 2.515-1.696 1.715-3.029l-.6-1A2 2 0 0 0 18.868 17H17zm2.669-11.5H4.33a.5.5 0 0 0-.494.576L5 11.636V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4.635l1.163-7.559a.5.5 0 0 0-.494-.576M15.5 15h-7v2h7zm1.5-1.5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5zm-12.468 7h14.936a.5.5 0 0 0 .428-.757l-.6-1a.5.5 0 0 0-.428-.243H5.132a.5.5 0 0 0-.428.243l-.6 1a.5.5 0 0 0 .428.757"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPrompter.iconName = "prompter";

export default IconPrompter;
