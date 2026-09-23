# ⚽ Jogo de Carreira no Futebol — Documento de Design

> Documento vivo. Vai crescendo conforme detalhamos cada parte do jogo.

**Conceito:** simular a vida inteira de um atleta, da categoria de base à aposentadoria e além. O jogador escolhe o caminho: o focado, o que se perde, a promessa que não vinga, o desconhecido que vira estrela. Depois de parar, escolhe a vida pós-carreira: técnico, auxiliar, comentarista, empresário ou dono de clube.

---

## Parte 1 — Decisões da carreira na base (salvo)

### 1. Entrada no futebol
- Escolinha, peneira ou clube direto
- Mudar de cidade ou morar em alojamento longe da família

### 2. Estudo x futebol
- Dedicar tempo à escola ou apostar tudo no esporte
- Nota baixa pode ter consequências (clube, família, plano B)

### 3. Identidade de jogador
- Posição, pé dominante e estilo (técnico, físico, velocista, líder)
- Aceitar ser reposicionado pelo treinador ou insistir na sua posição

### 4. Evolução
- Onde investir o treino: técnico, físico, tático ou mental
- Treino extra e academia, respeitando limite por idade (risco de lesão e queima de fase)

### 5. Rotina e vida pessoal
- Alimentação, sono, festas, namoro, amizades
- Uso de redes sociais (fama precoce x reputação)

### 6. Família e empresário
- Quando aceitar um agente e qual escolher
- Pai ou mãe interferindo, cobrando ou ajudando
- Ajuda de custo e pressão financeira em casa

### 7. Clube
- Ficar no clube formador ou aceitar proposta de outro
- Assinar contrato de formação, fazer multa e ceder direitos
- Ir para clube maior e virar reserva, ou ficar em clube menor e jogar

### 8. Competições
- Priorizar seleção de base ou o clube
- Copinha, campeonatos estaduais, torneios internacionais
- Jogar pelo coletivo ou buscar destaque individual para ser visto

### 9. Relações
- Técnico, colegas, rivais, bullying, panelinhas
- Lidar com banco de reservas, injustiça e crítica

### 10. Lesões
- Voltar mais cedo ou respeitar a recuperação
- Cirurgia, fisioterapia e o impacto psicológico

### 11. Momentos de crise
- Ser dispensado: tentar outro clube, jogar nível inferior ou desistir
- Plano B: faculdade, futebol universitário (EUA), futebol no exterior

### 12. Transição para o profissional
- Ser promovido, emprestado ou vendido
- Primeiro contrato profissional: salário, duração e cláusulas
- Aceitar o primeiro contrato ou esperar uma proposta melhor

---

## Parte 2 — Fases da base por idade

### Mecânicas que atravessam todas as fases

- **Maturação:** cada jogador cresce em ritmo próprio. O precoce se destaca cedo, mas pode ser alcançado. O tardio passa despercebido e pode explodir depois. Isso gera "falsas promessas" e "talentos escondidos".
- **Potencial oculto x visível:** o jogador tem um potencial real que ele mesmo não vê. Olheiros e treinadores enxergam só uma parte, influenciada por desempenho, físico e visibilidade.
- **Barras de status:** moral, físico, família, reputação, estudos, dinheiro em casa.
- **Funil:** a cada fase, muitos são dispensados. A chance de seguir depende de desempenho, potencial percebido, relação com o técnico e sorte (lesão, momento do clube).
- **Idade x carga:** cada idade tem um limite saudável de treino. Passar do limite rende evolução rápida, mas aumenta lesão e desgaste mental.

---

### Fase 1 — Sub-11 e Sub-12 (10 a 12 anos): Descoberta

**Foco:** diversão, fundamentos, revelação do gosto e do talento.
**Contexto:** escolinha, peneiras, projetos sociais, primeiros clubes.

**Decisões-chave**
- Como entrar: escolinha paga, projeto social, peneira ou indicação
- Posição inicial e pé dominante (define muito do estilo futuro)
- Divisão do tempo entre rua/pelada, escola e treino
- Como a família lida com o sonho (apoio, pressão, falta de dinheiro para transporte e chuteira)

**Eventos**
- Primeira peneira (aprovação, reprovação, "volte ano que vem")
- Primeiro festival ou torneio regional
- Olheiro de clube pequeno aparece
- Pai ou mãe que cobra demais no jogo

**Competições:** festivais, torneios de escolinha, copas regionais.
**Contrato:** nenhum. Só ligação informal com o clube.
**Riscos:** desânimo, pressão familiar, perder o prazer de jogar.
**Saída da fase:** ser aprovado em um clube formador ou continuar na escolinha esperando nova chance.

---

### Fase 2 — Sub-13 (12 a 13 anos): Primeiro clube

**Foco:** entrar no sistema de um clube e aprender a rotina de atleta.
**Contexto:** treinos regulares, primeiros campeonatos organizados, começo da puberdade.

**Decisões-chave**
- Aceitar o clube ou esperar proposta melhor
- Se o clube for em outra cidade: a família se muda, o jogador vai sozinho ou recusa
- Aceitar ser reposicionado (meia vira lateral, atacante vira ponta)
- Começar a escolher onde investir o treino (técnico, físico, tático, mental)

**Eventos**
- Puberdade: quem cresce cedo domina, quem cresce tarde sofre fisicamente
- Primeiro treinador que acredita (ou não) no jogador
- Primeira rivalidade e primeira panelinha
- Primeira nota baixa que afeta a permanência

**Competições:** campeonato estadual da categoria, torneios amistosos.
**Contrato:** cadastro no clube, sem vínculo forte. Ainda dá para trocar de clube com facilidade.
**Riscos:** saudade de casa, comparação com colegas, mudança de escola.
**Saída da fase:** confirmado no clube para a próxima categoria ou dispensado no fim do ano.

---

### Fase 3 — Sub-15 (14 a 15 anos): Alojamento e pressão

**Foco:** virar atleta de verdade. Aqui a base começa a ficar séria.
**Contexto:** alojamento, rotina rígida, primeira exposição real a olheiros e seleção.

**Decisões-chave**
- Morar no alojamento do clube ou manter a rotina em casa
- Assinar o contrato de formação (o clube passa a ter direitos sobre o atleta)
- Aceitar um empresário ou agente logo cedo, ou esperar
- Redes sociais: expor-se ou manter discrição
- Equilibrar estudo e futebol com cobrança maior dos dois lados

**Eventos**
- Convocação para a seleção de base Sub-15 (ou não)
- Primeiro assédio de empresário, com promessas
- Ajuda de custo: a família começa a depender do dinheiro
- Primeira lesão relevante ou estirão de crescimento com dores
- Bullying e disputa por espaço no alojamento

**Competições:** estadual Sub-15, torneios nacionais, Sul-Americano Sub-15 (seleção).
**Contrato:** formação, com ajuda de custo, direitos do clube e multa.
**Riscos:** burnout, más companhias, queda escolar, empresário aproveitador, pressão financeira.
**Saída da fase:** ser mantido para o Sub-17 com projeção de profissional, ou entrar na zona de risco de dispensa.

---

### Fase 4 — Sub-17 (16 a 17 anos): Ano de definição

**Foco:** provar que tem futuro no profissional. É o funil mais apertado.
**Contexto:** contrato profissional passa a ser possível, clubes maiores e do exterior aparecem.

**Decisões-chave**
- Renovar com o clube formador ou ouvir propostas de outros
- Assinar o primeiro contrato profissional cedo ou esperar mais maturidade e proposta melhor
- Priorizar seleção ou clube quando os calendários chocam
- Escolher empresário definitivo (e lidar com a pressão da família)
- Ficar no clube menor jogando ou ir para o maior e arriscar o banco
- Buscar destaque individual ou jogar coletivo

**Eventos**
- Treinar com o profissional pela primeira vez
- Proposta de clube europeu, com dilema de sair cedo do país e da família
- Dispensa em massa de colegas: o jogador vê amigos indo embora
- Lesão grave (ligamento, por exemplo) num momento decisivo
- Fama precoce: viraliza, ganha seguidores, atrai atenção e inveja
- Namoro sério, festa, distração

**Competições:** Brasileiro Sub-17, torneios internacionais, Sul-Americano Sub-17, Mundial Sub-17 (seleção).
**Contrato:** formação renovado ou primeiro contrato profissional.
**Riscos:** vender direitos cedo demais, sair para o exterior sem estrutura, perder a fase por lesão, pressão de "salvar a família".
**Saída da fase:** promovido ao Sub-20 com status de promessa, mantido como aposta média, emprestado ou dispensado.

---

### Fase 5 — Sub-20 (18 a 20 anos): Ponte para o profissional

**Foco:** a última etapa da base. Transição real para o time principal.
**Contexto:** a disputa agora é contra jogadores mais velhos, e o clube precisa decidir se aposta, empresta ou vende.

**Decisões-chave**
- Aceitar empréstimo (ganhar minutos) ou ficar treinando no elenco principal
- Assinar o contrato profissional: salário, duração, multa, direitos de imagem
- Aceitar a primeira proposta ou esperar uma melhor
- Sair para o exterior ou consolidar-se no Brasil
- Plano B: faculdade, futebol universitário (EUA), série menor
- Como lidar com a queda de rendimento depois da explosão inicial

**Eventos**
- Copinha: a vitrine de todo mundo do país
- Primeira convocação para jogos do profissional (banco, minutos, estreia)
- Técnico que promove ou ignora
- Primeiro salário alto, e como usá-lo (família, investimento, gasto)
- Empresário pressionando por transferência
- Dispensa aos 19/20 e a decisão de recomeçar em um clube menor

**Competições:** Copa São Paulo (Copinha), Brasileiro Sub-20, Mundial Sub-20 (seleção), Sul-Americano Sub-20.
**Contrato:** primeiro contrato profissional, empréstimo ou dispensa.
**Riscos:** estagnar, "queimar" a fase, aceitar mau contrato, cair no ostracismo.
**Saída da fase:** entrada no profissional (fim da base). Daqui começa a Parte 3 do jogo.

---

## Resumo visual do funil

| Fase | Idade | Foco | Grande decisão |
|---|---|---|---|
| Sub-11/12 | 10–12 | Descoberta | Como entrar no futebol |
| Sub-13 | 12–13 | Primeiro clube | Mudar de cidade ou não |
| Sub-15 | 14–15 | Alojamento e pressão | Contrato de formação e empresário |
| Sub-17 | 16–17 | Definição | Contrato profissional cedo ou esperar |
| Sub-20 | 18–20 | Ponte para o profissional | Empréstimo, venda ou promoção |

---

## Parte 3 — Sistema de atributos

### 3.1 Atributos técnicos, físicos, táticos e mentais

Cada jogador tem 4 grupos de atributos, cada um com sub-atributos de 0 a 100. O jogo não precisa mostrar todos os números ao jogador — pode mostrar como estrelas, conceitos ("bom", "regular") ou só liberar o número real conforme a idade e a exposição a avaliações (olheiro, exame físico, etc).

**Técnico**
- Finalização, passe curto, passe longo, cruzamento, drible, primeiro toque, cabeceio, chute de longe, bola parada, pé fraco

**Físico**
- Velocidade, resistência, força, impulsão, agilidade, equilíbrio

**Tático**
- Posicionamento, visão de jogo, marcação, desarme, leitura de jogo, disciplina tática (segue instrução x joga por conta própria)

**Mental**
- Concentração, liderança, compostura (frieza sob pressão), ambição, profissionalismo, resiliência (reação a adversidade), ego (quanto mais alto, mais decisões arriscadas/individualistas ele tende a preferir)

### 3.2 Potencial oculto x potencial percebido

- **Potencial real (oculto):** número fixo, gerado na criação do jogador, nunca mostrado por completo. É o teto real do atleta.
- **Potencial percebido:** o que olheiros, técnicos e mídia acreditam sobre o jogador, baseado em desempenho recente, físico atual e visibilidade (jogou em competição grande? apareceu na mídia?).
- A diferença entre os dois cria os arquétipos do jogo:
  - **Promessa confirmada:** percebido e real altos, e ele desenvolve normalmente.
  - **Fogo de palha:** percebido alto, real baixo/médio — vira moda cedo e murcha.
  - **Jóia escondida:** percebido baixo, real alto — ninguém aposta, mas se ele conseguir minutos e continuidade, explode tarde.
  - **Frustrado:** real alto, mas más decisões (lesão, indisciplina, ambiente) impedem o desenvolvimento.

### 3.3 Maturação física

Cada jogador tem uma "curva de maturação": precoce, normal ou tardia. Isso desloca o pico dos atributos físicos:
- **Precoce:** físico se desenvolve cedo (13–15 anos), dá vantagem na base, mas o resto do elenco alcança depois. Risco: o clube confunde físico com talento e aposta errado.
- **Normal:** desenvolvimento parelho com a média.
- **Tardia:** físico só estabiliza depois dos 17–19. Sofre na base, mas se sobreviver ao funil sem ser dispensado, pode surpreender no profissional.

### 3.4 Evolução por treino

A cada fase/temporada, o jogador distribui pontos ou escolhe uma ênfase (técnico, físico, tático, mental). O ganho depende de:
- Idade (janelas de aprendizado: técnico rende mais na base, físico rende mais depois dos 15/16)
- Minutos jogados (atributo sobe mais jogando do que só treinando)
- Moral e ambiente (jogador infeliz evolui mais devagar)
- Overtraining: passar do limite de carga da idade dá ganho extra no curto prazo, mas aumenta o risco de lesão e desgaste mental

---

## Parte 4 — Barras de status

Barras que vão de 0 a 100, visíveis o tempo todo, e que sobem/descem conforme decisões e eventos. Servem tanto para dar feedback ao jogador quanto para abrir/fechar eventos e caminhos.

| Barra | O que representa | Sobe com | Desce com |
|---|---|---|---|
| **Moral** | Felicidade e motivação do atleta | Jogar bem, ser titular, elogio, vitória, ambiente bom | Banco, críticas, lesão, saudade de casa, conflito |
| **Físico/Fadiga** | Condição física no momento | Descanso, fisioterapia, férias | Excesso de jogos/treino, lesão, overtraining |
| **Família** | Relação e apoio da família | Visitas, dar suporte financeiro, ligar, decisões que os incluem | Sumir, decisões contra a vontade deles, brigas por dinheiro |
| **Reputação** | Como o meio do futebol (clubes, mídia, torcida) enxerga o atleta | Boas atuações, comportamento profissional, entrevistas boas | Polêmica, indisciplina, desempenho ruim, escândalo |
| **Estudos** | Nível educacional/plano B | Dedicar tempo, boas notas | Faltar, priorizar só o futebol |
| **Financeiro (família/atleta)** | Situação de dinheiro em casa e do próprio jogador | Contrato, ajuda de custo, patrocínio | Gastos, família dependente, ausência de renda |
| **Ego/Humildade** | Quão inflado está o senso de importância do jogador | Fama, mídia, sucesso rápido | Trabalho em equipe, mentoria, fracasso bem gerenciado |
| **Saúde mental** | Estabilidade emocional | Suporte psicológico, equilíbrio de vida, vitórias | Pressão excessiva, lesão grave, cobrança, redes sociais negativas |

**Interações entre barras:**
- Física baixa + segue jogando = risco alto de lesão
- Moral baixa + reputação baixa = risco de ser dispensado mesmo com atributos bons
- Família baixa + financeiro alto = abre eventos de conflito ("virou as costas pra gente")
- Ego alto + saúde mental baixa = eventos de escândalo, festa, indisciplina
- Estudos altos = sempre disponível um "plano B" nas crises (faculdade, bolsa nos EUA)

---

### 4.1 Glossário: Reputação, Torcida, Audiência e Legado

Ao longo do documento, "quão conhecido/bem visto o jogador é" se desdobra em quatro métricas diferentes, criadas em momentos diferentes. Elas parecem semelhantes mas medem coisas distintas — esse glossário é a referência única de como se relacionam.

| Métrica | Onde existe | O que mede | Quem a "enxerga" |
|---|---|---|---|
| **Reputação** | Desde a base (Parte 4), continua na carreira toda | Prestígio dentro do meio do futebol: como clubes, técnicos, olheiros e imprensa esportiva séria avaliam o atleta profissionalmente | O meio profissional do futebol |
| **Reputação com a Torcida** | Desdobrada na fase profissional (7.9.3) | Afeto popular e lealdade percebida — nem sempre anda junto com a Reputação (dá pra ser tecnicamente respeitado e não amado, ou amado sem ser o melhor tecnicamente) | O torcedor do clube atual/ex-clubes |
| **Audiência** | Fase profissional em diante (7.12.2) | Alcance de mídia/seguidores — quantas pessoas conhecem o jogador, independente de gostarem ou respeitarem tecnicamente | Público geral, mídia de entretenimento, marcas |
| **Score de Legado** | Calculado só no fim da carreira ativa (7.14.4) | Um resumo histórico e definitivo: títulos, prêmios, recordes e o acumulado das três métricas acima ao longo de toda a carreira | Usado pelo próprio jogo pra abrir portas na pós-aposentadoria (Parte 8) |

**Como uma alimenta a outra:**

```
Reputação (desempenho consistente, comportamento profissional)
        +
Reputação com a Torcida (gestos de lealdade, atuações em jogos grandes)
        ↓ alimentam parcialmente, mas Audiência também cresce sozinha
        ↓ (momentos virais, Perfil de mídia, redes sociais — 7.12.1/7.12.2)
Audiência (alcance/fama, não exige aprovação técnica nem popular)
        +
Reputação, Reputação com a Torcida, Títulos e Prêmios (7.14.1/7.14.2)
        ↓ se consolidam, no momento da aposentadoria, em
Score de Legado (Parte 7.14.4 → decide o que abre na Parte 8)
```

Um exemplo prático de como isso gera arquétipos diferentes: um jogador pode ter **Reputação alta + Audiência baixa** (o "matador silencioso", respeitadíssimo no meio, mas sem viralizar) ou **Audiência alta + Reputação baixa** (fama por polêmica, pouco crédito técnico) — os dois chegam à aposentadoria com Score de Legado bem diferente, mesmo tendo sido "famosos" dos dois jeitos.

---

## Parte 5 — Eventos por fase

Eventos podem ser **aleatórios** (chance fixa por temporada, ajustada pelas barras) ou **condicionais** (só disparam se certas condições forem batidas: ex. moral abaixo de 30, ou reputação acima de 70 antes dos 16 anos).

### Sub-11/12 — Descoberta
| Evento | Tipo | Gatilho | Possíveis escolhas | Efeito |
|---|---|---|---|---|
| Primeira peneira | Fixo (início) | — | Focar em mostrar técnica / jogar simples e seguro | Define entrada ou não no clube |
| Pai/mãe grita da arquibancada | Condicional | Família baixa ou moral baixa | Pedir pra ele parar / deixar quieto / conversar depois | Família ↑↓, Moral ↑↓ |
| Olheiro de clube pequeno aparece | Aleatório | Bom desempenho recente | Aceitar convite / esperar clube maior | Abre ou atrasa entrada no clube |
| Amigo desiste do futebol | Aleatório | — | Incentivá-lo / seguir seu caminho | Moral leve, sem grande efeito mecânico |

### Sub-13 — Primeiro clube
| Evento | Tipo | Gatilho | Possíveis escolhas | Efeito |
|---|---|---|---|---|
| Estirão de crescimento | Aleatório (maturação precoce) | Curva precoce | — (narrativo) | Físico ↑, vantagem temporária |
| Técnico quer reposicionar | Condicional | Início da fase | Aceitar / insistir na posição | Muda atributos-chave; insistir pode custar minutos |
| Primeira nota baixa | Condicional | Estudos baixo | Focar estudo / focar futebol | Estudos ↑↓, Moral leve |
| Mudança de cidade | Fixo (se aplicável) | Proposta de clube fora | Ir com a família / ir sozinho / recusar | Família, Moral, abre ou fecha clubes |

### Sub-15 — Alojamento e pressão
| Evento | Tipo | Gatilho | Possíveis escolhas | Efeito |
|---|---|---|---|---|
| Convocação seleção Sub-15 | Condicional | Potencial percebido alto | Priorizar seleção / priorizar clube (se chocar calendário) | Reputação ↑, Físico ↓ (se acumular jogos) |
| Primeiro empresário aparece | Aleatório | Reputação > limite | Assinar / esperar / consultar família | Financeiro, Família, abre eventos futuros com o empresário |
| Ajuda de custo vira sustento de casa | Condicional | Financeiro família baixo | Repassar tudo / guardar parte | Família ↑, Financeiro pessoal ↓ |
| Lesão no crescimento (dores de crescimento) | Aleatório | Overtraining ou maturação tardia | Tratar com calma / continuar treinando | Físico, risco de lesão maior |
| Bullying/panelinha no alojamento | Aleatório | Moral baixa | Enfrentar / se isolar / buscar ajuda de um adulto | Moral, Saúde mental |
| Redes sociais / primeiro viral | Aleatório | Boa atuação em jogo grande | Aproveitar exposição / manter discrição | Reputação, Ego |

### Sub-17 — Ano de definição
| Evento | Tipo | Gatilho | Possíveis escolhas | Efeito |
|---|---|---|---|---|
| Treino com o elenco profissional | Fixo/condicional | Desempenho alto na categoria | Tentar impressionar / jogar seguro | Reputação, Moral, chance de acelerar promoção |
| Proposta de clube europeu | Aleatório | Reputação alta | Aceitar e sair cedo / recusar e continuar no Brasil | Muda geografia da carreira, Família ↓ se aceitar |
| Amigos sendo dispensados em massa | Fixo (evento de fase) | — | Apoiar os amigos / manter distância | Moral, Reputação social (narrativo) |
| Lesão grave (ligamento) | Aleatório (chance ↑ com físico baixo/overtraining) | — | Cirurgia e reabilitação completa / voltar antes do tempo | Físico, atraso na carreira, ou risco de lesão crônica |
| Fama precoce / vira meme ou viral | Aleatório | Reputação muito alta cedo | Curtir o momento / manter os pés no chão | Ego ↑, Saúde mental ↓ se mal gerido |
| Primeiro contrato profissional na mesa | Condicional | Fim da fase | Assinar já / esperar proposta melhor | Financeiro, Reputação com o clube |

### Sub-20 — Ponte para o profissional
| Evento | Tipo | Gatilho | Possíveis escolhas | Efeito |
|---|---|---|---|---|
| Convite para a Copinha | Fixo | — | Focar em se destacar individualmente / jogar pelo coletivo | Reputação, abre olheiros de fora |
| Estreia no profissional | Condicional | Bom desempenho no Sub-20 | Aproveitar a chance / travar de nervoso (dependendo de Compostura) | Reputação, Moral, Confiança |
| Proposta de empréstimo | Aleatório | Pouco espaço no elenco principal | Aceitar empréstimo / recusar e esperar | Minutos de jogo x segurança no clube grande |
| Primeiro salário alto | Fixo (se promovido) | — | Investir / ajudar a família / gastar | Financeiro, Família, Ego |
| Pressão do empresário por transferência | Condicional | Tem empresário + reputação alta | Seguir conselho / decidir sozinho | Financeiro, Reputação, Família |
| Dispensa aos 19/20 | Condicional | Atributos/potencial baixo, ou moral/reputação muito baixas | Buscar clube menor / tentar exterior alternativo / parar e estudar | Define se segue carreira ou migra pro "plano B" |

---

## Parte 6 — Fórmulas

Objetivo: fórmulas simples o bastante pra implementar, mas que conectem atributos, barras e sorte de um jeito que "faça sentido" pro jogador sentir que suas decisões importam.

Convenção: todo atributo e barra fica entre 0–100. Todo resultado de fórmula que vira "nota" também fica entre 0–100, salvo indicação contrária.

### 6.1 Desempenho em uma partida

O "Desempenho de Partida" (DP) decide como o atleta jogou naquele jogo específico — usado pra narrar o jogo, pra decidir se ele é notado por um olheiro, se sobe de moral, etc.

```
Base Técnica/Tática = média ponderada dos atributos relevantes pra posição
  (ex: atacante pesa mais Finalização/Drible; zagueiro pesa mais Marcação/Desarme)

Multiplicador de Forma = (Moral × 0.4 + Físico × 0.6) / 100
  → varia entre 0 e 1. Jogador cansado ou infeliz nunca joga no seu 100%.

Fator Mental = 1 + (Compostura - 50) / 200
  → em jogos de pressão (decisão, estreia, clássico), esse fator pesa mais forte.
  → jogador com Compostura alta rende MELHOR sob pressão; com Compostura baixa, pior.

Sorte = número aleatório entre -10 e +10
  → representa lance de sorte, erro de arbitragem, bola na trave, etc.

DP = (Base Técnica/Tática × Multiplicador de Forma × Fator Mental) + Sorte
```

Em jogos de **alta pressão** (final, clássico, estreia, jogo com olheiro grande presente), aplica-se o Fator Mental com peso dobrado — é aí que Compostura baixa "quebra" o jogador e Compostura alta o eleva.

### 6.2 Evolução de atributos (fim de temporada/fase)

```
Ganho Base = Taxa de Aprendizado da Idade × Ênfase escolhida
  (a Taxa de Aprendizado da Idade é maior pra técnico entre 10–16 anos,
   maior pra físico entre 15–19 anos — ver tabela 6.2.1 abaixo)

Multiplicador de Minutos = 0.5 + (Minutos jogados na temporada / Minutos possíveis) × 1.0
  → treinar sem jogar rende só metade do ganho possível; jogar bastante quase dobra o ganho.

Multiplicador de Ambiente = Moral / 100
  → jogador infeliz evolui mais devagar mesmo treinando igual.

Teto de Potencial = se o atributo já está próximo do Potencial Real do jogador,
  o ganho é reduzido progressivamente (retornos decrescentes).

Ganho Final = Ganho Base × Multiplicador de Minutos × Multiplicador de Ambiente
              × (1 - proximidade do teto)
```

**Tabela 6.2.1 — Taxa de Aprendizado por idade e tipo**

| Idade | Técnico | Físico | Tático | Mental |
|---|---|---|---|---|
| 10–12 | Alta | Baixa | Baixa | Média |
| 13–15 | Alta | Média | Média | Média |
| 16–17 | Média | Alta | Alta | Alta |
| 18–20 | Baixa | Alta | Alta | Alta |

Isso reforça uma ideia importante: **quem não desenvolveu bem o técnico na infância dificilmente vira um jogador de drible/passe refinado depois** — mas pode compensar em físico e tática mais tarde. É a base do arquétipo "jogador de raça" x "jogador de talento".

### 6.3 Risco de lesão

Calculado por evento (jogo ou treino intenso), não por temporada.

```
Risco Base = (100 - Físico atual) × 0.3

Fator Carga = se Minutos recentes > limite saudável da idade:
   Risco Base × 1.5 (overtraining)
   senão: Risco Base × 1.0

Fator Histórico = 1 + (número de lesões anteriores × 0.15)
  → corpo fica mais frágil a cada lesão, principalmente em ligamentos/músculos.

Chance de Lesão (%) = Risco Base × Fator Carga × Fator Histórico / 100
```

Se a "sorte" (número aleatório 0–100) cair abaixo da Chance de Lesão, o evento de lesão dispara — com gravidade sorteada (leve, moderada, grave) influenciada pelo mesmo Fator Carga.

### 6.4 Aprovação em peneira / avaliação / convocação

Usado sempre que um "avaliador" (olheiro, técnico, comissão da seleção) decide sobre o atleta.

```
Nota do Avaliador = Potencial Percebido × 0.5 + DP médio recente × 0.3
                     + Reputação × 0.1 + Sorte (-5 a +5) × 0.1

Corte da Peneira = nota mínima definida pelo clube/categoria (varia por nível de clube)

Aprovado se Nota do Avaliador ≥ Corte
```

O **Potencial Percebido** (não o real) é o que mais pesa — por isso um "fogo de palha" bem badalado pode passar na frente de uma "jóia escondida" discreta. É essa injustiça proposital que cria o drama do jogo.

### 6.5 Risco de dispensa (fim de temporada/fase)

```
Score de Permanência = DP médio da temporada × 0.35
                      + Evolução do atributo principal × 0.20
                      + Moral × 0.15
                      + Reputação × 0.15
                      + Relação com o técnico × 0.15

Se Score de Permanência < Corte do Clube (varia por categoria e tradição do clube):
  → Dispensado
Entre o Corte e Corte+15:
  → Zona de risco (evento de "última chance" na próxima temporada)
Acima de Corte+15:
  → Mantido / promovido
```

### 6.6 Contratos e propostas (Sub-15 em diante)

```
Valor de Mercado Estimado = Potencial Percebido × Reputação × fator idade
  (fator idade cresce até os 17–19 e depois começa a exigir desempenho real, não só potencial)

Interesse de Clube Externo (chance de aparecer proposta) sobe com:
  + Valor de Mercado Estimado alto
  + Boas atuações em competições nacionais/visibilidade alta
  + Empresário ativo (empresário "bom" aumenta as chances e a qualidade das propostas;
    empresário "aproveitador" aumenta a quantidade mas com contratos piores)
```

### 6.7 Resumo de como tudo se conecta

```
Atributos (técnico/físico/tático/mental)
        ↓ geram
Desempenho de Partida (6.1)
        ↓ alimenta
Reputação, Moral, Potencial Percebido
        ↓ alimentam
Avaliações/Peneiras (6.4), Risco de Dispensa (6.5), Propostas (6.6)
        ↓ decidem
Progresso na carreira (mantido, promovido, emprestado, dispensado)
        ↓ e ao mesmo tempo
Minutos jogados + Moral + Ambiente
        ↓ alimentam
Evolução de Atributos (6.2), fechando o ciclo pra próxima temporada

Físico + Carga de jogos/treino → Risco de Lesão (6.3), que pode interromper o ciclo a qualquer momento
```

---

## Parte 7 — Fase profissional

A base termina, o funil afunilou, e agora o jogador entra no elenco principal. Aqui o jogo deixa de ser só "desenvolver um atleta" e passa a ser "administrar uma carreira inteira" — com escolhas que moldam não só os atributos, mas o tipo de história que aquele jogador vai contar.

### 7.1 Sub-fases da carreira profissional

| Sub-fase | Idade aprox. | Foco |
|---|---|---|
| **Profissional jovem** | 20–24 | Provar valor, ganhar espaço, primeira grande decisão de carreira |
| **Auge** | 25–29 | Pico de atributos físicos/técnicos, maior valor de mercado, maiores oportunidades |
| **Veterano** | 30–34 | Declínio físico gerido com experiência, liderança, escolha de legado |
| **Reta final** | 35+ | Sobrevivência na elite, ou migração pra ligas menores, exterior "de passagem" ou aposentadoria |

O atleta não sabe exatamente quando o declínio físico vai bater — depende da curva de maturação (já definida na base) e de quanto ele cuidou do corpo. Cada temporada no Auge e no Veterano tem uma pequena chance crescente de início de declínio (ver 7.8).

### 7.2 Arquétipos de carreira (os "caminhos")

Esses não são escolhidos diretamente num menu — eles emergem das decisões e eventos ao longo do tempo, mas o jogo pode nomear o arquétipo do jogador em tempo real (tipo um "título" que vai mudando), pra dar feedback de "quem você está se tornando".

- **O Focado:** prioriza sempre desempenho, rotina, disciplina. Evolui devagar mas consistente, carreira longa, raramente vira manchete de escândalo. Risco: carreira "sem graça", pouca fama.
- **O que se perde:** talento alto, mas festas, mídia, ego ou más companhias corroem moral/saúde mental/físico. Pode ter picos de brilho seguidos de quedas.
- **A promessa que não vinga:** potencial real alto, mas uma combinação de lesões, clube errado, pressão ou falta de oportunidade trava o desenvolvimento. Fica marcado como "o que podia ter sido".
- **O desconhecido que vira estrela:** potencial percebido baixo na base (jóia escondida), sem mídia, sem contrato grande — mas com continuidade e sorte, os atributos reais aparecem tarde e ele estoura depois dos 23–25.
- **O eterno reserva:** atributos bons o bastante pra sempre ter um contrato, nunca bons o bastante (ou nunca na hora certa) pra ser titular absoluto. Carreira estável, mas sem protagonismo.
- **O mercenário:** troca de clube com frequência perseguindo salário, sem construir raízes ou ídolo em lugar nenhum. Financeiro sempre alto, Reputação de torcida sempre instável.
- **O ídolo de um clube só:** recusa propostas melhores para manter vínculo com um clube, vira símbolo, ganha eventos exclusivos de "lenda do clube", mas pode perder dinheiro e exposição internacional.
- **O capitão/líder:** investe pesado em Mental/Liderança, vira o pilar do vestiário e da seleção, tende a ter carreira mais longa e maior chance de virar técnico depois.
- **O frágil:** boa técnica, mas físico ruim ou histórico de lesões o persegue, carreira marcada por interrupções e "e se".
- **O internacional/globetrotter:** carreira construída em vários países, alta Reputação e Financeiro, mas Família e enraizamento sempre sob pressão.

O jogo pode combinar mais de um arquétipo ao mesmo tempo (ex: "Frágil + Ídolo de um clube só").

### 7.3 Decisões-chave por sub-fase

**Profissional jovem (20–24)**
- Brigar por titularidade no clube atual ou aceitar empréstimo pra ganhar ritmo em time menor
- Primeira grande transferência: aceitar (dinheiro, mais exposição, sair da zona de conforto) ou recusar (segurança, minutos garantidos)
- Aceitar virar "cara do time" cedo (pressão e holofote) ou crescer nos bastidores
- Primeiro patrocínio pessoal: aceitar exposição de marca ou manter perfil discreto
- Vida pessoal: casar/morar junto, ter filhos, manter a rotina de solteiro
- Primeira convocação pra seleção principal: aceitar todo jogo convocado (desgaste) ou pedir dispensa em algum ciclo (recuperação)

**Auge (25–29)**
- Escolher entre permanecer no clube que "fez ele" ou assinar com um clube maior/rico
- Ser o "camisa 10"/referência técnica ou o "trabalhador"/motor do time
- Investir em imagem e carreira fora de campo (empresário próprio, marca pessoal, redes sociais) ou manter foco 100% em campo
- Aceitar jogar machucado numa decisão importante ou preservar o corpo
- Escolher entre buscar títulos coletivos (mudar pra time favorito ao título) ou maximizar ganho financeiro (ligas mais ricas, ex. Oriente Médio/China/EUA)
- Vida pessoal em alta exposição: lidar com fama, imprensa, escândalos possíveis, filhos crescendo longe se mudar de país

**Veterano (30–34)**
- Aceitar papel de reserva/mentor num clube grande ou continuar titular em time menor
- Aceitar ida a liga "de aposentadoria" (mais fácil, bem pago, menos competitivo) ou insistir na elite
- Repassar experiência aos jovens (investe em Liderança, ajuda o clube a formar a próxima geração — importante se quiser virar técnico depois) ou focar só na própria performance
- Negociar contrato mais curto com bônus por desempenho ou contrato longo e estável
- Começar a se preparar pra pós-carreira (cursos de técnico, investimentos, aparições na mídia) ou aproveitar o presente sem pensar no futuro

**Reta final (35+)**
- Buscar uma "despedida" no clube do coração (ídolo) mesmo ganhando menos
- Aceitar ir pra uma liga menor/exterior "de passagem" só pelo dinheiro
- Jogo/temporada de despedida: decidir como quer ser lembrado (evento especial, se o Reputação permitir)
- Decidir o momento exato de parar: continuar mesmo em queda visível de nível (risco de reputação) ou parar no auge do respeito

### 7.4 Eventos da fase profissional (exemplos)

| Evento | Tipo | Gatilho | Escolhas | Efeito |
|---|---|---|---|---|
| Proposta de clube rival do mesmo país | Aleatório | Reputação/DP alto | Aceitar / recusar por lealdade | Financeiro, Reputação com torcida atual |
| Escândalo de vida pessoal (festa, traição, atraso) | Aleatório | Ego alto + Saúde mental baixa | Assumir e pedir desculpa / negar / sumir da mídia | Reputação, Moral, relação com torcida |
| Lesão grave no auge | Aleatório (chance por 6.3) | Físico baixo/overtraining/histórico | Cirurgia + reabilitação longa / voltar rápido pra não perder espaço | Físico, risco de carreira encurtada |
| Convite pra ser capitão | Condicional | Liderança + tempo de clube altos | Aceitar (mais pressão, mais Reputação) / recusar (menos holofote) | Mental, Reputação, abre caminho pra pós-carreira de técnico |
| Grande final/decisão | Fixo (se classificado) | — | Evento de alta pressão, usa Fator Mental dobrado (6.1) | Pode definir "momento icônico" ou "vexame" na carreira |
| Proposta bilionária de liga estrangeira "menos competitiva" | Aleatório | Idade 28+ e Financeiro relevante | Ir pelo dinheiro / recusar por competitividade/legado | Financeiro ↑↑, Reputação esportiva ↓ se for muito cedo |
| Conflito com técnico/diretoria | Aleatório | Ego alto ou reputação em queda | Confrontar publicamente / resolver internamente / pedir transferência | Reputação, relação com o clube |
| Convocação em fase de saúde mental fragilizada | Condicional | Saúde mental baixa | Aceitar e arriscar recaída / pedir pausa e ser criticado | Saúde mental, Reputação pública |
| Nascimento de filho / marco familiar | Fixo/aleatório | Vida pessoal ativa | Ajustar rotina pra família / manter ritmo de carreira | Família ↑, possível leve queda de foco |
| Início do declínio físico | Condicional (ver 7.8) | Idade + curva de maturação | Aceitar mudar de posição/função tática / negar e insistir no estilo antigo | Físico, evolução de atributos físicos passa a ser negativa |

### 7.5 Transferências e mercado

Usa a fórmula de Valor de Mercado (6.6), agora ponderada por idade real (pico entre 24–29) e por título/exposição internacional. Cada janela de transferência:

```
Chance de proposta = Valor de Mercado × Visibilidade da competição atual × (1 + Empresário)

Qualidade da proposta (financeiro, competitividade do clube, papel prometido)
  varia com Reputação e histórico de decisões do jogador
  (jogador "mercenário" atrai mais propostas só financeiras;
   jogador "ídolo"/"focado" atrai mais propostas de clubes grandes competitivos)
```

### 7.6 Seleção principal

- Convocações consomem Físico e geram Reputação/Prestígio extra
- Grandes torneios (Copa América, Eliminatórias, Copa do Mundo) são eventos fixos de calendário, com Fator Mental dobrado (6.1) nas fases decisivas
- Recusar convocação por desgaste é possível, mas custa Reputação com torcida/mídia
- Uma boa Copa do Mundo pode disparar o Valor de Mercado (6.6) instantaneamente — é o principal "evento de virada" pra quem quer virar estrela global

### 7.7 Vida pessoal e mídia

- Casamento, filhos e círculo social afetam Moral e Saúde mental de forma estável (bom ambiente = barra alta e resiliente)
- Redes sociais/mídia: cada aparição pública é uma escolha de baixo risco/baixo ganho (manter perfil discreto) ou alto risco/alto ganho (se expor, ganhar patrocínio, mas abrir brecha pra escândalo)
- Patrocínios pessoais aumentam Financeiro fora do salário, mas em geral pedem uma imagem "limpa" (Reputação mínima) pra serem renovados

### 7.8 Declínio físico e fim da carreira competitiva

```
A partir dos 28-30 anos (varia pela curva de maturação e pelo cuidado com o corpo):

Chance de Início de Declínio por temporada = base 5% aos 28,
  crescendo ~4% por ano, modificada por:
  + Histórico de lesões (aumenta)
  + Físico atual bem cuidado (reduz)
  + Overtraining acumulado na carreira (aumenta)

Quando dispara: atributos físicos passam a ter Ganho Final negativo (6.2 invertido)
  Técnico e Mental podem seguir estáveis ou até subir (experiência compensando física)
```

Esse é o ponto em que o jogo começa a empurrar naturalmente pra decisão de mudar de função tática (ex: atacante vira "9 de área" só de finalização, lateral vira zagueiro), aceitar papel de reserva, ou considerar a aposentadoria — abrindo a porta pra Parte 8.

---

### 7.9 Relação com elenco, técnico e torcida

Até agora, "Reputação" era uma barra única e genérica. Pra dar profundidade à vida no clube, ela se desdobra em **três relações distintas**, que evoluem separadamente e às vezes entram em conflito entre si (o jogador pode ser amado pela torcida e mal visto pelo técnico, por exemplo).

#### 7.9.1 Química de vestiário

Representa o quanto o jogador se dá bem com o elenco como um todo — não é uma amizade individual com cada colega, mas um "clima" coletivo que o afeta.

```
Química de Vestiário (0–100) sobe com:
  + Tempo de casa (cada temporada no clube soma pontos, com efeito de "raiz")
  + Bom resultado do time (vitórias unem o grupo)
  + Liderança/Mentoria (ajudar jovens da base, orientar reservas)
  + Eventos sociais superados junto (viagens, concentração, crises coletivas)

Química de Vestiário desce com:
  - Ego alto competindo por protagonismo com outro titular
  - Favoritismo percebido (jogador "queridinho" do técnico gera inveja alheia)
  - Brigas em treino, disputa por posição/pênalti/cobrança de falta
  - Diferenças salariais expostas na mídia
  - Chegada de "estrela" contratada que desestabiliza hierarquia
```

Química de Vestiário alta dá um pequeno bônus na fórmula de Desempenho de Partida (6.1) — jogar num time unido rende mais que a soma das partes. Química baixa cria risco de "grupos" (titulares x reservas, nacionais x estrangeiros, geração antiga x nova), que pode virar evento de crise interna.

#### 7.9.2 Confiança do técnico

Relação direta e pessoal com quem decide quem joga. Diferente da Química de Vestiário, essa é 1-pra-1 e reseta (parcialmente) toda vez que o clube troca de técnico.

```
Confiança do Técnico (0–100) sobe com:
  + DP consistentemente acima da média nos jogos que ele decide escalar
  + Obediência tática (seguir instruções mesmo discordando)
  + Apoio público em entrevistas, mesmo em fase ruim
  + Aceitar papéis não favoritos (jogar fora de posição, sacrifício tático)

Confiança do Técnico desce com:
  - Reclamar publicamente de escalação/tática
  - Ir direto à diretoria por cima do técnico
  - Indisciplina (atraso, postura em treino)
  - Ego alto ignorando instrução tática em campo (jogadas por conta própria)
```

Confiança do Técnico influencia diretamente:
- Minutos concedidos (mesmo com DP bom, Confiança baixa reduz chance de titularidade)
- Tolerância a uma fase de baixo desempenho antes de perder espaço
- Se o jogador é o primeiro cotado pra sair quando o técnico muda o sistema

Quando o clube troca de técnico, a Confiança reinicia numa faixa neutra (não zera — a Reputação/histórico do jogador pesa um pouco no primeiro julgamento do novo técnico), abrindo um mini-arco de "reconquistar o titular" a cada troca — um dos eventos mais recorrentes e tensos da carreira.

#### 7.9.3 Reputação com a torcida

Separada da Reputação "profissional" (que mede como o meio do futebol/mídia enxerga o jogador). A torcida valoriza coisas que nem sempre coincidem com desempenho puro.

```
Reputação com a Torcida (0–100) sobe com:
  + Entrega visível: esforço, raça, "disputar cada bola" (ligado ao atributo Resiliência)
  + Gols/atuações decisivas em clássicos e decisões
  + Recusar proposta de clube rival por lealdade
  + Gestos simbólicos (declarar amor ao clube, gesto de torcedor, vídeo/carta pública)
  + Tempo de casa e trajetória "de dentro" (ex: formado na base do próprio clube)

Reputação com a Torcida desce com:
  - Pedir transferência publicamente
  - Baixo desempenho em jogos grandes (mesmo com boa média geral)
  - Post polêmico, escândalo pessoal, falta de compromisso percebida
  - Comparação desfavorável com um ídolo do passado na mesma posição
```

Reputação com a Torcida alta protege o jogador em momentos de queda de forma (a torcida "compra a briga" por ele) e é pré-requisito pra eventos de "ídolo do clube" (Parte 7.2). Reputação com a Torcida baixa gera vaias, pressão nas redes sociais e pode empurrar Moral e Saúde mental pra baixo mais rápido que o normal.

#### 7.9.4 Papéis no vestiário

A cada temporada, dependendo de Liderança, Ego, Química de Vestiário e tempo de clube, o jogo pode atribuir (ou permitir escolher, em certos eventos) um papel informal, que abre eventos exclusivos:

- **Líder/Capitão:** medeia conflitos, é ouvido pela diretoria, ganha bônus de Química de Vestiário pro time todo quando presente
- **Mentor:** adota um jovem da base como "afilhado", acelera a evolução dele e ganha Reputação/Liderança em troca
- **Encrenqueiro:** Ego alto + Saúde mental instável, gera eventos de conflito recorrentes, mas às vezes rende performances "raivosas" acima da média
- **Isolado:** baixa Química de Vestiário por escolha própria (foco total, introversão), evolui normalmente mas fica de fora de eventos de grupo e tem menos defesa em momentos de crise coletiva
- **Mediador silencioso:** Liderança alta mas Ego baixo, sobe Química de Vestiário sem virar o "dono" do vestiário

#### 7.9.5 Eventos

| Evento | Tipo | Gatilho | Escolhas | Efeito |
|---|---|---|---|---|
| Disputa por cobrança de pênalti/falta | Aleatório | Dois jogadores de Ego alto no elenco | Ceder / insistir no direito / deixar o técnico decidir | Química de Vestiário, Confiança do Técnico |
| Chegada de "estrela" contratada na mesma posição | Fixo (evento de janela) | Clube contrata rival direto | Competir abertamente / se adaptar de posição / pedir transferência | Química, Confiança do Técnico, abre arco de disputa |
| Técnico troca o sistema tático e o jogador não se encaixa | Condicional | Novo técnico + atributos fora do perfil pedido | Se adaptar (perde um pouco de identidade) / resistir (arrisca banco) | Confiança do Técnico, Evolução de atributos |
| Vaia da torcida em jogo em casa | Condicional | Reputação com a Torcida baixa + DP ruim recente | Responder com discurso / se isolar / pedir apoio ao capitão | Saúde mental, Reputação com a Torcida |
| Gesto de lealdade (recusar proposta grande) | Aleatório | Reputação com a Torcida moderada/alta + proposta externa | Recusar publicamente / recusar em silêncio / aceitar mesmo assim | Reputação com a Torcida ↑↑ se recusar; Financeiro perdido |
| Grupo dividido no vestiário (geração antiga x nova) | Condicional | Química de Vestiário baixa por tempo prolongado | Tentar unir o grupo / ficar neutro / escolher um lado | Química de Vestiário, Liderança |
| Comparação pública com ídolo antigo na mesma posição | Aleatório | Jogador joga na posição de um ídolo do clube | Abraçar a comparação / pedir pra torcida ter paciência / ignorar | Reputação com a Torcida, pressão mental |
| Técnico demitido, chegada de novo comando | Fixo (recorrente) | Mudança de técnico | — (narrativo, reinicia Confiança do Técnico em faixa neutra) | Confiança do Técnico reset parcial |
| Jovem da base pede conselho/mentoria | Condicional | Liderança alta + jogador tem tempo de casa | Aceitar ser mentor / focar só na própria carreira | Liderança, Reputação, acelera evolução do jovem |

#### 7.9.6 Como isso entra nas fórmulas já existentes

```
Desempenho de Partida (6.1) ganha um termo opcional:

DP = (Base Técnica/Tática × Multiplicador de Forma × Fator Mental)
     + Sorte
     + Bônus de Química = (Química de Vestiário - 50) / 100 × peso pequeno (ex: até ±5 pontos)

Risco de Dispensa/Venda (adaptado da 6.5 pra fase profissional):

Score de Permanência = DP médio × 0.30
                      + Confiança do Técnico × 0.25
                      + Reputação com a Torcida × 0.20
                      + Valor de Mercado relativo ao elenco × 0.15
                      + Química de Vestiário × 0.10
```

Ou seja: um jogador pode ter atributos ótimos e ainda assim perder espaço só por Confiança do Técnico baixa — e um jogador tecnicamente mediano pode sobreviver mais tempo num clube puxado pela Reputação com a Torcida. É essa tensão que gera as histórias mais interessantes (ex: ídolo que o técnico não quer, mas a torcida não deixa vender).

---

### 7.10 Negociação de contrato e empresário

#### 7.10.1 Perfis de empresário

Cada empresário tem 4 atributos próprios (0–100), visíveis ao jogador depois de contratá-lo (antes, só parcialmente, via reputação de mercado do empresário):

- **Rede de Contatos:** quantas e quão boas são as propostas que ele traz
- **Habilidade de Negociação:** quanto ele consegue melhorar uma proposta em cima da oferta inicial do clube
- **Ética:** quão alinhado ele está com o interesse do jogador x o próprio bolso
- **Taxa de Comissão:** % que ele cobra em cima de salário/luvas/transferência

**Arquétipos de empresário** (combinações típicas desses 4 atributos):
| Tipo | Perfil | Risco/Benefício |
|---|---|---|
| Profissional consolidado | Contatos e Negociação altos, Ética alta, Comissão justa | Propostas melhores e mais seguras, mas exige jogador "relevante" pra aceitar |
| Agressivo/tubarão | Negociação altíssima, Ética baixa, Comissão alta | Consegue contratos gordos rápido, mas empurra transferências que não são as melhores pro jogador (por comissão maior) |
| Novato/família | Contatos e Negociação baixos, Ética alta (geralmente é alguém de confiança, tipo um parente) | Propostas escassas e piores, mas o jogador não é "usado" |
| Golpista | Todos os atributos escondidos ruins disfarçados de bons no discurso | Pode sumir com dinheiro, assinar cláusulas ruins escondidas, evento de golpe possível |

Trocar de empresário é possível, mas gera custo de Reputação (mídia questiona lealdade) e pode ter multa de rescisão do contrato de representação.

#### 7.10.2 Estrutura de um contrato

Cada contrato negociado (seja com o clube atual, renovação, ou transferência) é composto por:

- **Salário-base** (mensal/anual)
- **Luvas** (bônus fixo de assinatura)
- **Bônus por desempenho** (gols, assistências, jogos, títulos — paga em cima de metas)
- **Duração** (anos)
- **Cláusula de rescisão/multa** (valor que outro clube paga pra "comprar" o jogador sem negociar com o clube)
- **% de direitos de imagem** (quanto o jogador retém de patrocínios pessoais vs o clube)
- **Cláusulas especiais:** gatilho de renovação automática por metas batidas, cláusula de venda obrigatória se proposta X aparecer, cláusula anti-rebaixamento (permite sair de graça se o clube cair de divisão)

#### 7.10.3 Mecânica de negociação

```
Poder de Barganha do Jogador = Valor de Mercado (6.6) × 0.4
                              + (1 - Anos restantes de contrato / Duração original) × 0.3
                              + Confiança do Técnico × 0.15
                              + Reputação com a Torcida × 0.15

Proposta Inicial do Clube = função do orçamento do clube × Poder de Barganha (mais baixa que o "justo")

Cada rodada de negociação:
  Melhoria da Proposta = Habilidade de Negociação do Empresário × fator de paciência
  (jogador pode aceitar, pedir mais uma rodada, ou recusar e sair pra outro clube)

Risco de "esfriar": se o jogador demora demais pra decidir,
  Poder de Barganha cai com o tempo (o clube sente que ele não tem alternativa imediata)
```

**Situação de fim de contrato (jogador livre/"Bosman"):** se o contrato chega perto do fim sem renovação, o Poder de Barganha do jogador dispara (não há multa a pagar), mas o clube atual perde valor de venda — vira um evento de tensão entre jogador/empresário e diretoria.

#### 7.10.4 Eventos

| Evento | Tipo | Gatilho | Escolhas | Efeito |
|---|---|---|---|---|
| Empresário traz proposta "boa demais" | Condicional | Empresário tipo agressivo/golpista | Investigar mais / confiar e assinar | Risco de cláusula ruim escondida |
| Clube atrasa/enrola renovação | Aleatório | Contrato entrando no último ano | Pressionar publicamente / esperar / pedir pra sair | Reputação com a Torcida, Poder de Barganha |
| Golpe do empresário (sumiu com comissão de imagem) | Raro/condicional | Empresário tipo golpista | Processar / deixar quieto / trocar de empresário | Financeiro, Reputação, precisa trocar de empresário |
| Família quer interferir na negociação | Condicional | Empresário tipo "família" ou Família alta | Ouvir a família / seguir o empresário | Família, qualidade da proposta |
| Cláusula de rescisão acionada por clube rico | Aleatório | Valor de Mercado alto + cláusula baixa | Aceitar sair / torcer pro clube recusar (se cláusula pertence ao clube) | Muda clube, Financeiro, Reputação com a Torcida atual |

---

### 7.11 Lesões e saúde

#### 7.11.1 Tipos de lesão

| Tipo | Gravidade típica | Tempo afastado | Risco de recidiva |
|---|---|---|---|
| Muscular (estiramento, distensão) | Leve a moderada | 1–6 semanas | Médio se voltar cedo |
| Tendão (tendinite, ruptura parcial) | Moderada | 1–3 meses | Alto, tende a virar crônica |
| Ligamentar (ligamento cruzado, tornozelo grave) | Grave | 6–9 meses + cirurgia | Baixo se reabilitação completa, alto se apressada |
| Óssea (fratura) | Grave | 2–4 meses | Baixo após consolidação |
| Concussão/traumatismo | Variável | Dias a semanas | Protocolo à parte (retorno controlado por Saúde mental) |
| Desgaste articular (crônica de veterano) | Progressiva | Sem afastamento único, mas reduz Físico permanentemente | Cumulativa, não "cura", só se administra |

#### 7.11.2 Gravidade e recuperação

```
(Retomando e expandindo 6.3)

Gravidade sorteada = função de:
  Fator Carga (overtraining) × 0.4
  + Fator Histórico (lesões anteriores no mesmo tipo) × 0.4
  + Sorte × 0.2

Tempo de Recuperação = tempo-base do tipo de lesão
  × (1 - Qualidade do Departamento Médico do clube × 0.3)
  → clubes grandes recuperam o atleta mais rápido/melhor que clubes pequenos

Chance de Recidiva ao voltar antes do tempo recomendado = alta e cresce
  proporcionalmente aos dias "cortados" da recuperação

Chance de Perda Permanente de Atributo Físico (só em lesões graves/crônicas) =
  base baixa, mas cresce com:
  + Idade do jogador no momento da lesão (pior depois dos 28-30)
  + Número de lesões graves anteriores
  + Recuperação apressada
```

Uma lesão grave pode, portanto, **subtrair permanentemente** um pouco do teto de Físico do jogador (não só atrasar a temporada) — isso é o que transforma uma lesão de "evento ruim temporário" em "ponto de virada real da carreira" (ex: um "Frágil" que nunca mais foi o mesmo depois dos 26 anos).

#### 7.11.3 Impacto psicológico

- Lesão grave reduz Saúde mental imediatamente, e o retorno aos jogos tem uma fase de "readaptação" onde o Fator Mental (6.1) sofre um desconto temporário — o jogador volta com medo de disputar bola, evitando contato
- Compostura alta reduz esse desconto; Resiliência alta acelera a recuperação da Saúde mental depois do retorno
- Um evento pode surgir oferecendo acompanhamento psicológico — aceitar acelera a recuperação de Saúde mental, mas em clubes/culturas onde isso é estigmatizado (varia por país/época), pode gerar pressão de imagem se vazar pra mídia

#### 7.11.4 Conflito clube x seleção

Quando o jogador se machuca durante um período de convocação (ou é convocado logo após lesão), abre-se evento de tensão: o clube "culpa" a seleção pelo desgaste, a torcida cobra o técnico da seleção, e o Poder de Barganha/Confiança do Técnico do clube pode ser afetado dependendo de como o jogador reagiu (pediu dispensa? insistiu em jogar?).

#### 7.11.5 Eventos

| Evento | Tipo | Gatilho | Escolhas | Efeito |
|---|---|---|---|---|
| Lesão em jogo decisivo | Aleatório (chance via 6.3) | — | Sair imediatamente / insistir em continuar jogando | Gravidade pode aumentar se insistir |
| Pressão do clube pra antecipar retorno | Condicional | Jogo importante próximo + jogador em recuperação | Antecipar retorno / respeitar o prazo médico | Risco de recidiva, Confiança do Técnico |
| Diagnóstico de lesão crônica | Condicional | Múltiplas recidivas do mesmo tipo | Mudar rotina de treino/estilo de jogo / negar o problema | Físico de longo prazo, Carreira |
| Cirurgia com complicação | Raro | Lesão grave | — (narrativo, aumenta tempo de recuperação) | Físico, Saúde mental |
| Retorno emocionado do jogador após lesão grave | Fixo (se aplicável) | Volta de lesão longa | Jogar com cautela / ir com tudo pra provar que está recuperado | Saúde mental, risco de nova lesão |

---

### 7.12 Fama, mídia e patrocínios

#### 7.12.1 Perfil de mídia

Uma escolha/tendência que o jogador cultiva ao longo da carreira, com trade-offs claros:

| Perfil | Características | Ganho | Risco |
|---|---|---|---|
| **Discreto** | Poucas entrevistas, redes sociais reservadas | Saúde mental mais protegida, menos escândalo | Menos patrocínio, menos Reputação de mídia |
| **Equilibrado** | Presença controlada, imagem cuidada | Bom meio-termo | Nenhum destaque especial |
| **Holofote** | Muito ativo em mídia/redes, marca pessoal forte | Financeiro (patrocínio) e Reputação altos, mais rápido | Ego sobe mais fácil, Saúde mental mais exposta, escândalo pesa mais quando acontece |

#### 7.12.2 Seguidores/audiência (estatística própria)

```
Audiência (seguidores/alcance) cresce com:
  + DP alto em jogos de alta visibilidade
  + Gols/momentos virais
  + Perfil de mídia "Holofote"
  + Títulos e presença em seleção

Audiência decai lentamente se o jogador fica muito tempo sem aparecer/jogar bem
```

Audiência é a base pro **Valor de Marca Pessoal**, separado do Valor de Mercado esportivo (6.6) — um jogador pode ter Valor de Mercado esportivo médio mas Valor de Marca alto (carisma, viral, visual) e vice-versa (um "matador" discreto que não rende patrocínio proporcional ao talento).

#### 7.12.3 Patrocínios

```
Chance/Qualidade de proposta de patrocínio = 
  Audiência × 0.4 + Reputação (profissional + torcida, média) × 0.3
  + Mercado do país/clube atual × 0.3

Patrocínios têm cláusula implícita de "imagem limpa":
  se Reputação cair abaixo de um limite, contrato pode ser suspenso/cancelado
```

Patrocínios pessoais entram como fonte de Financeiro separada do salário — importante pra jogadores tipo "Ídolo de um clube só" que abrem mão de salário mais alto em outro clube, mas mantêm patrocínio pessoal robusto por causa da audiência.

#### 7.12.4 Entrevistas e coletivas (evento recorrente)

A cada poucos jogos (ou após momentos marcantes — gol decisivo, expulsão, lesão, polêmica), o jogo pode abrir uma "mini-decisão" de entrevista com opções de tom:

- **Diplomático:** resposta segura, sem impacto grande em nenhuma barra
- **Sincero/emocional:** pode render conexão forte com a torcida (Reputação com a Torcida ↑) ou reação negativa se o conteúdo for polêmico
- **Provocador/confiante:** pode virar meme/viral (Audiência ↑), mas incomoda adversários/imprensa (risco de rivalidade ou cobrança extra depois)
- **Evasivo/curto:** protege de risco, mas mídia pode narrar como "arrogante" ou "escondendo algo"

#### 7.12.5 Escândalos e gestão de crise

```
Chance de Escândalo por temporada = função de:
  Ego × 0.3 + (100 - Saúde mental) × 0.3 + Perfil de mídia "Holofote" × 0.2 + Sorte × 0.2

Ao disparar, evento de crise oferece resposta:
  - Assumir e pedir desculpa publicamente → dano menor, recuperação mais rápida
  - Negar (se for mentira, risco de "cair a máscara" depois e dano dobrado)
  - Sumir da mídia → dano meio-termo, mas prolongado
```

#### 7.12.6 Eventos

| Evento | Tipo | Gatilho | Escolhas | Efeito |
|---|---|---|---|---|
| Convite pra campanha publicitária grande | Aleatório | Audiência/Reputação altas | Aceitar (tempo/exposição) / recusar (foco no campo) | Financeiro, Moral (cansaço se aceitar demais) |
| Momento viral espontâneo (gesto, comemoração, fala) | Aleatório | DP alto ou evento social | Aproveitar e reforçar / deixar passar | Audiência, Ego |
| Vazamento de mensagem/áudio polêmico | Raro | Ego alto ou Saúde mental baixa | Confirmar e explicar / negar autenticidade | Reputação, Reputação com a Torcida |
| Comparação/rivalidade midiática com outro jogador famoso | Aleatório | Ambos com Audiência alta | Alimentar a rivalidade (audiência) / desconversar | Audiência, Ego, pressão extra em confrontos diretos |
| Documentário/perfil especial sobre a carreira | Condicional | Audiência alta + carreira longa | Participar e se expor / manter perfil fechado | Reputação, Audiência, prepara legado pra pós-carreira |

---

### 7.13 Vida financeira e legado

#### 7.13.1 Patrimônio como sistema próprio

A barra "Financeiro" da família vista na base evolui, na fase profissional, para um **Patrimônio Líquido** numérico de verdade — o jogo passa a rastrear dinheiro como um recurso administrável, não só uma barra de 0–100.

```
Patrimônio Líquido = acumulado de temporadas anteriores
  + Renda da temporada (salário líquido + luvas + bônus + patrocínios)
  - Gastos (sustento da família, consumo, investimentos malsucedidos)
  - Impostos (variam por país/liga em que o jogador atua)
  +/- Resultado de investimentos
```

#### 7.13.2 Renda x impostos

Cada país/liga tem uma alíquota efetiva diferente (simplificação: "carga tributária" de 0 a 100, mais alta em ligas europeias tradicionais, mais baixa em alguns destinos "fiscalmente amigáveis"). Isso vira parte da decisão de transferência: um contrato nominalmente menor em país de imposto baixo pode render mais líquido que um contrato maior em país de imposto alto.

#### 7.13.3 Gestor financeiro

Separado do empresário esportivo — cuida do dinheiro, não da carreira. Mesma lógica de arquétipos do 7.10.1 (profissional, agressivo, novato/família, golpista), mas aplicada a investimentos:

```
Resultado de Investimento = Capital investido × Retorno esperado do tipo de ativo
  × Habilidade do Gestor × (1 - Risco do ativo) + Sorte

Tipos de ativo (exemplos): imóveis (retorno baixo, risco baixo),
  negócio próprio/franquia (retorno médio, risco médio, exige atenção do jogador),
  ações/fundos (retorno variável, risco médio),
  "aposta" (negócio de amigo, criptoativo, retorno alto ou perda total, risco altíssimo)
```

Não ter gestor (ou ter um golpista) é o gatilho clássico da história real de "ex-jogador que faliu": dinheiro gasto em consumo, negócios ruins assinados por confiança cega, sumiço de fundo com o gestor.

#### 7.13.4 Decisões

- Quanto sustentar a família estendida (pais, irmãos, primos que passam a depender do jogador)
- Comprar imóveis/carros de consumo ou reinvestir
- Abrir negócio próprio (loja, academia, restaurante — exige tempo/atenção, pode virar caminho de pós-carreira como empresário)
- Contratar (ou trocar) gestor financeiro
- Guardar reserva pro pós-carreira ou viver o presente com o salário alto

#### 7.13.5 Legado financeiro e o gatilho da aposentadoria

O Patrimônio Líquido no momento da aposentadoria é um dos fatores que **abre ou fecha portas** na Parte 8 (pós-carreira): comprar um clube exige capital alto; virar empresário exige rede de contatos + algum capital; virar comentarista/técnico não depende de dinheiro, só de reputação/conhecimento — então um jogador "que se perdeu" financeiramente ainda pode ter uma segunda vida digna se cuidou da Reputação, mas fica fora das opções que exigem capital.

#### 7.13.6 Eventos

| Evento | Tipo | Gatilho | Escolhas | Efeito |
|---|---|---|---|---|
| Gestor sumiu com o dinheiro | Raro | Gestor golpista | Processar / aceitar o prejuízo | Patrimônio ↓↓, Saúde mental |
| Negócio próprio decolando | Aleatório | Negócio aberto + atenção dada | Reinvestir no negócio / retirar lucro | Patrimônio ↑, abre caminho de "empresário" pós-carreira |
| Parente pede ajuda financeira grande | Aleatório | Família com dependência financeira | Ajudar integralmente / ajudar em parte / negar | Família, Patrimônio |
| Investimento perde tudo | Aleatório | Ativo de alto risco | — (narrativo) | Patrimônio ↓↓, Saúde mental |
| Imóvel valoriza muito | Aleatório | Investimento em imóveis | Vender com lucro / manter | Patrimônio ↑ |

---

### 7.14 Títulos, prêmios e estatísticas

#### 7.14.1 Estatísticas de carreira

O jogo mantém um "cartão de carreira" acumulado ao longo de toda a vida profissional:

- Jogos, gols, assistências (totais e por clube/seleção/competição)
- Títulos por competição (estadual, nacional, continental, mundial de clubes, seleção)
- Prêmios individuais recebidos (ver abaixo)
- Recordes pessoais (artilheiro de uma edição, sequência de jogos, etc.)

#### 7.14.2 Prêmios individuais

```
Chance de indicação a prêmio (artilheiro, melhor da posição, prêmio máximo individual)
  = DP médio da temporada × 0.35
  + Sucesso coletivo do time (títulos) × 0.30
  + Audiência/Reputação global × 0.20
  + Estatísticas objetivas (gols/assistências na posição) × 0.15
```

Prêmios individuais dão um salto de Audiência e Valor de Mercado, e entram como marco fixo no "cartão de carreira" — visualmente, o jogo pode mostrar uma prateleira de troféus que cresce.

#### 7.14.3 Recordes e marcos

Eventos fixos disparam quando o jogador se aproxima/bate marcos importantes (artilheiro histórico do clube, centésimo jogo pela seleção, etc.) — são momentos de celebração que dão Reputação com a Torcida e abrem falas de mídia/entrevista especiais (ligado à Parte 7.12).

#### 7.14.4 Legado

```
Score de Legado (usado no fim da carreira e na pós-aposentadoria) =
  Títulos coletivos × peso alto
  + Prêmios individuais × peso médio-alto
  + Recordes/marcos × peso médio
  + Reputação com a Torcida acumulada × peso médio
  + Tempo de clube único (se aplicável, "ídolo") × peso pequeno-médio
```

Esse Score de Legado é um dos fatores centrais pra decidir o que abre na Parte 8 (convite pra trabalhar de comentarista famoso, cargo de embaixador do clube, estátua, museu, hall da fama).

---

### 7.15 Adaptação no exterior

#### 7.15.1 Estatística de adaptação

Toda vez que o jogador se transfere pra um país onde nunca jogou, ganha uma barra temporária **Adaptação (0–100)**, começando baixa (10–30, dependendo de fatores abaixo) e subindo aos poucos.

```
Adaptação inicial = 20 + bônus de:
  + Idioma já falado (ex: veio de país de língua espanhola pra outro país de língua espanhola)
  + Já ter morado fora antes (experiência prévia de adaptação)
  + Ter colegas do mesmo país no elenco de destino
  + Perfil mental (Resiliência alta ajuda a adaptação)

Crescimento por temporada = base + Resiliência/10 + (colegas do mesmo país no elenco)
```

Enquanto Adaptação está baixa, aplica-se um desconto temporário no Multiplicador de Forma (6.1) — o jogador rende abaixo do seu nível real nos primeiros meses/temporada, mesmo com atributos intactos, refletindo o clássico "tempo de adaptação" de jogadores que vão pro exterior.

#### 7.15.2 Decisões

- Levar a família junto ou deixá-la no país de origem por um tempo
- Investir tempo em aprender o idioma ou se virar só com o básico/tradutor
- Morar perto de outros compatriotas (adapta mais rápido, mas isola menos da cultura local) ou se imergir totalmente na cultura local
- Manter costumes de casa (comida, rotina) ou se adaptar 100% ao novo país

#### 7.15.3 Eventos

| Evento | Tipo | Gatilho | Escolhas | Efeito |
|---|---|---|---|---|
| Dificuldade de comunicação com o técnico/elenco | Condicional | Adaptação baixa | Usar tradutor / se esforçar sozinho | Confiança do Técnico, Química de Vestiário |
| Episódio de xenofobia/preconceito | Aleatório | Contexto do país de destino | Responder publicamente / ignorar / buscar apoio do clube | Reputação com a Torcida, Saúde mental |
| Saudade forte de casa | Condicional | Família longe + Adaptação baixa prolongada | Trazer a família / visitar o país de origem / aguentar firme | Família, Saúde mental, Moral |
| Grupo de compatriotas no elenco acolhe o jogador | Aleatório | Colegas do mesmo país presentes | — (narrativo positivo) | Adaptação ↑, Química de Vestiário |
| Domínio do idioma reconhecido pela torcida local | Condicional | Adaptação alta + tempo no país | — (evento de celebração) | Reputação com a Torcida ↑↑ |

---

### 7.16 Rivalidades e confrontos diretos

#### 7.16.1 Tipos de rivalidade

- **Rivalidade de clube (clássico):** ligada ao próprio clube, existe independente do jogador, mas ele pode se tornar protagonista dela
- **Rivalidade de posição/prêmio:** outro jogador de destaque na mesma posição/geração, disputando os mesmos prêmios e vaga na seleção
- **Rivalidade pessoal:** nasce de eventos específicos (provocação em entrevista, lance polêmico em campo, transferência "traindo" um clube pra ir ao rival)

#### 7.16.2 Mecânica

```
Intensidade da Rivalidade (0–100) sobe com:
  + Confrontos diretos de alto nível (decisões, clássicos)
  + Provocações na mídia (ligado às escolhas de entrevista, 7.12.4)
  + Disputa direta por prêmio individual/vaga na seleção
  + Transferência de um pro time do outro

Em jogos contra um rival de Intensidade alta:
  Fator Mental (6.1) passa a ter peso TRIPLICADO (em vez de dobrado como em pressão comum)
  → Compostura alta = jogador "cresce" contra o rival
  → Compostura baixa = jogador historicamente "trava" contra aquele nome
```

Isso cria narrativas emergentes tipo "nunca fez gol de decisão contra o Fulano" ou "sempre decide contra o arquirrival".

#### 7.16.3 Eventos

| Evento | Tipo | Gatilho | Escolhas | Efeito |
|---|---|---|---|---|
| Provocação pública do rival | Aleatório | Rivalidade ativa + rival com Perfil "Holofote" | Revidar na mídia / ignorar / responder em campo | Intensidade da Rivalidade, Ego, Audiência |
| Disputa direta por prêmio individual | Fixo (fim de temporada) | Ambos indicados | — (narrativo, decide quem leva o prêmio) | Reputação, Intensidade da Rivalidade |
| Transferência pro clube rival do antigo clube | Aleatório | Proposta do rival direto | Aceitar (Financeiro, mas Reputação com Torcida antiga desaba) / recusar | Reputação com a Torcida (dividida entre torcidas), Financeiro |
| Reconciliação/respeito mútuo no fim de carreira | Condicional | Rivalidade longa + ambos em fase de veterano | Fazer as pazes publicamente / manter distância até o fim | Reputação, fecha o "arco narrativo" da rivalidade |

---

### 7.17 Família, filhos, pais e amigos

A barra única "Família" da base se desdobra, na fase profissional, em relações distintas — cada uma com sua própria lógica, já que a vida agora é mais complexa (dinheiro, fama, mudanças de país).

#### 7.17.1 Pais

```
Relação com os Pais (0–100) sobe com:
  + Visitas, ligações, incluí-los nas decisões
  + Sustento financeiro quando necessário
  + Convites pra jogos/viagens

Relação com os Pais desce com:
  - Distanciamento por causa da fama/rotina
  - Conflito sobre dinheiro (pais que acham que "merecem mais")
  - Conflito sobre decisões de carreira (pais que querem interferir demais)
```

Evento recorrente: **saúde dos pais envelhecendo** — pode gerar decisão de trazer os pais pra morar perto, ou dilema entre ficar no exterior e estar perto num momento de doença.

#### 7.17.2 Cônjuge/parceiro(a)

```
Estabilidade do Relacionamento (0–100) sobe com:
  + Tempo de qualidade, incluir o parceiro nas decisões de mudança
  + Sucesso e estabilidade emocional do jogador

Estabilidade do Relacionamento desce com:
  - Excesso de viagens/mudanças sem diálogo
  - Escândalo pessoal (ligado a 7.12.5)
  - Priorizar carreira sistematicamente acima da relação
```

Relacionamento instável pode gerar evento de separação — com impacto real em Moral, Saúde mental e até Foco (queda temporária de evolução de atributos, 6.2). Relacionamento estável e de longa data pode virar parte do "Legado" (Score de Legado, 7.14.4) como parte da narrativa pessoal do jogador.

#### 7.17.3 Filhos

- Ter filhos é uma decisão com timing (impacta menos a carreira se acontecer no Veterano do que no Profissional Jovem, mas dá menos anos de convivência antes da aposentadoria)
- Decisão recorrente: levar a família em toda mudança de país/clube ou manter uma "base fixa" pras crianças
- Evento de longo prazo: um filho pode mostrar interesse e talento pelo futebol — abrindo, bem mais à frente, a possibilidade narrativa de "legado familiar" (mesmo fora do escopo principal do jogo, pode virar epílogo/DLC narrativo)

#### 7.17.4 Amigos de infância

```
Relação com Amigos de Infância desce naturalmente com o tempo/distância,
  mas pode ser mantida ativamente (visitas, convites, inclusão na vida nova)

Risco: "amigos interesseiros" — aleatório, cresce com Financeiro alto,
  evento onde um amigo pede empréstimo grande ou se aproveita da fama
```

Manter esse círculo alto tende a proteger Saúde mental e Moral (rede de apoio "de verdade", fora da bolha do futebol), mas exige tempo — que compete diretamente com tempo dedicado à carreira/família nova.

#### 7.17.5 Eventos (consolidado das relações pessoais)

| Evento | Tipo | Gatilho | Escolhas | Efeito |
|---|---|---|---|---|
| Pai/mãe adoece | Aleatório | Idade avançada dos pais | Pausar carreira temporariamente / equilibrar à distância / trazer pra perto | Relação com os Pais, Saúde mental, possível impacto em Moral/Foco |
| Pedido de casamento/decisão de constituir família | Fixo (narrativo, por escolha) | — | Priorizar agora / adiar pela carreira | Estabilidade do Relacionamento, timing de filhos |
| Crise no relacionamento por excesso de ausência | Condicional | Estabilidade baixa + muitas viagens/mudanças | Se dedicar mais / aceitar o desgaste / separar | Moral, Saúde mental, Foco temporário |
| Amigo de infância pede empréstimo alto | Aleatório | Financeiro alto + Amigos ativos | Emprestar / recusar / ajudar parcialmente | Amigos de Infância, Patrimônio |
| Filho demonstra interesse pelo futebol | Aleatório (tardio na carreira) | Filhos presentes + jogador em fase Veterano+ | Incentivar ativamente / deixar livre, sem pressão | Relação com Filhos, gancho narrativo de legado |

---

## Parte 8 — Vida pós-aposentadoria

Esse é o fechamento do ciclo completo do jogo: da escolinha aos 10 anos até a segunda vida depois de pendurar as chuteiras. A ideia central é que **nada aqui é escolhido do zero** — o caminho que se abre (e o quão bem ele começa) é consequência direta de decisões tomadas a vida inteira: Score de Legado, Patrimônio, Liderança, Reputação, rede de contatos do empresário, e até o "arquétipo" que o jogador construiu (Parte 7.2).

### 8.1 O momento da aposentadoria

A aposentadoria pode ser:
- **Escolhida pelo jogador**, a qualquer momento depois dos ~32 anos, geralmente empurrada pelo declínio físico (7.8) ou vontade de mudar de vida
- **Forçada**, quando o desempenho cai tanto e nenhum clube oferece contrato (fim de carreira "sem escolha")
- **Antecipada**, em casos raros de lesão gravíssima que encerra a carreira mais cedo (evento dramático específico)

```
Qualidade da Despedida = Reputação com a Torcida × 0.35
                        + Score de Legado × 0.35
                        + Forma como o anúncio foi feito (evento de escolha) × 0.30
```

Uma "Qualidade da Despedida" alta libera eventos especiais: jogo de despedida no estádio cheio, homenagem antes de uma partida do clube do coração, camisa aposentada, cerimônia com ex-companheiros. Uma aposentadoria "forçada" ou mal gerida (declínio negado, saída de time em time menor até sumir) tem despedida discreta ou nenhuma.

### 8.2 Requisitos que abrem cada caminho

Cada caminho de pós-carreira tem "portões de entrada" — não são obrigatórios no sentido de bloquear totalmente, mas determinam se o jogador começa a segunda vida em vantagem, do zero, ou com dificuldade extra.

| Caminho | Requisito ideal | Sem o requisito |
|---|---|---|
| Técnico | Liderança alta, tempo dedicado a mentoria (7.9.4), cursos feitos ainda na Veterano | Começa em categorias mais baixas, sem crédito de "ex-jogador renomado" |
| Auxiliar/comissão técnica | Confiança do Técnico historicamente alta com algum treinador específico | Precisa construir rede do zero |
| Comentarista/mídia | Audiência alta, Perfil de mídia "Holofote" ou "Equilibrado", boa relação com a imprensa | Entra em veículos menores, audiência inicial baixa |
| Empresário (agente) | Rede de contatos (herdada do próprio empresário, se a relação foi boa) + algum capital | Começa representando poucos jogadores desconhecidos |
| Dono/dirigente de clube | Patrimônio Líquido alto (7.13) + Reputação/Legado | Só entra em clube pequeno, ou não entra |
| Outros (ver 8.8) | Variam por caminho | — |

### 8.3 Caminho: Técnico

Uma segunda carreira inteira, com progressão própria — categorias de base → equipe pequena → equipe grande → seleção, espelhando (de forma mais compacta) o funil que o próprio jogador viveu.

**Novos atributos do técnico** (0–100): Conhecimento Tático, Gestão de Elenco, Didática (desenvolver jovens), Resistência à Pressão, Rede de Contatos.

```
Nota do Técnico numa temporada = Conhecimento Tático × 0.3
  + Gestão de Elenco × 0.25 + qualidade do elenco disponível × 0.25
  + Resistência à Pressão × 0.2 (mais peso em jogos decisivos)
```

**Decisões:** aceitar clube pequeno pra começar ou esperar convite grande; estilo de jogo (ofensivo/reativo/formador de jovens); disciplina rígida ou flexível com o elenco; aceitar ser "auxiliar promovido" no próprio clube onde jogou.

**Eventos:** primeira demissão, reencontro com ex-companheiro agora como jogador do seu elenco, pressão de torcida/diretoria, disputa de ideias com um camisa 10 tipo "Ego alto" — o jogo pode inclusive gerar jogadores da base com a mesma lógica de atributos e potencial oculto, fechando o ciclo (o ex-jogador agora decide sobre a próxima geração).

### 8.4 Caminho: Auxiliar técnico / comissão técnica

Caminho mais discreto e estável que ser técnico principal — bom pra arquétipos "Mediador silencioso" ou "Frágil" que não querem a pressão máxima, mas querem seguir no futebol.

- Preparador físico, auxiliar tático, gerente de futebol, coordenador de base
- Progressão mais lenta de exposição pública, mas também menos risco de demissão pública/vexame
- Pode servir de "trampolim" pra depois virar técnico principal (herdando parte da Rede de Contatos e Conhecimento Tático do técnico principal com quem trabalhou)

### 8.5 Caminho: Comentarista / mídia esportiva

**Novos atributos:** Carisma na Mídia, Conhecimento Tático (compartilhado com o caminho técnico, dá bônus se o jogador tiver os dois), Polêmica Controlada (capacidade de gerar debate sem virar escândalo pessoal).

```
Audiência do Comentarista = Audiência herdada da carreira (7.12.2) × decaimento anual
  + Carisma na Mídia × 0.4 + Polêmica Controlada × 0.3 + Legado × 0.3
```

**Decisões:** analista comedido ou polêmico; aceitar convites de todo tipo de programa ou selecionar poucos e grandes; criar conteúdo próprio (canal, podcast) ou trabalhar pra uma emissora/veículo estabelecido.

**Eventos:** opinião controversa vira manchete; entrevista/embate com outro ex-jogador rival (usa a Intensidade de Rivalidade herdada, 7.16); convite pra cobrir uma Copa do Mundo; crítica pública a um técnico atual e a repercussão disso.

### 8.6 Caminho: Empresário (agente de jogadores)

O jogador vira o "empresário" do sistema descrito em 7.10 — agora administrando as mesmas 4 estatísticas (Contatos, Negociação, Ética, Comissão) só que como personagem jogável.

**Decisões:** perfil ético (construir carreira longa como agente confiável) ou agressivo (lucro rápido, reputação arriscada); representar jovens da base (retorno lento, mas fideliza) ou já jogadores consolidados (retorno rápido, mais concorrência); manter carteira pequena e cuidada ou grande e volumosa.

```
Sucesso como Empresário = Rede de Contatos herdada × 0.3
  + Habilidade de Negociação (nova, desenvolvida com o tempo) × 0.3
  + Reputação/Legado como ex-jogador × 0.4 (abre portas que um empresário comum não tem)
```

**Eventos:** disputa por um talento da base com outro empresário; cliente reclama de decisão de carreira; oportunidade de representar um jogador que lembra o próprio jogador na juventude (callback pro sistema de potencial oculto/percebido).

### 8.7 Caminho: Dirigente / dono de clube

O caminho que exige mais capital acumulado (7.13). Dois níveis:

- **Dirigente/executivo de futebol:** cuida de departamento de futebol de um clube (contratações, planejamento), sem ser o dono — exige menos capital, mais Reputação/rede de contatos
- **Dono/investidor majoritário:** compra ou investe pesado num clube (muitas vezes um clube menor, tradicional, em dificuldade financeira — encaixa bem na narrativa de "salvar o clube do coração")

```
Saúde Financeira do Clube (sob gestão do jogador) =
  Capital investido × 0.3 + Qualidade das decisões de contratação/venda × 0.4
  + Resultado esportivo (retroalimenta receita) × 0.3
```

**Decisões:** gastar pesado por resultado imediato ou construir sustentável; manter identidade histórica do clube ou modernizar agressivamente; usar a própria Rede de Contatos (como ex-jogador) pra trazer nomes grandes por preço de amizade.

**Eventos:** crise financeira herdada do clube; conflito com torcida sobre gestão; disputa por eleição/controle acionário; oportunidade de contratar um jogador "jóia escondida" usando o próprio olho clínico de ex-atleta (ligação direta com 3.2).

### 8.8 Outros caminhos

- **Preparador físico/especialista:** pra quem teve Físico muito trabalhado e histórico de lidar bem com lesões (ligado a 7.11) — carreira técnica sem ser o técnico principal
- **Olheiro/scout:** usa o "olho clínico" desenvolvido a vida toda pra avaliar Potencial Real (3.2) de jovens — mecânica interessante: quanto mais o jogador foi um caso de "jóia escondida" na própria carreira, melhor ele é nesse caminho
- **Embaixador do clube:** papel simbólico, baixa exigência mecânica, alto Reputação/Legado necessário — ligado a quem foi "Ídolo de um clube só"
- **Vida tranquila / fora do futebol:** não trabalhar mais no meio, viver do patrimônio acumulado (ou lidar com as consequências de não ter guardado nada) — caminho "de encerramento", sem progressão, só narrativo/epílogo

### 8.9 Progressão e final de jogo

Cada caminho tem sua própria progressão de longo prazo (o técnico sobe de categoria de clube, o comentarista ganha audiência, o dirigente estabiliza o clube), mas o jogo pode ser "concluído" em qualquer ponto — o sistema não precisa forçar o jogador a viver a vida inteira até morrer.

**Possíveis pontos de encerramento/epílogo:**
- Um resumo estilo "biografia": linha do tempo com todos os marcos (clubes, títulos, prêmios, família, escolhas decisivas) — usando os dados acumulados de 7.14 (estatísticas/legado)
- Um "final" narrativo diferente pra cada arquétipo dominante (Parte 7.2), reforçando a identidade que o jogador construiu ao longo de décadas de decisões
- Opção de continuar acompanhando a segunda carreira indefinidamente (modo "carreira infinita" pra quem gosta de simulação de longo prazo) ou encerrar com o resumo/epílogo

### 8.10 Eventos gerais de transição (aposentadoria → nova vida)

| Evento | Tipo | Gatilho | Escolhas | Efeito |
|---|---|---|---|---|
| Primeiro convite pós-carreira | Fixo (logo após aposentar) | Depende do maior Requisito batido (8.2) | Aceitar o convite mais alinhado / recusar todos e descansar primeiro | Define o caminho inicial |
| Período de vazio/adaptação pós-carreira | Condicional | Aposentadoria sem plano B definido | Buscar ajuda profissional/psicológica / se isolar | Saúde mental, velocidade de entrada em um novo caminho |
| Convite simultâneo de dois caminhos diferentes | Aleatório | Legado alto + múltiplos requisitos batidos | Escolher um / tentar conciliar os dois (risco de mediocridade em ambos) | Define o rumo da segunda vida |
| Reencontro com a "família de futebol" (ex-companheiros) em evento | Fixo (recorrente) | — | Participar ativamente / manter distância | Reputação, Saúde mental, rede de contatos |

---

### 8.11 Progressão detalhada de cada carreira

Cada caminho da Parte 8 tem uma escada própria de níveis — o jogador não começa (nem termina) no topo, e sobe ou desce como um mini "funil" que espelha, de forma mais compacta, a lógica que já existe na carreira de jogador.

#### 8.11.1 Técnico

| Nível | Contexto típico | Como sobe |
|---|---|---|
| 1 — Categoria de base | Sub-15/Sub-17/Sub-20 de um clube | Boa Didática, jovens evoluindo bem sob seu comando |
| 2 — Equipe B / divisão de acesso | Time secundário ou clube de divisão menor | Bons resultados + Conhecimento Tático crescente |
| 3 — Primeira divisão, clube médio/pequeno | Clube "de meio de tabela" | Sobrevivência + evolução tática visível |
| 4 — Clube grande | Elite nacional | Títulos ou temporada de exceção no nível anterior |
| 5 — Seleção nacional | Cargo mais alto e mais exposto | Legado + Reputação altíssimos, geralmente vindo do nível 4 |

```
Confiança da Diretoria (equivalente à Confiança do Técnico, agora invertida) =
  Nota do Técnico (já definida em 8.3) acumulada na temporada × 0.5
  + Resultado vs expectativa do clube (superar tabela prevista) × 0.3
  + Gestão de crise/relação com elenco × 0.2

Se cair abaixo do corte → demissão (evento) → precisa reconstruir Rede de Contatos
  antes de conseguir outro convite equivalente (pode cair um nível)
```

Demissões fazem parte do caminho — inclusive técnicos "de sucesso" no jogo devem passar por pelo menos uma demissão pra dar autenticidade (nenhum técnico real tem 100% de aproveitamento).

#### 8.11.2 Dirigente / dono de clube

| Nível | Contexto |
|---|---|
| 1 — Conselheiro/investidor minoritário | Voz pequena nas decisões |
| 2 — Diretor de futebol | Comanda contratações/vendas de um clube médio |
| 3 — Presidente/dono majoritário de clube médio | Controle total de um clube |
| 4 — Dono de clube grande ou grupo multi-clubes | Múltiplos clubes, operação profissionalizada |
| 5 — Cargo federativo (dirigente de federação/confederação) | Fim de carreira, papel mais político que operacional |

Progride com a fórmula de Saúde Financeira do Clube (já definida em 8.7) sustentada por múltiplas temporadas, mais eventos de oportunidade (outro clube à venda, convite pra cargo federativo).

#### 8.11.3 Comentarista / mídia

| Nível | Veículo típico |
|---|---|
| 1 — Rádio local/regional | Audiência pequena, mercado local |
| 2 — TV regional / canal de internet próprio | Audiência média, primeiro reconhecimento nacional |
| 3 — Rede nacional | Programas de grande audiência |
| 4 — Cobertura de eventos globais (Copa do Mundo, Champions) | Pico de Audiência e Legado |
| 5 — Referência histórica ("voz" do futebol) | Estabilidade de longuíssimo prazo, convites vitalícios |

Sobe com a fórmula de Audiência do Comentarista (8.5), mas também é afetada por "Polêmica Controlada": um comentarista que nunca gera debate estagna; um que gera escândalo demais cai de nível (perde contrato).

#### 8.11.4 Empresário

| Nível | Carteira de clientes |
|---|---|
| 1 — Agente independente | Poucos jogadores desconhecidos, geralmente da base |
| 2 — Escritório pequeno | Alguns profissionais de clubes médios |
| 3 — Agência estabelecida | Jogadores de destaque nacional, equipe de trabalho própria |
| 4 — Agência de elite | Estrelas internacionais, múltiplos mercados |

Sobe com Sucesso como Empresário (8.6) sustentado, mais eventos de "cliente vira estrela" (o jogador que ele descobriu vira referência, puxando a reputação da agência).

---

### 8.12 A transição em si: crise de identidade e vazio pós-carreira

Esse é, na vida real, um dos momentos mais delicados da vida de um atleta — a identidade inteira foi construída em torno do futebol por 15-20+ anos, e o fim da carreira pode ser vivido como um luto.

```
Vazio Existencial (0–100, começa em valor alto logo após aposentar,
  tende a cair com o tempo e com decisões certas):

Valor inicial = 40 + bônus de:
  + Aposentadoria "forçada"/abrupta (sem planejamento prévio)
  + Identidade construída quase só em torno do futebol (baixa Adaptação em 7.15
    histórica, pouco investimento em outras áreas de vida)
  - Score de Legado alto (sensação de "missão cumprida" reduz o vazio)
  - Família/Amigos de Infância fortes (rede de apoio fora do futebol)

Queda do Vazio Existencial por temporada = base + Saúde mental atual/10
  + (novo caminho pós-carreira já escolhido e engajado)
```

Enquanto o Vazio Existencial está alto, o jogo aplica um desconto temporário na evolução de qualquer novo caminho escolhido (o ex-atleta "no automático", sem energia real pra nova vida) e aumenta a chance de eventos de risco abaixo.

#### 8.12.1 Eventos de risco na transição

| Evento | Tipo | Gatilho | Escolhas | Efeito |
|---|---|---|---|---|
| Sensação de "não sou mais ninguém" | Condicional | Vazio Existencial alto + primeiros meses de aposentado | Buscar apoio psicológico / se isolar / mergulhar de cabeça num novo caminho sem processar | Saúde mental, velocidade de recuperação |
| Tentação de vícios (bebida, jogo) como fuga | Condicional | Vazio Existencial alto + Saúde mental baixa | Buscar ajuda / recusar mas monitorar / ceder à tentação | Saúde mental, Patrimônio (se envolver jogo/apostas), Família |
| Comparação constante com a vida de antes | Aleatório | Vazio Existencial moderado/alto | Aceitar a nova fase / tentar recriar rotina antiga artificialmente | Saúde mental |
| Grupo de apoio de ex-atletas | Aleatório | Legado moderado/alto | Participar ativamente / ignorar | Saúde mental ↑, rede de contatos pro novo caminho |
| Primeira conquista real no novo caminho | Fixo (quando aplicável) | Progresso em qualquer caminho da Parte 8 | — (narrativo positivo) | Vazio Existencial ↓↓ significativo |

Se o Vazio Existencial permanecer muito alto por várias temporadas sem melhora, o jogo deve tratar isso com cuidado: sinalizar a dificuldade emocional de forma realista (o "arquétipo" final do jogador pode registrar essa fase difícil como parte do legado/biografia), sem transformar isso em conteúdo gráfico ou instrutivo — é um sistema de simulação de vida, tratado com a mesma seriedade e sobriedade de qualquer boa narrativa esportiva sobre saúde mental.

---

### 8.13 Vida pessoal na velhice

```
Saúde Física na Velhice (0–100, substitui "Físico" depois de aposentado,
  passa a representar qualidade de vida, não desempenho esportivo):

Valor inicial na aposentadoria = função de:
  + Número e gravidade de lesões acumuladas na carreira (7.11)
  + Quão bem geriu Overtraining/Físico ao longo da carreira
  - Cada lesão grave/crônica não tratada corretamente reduz o valor inicial

Declínio natural por década = base pequena, acelerada se Saúde Física já começou baixa
```

Jogadores com histórico de muitas lesões (arquétipo "Frágil") chegam à velhice com mais dores crônicas e limitações — parte realista do "preço" físico da carreira, sem entrar em detalhe médico/gráfico, só como fator narrativo e de qualidade de vida.

#### 8.13.1 Relação com filhos adultos

```
Relação com Filhos (adulta) herda o histórico de Relação com Filhos (7.17.3):

Se o jogador investiu tempo de qualidade ao longo da carreira → filhos adultos
  próximos, eventos de convívio positivos, netos frequentes

Se o jogador negligenciou (priorizou carreira sistematicamente) → filhos adultos
  mais distantes, eventos de reconciliação possíveis, mas não garantidos
```

#### 8.13.2 Netos e nova geração

Evento recorrente e positivo (se a relação com os filhos estiver bem): nascimento de netos, participação na criação, eventualmente um neto mostrando interesse pelo futebol — reforçando o gancho de "legado familiar" já citado em 7.17.3, agora numa geração adiante.

#### 8.13.3 Eventos

| Evento | Tipo | Gatilho | Escolhas | Efeito |
|---|---|---|---|---|
| Dor crônica de lesão antiga volta a incomodar | Condicional | Histórico de lesões graves | Tratar/cirurgia tardia / conviver com a dor | Saúde Física na Velhice |
| Neto nasce | Fixo/aleatório | Filhos adultos com família própria | Se envolver ativamente / manter distância | Relação com Filhos, Saúde mental (positivo) |
| Reconciliação tardia com filho distante | Condicional | Relação com Filhos historicamente baixa | Buscar reconciliação / aceitar o distanciamento | Relação com Filhos, Saúde mental |
| Problema de saúde sério na velhice | Aleatório (chance cresce com idade e Saúde Física baixa) | — | Tratamento intensivo / aceitar limitações | Saúde Física, pode encerrar caminhos ativos (técnico, dirigente) |
| Celebração de aniversário/homenagem tardia do clube | Fixo (se Legado alto) | — | Participar com a família toda / discretamente | Reputação, Saúde mental, momento de fechamento narrativo |

---

### 8.14 Outros caminhos de vida fora do futebol

#### 8.14.1 Política

```
Viabilidade Política = Reputação com a Torcida acumulada × 0.4
  + Legado × 0.3 + Audiência × 0.2 + Causa/plataforma clara (evento de escolha) × 0.1
```

- Caminho de longo prazo próprio: vereador/cargo local → deputado → cargo executivo (prefeito/governador, dependendo da escala do jogo)
- Decisão de posicionamento: usar a imagem de "ídolo" pra causas específicas (esporte de base, infraestrutura urbana, causas sociais) ou carreira política mais genérica
- Risco: politização pode dividir a Reputação com a Torcida (parte vê como natural, parte vê como oportunismo) — efeito variável, não garantido

#### 8.14.2 Negócio fora do futebol

Diferente do "negócio próprio" já citado em 7.13.4 (que geralmente é ligado ao meio esportivo — academia, loja de material esportivo). Aqui é sobre construir algo desconectado da imagem de jogador: rede de restaurantes, moda, tecnologia, entretenimento.

```
Sucesso do Negócio = Capital investido × 0.3 + Habilidade do sócio/gestor contratado × 0.4
  + Uso (ou não) da própria imagem de ex-jogador pra alavancar marketing × 0.3
```

Tende a exigir menos Legado esportivo e mais Patrimônio + boas decisões de parceria — é o caminho mais "neutro" em relação à carreira de jogador, podendo ser combinado com qualquer outro (ex: um técnico que também é dono de uma rede de academias).

#### 8.14.3 Vida pública / filantropia

- Fundação social, ONG, embaixador de causas (educação via esporte, combate à fome, etc.)
- Não gera retorno financeiro direto (pode até consumir Patrimônio), mas eleva Reputação e Legado de forma consistente, e reduz Vazio Existencial (8.12) com força — dar propósito é um dos "curas" mais eficazes do vazio pós-carreira no sistema
- Pode ser conciliado com qualquer outro caminho (ex: comentarista que também dirige uma fundação)

#### 8.14.4 Vida de celebridade / entretenimento

- Participação em programas de entretenimento, reality shows, convites de "personalidade" fora do esporte
- Sobe Audiência rápido, mas é o caminho com maior risco de erosão de Reputação/Legado esportivo se mal dosado (a torcida pode sentir que o ex-jogador "virou piada")
- Bom encaixe pra arquétipos "Holofote"/"O que se perde" que já viveram sob exposição constante durante a carreira

---

## Parte 9 — Estrutura de tempo e turno

Todas as fórmulas das Partes 6, 7 e 8 pressupõem que "alguma coisa acontece de tempos em tempos" — mas nunca definimos a granularidade real do jogo. Isso é fundamento antes de qualquer implementação.

### 9.1 Três camadas de tempo

| Camada | Unidade | Função |
|---|---|---|
| **Macro** | Temporada (1 ano competitivo) | Unidade "de verdade" do jogo. É nela que rodam Evolução de Atributos (6.2), Risco de Dispensa (6.5), progressão de nível (8.11), atualização de Patrimônio (7.13) |
| **Meso** | Bloco/janela (pré-temporada, janela de transferência, meio de temporada, pós-temporada — 4 a 6 blocos por temporada) | É aqui que aparecem as decisões de menu (treino, contrato, vida pessoal) e a maioria dos eventos condicionais/aleatórios dispara |
| **Micro** | Partida individual | Só é simulada/narrada em detalhe (com tela própria, Fator Mental, etc.) quando é **relevante**: jogos de pressão (7.1 alta pressão), decisões, clássicos, estreias, jogos contra rival (7.16), primeira convocação. Partidas "comuns" da temporada são resolvidas em bloco (ver 9.2) |

Essa estrutura evita dois extremos ruins: simular centenas de partidas idênticas (cansativo) ou pular a temporada inteira sem nenhuma partida jogável (sem imersão).

### 9.2 Simulação agregada de partidas comuns

```
Para partidas não-destacadas de uma temporada, calcula-se em lote:

DP médio do bloco = Base Técnica/Tática × Multiplicador de Forma médio do período
                    × Fator Mental (sem bônus de pressão) + Sorte agregada

Esse DP médio alimenta Moral, Reputação e Evolução (6.2) do período,
sem precisar narrar cada jogo — só um resumo ("boa sequência", "fase ruim")
entre os eventos/decisões da janela.
```

### 9.3 Calendário-tipo de uma temporada

1. **Pré-temporada** — planejamento de treino (ênfase da 3.4), decisões de elenco, contratos pendentes
2. **Primeiro terço** — jogos + eventos aleatórios/condicionais, primeira leva de partidas destacadas
3. **Janela de transferência (meio de temporada)** — propostas, negociações (6.6, 7.10)
4. **Segundo/terceiro terço** — sequência principal de jogos, eventos de pressão, rivalidades, seleção
5. **Pós-temporada** — Evolução de Atributos (6.2), Risco de Dispensa/Permanência (6.5), prêmios (7.14.2), balanço financeiro (7.13), decisão de férias/descanso

### 9.4 Rotina pessoal (vida fora de campo)

Decisões de rotina (sono, alimentação, festas, tempo de família) não precisam de tela diária — entram como **escolhas de "estilo" por bloco** (ex: "como você está encarando esse meio de temporada: focado / equilibrado / relaxado"), que aplicam modificadores pequenos e contínuos nas barras (Moral, Físico, Família, Saúde mental) até a próxima escolha, em vez de exigir microgerenciamento dia a dia.

---

## Parte 10 — Criação de personagem

### 10.1 Tela inicial (visível ao jogador)

- Nome e aparência (cosmético)
- **Contexto de origem:** ponto de partida social/econômico (ex: periferia, classe média, interior, capital) — não define o destino, mas define as barras iniciais de Financeiro família e o tipo de estrutura de acesso ao futebol (projeto social x escolinha paga x clube já estruturado)
- **Posição preferida** e **pé dominante** — um viés inicial, não uma trava definitiva (pode mudar por reposicionamento, 2.3)
- Idade de início (padrão 10–12 anos, Fase 1 da Parte 2)

### 10.2 Geração oculta (não mostrada de cara)

```
Potencial Real (3.2) sorteado numa curva de sino:
  maioria dos jogadores gerados fica na faixa média,
  poucos nascem com potencial muito alto ou muito baixo
  (isso é o que sustenta os arquétipos "jóia escondida" e "fogo de palha")

Curva de Maturação (3.3): sorteada entre precoce / normal / tardia,
  com pesos realistas (a maioria é "normal", precoce e tardia são minoria)

Atributos iniciais (Parte 3): todos baixos e proporcionais à idade de início
  (um jogador de 10 anos começa entre ~10–30 em quase tudo,
  exceto talvez um ou dois atributos "naturais" ligeiramente acima,
  refletindo um talento inicial perceptível mesmo cedo)
```

### 10.3 Evento de história de origem

Um pequeno evento narrativo na criação (ex: "cresceu jogando bola na rua com os mais velhos" / "entrou numa escolinha estruturada aos 6 anos" / "começou tarde, só aos 11, numa peneira de bairro") dá um pequeno modificador de sabor nos atributos iniciais — sem impacto mecânico gigante, mas reforça que cada carreira nasce de um contexto diferente.

### 10.4 Modo de jogo (opcional, escopo futuro)

Vale considerar, mais pra frente, oferecer variações de dificuldade/estilo (ex: modo "história guiada", com mais eventos fixos e menos aleatoriedade, x modo "simulação completa", com mais números visíveis e controle fino) — mas isso é decisão de escopo de produção, não bloqueia o design atual.

---

## Parte 11 — Cheat sheet mestre (referência de todas as barras e atributos)

Tabela única de consulta rápida, reunindo tudo que foi criado ao longo do documento.

### 11.1 Atributos do jogador (Parte 3)

| Grupo | Sub-atributos |
|---|---|
| Técnico | Finalização, passe curto, passe longo, cruzamento, drible, primeiro toque, cabeceio, chute de longe, bola parada, pé fraco |
| Físico | Velocidade, resistência, força, impulsão, agilidade, equilíbrio |
| Tático | Posicionamento, visão de jogo, marcação, desarme, leitura de jogo, disciplina tática |
| Mental | Concentração, liderança, compostura, ambição, profissionalismo, resiliência, ego |

### 11.2 Barras de status — base e carreira ativa

| Barra | Faixa | Aparece desde | O que mede |
|---|---|---|---|
| Moral | 0–100 | Base | Felicidade/motivação |
| Físico/Fadiga | 0–100 | Base | Condição física do momento |
| Família | 0–100 | Base | Apoio e relação familiar (geral, na base) |
| Reputação | 0–100 | Base | Prestígio no meio profissional (ver glossário 4.1) |
| Estudos | 0–100 | Base | Plano B educacional |
| Financeiro | 0–100 → Patrimônio Líquido numérico | Base → vira número real em 7.13 | Situação de dinheiro |
| Ego/Humildade | 0–100 | Base | Senso de importância própria |
| Saúde mental | 0–100 | Base | Estabilidade emocional |

### 11.3 Barras específicas da fase profissional

| Barra | Faixa | Seção | O que mede |
|---|---|---|---|
| Química de Vestiário | 0–100 | 7.9.1 | Clima coletivo do elenco |
| Confiança do Técnico | 0–100 | 7.9.2 | Relação 1-pra-1 com o técnico atual |
| Reputação com a Torcida | 0–100 | 7.9.3 | Afeto popular (ver glossário 4.1) |
| Audiência | número crescente | 7.12.2 | Alcance de mídia/seguidores (ver glossário 4.1) |
| Intensidade da Rivalidade | 0–100 (por rival) | 7.16.2 | Peso emocional de um confronto específico |
| Adaptação | 0–100, temporária | 7.15.1 | Ajuste a um novo país/cultura |
| Relação com os Pais | 0–100 | 7.17.1 | — |
| Estabilidade do Relacionamento | 0–100 | 7.17.2 | Relação com cônjuge/parceiro(a) |
| Relação com Filhos | 0–100 | 7.17.3 | — |
| Relação com Amigos de Infância | 0–100 | 7.17.4 | — |
| Score de Legado | calculado, não editável | 7.14.4 | Resumo histórico no fim da carreira (ver glossário 4.1) |

### 11.4 Pós-aposentadoria

| Barra/atributo | Faixa | Seção | O que mede |
|---|---|---|---|
| Vazio Existencial | 0–100 | 8.12 | Dificuldade de adaptação à vida sem o futebol ativo |
| Saúde Física na Velhice | 0–100 | 8.13 | Qualidade de vida física (substitui o Físico) |
| Conhecimento Tático, Gestão de Elenco, Didática, Resistência à Pressão, Rede de Contatos | 0–100 cada | 8.3 | Atributos do caminho Técnico |
| Carisma na Mídia, Polêmica Controlada | 0–100 cada | 8.5 | Atributos do caminho Comentarista |
| Contatos, Negociação, Ética, Comissão | 0–100 cada | 8.6 | Atributos do caminho Empresário (agora como o próprio jogador) |
| Saúde Financeira do Clube | 0–100 | 8.7 | Estado do clube sob gestão, caminho Dirigente/Dono |

---

## Parte 12 — Futebol feminino

O documento inteiro foi escrito, até aqui, com a carreira masculina como padrão implícito. Essa é uma decisão de escopo que precisa ficar explícita.

### 12.1 Opções de escopo

| Opção | Descrição | Trade-off |
|---|---|---|
| **A. Só carreira masculina** | Mantém o jogo como está | Mais simples de produzir, mas deixa de fora uma parte real e crescente do futebol |
| **B. Carreira feminina como modo à parte, com sistema próprio** | Desenvolvida depois, com calendário/competições/mercado específicos | Mais fiel à realidade, mas exige um segundo conjunto de dados/eventos |
| **C. Escolha de gênero na criação de personagem (Parte 10), mesmo motor de sistemas, com modificadores realistas** | Um único jogo, mesma estrutura de atributos/barras/fórmulas, mas com curvas de mercado, calendário de competições e alguns eventos específicos ajustados à realidade do futebol feminino | Exige levantar dados reais (ver 12.2), mas aproveita 100% do sistema já construído |

**Recomendação de design:** opção C — reaproveita todo o trabalho já feito (atributos, barras, fórmulas, eventos), só ajustando parâmetros e alguns eventos específicos, em vez de duplicar o sistema inteiro.

### 12.2 O que precisaria de ajuste real (não estereotipado, baseado em como o futebol feminino de fato funciona hoje)

- **Calendário de competições:** Copa do Mundo Feminina, Libertadores Feminina, Champions League Feminina, ligas nacionais com estrutura e calendário próprios
- **Curva de Valor de Mercado (6.6):** o mercado financeiro do futebol feminino profissional é hoje menor e mais concentrado em poucas ligas (ex: Inglaterra, EUA, parte da Europa) — a fórmula de transferências precisaria de um teto/escala diferente, não porque o talento vale menos, mas porque o mercado (ainda) movimenta menos dinheiro
- **Base e categorias:** a estrutura de base feminina no Brasil ainda é mais recente e menos padronizada que a masculina — pode gerar eventos próprios (ex: "clube não tem categoria de base feminina, only entrada direta no profissional" como obstáculo real de início de carreira)
- **Profissionalização mais recente:** eventos ligados a conquistas de direitos trabalhistas/salariais podem ser parte do pano de fundo histórico, sem precisar de posicionamento político explícito — só refletindo o contexto
- Times e fórmulas de Audiência/patrocínio (7.12) podem ter curvas de crescimento diferentes, mas usam a mesma mecânica

Essa é uma decisão que vale confirmar com você antes de detalhar os eventos específicos — o sistema já suporta a opção C tecnicamente, falta decidir se entra no escopo do jogo agora ou fica pra uma expansão futura.

---

## Parte 13 — Fim de vida e epílogo

Cobrimos a velhice (8.13), mas faltava o fechamento final — tratado de forma leve, sem qualquer conteúdo pesado ou gráfico, como o desfecho natural de uma biografia.

### 13.1 Como o jogo encerra a história

Duas formas, não excludentes:

- **Encerramento por escolha do jogador:** a qualquer momento na pós-aposentadoria (Parte 8), fica disponível a opção "Encerrar a história" — o jogador decide contar até aqui
- **Encerramento natural sugerido pelo jogo:** depois de um número alto de temporadas em modo "carreira infinita" (8.9) ou ao atingir uma idade avançada (ex: 80+), o jogo pode gentilmente sugerir o fechamento ("sua história já tem muito pra contar — quer ver o resumo?"), sem forçar

### 13.2 Tela de biografia (epílogo)

Um resumo final gerado a partir de todos os dados acumulados no documento:

```
Biografia final reúne:
  - Linha do tempo de clubes, países e temporadas (7.14.1)
  - Títulos e prêmios individuais (7.14.1, 7.14.2)
  - Recordes/marcos (7.14.3)
  - Score de Legado final (7.14.4)
  - Arquétipo(s) dominante(s) construído(s) ao longo da vida (7.2)
  - Caminho(s) de pós-carreira seguido(s) (Parte 8) e até onde chegaram (8.11)
  - Estado final das relações pessoais (7.17, 8.13): família, amigos, netos
  - Uma frase-resumo/"epitáfio esportivo" gerada a partir do arquétipo dominante
    (ex: "O ídolo que nunca trocou de camisa", "O talento que o mundo quase não viu")
```

### 13.3 Tom

Sem simulação médica de causa da morte, sem detalhamento de doença ou sofrimento — o fechamento é tratado como a virada da última página de uma biografia esportiva, no mesmo tom respeitoso e celebratório que documentários e livros sobre carreiras reais costumam adotar.

---

## Parte 14 — Clubes, ligas e seleções

### 14.1 Decisão confirmada: nomes reais, com licença

Como a licença já está garantida, o jogo usa **clubes, ligas, seleções e jogadores reais** em vez da alternativa fictícia. Isso muda o projeto de "mundo inventado inspirado na realidade" pra "simulação sobre a realidade" — mais próximo do modelo FC (EA)/eFootball — e traz algumas implicações práticas que valem registrar aqui pra não pegar ninguém de surpresa mais adiante:

- **Licenças costumam ser separadas por camada:** liga/competição, clube individual e jogador (via sindicato de atletas, tipo FIFPro, ou acordo direto) muitas vezes são contratos distintos — vale confirmar se a licença cobre as três camadas ou só parte delas antes de fechar o escopo final.
- **Elenco real "vence" a cada janela de transferência.** Um jogo com dados reais precisa de um processo de atualização periódica (patch/DLC de elenco), ou vai ficar desatualizado rápido — isso é rotina de produção, não é um problema de design, mas precisa entrar no planejamento.
- **Base/categorias de acesso:** para as categorias de base (Parte 1–2), onde os atletas reais costumam ser menores de idade, o mais seguro (e mais comum mesmo em jogos totalmente licenciados) é a categoria de base usar **jovens gerados proceduralmente** (o sistema de potencial oculto/percebido da Parte 3 já foi desenhado exatamente pra isso) em vez de nomes reais de adolescentes — e só "cruzar" com elenco real quando o personagem chega no profissional e passa a jogar ao lado/contra atletas reais adultos. Isso preserva o realismo onde importa (elencos profissionais, seleções, rivais reais) sem depender de licenciar imagem de menores de idade.
- **O personagem do jogador nunca é um atleta real** — ele é sempre criado pelo jogador (Parte 10); os reais entram como o "mundo ao redor" (colegas de elenco, adversários, técnicos, comentaristas).

### 14.2 Estrutura de clubes no Brasil

Com licença, a estrutura segue o sistema real de divisões, sem precisar inventar nomes:

- Brasileirão Série A, B, C e D (acesso/rebaixamento real)
- Principais campeonatos estaduais (onde a base e as categorias de acesso costumam aparecer)
- Copa do Brasil, como competição paralela de mata-mata
- Libertadores e Sul-Americana, como competições continentais de clubes

### 14.3 As 30+ maiores ligas do mundo (referência de escopo)

Como o jogo usa licença real, aqui vai uma lista de referência baseada no **Opta Power Rankings** (ranking de força das ligas, atualizado por desempenho dos clubes em competições nacionais e internacionais — atualização de julho de 2026, a mais recente disponível). Vale registrar duas ressalvas importantes antes da lista:

- **Esse ranking é dinâmico** — muda a cada atualização, às vezes de forma significativa (ligas já subiram/caíram mais de 10 posições em poucos meses). Serve como referência de escopo agora, mas precisa ser conferido de novo perto da implementação.
- **Existem outros critérios de "maior liga"** (valor de mercado dos elencos, audiência de TV, receita) que dão rankings um pouco diferentes — por exemplo, por valor de mercado, a Premier League também lidera, mas a ordem das seguintes muda um pouco. Usei força esportiva (Opta) por ser o critério mais direto pra decidir onde o personagem teria mais ou menos dificuldade competitiva.

**Top 25 confirmado (Opta Power Rankings, jul/2026):**

| # | Liga | País |
|---|---|---|
| 1 | Premier League | Inglaterra |
| 2 | La Liga | Espanha |
| 3 | Bundesliga | Alemanha |
| 4 | Serie A | Itália |
| 5 | Ligue 1 | França |
| 6 | Brasileirão Série A | Brasil |
| 7 | Liga Profesional | Argentina |
| 8 | Jupiler Pro League | Bélgica |
| 9 | Primeira Liga | Portugal |
| 10 | Championship (2ª divisão) | Inglaterra |
| 11 | Ekstraklasa | Polônia |
| 12 | Superligaen | Dinamarca |
| 13 | Primera A | Colômbia |
| 14 | J1 League | Japão |
| 15 | Eliteserien | Noruega |
| 16 | LigaPro | Equador |
| 17 | Super League | Suíça |
| 18 | Prva HNL | Croácia |
| 19 | Major League Soccer (MLS) | Estados Unidos |
| 20 | Primera División | Paraguai |
| 21 | Liga MX | México |
| 22 | Eredivisie | Holanda |
| 23 | Segunda División | Espanha |
| 24 | First League | República Tcheca |
| 25 | Süper Lig | Turquia |

**Faixa 26–35** (posição exata varia bastante de atualização pra atualização, mas essas ligas aparecem consistentemente nessa região do ranking): Saudi Pro League (Arábia Saudita), Scottish Premiership (Escócia), Greek Super League (Grécia), Austrian Bundesliga (Áustria), K League 1 (Coreia do Sul), Cyprus First Division (Chipre), Série B (Itália), 2. Bundesliga (Alemanha), Ligue 2 (França), Allsvenskan (Suécia).

Isso já cobre bem mais que as 30 ligas pedidas, com boa distribuição geográfica pra sustentar decisões de transferência de qualquer continente (Parte 7.5) — Europa (maioria, como no futebol real), América do Sul, América do Norte/Central, Ásia e Oriente Médio.

### 14.4 Divisões de acesso abaixo do topo

Pra sustentar o funil completo da base e os eventos de "recomeço" após dispensa (6.5, 11 da Parte 1), cada uma das ligas principais acima também carrega, quando existente e licenciada, sua estrutura de divisões de acesso (2ª, 3ª divisão etc.) — já citado para o Brasil na 14.2, mas vale reaproveitar o mesmo princípio nas outras ligas grandes que também têm sistema de acesso/rebaixamento robusto (Inglaterra, Espanha, Alemanha, entre outras).

### 14.5 Seleções

A **Seleção Brasileira** (principal e de base — Sub-15, Sub-17, Sub-20) como eixo central da narrativa nacional (Parte 1, evento de convocação; Parte 7.6), com Copa do Mundo, Copa América, Eliminatórias e os mundiais de base reais como calendário de torneios. As seleções adversárias entram como parte do mesmo pacote de licença.

### 14.6 Futebol feminino — lista de ligas (ligado à Parte 12, já confirmada)

Diferente do masculino, o futebol feminino ainda não tem um ranking de força tão consolidado e numerado quanto o Opta Power Rankings para ligas masculinas (a base de dados de clubes femininos é mais recente e menor). Por isso, a lista abaixo é organizada por **camada de profissionalização/investimento** em vez de uma posição numérica exata — é a forma mais honesta de refletir o estágio atual do futebol feminino no mundo real:

**Camada 1 — Ligas de elite, alto investimento e profissionalização plena**

| Liga | País |
|---|---|
| Women's Super League (WSL) | Inglaterra |
| Liga F | Espanha |
| National Women's Soccer League (NWSL) | Estados Unidos |
| Frauen-Bundesliga | Alemanha |
| Première Ligue (ex-Division 1 Féminine) | França |
| Serie A Femminile | Itália |

**Camada 2 — Ligas em forte crescimento, investimento crescente**

| Liga | País |
|---|---|
| Brasileirão Feminino (Série A1) | Brasil |
| Liga MX Femenil | México |
| Damallsvenskan | Suécia |
| Toppserien | Noruega |
| WE League | Japão |
| A-League Women | Austrália |
| Eredivisie Vrouwen | Holanda |

**Camada 3 — Estruturas profissionais em consolidação**

| Liga | País |
|---|---|
| Primeira Liga Feminina | Portugal |
| Liga Femenina BetPlay | Colômbia |
| Primera División Femenina | Argentina |
| Women's Super League (bélgica) | Bélgica |
| Kvindeligaen | Dinamarca |
| Women's Super League (Suíça) | Suíça |
| WK League | Coreia do Sul |
| Chinese Women's Super League | China |
| Liga Femenina | Chile |

Essa é uma boa base pra sustentar as mesmas decisões já desenhadas pro masculino (transferência internacional, Parte 7.5; adaptação no exterior, Parte 7.15) dentro do modo feminino — com a diferença real e importante de que o mercado internacional de transferências femininas ainda é mais concentrado nas Camadas 1 e 2, o que deve se refletir na fórmula de Valor de Mercado (6.6) já observada em 12.2.

A **Seleção Brasileira Feminina** segue como eixo central, com Copa do Mundo Feminina, Copa América Feminina e (a partir de 2026/2028, conforme o calendário real da FIFA) o novo Mundial de Clubes Feminino e a Copa das Campeãs como parte do calendário de torneios de clube.

### 14.7 Banco de dados de elenco

Com jogadores reais, cada atleta do mundo do jogo passa a ter seus **atributos reais estimados** (Parte 3) em vez de gerados do zero — um trabalho de base de dados (curadoria/atualização de atributos, muito parecido com o que jogos de gestão de futebol já fazem), separado do trabalho de design de sistemas que fizemos até aqui. Vale planejar isso como uma frente própria de produção (curadoria de dados) quando o projeto avançar pra implementação.

---

## Parte 15 — Regras reais de contrato e idade (Lei Pelé)

Checagem feita — a boa notícia é que o sistema que já desenhamos (Partes 1, 2 e 6.6) está bem próximo da realidade. Só alguns ajustes finos:

| Regra real (Lei Pelé e legislação trabalhista) | Como já está no jogo | Ajuste necessário |
|---|---|---|
| Contrato de trabalho é nulo antes dos 16 anos (exceto como aprendiz, mínimo 14) | Contrato de formação surge na Sub-15 (14–15 anos) | Manter, mas deixar explícito que é uma **bolsa/auxílio financeiro**, não um contrato de trabalho formal — condizente com 7.13.1 |
| Primeiro contrato profissional só pode ser assinado a partir dos 16 anos | Hoje o jogo permite "primeiro contrato profissional" já na Sub-17 (16–17 anos) | **Já está correto** — Sub-17 começa exatamente aos 16 |
| Contrato de menor precisa da assinatura do responsável legal | Não estava explícito | Adicionar como parte do evento de assinatura de contrato na Sub-15/Sub-17 (Parte 1, item 6; Parte 5) |
| Duração máxima de contrato: 5 anos. Duração mínima: 90 dias | Não estava especificado em 7.10.2 | Adicionar como limite da estrutura de contrato |
| Empresário/intermediário **não pode receber comissão** por intermediar contrato de atleta menor de idade | Não estava no sistema de empresário (7.10) | Vira um evento/regra: empresários "profissionais" respeitam isso; empresários "golpistas" (7.10.1) podem tentar burlar — ótimo gancho pra um evento de risco na Sub-15/Sub-17 |
| Idade mínima pra ser inscrito em competições de base de alto nível (ex: Copinha) girou entre 15 e 16 nos últimos anos, e pode mudar por regulamento anual | Sub-20/Copinha já cobre essa faixa | Manter como está, só sinalizar que é regra "viva" (muda por regulamento da competição, não por lei) |

Essas correções são pequenas e não mudam a estrutura das Partes 1, 2, 6 e 7 — só deixam o sistema mais fiel à realidade nos detalhes finos de quando cada tipo de vínculo pode começar.

---

## Parte 16 — Plataforma, engine e arte (decisão de produção)

### 16.1 Contexto: projeto solo/simples, hospedado no GitHub

Com esse contexto (projeto enxuto, sem orçamento de engine paga, distribuído via repositório GitHub), a recomendação muda bastante em relação a um estúdio com equipe grande — o objetivo aqui é **simplicidade de manutenção e zero custo de hospedagem**, não potência gráfica.

### 16.2 Recomendação de stack: web app estático (HTML/CSS/JS)

| Por que faz sentido pro seu caso | Detalhe |
|---|---|
| Hospedagem gratuita nativa | GitHub Pages publica direto do próprio repositório, sem servidor pra manter |
| Sem instalação pro jogador | Roda no navegador, funciona em qualquer sistema (Windows/Mac/Linux/celular) |
| Combina com o estilo "Football Manager" | O jogo é essencialmente **telas, tabelas e menus com muito dado** — HTML/CSS/JS é exatamente feito pra isso, sem precisar de engine de jogo de verdade |
| Fácil de versionar e evoluir | Cada Parte deste documento vira, na prática, uma tela ou um módulo de dados — dá pra ir publicando aos poucos |
| Sem dependência de aprender uma engine nova | Se você já sabe alguma coisa de programação web, o ganho de produtividade é grande; se não sabe, é a stack com mais tutoriais/gente ajudando no mundo |

**Estrutura sugerida do repositório:**

```
/index.html          → tela inicial
/css/                → estilo (visual "painel de dados", tipo FM)
/js/
  /core/              → motor do jogo: fórmulas (Parte 6), turnos (Parte 9)
  /data/              → dados de clubes/ligas/jogadores (Parte 14) em JSON
  /ui/                → telas: criação de personagem (Parte 10), decisões, eventos
/saves/               → sistema de salvamento (ver 16.3)
```

### 16.3 Salvamento de progresso

Como é um site estático (sem servidor/banco de dados por trás), duas opções simples:

- **localStorage do navegador:** salva automaticamente no próprio dispositivo — simples, mas o progresso fica preso àquele navegador/computador
- **Exportar/importar arquivo de save (JSON):** o jogador baixa um arquivo com o estado da carreira e pode importar depois, inclusive em outro dispositivo — mais trabalho de implementar, mas resolve a portabilidade

Pra um projeto começando, dá pra lançar só com localStorage e adicionar exportar/importar depois, sem redesenhar nada.

### 16.4 Alternativa: Godot Engine

Se em algum momento você quiser uma sensação mais "de jogo" (janelas nativas, sons, app instalável em vez de só navegador), o **Godot** é a alternativa natural: gratuito, de código aberto, ótimo pra 2D, exporta pra Web (inclusive publicável no GitHub Pages também), Windows, Mac, Linux e até celular — e os arquivos de projeto são baseados em texto, o que versiona bem no Git. É mais trabalho de aprendizado que HTML/CSS/JS puro, mas vale ter no radar caso o projeto cresça.

### 16.5 Direção de arte: 2D estilizado, "painel de dados"

Como referência é Football Manager, a arte não depende de ilustração pesada — o visual nasce da **organização da informação**:

- Paleta de cores por contexto (ex: verde para positivo/aprovação, vermelho para risco/dispensa, dourado para eventos de prêmio/conquista) aplicada de forma consistente nas barras de status (Parte 4, 11) e nos textos de evento
- Navegação lateral fixa por seções (Elenco, Contrato, Vida Pessoal, Legado...) espelhando as Partes deste documento
- Escudos reais dos clubes/ligas (já licenciados, Parte 14) como o elemento visual mais forte da interface — substituem a necessidade de ilustração de personagens
- Retrato do jogador pode ser simples (silhueta genérica com customização mínima de cor de pele/cabelo) já que o foco do jogo é a simulação de decisões, não a customização visual
- Gráficos simples de barra/linha (Parte 6, evolução de atributos e desempenho ao longo das temporadas) reforçam a sensação de progresso sem exigir arte

### 16.6 Resumo da decisão

**Stack recomendada:** HTML/CSS/JS estático, hospedado via GitHub Pages, dados de clubes/ligas em JSON, salvamento local (localStorage) com exportar/importar como evolução futura. Estilo visual 2D "painel de dados", inspirado em Football Manager, priorizando organização de informação sobre ilustração.

---

## Próximos passos (a detalhar)

- [x] Sistema de atributos do jogador
- [x] Barras de status e como decisões geram consequências
- [x] Sistema de eventos (aleatórios x condicionais) por fase da base
- [x] Fórmulas: como atributos + barras determinam desempenho em jogo/avaliação
- [x] Fase profissional (caminhos de carreira, decisões, eventos, transferências, seleção, declínio)
- [x] Relação com elenco/técnico/torcida (química, confiança do técnico, reputação com a torcida, papéis no vestiário)
- [x] Negociação de contrato e empresário (perfis de empresário, estrutura de contrato, mecânica de negociação)
- [x] Lesões e saúde (tipos, gravidade, recuperação, perda permanente de atributo, impacto psicológico)
- [x] Fama, mídia e patrocínios (perfil de mídia, audiência, patrocínios, entrevistas, escândalos)
- [x] Vida financeira e legado (patrimônio, impostos, gestor financeiro, score de legado)
- [x] Títulos, prêmios e estatísticas (cartão de carreira, prêmios individuais, recordes, legado)
- [x] Adaptação no exterior (idioma, cultura, saudade, adaptação temporária de desempenho)
- [x] Rivalidades e confrontos diretos (clube, posição/prêmio, pessoal, fator mental triplicado)
- [x] Família, filhos, pais e amigos (relações desdobradas, eventos de longo prazo)
- [x] Vida pós-aposentadoria (técnico, auxiliar, comentarista, empresário, dirigente/dono de clube, outros caminhos, final de jogo)
- [x] Progressão detalhada de cada carreira pós-aposentadoria (níveis, promoção/demissão)
- [x] Transição/crise de identidade e vazio pós-carreira
- [x] Vida pessoal na velhice (saúde física, filhos adultos, netos)
- [x] Outros caminhos fora do futebol (política, negócio, filantropia, entretenimento)
- [x] Glossário de Reputação/Torcida/Audiência/Legado e correção de referências cruzadas
- [x] Estrutura de tempo/turno (macro-temporada, meso-bloco, micro-partida)
- [x] Criação de personagem (tela inicial, geração oculta, história de origem)
- [x] Cheat sheet mestre com todas as barras e atributos do jogo
- [x] Decisão de escopo: futebol feminino — **confirmado, opção C** (mesmo motor de sistema, escolha de gênero na criação, parâmetros de mercado/calendário ajustados à realidade)
- [x] Fim de vida e epílogo (tela de biografia final)
- [x] Clubes, ligas e seleções presentes no jogo — **confirmado: nomes, clubes, ligas e seleções reais, com licença própria**; base usa jovens gerados (menores de idade), cruzando com elenco real só no profissional; lista de referência com 30+ maiores ligas do mundo (Opta Power Rankings, jul/2026) documentada na Parte 14.3; lista de ligas femininas por camada de profissionalização na Parte 14.6
- [x] Verificar regras reais de contrato e idade mínima no Brasil antes de fixar no jogo — **confirmado na Parte 15**, sistema já estava majoritariamente correto, pequenos ajustes aplicados
- [x] Definir plataforma/engine e escopo de produção — **confirmado: web app HTML/CSS/JS estático, hospedado via GitHub Pages** (alternativa: Godot, se o projeto crescer)
- [x] Definir arte/apresentação — **confirmado: 2D estilizado, "painel de dados" (estilo Football Manager)**, priorizando organização da informação e escudos reais licenciados sobre ilustração pesada
