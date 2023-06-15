import { CategoryService } from "../../services/CategoryService/CategoryService";

import {
  loadCategory,
  loadCreateCategoryDone,
  loadCategoryFail,
} from "../../stores/CategoryStore/CategoryEvents";

import { CategoryValues, NewCategoryParams } from "../../domains/category";
import { RequestError } from "../../domains/requestError";

const execute = async ({ description }: NewCategoryParams): Promise<void> => {
  loadCategory();

  return CategoryService.createCategory({
    description,
  })
    .then(({id, description}: CategoryValues) => {
      loadCreateCategoryDone({id, description});
    })
    .catch(({ hasError, message }: RequestError) => {
      loadCategoryFail({ hasError, message });
      throw new Error();
    });
};

const NewCategoryUseCase = {
  execute,
};

export default NewCategoryUseCase;
