import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconQuestionMark = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M5.056 5.497V5.5A.556.556 0 0 1 3.944 5.5H4.5h-.556v-.02a3 3 0 0 1 .009-.186 6 6 0 0 1 .055-.494 5.7 5.7 0 0 1 .441-1.503c.256-.554.65-1.132 1.257-1.572.613-.443 1.41-.72 2.424-.72 1.352 0 2.353.552 3.004 1.35.638.78.922 1.77.922 2.645 0 .976-.248 1.69-.656 2.244-.395.536-.913.88-1.35 1.16l-.083.054c-.423.271-.751.482-.998.77-.237.277-.413.647-.413 1.272a.556.556 0 0 1-1.112 0c0-.875.262-1.505.681-1.994.36-.42.824-.716 1.216-.966l.109-.07c.438-.282.795-.531 1.056-.886.248-.337.438-.81.438-1.584 0-.655-.216-1.386-.67-1.943-.442-.54-1.126-.941-2.144-.941-.8 0-1.365.214-1.773.51-.414.3-.7.706-.899 1.136-.198.432-.3.87-.352 1.207a5 5 0 0 0-.05.504zM8 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
				</svg>
			);
	}
};

IconQuestionMark.iconName = "question-mark";

export default IconQuestionMark;
