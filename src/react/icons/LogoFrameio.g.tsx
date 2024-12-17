import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoFrameio = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M5.61 11.997c0 2.657-.494 5.212-1.412 7.54-.044.12-.075.254-.075.388 0 .551.432 1.068 1.038 1.075.383 0 .757-.24.904-.61a23.14 23.14 0 0 0 0-16.78A.98.98 0 0 0 5.16 3c-.606 0-1.038.52-1.038 1.068 0 .134.03.268.075.387a20.6 20.6 0 0 1 1.411 7.542Zm4.065-.001a25.4 25.4 0 0 1-.637 5.658l-.002.01a1 1 0 0 0-.022.226c0 .565.445 1.069 1.037 1.069a.98.98 0 0 0 .949-.757c.472-1.99.726-4.069.726-6.206a26.5 26.5 0 0 0-.733-6.205.98.98 0 0 0-.949-.757c-.592 0-1.037.49-1.037 1.055 0 .067.015.15.028.222l.003.014c.414 1.826.636 3.726.636 5.671Zm4.085.001c0-.935-.044-1.843-.133-2.747-.059-.623.414-1.157 1.024-1.157.52 0 .948.387.993.89.103.993.147 1.99.147 3.014 0 1.01-.044 2.02-.147 3.014a.99.99 0 0 1-.993.89c-.61 0-1.086-.548-1.024-1.158.089-.904.133-1.825.133-2.746m5.819.712a1.013 1.013 0 0 0 0-1.438l-.593-.58a.67.67 0 0 0-.476-.19.68.68 0 0 0-.681.68v1.634c0 .415.339.682.681.682a.67.67 0 0 0 .476-.192z" />
		</svg>
	);
};

IconLogoFrameio.iconName = "logo-frameio";

export default IconLogoFrameio;
