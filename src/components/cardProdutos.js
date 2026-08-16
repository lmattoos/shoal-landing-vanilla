import "../css/style.css";

export function cardProd(produto) {
  return `
        <form class="mostrar-produtos" action="../CONTROLLER/controlador.php" method="post">
            <img src="${produto.foto}">
            <p class="nome-card">${produto.nome}</p>
            <input type="hidden" value="${produto.id}" name="idproduto">
            <div class="card-desc">    
              <p>${produto.categoria}</p>
              <p>R$ ${produto.valor_unidade}</p>
              <p>Peso: ${produto.peso_unidade}</p>
            </div>
            <button type="submit" class="botao-azul" name="ver-produto" value="ver">Comprar</button>
        </form>
  `;
}
