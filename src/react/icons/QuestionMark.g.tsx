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
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M7 8.28v.006a.75.75 0 0 1-1.5-.07l.75.034-.75-.034v-.002l.001-.002v-.006l.001-.018a3 3 0 0 1 .025-.263 7.64 7.64 0 0 1 .903-2.792C7.317 3.553 9.031 2 12.175 2c2.15 0 3.742.922 4.785 2.147 1.023 1.203 1.523 2.703 1.523 3.92 0 1.398-.413 2.428-1.062 3.233-.626.776-1.445 1.305-2.156 1.75l-.137.086c-.688.43-1.255.785-1.682 1.246-.416.45-.696 1.005-.696 1.868a.75.75 0 0 1-1.5 0c0-1.262.437-2.175 1.095-2.887.57-.616 1.306-1.074 1.951-1.476l.173-.108c.722-.452 1.336-.864 1.785-1.42.425-.529.73-1.224.73-2.292 0-.85-.367-2.008-1.167-2.948-.78-.916-1.966-1.619-3.642-1.619-2.531 0-3.78 1.197-4.437 2.367A6.1 6.1 0 0 0 7 8.281M12 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
				</svg>
			);
	}
};

IconQuestionMark.iconName = "question-mark";

export default IconQuestionMark;
