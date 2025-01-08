import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoPerplexity = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M11.397 6.966 8.484 4.6C6.888 3.292 5.56 2.225 5.542 2.225c-.018 0-.037 1.206-.037 2.69v2.692H3v8.35h2.505l.019 2.747.028 2.746 2.894-2.56c1.596-1.411 2.923-2.562 2.95-2.562.029 0 .047 1.234.047 2.737v2.737h1.114v-2.737c0-1.503.018-2.737.046-2.737s1.355 1.15 2.95 2.561l2.895 2.552.028-2.737.019-2.747H21v-8.35h-2.505l-.019-2.7-.027-2.71-5.846 4.77-.028-2.376-.018-2.366h-1.114L11.425 4.6zM6.71 6.113v1.494h4L8.826 6.206c-.282-.212-.554-.416-.802-.6l-.002-.003c-.663-.495-1.15-.86-1.191-.9-.093-.065-.12.222-.12 1.41m6.644 1.447 1.948-1.456 1.94-1.457.027 1.447c.01.798.01 1.466-.01 1.485-.018.018-.908.018-1.966.01zm-7.85 5.65.353-.324c.185-.185 1.354-1.178 2.598-2.217C9.69 9.639 10.7 8.776 10.7 8.756S9.244 8.72 7.454 8.72H4.206v6.124h1.3zm10.392-2.384c-1.429-1.122-2.598-2.05-2.598-2.069 0-.018 1.466-.037 3.247-.037h3.248v6.124h-1.3v-1.995zm-6.885.752L6.721 13.59v2.626c-.01 2.162.009 2.617.11 2.552.075-.038 1.133-.965 2.367-2.06l2.245-1.986v-2.58c0-1.428-.028-2.588-.065-2.588-.046 0-1.104.91-2.366 2.023m3.545 3.145v-2.589c0-1.623.037-2.579.092-2.56.047.009 1.105.928 2.357 2.022l2.273 1.995v2.626c.01 2.162-.009 2.617-.111 2.552-.074-.038-1.132-.965-2.366-2.06z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoPerplexity.iconName = "logo-perplexity";

export default IconLogoPerplexity;
