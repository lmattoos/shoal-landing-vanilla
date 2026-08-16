import '../css/style.css'

export function cardPeixaria(peixaria) {
  return `
        <form class="mostrar-peixarias" action="" method="post">
            <img src="${peixaria.foto}">
            <input type="hidden" value="" name="${peixaria.id}">
            <p class="nome-card">${peixaria.nome}</p>
            <div class="card-desc">
              <p>CEP: ${peixaria.cep}</p>
              <p>E-mail: ${peixaria.email}</p>
              <p>Telefone: ${peixaria.telefone}</p>
            </div>
            <button type="submit" class="botao-azul" name="ver-peixaria" value="ver">Visitar</button>
        </form>
  `;
}