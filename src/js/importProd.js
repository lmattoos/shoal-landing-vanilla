import { cardProd } from "../components/cardProduto";

export function fetchProdutos(listaProd) {
  return listaProd.reverse().map((produto) => cardProd(produto));
}
