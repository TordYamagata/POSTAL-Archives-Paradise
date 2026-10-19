/* =========================
   DADOS DOS JOGOS
   Para adicionar fotos, altere a propriedade image.
========================= */

const games = [
  {
    title: "POSTAL",
    year: 1997,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWmG0BLAtFCzby0Xj45x9kZWtWmR_tPfP9faBdPcGt2c8772R9KyPLKA&s=10",
    category: "principal",
    number: "01",
    edition: "ORIGINAL",
    tags: ["Isométrico", "Clássico"],
    description: "O jogo original que iniciou a franquia, com perspectiva isométrica e atmosfera sombria.",
    note: "A experiência original é diferente dos jogos posteriores tanto na perspectiva quanto no tom."
  },
  {
    title: "POSTAL: Special Delivery",
    year: 1998,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCPpYfsld6hN7f7gewI3UrtdOpQRYERnqKZVBDUlvsnJOzk2rYPajA04F&s=10",
    category: "expansao",
    number: "SD",
    edition: "EXPANSÃO",
    tags: ["Expansão", "Clássico"],
    description: "Expansão associada ao POSTAL original, com conteúdo adicional.",
    note: "É uma expansão, não uma sequência numerada independente."
  },
  {
    title: "Super POSTAL",
    year: 2000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJknx870tRH5f6tbcTq7AtxW4cP-Vu0BUw3eUOnlLI4R7BdRxTzsziYhb&s=10",
    category: "spin-off",
    number: "SP",
    edition: "EDIÇÃO ALTERNATIVA",
    tags: ["Alternativo", "Clássico"],
    description: "Edição japonesa associada ao jogo original.",
    note: "O conteúdo pode variar conforme a edição."
  },
  {
    title: "POSTAL Plus",
    year: 2001,
    image: "https://cdn.mobygames.com/covers/4006851-postal-plus-windows-front-cover.jpg",
    category: "compilacao",
    number: "+",
    edition: "EDIÇÃO AMPLIADA",
    tags: ["Pacote", "Original"],
    description: "Edição ampliada do POSTAL original.",
    note: "Não é uma sequência numerada."
  },
  {
    title: "POSTAL 2",
    year: 2003,
    image: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Postal_2_cover.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
    category: "principal",
    number: "2",
    edition: "SEQUÊNCIA",
    tags: ["FPS", "Mundo aberto"],
    description: "O Postal Dude precisa cumprir tarefas ao longo de uma semana na cidade de Paradise.",
    note: "A série adota a primeira pessoa e um mundo mais aberto."
  },
  {
    title: "POSTAL 2: Share the Pain",
    year: 2003,
    image: "https://static.wikia.nocookie.net/postal/images/0/0b/STP.jpg/revision/latest?cb=20110814144339",
    category: "expansao",
    number: "PVP",
    edition: "MULTIJOGADOR",
    tags: ["Multiplayer", "Edição"],
    description: "Edição de POSTAL 2 associada ao modo multijogador.",
    note: "É frequentemente catalogada como edição ou expansão."
  },
  {
    title: "POSTAL 2: Apocalypse Weekend",
    year: 2005,
    image: "https://assets-prd.ignimgs.com/2023/07/16/postalweekend-1689528804523.jpg",
    category: "expansao",
    number: "AW",
    edition: "EXPANSÃO",
    tags: ["Campanha", "Ação"],
    description: "Expansão narrativa que continua a aventura do Dude.",
    note: "Amplia a campanha de POSTAL 2."
  },
  {
    title: "POSTAL Fudge Pack",
    year: 2006,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKIcEa_nA_hdBYJ0TbDJX5xo28Qy_w2Rz-Tl8XZuNjQ&s=10",
    category: "compilacao",
    number: "FP",
    edition: "COLEÇÃO",
    tags: ["Coleção", "Pacote"],
    description: "Coleção de jogos e conteúdos relacionados à franquia.",
    note: "O conteúdo exato depende da edição."
  },
  {
    title: "POSTAL III",
    year: 2011,
    image: "https://upload.wikimedia.org/wikipedia/pt/b/be/Postal_III_cover_art.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
    category: "principal",
    number: "3",
    edition: "TERCEIRA PESSOA",
    tags: ["Ação", "Terceira pessoa"],
    description: "Uma entrada em terceira pessoa desenvolvida com participação da Trashmasters.",
    note: "Possui uma apresentação e interpretação diferentes do Dude."
  },
  {
    title: "POSTAL 2: Paradise Lost",
    year: 2015,
    image: "https://imgproxy.eneba.games/a1XsnCgonV2JBRMNEwV58fPOUE9heMy7WtBMF9eFs8M/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9Y/UWYyT2pQN1NBcG9N/dHVfQXNOVm1jWjI1/Y1c0OFdWTUpHLXBl/clhUbUxZLmpwZWc",
    category: "expansao",
    number: "PL",
    edition: "EXPANSÃO",
    tags: ["Paradise", "Campanha"],
    description: "O Dude retorna a Paradise e encontra a cidade transformada.",
    note: "Expansão narrativa associada a POSTAL 2."
  },
  {
    title: "POSTAL Redux",
    year: 2016,
    image: "https://www.zoom-platform.com/storage/2647/conversions/Postal_Redux-game-card.jpg",
    category: "remake",
    number: "R",
    edition: "REMAKE",
    tags: ["Isométrico", "Remake"],
    description: "Remake do POSTAL original com gráficos atualizados.",
    note: "É uma reinterpretação do primeiro jogo."
  },
  {
    title: "POSTAL 20th Anniversary Edition",
    year: 2017,
    image: "https://runningwithscissors.com/wp-content/uploads/2017/11/PXX_ad.png",
    category: "compilacao",
    number: "20",
    edition: "EDIÇÃO ESPECIAL",
    tags: ["Colecionador", "Aniversário"],
    description: "Edição comemorativa relacionada ao aniversário da franquia.",
    note: "É uma edição de coleção, não um novo jogo principal."
  },
  {
    title: "POSTAL 4: No Regerts",
    year: 2022,
    image: "https://imgproxy.eneba.games/_hR0fpyTJPyQ8ZsAcuDS0Rtbggi98hQgVl57DIdhsWs/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9V/R3ZPWEIxOHFKM1Bw/ZEpZNllSRHQwV0Zv/dDBPRzFRYU5jTmxX/ekg0bmpRLmpwZWc",
    category: "principal",
    number: "4",
    edition: "SEQUÊNCIA",
    tags: ["FPS", "Mundo aberto"],
    description: "O Dude encara novas tarefas e situações absurdas em uma aventura de mundo aberto.",
    note: "O acesso antecipado começou em 2019 e o lançamento completo ocorreu em 2022."
  },
  {
    title: "POSTAL: Brain Damaged",
    year: 2022,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgCCDuRuGEBkMx562EKLS5M7ErHj1n8XuXKQBM9Rg39k35k_wPH2fFcJj&s=10",
    category: "spin-off",
    number: "BD",
    edition: "SPIN-OFF",
    tags: ["FPS", "Retrô"],
    description: "Ação acelerada com estética retrô e cenários psicodélicos.",
    note: "É um derivado com estilo visual e jogabilidade próprios."
  },
  {
    title: "POOSTALL Royale",
    year: 2023,
    image: "https://static.wikia.nocookie.net/postal/images/d/da/POOSTALL_Royale_Promo.png/revision/latest/scale-to-width-down/250?cb=20230514143553",
    category: "spin-off",
    number: "PR",
    edition: "DERIVADO",
    tags: ["Spin-off", "Paródia"],
    description: "Derivado humorístico associado à franquia.",
    note: "Não é um capítulo principal tradicional."
  },
  {
    title: "POSTAL: Brain Damaged — These Sunny Daze",
    year: 2025,
    image: "https://nu.vgmtreasurechest.com/soundtracks/postal-brain-damaged-these-sunny-daze-ps4-ps5-switch-windows-gamerip-2025/cover.jpg",
    category: "expansao",
    number: "SD",
    edition: "CONTEÚDO ADICIONAL",
    tags: ["Expansão", "Brain Damaged"],
    description: "Conteúdo adicional associado ao universo de Brain Damaged.",
    note: "Confira a loja oficial para confirmar a disponibilidade na sua plataforma."
  },
  {
    title: "POSTAL 2 Redux",
    year: null,
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202608/2016/e25d0d9b66705a9f4f67d68c59c7752a8890d003e404788b.png",
    category: "remake",
    number: "2R",
    edition: "PROJETO ANUNCIADO",
    tags: ["Remake", "Projeto"],
    description: "Projeto anunciado relacionado a uma nova versão de POSTAL 2.",
    note: "A situação do projeto pode mudar. Confirme o estado atual nos canais oficiais."
  },
  {
    title: "POSTAL: Bullet Paradise",
    year: null,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxcywTumPXugJhJPc26Z3gLedBsC3evArqy3gIJUMNxbV9A44NfXkgJc&s=10",
    category: "spin-off",
    number: "BP",
    edition: "CANCELADO",
    tags: ["Histórico", "Cancelado"],
    description: "Projeto derivado anunciado e posteriormente cancelado.",
    note: "Incluído como registro histórico, não como jogo disponível."
  }
];

/* =========================
   DADOS DAS VERSÕES DO DUDE
   Troque image pelos seus arquivos.
========================= */

const dudes = [
  {
    name: "Classic Dude",
    image: "https://static1.personalitydatabase.net/2/pdb-images-prod/1e2802c2/profile_images/ce6732985e114850b476a804b377286e.png",
    id: "01 / P",
    game: "POSTAL // 1997",
    description: "A encarnação associada ao jogo original, com atmosfera sombria e apresentação isométrica."
  },
  {
    name: "Postal 2 Dude",
    image: "https://static.wikia.nocookie.net/postal-fanon/images/2/29/Dude2003.png/revision/latest/scale-to-width/360?cb=20221104173539",
    id: "02 / P2",
    game: "POSTAL 2 // 2003",
    description: "A versão reconhecida pelos óculos escuros, sobretudo e humor sarcástico."
  },
  {
    name: "Postal III Dude",
    image: "https://upload.wikimedia.org/wikipedia/tr/2/28/PostalDude.jpg?utm_source=tr.wikipedia.org&utm_campaign=index&utm_content=original",
    id: "03 / P3",
    game: "POSTAL III // 2011",
    description: "Uma interpretação em terceira pessoa com apresentação visual diferente."
  },
  {
    name: "Redux Dude",
    image: "https://static.wikia.nocookie.net/postal/images/1/10/Dude_sr_predux.jpg/revision/latest/scale-to-width/360?cb=20240602191347",
    id: "04 / R",
    game: "POSTAL REDUX // 2016",
    description: "A versão apresentada no remake do jogo original."
  },
  {
    name: "Postal 4 Dude",
    image: "https://static.wikia.nocookie.net/postal/images/a/ac/P4_PostalDude.png/revision/latest?cb=20230130144058",
    id: "05 / P4",
    game: "NO REGERTS // 2022",
    description: "Uma versão mais velha e falastrona em uma nova aventura de mundo aberto."
  },
  {
    name: "Brain Damaged Dude",
    image: "https://media.tenor.com/sYEalUJaz4AAAAAe/postal-dude-postal.png",
    id: "06 / BD",
    game: "BRAIN DAMAGED // 2022",
    description: "Uma interpretação psicodélica e exagerada, com estética retrô."
  },
  {
    name: "Paradise Lost Dude",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2reTenF2vETMpIEaxROY8YjRxUe8lWmadc_khBp5wjhxue95d9fHSHekP&s=10",
    id: "07 / PL",
    game: "PARADISE LOST // 2015",
    description: "POSTAL 2: Paradise Lost é a terceira expansão oficial de POSTAL 2, servindo como uma sequência. Sua história se passa 11 anos após os eventos de Apocalypse Weekend, ao mesmo tempo em que reescreve (retcon) os acontecimentos de Postal III."
  },
  {
    name: "Postal Dude — Movie Version",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYdWLElikFrDaZYlHh4GawtX1QkK-xYa9fxeeh8E7INEQlNkxbAjQtNA&s=10",
    id: "08 / MOVIE",
    game: "VARIANTES",
    description: "O filme em live-action Postal é uma comédia de ação de 2007, dirigida por Uwe Boll e baseada na série de videogames Running with Scissors."
  },
  {
    name: "The Other Dude",
    image: "https://static.wikia.nocookie.net/postal/images/4/4c/Other_dude_bd.png/revision/latest/scale-to-width-down/1200?cb=20240602200859",
    id: "09 / OTHER",
    game: "GALERIA ADICIONAL",
    description: "O Cara Postal Alternativo (The Other Dude ou Alternate Dude) é um personagem da franquia POSTAL que funciona como uma manifestação sombria ou reflexo psicótico da mente do Postal Dude. Ele aparece em POSTAL: Brain Damaged, representando a natureza distorcida e caótica do protagonista."
  }
];

/* =========================
   FUNÇÕES DE SEGURANÇA E IMAGENS
========================= */

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}



function imageMarkup(path, alt, className = "") {
    const isExternal = /^https?:\/\//i.test(path);
  
    const imageSrc = isExternal
      ? path
      : `imagens/${path}`;
  
    const extraClass = className.includes("dude")
      ? "dude-photo"
      : "";
  
    return `
      <div class="${className}">
        <div class="photo-placeholder">
          <span class="placeholder-icon">▧</span>
          <strong>ADICIONE UMA FOTO</strong>
          <small>${escapeHTML(path)}</small>
        </div>
  
        <img
          class="${extraClass}"
          src="${imageSrc}"
          alt="${escapeHTML(alt)}"
          loading="lazy"
          onload="this.previousElementSibling.classList.add('hidden')"
          onerror="this.style.display='none'"
        >
      </div>
    `;
  }
  
  

/* =========================
   RENDERIZAR JOGOS
========================= */

const grid = document.getElementById("gamesGrid");
const search = document.getElementById("search");
const empty = document.getElementById("empty");
const filters = document.getElementById("filters");

let activeFilter = "todos";

function renderGames() {
  const term = search.value.toLowerCase().trim();

  const filtered = games.filter(game => {
    const matchesFilter =
      activeFilter === "todos" ||
      game.category === activeFilter;

    const searchable = [
      game.title,
      game.year ?? "a confirmar",
      game.edition,
      game.description,
      ...game.tags
    ].join(" ").toLowerCase();

    return matchesFilter && searchable.includes(term);
  });

  grid.innerHTML = filtered.map(game => {
    const index = games.indexOf(game);

    return `
      <article class="game-card">

        <div class="game-art">
          ${imageMarkup(game.image, "Capa de " + game.title, "game-image-box")}

          <span class="edition">
            ${escapeHTML(game.edition)}
          </span>
        </div>

        <div class="game-info">
          <span class="year">
            ${game.year ?? "Ano a confirmar"}
          </span>

          <h3>${escapeHTML(game.title)}</h3>

          <p>${escapeHTML(game.description)}</p>

          <div class="tags">
            ${game.tags.map(tag => `
              <span class="tag">${escapeHTML(tag)}</span>
            `).join("")}
          </div>

          <button class="more" data-index="${index}">
            ABRIR REGISTRO +
          </button>
        </div>

      </article>
    `;
  }).join("");

  empty.style.display = filtered.length ? "none" : "block";
}

/* =========================
   RENDERIZAR POSTAL DUDE
========================= */

const dudeGrid = document.getElementById("dudeGrid");

function renderDudes() {
  dudeGrid.innerHTML = dudes.map(dude => `
    <article class="dude-card">

      ${imageMarkup(
        dude.image,
        "Imagem de " + dude.name,
        "dude-photo-box"
      )}

      <div class="dude-icon">${escapeHTML(dude.id)}</div>

      <h3>${escapeHTML(dude.name)}</h3>

      <p>${escapeHTML(dude.description)}</p>

      <span class="label">${escapeHTML(dude.game)}</span>

    </article>
  `).join("");
}

/* =========================
   FILTROS E PESQUISA
========================= */

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;

  filters.querySelectorAll(".filter").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  renderGames();
});

search.addEventListener("input", renderGames);

/* =========================
   JANELA DE DETALHES
========================= */

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");
const modalNote = document.getElementById("modalNote");

function openGame(index) {
  const game = games[index];
  if (!game) return;

  modalTitle.textContent = game.title;

  modalMeta.textContent =
    `ANO: ${game.year ?? "A CONFIRMAR"} // TIPO: ${game.edition}`;

  modalDescription.textContent = game.description;
  modalNote.textContent = game.note;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  document.getElementById("closeModal").focus();
}

function closeGame() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-index]");
  if (!button) return;

  openGame(Number(button.dataset.index));
});

document.getElementById("closeModal").addEventListener("click", closeGame);

document.getElementById("modalCloseBottom")
  .addEventListener("click", closeGame);

modal.addEventListener("click", event => {
  if (event.target === modal) closeGame();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeGame();
});

/* =========================
   INICIALIZAÇÃO
========================= */

document.getElementById("year").textContent =
  `© ${new Date().getFullYear()}`;

renderGames();
renderDudes();
