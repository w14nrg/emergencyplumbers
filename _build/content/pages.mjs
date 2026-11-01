import { corePages } from "./core.mjs";
import { servicePages } from "./services.mjs";
import { areaPages, areasHub } from "./areas.mjs";
import { infoPages } from "./info.mjs";

export const pages = [...corePages, ...servicePages, areasHub, ...areaPages, ...infoPages];
