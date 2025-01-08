import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAppleHome = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 9.546a.35.35 0 0 1 .188.069l.603.462c.48.368 1.077.826 1.121.862a.55.55 0 0 1 .204.43v2.95c0 .237-.12.29-.286.29H10.17c-.167 0-.285-.053-.285-.29v-2.95c0-.156.065-.318.203-.43.044-.036.643-.496 1.123-.864l.599-.46a.35.35 0 0 1 .188-.07m.745 3.798c.07 0 .119-.023.119-.121V11.83a.23.23 0 0 0-.084-.18l-.7-.549a.15.15 0 0 0-.079-.028c-.02 0-.055.01-.079.028-.01.01-.165.13-.326.256l-.374.294a.23.23 0 0 0-.084.179v1.393c0 .098.05.12.118.12z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="m14.43 7.52-.016-.013-2.082-1.644a.55.55 0 0 0-.333-.132.55.55 0 0 0-.333.132l-.862.68L7.3 9.311c-.271.215-.36.434-.36.816v6.891c0 .393.221.576.548.576h9.022c.327 0 .549-.183.549-.576v-6.891c0-.382-.09-.601-.36-.816zm1.38 8.314c0 .334-.185.463-.44.463H8.628c-.254 0-.44-.129-.44-.463V10.58c0-.234 0-.42.256-.625.14-.113 2.278-1.8 3.024-2.389l.253-.2a.44.44 0 0 1 .279-.108.45.45 0 0 1 .279.109c.09.071 3.11 2.453 3.278 2.588.254.204.254.39.254.625z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="m22.365 9.508-2.31-1.838V4.427c0-.24-.094-.308-.264-.308h-1.454c-.197 0-.317.038-.317.308v1.65l-2.614-2.065-2.91-2.298c-.213-.168-.345-.212-.497-.212-.15 0-.283.044-.496.212l-9.87 7.794c-.345.273-.248.666.137.666H3.6v9.93c0 .641.257.898.867.898h15.064c.611 0 .867-.257.867-.898v-9.93h1.83c.386 0 .483-.393.137-.666m-3.175 9.407c0 .459-.236.777-.715.777H5.518c-.479 0-.715-.318-.715-.777V9.317c0-.557.243-.913.522-1.133.159-.125 2.127-1.653 3.811-2.96l2.426-1.884c.162-.128.3-.184.437-.184.133 0 .276.056.438.184l2.487 1.933 3.745 2.911c.278.22.521.576.521 1.133z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoAppleHome.iconName = "logo-apple-home";

export default IconLogoAppleHome;
