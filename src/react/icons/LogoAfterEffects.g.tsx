import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAfterEffects = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.771 12.242h1.957a33 33 0 0 0-.173-.558l-.211-.662-.223-.706a24 24 0 0 1-.204-.681l-.167-.601h-.013q-.104.502-.26.99l-.353 1.14q-.18.582-.353 1.078m8.595-.306h-1.622a1.8 1.8 0 0 1 .167-.549 1.07 1.07 0 0 1 1.022-.582 1.01 1.01 0 0 1 1.003.706q.045.139.05.285v.074a.4.4 0 0 1-.18.06q-.143.006-.44.006" />
			<path
				fillRule="evenodd"
				d="M17.962 3H6.039a3.27 3.27 0 0 0-3.27 3.27v11.46A3.27 3.27 0 0 0 6.04 21h11.923a3.27 3.27 0 0 0 3.27-3.27V6.27A3.27 3.27 0 0 0 17.961 3Zm-7.776 10.77h-2.86l-.583 1.81a.146.146 0 0 1-.148.112h-1.45q-.123 0-.086-.136l2.477-7.104.005-.016c.023-.069.046-.138.07-.226a2.7 2.7 0 0 0 .049-.502.077.077 0 0 1 .086-.086h1.97q.085 0 .099.062l2.81 7.884q.038.124-.073.124h-1.61a.115.115 0 0 1-.124-.086zm4.558-.706h2.44q.142.002.277.014c.098.007.194.014.286.012a6 6 0 0 0 .446-.025q.18-.018.254-.018a.11.11 0 0 0 .111-.1 7 7 0 0 0 .05-.817 3.1 3.1 0 0 0-.149-.941 2.8 2.8 0 0 0-.458-.873 2.1 2.1 0 0 0-.811-.613 2.8 2.8 0 0 0-1.195-.235c-.496 0-.925.064-1.288.241a2.8 2.8 0 0 0-.93.73 3.2 3.2 0 0 0-.575 1.053 3.97 3.97 0 0 0-.031 2.34c.108.37.29.713.533 1.01.26.316.591.566.965.731q.595.273 1.474.273.55.008 1.09-.093a3.2 3.2 0 0 0 .767-.229.2.2 0 0 0 .056-.056.2.2 0 0 0 .019-.092v-1.177q0-.111-.062-.062a3 3 0 0 1-.687.18q-.395.079-.799.087a2.35 2.35 0 0 1-.984-.193 1.27 1.27 0 0 1-.564-.465 1.7 1.7 0 0 1-.235-.682"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoAfterEffects.iconName = "logo-after-effects";

export default IconLogoAfterEffects;
