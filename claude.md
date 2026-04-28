# RS Motorsport — Claude Code Project Brief

## Sobre este projeto

**Nome do cliente:** RS Motorsport  
**Segmento:** Oficina mecânica premium — carros nacionais e importados  
**Tempo de mercado:** Mais de 12 anos  
**Localização:** R. Emilio Pedro Goedtel, 75 - Bairro Metzler, Campo Bom / RS - CEP 93717-145
**Horário de Funcionamento:** De segunda à sexta-feira, das 08:00 às 18:00

**Site atual:** https://rsmotorsport.com.br/  
**Instagram:** https://www.instagram.com/rsmotorsportcb/  
**Google Meu Negócio:** https://share.google/THHO7AOJNepz6EVvo

### Serviços oferecidos
- Revisão premium
- Revisão reparativa
- Revisão preventiva
- Performance e remap de motor
- Lavagem detalhada

---

## Objetivo do projeto

Criar do zero a presença digital da RS Motorsport, composta por:

1. **Site principal (Single Page)** — uma única página com seções: Hero, Serviços, Sobre, Depoimentos, Localização e CTA fixo. Sem navegação complexa, sem múltiplas rotas internas.
2. **Landing pages de conversão** — páginas independentes para campanhas do Google Ads (Rede de Pesquisa), uma por serviço, sem menu, com foco total em conversão via WhatsApp.

> **Prioridade máxima:** as landing pages. Elas são o destino direto dos anúncios do Google Ads e precisam ser rápidas, claras e converter bem. O site principal é importante, mas secundário em relação às LPs.

---

## Stack tecnológica

| Camada | Tecnologia | Motivo |
|---|---|---|
| Framework | **Astro** | Gera arquivos estáticos (HTML/CSS/JS puro) — compatível com qualquer hospedagem compartilhada, incluindo Hostinger |
| Componentes | **React** (dentro do Astro) | Interatividade onde necessário (menus, formulários, animações) |
| Estilização | **Tailwind CSS** | Produtividade e consistência visual |
| Animações | **Framer Motion** | Micro-interações e transições premium |
| Hospedagem | **Hostinger (compartilhada)** | Acesso via FTP, upload da pasta `/dist` gerada pelo Astro |
| Deploy | **FTP manual ou GitHub Actions** | Envio dos arquivos estáticos gerados para o servidor |

### O que é a pasta `/dist`
Quando o projeto é "construído" com o comando `npm run build`, o Astro gera uma pasta chamada `/dist` com todos os arquivos prontos para o servidor — HTML, CSS, JS e imagens já otimizados. É essa pasta que vai para a Hostinger via FTP. Nenhum Node.js é necessário no servidor.

> **Nota para deploy:** o gestor do projeto será auxiliado no processo de abrir o FTP na Hostinger e enviar os arquivos corretamente quando chegar essa etapa.

---

## Foco principal: Google Ads — Rede de Pesquisa

O principal canal de aquisição é o **Google Ads (campanhas de Rede de Pesquisa)**. Isso define prioridades técnicas claras:

### Qualidade da página para o Google Ads
O Google avalia o **Índice de Qualidade** de cada anúncio com base em três fatores — e dois deles dependem diretamente das landing pages:

- **CTR esperado** — depende do anúncio (fora do escopo do site)
- **Relevância do anúncio** → a LP deve conter as palavras-chave do anúncio no título, subtítulo e corpo
- **Experiência na página de destino** → velocidade, clareza, mobile-first, CTA visível, conteúdo confiável

Um Índice de Qualidade alto reduz o custo por clique e melhora a posição do anúncio. **Cada LP deve ser construída pensando nisso.**

### Requisitos obrigatórios para todas as Landing Pages
- [ ] Carregamento em menos de **2 segundos no mobile** (Core Web Vitals: LCP < 2.5s)
- [ ] **Headline alinhada com a intenção de busca** (ex: quem busca "revisão de carro Caxias do Sul" deve ver exatamente isso na LP)
- [ ] **CTA acima da dobra** (visível sem scroll no mobile)
- [ ] CTA repetido ao longo da página (pelo menos 3x)
- [ ] Prova social visível: depoimentos, tempo de mercado, número de atendimentos
- [ ] Página **sem menu de navegação** — zero distração, foco total na conversão
- [ ] **Sem pop-ups** que bloqueiem o conteúdo
- [ ] Estrutura semântica correta para SEO (H1 único, H2/H3 organizados)
- [ ] Tag do Google Ads e evento de conversão configurados (estrutura pronta para inserção do ID)

---

## Estrutura de páginas

### Site principal (Single Page)
```
/ → Seções em ordem:
    1. Hero (headline forte + CTA WhatsApp)
    2. Serviços (cards dos 5 serviços com link para LP correspondente)
    3. Por que escolher a RS Motorsport (diferenciais, 12+ anos)
    4. Depoimentos de clientes
    5. Localização (mapa embed + endereço + horário)
    6. Footer (redes sociais, WhatsApp, direitos)
    + Botão flutuante de WhatsApp fixo na tela (mobile)
```

### Landing Pages (campanhas Google Ads)
```
/lp/revisao        → LP: Revisão premium / preventiva / reparativa
/lp/performance    → LP: Performance e remap de motor
/lp/lavagem        → LP: Lavagem detalhada
/lp/importados     → LP: Revisão carros importados de grandes marcas (Audi, Mercedes, Volvo, BMW)
```

> Cada LP é independente. Não compartilha layout com o site principal. Não tem menu. Tem logo no topo (sem link), conteúdo focado no serviço e CTA para WhatsApp.

---

## Identidade visual

- **Logo:** Disponível na pasta logotipo do projeto
- **Guia de estilo formal:** Não existe — propor paleta coerente baseada no logo
- **Tom visual:** Escuro, premium, técnico — preto, cinza carbono, vermelho esportivo ou dourado como acento
- **Tipografia:** Evitar fontes genéricas (Inter, Arial, Roboto). Usar fontes com personalidade para o segmento automotivo premium (ex: Barlow, Rajdhani, Bebas Neue para títulos; sans moderna limpa para corpo)
- **Estética:** O site deve transmitir confiança, precisão e performance — não deve parecer uma oficina comum

---

## Regras de desenvolvimento

- **Sempre responda em português**
- **Entregue código que funciona** — sem esqueletos, sem TODOs, sem placeholders não funcionais
- **Nunca quebre o que já está funcionando** para adicionar algo novo
- **Mobile-first é inegociável** — desenvolver e revisar sempre no viewport mobile antes do desktop
- **Performance é obrigatória** — imagens otimizadas, lazy loading, sem bibliotecas desnecessárias
- **SEO técnico incluído por padrão** — meta tags, Open Graph, title e description únicos por página
- **Não invente conteúdo** — se faltar texto, imagem ou dado, pergunte antes de preencher com conteúdo fictício
- **Componentes de CTA são reutilizáveis** — o botão de WhatsApp deve ser um componente único importado em todas as páginas

---

## CTA padrão — WhatsApp

```astro
---
// components/CTAWhatsApp.astro
const WHATSAPP_NUMBER = "555135972593"

interface Props {
  mensagem: string
  texto?: string
}

const { mensagem, texto = "Falar no WhatsApp" } = Astro.props
const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
---

<a href={url} target="_blank" rel="noopener noreferrer" class="cta-whatsapp">
  {texto}
</a>
```

**Uso nas LPs:**
```astro
<CTAWhatsApp mensagem="Olá! Vi o anúncio e quero saber mais sobre revisão premium." />
<CTAWhatsApp mensagem="Olá! Vim pelo Google e quero fazer um remap de motor." />
<CTAWhatsApp mensagem="Olá! Quero agendar uma lavagem detalhada." />
```

> **Atenção:** Substituir `WHATSAPP_NUMBER` pelo número real antes de qualquer publicação.

---

## Sobre o responsável pelo projeto

**Função:** Gestor de Tráfego e Performance  
**Plataformas gerenciadas:** Google Ads (foco principal), Meta Ads  

**Responsabilidades:**
- Gerenciamento dos anúncios ativos no Google Ads e Meta Ads
- Sugestão e criação de novos anúncios e criativos
- Rotina de otimização de conta
- Objetivo final: aumentar as vendas do cliente via canais pagos

**Implicação para o desenvolvimento:**
- As LPs são o destino direto dos anúncios — qualidade técnica impacta diretamente o custo por clique e a conversão
- URLs devem ser limpas: `/lp/revisao`, nunca `/lp/v2-abc-teste`
- Cada LP deve ter estrutura pronta para receber a tag de conversão do Google Ads

---

## O que ainda precisa ser definido (pergunte antes de criar)

- [ ] Fotos reais da oficina, equipe e serviços
- [ ] Depoimentos de clientes reais
- [ ] ID da tag do Google Ads e ID do evento de conversão