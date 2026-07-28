import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Route } from "./portafolio.contenido-para-redes-CX5xW-PJ.mjs";
import { t as PortfolioCategoryPage } from "./PortfolioCategoryPage-CGGHLsI0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portafolio.contenido-para-redes-B4bfKGG4.js
var import_jsx_runtime = require_jsx_runtime();
function ContenidoParaRedesPage() {
	const { category } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCategoryPage, { category });
}
//#endregion
export { ContenidoParaRedesPage as component };
