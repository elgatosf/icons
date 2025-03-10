import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoFirefoxBrowser = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21.28 8.264c-.435-1.047-1.317-2.177-2.009-2.534.564 1.104.89 2.212 1.014 3.039l.002.016c-1.132-2.822-3.052-3.96-4.62-6.438-.08-.125-.159-.25-.236-.383a3 3 0 0 1-.11-.207 1.8 1.8 0 0 1-.156-.414.03.03 0 0 0-.016-.009.03.03 0 0 0-.02 0l-.004.003-.007.004q.001-.004.004-.006c-2.227 1.304-3.15 3.587-3.387 5.04a5.3 5.3 0 0 0-1.984.507.256.256 0 0 0-.127.318.25.25 0 0 0 .341.147 4.8 4.8 0 0 1 1.729-.451l.058-.005a4.9 4.9 0 0 1 1.685.19l.08.026a5 5 0 0 1 .531.198q.104.045.204.096l.093.046a5 5 0 0 1 .318.182 5.1 5.1 0 0 1 1.75 1.812c-.534-.376-1.491-.747-2.414-.586 3.602 1.8 2.635 8-2.356 7.767a4.5 4.5 0 0 1-1.303-.252 6 6 0 0 1-.463-.2c-1.222-.633-2.232-1.827-2.358-3.277 0 0 .462-1.723 3.31-1.723.307 0 1.187-.859 1.204-1.108-.004-.081-1.747-.774-2.426-1.444-.364-.357-.536-.53-.689-.66a3 3 0 0 0-.259-.195 4.64 4.64 0 0 1-.028-2.447c-1.029.468-1.829 1.209-2.41 1.862h-.005c-.397-.503-.369-2.161-.346-2.507-.005-.022-.296.15-.335.177a7.3 7.3 0 0 0-.978.838 9 9 0 0 0-.935 1.122v.001-.001A8.5 8.5 0 0 0 2.278 9.84c-.002.011-.095.42-.163.923q-.018.117-.032.236a7 7 0 0 0-.06.573l-.001.03q-.012.166-.02.333L2 11.987c0 5.53 4.484 10.012 10.014 10.012 4.953 0 9.065-3.595 9.87-8.318q.024-.192.046-.386c.199-1.717-.023-3.522-.65-5.031" />
		</svg>
	);
};

IconLogoFirefoxBrowser.iconName = "logo-firefox-browser";

export default IconLogoFirefoxBrowser;
