import PurchaseModel from "../models/purchase";
import{ create,
        getAll,
        getOneById,
        updateOneById,
        deleteOneById
         } from "./globalController";

  export const createController = create(PurchaseModel);
  export const getAllController = getAll(PurchaseModel);
  export const getOneController = getOneById(PurchaseModel);
  export const updateOneController = updateOneById(PurchaseModel);
  export const deleteOneController = deleteOneById(PurchaseModel);
