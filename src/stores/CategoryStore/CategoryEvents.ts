import { createEvent } from "effector";

import { CategoryValues } from "../../domains/category";
import { RequestError } from "../../domains/requestError";

export const loadCategory = createEvent("loadCategory");
export const loadCreateCategoryDone = createEvent<CategoryValues>("loadCreateCategoryDone");
export const loadCategoryDone = 
    createEvent<CategoryValues[]>("loadCategoryDone");
export const loadCategoryFail = createEvent<RequestError>("loadCategoryFail");