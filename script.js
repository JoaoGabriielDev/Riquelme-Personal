// Configuração do WhatsApp
const NUMERO = "5583987580175";
let assunto = "Personal trainer";

const link = (a) =>
  `https://wa.me/${NUMERO}?text=${encodeURIComponent(
    `Olá, Riquelme! Vim pelo seu site e quero saber mais sobre: ${a}.`
  )}`;

const aplicar = () => {
  document.querySelectorAll("a.wa").forEach((a) => {
    a.href = link(a.dataset.msg || assunto);
    a.target = "_blank";
    a.rel = "noopener";
  });
};

// Inicializa os links do WhatsApp
aplicar();

// Seleção de assunto nos botões (chips)
document.querySelectorAll(".chips button").forEach((b) => {
  b.addEventListener("click", () => {
    document
      .querySelectorAll(".chips button")
      .forEach((x) => x.setAttribute("aria-pressed", x === b));
    assunto = b.dataset.msg;
    aplicar();
  });
});

// Controle do menu mobile
const btn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.setAttribute("aria-expanded", menu.classList.toggle("open"));
});

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", false);
  }
});

// Atualiza o ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
