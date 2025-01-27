import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconBookFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9.5 4.987a7 7 0 0 0-.283-.171C8.51 4.412 7.487 4 6.25 4s-2.26.412-2.967.816a6.5 6.5 0 0 0-1.05.749l-.06.056-.018.017-.005.005-.002.002-.002.001A.5.5 0 0 0 2 6v10a.5.5 0 0 0 .853.354l.01-.009.041-.038q.058-.054.178-.15c.16-.128.396-.3.697-.473C4.385 15.338 5.237 15 6.25 15s1.865.338 2.47.684a5.5 5.5 0 0 1 .78.54zM10.5 16.223l.082-.067c.16-.127.395-.3.697-.472.606-.346 1.458-.684 2.471-.684s1.865.338 2.47.684a5.5 5.5 0 0 1 .876.623l.042.038.008.009h.001A.5.5 0 0 0 18 16V6a.5.5 0 0 0-.147-.354l-.003-.003-.005-.005-.018-.017-.06-.057a6.47 6.47 0 0 0-1.05-.749C16.01 4.413 14.987 4 13.75 4s-2.26.412-2.967.816q-.15.086-.283.171z" />
				</svg>
			);
	}
};

IconBookFilled.iconName = "book--filled";

export default IconBookFilled;
