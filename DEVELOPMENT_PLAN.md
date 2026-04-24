# DEVELOPMENT_PLAN - Formula 1 Manager Vale Gold Edition

## Build v0.1.6
Objetivo: reconstruir o jogo como SPA mobile-first com telas reais, sem depender de varias paginas HTML.

## Telas implementadas
1. Splash / abertura
2. Menu principal
3. Selecao de equipe
4. Selecao de piloto
5. Lobby da equipe
6. Calendario da temporada
7. Corrida demo com HUD
8. Resultado
9. Podio

## Proxima etapa v0.1.7
- salvar carreira em localStorage
- ligar equipe/piloto/calendario ao estado permanente
- melhorar a simulacao de corrida volta a volta
- inserir dinheiro, reputacao e objetivos da equipe

## Regra de entrega
Gerar sempre ZIP completo de codigo, sem assets pesados. Os caminhos de imagem devem seguir `ASSET_PATHS.md`.


## Build v0.1.7
Objetivo: transformar a v0.1.6 em carreira persistente e simulação básica volta a volta.

## Implementado nesta etapa
1. Salvamento local com `localStorage`
2. Botões de salvar e resetar carreira no lobby
3. Dinheiro, reputação, objetivo e rodada atual no lobby
4. Calendário com etapa atual e etapas concluídas
5. Escolha de GP ligada ao estado da carreira
6. Simulação volta a volta com:
   - ritmo conservador / normal / agressivo / ataque total
   - desgaste de pneus
   - consumo de combustível
   - risco de erro
   - pit stop com custo
   - log de rádio/eventos
7. Resultado de corrida atualizando:
   - dinheiro
   - reputação
   - rodada concluída
   - próxima etapa
8. Build sem assets pesados, mantendo os caminhos oficiais de `ASSET_PATHS.md`.

## Próxima etapa v0.1.8
- criar a tela de Oficina/P&D
- criar atributos de carro por peça
- permitir upgrade simples de aerodinâmica, motor, pneus e confiabilidade
- fazer upgrades refletirem no ritmo da corrida
- manter foco mobile-first.
