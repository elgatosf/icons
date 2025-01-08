import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoSnapchatCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M19.88 10.329c.143.367.152.766.031 1.133a6.5 6.5 0 0 0-1.03-.315.6.6 0 0 0-.01-.434c-.1-.256-.341-.354-.592-.354a1 1 0 0 0-.237.024c-.282.061-.56.17-.794.263-.163.064-.305.12-.414.146a.3.3 0 0 1-.098.015c-.143 0-.192-.064-.182-.237l.004-.067c.036-.539.1-1.51.02-2.422-.113-1.306-.532-1.956-1.035-2.528-.241-.276-1.37-1.464-3.534-1.464S8.717 5.282 8.476 5.558c-.503.572-.922 1.222-1.036 2.528-.076.866-.021 1.785.011 2.337l.01.152c.01.163-.04.237-.183.237a.3.3 0 0 1-.099-.015 4 4 0 0 1-.395-.14c-.238-.095-.522-.206-.812-.269a1.3 1.3 0 0 0-.237-.025c-.251 0-.493.099-.591.355-.143.375.049.675.483.981.078.054.214.142.374.245.384.248.9.582 1.05.721.213.194.194.348.17.539l-.002.023c-.02.168-.498 2.4-3.485 3.844-.172.084-.473.262.054.552.45.248.817.346 1.128.428.258.069.477.127.671.253.195.125.222.33.248.52.021.161.041.313.161.396.142.099.403.109.754.122.456.018 1.064.041 1.76.273.35.115.655.302.976.5.618.38 1.297.797 2.486.806q.344.554.79 1.028a6 6 0 0 1-.772.051c-1.523 0-2.43-.557-3.096-.966-.276-.172-.512-.32-.744-.394-.557-.183-1.04-.202-1.469-.217l-.02-.001c-.466-.02-.907-.038-1.3-.31a1.4 1.4 0 0 1-.355-.364c-.09-.133-.133-.246-.168-.34-.038-.102-.069-.183-.143-.247a.8.8 0 0 0-.241-.108 5.5 5.5 0 0 1-1.208-.483 2 2 0 0 1-.493-.375c-.389-.404-.488-.877-.335-1.296.176-.474.552-.662.945-.86q.105-.052.208-.106c.878-.478 1.568-1.075 2.046-1.774.138-.198.256-.41.355-.626.049-.129.044-.198.015-.262a.4.4 0 0 0-.134-.133c-.152-.098-.305-.197-.409-.266l-.068-.044q-.248-.16-.38-.252c-.37-.26-.631-.537-.794-.847a1.68 1.68 0 0 1-.083-1.4c.246-.646.857-1.05 1.601-1.05a2.1 2.1 0 0 1 .587.079c-.005-.444.005-.912.044-1.375.143-1.617.71-2.47 1.301-3.145.38-.423.824-.783 1.321-1.064C9.87 3.26 10.886 3 11.995 3s2.129.261 3.026.774c.498.28.941.64 1.32 1.064.592.676 1.164 1.523 1.302 3.145.04.463.05.931.044 1.375l.062-.015.061-.015c.158-.034.31-.049.469-.049.744 0 1.355.4 1.601 1.05" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.707-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.707.708l2 2a.5.5 0 0 0 .707 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoSnapchatCheck.iconName = "logo-snapchat-check";

export default IconLogoSnapchatCheck;
