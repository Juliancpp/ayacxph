import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PortfolioCategoryPage } from "./PortfolioCategoryPage-CGGHLsI0.mjs";
import { t as Route } from "./portafolio.marcas-BxwRt6UV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portafolio.marcas-DnhJi3ho.js
var import_jsx_runtime = require_jsx_runtime();
function MarcasPage() {
	const { category } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCategoryPage, { category });
}
//#endregion
export { MarcasPage as component };
