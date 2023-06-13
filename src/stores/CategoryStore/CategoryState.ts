import { CategoryValues } from "../../domains/category";

export interface CategoryState {
    isLoading: boolean;
    categories: CategoryValues[];
    hasError: boolean;
    errorMessage: string;
}