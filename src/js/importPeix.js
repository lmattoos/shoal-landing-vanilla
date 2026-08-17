import { cardPeixaria } from "../components/cardPeixaria";

export function fetchPeixarias(listaPeix) {
  return listaPeix.reverse().map((peixaria) => cardPeixaria(peixaria));
}
