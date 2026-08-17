import { cardPeix } from "../components/cardPeix";

export function fetchPeixaria(listaPeix) {
  return listaPeix.reverse().map((peixaria) => cardPeix(peixaria));
}
