import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoBrave = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.179 1c.127 0 .25.056.334.154l1.636 1.89.063-.011c.394-.07.8-.096 1.19-.05.498.06.924.234 1.241.557a65 65 0 0 1 1.27 1.33l.08.089c.147.16.181.347.116.51l-.422 1.056.562 1.638a.46.46 0 0 1 .01.265l-.023.088-.065.252a5179 5179 0 0 0-1.941 7.526c-.476 1.913-.853 2.577-2.073 3.452-1.07.766-3.3 2.304-3.729 2.577l-.146.098-.17.117a3.6 3.6 0 0 1-.517.312A1.4 1.4 0 0 1 12 23c-.197 0-.391-.054-.595-.15a3.6 3.6 0 0 1-.517-.312l-.17-.117-.146-.098c-.428-.273-2.659-1.81-3.728-2.577-1.22-.875-1.598-1.539-2.073-3.452-.088-.352-.45-1.762-1-3.889l-.942-3.637-.065-.252-.023-.088a.46.46 0 0 1 .01-.265l.563-1.638-.422-1.055a.46.46 0 0 1 .087-.48 43 43 0 0 1 .406-.437c.313-.333.642-.676.973-1.013.316-.323.742-.497 1.24-.556a4 4 0 0 1 1.254.06l1.636-1.89A.44.44 0 0 1 8.822 1zm-.202.906H9.023L7.346 3.844a.44.44 0 0 1-.453.137l-.063-.015a4 4 0 0 0-.195-.04 3.2 3.2 0 0 0-.933-.043c-.315.038-.558.137-.714.297a64 64 0 0 0-1.164 1.218l.378.944a.46.46 0 0 1 .008.32l-.573 1.669.053.206.938 3.622c.555 2.148.917 3.557 1.006 3.912.428 1.722.7 2.201 1.723 2.934 1.057.758 3.275 2.288 3.688 2.55.052.033.105.07.173.116l.169.117c.172.119.287.19.394.24a.6.6 0 0 0 .22.066.6.6 0 0 0 .219-.065c.106-.05.222-.122.394-.24l.168-.118c.069-.047.122-.083.174-.116.412-.262 2.631-1.792 3.688-2.55 1.022-.733 1.295-1.212 1.723-2.934.088-.355.45-1.764 1.002-3.896l.709-2.741.232-.897.054-.206-.573-1.668a.46.46 0 0 1 .008-.32l.377-.945a65 65 0 0 0-1.163-1.218c-.157-.16-.4-.259-.715-.297a3.2 3.2 0 0 0-.932.042 4 4 0 0 0-.258.056.44.44 0 0 1-.454-.137zM12 14.58c.121 0 .896.279 1.519.607s1.072.56 1.217.652c.144.092.056.265-.075.36-.132.094-1.896 1.486-2.067 1.64s-.423.407-.594.407-.422-.254-.594-.407a107 107 0 0 0-2.066-1.64c-.131-.095-.22-.268-.075-.36.144-.092.595-.324 1.217-.652s1.397-.607 1.518-.607m.003-9.912c.031 0 .376.01.88.181.53.18 1.104.405 1.369.405s2.229-.382 2.229-.382 2.328 2.867 2.328 3.48c0 .612-.293.774-.588 1.092l-1.745 1.889c-.165.179-.509.45-.307.937.203.488.5 1.108.17 1.737-.333.63-.901 1.05-1.265.98s-1.22-.525-1.534-.733-1.312-1.045-1.312-1.366c0-.32 1.03-.896 1.221-1.026.19-.131 1.059-.637 1.077-.836s.01-.257-.245-.747c-.257-.491-.718-1.146-.641-1.582.076-.435.82-.662 1.352-.866.53-.205 1.553-.59 1.681-.65s.095-.118-.292-.155-1.485-.186-1.98-.046-1.341.355-1.41.468-.128.118-.058.509.432 2.269.467 2.602c.036.334.104.554-.248.636-.353.082-.947.225-1.152.225s-.798-.143-1.15-.225c-.354-.082-.285-.302-.25-.636.035-.333.397-2.21.468-2.602.07-.391.01-.395-.059-.509s-.914-.327-1.41-.468c-.494-.14-1.592.008-1.98.046-.386.037-.42.094-.292.154s1.15.446 1.682.65c.53.205 1.275.432 1.352.867.077.436-.385 1.09-.64 1.582-.257.49-.264.549-.246.747.018.199.886.705 1.076.836.19.13 1.221.706 1.221 1.026s-.997 1.158-1.311 1.366c-.315.208-1.17.664-1.534.733-.364.07-.933-.35-1.264-.98-.332-.629-.034-1.25.168-1.737.203-.487-.141-.758-.306-.937L5.779 9.444c-.294-.318-.587-.48-.587-1.093 0-.612 2.328-3.48 2.328-3.48s1.964.383 2.229.383.839-.225 1.368-.405.883-.181.883-.181z" />
		</svg>
	);
};

IconLogoBrave.iconName = "logo-brave";

export default IconLogoBrave;
