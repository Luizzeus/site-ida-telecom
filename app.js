const app = document.querySelector("#app");
const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#siteNav");

const solutions = [
  {
    id: "internet-dedicada",
    title: "Internet Dedicada e XGSPON",
    text: "Conectividade corporativa com SLA, monitoramento, redundancia e capacidade para ambientes que nao podem depender de links residenciais ou assimetricos.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    items: ["Internet corporativa", "Link dedicado", "SLA", "Monitoramento", "Redundancia", "Escalabilidade"],
  },
  {
    id: "fwa",
    title: "FWA Corporativo",
    text: "Solucoes de acesso fixo sem fio utilizando redes LTE e 5G para acelerar implantacoes e complementar ambientes corporativos.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    items: ["Ativacao rapida", "Backup da fibra", "Expansao de cobertura", "Mobilidade"],
  },
  {
    id: "privativas",
    title: "Redes Privativas LTE/5G",
    text: "Projetamos redes moveis privadas para empresas e operacoes criticas que exigem cobertura dedicada, controle de trafego e integracao com sistemas corporativos.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    items: ["APN privada", "Core LTE/5G", "QoS", "SIM/eSIM", "Cobertura indoor e outdoor", "Integracao corporativa"],
  },
  {
    id: "wifi",
    title: "Wi-Fi Corporativo",
    text: "Projetos indoor e outdoor de alta densidade, com segmentacao por VLAN, seguranca, monitoramento e operacao assistida.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    items: ["Indoor", "Outdoor", "Alta densidade", "VLAN", "Seguranca", "Monitoramento"],
  },
  {
    id: "datacenter",
    title: "Data Center e NOC",
    text: "Hosting, colocation, backup, monitoramento e suporte especializado para sustentar a operacao de conectividade de ponta a ponta.",
    image: "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&w=1200&q=80",
    items: ["Hosting", "Colocation", "Backup", "Monitoramento", "Operacao assistida", "Suporte especializado"],
  },
];

const articles = [
  ["redes-privativas-lte", "Redes Privativas", "O que sao Redes Privativas LTE?", "Entenda como redes LTE privadas entregam cobertura dedicada, controle de trafego e continuidade operacional."],
  ["redes-privativas-5g", "LTE e 5G", "O que sao Redes Privativas 5G?", "Como o 5G privativo adiciona baixa latencia, slicing conceitual e maior densidade de dispositivos."],
  ["como-funciona-fwa", "FWA", "Como funciona o FWA?", "Acesso fixo sem fio com LTE/5G para empresas, ISPs e operacoes remotas."],
  ["internet-dedicada-vs-banda-larga", "XGSPON", "Internet Dedicada vs Banda Larga.", "Comparativo tecnico entre disponibilidade, simetria, SLA, suporte e previsibilidade."],
  ["apn-privada", "Redes Privativas", "O que e APN Privada?", "A separacao logica que permite trafego movel corporativo com mais controle e seguranca."],
  ["core-lte", "LTE e 5G", "Como funciona um Core LTE?", "Principais funcoes do EPC e seu papel em autenticacao, sessao e roteamento."],
  ["core-5g", "LTE e 5G", "Como funciona um Core 5G?", "Arquitetura 5GC, funcoes de rede e o caminho para ambientes corporativos modernos."],
  ["enodeb", "Engenharia de Redes", "O que e uma eNodeB?", "A estacao radio base LTE e sua funcao na comunicacao com dispositivos moveis."],
  ["gnodeb", "Engenharia de Redes", "O que e uma gNodeB?", "A estacao radio base 5G e as diferencas praticas para redes de nova geracao."],
  ["lte-ou-wifi", "Wi-Fi Corporativo", "LTE ou Wi-Fi?", "Quando usar cada tecnologia em ambientes industriais, logisticos e corporativos."],
  ["mimo", "Engenharia de Redes", "Como funciona MIMO?", "Multiplo envio e recepcao de sinais para ampliar capacidade, robustez e eficiencia espectral."],
  ["ofdma", "LTE e 5G", "Como funciona OFDMA?", "A tecnica de acesso que divide recursos de radio para atender multiplos usuarios."],
  ["qos-lte-5g", "Redes Privativas", "O que e QoS em LTE e 5G?", "Priorizacao de trafego para aplicacoes criticas em redes moveis corporativas."],
  ["areas-remotas", "Mercado Telecom", "Como levar conectividade para areas remotas?", "Arquiteturas hibridas com fibra, FWA, radio e redes privativas para operacoes fora dos grandes centros."],
  ["telecom-2030", "Mercado Telecom", "Tendencias do mercado de telecom ate 2030.", "Convergencia entre fibra, 5G, automacao, edge, IA operacional e redes privadas."],
].map(([slug, category, title, excerpt]) => ({ slug, category, title, excerpt }));

const categories = ["Todos", "Redes Privativas", "LTE e 5G", "FWA", "Wi-Fi Corporativo", "XGSPON", "Provedores", "Mercado Telecom", "Engenharia de Redes"];

const pageMeta = {
  "/": ["IDA Telecom | Engenharia de Conectividade para Empresas", "Fibra e 4G/5G trabalhando juntos para aumentar a disponibilidade da rede e gerar novas oportunidades de negocio."],
  "/para-provedores": ["IDA Telecom para Provedores | FWA, LTE/5G e NOC", "Aceleramos a expansao de provedores com fibra, FWA, redes privativas LTE/5G, hosting de Core e NOC terceirizado."],
  "/redes-privativas-4g-5g": ["Redes Privativas LTE/5G | IDA Telecom", "Projetos de redes privativas 4G e 5G com APN privada, Core LTE, Core 5G, QoS, SIM/eSIM e cobertura indoor/outdoor."],
  "/fwa-corporativo": ["FWA Corporativo | IDA Telecom", "Acesso fixo sem fio com LTE e 5G para backup de fibra, expansao de cobertura, ISPs e empresas."],
  "/artigos": ["Centro de Conhecimento | IDA Telecom", "Artigos tecnicos sobre redes privativas, LTE, 5G, FWA, XGSPON, provedores, Wi-Fi corporativo e engenharia de redes."],
  "/casos-de-sucesso": ["Casos de Sucesso | IDA Telecom", "Exemplos de conectividade corporativa para rodovias, areas remotas, logistica, Wi-Fi corporativo e operacoes criticas."],
};

function icon(label) {
  return `<span class="icon-box" aria-hidden="true">${label}</span>`;
}

function list(items) {
  return `<ul class="feature-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function pageHero(title, text, tags = []) {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">IDA Telecom</span>
        <h1>${title}</h1>
        <p>${text}</p>
        ${tags.length ? `<div class="pill-row">${tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}</div>` : ""}
      </div>
    </section>
  `;
}

function homePage() {
  return `
    <section class="hero" id="inicio">
      <div class="hero-content">
        <span class="eyebrow">IDA Telecom</span>
        <h1>Engenharia de Conectividade para Operacoes Criticas</h1>
        <p class="hero-text">
          A IDA Telecom integra fibra, redes moveis privativas e infraestrutura corporativa para criar ambientes de alta disponibilidade, escalaveis e preparados para o crescimento dos negocios.
        </p>
        <div class="hero-actions">
          <a class="button" href="#contato" data-link>Solicitar Proposta</a>
          <a class="button secondary" href="#contato" data-link>Falar com Especialista</a>
        </div>
      </div>
      <div class="hero-metrics" aria-label="Principais solucoes">
        <article class="signal-card">${icon("ID")}<strong>Internet Dedicada</strong></article>
        <article class="signal-card">${icon("5G")}<strong>Redes Privativas LTE/5G</strong></article>
        <article class="signal-card">${icon("FW")}<strong>FWA Corporativo</strong></article>
        <article class="signal-card">${icon("NO")}<strong>NOC 24x7</strong></article>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">O que resolvemos</span>
            <h2 class="section-title">Conectividade alem da internet</h2>
          </div>
          <p>
            A conectividade tornou-se um ativo estrategico para empresas modernas. Projetamos arquiteturas que combinam fibra e 4G/5G para reduzir indisponibilidades, aumentar cobertura e permitir novas aplicacoes corporativas.
          </p>
        </div>
        <div class="grid four">
          ${[
            ["AD", "Alta Disponibilidade", "Elimine pontos unicos de falha."],
            ["EC", "Expansao de Cobertura", "Leve conectividade para novas areas."],
            ["CO", "Continuidade Operacional", "Mantenha operacoes funcionando mesmo diante de falhas."],
            ["NR", "Novas Receitas", "Amplie servicos e oportunidades comerciais."],
          ].map(([i, t, p]) => `<article class="card padded">${icon(i)}<h3>${t}</h3><p>${p}</p></article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section alt" id="solucoes">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Solucoes</span>
            <h2 class="section-title">Arquiteturas hibridas para ambientes corporativos</h2>
          </div>
          <p>Fibra, XGSPON, LAN-to-LAN, VPN corporativa, LTE, 5G, Wi-Fi, Data Center e NOC trabalhando como uma unica arquitetura operacional.</p>
        </div>
        ${solutions.map((solution) => `
          <article class="solution card" id="${solution.id}">
            <div>
              <span class="eyebrow">${solution.id === "internet-dedicada" ? "Internet Dedicada" : "Conectividade"}</span>
              <h3>${solution.title}</h3>
              <p>${solution.text}</p>
              ${list(solution.items)}
            </div>
            <div class="solution-media">
              <img src="${solution.image}" alt="${solution.title}" loading="lazy" />
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section dark" id="sobre">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Sobre a IDA</span>
            <h2 class="section-title">Engenharia, implantacao e operacao assistida</h2>
          </div>
          <p>Fibra e 4G/5G trabalhando juntos para aumentar a disponibilidade da rede e gerar novas oportunidades de negocio.</p>
        </div>
        <div class="network-diagram" aria-label="Diagrama de arquitetura de conectividade">
          <div class="diagram-row">
            <div class="node">Fibra / XGSPON</div>
            <div class="node core">Core LTE/5G</div>
            <div class="node">FWA Corporativo</div>
          </div>
          <div class="diagram-row">
            <div class="node">LAN-to-LAN e VPN</div>
            <div class="node core">NOC 24x7</div>
            <div class="node">Wi-Fi Corporativo</div>
          </div>
          <div class="diagram-row">
            <div class="node">Empresas</div>
            <div class="node">ISPs</div>
            <div class="node">Operacoes Criticas</div>
          </div>
        </div>
      </div>
    </section>

    ${contactSection()}
  `;
}

function providersPage() {
  return `
    ${pageHero("Aceleramos a expansao de provedores de internet", "Apoiamos ISPs na criacao de novas ofertas de conectividade utilizando fibra, FWA e redes privativas LTE/5G.", ["FWA corporativo", "Hosting de Core", "NOC terceirizado", "Engenharia de RF"])}
    <section class="section">
      <div class="container">
        <div class="grid three">
          ${[
            ["EC", "Expansao de cobertura", "Planejamento para entrar em novas regioes com fibra, FWA e arquiteturas hibridas."],
            ["FW", "FWA corporativo", "Ofertas empresariais com LTE/5G para ativacao rapida, redundancia e alcance."],
            ["HC", "Hosting de Core", "Ambiente tecnico para sustentar Core LTE, Core 5G e servicos de rede."],
            ["NO", "NOC terceirizado", "Monitoramento, suporte especializado e operacao assistida para ISPs."],
            ["5G", "Projetos LTE/5G", "Desenho, implantacao e integracao de redes moveis privadas."],
            ["RF", "Engenharia de RF", "Analise de cobertura, capacidade, interferencia e posicionamento de radios."],
          ].map(([i, t, p]) => `<article class="card padded">${icon(i)}<h3>${t}</h3><p>${p}</p></article>`).join("")}
        </div>
      </div>
    </section>
    ${contactSection()}
  `;
}

function privateNetworksPage() {
  return `
    ${pageHero("Redes Privativas LTE/5G para operacoes criticas", "Projetamos redes moveis privadas com Core LTE, Core 5G, APN privada, QoS, SIM/eSIM e cobertura indoor e outdoor.", ["LTE Privativo", "5G Privativo", "APN Privada", "QoS", "SIM/eSIM"])}
    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Arquitetura</span>
            <h2 class="section-title">Controle, cobertura e previsibilidade</h2>
          </div>
          <p>Uma rede privativa permite que a empresa opere conectividade movel dedicada, com politica de trafego, autenticacao, priorizacao e integracao aos sistemas corporativos.</p>
        </div>
        <div class="grid three">
          ${[
            ["OP", "O que e uma rede privativa", "Rede LTE/5G dedicada para uma empresa, unidade operacional, campus, rodovia, fazenda ou area industrial."],
            ["CL", "Core LTE", "EPC responsavel por autenticacao, sessao, roteamento e politicas de rede em ambientes 4G."],
            ["C5", "Core 5G", "Arquitetura moderna para maior densidade, baixa latencia e novos modelos de servico."],
            ["AP", "APN Privada", "Separacao logica de trafego movel para acesso corporativo controlado."],
            ["QS", "QoS", "Priorizacao de aplicacoes criticas, telemetria, voz, video e sistemas de campo."],
            ["SI", "SIM e eSIM", "Gestao de identidade dos dispositivos conectados a rede privativa."],
          ].map(([i, t, p]) => `<article class="card padded">${icon(i)}<h3>${t}</h3><p>${p}</p></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="section alt">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Casos de uso</span>
            <h2 class="section-title">Onde redes privativas criam vantagem operacional</h2>
          </div>
          <p>Aplicacoes de voz, video, telemetria, sensores, operacao remota, rastreamento e conectividade de campo dependem de cobertura previsivel e gestao tecnica.</p>
        </div>
        ${list(["Logistica", "Industria", "Rodovias", "Agronegocio", "Condominios", "Operacoes remotas"])}
      </div>
    </section>
    ${contactSection()}
  `;
}

function fwaPage() {
  return `
    ${pageHero("FWA Corporativo", "Acesso fixo sem fio com LTE e 5G para empresas, provedores e operacoes que precisam ativar conectividade com velocidade, redundancia e flexibilidade.", ["Backup da fibra", "FWA para ISPs", "FWA para empresas"])}
    <section class="section">
      <div class="container">
        <div class="grid two">
          ${[
            ["OF", "O que e FWA", "Fixed Wireless Access conecta um ponto fixo usando rede sem fio LTE ou 5G, substituindo ou complementando o acesso cabeado."],
            ["CF", "Como funciona", "CPEs, antenas, radio bases e Core trabalham para entregar conectividade corporativa monitorada."],
            ["BF", "Backup da fibra", "Quando a fibra falha, o FWA pode assumir como caminho alternativo para reduzir indisponibilidade."],
            ["PI", "FWA para ISPs", "Provedores podem criar ofertas empresariais, expandir cobertura e antecipar receita em regioes sem fibra pronta."],
            ["PE", "FWA para empresas", "Empresas ganham ativacao rapida, mobilidade operacional e conectividade para areas temporarias ou remotas."],
            ["EX", "Expansao de cobertura", "Ideal para patios logisticos, filiais, obras, areas rurais, condominios e operacoes distribuidas."],
          ].map(([i, t, p]) => `<article class="card padded">${icon(i)}<h3>${t}</h3><p>${p}</p></article>`).join("")}
        </div>
      </div>
    </section>
    ${contactSection()}
  `;
}

function articlesPage(activeCategory = "Todos") {
  const filtered = activeCategory === "Todos" ? articles : articles.filter((article) => article.category === activeCategory);
  return `
    ${pageHero("Centro de Conhecimento", "Conteudo tecnico para transformar a IDA Telecom em referencia em telecomunicacoes, conectividade corporativa, redes privativas, FWA, XGSPON e engenharia de redes.", categories.slice(1))}
    <section class="section">
      <div class="container">
        <div class="article-toolbar">
          ${categories.map((category) => `<button class="filter-button ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">${category}</button>`).join("")}
        </div>
        <div class="grid three" id="articleGrid">
          ${filtered.map((article) => `
            <article class="card padded article-card">
              <small>${article.category}</small>
              <h3>${article.title}</h3>
              <p>${article.excerpt}</p>
              <a href="/artigos/${article.slug}" data-link>Ler artigo</a>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function articlePage(slug) {
  const article = articles.find((item) => item.slug === slug) || articles[0];
  return `
    ${pageHero(article.title, article.excerpt, [article.category, "IDA Telecom", "Engenharia de Redes"])}
    <section class="section">
      <article class="container article-page">
        <p>${article.excerpt} Em projetos corporativos, a decisao correta nasce da combinacao entre cobertura, disponibilidade, seguranca, capacidade e modelo operacional.</p>
        <h2>Por que isso importa</h2>
        <p>Operacoes modernas dependem de conectividade para sistemas de gestao, sensores, voz, video, automacao, seguranca e atendimento. Quando a rede e tratada apenas como acesso a internet, a empresa perde previsibilidade e abre espaco para falhas operacionais.</p>
        <h2>Pontos tecnicos de avaliacao</h2>
        <ul class="article-list">
          <li>Disponibilidade esperada e impacto de indisponibilidade no negocio.</li>
          <li>Cobertura indoor, outdoor, remota ou distribuida.</li>
          <li>Separacao de trafego, APN privada, VPN corporativa e politicas de seguranca.</li>
          <li>QoS para aplicacoes sensiveis como voz, video, telemetria e automacao.</li>
          <li>Modelo de suporte, monitoramento, NOC e operacao assistida.</li>
        </ul>
        <h2>Como a IDA Telecom aborda</h2>
        <p>A IDA combina fibra, 4G, 5G, FWA, Wi-Fi corporativo, LAN-to-LAN, VPN, Data Center e NOC para desenhar arquiteturas ajustadas ao risco operacional de cada cliente.</p>
        <div class="section-actions">
          <a class="button" href="/#contato" data-link>Solicitar Analise Tecnica</a>
          <a class="button secondary" href="/artigos" data-link>Voltar aos artigos</a>
        </div>
      </article>
    </section>
  `;
}

function casesPage() {
  const cases = [
    ["Cobertura LTE para rodovias", "Conectividade movel para trechos extensos, bases operacionais, monitoramento e equipes de campo.", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"],
    ["FWA para areas remotas", "Ativacao rapida para unidades sem fibra disponivel ou com necessidade de redundancia.", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"],
    ["Wi-Fi corporativo", "Ambientes indoor e outdoor com alta densidade, VLAN, seguranca e monitoramento.", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"],
    ["Conectividade para logistica", "Patios, CDs, esteiras operacionais, rastreamento, coletores e sistemas de gestao.", "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"],
    ["Redes privativas para operacoes criticas", "Arquitetura LTE/5G dedicada com APN privada, QoS e integracao corporativa.", "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"],
  ];
  return `
    ${pageHero("Casos de Sucesso", "Exemplos de projetos em que arquiteturas hibridas de fibra, FWA, LTE/5G e Wi-Fi corporativo resolvem desafios reais de disponibilidade, cobertura e operacao.", ["Rodovias", "Logistica", "Areas remotas", "Operacoes criticas"])}
    <section class="section">
      <div class="container grid three">
        ${cases.map(([title, text, image]) => `
          <article class="card case-card">
            <img src="${image}" alt="${title}" loading="lazy" />
            <div>
              <h3>${title}</h3>
              <p>${text}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    ${contactSection()}
  `;
}

function contactSection() {
  return `
    <section class="section" id="contato">
      <div class="container card contact-panel">
        <div>
          <span class="eyebrow">Contato</span>
          <h2 class="section-title">Solicite uma analise tecnica</h2>
          <p class="lead">Conte o desafio de conectividade da sua operacao. A IDA avalia disponibilidade, cobertura, redundancia, seguranca, capacidade e modelo de suporte.</p>
          <div class="contact-details" aria-label="Dados de contato">
            <p><strong>Endereco</strong> Rua Conceicao, 233 - sala 1714. CEP: 1310-050 - Campinas SP.</p>
            <p><strong>Telefone</strong> <a href="tel:+551930900125">+55 19 3090-0125</a></p>
            <p><strong>E-mail</strong> <a href="mailto:vendas@idatele.com">vendas@idatele.com</a></p>
          </div>
          <div class="pill-row">
            <span class="pill">Empresas</span>
            <span class="pill">ISPs</span>
            <span class="pill">Industria</span>
            <span class="pill">Logistica</span>
            <span class="pill">Agronegocio</span>
          </div>
        </div>
        <form class="contact-form" id="contactForm">
          <label>Nome<input name="name" autocomplete="name" required /></label>
          <label>E-mail corporativo<input type="email" name="email" autocomplete="email" required /></label>
          <label>Empresa<input name="company" autocomplete="organization" /></label>
          <label>Desafio tecnico<textarea name="message" placeholder="Ex.: backup da fibra, rede privativa 5G, FWA para filial, NOC terceirizado"></textarea></label>
          <button class="button" type="submit">Enviar Solicitacao</button>
        </form>
      </div>
    </section>
  `;
}

function route() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path.startsWith("/artigos/")) return articlePage(path.split("/").pop());
  if (path === "/para-provedores") return providersPage();
  if (path === "/redes-privativas-4g-5g") return privateNetworksPage();
  if (path === "/fwa-corporativo") return fwaPage();
  if (path === "/artigos") return articlesPage();
  if (path === "/casos-de-sucesso") return casesPage();
  return homePage();
}

function updateMeta() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const data = pageMeta[path] || (path.startsWith("/artigos/") ? ["Artigo tecnico | IDA Telecom", "Conteudo tecnico da IDA Telecom sobre engenharia de conectividade corporativa."] : pageMeta["/"]);
  document.title = data[0];
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", data[1]);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", path);
}

function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === path || (href !== "/" && path.startsWith(href)));
  });
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

function render() {
  app.innerHTML = route();
  updateMeta();
  setActiveNav();
  closeMenu();
  app.focus({ preventScroll: true });

  const hash = window.location.hash;
  if (hash) {
    requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ block: "start" }));
  } else {
    window.scrollTo({ top: 0 });
  }
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-link]");
  if (!link) return;

  const url = new URL(link.href);
  if (url.origin !== window.location.origin) return;

  event.preventDefault();
  window.history.pushState({}, "", `${url.pathname}${url.hash}`);
  render();
});

document.addEventListener("click", (event) => {
  const filter = event.target.closest(".filter-button");
  if (!filter) return;
  app.innerHTML = articlesPage(filter.dataset.category);
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "contactForm") return;
  event.preventDefault();
  const button = event.target.querySelector("button");
  button.textContent = "Solicitacao registrada";
  button.disabled = true;
});

menuToggle?.addEventListener("click", () => {
  const open = !document.body.classList.contains("menu-open");
  document.body.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

window.addEventListener("popstate", render);
render();
