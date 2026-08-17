import "../css/style.css";
import { mockedPeixarias } from "../mocks/mockedPeixarias";
import { mockedProdutos } from "../mocks/mockedProdutos";
import { fetchProdutos } from "./importPeix";
import { fetchPeixaria } from "./importProd";

const produtos = fetchProdutos(mockedProdutos);
const peixarias = fetchPeixaria(mockedPeixarias);

const retornoPeix = document.querySelector(".retorno-peixarias");
const retornoProd = document.querySelector(".retorno-produtos");

retornoPeix.innerHTML = peixarias.join("");
retornoProd.innerHTML = produtos.join("");
