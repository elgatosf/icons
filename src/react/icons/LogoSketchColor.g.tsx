import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoSketchColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				d="M5.8781 3.02493L11.9784 2.38L18.0787 3.02493L22.8015 9.36491L11.9784 21.9683L1.15527 9.36491L5.8781 3.02493Z"
				fill="#FDB300"
			/>
			<path d="M5.53919 9.36499L11.9784 21.9684L1.15527 9.36499H5.53919Z" fill="#EA6C00" />
			<path d="M18.4169 9.36499L11.9776 21.9684L22.8008 9.36499H18.4169Z" fill="#EA6C00" />
			<path d="M5.53906 9.36499H18.4175L11.9783 21.9684L5.53906 9.36499Z" fill="#FDAD00" />
			<path d="M11.9783 2.38L5.87795 3.02492L5.53906 9.3649L11.9783 2.38Z" fill="#FDD231" />
			<path d="M11.9778 2.38L18.0781 3.02492L18.417 9.3649L11.9778 2.38Z" fill="#FDD231" />
			<path d="M22.8018 9.36488L18.0789 3.0249L18.4178 9.36488H22.8018Z" fill="#FDAD00" />
			<path d="M1.15527 9.36488L5.87808 3.0249L5.53919 9.36488H1.15527Z" fill="#FDAD00" />
			<path d="M11.9783 2.38L5.53906 9.3649H18.4175L11.9783 2.38Z" fill="#FEEEB7" />
		</svg>
	);
};

IconLogoSketchColor.iconName = "logo-sketch--color";

export default IconLogoSketchColor;
