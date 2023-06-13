import { CategoryService } from "../../services/CategoryService/CategoryService";

import {
    loadCategory,
    loadCategoryDone,
    loadCategoryFail,
} from "../../stores/CategoryStore/CategoryEvents";

import { CategoryValues } from "../../domains/category";
import { RequestError } from "../../domains/requestError";

const execute = async (): Promise<void> => {
    loadCategory();

    return CategoryService.getCategories()
    .then((categories: CategoryValues[]) => {
        loadCategoryDone(categories);
    })
    .catch(({ hasError, message }: RequestError) => {
        loadCategoryFail({ hasError, message });
    });
}

const GetCategoriesUseCase = {
    execute,
}

export default GetCategoriesUseCase;