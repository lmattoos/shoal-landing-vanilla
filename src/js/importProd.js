import { cardProd } from "../components/cardProd";

export function fetchProdutos(listaProd) {
  return listaProd.reverse().map((produto) => cardProd(produto));
}
