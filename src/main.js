import "./css/style.css";
import { mockedPeixarias } from "./mocks/mockedPeixarias";
import { mockedProdutos } from "./mocks/mockedProdutos";
import { fetchPeixarias } from "./js/importPeix";
import { fetchProdutos } from "./js/importProd";

const produtos = fetchProdutos(mockedProdutos);
const peixarias = fetchPeixarias(mockedPeixarias);

const retornoPeix = document.querySelector(".retorno-peixarias");
const retornoProd = document.querySelector(".retorno-produtos");

retornoPeix.innerHTML = peixarias.join("");
retornoProd.innerHTML = produtos.join("");
