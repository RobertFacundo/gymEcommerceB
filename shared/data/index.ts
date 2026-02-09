import { accessoriesProducts } from "./accesories.products";
import { freeWeightProducts } from "./freeWeights.products";
import { machineProducts } from "./machine.products";
import { supplementsProducts } from "./supplements.products";

export const products = [
    ...freeWeightProducts,
    ...machineProducts,
    ...accessoriesProducts,
    ...supplementsProducts
]