# Correção de caminhos de assets - Build v0.9.0

O jogo estava procurando imagens em:
- assets/images/backgrounds/lobby_main.jpg
- assets/images/avatars/player_default.png

Mas o ZIP real enviado usa:
- assets/backgrounds/
- assets/drivers/
- assets/tracks/
- assets/buttons/
- assets/hud/
- assets/icons/

Correções aplicadas:
- Fundo principal: assets/backgrounds/mobile_night.png
- Tela inicial/capa: assets/backgrounds/splash_clean.png
- Tela de criação de carreira: assets/backgrounds/splash_alt.png
- Avatar manager: assets/drivers/lewis_hamilton.png
- Pilotos reais: assets/drivers/*.png
- Data de pilotos refeito para apontar para assets/drivers.

Fluxo restaurado:
1. Capa inicial
2. Criação de carreira
3. Escolha de equipe
4. Escolha de avatar
5. Lobby

Build: v0.9.0 - 2026-04-24 - 21:28
