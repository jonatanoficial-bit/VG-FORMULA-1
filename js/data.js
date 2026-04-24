window.VALE_F1_DATA = {
  build: { name: "F1 MANAGER - VALE EDITION", version: "v0.9.0", date: "2026-04-24", time: "21:28", completion: "48%" },
  modes: [
    {id:"real", name:"Simulação real", desc:"Economia rígida, metas de conselho e evolução gradual.", bonus:"Recomendado"},
    {id:"sandbox", name:"Sandbox", desc:"Mais liberdade para testar pilotos, equipes e upgrades.", bonus:"Criativo"},
    {id:"easy", name:"Fácil", desc:"Orçamento maior, desgaste menor e evolução acelerada.", bonus:"Acessível"}
  ],
  countries: ["🇧🇷 Brasil","🇵🇹 Portugal","🇮🇹 Itália","🇬🇧 Reino Unido","🇩🇪 Alemanha","🇪🇸 Espanha","🇫🇷 França","🇯🇵 Japão"],
  avatars: [
    {id:"boss", label:"Chefe de equipe", initials:"JV", path:"assets/drivers/lewis_hamilton.png"},
    {id:"engineer", label:"Engenheiro estratégico", initials:"FX", path:"assets/drivers/george_russell.png"},
    {id:"director", label:"Diretor executivo", initials:"GM", path:"assets/drivers/fernando_alonso.png"},
    {id:"rookie", label:"Novo prodígio", initials:"VR", path:"assets/drivers/gabriel_bortoleto.png"}
  ],
  teams: [
    { id:"vale", name:"Vale Racing Team", tier:"Nova potência", cash:78000000, rep:42, accent:"#d7b46a", goal:"Pontuar em 8 GPs", unlock:0, car:{aero:61,power:66,chassis:58,reliability:63,tyres:60}, logoPath:"assets/backgrounds/splash_logo.png" },
    { id:"azul", name:"Aurora Alpine Racing", tier:"Médio", cash:96000000, rep:58, accent:"#4a9cff", goal:"Top 6 construtores", unlock:25, car:{aero:70,power:68,chassis:69,reliability:66,tyres:67}, logoPath:"assets/backgrounds/splash_logo.png" },
    { id:"silver", name:"Silver Arrow Works", tier:"Elite", cash:171000000, rep:88, accent:"#73f7ff", goal:"Top 2 construtores", unlock:70, car:{aero:88,power:90,chassis:86,reliability:89,tyres:85}, logoPath:"assets/backgrounds/splash_logo.png" },
    { id:"red", name:"Red Monarch GP", tier:"Elite", cash:188000000, rep:92, accent:"#ef3340", goal:"Título de construtores", unlock:80, car:{aero:93,power:91,chassis:88,reliability:86,tyres:89}, logoPath:"assets/backgrounds/splash_logo.png" }
  ],
  drivers: [
    {name:"Lucas Vale", flag:"🇧🇷", age:24, overall:78, salary:7200000, traits:["frio sob pressão","bom em chuva"], avatarPath:"assets/drivers/gabriel_bortoleto.png"},
    {name:"Theo Martins", flag:"🇵🇹", age:21, overall:73, salary:4100000, traits:["jovem talento","alta evolução"], avatarPath:"assets/drivers/andrea_antonelli.png"},
    {name:"Enzo Ritter", flag:"🇩🇪", age:29, overall:84, salary:13500000, traits:["classificação","consistência"], avatarPath:"assets/drivers/george_russell.png"},
    {name:"Kai Romano", flag:"🇮🇹", age:26, overall:80, salary:9800000, traits:["agressivo","ultrapassagem"], avatarPath:"assets/drivers/charles_leclerc.png"}
  ],
  staff: [
    {name:"Marina Koval", role:"Diretora Técnica", dept:"P&D", level:82, wage:120000, morale:84, effect:"+P&D aerodinâmico"},
    {name:"Rafael Nogueira", role:"Estrategista Chefe", dept:"Corrida", level:76, wage:85000, morale:78, effect:"+decisões de corrida"},
    {name:"Hana Fuji", role:"Chefe de Mecânicos", dept:"Operações", level:79, wage:92000, morale:81, effect:"+pit stop e confiabilidade"}
  ],
  calendar: [
    {round:1, gp:"GP do Bahrein", country:"Bahrein", laps:57, track:"Sakhir", status:"próximo", flag:"🇧🇭", date:"2026-03-08"},
    {round:2, gp:"GP da Arábia", country:"Arábia Saudita", laps:50, track:"Jeddah", status:"bloqueado", flag:"🇸🇦", date:"2026-03-15"},
    {round:3, gp:"GP da Austrália", country:"Austrália", laps:58, track:"Melbourne", status:"bloqueado", flag:"🇦🇺", date:"2026-03-29"}
  ],
  departments: ["Staff","Pilotos","Oficina/P&D","Marketing","Patrocínio","Finanças","Agenda","Corrida"],
  sponsors: [
    {name:"Vale Energy", value:12000000, status:"ativo"},
    {name:"GoldTech", value:7000000, status:"proposta"}
  ]
};
