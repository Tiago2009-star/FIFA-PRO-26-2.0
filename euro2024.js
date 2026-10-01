const euro2024Album = {
  name: 'Topps UEFA Euro 2024',
  year: '2024',
  total: 1428,
  imgUrl: (id) => `https://www.laststicker.com/i/cards/9861/${id.toLowerCase()}.jpg`,
  intro: [
    { id: 'TOPPS1', name: 'Topps Logo', type: 'foil' },
    { id: 'UEFA1', name: 'UEFA Euro 2024 Logo', type: 'foil' },
    { id: 'UEFA2', name: 'Matchball', type: 'foil' },
    { id: 'UEFA3', name: 'Corporate Sticker' },
    { id: 'EURO1', name: 'Trophy', type: 'foil' },
    { id: 'EURO2', name: 'Köln' },
    { id: 'EURO3', name: 'Dortmund' },
    { id: 'EURO4', name: 'Düsseldorf' },
    { id: 'EURO5', name: 'Frankfurt' },
    { id: 'EURO6', name: 'Gelsenkirchen' },
    { id: 'EURO7', name: 'Hamburg' },
    { id: 'EURO8', name: 'Leipzig' },
    { id: 'EURO9', name: 'München' },
    { id: 'EURO10', name: 'Stuttgart' },
    { id: 'EURO11', name: 'Berlin' }
  ],
  groups: {
    'A': {
      overview: [
        { id: 'GA1', name: 'Overview 1' },
        { id: 'GA2', name: 'Overview 2' }
      ],
      landmarks: [
        { id: 'GER-P1', name: 'Germany Landmark 1' },
        { id: 'GER-P2', name: 'Germany Landmark 2' },
        { id: 'SCO-P1', name: 'Scotland Landmark 1' },
        { id: 'SCO-P2', name: 'Scotland Landmark 2' },
        { id: 'HUN-P1', name: 'Hungary Landmark 1' },
        { id: 'HUN-P2', name: 'Hungary Landmark 2' },
        { id: 'SUI-P1', name: 'Switzerland Landmark 1' },
        { id: 'SUI-P2', name: 'Switzerland Landmark 2' }
      ],
      teams: [
        {
          name: 'Germany', country: 'de',
          special: [
            { id: 'GER-PTW', name: 'Jamal Musiala', type: 'foil' },
            { id: 'GER-SP', name: 'Leroy Sané', type: 'gold' },
            { id: 'GER-TOP1', name: 'Thomas Müller' },
            { id: 'GER-TOP2', name: 'Ilkay Gündogan' }
          ],
          stickers: [
            { id: 'GER1', name: 'Emblem', type: 'foil' },
            { id: 'GER2', name: 'Ilkay Gündogan', type: 'foil' },
            { id: 'GER3', name: 'Julian Brandt', type: 'foil' },
            { id: 'GER4', name: 'Thilo Kehrer' },
            { id: 'GER5', name: 'Nico Schlotterbeck' },
            { id: 'GER6', name: 'Benjamin Henrichs' },
            { id: 'GER7', name: 'Malick Thiaw' },
            { id: 'GER8', name: 'Robin Gosens' },
            { id: 'GER9', name: 'Niklas Süle' },
            { id: 'GER10', name: 'Joshua Kimmich' },
            { id: 'GER11', name: 'Jamal Musiala' },
            { id: 'GER12', name: 'Mario Götze' },
            { id: 'GER13', name: 'Emre Can' },
            { id: 'GER14', name: 'Timo Werner' },
            { id: 'GER15', name: 'Leroy Sané' },
            { id: 'GER16', name: 'Thomas Müller' },
            { id: 'GER17', name: 'Niclas Füllkrug' },
            { id: 'GER18', name: 'Karim Adeyemi' },
            { id: 'GER19', name: 'Oliver Kahn' },
            { id: 'GER20', name: 'Bastian Schweinsteiger' },
            { id: 'GER21', name: 'Lothar Matthäus' }
          ]
        },
        {
          name: 'Scotland', country: 'gb-sct',
          special: [
            { id: 'SCO-PTW', name: 'Billy Gilmour', type: 'foil' },
            { id: 'SCO-SP', name: 'Scott McTominay', type: 'gold' },
            { id: 'SCO-TOP1', name: 'John McGinn' },
            { id: 'SCO-TOP2', name: 'Ryan Porteous' }
          ],
          stickers: [
            { id: 'SCO1', name: 'Emblem', type: 'foil' },
            { id: 'SCO2', name: 'Andrew Robertson', type: 'foil' },
            { id: 'SCO3', name: 'Ché Adams', type: 'foil' },
            { id: 'SCO4', name: 'Angus Gunn' },
            { id: 'SCO5', name: 'Grant Hanley' },
            { id: 'SCO6', name: 'Jack Hendry' },
            { id: 'SCO7', name: 'Liam Cooper' },
            { id: 'SCO8', name: 'Nathan Patterson' },
            { id: 'SCO9', name: 'Ryan Porteous' },
            { id: 'SCO10', name: 'Aaron Hickey' },
            { id: 'SCO11', name: 'Kieran Tierney' },
            { id: 'SCO12', name: 'Callum McGregor' },
            { id: 'SCO13', name: 'Stuart Armstrong' },
            { id: 'SCO14', name: 'Billy Gilmour' },
            { id: 'SCO15', name: 'John McGinn' },
            { id: 'SCO16', name: 'Scott McTominay' },
            { id: 'SCO17', name: 'Lewis Ferguson' },
            { id: 'SCO18', name: 'Kenny McLean' },
            { id: 'SCO19', name: 'Ryan Jack' },
            { id: 'SCO20', name: 'Lyndon Dykes' },
            { id: 'SCO21', name: 'Ryan Christie' }
          ]
        },
        {
          name: 'Hungary', country: 'hu',
          special: [
            { id: 'HUN-PTW', name: 'Milos Kerkez', type: 'foil' },
            { id: 'HUN-SP', name: 'Willi Orbán', type: 'gold' },
            { id: 'HUN-TOP1', name: 'Martin Ádám' },
            { id: 'HUN-TOP2', name: 'Ádám Nagy' }
          ],
          stickers: [
            { id: 'HUN1', name: 'Emblem', type: 'foil' },
            { id: 'HUN2', name: 'Dominik Szoboszlai', type: 'foil' },
            { id: 'HUN3', name: 'Callum Styles', type: 'foil' },
            { id: 'HUN4', name: 'Dénes Dibusz' },
            { id: 'HUN5', name: 'Ádám Lang' },
            { id: 'HUN6', name: 'Attila Szalai' },
            { id: 'HUN7', name: 'Milos Kerkez' },
            { id: 'HUN8', name: 'Willi Orbán' },
            { id: 'HUN9', name: 'Endre Botka' },
            { id: 'HUN10', name: 'Loic Nego' },
            { id: 'HUN11', name: 'Bendegúz Bolla' },
            { id: 'HUN12', name: 'Ádám Nagy' },
            { id: 'HUN13', name: 'Zsolt Kalmár' },
            { id: 'HUN14', name: 'Dániel Gazdag' },
            { id: 'HUN15', name: 'Mihály Kata' },
            { id: 'HUN16', name: 'László Kleinheisler' },
            { id: 'HUN17', name: 'Barnabás Varga' },
            { id: 'HUN18', name: 'Roland Sallai' },
            { id: 'HUN19', name: 'Kevin Csoboth' },
            { id: 'HUN20', name: 'András Nemeth' },
            { id: 'HUN21', name: 'Martin Ádám' }
          ]
        },
        {
          name: 'Switzerland', country: 'ch',
          special: [
            { id: 'SUI-PTW', name: 'Fabian Rieder', type: 'foil' },
            { id: 'SUI-SP', name: 'Noah Okafor', type: 'gold' },
            { id: 'SUI-TOP1', name: 'Nico Elvedi' },
            { id: 'SUI-TOP2', name: 'Djibril Sow' }
          ],
          stickers: [
            { id: 'SUI1', name: 'Emblem', type: 'foil' },
            { id: 'SUI2', name: 'Granit Xhaka', type: 'foil' },
            { id: 'SUI3', name: 'Xherdan Shaqiri', type: 'foil' },
            { id: 'SUI4', name: 'Yann Sommer' },
            { id: 'SUI5', name: 'Silvan Widmer' },
            { id: 'SUI6', name: 'Manuel Akanji' },
            { id: 'SUI7', name: 'Ricardo Rodríguez' },
            { id: 'SUI8', name: 'Nico Elvedi' },
            { id: 'SUI9', name: 'Fabian Schär' },
            { id: 'SUI10', name: 'Edimilson Fernandes' },
            { id: 'SUI11', name: 'Michel Aebischer' },
            { id: 'SUI12', name: 'Denis Zakaria' },
            { id: 'SUI13', name: 'Remo Freuler' },
            { id: 'SUI14', name: 'Fabian Rieder' },
            { id: 'SUI15', name: 'Djibril Sow' },
            { id: 'SUI16', name: 'Filip Ugrinic' },
            { id: 'SUI17', name: 'Dan Ndoye' },
            { id: 'SUI18', name: 'Ruben Vargas' },
            { id: 'SUI19', name: 'Zeki Amdouni' },
            { id: 'SUI20', name: 'Breel Embolo' },
            { id: 'SUI21', name: 'Noah Okafor' }
          ]
        }
      ]
    },
    'B': {
      overview: [
        { id: 'GB1', name: 'Overview 1' },
        { id: 'GB2', name: 'Overview 2' }
      ],
      landmarks: [
        { id: 'ESP-P1', name: 'Spain Landmark 1' },
        { id: 'ESP-P2', name: 'Spain Landmark 2' },
        { id: 'CRO-P1', name: 'Croatia Landmark 1' },
        { id: 'CRO-P2', name: 'Croatia Landmark 2' },
        { id: 'ITA-P1', name: 'Italy Landmark 1' },
        { id: 'ITA-P2', name: 'Italy Landmark 2' },
        { id: 'ALB-P1', name: 'Albania Landmark 1' },
        { id: 'ALB-P2', name: 'Albania Landmark 2' }
      ],
      teams: [
        {
          name: 'Spain', country: 'es',
          special: [
            { id: 'ESP-PTW', name: 'Lamine Yamal', type: 'foil' },
            { id: 'ESP-SP', name: 'Rodri', type: 'gold' },
            { id: 'ESP-TOP1', name: 'Ferran Torres' },
            { id: 'ESP-TOP2', name: 'Pedri' }
          ],
          stickers: [
            { id: 'ESP1', name: 'Emblem', type: 'foil' },
            { id: 'ESP2', name: 'Álvaro Morata', type: 'foil' },
            { id: 'ESP3', name: 'Dani Olmo', type: 'foil' },
            { id: 'ESP4', name: 'Unai Simón' },
            { id: 'ESP5', name: 'César Azpilicueta' },
            { id: 'ESP6', name: 'Pedro Porro' },
            { id: 'ESP7', name: 'Alejandro Balde' },
            { id: 'ESP8', name: 'Robin Le Normand' },
            { id: 'ESP9', name: 'Pau Torres' },
            { id: 'ESP10', name: 'Aymeric Laporte' },
            { id: 'ESP11', name: 'Gavi' },
            { id: 'ESP12', name: 'Pedri' },
            { id: 'ESP13', name: 'Rodri' },
            { id: 'ESP14', name: 'Fabián Ruiz' },
            { id: 'ESP15', name: 'Nico Williams' },
            { id: 'ESP16', name: 'Mikel Oyarzabal' },
            { id: 'ESP17', name: 'Marco Asensio' },
            { id: 'ESP18', name: 'Yeremy Pino' },
            { id: 'ESP19', name: 'Lamine Yamal' },
            { id: 'ESP20', name: 'Ansu Fati' },
            { id: 'ESP21', name: 'Ferran Torres' }
          ]
        },
        {
          name: 'Croatia', country: 'hr',
          special: [
            { id: 'CRO-PTW', name: 'Joško Gvardiol', type: 'foil' },
            { id: 'CRO-SP', name: 'Mateo Kovačić', type: 'gold' },
            { id: 'CRO-TOP1', name: 'Andrej Kramarić' },
            { id: 'CRO-TOP2', name: 'Ivan Perišić' }
          ],
          stickers: [
            { id: 'CRO1', name: 'Emblem', type: 'foil' },
            { id: 'CRO2', name: 'Luka Modrić', type: 'foil' },
            { id: 'CRO3', name: 'Mateo Kovačić', type: 'foil' },
            { id: 'CRO4', name: 'Dominik Livaković' },
            { id: 'CRO5', name: 'Josip Stanišić' },
            { id: 'CRO6', name: 'Martin Erlić' },
            { id: 'CRO7', name: 'Josip Šutalo' },
            { id: 'CRO8', name: 'Borna Sosa' },
            { id: 'CRO9', name: 'Joško Gvardiol' },
            { id: 'CRO10', name: 'Domagoj Vida' },
            { id: 'CRO11', name: 'Josip Juranović' },
            { id: 'CRO12', name: 'Lovro Majer' },
            { id: 'CRO13', name: 'Marcelo Brozović' },
            { id: 'CRO14', name: 'Ivan Perišić' },
            { id: 'CRO15', name: 'Mario Pašalić' },
            { id: 'CRO16', name: 'Luka Ivanušec' },
            { id: 'CRO17', name: 'Luka Sučić' },
            { id: 'CRO18', name: 'Nikola Vlašić' },
            { id: 'CRO19', name: 'Mislav Oršić' },
            { id: 'CRO20', name: 'Andrej Kramarić' },
            { id: 'CRO21', name: 'Bruno Petković' }
          ]
        },
        {
          name: 'Italy', country: 'it',
          special: [
            { id: 'ITA-PTW', name: 'Wilfried Gnonto', type: 'foil' },
            { id: 'ITA-SP', name: 'Federico Chiesa', type: 'gold' },
            { id: 'ITA-TOP1', name: 'Ciro Immobile' },
            { id: 'ITA-TOP2', name: 'Federico Dimarco' }
          ],
          stickers: [
            { id: 'ITA1', name: 'Emblem', type: 'foil' },
            { id: 'ITA2', name: 'Leonardo Bonucci', type: 'foil' },
            { id: 'ITA3', name: 'Jorginho', type: 'foil' },
            { id: 'ITA4', name: 'Gianluigi Donnarumma' },
            { id: 'ITA5', name: 'Leonardo Spinazzola' },
            { id: 'ITA6', name: 'Francesco Acerbi' },
            { id: 'ITA7', name: 'Emerson Palmieri' },
            { id: 'ITA8', name: 'Giorgio Scalvini' },
            { id: 'ITA9', name: 'Alessandro Bastoni' },
            { id: 'ITA10', name: 'Federico Dimarco' },
            { id: 'ITA11', name: 'Gianluca Mancini' },
            { id: 'ITA12', name: 'Destiny Udogie' },
            { id: 'ITA13', name: 'Davide Frattesi' },
            { id: 'ITA14', name: 'Matteo Pessina' },
            { id: 'ITA15', name: 'Marco Verratti' },
            { id: 'ITA16', name: 'Manuel Locatelli' },
            { id: 'ITA17', name: 'Bryan Cristante' },
            { id: 'ITA18', name: 'Gianluca Scamacca' },
            { id: 'ITA19', name: 'Federico Chiesa' },
            { id: 'ITA20', name: 'Ciro Immobile' },
            { id: 'ITA21', name: 'Wilfried Gnonto' }
          ]
        },
        {
          name: 'Albania', country: 'al',
          special: [
            { id: 'ALB-PTW', name: 'Armando Broja', type: 'foil' },
            { id: 'ALB-SP', name: 'Elseid Hysaj', type: 'gold' },
            { id: 'ALB-TOP1', name: 'Jasir Asani' },
            { id: 'ALB-TOP2', name: 'Kristjan Asllani' }
          ],
          stickers: [
            { id: 'ALB1', name: 'Emblem', type: 'foil' },
            { id: 'ALB2', name: 'Etrit Berisha', type: 'foil' },
            { id: 'ALB3', name: 'Nedim Bajrami', type: 'foil' },
            { id: 'ALB4', name: 'Thomas Strakosha' },
            { id: 'ALB5', name: 'Iván Balliu' },
            { id: 'ALB6', name: 'Berat Djimsiti' },
            { id: 'ALB7', name: 'Elseid Hysaj' },
            { id: 'ALB8', name: 'Marash Kumbulla' },
            { id: 'ALB9', name: 'Ardian Ismajli' },
            { id: 'ALB10', name: 'Keidi Bare' },
            { id: 'ALB11', name: 'Klaus Gjasula' },
            { id: 'ALB12', name: 'Qazim Laçi' },
            { id: 'ALB13', name: 'Kristjan Asllani' },
            { id: 'ALB14', name: 'Anis Mehmeti' },
            { id: 'ALB15', name: 'Ylber Ramadani' },
            { id: 'ALB16', name: 'Jasir Asani' },
            { id: 'ALB17', name: 'Myrto Uzuni' },
            { id: 'ALB18', name: 'Sokol Çikalleshi' },
            { id: 'ALB19', name: 'Ernest Muçi' },
            { id: 'ALB20', name: 'Mirlind Daku' },
            { id: 'ALB21', name: 'Armando Broja' }
          ]
        }
      ]
    },
    'C': {
      overview: [
        { id: 'GC1', name: 'Overview 1' },
        { id: 'GC2', name: 'Overview 2' }
      ],
      landmarks: [
        { id: 'SVN-P1', name: 'Slovenia Landmark 1' },
        { id: 'SVN-P2', name: 'Slovenia Landmark 2' },
        { id: 'DEN-P1', name: 'Denmark Landmark 1' },
        { id: 'DEN-P2', name: 'Denmark Landmark 2' },
        { id: 'SRB-P1', name: 'Serbia Landmark 1' },
        { id: 'SRB-P2', name: 'Serbia Landmark 2' },
        { id: 'ENG-P1', name: 'England Landmark 1' },
        { id: 'ENG-P2', name: 'England Landmark 2' }
      ],
      teams: [
        {
          name: 'Slovenia', country: 'si',
          special: [
            { id: 'SVN-PTW', name: 'Žan Vipotnik', type: 'foil' },
            { id: 'SVN-SP', name: 'Benjamin Šeško', type: 'gold' },
            { id: 'SVN-TOP1', name: 'Žan Karničnik' },
            { id: 'SVN-TOP2', name: 'Andraž Šporar' }
          ],
          stickers: [
            { id: 'SVN1', name: 'Emblem', type: 'foil' },
            { id: 'SVN2', name: 'Jan Oblak', type: 'foil' },
            { id: 'SVN3', name: 'Benjamin Šeško', type: 'foil' },
            { id: 'SVN4', name: 'Jaka Bijol' },
            { id: 'SVN5', name: 'Jure Balkovec' },
            { id: 'SVN6', name: 'Miha Blažič' },
            { id: 'SVN7', name: 'Žan Karničnik' },
            { id: 'SVN8', name: 'Petar Stojanović' },
            { id: 'SVN9', name: 'David Brekalo' },
            { id: 'SVN10', name: 'Erik Janža' },
            { id: 'SVN11', name: 'Benjamin Verbič' },
            { id: 'SVN12', name: 'Sandi Lovrić' },
            { id: 'SVN13', name: 'Miha Zajc' },
            { id: 'SVN14', name: 'Jasmin Kurtić' },
            { id: 'SVN15', name: 'Adam Gnezda Čerin' },
            { id: 'SVN16', name: 'Jon Gorenc Stanković' },
            { id: 'SVN17', name: 'Luka Zahovič' },
            { id: 'SVN18', name: 'Jan Mlakar' },
            { id: 'SVN19', name: 'Žan Vipotnik' },
            { id: 'SVN20', name: 'Andraž Šporar' },
            { id: 'SVN21', name: 'Timi Max Elsnik' }
          ]
        },
        {
          name: 'Denmark', country: 'dk',
          special: [
            { id: 'DEN-PTW', name: 'Rasmus Højlund', type: 'foil' },
            { id: 'DEN-SP', name: 'Pierre-Emile Højbjerg', type: 'gold' },
            { id: 'DEN-TOP1', name: 'Andreas Christensen' },
            { id: 'DEN-TOP2', name: 'Jonas Wind' }
          ],
          stickers: [
            { id: 'DEN1', name: 'Emblem', type: 'foil' },
            { id: 'DEN2', name: 'Simon Kjaer', type: 'foil' },
            { id: 'DEN3', name: 'Mikkel Damsgaard', type: 'foil' },
            { id: 'DEN4', name: 'Kasper Schmeichel' },
            { id: 'DEN5', name: 'Andreas Christensen' },
            { id: 'DEN6', name: 'Victor Nelsson' },
            { id: 'DEN7', name: 'Joachim Andersen' },
            { id: 'DEN8', name: 'Rasmus Kristensen' },
            { id: 'DEN9', name: 'Jens Stryger Larsen' },
            { id: 'DEN10', name: 'Mathias Jensen' },
            { id: 'DEN11', name: 'Christian Nørgaard' },
            { id: 'DEN12', name: 'Philip Billing' },
            { id: 'DEN13', name: 'Christian Eriksen' },
            { id: 'DEN14', name: 'Jesper Lindstrøm' },
            { id: 'DEN15', name: 'Mohamed Daramy' },
            { id: 'DEN16', name: 'Pierre-Emile Hojbjerg' },
            { id: 'DEN17', name: 'Morten Hjulmand' },
            { id: 'DEN18', name: 'Jonas Wind' },
            { id: 'DEN19', name: 'Andreas Skov Olsen' },
            { id: 'DEN20', name: 'Yussuf Poulsen' },
            { id: 'DEN21', name: 'Rasmus Højlund' }
          ]
        },
        {
          name: 'Serbia', country: 'rs',
          special: [
            { id: 'SRB-PTW', name: 'Lazar Samardžić', type: 'foil' },
            { id: 'SRB-SP', name: 'Dušan Vlahović', type: 'gold' },
            { id: 'SRB-TOP1', name: 'Nikola Milenković' },
            { id: 'SRB-TOP2', name: 'Aleksandar Mitrović' }
          ],
          stickers: [
            { id: 'SRB1', name: 'Emblem', type: 'foil' },
            { id: 'SRB2', name: 'Dušan Tadić', type: 'foil' },
            { id: 'SRB3', name: 'Sergej Milinković-Savić', type: 'foil' },
            { id: 'SRB4', name: 'Vanja Milinković-Savić' },
            { id: 'SRB5', name: 'Strahinja Pavlović' },
            { id: 'SRB6', name: 'Filip Mladenović' },
            { id: 'SRB7', name: 'Miloš Veljković' },
            { id: 'SRB8', name: 'Nikola Milenković' },
            { id: 'SRB9', name: 'Strahinja Eraković' },
            { id: 'SRB10', name: 'Srđan Babić' },
            { id: 'SRB11', name: 'Nemanja Maksimović' },
            { id: 'SRB12', name: 'Nemanja Gudelj' },
            { id: 'SRB13', name: 'Saša Lukić' },
            { id: 'SRB14', name: 'Marko Grujić' },
            { id: 'SRB15', name: 'Ivan Ilić' },
            { id: 'SRB16', name: 'Filip Đuričić' },
            { id: 'SRB17', name: 'Lazar Samardžić' },
            { id: 'SRB18', name: 'Filip Kostić' },
            { id: 'SRB19', name: 'Andrija Živković' },
            { id: 'SRB20', name: 'Aleksandar Mitrović' },
            { id: 'SRB21', name: 'Dušan Vlahović' }
          ]
        },
        {
          name: 'England', country: 'gb-eng',
          special: [
            { id: 'ENG-PTW', name: 'Rico Lewis', type: 'foil' },
            { id: 'ENG-SP', name: 'Jude Bellingham', type: 'gold' },
            { id: 'ENG-TOP1', name: 'Mason Mount' },
            { id: 'ENG-TOP2', name: 'Trent Alexander-Arnold' }
          ],
          stickers: [
            { id: 'ENG1', name: 'Emblem', type: 'foil' },
            { id: 'ENG2', name: 'Harry Kane', type: 'foil' },
            { id: 'ENG3', name: 'Cole Palmer', type: 'foil' },
            { id: 'ENG4', name: 'Jordan Pickford' },
            { id: 'ENG5', name: 'Luke Thomas' },
            { id: 'ENG6', name: 'Harry Maguire' },
            { id: 'ENG7', name: 'Kieran Trippier' },
            { id: 'ENG8', name: 'Luke Shaw' },
            { id: 'ENG9', name: 'Trent Alexander-Arnold' },
            { id: 'ENG10', name: 'Marc Guéhi' },
            { id: 'ENG11', name: 'Fikayo Tomori' },
            { id: 'ENG12', name: 'Rico Lewis' },
            { id: 'ENG13', name: 'Eberechi Eze' },
            { id: 'ENG14', name: 'Declan Rice' },
            { id: 'ENG15', name: 'Jordan Henderson' },
            { id: 'ENG16', name: 'Jude Bellingham' },
            { id: 'ENG17', name: 'Mason Mount' },
            { id: 'ENG18', name: 'Jarrod Bowen' },
            { id: 'ENG19', name: 'Jack Grealish' },
            { id: 'ENG20', name: 'Ollie Watkins' },
            { id: 'ENG21', name: 'Callum Wilson' }
          ]
        }
      ]
    },
    'D': {
      overview: [
        { id: 'GD1', name: 'Overview 1' },
        { id: 'GD2', name: 'Overview 2' }
      ],
      landmarks: [
        { id: 'NED-P1', name: 'Netherlands Landmark 1' },
        { id: 'NED-P2', name: 'Netherlands Landmark 2' },
        { id: 'AUT-P1', name: 'Austria Landmark 1' },
        { id: 'AUT-P2', name: 'Austria Landmark 2' },
        { id: 'FRA-P1', name: 'France Landmark 1' },
        { id: 'FRA-P2', name: 'France Landmark 2' }
      ],
      playoff: [
        { id: 'POL-EST-SP', name: 'Robert Lewandowski / Markus Poom' },
        { id: 'WAL-FIN-SP', name: 'Brennan Johnson / Teemu Pukki' }
      ],
      teams: [
        {
          name: 'Netherlands', country: 'nl',
          special: [
            { id: 'NED-PTW', name: 'Xavi Simons', type: 'foil' },
            { id: 'NED-SP', name: 'Cody Gakpo', type: 'gold' },
            { id: 'NED-TOP1', name: 'Frenkie de Jong' },
            { id: 'NED-TOP2', name: 'Donyell Malen' }
          ],
          stickers: [
            { id: 'NED1', name: 'Emblem', type: 'foil' },
            { id: 'NED2', name: 'Virgil van Dijk', type: 'foil' },
            { id: 'NED3', name: 'Frenkie de Jong', type: 'foil' },
            { id: 'NED4', name: 'Justin Bijlow' },
            { id: 'NED5', name: 'Jeremie Frimpong' },
            { id: 'NED6', name: 'Micky van de Ven' },
            { id: 'NED7', name: 'Matthijs de Ligt' },
            { id: 'NED8', name: 'Denzel Dumfries' },
            { id: 'NED9', name: 'Lutsharel Geertruida' },
            { id: 'NED10', name: 'Daley Blind' },
            { id: 'NED11', name: 'Quilindschy Hartman' },
            { id: 'NED12', name: 'Nathan Aké' },
            { id: 'NED13', name: 'Tijjani Reijnders' },
            { id: 'NED14', name: 'Marten de Roon' },
            { id: 'NED15', name: 'Teun Koopmeiners' },
            { id: 'NED16', name: 'Donyell Malen' },
            { id: 'NED17', name: 'Xavi Simons' },
            { id: 'NED18', name: 'Cody Gakpo' },
            { id: 'NED19', name: 'Noa Lang' },
            { id: 'NED20', name: 'Steven Bergwijn' },
            { id: 'NED21', name: 'Memphis Depay' }
          ]
        },
        {
          name: 'Austria', country: 'at',
          special: [
            { id: 'AUT-PTW', name: 'Nicolas Seiwald', type: 'foil' },
            { id: 'AUT-SP', name: 'Marko Arnautović', type: 'gold' },
            { id: 'AUT-TOP1', name: 'Konrad Laimer' },
            { id: 'AUT-TOP2', name: 'Patrick Wimmer' }
          ],
          stickers: [
            { id: 'AUT1', name: 'Emblem', type: 'foil' },
            { id: 'AUT2', name: 'David Alaba', type: 'foil' },
            { id: 'AUT3', name: 'Junior Adamu', type: 'foil' },
            { id: 'AUT4', name: 'Alexander Schlager' },
            { id: 'AUT5', name: 'Stefan Posch' },
            { id: 'AUT6', name: 'Philipp Lienhart' },
            { id: 'AUT7', name: 'Phillipp Mwene' },
            { id: 'AUT8', name: 'Maximilian Wöber' },
            { id: 'AUT9', name: 'Kevin Danso' },
            { id: 'AUT10', name: 'Marcel Sabitzer' },
            { id: 'AUT11', name: 'Nicolas Seiwald' },
            { id: 'AUT12', name: 'Florian Grillitsch' },
            { id: 'AUT13', name: 'Xaver Schlager' },
            { id: 'AUT14', name: 'Konrad Laimer' },
            { id: 'AUT15', name: 'Christoph Baumgartner' },
            { id: 'AUT16', name: 'Florian Kainz' },
            { id: 'AUT17', name: 'Patrick Wimmer' },
            { id: 'AUT18', name: 'Marko Arnautović' },
            { id: 'AUT19', name: 'Sasa Kalajdzic' },
            { id: 'AUT20', name: 'Manprit Sarkaria' },
            { id: 'AUT21', name: 'Michael Gregoritsch' }
          ]
        },
        {
          name: 'France', country: 'fr',
          special: [
            { id: 'FRA-PTW', name: 'Eduardo Camavinga', type: 'foil' },
            { id: 'FRA-SP', name: 'Kingsley Coman', type: 'gold' },
            { id: 'FRA-TOP1', name: 'Randal Kolo Muani' },
            { id: 'FRA-TOP2', name: 'Ousmane Dembélé' }
          ],
          stickers: [
            { id: 'FRA1', name: 'Emblem', type: 'foil' },
            { id: 'FRA2', name: 'Zinedine Zidane', type: 'foil' },
            { id: 'FRA3', name: 'Ousmane Dembélé', type: 'foil' },
            { id: 'FRA4', name: 'Mike Maignan' },
            { id: 'FRA5', name: 'Ibrahima Konaté' },
            { id: 'FRA6', name: 'Jules Koundé' },
            { id: 'FRA7', name: 'Dayot Upamecano' },
            { id: 'FRA8', name: 'Castello Lukeba' },
            { id: 'FRA9', name: 'Mohamed Simakan' },
            { id: 'FRA10', name: 'Lucas Hernández' },
            { id: 'FRA11', name: 'Pierre Kalulu' },
            { id: 'FRA12', name: 'Theo Hernández' },
            { id: 'FRA13', name: 'Eduardo Camavinga' },
            { id: 'FRA14', name: 'Aurélien Tchouameni' },
            { id: 'FRA15', name: 'Adrien Rabiot' },
            { id: 'FRA16', name: 'Warren Zaïre-Emery' },
            { id: 'FRA17', name: 'Randal Kolo Muani' },
            { id: 'FRA18', name: 'Olivier Giroud' },
            { id: 'FRA19', name: 'Kingsley Coman' },
            { id: 'FRA20', name: 'Antoine Griezmann' },
            { id: 'FRA21', name: 'Marcus Thuram' }
          ]
        },
        {
          name: 'Poland', country: 'pl',
          stickers: [
            { id: 'POL1', name: 'Emblem', type: 'foil' },
            { id: 'POL2-3', name: 'Wojciech Szczęsny / Jan Bednarek' },
            { id: 'POL4-5', name: 'Matty Cash / Mateusz Wieteska' },
            { id: 'POL6-7', name: 'Tomasz Kędziora / Jakub Kiwior' },
            { id: 'POL8-9', name: 'Bartosz Slisz / Nicola Zalewski' },
            { id: 'POL10-11', name: 'Piotr Zieliński / Kacper Kozłowski' },
            { id: 'POL12-13', name: 'Damian Szymański / Karol Linetty' },
            { id: 'POL14-15', name: 'Arkadiusz Milik / Robert Lewandowski' }
          ]
        },
        {
          name: 'Estonia', country: 'ee',
          stickers: [
            { id: 'EST1', name: 'Emblem', type: 'foil' },
            { id: 'EST2-3', name: 'Karl Hein / Joonas Tamm' },
            { id: 'EST4-5', name: 'Märten Kuusk / Artur Pikk' },
            { id: 'EST6-7', name: 'Marco Lukka / Rasmus Peetson' },
            { id: 'EST8-9', name: 'Maksim Paskotsi / Taijo Teniste' },
            { id: 'EST10-11', name: 'Nikita Baranov / Rocco Shein' },
            { id: 'EST12-13', name: 'Georgi Tunjov / Martin Miller' },
            { id: 'EST14-15', name: 'Markus Poom / Martin Vetkal' }
          ]
        },
        {
          name: 'Wales', country: 'gb-wls',
          stickers: [
            { id: 'WAL1', name: 'Emblem', type: 'foil' },
            { id: 'WAL2-3', name: 'Danny Ward / Ben Davies' },
            { id: 'WAL4-5', name: 'Neco Williams / Joe Rodon' },
            { id: 'WAL6-7', name: 'Connor Roberts / Chris Mepham' },
            { id: 'WAL8-9', name: 'Aaron Ramsey / David Brooks' },
            { id: 'WAL10-11', name: 'Harry Wilson / Jordan James' },
            { id: 'WAL12-13', name: 'Ethan Ampadu / Daniel James' },
            { id: 'WAL14-15', name: 'Kieffer Moore / Brennan Johnson' }
          ]
        },
        {
          name: 'Finland', country: 'fi',
          stickers: [
            { id: 'FIN1', name: 'Emblem', type: 'foil' },
            { id: 'FIN2-3', name: 'Lukas Hradecky / Leo Väisänen' },
            { id: 'FIN4-5', name: 'Arttu Hoskonen / Nikolai Alho' },
            { id: 'FIN6-7', name: 'Robert Ivanov / Robin Lod' },
            { id: 'FIN8-9', name: 'Glen Kamara / Robert Taylor' },
            { id: 'FIN10-11', name: 'Rasmus Schüller / Kaan Kairinen' },
            { id: 'FIN12-13', name: 'Oliver Antman / Joel Pohjanpalo' },
            { id: 'FIN14-15', name: 'Benjamin Källman / Teemu Pukki' }
          ]
        }
      ]
    },
    'E': {
      overview: [
        { id: 'GE1', name: 'Overview 1' },
        { id: 'GE2', name: 'Overview 2' }
      ],
      landmarks: [
        { id: 'BEL-P1', name: 'Belgium Landmark 1' },
        { id: 'BEL-P2', name: 'Belgium Landmark 2' },
        { id: 'SVK-P1', name: 'Slovakia Landmark 1' },
        { id: 'SVK-P2', name: 'Slovakia Landmark 2' },
        { id: 'ROM-P1', name: 'Romania Landmark 1' },
        { id: 'ROM-P2', name: 'Romania Landmark 2' }
      ],
      playoff: [
        { id: 'ISR-ICE-SP', name: 'Manor Solomon / Alfred Finnbogason' },
        { id: 'BIH-UKR-SP', name: 'Rade Krunić / Mykhailo Mudryk' }
      ],
      teams: [
        {
          name: 'Belgium', country: 'be',
          special: [
            { id: 'BEL-PTW', name: 'Johan Bakayoko', type: 'foil' },
            { id: 'BEL-SP', name: 'Romelu Lukaku', type: 'gold' },
            { id: 'BEL-TOP1', name: 'Lois Openda' },
            { id: 'BEL-TOP2', name: 'Leandro Trossard' }
          ],
          stickers: [
            { id: 'BEL1', name: 'Emblem', type: 'foil' },
            { id: 'BEL2', name: 'Kevin De Bruyne', type: 'foil' },
            { id: 'BEL3', name: 'Amadou Onana', type: 'foil' },
            { id: 'BEL4', name: 'Thibaut Courtois' },
            { id: 'BEL5', name: 'Jan Vertonghen' },
            { id: 'BEL6', name: 'Wout Faes' },
            { id: 'BEL7', name: 'Timothy Castagne' },
            { id: 'BEL8', name: 'Arthur Theate' },
            { id: 'BEL9', name: 'Zeno Debast' },
            { id: 'BEL10', name: 'Ameen Al-Dakhil' },
            { id: 'BEL11', name: 'Leander Dendoncker' },
            { id: 'BEL12', name: 'Romeo Lavia' },
            { id: 'BEL13', name: 'Youri Tielemans' },
            { id: 'BEL14', name: 'Charles De Ketelaere' },
            { id: 'BEL15', name: 'Yannick Carrasco' },
            { id: 'BEL16', name: 'Alexis Saelemaekers' },
            { id: 'BEL17', name: 'Leandro Trossard' },
            { id: 'BEL18', name: 'Jérémy Doku' },
            { id: 'BEL19', name: 'Romelu Lukaku' },
            { id: 'BEL20', name: 'Michy Batshuayi' },
            { id: 'BEL21', name: 'Loïs Openda' }
          ]
        },
        {
          name: 'Slovakia', country: 'sk',
          special: [
            { id: 'SVK-PTW', name: 'Tomáš Suslov', type: 'foil' },
            { id: 'SVK-SP', name: 'Stanislav Lobotka', type: 'gold' },
            { id: 'SVK-TOP1', name: 'Dávid Hancko' },
            { id: 'SVK-TOP2', name: 'Róbert Mak' }
          ],
          stickers: [
            { id: 'SVK1', name: 'Emblem', type: 'foil' },
            { id: 'SVK2', name: 'Milan Škriniar', type: 'foil' },
            { id: 'SVK3', name: 'Laci Bénes', type: 'foil' },
            { id: 'SVK4', name: 'Martin Dúbravka' },
            { id: 'SVK5', name: 'Peter Pekarik' },
            { id: 'SVK6', name: 'Denis Vavro' },
            { id: 'SVK7', name: 'Michal Tomič' },
            { id: 'SVK8', name: 'Dávid Hancko' },
            { id: 'SVK9', name: 'Ondrej Duda' },
            { id: 'SVK10', name: 'Patrik Hrošovský' },
            { id: 'SVK11', name: 'Jakub Kadák' },
            { id: 'SVK12', name: 'Juraj Kucka' },
            { id: 'SVK13', name: 'Matúš Bero' },
            { id: 'SVK14', name: 'Stanislav Lobotka' },
            { id: 'SVK15', name: 'Tomáš Suslov' },
            { id: 'SVK16', name: 'Róbert Boženík' },
            { id: 'SVK17', name: 'Róbert Polievka' },
            { id: 'SVK18', name: 'Adam Zreľák' },
            { id: 'SVK19', name: 'Lukáš Haraslin' },
            { id: 'SVK20', name: 'Róbert Mak' },
            { id: 'SVK21', name: 'Erik Jirka' }
          ]
        },
        {
          name: 'Romania', country: 'ro',
          special: [
            { id: 'ROM-PTW', name: 'Ianis Hagi', type: 'foil' },
            { id: 'ROM-SP', name: 'Răzvan Marin', type: 'gold' },
            { id: 'ROM-TOP1', name: 'Valentin Mihăilă' },
            { id: 'ROM-TOP2', name: 'Darius Olaru' }
          ],
          stickers: [
            { id: 'ROM1', name: 'Emblem', type: 'foil' },
            { id: 'ROM2', name: 'Nicolae Stanciu', type: 'foil' },
            { id: 'ROM3', name: 'Ianis Hagi', type: 'foil' },
            { id: 'ROM4', name: 'Horațiu Moldovan' },
            { id: 'ROM5', name: 'Andrei Rațiu' },
            { id: 'ROM6', name: 'Radu Drăgușin' },
            { id: 'ROM7', name: 'Cristian Manea' },
            { id: 'ROM8', name: 'Vladimir Screciu' },
            { id: 'ROM9', name: 'Nicușor Bancu' },
            { id: 'ROM10', name: 'Andrei Burcă' },
            { id: 'ROM11', name: 'Tudor Băluță' },
            { id: 'ROM12', name: 'Alexandru Cicâldău' },
            { id: 'ROM13', name: 'Darius Olaru' },
            { id: 'ROM14', name: 'Răzvan Marin' },
            { id: 'ROM15', name: 'Olimpiu Moruțan' },
            { id: 'ROM16', name: 'Marius Marin' },
            { id: 'ROM17', name: 'George Puşcaş' },
            { id: 'ROM18', name: 'Valentin Mihăilă' },
            { id: 'ROM19', name: 'Denis Alibec' },
            { id: 'ROM20', name: 'Florinel Coman' },
            { id: 'ROM21', name: 'Dennis Man' }
          ]
        },
        {
          name: 'Israel', country: 'il',
          stickers: [
            { id: 'ISR1', name: 'Emblem', type: 'foil' },
            { id: 'ISR2-3', name: 'Omri Glazer / Miguel Vítor' },
            { id: 'ISR4-5', name: 'Raz Shlomo / Eli Dasa' },
            { id: 'ISR6-7', name: 'Sean Goldberg / Roy Revivo' },
            { id: 'ISR8-9', name: 'Doron Leidner / Oscar Gloukh' },
            { id: 'ISR10-11', name: 'Dor Peretz / Neta Lavi' },
            { id: 'ISR12-13', name: 'Ramzi Safouri / Gavriel Kanichowsky' },
            { id: 'ISR14-15', name: 'Liel Abada / Manor Solomon' }
          ]
        },
        {
          name: 'Iceland', country: 'is',
          stickers: [
            { id: 'ICE1', name: 'Emblem', type: 'foil' },
            { id: 'ICE2-3', name: 'Rúnar Rúnarsson / Alfons Sampsted' },
            { id: 'ICE4-5', name: 'Davíð Kristján Ólafsson / Valgeir Lunddal Fridriksson' },
            { id: 'ICE6-7', name: 'Sverrir Ingason / Hjörtur Hermannsson' },
            { id: 'ICE8-9', name: 'Daníel Leó Grétarsson / Aron Gunnarsson' },
            { id: 'ICE10-11', name: 'Birkir Bjarnason / Jón Dagur Thorsteinsson' },
            { id: 'ICE12-13', name: 'Albert Gudmundsson / Willum Thor Willumsson' },
            { id: 'ICE14-15', name: 'Mikael Anderson / Alfred Finnbogason' }
          ]
        },
        {
          name: 'Bosnia and Herzegovina', country: 'ba',
          stickers: [
            { id: 'BIH1', name: 'Emblem', type: 'foil' },
            { id: 'BIH2-3', name: 'Ibrahim Šehić / Anel Ahmedhodžić' },
            { id: 'BIH4-5', name: 'Dennis Hadžikadunić / Amar Dedić' },
            { id: 'BIH6-7', name: 'Sead Kolašinac / Benjamin Tahirović' },
            { id: 'BIH8-9', name: 'Miralem Pjanić / Gojko Cimirot' },
            { id: 'BIH10-11', name: 'Amir Hadžiahmetović / Rade Krunić' },
            { id: 'BIH12-13', name: 'Edin Džeko / Nemanja Bilbija' },
            { id: 'BIH14-15', name: 'Smail Prevljak / Ermedin Demirović' }
          ]
        },
        {
          name: 'Ukraine', country: 'ua',
          stickers: [
            { id: 'UKR1', name: 'Emblem', type: 'foil' },
            { id: 'UKR2-3', name: 'Anatoliy Trubin / Yukhym Konoplia' },
            { id: 'UKR4-5', name: 'Bogdan Mykhaylichenko / Oleksandr Zinchenko' },
            { id: 'UKR6-7', name: 'Ilya Zabarnyi / Vitaliy Mykolenko' },
            { id: 'UKR8-9', name: 'Mykola Matviyenko / Georgiy Sudakov' },
            { id: 'UKR10-11', name: 'Taras Stepanenko / Serhiy Sydorchuk' },
            { id: 'UKR12-13', name: 'Viktor Tsygankov / Andriy Yarmolenko' },
            { id: 'UKR14-15', name: 'Roman Yaremchuk / Mykhailo Mudryk' }
          ]
        }
      ]
    },
    'F': {
      overview: [
        { id: 'GF1', name: 'Overview 1' },
        { id: 'GF2', name: 'Overview 2' }
      ],
      landmarks: [
        { id: 'TUR-P1', name: 'Turkey Landmark 1' },
        { id: 'TUR-P2', name: 'Turkey Landmark 2' },
        { id: 'POR-P1', name: 'Portugal Landmark 1' },
        { id: 'POR-P2', name: 'Portugal Landmark 2' },
        { id: 'CZE-P1', name: 'Czechia Landmark 1' },
        { id: 'CZE-P2', name: 'Czechia Landmark 2' }
      ],
      playoff: [
        { id: 'GEO-LUX-SP', name: 'Khvicha Kvaratskhelia / Leandro Barreiro' },
        { id: 'GRE-KAZ-SP', name: 'Konstantinos Mavropanos / Bakhtiyor Zaynutdinov' }
      ],
      teams: [
        {
          name: 'Turkey', country: 'tr',
          special: [
            { id: 'TUR-PTW', name: 'Arda Güler', type: 'foil' },
            { id: 'TUR-SP', name: 'Cengiz Ünder', type: 'gold' },
            { id: 'TUR-TOP1', name: 'Merih Demiral' },
            { id: 'TUR-TOP2', name: 'Orkun Kökçü' }
          ],
          stickers: [
            { id: 'TUR1', name: 'Emblem', type: 'foil' },
            { id: 'TUR2', name: 'Hakan Çalhanoğlu', type: 'foil' },
            { id: 'TUR3', name: 'Barış Alper Yılmaz', type: 'foil' },
            { id: 'TUR4', name: 'Mert Günok' },
            { id: 'TUR5', name: 'Zeki Çelik' },
            { id: 'TUR6', name: 'Çağlar Söyüncü' },
            { id: 'TUR7', name: 'Eren Elmalı' },
            { id: 'TUR8', name: 'Abdülkerim Bardakcı' },
            { id: 'TUR9', name: 'Ozan Kabak' },
            { id: 'TUR10', name: 'Onur Bulut' },
            { id: 'TUR11', name: 'Ferdi Kadıoğlu' },
            { id: 'TUR12', name: 'Merih Demiral' },
            { id: 'TUR13', name: 'Cenk Özkacar' },
            { id: 'TUR14', name: 'Salih Özcan' },
            { id: 'TUR15', name: 'İrfan Can Kahveci' },
            { id: 'TUR16', name: 'Arda Güler' },
            { id: 'TUR17', name: 'Orkun Kökçü' },
            { id: 'TUR18', name: 'Kerem Aktürkoğlu' },
            { id: 'TUR19', name: 'Cenk Tosun' },
            { id: 'TUR20', name: 'Enes Ünal' },
            { id: 'TUR21', name: 'Cengiz Ünder' }
          ]
        },
        {
          name: 'Georgia', country: 'ge',
          stickers: [
            { id: 'GEO1', name: 'Emblem', type: 'foil' },
            { id: 'GEO2-3', name: 'Giorgi Mamardashvili / Guram Kashia' },
            { id: 'GEO4-5', name: 'Otar Kakabadze / Giorgi Gocholeishvili' },
            { id: 'GEO6-7', name: 'Lasha Dvali / Solomon Kverkvelia' },
            { id: 'GEO8-9', name: 'Luka Lochoshvili / Khvicha Kvaratskhelia' },
            { id: 'GEO10-11', name: 'Saba Lobjanidze / Nika Kvekveskiri' },
            { id: 'GEO12-13', name: 'Giorgi Chakvetadze / Zuriko Davitashvili' },
            { id: 'GEO14-15', name: 'Budu Zivzivadze / Georges Mikautadze' }
          ]
        },
        {
          name: 'Portugal', country: 'pt',
          special: [
            { id: 'POR-PTW', name: 'Rafael Leão', type: 'foil' },
            { id: 'POR-SP', name: 'Bernardo Silva', type: 'gold' },
            { id: 'POR-TOP1', name: 'Bruno Fernandes' },
            { id: 'POR-TOP2', name: 'Gonçalo Ramos' }
          ],
          stickers: [
            { id: 'POR1', name: 'Emblem', type: 'foil' },
            { id: 'POR2', name: 'Cristiano Ronaldo', type: 'foil' },
            { id: 'POR3', name: 'João Félix', type: 'foil' },
            { id: 'POR4', name: 'Diogo Costa' },
            { id: 'POR5', name: 'Nélson Semedo' },
            { id: 'POR6', name: 'António Silva' },
            { id: 'POR7', name: 'Rúben Dias' },
            { id: 'POR8', name: 'Raphaël Guerreiro' },
            { id: 'POR9', name: 'Diogo Dalot' },
            { id: 'POR10', name: 'Nuno Mendes' },
            { id: 'POR11', name: 'João Cancelo' },
            { id: 'POR12', name: 'João Palhinha' },
            { id: 'POR13', name: 'Danilo Pereira' },
            { id: 'POR14', name: 'Otávio' },
            { id: 'POR15', name: 'Rúben Neves' },
            { id: 'POR16', name: 'Vitinha' },
            { id: 'POR17', name: 'Bruno Fernandes' },
            { id: 'POR18', name: 'Bernardo Silva' },
            { id: 'POR19', name: 'Gonçalo Ramos' },
            { id: 'POR20', name: 'Diogo Jota' },
            { id: 'POR21', name: 'Rafael Leão' }
          ]
        },
        {
          name: 'Czech Republic', country: 'cz',
          special: [
            { id: 'CZE-PTW', name: 'Adam Hložek', type: 'foil' },
            { id: 'CZE-SP', name: 'Patrik Schick', type: 'gold' },
            { id: 'CZE-TOP1', name: 'Tomáš Holeš' },
            { id: 'CZE-TOP2', name: 'Alex Král' }
          ],
          stickers: [
            { id: 'CZE1', name: 'Emblem', type: 'foil' },
            { id: 'CZE2', name: 'Tomáš Souček', type: 'foil' },
            { id: 'CZE3', name: 'Mojmír Chytil', type: 'foil' },
            { id: 'CZE4', name: 'Jiří Pavlenka' },
            { id: 'CZE5', name: 'David Jurásek' },
            { id: 'CZE6', name: 'Jakub Brabec' },
            { id: 'CZE7', name: 'Vladimír Coufal' },
            { id: 'CZE8', name: 'Jaroslav Zelený' },
            { id: 'CZE9', name: 'David Douděra' },
            { id: 'CZE10', name: 'Tomáš Holeš' },
            { id: 'CZE11', name: 'Alex Král' },
            { id: 'CZE12', name: 'Ladislav Krejčí' },
            { id: 'CZE13', name: 'Michal Sadílek' },
            { id: 'CZE14', name: 'Ondřej Lingr' },
            { id: 'CZE15', name: 'Lukáš Sadílek' },
            { id: 'CZE16', name: 'Adam Hložek' },
            { id: 'CZE17', name: 'Tomáš Čvančara' },
            { id: 'CZE18', name: 'Jan Kuchta' },
            { id: 'CZE19', name: 'Patrik Schick' },
            { id: 'CZE20', name: 'Václav Černý' },
            { id: 'CZE21', name: 'Václav Jurečka' }
          ]
        },
        {
          name: 'Luxembourg', country: 'lu',
          stickers: [
            { id: 'LUX1', name: 'Emblem', type: 'foil' },
            { id: 'LUX2-3', name: 'Anthony Moris / Maxime Chanot' },
            { id: 'LUX4-5', name: 'Lars Gerson / Mica Pinto' },
            { id: 'LUX6-7', name: 'Enes Mahmutovic / Laurent Jans' },
            { id: 'LUX8-9', name: 'Marvin Martins / Vincent Thill' },
            { id: 'LUX10-11', name: 'Christopher Martins / Leandro Barreiro' },
            { id: 'LUX12-13', name: 'Mathias Olesen / Gerson Rodrigues' },
            { id: 'LUX14-15', name: 'Danel Sinani / Yvandro Borges Sanches' }
          ]
        },
        {
          name: 'Greece', country: 'gr',
          stickers: [
            { id: 'GRE1', name: 'Emblem', type: 'foil' },
            { id: 'GRE2-3', name: 'Odysseas Vlachodimos / Panagiotis Retsos' },
            { id: 'GRE4-5', name: 'Pantelis Hatzidiakos / Kostas Tsimikas' },
            { id: 'GRE6-7', name: 'Konstantinos Mavropanos / Dimitris Giannoulis' },
            { id: 'GRE8-9', name: 'George Baldock / Andreas Bouchalakis' },
            { id: 'GRE10-11', name: 'Dimitris Pelkas / Dimitrios Kourbelis' },
            { id: 'GRE12-13', name: 'Tasos Bakasetas / Petros Mantalos' },
            { id: 'GRE14-15', name: 'Manolis Siopis / Giorgios Masouras' }
          ]
        },
        {
          name: 'Kazakhstan', country: 'kz',
          stickers: [
            { id: 'KAZ1', name: 'Emblem', type: 'foil' },
            { id: 'KAZ2-3', name: 'Igor Shatskiy / Nuraly Alip' },
            { id: 'KAZ4-5', name: 'Lev Skvortsov / Alexandr Marochkin' },
            { id: 'KAZ6-7', name: 'Abzal Beysebekov / Yan Vorogovskiy' },
            { id: 'KAZ8-9', name: 'Ramazan Orazov / Askhat Tagybergen' },
            { id: 'KAZ10-11', name: 'Aslan Darabayev / Bakhtiyor Zaynutdinov' },
            { id: 'KAZ12-13', name: 'Elkhan Astanov / Abat Aimbetov' },
            { id: 'KAZ14-15', name: 'Maxim Samorodov / Vladislav Prokopenko' }
          ]
        }
      ]
    }
  },
  dreamTeam: [
    { id: 'MM1-2', name: 'Mascot / José Mourinho Signature' }
  ],
  legends: [
    { id: 'LEG1', name: 'Fernando Torres' },
    { id: 'LEG2', name: 'Gareth Bale' },
    { id: 'LEG3', name: 'Wayne Rooney', type: 'foil' },
    { id: 'LEG4', name: 'Pavel Nedved' },
    { id: 'LEG5', name: 'Andriy Shevchenko' },
    { id: 'LEG6', name: 'Clarence Seedorf' },
    { id: 'LEG7', name: 'Luis Figo' },
    { id: 'LEG8', name: 'Zinedine Zidane', type: 'foil' },
    { id: 'LEG9', name: 'Franz Beckenbauer', type: 'foil' },
    { id: 'LEG10', name: 'Zlatan Ibrahimović' }
  ]
};
