
let teams = {
  "A": { teams: [
    { name: "México", flag: "\u{1F1F2}\u{1F1FD}", players: ["Luis Malagón","Johan Vásquez","Jorge Sánchez","César Montes","Jesús Gallardo","Israel Reyes","Diego Lainez","Carlos Rodríguez","Edson Álvarez","Orbelín Pineda","Marcel Ruiz","Érick Sánchez","Hirving Lozano","Santiago Giménez","Raúl Jiménez","Alexis Vega","Roberto Alvarado","César Huerta"] },
    { name: "Sudáfrica", flag: "\u{1F1FF}\u{1F1E6}", players: ["Ronwen Williams","Sipho Chaine","Aubrey Modiba","Samukele Kabini","Mbekezeli Mbokazi","Khulumani Ndamane","Siyabonga Ngezana","Khuliso Mudau","Nkosinathi Sibisi","Teboho Mokoena","Thalente Mbatha","Bathasi Aubaas","Yaya Sithole","Sipho Mbule","Lyle Foster","Iqraam Rayners","Mohau Nkota","Oswin Appollis"] },
    { name: "Coreia do Sul", flag: "\u{1F1F0}\u{1F1F7}", players: ["Hyeon-woo Jo","Seung-Gyu Kim","Min-jae Kim","Yu-min Cho","Young-woo Seol","Han-beom Lee","Tae-seok Lee","Myung-jae Lee","Jae-sung Lee","In-beom Hwang","Kang-in Lee","Seung-ho Paik","Jens Castrop","Dong-gyeong Lee","Gue-sung Cho","Heung-min Son","Hee-chan Hwang","Hyeon-Gyu Oh"] },
    { name: "República Tcheca", flag: "\u{1F1E8}\u{1F1FF}", players: ["Matěj Kovář","Jindřich Staněk","Ladislav Krejčí","Vladimír Coufal","Jaroslav Zelený","Tomáš Holeš","David Zima","Michal Sadílek","Lukáš Provod","Lukáš Červ","Tomáš Souček","Pavel Šulc","Matěj Vydra","Vasil Kušej","Tomáš Chorý","Václav Černý","Adam Hložek","Patrik Schick"] }
  ]},
  "B": { teams: [
    { name: "Canadá", flag: "\u{1F1E8}\u{1F1E6}", players: ["Dayne St. Clair","Alphonso Davies","Alistair Johnston","Samuel Adekugbe","Richie Laryea","Derek Cornelius","Moïse Bombito","Kamal Miller","Stephen Eustáquio","Ismaël Koné","Jonathan Osorio","Jacob Shaffelburg","Mathieu Choinière","Niko Sigur","Tajon Buchanan","Liam Millar","Cyle Larin","Jonathan David"] },
    { name: "Bósnia e Herzegovina", flag: "\u{1F1E7}\u{1F1E6}", players: ["Nikola Vasilj","Amar Dedić","Sead Kolašinac","Tarik Muharemović","Nihad Mujakić","Nikola Katić","Amir Hadžiahmetović","Benjamin Tahirović","Armin Gigović","Ivan Šunjić","Ivan Bašić","Dženis Burnić","Esmir Bajraktarević","Amar Memić","Ermedin Demirović","Edin Džeko","Samed Baždar","Haris Tabaković"] },
    { name: "Catar", flag: "\u{1F1F6}\u{1F1E6}", players: ["Meshaal Barsham","Sultan Albrake","Lucas Mendes","Homam Ahmed","Boualem Khoukhi","Pedro Miguel","Tarek Salman","Mohamed Al-Mannai","Karim Boudiaf","Assim Madibo","Ahmed Fatehi","Mohammed Waad","Abdulaziz Hatem","Hassan Al-Haydos","Edmilson Junior","Akram Hassan Afif","Ahmed Al Ganehi","Almoez Ali"] },
    { name: "Suíça", flag: "\u{1F1E8}\u{1F1ED}", players: ["Gregor Kobel","Yvon Mvogo","Manuel Akanji","Ricardo Rodriguez","Nico Elvedi","Aurèle Amenda","Silvan Widmer","Granit Xhaka","Denis Zakaria","Remo Freuler","Fabian Rieder","Ardon Jashari","Johan Manzambi","Michel Aebischer","Breel Embolo","Ruben Vargas","Dan Ndoye","Zeki Amdouni"] }
  ]},
  "C": { teams: [
    { name: "Brasil", flag: "\u{1F1E7}\u{1F1F7}", players: ["Alisson","Bento","Marquinhos","Éder Militão","Gabriel Magalhães","Danilo","Wesley","Lucas Paquetá","Casemiro","Bruno Guimarães","Luiz Henrique","Vinícius Júnior","Rodrygo","João Pedro","Matheus Cunha","Gabriel Martinelli","Raphinha","Estêvão"] },
    { name: "Marrocos", flag: "\u{1F1F2}\u{1F1E6}", players: ["Yassine Bounou","Munir El Kajoui","Achraf Hakimi","Noussair Mazraoui","Nayef Aguerd","Romain Saïss","Jawad El Yamiq","Adam Masina","Sofyan Amrabat","Azzedine Ounahi","Eliesse Ben Seghir","Bilal El Khannouss","Ismael Saibari","Youssef En-Nesyri","Abde Ezzalzouli","Soufiane Rahimi","Brahim Díaz","Ayoub El Kaabi"] },
    { name: "Haití", flag: "\u{1F1ED}\u{1F1F9}", players: ["Johny Placide","Carlens Arcus","Martin Expérience","Jean-Kevin Duverne","Ricardo Adé","Duke Lacroix","Garven Metusala","Hannes Delcroix","Leverton Pierre","Danley Jean Jacques","Jean-Ricner Bellegarde","Christopher Attys","Derrick Etienne Jr.","Josué Casimir","Ruben Providence","Duckens Nazon","Louicius Deedson","Frantzdy Pierrot"] },
    { name: "Escócia", flag: "\u{1F1F4}\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F", players: ["Angus Gunn","Jack Hendry","Kieran Tierney","Aaron Hickey","Andrew Robertson","Scott McKenna","John Souttar","Anthony Ralston","Grant Hanley","Scott McTominay","Billy Gilmour","Lewis Ferguson","Ryan Christie","Kenny McLean","John McGinn","Lyndon Dykes","Che Adams","Ben Gannon-Doak"] }
  ]},
  "D": { teams: [
    { name: "Estados Unidos", flag: "\u{1F1FA}\u{1F1F8}", players: ["Matt Freese","Chris Richards","Tim Ream","Mark McKenzie","Alex Freeman","Antonee Robinson","Tyler Adams","Tanner Tessmann","Weston McKennie","Christian Roldan","Timothy Weah","Diego Luna","Malik Tillman","Christian Pulisic","Brenden Aaronson","Ricardo Pepi","Haji Wright","Folarin Balogun"] },
    { name: "Paraguai", flag: "\u{1F1F5}\u{1F1FE}", players: ["Roberto Fernández","Orlando Gill","Gustavo Gómez","Fabián Balbuena","Juan José Cáceres","Omar Alderete","Junior Alonso","Mathías Villasanti","Diego Gómez","Damián Bobadilla","Andrés Cubas","Matías Galarza Fonda","Julio Enciso","Alejandro Romero Gamarra","Miguel Almirón","Ramón Sosa","Ángel Romero","Antonio Sanabria"] },
    { name: "Austrália", flag: "\u{1F1E6}\u{1F1FA}", players: ["Mathew Ryan","Joe Gauci","Harry Souttar","Alessandro Circati","Jordan Bos","Aziz Behich","Cameron Burgess","Lewis Miller","Milos Degenek","Jackson Irvine","Riley McGree","Aiden O'Neill","Connor Metcalfe","Patrick Yazbek","Craig Goodwin","Kusini Yengi","Nestory Irankunda","Mohamed Touré"] },
    { name: "Turquia", flag: "\u{1F1F9}\u{1F1F7}", players: ["Uğurcan Çakır","Mert Müldür","Zeki Çelik","Abdülkerim Bardakçı","Çağlar Söyüncü","Merih Demiral","Ferdi Kadıoğlu","Kaan Ayhan","İsmail Yüksek","Hakan Çalhanoğlu","Orkun Kökçü","Arda Güler","İrfan Can Kahveci","Yunus Akgün","Can Uzun","Barış Alper Yılmaz","Kerem Aktürkoğlu","Kenan Yıldız"] }
  ]},
  "E": { teams: [
    { name: "Alemanha", flag: "\u{1F1E9}\u{1F1EA}", players: ["Marc-André ter Stegen","Jonathan Tah","David Raum","Nico Schlotterbeck","Antonio Rüdiger","Waldemar Anton","Ridle Baku","Maximilian Mittelstädt","Joshua Kimmich","Florian Wirtz","Felix Nmecha","Leon Goretzka","Jamal Musiala","Serge Gnabry","Kai Havertz","Leroy Sané","Karim Adeyemi","Nick Woltemade"] },
    { name: "Curaçao", flag: "\u{1F1E8}\u{1F1FE}", players: ["Eloy Room","Armando Obispo","Sherel Floranus","Jurien Gaari","Joshua Brenet","Roshon Van Eijma","Shurandy Sambo","Livano Comenencia","Godfried Roemeratoe","Juninho Bacuna","Leandro Bacuna","Tahith Chong","Kenji Gorré","Jearl Margaritha","Jurgen Locadia","Jeremy Antonisse","Gervane Kastaneer","Sontje Hansen"] },
    { name: "Costa do Marfim", flag: "\u{1F1E8}\u{1F1EE}", players: ["Yahia Fofana","Ghislain Konan","Wilfried Singo","Odilon Kossounou","Evan Ndicka","Willy Boly","Emmanuel Agbadou","Ousmane Diomande","Franck Kessié","Seko Fofana","Ibrahim Sangaré","Jean-Philippe Gbamin","Amad Diallo","Sébastien Haller","Simon Adingra","Yan Diomande","Evann Guessand","Oumar Diakité"] },
    { name: "Equador", flag: "\u{1F1EA}\u{1F1E8}", players: ["Hernán Galíndez","Gonzalo Valle","Piero Hincapié","Pervis Estupiñán","Willian Pacho","Ángelo Preciado","Joel Ordóñez","Moisés Caicedo","Alan Franco","Kendry Páez","Pedro Vite","John Yeboah","Leonardo Campana","Gonzalo Plata","Nilson Angulo","Alan Minda","Kevin Rodríguez","Enner Valencia"] }
  ]},
  "F": { teams: [
    { name: "Países Baixos", flag: "\u{1F1F3}\u{1F1F1}", players: ["Bart Verbruggen","Virgil van Dijk","Micky van de Ven","Jurriën Timber","Denzel Dumfries","Nathan Aké","Jeremie Frimpong","Jan Paul van Hecke","Tijjani Reijnders","Ryan Gravenberch","Teun Koopmeiners","Frenkie de Jong","Xavi Simons","Justin Kluivert","Memphis Depay","Donyell Malen","Wout Weghorst","Cody Gakpo"] },
    { name: "Japão", flag: "\u{1F1EF}\u{1F1F5}", players: ["Zion Suzuki","Henry Heroki Mochizuki","Ayumu Seko","Junnosuke Suzuki","Shogo Taniguchi","Tsuyoshi Watanabe","Kaishu Sano","Yuki Soma","Ao Tanaka","Daichi Kamada","Takefusa Kubo","Ritsu Doan","Keito Nakamura","Takumi Minamino","Shuto Machino","Junya Ito","Koki Ogawa","Ayase Ueda"] },
    { name: "Suécia", flag: "\u{1F1F8}\u{1F1EA}", players: ["Victor Johansson","Isak Hien","Gabriel Gudmundsson","Emil Holm","Victor Nilsson Lindelöf","Gustaf Lagerbielke","Lucas Bergvall","Hugo Larsson","Jesper Karlström","Yasin Ayari","Mattias Svanberg","Daniel Svensson","Ken Sema","Roony Bardghji","Dejan Kulusevski","Anthony Elanga","Alexander Isak","Viktor Gyökeres"] },
    { name: "Tunísia", flag: "\u{1F1F9}\u{1F1F3}", players: ["Bechir Ben Said","Aymen Dahmen","Yan Valery","Montassar Talbi","Yassine Meriah","Ali Abdi","Dylan Bronn","Ellyes Skhiri","Aissa Laidouni","Ferjani Sassi","Mohamed Ali Ben Romdhane","Hannibal Mejbri","Elias Achouri","Elias Saad","Hazem Mastouri","Ismael Gharbi","Sayfallah Ltaief","Naim Sliti"] }
  ]},
  "G": { teams: [
    { name: "Bélgica", flag: "\u{1F1E7}\u{1F1EA}", players: ["Thibaut Courtois","Arthur Theate","Timothy Castagne","Zeno Debast","Brandon Mechele","Maxim De Cuyper","Thomas Meunier","Youri Tielemans","Amadou Onana","Nicolas Raskin","Alexis Saelemaekers","Hans Vanaken","Kevin De Bruyne","Jérémy Doku","Charles De Ketelaere","Leandro Trossard","Loïs Openda","Romelu Lukaku"] },
    { name: "Egito", flag: "\u{1F1EA}\u{1F1EC}", players: ["Mohamed El Shenawy","Mohamed Hany","Mohamed Hamdy","Yasser Ibrahim","Khaled Sobhi","Ramy Rabia","Hossam Abdelmaguid","Ahmed Fatouh","Marwan Attia","Zizo","Hamdy Fathy","Mohamed Lasheen","Emam Ashour","Osama Faisal","Mohamed Salah","Mostafa Mohamed","Trézéguet","Omar Marmoush"] },
    { name: "Irã", flag: "\u{1F1EE}\u{1F1F7}", players: ["Alireza Beiranvand","Morteza Pouraliganji","Ehsan Hajsafi","Milad Mohammadi","Shojae Khalilzadeh","Ramin Rezaeian","Hossein Kanaani","Sadegh Moharrami","Saleh Hardani","Saeid Ezatolahi","Saman Ghoddos","Omid Noorafkan","Roozbeh Cheshmi","Mohammad Mohebi","Sardar Azmoun","Mehdi Taremi","Alireza Jahanbakhsh","Ali Gholizadeh"] },
    { name: "Nova Zelândia", flag: "\u{1F1F3}\u{1F1FF}", players: ["Max Crocombe","Alex Paulsen","Michael Boxall","Liberato Cacace","Tim Payne","Tyler Bindon","Francis de Vries","Finn Surman","Joe Bell","Sarpreet Singh","Ryan Thomas","Matthew Garbett","Marko Stamenić","Ben Old","Chris Wood","Elijah Just","Callum McCowatt","Kosta Barbarouses"] }
  ]},
  "H": { teams: [
    { name: "Espanha", flag: "\u{1F1EA}\u{1F1F8}", players: ["Unai Simón","Robin Le Normand","Aymeric Laporte","Dean Huijsen","Pedro Porro","Dani Carvajal","Marc Cucurella","Martín Zubimendi","Rodri","Pedri","Fabián Ruiz","Mikel Merino","Lamine Yamal","Dani Olmo","Nico Williams","Ferran Torres","Álvaro Morata","Mikel Oyarzabal"] },
    { name: "Cabo Verde", flag: "\u{1F1E8}\u{1F1FB}", players: ["Vozinha","Logan Costa","Pico","Diney","Steven Moreira","Wagner Pina","João Paulo","Yannick Semedo","Kevin Pina","Patrick Andrade","Jamiro Monteiro","Deroy Duarte","Garry Rodrigues","Jovane Cabral","Ryan Mendes","Dailon Livramento","Willy Semedo","Bebé"] },
    { name: "Arábia Saudita", flag: "\u{1F1F8}\u{1F1E6}", players: ["Nawaf Al Aqidi","Abdulrahman Al Sanbi","Saud Abdulhamid","Nawaf Boushal","Jihad Thakri","Moteb Al Harbi","Hassan Tambakti","Musab Aljuwayr","Ziyad Aljohani","Abdullah Al Khaibari","Nasser Al Dawsari","Saleh Abu Al Shamat","Marwan Al Sahafi","Salem Al Dawsari","Abdulrahman Al Aboud","Feras Al Brikan","Saleh Al Shehri","Abdullah Al Hamdan"] },
    { name: "Uruguai", flag: "\u{1F1FA}\u{1F1FE}", players: ["Sergio Rochet","Santiago Mele","Ronald Araújo","José María Giménez","Sebastián Cáceres","Mathías Olivera","Guillermo Varela","Nahitan Nández","Federico Valverde","Giorgian De Arrascaeta","Rodrigo Bentancur","Manuel Ugarte","Nicolás De La Cruz","Maximiliano Araújo","Darwin Núñez","Federico Viñas","Rodrigo Aguirre","Facundo Pellistri"] }
  ]},
  "I": { teams: [
    { name: "França", flag: "\u{1F1EB}\u{1F1F7}", players: ["Mike Maignan","Theo Hernández","William Saliba","Jules Koundé","Ibrahima Konaté","Dayot Upamecano","Lucas Digne","Aurélien Tchouaméni","Eduardo Camavinga","Manu Koné","Adrien Rabiot","Michael Olise","Ousmane Dembélé","Bradley Barcola","Désiré Doué","Kingsley Coman","Hugo Ekitike","Kylian Mbappé"] },
    { name: "Senegal", flag: "\u{1F1F8}\u{1F1F3}", players: ["Édouard Mendy","Yehvann Diouf","Moussa Niakhaté","Abdoulaye Seck","Ismail Jakobs","El Hadji Malick Diouf","Kalidou Koulibaly","Idrissa Gana Gueye","Pape Matar Sarr","Pape Gueye","Habib Diarra","Lamine Camara","Sadio Mané","Ismaïla Sarr","Boulaye Dia","Iliman Ndiaye","Nicolas Jackson","Krépin Diatta"] },
    { name: "Iraque", flag: "\u{1F1EE}\u{1F1F6}", players: ["Jalal Hassan","Rebin Sulaka","Hussein Ali","Akam Hashem","Merchas Doski","Zaid Tahseen","Manaf Younis","Zidane Iqbal","Amir Al-Ammari","Ibrahim Bayesh","Ali Jasim","Youssef Amyn","Aimar Sher","Marko Farji","Osama Rashid","Ali Al-Hamadi","Aymen Hussein","Mohanad Ali"] },
    { name: "Noruega", flag: "\u{1F1F3}\u{1F1F4}", players: ["Ørjan Nyland","Julian Ryerson","Leo Østigård","Kristoffer Ajer","Marcus Holmgren Pedersen","David Møller Wolfe","Torbjørn Heggem","Morten Thorsby","Martin Ødegaard","Sander Berge","Andreas Schjelderup","Patrick Berg","Erling Haaland","Alexander Sørloth","Aron Dønnum","Jørgen Strand Larsen","Antonio Nusa","Oscar Bobb"] }
  ]},
  "J": { teams: [
    { name: "Argentina", flag: "\u{1F1E6}\u{1F1F7}", players: ["Emiliano Martínez","Nahuel Molina","Cristian Romero","Nicolás Otamendi","Nicolás Tagliafico","Leonardo Balerdi","Enzo Fernández","Alexis Mac Allister","Rodrigo De Paul","Exequiel Palacios","Leandro Paredes","Nico Paz","Franco Mastantuono","Nicolás González","Lionel Messi","Lautaro Martínez","Julián Álvarez","Giuliano Simeone"] },
    { name: "Argélia", flag: "\u{1F1E6}\u{1F1FF}", players: ["Alexis Guendouz","Ramy Bensebaini","Youcef Atal","Rayan Aït-Nouri","Mohamed Amine Tougai","Aïssa Mandi","Ismael Bennacer","Houssem Aouar","Hicham Boudaoui","Ramiz Zerrouki","Nabil Bentaleb","Farés Chaibi","Riyad Mahrez","Saïd Benrahma","Anis Hadj Moussa","Amine Gouiri","Baghdad Bounedjah","Mohammed Amoura"] },
    { name: "Áustria", flag: "\u{1F1E6}\u{1F1F9}", players: ["Alexander Schlager","Patrick Pentz","David Alaba","Kevin Danso","Philipp Lienhart","Stefan Posch","Phillipp Mwene","Alexander Prass","Xaver Schlager","Marcel Sabitzer","Konrad Laimer","Florian Grillitsch","Nicolas Seiwald","Romano Schmid","Patrick Wimmer","Christoph Baumgartner","Michael Gregoritsch","Marko Arnautović"] },
    { name: "Jordânia", flag: "\u{1F1EF}\u{1F1F4}", players: ["Yazeed Abulaila","Ihsan Haddad","Mohammad Abu Hashish","Yazan Al-Arab","Abdallah Nasib","Saleem Obaid","Mohammad Abualnadi","Ibrahim Saadeh","Nizar Al-Rashdan","Noor Al-Rawabdeh","Mohannad Abu Taha","Amer Jamous","Musa Al-Taamari","Yazan Al-Naimat","Mahmoud Al-Mardi","Ali Olwan","Mohammad Abu Zrayq","Ibrahim Sabra"] }
  ]},
  "K": { teams: [
    { name: "Portugal", flag: "\u{1F1F5}\u{1F1F9}", players: ["Diogo Costa","José Sá","Rúben Dias","João Cancelo","Diogo Dalot","Nuno Mendes","Gonçalo Inácio","Bernardo Silva","Bruno Fernandes","Rúben Neves","Vitinha","João Neves","Cristiano Ronaldo","Francisco Trincão","João Félix","Gonçalo Ramos","Pedro Neto","Rafael Leão"] },
    { name: "Congo DR", flag: "\u{1F1E8}\u{1F1E9}", players: ["Lionel Mpasi","Aaron Wan-Bissaka","Axel Tuanzebe","Arthur Masuaku","Chancel Mbemba","Joris Kayembe","Charles Pickel","Ngal'ayel Mukau","Edo Kayembe","Samuel Moutoussamy","Noah Sadiki","Théo Bongonda","Meschack Elia","Yoane Wissa","Brian Cipenga","Fiston Mayele","Cédric Bakambu","Nathanaël Mbuku"] },
    { name: "Uzbequistão", flag: "\u{1F1FA}\u{1F1FF}", players: ["Utkir Yusupov","Farrukh Sayfiev","Sherzod Nasrullaev","Umar Eshmurodov","Husniddin Aliqulov","Rustamjon Ashurmatov","Khojiakbar Alijonov","Abdukodir Khusanov","Odiljon Hamrobekov","Otabek Shukurov","Jamshid Iskanderov","Azizbek Turgunboev","Khojimat Erkinov","Eldor Shomurodov","Oston Urunov","Jaloliddin Masharipov","Igor Sergeev","Abbosbek Fayzullaev"] },
    { name: "Colômbia", flag: "\u{1F1E8}\u{1F1F4}", players: ["Camilo Vargas","David Ospina","Dávinson Sánchez","Yerry Mina","Daniel Muñoz","Johan Mojica","Jhon Lucumí","Santiago Arias","Jefferson Lerma","Kevin Castaño","Richard Ríos","James Rodríguez","Juan Fernando Quintero","Jorge Carrascal","Jhon Arias","Jhon Córdoba","Luis Suárez","Luis Díaz"] }
  ]},
  "L": { teams: [
    { name: "Inglaterra", flag: "\u{1F1F4}\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F", players: ["Jordan Pickford","John Stones","Marc Guéhi","Ezri Konsa","Trent Alexander-Arnold","Reece James","Dan Burn","Jordan Henderson","Declan Rice","Jude Bellingham","Cole Palmer","Morgan Rogers","Anthony Gordon","Phil Foden","Bukayo Saka","Harry Kane","Marcus Rashford","Ollie Watkins"] },
    { name: "Croácia", flag: "\u{1F1ED}\u{1F1F7}", players: ["Dominik Livaković","Duje Ćaleta-Car","Joško Gvardiol","Josip Stanišić","Luka Vušković","Josip Šutalo","Kristijan Jakić","Luka Modrić","Mateo Kovačić","Martin Baturina","Lovro Majer","Mario Pašalić","Petar Sučić","Ivan Perišić","Marco Pašalić","Ante Budimir","Andrej Kramarić","Franjo Ivanović"] },
    { name: "Gana", flag: "\u{1F1EC}\u{1F1ED}", players: ["Lawrence Ati Zigi","Tariq Lamptey","Mohammed Salisu","Alidu Seidu","Alexander Djiku","Gideon Mensah","Caleb Yirenkyi","Abdul Fatawu Issahaku","Thomas Partey","Salis Abdul Samed","Kamaldeen Sulemana","Mohammed Kudus","Iñaki Williams","Jordan Ayew","André Ayew","Joseph Paintsil","Osman Bukari","Antoine Semenyo"] },
    { name: "Panamá", flag: "\u{1F1F5}\u{1F1E6}", players: ["Orlando Mosquera","Luis Mejía","Fidel Escobar","Andrés Andrade","Michael Amir Murillo","Eric Davis","José Córdoba","César Blackman","Cristian Martínez","Aníbal Godoy","Adalberto Carrasquilla","Édgar Bárcenas","Carlos Harvey","Ismael Díaz","José Fajardo","Cecilio Waterman","José Luis Rodríguez","Alberto Quintero"] }
  ]}
};

const teams2026 = teams;

const teams2022 = {};
const teams2018 = {};
const teams2014 = typeof teams2014_data !== 'undefined' ? teams2014_data : {};
const teams2010 = typeof teams2010_data !== 'undefined' ? teams2010_data : {};
const teams2006 = typeof teams2006_data !== 'undefined' ? teams2006_data : {};
const teams2002 = typeof teams2002_data !== 'undefined' ? teams2002_data : {};
const teams1998 = typeof teams1998_data !== 'undefined' ? teams1998_data : {};
const teams1994 = typeof teams1994_data !== 'undefined' ? teams1994_data : {};
const teams1990 = typeof teams1990_data !== 'undefined' ? teams1990_data : {};
const teams1986 = typeof teams1986_data !== 'undefined' ? teams1986_data : {};
const teams1982 = typeof teams1982_data !== 'undefined' ? teams1982_data : {};
const teams1978 = typeof teams1978_data !== 'undefined' ? teams1978_data : {};
const teams1974 = typeof teams1974_data !== 'undefined' ? teams1974_data : {};
const teams1970 = typeof teams1970_data !== 'undefined' ? teams1970_data : {};
if (typeof teams2002_data === 'undefined') console.warn('ATENÇÃO: teams2002_data não carregou (teams2002.js falhou). Verifique o ficheiro teams2002v2.js');

async function loadTeamsFromFirestore() {
  const years = ['2010', '2014', '2018', '2022', '2006', '2002', '1998', '1994', '1990'];
  const groups = ['A','B','C','D','E','F','G','H'];
  const promises = [];
  for (const year of years) {
    const target = year === '2010' ? teams2010 : (year === '2014' ? teams2014 : (year === '2018' ? teams2018 : (year === '2006' ? teams2006 : (year === '2002' ? teams2002 : (year === '1998' ? teams1998 : (year === '1994' ? teams1994 : (year === '1990' ? teams1990 : teams2022)))))));
    for (const g of groups) {
      promises.push(
        db.collection('teams').doc(`${year}_${g}`).get().then(snap => {
          if (snap.exists) target[g] = snap.data();
        }).catch(() => {})
      );
    }
  }
  await Promise.all(promises);
}

const fwcStickers = [
  { num: 0, name: "Panini Artwork", desc: "Bicycle Kick" },
  { num: 1, name: "Troféu FIFA", desc: "World Cup Trophy" },
  { num: 2, name: "Logótipo", desc: "FIFA World Cup 2026" },
  { num: 3, name: "Mascotes", desc: "Maple, Zavu & Clutch" },
  { num: 4, name: "We Are FIFA", desc: "Slogan Oficial" },
  { num: 5, name: "Bola Trionda", desc: "Adidas Match Ball" },
  { num: 6, name: "CAN", desc: "Copa Vermelha" },
  { num: 7, name: "MEX", desc: "Copa Verde" },
  { num: 8, name: "USA", desc: "Copa Azul" },
  { num: 9, name: "FIFA Museum", desc: "Itália 1934" },
  { num: 10, name: "FIFA Museum", desc: "Uruguai 1950" },
  { num: 11, name: "FIFA Museum", desc: "Alemanha 1954" },
  { num: 12, name: "FIFA Museum", desc: "Brasil 1962" },
  { num: 13, name: "FIFA Museum", desc: "Alemanha 1974" },
  { num: 14, name: "FIFA Museum", desc: "Argentina 1986" },
  { num: 15, name: "FIFA Museum", desc: "Brasil 1994" },
  { num: 16, name: "FIFA Museum", desc: "Brasil 2002" },
  { num: 17, name: "FIFA Museum", desc: "Itália 2006" },
  { num: 18, name: "FIFA Museum", desc: "Alemanha 2014" },
  { num: 19, name: "FIFA Museum", desc: "Argentina 2022" }
];

const cocaStickers = [
  { num: 1, name: "Lamine Yamal", team: "Espanha", pos: 595, url: "https://www.laststicker.com/i/cards/12176/cc-eu1.jpg" },
  { num: 2, name: "Joshua Kimmich", team: "Alemanha", pos: 351, url: "https://www.laststicker.com/i/cards/12176/cc-eu2.jpg" },
  { num: 3, name: "Eduardo Camavinga", team: "França", pos: 670, url: "https://www.laststicker.com/i/cards/12176/cc-eu3.jpg" },
  { num: 4, name: "Federico Valverde", team: "Uruguai", pos: 650, url: "https://www.laststicker.com/i/cards/12176/cc-eu4.jpg" },
  { num: 5, name: "Joško Gvardiol", team: "Croácia", pos: 924, url: "https://www.laststicker.com/i/cards/12176/cc-eu5.jpg" },
  { num: 6, name: "Virgil van Dijk", team: "Países Baixos", pos: 423, url: "https://www.laststicker.com/i/cards/12176/cc-eu6.jpg" },
  { num: 7, name: "Alphonso Davies", team: "Canadá", pos: 103, url: "https://www.laststicker.com/i/cards/12176/cc-eu7.jpg" },
  { num: 8, name: "Raúl Jiménez", team: "México", pos: 37, url: "https://www.laststicker.com/i/cards/12176/cc-eu8.jpg" },
  { num: 9, name: "William Saliba", team: "França", pos: 664, url: "https://www.laststicker.com/i/cards/12176/cc-eu9.jpg" },
  { num: 10, name: "Lautaro Martínez", team: "Argentina", pos: 758, url: "https://www.laststicker.com/i/cards/12176/cc-eu10.jpg" },
  { num: 11, name: "Harry Kane", team: "Inglaterra", pos: 918, url: "https://www.laststicker.com/i/cards/12176/cc-eu11.jpg" },
  { num: 12, name: "Antonee Robinson", team: "Estados Unidos", pos: 12, url: "https://www.laststicker.com/i/cards/12176/cc-eu12.jpg" }
];

const updateStickers = [
  { num: 1, name: "Luca Zidane", team: "Argélia", pos: "GR", replacedNum: 2, replacedName: "Alexis Guendouz" },
  { num: 2, name: "Rafik Belghali", team: "Argélia", pos: "ZAG", replacedNum: 4, replacedName: "Youcef Atal" },
  { num: 3, name: "Ibrahim Maza", team: "Argélia", pos: "MD", replacedNum: 8, replacedName: "Ismaël Bennacer" },
  { num: 4, name: "Farès Ghedjemis", team: "Argélia", pos: "AT", replacedNum: 19, replacedName: "Baghdad Bounedjah" },
  { num: 5, name: "Adil Boulbina", team: "Argélia", pos: "AT", replacedNum: 16, replacedName: "Saïd Benrahma" },
  { num: 6, name: "Giovani Lo Celso", team: "Argentina", pos: "MD", replacedNum: 15, replacedName: "Franco Mastantuono" },
  { num: 7, name: "Paul Izzo", team: "Austrália", pos: "GR", replacedNum: 3, replacedName: "Joe Gauci" },
  { num: 8, name: "Jason Geria", team: "Austrália", pos: "ZAG", replacedNum: 9, replacedName: "Lewis Miller" },
  { num: 9, name: "Paul Okon-Engstler", team: "Austrália", pos: "MD", replacedNum: 16, replacedName: "Patrick Yazbek" },
  { num: 10, name: "Ajdin Hrustic", team: "Austrália", pos: "MD", replacedNum: 12, replacedName: "Riley McGree" },
  { num: 11, name: "Nishan Velupillay", team: "Austrália", pos: "AT", replacedNum: 17, replacedName: "Craig Goodwin" },
  { num: 12, name: "Dodi Lukébakio", team: "Bélgica", pos: "AT", replacedNum: 19, replacedName: "Loïs Openda" },
  { num: 13, name: "Weverton", team: "Brasil", pos: "GR", replacedNum: 3, replacedName: "Bento" },
  { num: 14, name: "Alex Sandro", team: "Brasil", pos: "ZAG", replacedNum: 5, replacedName: "Éder Militão" },
  { num: 15, name: "Endrick", team: "Brasil", pos: "AT", replacedNum: 16, replacedName: "João Pedro" },
  { num: 16, name: "Neymar Jr", team: "Brasil", pos: "AT", replacedNum: 15, replacedName: "Rodrygo" },
  { num: 17, name: "Igor Thiago", team: "Brasil", pos: "AT", replacedNum: 20, replacedName: "Estêvão" },
  { num: 18, name: "Laros Duarte", team: "Cabo Verde", pos: "MD", replacedNum: 11, replacedName: "Patrick Andrade" },
  { num: 19, name: "Nuno Da Costa", team: "Cabo Verde", pos: "AT", replacedNum: 20, replacedName: "Bebé" },
  { num: 20, name: "Joel Waterman", team: "Canadá", pos: "ZAG", replacedNum: 5, replacedName: "Samuel Adekugbe" },
  { num: 21, name: "Alfie Jones", team: "Canadá", pos: "ZAG", replacedNum: 9, replacedName: "Kamal Miller" },
  { num: 22, name: "Guéla Doué", team: "Costa do Marfim", pos: "ZAG", replacedNum: 7, replacedName: "Willy Boly" },
  { num: 23, name: "Elye Wahi", team: "Costa do Marfim", pos: "AT", replacedNum: 16, replacedName: "Sébastien Haller" },
  { num: 24, name: "Nicolas Pépé", team: "Costa do Marfim", pos: "AT", replacedNum: 14, replacedName: "Jean-Philippe Gbamin" },
  { num: 25, name: "Nikola Vlašić", team: "Croácia", pos: "MD", replacedNum: 12, replacedName: "Lovro Majer" },
  { num: 26, name: "Igor Matanović", team: "Croácia", pos: "AT", replacedNum: 20, replacedName: "Franjo Ivanović" },
  { num: 27, name: "Vladimír Darida", team: "República Tcheca", pos: "MD", replacedNum: 16, replacedName: "Vasil Kušej" },
  { num: 28, name: "David Douděra", team: "República Tcheca", pos: "MD", replacedNum: 15, replacedName: "Matěj Vydra" },
  { num: 29, name: "Mojmír Chytil", team: "República Tcheca", pos: "AT", replacedNum: 18, replacedName: "Václav Černý" },
  { num: 30, name: "Anthony Valencia", team: "Equador", pos: "AT", replacedNum: 15, replacedName: "Leonardo Campana" },
  { num: 31, name: "Mohamed Abdelmonem", team: "Egito", pos: "ZAG", replacedNum: 4, replacedName: "Mohamed Hamdy" },
  { num: 32, name: "Mahmoud Saber", team: "Egito", pos: "MD", replacedNum: 6, replacedName: "Khaled Sobhi" },
  { num: 33, name: "Haissem Hassan", team: "Egito", pos: "AT", replacedNum: 18, replacedName: "Mostafa Mohamed" },
  { num: 34, name: "Ibrahim Adel", team: "Egito", pos: "AT", replacedNum: 16, replacedName: "Osama Faisal" },
  { num: 35, name: "Nico O'Reilly", team: "Inglaterra", pos: "MD", replacedNum: 6, replacedName: "Trent Alexander-Arnold" },
  { num: 36, name: "Eberechi Eze", team: "Inglaterra", pos: "MD", replacedNum: 12, replacedName: "Cole Palmer" },
  { num: 37, name: "Noni Madueke", team: "Inglaterra", pos: "AT", replacedNum: 16, replacedName: "Phil Foden" },
  { num: 38, name: "N'Golo Kanté", team: "França", pos: "MD", replacedNum: 10, replacedName: "Eduardo Camavinga" },
  { num: 39, name: "Rayan Cherki", team: "França", pos: "AT", replacedNum: 18, replacedName: "Kingsley Coman" },
  { num: 40, name: "Marcus Thuram", team: "França", pos: "AT", replacedNum: 19, replacedName: "Hugo Ekitiké" },
  { num: 41, name: "Manuel Neuer", team: "Alemanha", pos: "GR", replacedNum: 2, replacedName: "Marc-André ter Stegen" },
  { num: 42, name: "Malick Thiaw", team: "Alemanha", pos: "ZAG", replacedNum: 8, replacedName: "Ridle Baku" },
  { num: 43, name: "Aleksandar Pavlović", team: "Alemanha", pos: "MD", replacedNum: 16, replacedName: "Serge Gnabry" },
  { num: 44, name: "Angelo Stiller", team: "Alemanha", pos: "MD", replacedNum: 9, replacedName: "Maximilian Mittelstädt" },
  { num: 45, name: "Deniz Undav", team: "Alemanha", pos: "AT", replacedNum: 19, replacedName: "Karim Adeyemi" },
  { num: 46, name: "Benjamin Asare", team: "Gana", pos: "GR", replacedNum: 3, replacedName: "Tariq Lamptey" },
  { num: 47, name: "Jonas Adjetey", team: "Gana", pos: "ZAG", replacedNum: 6, replacedName: "Alexander Djiku" },
  { num: 48, name: "Kojo Peprah Oppong", team: "Gana", pos: "ZAG", replacedNum: 4, replacedName: "Mohammed Salisu" },
  { num: 49, name: "Kwasi Sibo", team: "Gana", pos: "MD", replacedNum: 11, replacedName: "Salis Abdul Samed" },
  { num: 50, name: "Christopher Bonsu Baah", team: "Gana", pos: "MD", replacedNum: 14, replacedName: "Mohammed Kudus" },
  { num: 51, name: "Ernest Nuamah", team: "Gana", pos: "AT", replacedNum: 17, replacedName: "André Ayew" },
  { num: 52, name: "Brandon Thomas-Asante", team: "Gana", pos: "AT", replacedNum: 18, replacedName: "Joseph Paintsil" },
  { num: 53, name: "Prince Adu", team: "Gana", pos: "AT", replacedNum: 19, replacedName: "Osman Bukari" },
  { num: 54, name: "Wilguens Paugain", team: "Haití", pos: "ZAG", replacedNum: 8, replacedName: "Garven Metusala" },
  { num: 55, name: "Wilson Isidor", team: "Haití", pos: "AT", replacedNum: 14, replacedName: "Christopher Attys" },
  { num: 56, name: "Arya Yousefi", team: "Irã", pos: "ZAG", replacedNum: 3, replacedName: "Morteza Pouraliganji" },
  { num: 57, name: "Ali Nemati", team: "Irã", pos: "GR", replacedNum: 9, replacedName: "Sadegh Moharrami" },
  { num: 58, name: "Amirmohammad Razzaghinia", team: "Irã", pos: "ZAG", replacedNum: 14, replacedName: "Omid Noorafkan" },
  { num: 59, name: "Ali Alipour", team: "Irã", pos: "AT", replacedNum: 17, replacedName: "Sardar Azmoun" },
  { num: 60, name: "Amirhossein Hosseinzadeh", team: "Irã", pos: "AT", replacedNum: 20, replacedName: "Ali Gholizadeh" },
  { num: 61, name: "Kevin Yakob", team: "Iraque", pos: "MD", replacedNum: 17, replacedName: "Osama Rashid" },
  { num: 62, name: "Hiroki Ito", team: "Japão", pos: "ZAG", replacedNum: 3, replacedName: "Henry Heroki Mochizuki" },
  { num: 63, name: "Wataru Endo", team: "Japão", pos: "MD", replacedNum: 9, replacedName: "Yuki Soma" },
  { num: 64, name: "Yuito Suzuki", team: "Japão", pos: "AT", replacedNum: 17, replacedName: "Shuto Machino" },
  { num: 65, name: "Daizen Maeda", team: "Japão", pos: "AT", replacedNum: 16, replacedName: "Takumi Minamino" },
  { num: 66, name: "Odeh Fakhoury", team: "Jordânia", pos: "MD", replacedNum: 16, replacedName: "Yazan Al-Naimat" },
  { num: 67, name: "Taehyeon Kim", team: "Coreia do Sul", pos: "MD", replacedNum: 9, replacedName: "Myung-jae Lee" },
  { num: 68, name: "Moonhwan Kim", team: "Coreia do Sul", pos: "ZAG", replacedNum: 5, replacedName: "Yu-min Cho" },
  { num: 69, name: "Guillermo Ochoa", team: "México", pos: "GR", replacedNum: 2, replacedName: "Luis Malagón" },
  { num: 70, name: "Érik Lira", team: "México", pos: "MD", replacedNum: 12, replacedName: "Marcel Ruiz" },
  { num: 71, name: "Álvaro Fidalgo", team: "México", pos: "MD", replacedNum: 9, replacedName: "Carlos Rodríguez" },
  { num: 72, name: "Brian Gutiérrez", team: "México", pos: "MD", replacedNum: 14, replacedName: "Érick Sánchez" },
  { num: 73, name: "Gilberto Mora", team: "México", pos: "MD", replacedNum: 8, replacedName: "Diego Lainez" },
  { num: 74, name: "Armando González", team: "México", pos: "AT", replacedNum: 15, replacedName: "Hirving Lozano" },
  { num: 75, name: "Issa Diop", team: "Marrocos", pos: "ZAG", replacedNum: 7, replacedName: "Romain Saïss" },
  { num: 76, name: "Anass Salah-Eddine", team: "Marrocos", pos: "ZAG", replacedNum: 8, replacedName: "Jawad El Yamiq" },
  { num: 77, name: "Chadi Riad", team: "Marrocos", pos: "ZAG", replacedNum: 9, replacedName: "Adam Masina" },
  { num: 78, name: "Neil El Aynaoui", team: "Marrocos", pos: "MD", replacedNum: 12, replacedName: "Eliesse Ben Seghir" },
  { num: 79, name: "Chemsdine Talbi", team: "Marrocos", pos: "AT", replacedNum: 16, replacedName: "Youssef En-Nesyri" },
  { num: 80, name: "Quinten Timber", team: "Países Baixos", pos: "ZAG", replacedNum: 8, replacedName: "Jeremie Frimpong" },
  { num: 81, name: "Noa Lang", team: "Países Baixos", pos: "MD", replacedNum: 15, replacedName: "Xavi Simons" },
  { num: 82, name: "Jens Petter Hauge", team: "Noruega", pos: "AT", replacedNum: 17, replacedName: "Aron Dønnum" },
  { num: 83, name: "Braian Ojeda", team: "Paraguai", pos: "MD", replacedNum: 9, replacedName: "Mathías Villasanti" },
  { num: 84, name: "Álex Arce", team: "Paraguai", pos: "AT", replacedNum: 19, replacedName: "Ángel Romero" },
  { num: 85, name: "Ayoub Aloui", team: "Catar", pos: "ZAG", replacedNum: 8, replacedName: "Tarek Salman" },
  { num: 86, name: "Jassem Gaber", team: "Catar", pos: "MD", replacedNum: 14, replacedName: "Mohammed Waad" },
  { num: 87, name: "Mohammed Muntari", team: "Catar", pos: "AT", replacedNum: 19, replacedName: "Ahmed Al-Ganehi" },
  { num: 88, name: "Abdulelah Alamri", team: "Arábia Saudita", pos: "ZAG", replacedNum: 3, replacedName: "Abdulrahman Al Sanbi" },
  { num: 89, name: "Ali Majrashi", team: "Arábia Saudita", pos: "ZAG", replacedNum: 15, replacedName: "Marwan Al Sahafi" },
  { num: 90, name: "Mohamed Kanno", team: "Arábia Saudita", pos: "MD", replacedNum: 14, replacedName: "Saleh Abu Al Shamat" },
  { num: 91, name: "Sultan Mandash", team: "Arábia Saudita", pos: "AT", replacedNum: 17, replacedName: "Abdulrahman Al Aboud" },
  { num: 92, name: "Nathan Patterson", team: "Escócia", pos: "ZAG", replacedNum: 12, replacedName: "Billy Gilmour" },
  { num: 93, name: "Ibrahim Mbaye", team: "Senegal", pos: "AT", replacedNum: 17, replacedName: "Boulaye Dia" },
  { num: 94, name: "Ime Okon", team: "Sudáfrica", pos: "ZAG", replacedNum: 8, replacedName: "Siyabonga Ngezana" },
  { num: 95, name: "Jayden Adams", team: "Sudáfrica", pos: "MD", replacedNum: 16, replacedName: "Sipho Mbule" },
  { num: 96, name: "Themba Zwane", team: "Sudáfrica", pos: "MD", replacedNum: 14, replacedName: "Bathusi Aubaas" },
  { num: 97, name: "Relebohile Mofokeng", team: "Sudáfrica", pos: "AT", replacedNum: 19, replacedName: "Mohau Nkota" },
  { num: 98, name: "Pau Cubarsí", team: "Espanha", pos: "ZAG", replacedNum: 3, replacedName: "Robin Le Normand" },
  { num: 99, name: "Alejandro Grimaldo", team: "Espanha", pos: "ZAG", replacedNum: 5, replacedName: "Dean Huijsen" },
  { num: 100, name: "Marcos Llorente", team: "Espanha", pos: "MD", replacedNum: 7, replacedName: "Dani Carvajal" },
  { num: 101, name: "Yeremy Pino", team: "Espanha", pos: "AT", replacedNum: 19, replacedName: "Álvaro Morata" },
  { num: 102, name: "Carl Starfelt", team: "Suécia", pos: "ZAG", replacedNum: 5, replacedName: "Emil Holm" },
  { num: 103, name: "Besfort Zeneli", team: "Suécia", pos: "MD", replacedNum: 9, replacedName: "Hugo Larsson" },
  { num: 104, name: "Benjamin Nygren", team: "Suécia", pos: "AT", replacedNum: 16, replacedName: "Roony Bardghji" },
  { num: 105, name: "Alexander Bernhardsson", team: "Suécia", pos: "AT", replacedNum: 17, replacedName: "Dejan Kulusevski" },
  { num: 106, name: "Abdelmouhib Chamakh", team: "Tunísia", pos: "GR", replacedNum: 2, replacedName: "Bechir Ben Said" },
  { num: 107, name: "Omar Rekik", team: "Tunísia", pos: "ZAG", replacedNum: 6, replacedName: "Yassine Meriah" },
  { num: 108, name: "Anis Ben Slimane", team: "Tunísia", pos: "MD", replacedNum: 11, replacedName: "Ferjani Sassi" },
  { num: 109, name: "Rani Khedira", team: "Tunísia", pos: "MD", replacedNum: 10, replacedName: "Aissa Laidouni" },
  { num: 110, name: "Mohamed Belhadj Mahmoud", team: "Tunísia", pos: "AT", replacedNum: 12, replacedName: "Mohamed Ali Ben Romdhane" },
  { num: 111, name: "Mortadha Ben Ouanes", team: "Tunísia", pos: "AT", replacedNum: 20, replacedName: "Naim Sliti" },
  { num: 112, name: "Sebastian Tounekti", team: "Tunísia", pos: "AT", replacedNum: 19, replacedName: "Sayfallah Ltaief" },
  { num: 113, name: "Matías Viña", team: "Uruguai", pos: "ZAG", replacedNum: 9, replacedName: "Nahitan Nández" },
  { num: 114, name: "Gio Reyna", team: "Estados Unidos", pos: "MD", replacedNum: 9, replacedName: "Tanner Tessmann" },
  { num: 115, name: "Sebastian Berhalter", team: "Estados Unidos", pos: "MD", replacedNum: 14, replacedName: "Diego Luna" },
  { num: 116, name: "Jakhongir Urozov", team: "Uzbequistão", pos: "AT", replacedNum: 6, replacedName: "Husniddin Aliqulov" },
  { num: 117, name: "Akmal Mozgovoy", team: "Uzbequistão", pos: "MD", replacedNum: 15, replacedName: "Khojimat Erkinov" },
  { num: 118, name: "Azizjon Ganiev", team: "Uzbequistão", pos: "MD", replacedNum: 14, replacedName: "Azizbek Turgunboev" }
];

const updateLookup = new Map();
updateStickers.forEach(u => updateLookup.set(u.team + '|' + u.replacedNum, u.num));
const updateByNum = new Map();
updateStickers.forEach(u => updateByNum.set(u.num, u));

const posLabels = { GK: "GR", DF: "ZAG", MF: "MD", FW: "AT" };

const lsTeamCode2018 = {
  "Rússia":"rus","Arábia Saudita":"ksa","Egito":"egy","Uruguai":"uru",
  "Portugal":"por","Espanha":"esp","Marrocos":"mar","Irã":"irn",
  "França":"fra","Austrália":"aus","Peru":"per","Dinamarca":"den",
  "Argentina":"arg","Islândia":"isl","Croácia":"cro","Nigéria":"nga",
  "Brasil":"bra","Suíça":"sui","Costa Rica":"crc","Sérvia":"srb",
  "Alemanha":"ger","México":"mex","Suécia":"swe","Coreia do Sul":"kor",
  "Bélgica":"bel","Panamá":"pan","Tunísia":"tun","Inglaterra":"eng",
  "Polônia":"pol","Senegal":"sen","Colômbia":"col","Japão":"jpn"
};

const lsTeamCode = {
  "Catar":"qat","Equador":"ecu","Senegal":"sen","Holanda":"ned",
  "Inglaterra":"eng","Irã":"irn","EUA":"usa","País de Gales":"wal",
  "Argentina":"arg","Arábia Saudita":"ksa","México":"mex","Polónia":"pol",
  "França":"fra","Austrália":"aus","Dinamarca":"den","Tunísia":"tun",
  "Espanha":"esp","Costa Rica":"crc","Alemanha":"ger","Japão":"jpn",
  "Bélgica":"bel","Canadá":"can","Marrocos":"mar","Croácia":"cro",
  "Brasil":"bra","Sérvia":"srb","Suíça":"sui","Camarões":"cmr",
  "Portugal":"por","Gana":"gha","Uruguai":"uru","Coreia do Sul":"kor"
};

const updateTeamCode = {
  "Argélia":"alg","Argentina":"arg","Austrália":"aus","Bélgica":"bel",
  "Brasil":"bra","Cabo Verde":"cpv","Canadá":"can","Costa do Marfim":"civ",
  "Croácia":"cro","República Tcheca":"cze","Equador":"ecu","Egito":"egy",
  "Inglaterra":"eng","França":"fra","Alemanha":"ger","Gana":"gha",
  "Haití":"hai","Irã":"irn","Iraque":"irq","Japão":"jpn",
  "Jordânia":"jor","Coreia do Sul":"kor","México":"mex","Marrocos":"mar",
  "Países Baixos":"ned","Noruega":"nor","Paraguai":"par","Catar":"qat",
  "Arábia Saudita":"ksa","Escócia":"sco","Senegal":"sen","Sudáfrica":"rsa",
  "Espanha":"esp","Suécia":"swe","Tunísia":"tun","Estados Unidos":"usa","Uzbequistão":"uzb"
};

function getUpdateImageUrl(teamName, replacedNum) {
  const code = updateTeamCode[teamName];
  if (!code || !replacedNum) return '';
  return `https://www.laststicker.com/i/cards/12176/${code}${replacedNum}x.jpg`;
}

const teamIso = {
  "México":"mx","Sudáfrica":"za","Coreia do Sul":"kr","República Tcheca":"cz",
  "Canadá":"ca","Bósnia e Herzegovina":"ba","Catar":"qa","Suíça":"ch",
  "Brasil":"br","Marrocos":"ma","Haití":"ht","Escócia":"gb-sct",
  "Estados Unidos":"us","Paraguai":"py","Austrália":"au","Turquia":"tr",
  "Alemanha":"de","Curaçao":"cw","Costa do Marfim":"ci","Equador":"ec",
  "Países Baixos":"nl","Japão":"jp","Suécia":"se","Tunísia":"tn",
  "Bélgica":"be","Egito":"eg","Irã":"ir","Nova Zelândia":"nz",
  "Espanha":"es","Cabo Verde":"cv","Arábia Saudita":"sa","Uruguai":"uy",
  "França":"fr","Senegal":"sn","Iraque":"iq","Noruega":"no",
  "Argentina":"ar","Argélia":"dz","Áustria":"at","Jordânia":"jo",
  "Portugal":"pt","Congo DR":"cd","Uzbequistão":"uz","Colômbia":"co",
  "Inglaterra":"gb-eng","Croácia":"hr","Gana":"gh","Panamá":"pa",
  "Holanda":"nl","EUA":"us","País de Gales":"gb","Polônia":"pl",
  "Dinamarca":"dk","Sérvia":"rs","Camarões":"cm","Costa Rica":"cr","Polónia":"pl",
  "Rússia":"ru","Peru":"pe","Islândia":"is","Nigéria":"ng",
  "Coreia do Sul":"kr","Arábia Saudita":"sa",
  "Honduras":"hn","Grécia":"gr","Chile":"cl",
  "Brasil":"br","Croácia":"hr","México":"mx","Camarões":"cm","Espanha":"es","Países Baixos":"nl","Chile":"cl","Austrália":"au","Colômbia":"co","Grécia":"gr","Costa do Marfim":"ci","Japão":"jp","Uruguai":"uy","Costa Rica":"cr","Inglaterra":"gb","Itália":"it","Suíça":"ch","Equador":"ec","França":"fr","Honduras":"hn","Argentina":"ar","Bósnia e Herzegovina":"ba","Irã":"ir","Nigéria":"ng","Alemanha":"de","Portugal":"pt","Gana":"gh","Estados Unidos":"us","Bélgica":"be","Argélia":"dz","Rússia":"ru","Coreia do Sul":"kr",
  "South Africa":"za","Uruguay":"uy","France":"fr","Argentina":"ar","Nigeria":"ng","South Korea":"kr","Greece":"gr","England":"gb","United States":"us","Algeria":"dz","Slovenia":"si","Germany":"de","Australia":"au","Serbia":"rs","Ghana":"gh","Netherlands":"nl","Denmark":"dk","Cameroon":"cm","Italy":"it","Paraguay":"py","New Zealand":"nz","Slovakia":"sk","Brazil":"br","North Korea":"kp","Ivory Coast":"ci","Portugal":"pt","Spain":"es","Switzerland":"ch","Honduras":"hn","Chile":"cl","Mexico":"mx","Japan":"jp",
  "Serbia and Montenegro":"rs","Trinidad and Tobago":"tt","Togo":"tg","Angola":"ao","Czech Republic":"cz","Ukraine":"ua","Poland":"pl","Iran":"ir","Tunisia":"tn","Saudi Arabia":"sa","Sweden":"se","Costa Rica":"cr","Croatia":"hr","Ecuador":"ec",  "USA":"us","China":"cn","Ireland":"ie",
  "Scotland":"gb","Morocco":"ma","Norway":"no","Austria":"at","Bulgaria":"bg","Belgium":"be","Yugoslavia":"rs","Colombia":"co","Romania":"ro","Jamaica":"jm",
  "Russia":"ru","Bolivia":"bo","Turkey":"tr","Polónia":"pl",
  "Soviet Union":"ru","Hungary":"hu","Northern Ireland":"gb","West Germany":"de","Alemanha Ocidental":"de",
  "Italy":"it","Peru":"pe","El Salvador":"sv","Kuwait":"kw","Czechoslovakia":"cz",  "Iraq":"iq","Canada":"ca","Egypt":"eg","UAE":"ae",
  "Israel":"il","East Germany":"de","Haiti":"ht","Zaire":"cd","Hungria":"hu"
};
const customFlags = {
  "East Germany": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_East_Germany.svg/1280px-Flag_of_East_Germany.svg.png"
};
function getFlagImg(name, size) {
  const s = size || 20;
  const w = s;
  const h = Math.round(s * 0.6);
  if (customFlags[name]) {
    return `<img src="${customFlags[name]}" alt="${name}" style="width:${w}px;height:${h}px;vertical-align:middle;border-radius:2px;object-fit:contain;">`;
  }
  const iso = teamIso[name];
  if (!iso) return '';
  return `<img src="https://flagcdn.com/${s}x${Math.round(s*0.75)}/${iso}.png" alt="${name}" style="width:${s}px;height:${Math.round(s*0.75)}px;vertical-align:middle;border-radius:2px;">`;
}
const teamBadgeFallback = {
  "Croácia": "https://http2.mlstatic.com/D_NQ_NP_922526-MLB112854002001_062026-O.webp"
};
const teamColors2022 = {
  "Catar":["#8B1A4A","#fff"],"Equador":["#FCD116","#003DA5"],"Senegal":["#00853F","#F7D618","#E31B23"],
  "Holanda":["#FF6600","#fff"],"Inglaterra":["#FFF","#C8102E"],"Irã":["#239F40","#DA0000","#fff"],
  "EUA":["#002868","#BF0A30","#fff"],"País de Gales":["#FFF","#D4003C"],
  "Argentina":["#74ACDF","#FFF"],"Arábia Saudita":["#006C35","#FFF"],
  "México":["#006847","#CE1126","#FFF"],"Polónia":["#FFF","#DC143C"],
  "França":["#002395","#ED2939","#FFF"],"Austrália":["#00008B","#FFF"],
  "Dinamarca":["#C8102E","#FFF"],"Tunísia":["#E70013","#FFF"],
  "Espanha":["#AA151B","#F1BF00","#FFF"],"Costa Rica":["#002B7F","#FFF"],
  "Alemanha":["#000","#DD0000","#FFCC00"],"Japão":["#FFF","#BC002D"],
  "Bélgica":["#000","#FDDA24","#ED2939"],"Canadá":["#FF0000","#FFF"],
  "Marrocos":["#C1272D","#006233","#FFF"],"Croácia":["#171796","#FF0000","#FFF"],
  "Brasil":["#009739","#FEDD00","#012169"],"Sérvia":["#C6363C","#0C4076","#FFF"],
  "Suíça":["#FF0000","#FFF"],"Camarões":["#007A5E","#CE1126","#FCD116"],
  "Portugal":["#006600","#FF0000","#FFF"],"Gana":["#006B3F","#FCD116","#000"],
  "Uruguai":["#FFF","#5DCBF9","#000"],"Coreia do Sul":["#FFF","#003478","#C60C30"]
};

const teamColors2018 = {
  "Rússia":["#E4181C","#0039A6","#FFF"],"Arábia Saudita":["#006C35","#FFF"],"Egito":["#CE1126","#000","#FFF"],"Uruguai":["#FFF","#5DCBF9","#000"],
  "Portugal":["#006600","#FF0000","#FFF"],"Espanha":["#AA151B","#F1BF00","#FFF"],"Marrocos":["#C1272D","#006233","#FFF"],"Irã":["#239F40","#DA0000","#FFF"],
  "França":["#002395","#ED2939","#FFF"],"Austrália":["#00008B","#FFF"],"Peru":["#D91023","#FFF"],"Dinamarca":["#C8102E","#FFF"],
  "Argentina":["#74ACDF","#FFF"],"Islândia":["#0038E3","#FFF","#DC143C"],"Croácia":["#171796","#FF0000","#FFF"],"Nigéria":["#008751","#FFF","#000"],
  "Brasil":["#009739","#FEDD00","#012169"],"Suíça":["#FF0000","#FFF"],"Costa Rica":["#002B7F","#FFF"],"Sérvia":["#C6363C","#0C4076","#FFF"],
  "Alemanha":["#000","#DD0000","#FFCC00"],"México":["#006847","#CE1126","#FFF"],"Suécia":["#006AA7","#FECC00"],"Coreia do Sul":["#FFF","#003478","#C60C30"],
  "Bélgica":["#000","#FDDA24","#ED2939"],"Panamá":["#002B7F","#FFF","#CE1126"],"Tunísia":["#E70013","#FFF"],"Inglaterra":["#FFF","#C8102E"],
  "Polônia":["#FFF","#DC143C"],"Senegal":["#00853F","#F7D618","#E31B23"],"Colômbia":["#FCD116","#003087","#CE1126"],"Japão":["#FFF","#BC002D"]
};

const teamColors2026 = {
  "México":["#006847","#CE1126","#FFF"],"África do Sul":["#007A4D","#FFB81C","#FFF"],"Coreia do Sul":["#FFF","#003478","#C60C30"],"República Tcheca":["#FFF","#D7141A2323","#11457E"],
  "Canadá":["#FF0000","#FFF"],"Bósnia e Herzegovina":["#0033A0","#FFF","#FCD116"],"Catar":["#8B1A4A","#FFF"],"Suíça":["#FF0000","#FFF"],
  "Brasil":["#009739","#FEDD00","#012169"],"Marrocos":["#C1272D","#006233","#FFF"],"Haití":["#00209F","#CE1126"],"Escócia":["#0065BD","#FFF"],
  "EUA":["#002868","#BF0A30","#FFF"],"Paraguai":["#CE1126","#FFF","#002B7F"],"Austrália":["#00008B","#FFF"],"Turquia":["#E30A17","#FFF"],
  "Alemanha":["#000","#DD0000","#FFCC00"],"Curaçao":["#FFD100","#0033A0","#FFF"],"Costa do Marfim":["#FF8E00","#009A44","#FFF"],"Equador":["#FCD116","#003DA5"],
  "Países Baixos":["#FF6600","#FFF"],"Japão":["#FFF","#BC002D"],"Suécia":["#006AA7","#FECC00"],"Tunísia":["#E70013","#FFF"],
  "Bélgica":["#000","#FDDA24","#ED2939"],"Egito":["#CE1126","#000","#FFF"],"Irã":["#239F40","#DA0000","#FFF"],"Nova Zelândia":["#000","#FFF"],
  "Espanha":["#AA151B","#F1BF00","#FFF"],"Cabo Verde":["#0033A0","#FFD100","#CE1126"],"Arábia Saudita":["#006C35","#FFF"],"Uruguai":["#FFF","#5DCBF9","#000"],
  "França":["#002395","#ED2939","#FFF"],"Senegal":["#00853F","#F7D618","#E31B23"],"Iraque":["#CE1126","#FFF","#000"],"Noruega":["#EF2B2D","#002868","#FFF"],
  "Argentina":["#74ACDF","#FFF"],"Argélia":["#006233","#FFF"],"Áustria":["#ED1C24","#FFF"],"Jordânia":["#000","#FFF","#000"],
  "Portugal":["#006600","#FF0000","#FFF"],"Congo DR":["#009739","#FFD100","#CE1126"],"Uzbequistão":["#009E5D","#FFF","#0046A0"],"Colômbia":["#FCD116","#003087","#CE1126"],
  "Inglaterra":["#FFF","#C8102E"],"Croácia":["#171796","#FF0000","#FFF"],"Gana":["#006B3F","#FCD116","#000"],"Panamá":["#002B7F","#FFF","#CE1126"],
  "Holanda":["#FF6600","#FFF"],"EUA":["#002868","#BF0A30","#FFF"],"País de Gales":["#FFF","#D4003C"],"Polônia":["#FFF","#DC143C"],
  "Dinamarca":["#C8102E","#FFF"],"Sérvia":["#C6363C","#0C4076","#FFF"],"Camarões":["#007A5E","#CE1126","#FCD116"],
  "Costa Rica":["#002B7F","#FFF"],"Coreia do Sul":["#FFF","#003478","#C60C30"]
};

const teamColors2014 = {
  "Brasil":["#009739","#FEDD00","#012169"],"Croácia":["#171796","#FF0000","#FFF"],"México":["#006847","#CE1126","#FFF"],"Camarões":["#007A5E","#CE1126","#FCD116"],
  "Espanha":["#AA151B","#F1BF00","#FFF"],"Países Baixos":["#FF6600","#FFF"],"Chile":["#D52B1E","#0033A0","#FFF"],"Austrália":["#00008B","#FFF"],
  "Colômbia":["#FCD116","#003087","#CE1126"],"Grécia":["#0D5EAF","#FFF"],"Costa do Marfim":["#FF8E00","#009A44","#FFF"],"Japão":["#FFF","#BC002D"],
  "Uruguai":["#FFF","#5DCBF9","#000"],"Costa Rica":["#002B7F","#FFF"],"Inglaterra":["#FFF","#C8102E"],"Itália":["#009246","#FFF","#CE2B37"],
  "Suíça":["#FF0000","#FFF"],"Equador":["#FCD116","#003DA5"],"França":["#002395","#ED2939","#FFF"],"Honduras":["#0073CF","#FFF","#CE1126"],
  "Argentina":["#74ACDF","#FFF"],"Bósnia e Herzegovina":["#0033A0","#FFF","#FCD116"],"Irã":["#239F40","#DA0000","#FFF"],"Nigéria":["#008751","#FFF","#000"],
  "Alemanha":["#000","#DD0000","#FFCC00"],"Portugal":["#006600","#FF0000","#FFF"],"Gana":["#006B3F","#FCD116","#000"],"Estados Unidos":["#002868","#BF0A30","#FFF"],
  "Bélgica":["#000","#FDDA24","#ED2939"],"Argélia":["#006233","#FFF"],"Rússia":["#E4181C","#0039A6","#FFF"],"Coreia do Sul":["#FFF","#003478","#C60C30"]
};

const teamColors2010 = {
  "South Africa":["#000","#FFCC00","#007749"],"Mexico":["#006847","#CE1126","#FFF"],"Uruguay":["#FFF","#5DCBF9","#000"],"France":["#002395","#ED2939","#FFF"],
  "Argentina":["#74ACDF","#FFF"],"Nigeria":["#008751","#FFF","#000"],"South Korea":["#FFF","#003478","#C60C30"],"Greece":["#0D5EAF","#FFF"],
  "England":["#FFF","#C8102E"],"United States":["#002868","#BF0A30","#FFF"],"Algeria":["#006233","#FFF"],"Slovenia":["#005DA4","#FFF"],
  "Germany":["#000","#DD0000","#FFCC00"],"Australia":["#00008B","#FFF"],"Serbia":["#C8102E","#FFF"],"Ghana":["#006B3F","#FCD116","#000"],
  "Netherlands":["#FF6600","#FFF"],"Denmark":["#C60C30","#FFF"],"Japan":["#FFF","#BC002D"],"Cameroon":["#007A5E","#CE1126","#FCD116"],
  "Italy":["#009246","#FFF","#CE2B37"],"Paraguay":["#D52B1E","#0033A0","#FFF"],"New Zealand":["#00247D","#CC142B","#FFF"],"Slovakia":["#0B4EA2","#FFF","#EE1C25"],
  "Brazil":["#009739","#FEDD00","#012169"],"North Korea":["#ED1C27","#FFF","#0047A0"],"Ivory Coast":["#FF8E00","#009A44","#FFF"],"Portugal":["#006600","#FF0000","#FFF"],
  "Spain":["#AA151B","#F1BF00","#FFF"],"Switzerland":["#FF0000","#FFF"],"Honduras":["#0073CF","#FFF","#CE1126"],"Chile":["#D52B1E","#0033A0","#FFF"]
};

const teamColors2006 = {
  "Germany":["#000","#DD0000","#FFCC00"],"Costa Rica":["#002B7F","#FFF","#CE1126"],"Poland":["#FFF","#DC143C"],"Ecuador":["#FCD116","#003DA5","#CE1126"],
  "England":["#FFF","#C8102E"],"Paraguay":["#D52B1E","#0033A0","#FFF"],"Trinidad and Tobago":["#CE1126","#FFF","#000"],"Sweden":["#006AA7","#FECC02"],
  "Argentina":["#74ACDF","#FFF"],"Ivory Coast":["#FF8E00","#009A44","#FFF"],"Serbia and Montenegro":["#C6363C","#1C3E7A","#FFF"],"Netherlands":["#FF6600","#FFF"],
  "Mexico":["#006847","#CE1126","#FFF"],"Iran":["#239F40","#DA0000","#FFF"],"Portugal":["#006600","#FF0000","#FFF"],"Angola":["#CE1126","#000","#FFCC00"],
  "Ghana":["#006B3F","#FCD116","#000"],"Italy":["#009246","#FFF","#CE2B37"],"USA":["#002868","#BF0A30","#FFF"],"Czech Republic":["#11457E","#FFF","#D7141A"],
  "Brazil":["#009739","#FEDD00","#012169"],"Croatia":["#171796","#FF0000","#FFF"],"Australia":["#00008B","#FFF"],"Japan":["#FFF","#BC002D"],
  "France":["#002395","#ED2939","#FFF"],"Switzerland":["#FF0000","#FFF"],"South Korea":["#FFF","#003478","#C60C30"],"Togo":["#006B3F","#FCD116","#000"],
  "Spain":["#AA151B","#F1BF00","#FFF"],"Ukraine":["#005BBB","#FFD500","#FFF"],"Tunisia":["#E70013","#FFF"],"Saudi Arabia":["#006C35","#FFF"]
};

const teamColors2002 = {
  "France":["#002395","#ED2939","#FFF"],"Senegal":["#00853F","#FDEF42","#E31B23"],"Uruguay":["#5B9BD5","#FFF"],"Denmark":["#C60C30","#FFF"],
  "Spain":["#AA151B","#F1BF00","#FFF"],"Paraguay":["#D52B1E","#0033A0","#FFF"],"South Africa":["#000","#FFB915","#E03C31"],"Slovenia":["#005DA4","#FFF","#ED1C24"],
  "Brazil":["#009739","#FEDD00","#012169"],"Turkey":["#E30A17","#FFF"],"China":["#DE2910","#FFDE00"],"Costa Rica":["#002B7F","#FFF","#CE1126"],
  "South Korea":["#FFF","#003478","#C60C30"],"Poland":["#FFF","#DC143C"],"USA":["#002868","#BF0A30","#FFF"],"Portugal":["#006600","#FF0000","#FFF"],
  "Germany":["#000","#DD0000","#FFCC00"],"Ireland":["#169B62","#FFF","#FF883E"],"Cameroon":["#007A5E","#CE1126","#FCD116"],"Saudi Arabia":["#006C35","#FFF"],
  "Argentina":["#74ACDF","#FFF"],"Nigeria":["#008751","#FFF"],"England":["#FFF","#C8102E"],"Sweden":["#006AA7","#FECC02"],
  "Italy":["#009246","#FFF","#CE2B37"],"Ecuador":["#FCD116","#003DA5","#CE1126"],"Croatia":["#171796","#FF0000","#FFF"],"Mexico":["#006847","#CE1126","#FFF"],
  "Japan":["#FFF","#BC002D"],"Belgium":["#E30613","#000","#FFCC00"],"Russia":["#CE2028","#FFF","#0039A6"],"Tunisia":["#E70013","#FFF"]
};

const playerFallback = {
  "Croácia-Mateo Kovacic": "https://www.worldtradingcards.com/cdn/shop/files/46_FWC_CRO_010.webp?v=1777742882",
  "Alemanha-David Raum": "https://www.worldtradingcards.com/cdn/shop/files/17_FWC_GER_004.webp?v=1777743707",
  "Nova Zelândia-Tim Payne": "https://www.worldtradingcards.com/cdn/shop/files/28_FWC_NZL_006.webp?v=1777744922",
  "Croácia-Mario Pašalić": "https://www.worldtradingcards.com/cdn/shop/files/46_FWC_CRO_014.webp?v=1777742901",
  "Croácia-Marco Pašalić": "https://www.worldtradingcards.com/cdn/shop/files/46_FWC_CRO_017.webp",
  "Alemanha-Maximilian Mittelstädt": "https://www.worldtradingcards.com/cdn/shop/files/17_FWC_GER_009.webp",
  "Alemanha-Joshua Kimmich": "https://www.worldtradingcards.com/cdn/shop/files/17_FWC_GER_010.webp",
  "Nova Zelândia-Francis de Vries": "https://www.worldtradingcards.com/cdn/shop/files/28_FWC_NZL_008.webp"
};
function getPlayerFallback(teamName, playerName, initials) {
  const pImg = playerFallback[teamName + '-' + playerName];
  const tImg = pImg || teamBadgeFallback[teamName];
  if (tImg) return '<img src="' + tImg + '" style="width:100%;height:100%;object-fit:cover;">';
  const tc = teamColors2022[teamName] || ['#1a2a6c','#b21f1f','#fdbb2d'];
  const bg = tc.length > 2 ? 'linear-gradient(135deg,' + tc[0] + ',' + tc[1] + ')' : 'linear-gradient(135deg,' + tc[0] + ',' + (tc[1]||tc[0]) + ')';
  const flagIso = teamIso[teamName] || '';
  const flagImg = flagIso ? '<img src="https://flagcdn.com/48x36/' + flagIso + '.png" style="width:28px;height:21px;opacity:0.3;position:absolute;top:6px;right:6px;border-radius:2px;">' : '';
  return '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-shadow:0 2px 6px rgba(0,0,0,0.6);background:' + bg + ';border-radius:8px;">' + flagImg + '<div style="font-size:1.5em;font-weight:900;letter-spacing:1px;">' + initials + '</div><div style="font-size:0.5em;opacity:0.85;margin-top:3px;max-width:90%;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + playerName + '</div></div>';
}
function handleUpdateImageError(el) {
  var c = (el.tagName === 'IMG') ? el.parentElement : el;
  var team = c.getAttribute('data-team') || '';
  var updName = c.getAttribute('data-upd-name') || '';
  if (el.tagName === 'IMG') el.style.display = 'none';
  var fl = getFlagImg(team, 48);
  var ini = updName.split(' ').map(function(w){ return w[0]; }).join('').substring(0,2).toUpperCase();
  var d = document.createElement('div');
  d.style.cssText = 'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;background:linear-gradient(135deg,#8B1A4A,#1a1a2e);z-index:0;border-radius:8px;text-shadow:0 2px 6px rgba(0,0,0,0.5);padding:8px;';
  d.innerHTML = '<div style="margin-bottom:6px;">' + fl + '</div><div style="font-size:0.7em;font-weight:900;letter-spacing:1px;text-align:center;word-break:break-word;">' + updName + '</div>';
  c.insertBefore(d, c.firstChild);
}
function handleStickerError(img) {
  var team = img.getAttribute('data-team');
  var pn = img.getAttribute('data-pn');
  var num = img.getAttribute('data-num');
  if (!img.getAttribute('data-tried')) {
    img.setAttribute('data-tried','1');
    if (currentAlbum === '2010' || currentAlbum === '2006' || currentAlbum === '2002' || currentAlbum === '1998') {
      img.style.display = 'none';
      var container = img.parentElement;
      var ini = pn.split(' ').map(function(w){return w[0]}).join('').substring(0,2).toUpperCase();
      var teamColors = currentAlbum === '2010' ? teamColors2010 : (currentAlbum === '2002' ? teamColors2002 : (currentAlbum === '1998' ? teamColors2006 : teamColors2006));
      var tc = teamColors[team] || ['#1a2a6c','#b21f1f','#fdbb2d'];
      var bg = tc.length > 2 ? 'linear-gradient(135deg,' + tc[0] + ',' + tc[1] + ')' : 'linear-gradient(135deg,' + tc[0] + ',' + (tc[1]||tc[0]) + ')';
      var flagIso = teamIso[team] || '';
      var flagHtml = flagIso ? '<img src="https://flagcdn.com/48x36/' + flagIso + '.png" style="width:24px;height:18px;opacity:0.25;position:absolute;top:5px;right:5px;border-radius:2px;">' : '';
      var div = document.createElement('div');
      div.style.cssText = 'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;background:' + bg + ';z-index:0;border-radius:8px;text-shadow:0 2px 6px rgba(0,0,0,0.5);';
      div.innerHTML = flagHtml + '<div style="font-size:1.6em;font-weight:900;letter-spacing:1px;">' + ini + '</div><div style="font-size:0.48em;opacity:0.85;margin-top:2px;max-width:90%;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + pn + '</div>';
      container.insertBefore(div, container.firstChild);
      container.querySelectorAll('.num,.pos,.name').forEach(function(e){e.style.zIndex='3'});
      return;
    }
    if (currentAlbum === '2018' || currentAlbum === '2014') {
      img.src = `https://www.laststicker.com/i/cards/${currentAlbum === '2014' ? '1498' : '3852'}/${num}.png`;
    } else if (currentAlbum !== '1974' && currentAlbum !== '1978' && currentAlbum !== '1970') {
      img.src = getStickerImageUrlPng(team, parseInt(num));
    } else {
      img.style.display = 'none';
      var container = img.parentElement;
      var ini = pn.split(' ').map(function(w){return w[0]}).join('').substring(0,2).toUpperCase();
      var teamColors = teamColors2026;
      var tc = teamColors[team] || ['#1a2a6c','#b21f1f','#fdbb2d'];
      var bg = tc.length > 2 ? 'linear-gradient(135deg,' + tc[0] + ',' + tc[1] + ')' : 'linear-gradient(135deg,' + tc[0] + ',' + (tc[1]||tc[0]) + ')';
      var flagIso = teamIso[team] || '';
      var flagHtml = flagIso ? '<img src="https://flagcdn.com/48x36/' + flagIso + '.png" style="width:24px;height:18px;opacity:0.25;position:absolute;top:5px;right:5px;border-radius:2px;">' : '';
      var div = document.createElement('div');
      div.style.cssText = 'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;background:' + bg + ';z-index:0;border-radius:8px;text-shadow:0 2px 6px rgba(0,0,0,0.5);';
      div.innerHTML = flagHtml + '<div style="font-size:1.6em;font-weight:900;letter-spacing:1px;">' + ini + '</div><div style="font-size:0.48em;opacity:0.85;margin-top:2px;max-width:90%;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + pn + '</div>';
      container.insertBefore(div, container.firstChild);
      container.querySelectorAll('.num,.pos,.name').forEach(function(e){e.style.zIndex='3'});
    }
    return;
  }
  img.style.display = 'none';
  var container = img.parentElement;
  var fb = playerFallback[team + '-' + pn] || teamBadgeFallback[team];
  if (fb) {
    var el = document.createElement('img');
    el.src = fb;
    el.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;border-radius:8px;';
    container.insertBefore(el, container.firstChild);
  } else {
    var ini = pn.split(' ').map(function(w){return w[0]}).join('').substring(0,2).toUpperCase();
    var teamColors = currentAlbum === '2018' ? teamColors2018 : (currentAlbum === '2014' ? teamColors2014 : (currentAlbum === '2010' ? teamColors2010 : (currentAlbum === '2006' || currentAlbum === '2002' || currentAlbum === '1998' ? (currentAlbum === '2002' ? teamColors2002 : teamColors2006) : (currentAlbum === '2022' ? teamColors2022 : teamColors2026))));
    var tc = teamColors[team] || ['#1a2a6c','#b21f1f','#fdbb2d'];
    var bg = tc.length > 2 ? 'linear-gradient(135deg,' + tc[0] + ',' + tc[1] + ')' : 'linear-gradient(135deg,' + tc[0] + ',' + (tc[1]||tc[0]) + ')';
    var flagIso = teamIso[team] || '';
    var flagHtml = flagIso ? '<img src="https://flagcdn.com/48x36/' + flagIso + '.png" style="width:24px;height:18px;opacity:0.25;position:absolute;top:5px;right:5px;border-radius:2px;">' : '';
    var div = document.createElement('div');
    div.style.cssText = 'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;background:' + bg + ';z-index:0;border-radius:8px;text-shadow:0 2px 6px rgba(0,0,0,0.5);';
    div.innerHTML = flagHtml + '<div style="font-size:1.6em;font-weight:900;letter-spacing:1px;">' + ini + '</div><div style="font-size:0.48em;opacity:0.85;margin-top:2px;max-width:90%;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + pn + '</div>';
    container.insertBefore(div, container.firstChild);
  }
  container.querySelectorAll('.num,.pos,.name').forEach(function(e){e.style.zIndex='3'});
}
function handleBadgeError(img) {
  var team = img.getAttribute('data-team');
  var num = img.getAttribute('data-num');
  if (!img.getAttribute('data-tried')) {
    img.setAttribute('data-tried','1');
    if (currentAlbum === '2010' || currentAlbum === '2006' || currentAlbum === '2002' || currentAlbum === '1998') {
      img.style.display = 'none';
      var container = img.parentElement;
      container.querySelectorAll('.num,.pos').forEach(function(e){e.style.display='none'});
      var fb = teamBadgeFallback[team];
      if (fb) {
        container.insertAdjacentHTML('beforeend', '<img src="' + fb + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:10px;">');
      } else {
        var teamColors = currentAlbum === '2010' ? teamColors2010 : (currentAlbum === '2002' ? teamColors2002 : (currentAlbum === '1998' ? teamColors2006 : teamColors2006));
        var tc = teamColors[team] || ['#1a2a6c','#b21f1f','#fdbb2d'];
        var bg = tc.length > 2 ? 'linear-gradient(135deg,' + tc[0] + ',' + tc[1] + ')' : 'linear-gradient(135deg,' + tc[0] + ',' + (tc[1]||tc[0]) + ')';
        var flagIso = teamIso[team] || '';
        var flagHtml = flagIso ? '<img src="https://flagcdn.com/48x36/' + flagIso + '.png" style="width:32px;height:24px;opacity:0.3;">' : '';
        container.insertAdjacentHTML('beforeend', '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;background:' + bg + ';border-radius:10px;text-shadow:0 2px 6px rgba(0,0,0,0.5);">' + flagHtml + '</div>');
      }
      return;
    }
    if (currentAlbum === '1974' || currentAlbum === '1978' || currentAlbum === '1970') {
      img.style.display = 'none';
      var container = img.parentElement;
      container.querySelectorAll('.num,.pos').forEach(function(e){e.style.display='none'});
      var fb = teamBadgeFallback[team];
      if (fb) {
        container.insertAdjacentHTML('beforeend', '<img src="' + fb + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:10px;">');
      } else {
        var teamColors = teamColors2026;
        var tc = teamColors[team];
        if (tc) {
          var bg = tc.length > 2 ? 'linear-gradient(135deg,' + tc[0] + ',' + tc[1] + ')' : 'linear-gradient(135deg,' + tc[0] + ',' + (tc[1]||tc[0]) + ')';
          container.style.background = bg;
        } else {
          container.style.background = 'linear-gradient(135deg,#141E30,#243B55)';
        }
      }
      return;
    }
    img.src = getStickerImageUrlPng(team, parseInt(num));
    return;
  }
  img.style.display = 'none';
  var container = img.parentElement;
  container.querySelectorAll('.num,.pos').forEach(function(e){e.style.display='none'});
  var fb = teamBadgeFallback[team];
  if (fb) {
    container.insertAdjacentHTML('beforeend', '<img src="' + fb + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:10px;">');
  } else {
    var teamColors = currentAlbum === '2018' ? teamColors2018 : (currentAlbum === '2014' ? teamColors2014 : (currentAlbum === '2010' ? teamColors2010 : (currentAlbum === '2006' || currentAlbum === '2002' || currentAlbum === '1998' ? (currentAlbum === '2002' ? teamColors2002 : teamColors2006) : (currentAlbum === '2022' ? teamColors2022 : teamColors2026))));
    var tc = teamColors[team];
    if (tc) {
      var bg = tc.length > 2 ? 'linear-gradient(135deg,' + tc[0] + ',' + tc[1] + ')' : 'linear-gradient(135deg,' + tc[0] + ',' + (tc[1]||tc[0]) + ')';
      container.style.background = bg;
    } else {
      container.style.background = 'linear-gradient(135deg,#141E30,#243B55)';
    }
  }
}
function handlePhotoError(img) {
  var team = img.getAttribute('data-team');
  if (!img.getAttribute('data-tried')) {
    img.setAttribute('data-tried','1');
    if (currentAlbum === '2010' || currentAlbum === '2006' || currentAlbum === '2002' || currentAlbum === '1998') {
      img.style.display = 'none';
      var container = img.parentElement;
      container.querySelectorAll('.num,.pos,.name').forEach(function(e){e.style.display='none'});
      var fb = teamBadgeFallback[team];
      if (fb) {
        container.insertAdjacentHTML('beforeend', '<img src="' + fb + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:10px;">');
      } else {
        var teamColors = currentAlbum === '2010' ? teamColors2010 : (currentAlbum === '2002' ? teamColors2002 : (currentAlbum === '1998' ? teamColors2006 : teamColors2006));
        var tc = teamColors[team] || ['#1a2a6c','#b21f1f','#fdbb2d'];
        var bg = tc.length > 2 ? 'linear-gradient(135deg,' + tc[0] + ',' + tc[1] + ')' : 'linear-gradient(135deg,' + tc[0] + ',' + (tc[1]||tc[0]) + ')';
        var flagIso = teamIso[team] || '';
        var flagHtml = flagIso ? '<img src="https://flagcdn.com/48x36/' + flagIso + '.png" style="width:32px;height:24px;opacity:0.3;">' : '';
        container.insertAdjacentHTML('beforeend', '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;background:' + bg + ';border-radius:10px;text-shadow:0 2px 6px rgba(0,0,0,0.5);">' + flagHtml + '</div>');
      }
      return;
    }
    if (currentAlbum === '1974' || currentAlbum === '1978' || currentAlbum === '1970') {
      img.style.display = 'none';
      var container = img.parentElement;
      container.querySelectorAll('.num,.pos,.name').forEach(function(e){e.style.display='none'});
      var fb = teamBadgeFallback[team];
      if (fb) {
        container.insertAdjacentHTML('beforeend', '<img src="' + fb + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:10px;">');
      } else {
        var teamColors = teamColors2026;
        var tc = teamColors[team] || ['#1a2a6c','#b21f1f','#fdbb2d'];
        var bg = tc.length > 2 ? 'linear-gradient(135deg,' + tc[0] + ',' + tc[1] + ')' : 'linear-gradient(135deg,' + tc[0] + ',' + (tc[1]||tc[0]) + ')';
        var flagIso = teamIso[team] || '';
        var flagHtml = flagIso ? '<img src="https://flagcdn.com/48x36/' + flagIso + '.png" style="width:32px;height:24px;opacity:0.3;">' : '';
        container.insertAdjacentHTML('beforeend', '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;background:' + bg + ';border-radius:10px;text-shadow:0 2px 6px rgba(0,0,0,0.5);">' + flagHtml + '</div>');
      }
      return;
    }
    img.src = getStickerImageUrlPng(team, 13);
    return;
  }
  img.style.display = 'none';
  var container = img.parentElement;
  container.querySelectorAll('.num,.pos,.name').forEach(function(e){e.style.display='none'});
  var fb = teamBadgeFallback[team];
  if (fb) {
    container.insertAdjacentHTML('beforeend', '<img src="' + fb + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:10px;">');
  } else {
    var teamColors = currentAlbum === '2018' ? teamColors2018 : (currentAlbum === '2014' ? teamColors2014 : (currentAlbum === '2010' ? teamColors2010 : (currentAlbum === '2006' || currentAlbum === '2002' || currentAlbum === '1998' ? (currentAlbum === '2002' ? teamColors2002 : teamColors2006) : (currentAlbum === '2022' ? teamColors2022 : teamColors2026))));
    var tc = teamColors[team];
    if (tc) {
      var bg = tc.length > 2 ? 'linear-gradient(135deg,' + tc[0] + ',' + tc[1] + ')' : 'linear-gradient(135deg,' + tc[0] + ',' + (tc[1]||tc[0]) + ')';
      container.style.background = bg;
    } else {
      container.style.background = 'linear-gradient(135deg,#0f3443,#34e89e)';
    }
    var flagIso = teamIso[team] || '';
    var flagHtml = flagIso ? '<img src="https://flagcdn.com/64x48/' + flagIso + '.png" style="width:40px;height:30px;opacity:0.4;border-radius:3px;">' : '';
    container.insertAdjacentHTML('beforeend', '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-shadow:0 2px 6px rgba(0,0,0,0.5);">' + flagHtml + '<div style="font-size:0.7em;font-weight:700;margin-top:4px;">⚽ ' + team + '</div></div>');
  }
}

function handleCocaError(img) {
  if (!img.getAttribute('data-tried')) {
    img.setAttribute('data-tried','1');
    const pngUrl = img.src.replace('.jpg', '.png');
    img.src = pngUrl;
    return;
  }
  img.style.display = 'none';
}

// Build player list with IDs
let allPlayers = [];
let playerStates = {};
let currentGroup = 'all';
let currentTab = 'all';
let currentModal = null;
let showCoca = true;
let modalUpdateSelected = null;
let saveTimeout = null;
let viewOnlyUser = null;
let userSnapshotUnsub = null;
let isSyncingFromRemote = false;

let currentAlbum = '2026';

let allPlayers2022 = [];
let _states2026 = {};
let _statesCwc2025 = {};
let _statesLiga2025 = {};
let _states2022 = {};
let _states2018 = {};
let _states2014 = {};
let _states2010 = {};
let _states2006 = {};
let _states2002 = {};
let _states1998 = {};
let _states1994 = {};
let _states1990 = {};
let _states1986 = {};
let _states1982 = {};
let _states1978 = {};
let _states1974 = {};
let _states1970 = {};

var fwc1990Intro = [];
var fwc1990Ciao = [];
var fwc1990Estadios = [];
var fwc1990Cidades = [];

function loadActivePlayerStates() {
  if (currentAlbum === '2026') playerStates = _states2026;
  else if (currentAlbum === 'cwc2025') playerStates = _statesCwc2025;
  else if (currentAlbum === 'liga2025') playerStates = _statesLiga2025;
  else if (currentAlbum === '2022') playerStates = _states2022;
  else if (currentAlbum === '2018') playerStates = _states2018;
  else if (currentAlbum === '2014') playerStates = _states2014;
  else if (currentAlbum === '2010') playerStates = _states2010;
  else if (currentAlbum === '2006') playerStates = _states2006;
  else if (currentAlbum === '2002') playerStates = _states2002;
  else if (currentAlbum === '1998') playerStates = _states1998;
  else if (currentAlbum === '1994') playerStates = _states1994;
  else if (currentAlbum === '1990') playerStates = _states1990;
  else if (currentAlbum === '1986') playerStates = _states1986;
  else if (currentAlbum === '1982') playerStates = _states1982;
  else if (currentAlbum === '1978') playerStates = _states1978;
  else if (currentAlbum === '1974') playerStates = _states1974;
  else if (currentAlbum === '1970') playerStates = _states1970;
  else playerStates = _states2006;
}

function startRealtimeSync() {
  if (!currentUser) return;
  if (userSnapshotUnsub) { userSnapshotUnsub(); userSnapshotUnsub = null; }
  userSnapshotUnsub = db.collection('users').doc(currentUser.key).onSnapshot(doc => {
    if (!currentUser || viewOnlyUser) return;
    if (!doc.exists) return;
    const data = doc.data();
    isSyncingFromRemote = true;
    _states2026 = data.playerStates || {};
    _statesCwc2025 = data.playerStatesCwc2025 || {};
    _statesLiga2025 = data.playerStatesLiga2025 || {};
    _states2022 = data.playerStates2022 || {};
    _states2018 = data.playerStates2018 || {};
    _states2014 = data.playerStates2014 || {};
    _states2010 = data.playerStates2010 || {};
    _states2006 = data.playerStates2006 || {};
    _states2002 = data.playerStates2002 || {};
    _states1998 = data.playerStates1998 || {};
    _states1994 = data.playerStates1994 || {};
    _states1990 = data.playerStates1990 || {};
    _states1986 = data.playerStates1986 || {};
    _states1982 = data.playerStates1982 || {};
    _states1978 = data.playerStates1978 || {};
    _states1974 = data.playerStates1974 || {};
    _states1970 = data.playerStates1970 || {};
    loadActivePlayerStates();
    render();
    atualizarContadores();
    setTimeout(() => { isSyncingFromRemote = false; }, 1000);
  });
}

function toggleLoginMode() {
  isCreatingAccount = !isCreatingAccount;
  const btn = document.getElementById('loginSubmitBtn');
  const toggle = document.getElementById('loginToggle');
  const err = document.getElementById('loginError');
  const passInput = document.getElementById('loginPass');
  const nameInput = document.getElementById('loginName');
  err.style.display = 'none';
  if (isCreatingAccount) {
    btn.textContent = 'Criar conta';
    toggle.innerHTML = 'Já tens conta? <span>Entrar</span>';
    passInput.placeholder = 'Escolhe uma palavra-passe';
    nameInput.style.display = 'block';
  } else {
    btn.textContent = 'Entrar';
    toggle.innerHTML = 'Não tens conta? <span>Criar conta</span>';
    passInput.placeholder = 'Palavra-passe';
    nameInput.style.display = 'none';
  }
}

function togglePassVis() {
  const pass = document.getElementById('loginPass');
  const eye = document.getElementById('passEye');
  if (pass.type === 'password') {
    pass.type = 'text';
    eye.textContent = '🙈';
  } else {
    pass.type = 'password';
    eye.textContent = '👁️';
  }
}

function showLoginError(msg) {
  const err = document.getElementById('loginError');
  err.textContent = msg;
  err.style.display = 'block';
  document.getElementById('loginLoading').style.display = 'none';
}

async function loginEmailPass() {
  const email = document.getElementById('loginUser').value.trim().toLowerCase();
  const pass = document.getElementById('loginPass').value;
  const name = document.getElementById('loginName').value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showLoginError('Insere um email válido.'); return; }
  if (!pass) { showLoginError('Escolhe uma palavra-passe.'); return; }
  if (pass.length < 8) { showLoginError('A palavra-passe deve ter pelo menos 8 caracteres.'); return; }
  if (isCreatingAccount && !name) { showLoginError('Insere o teu nome.'); return; }
  document.getElementById('loginLoading').style.display = 'block';
  document.getElementById('loginError').style.display = 'none';
  const key = email.replace(/[^a-z0-9]/g, '_');
  try {
    const bannedDoc = await db.collection('banned').doc(key).get();
    if (bannedDoc.exists) {
      document.getElementById('loginScreen').classList.add('hidden');
      document.getElementById('bannedScreen').style.display = 'flex';
      document.getElementById('loginLoading').style.display = 'none';
      return;
    }
    if (isCreatingAccount) {
      const doc = await db.collection('accounts').doc(key).get();
      if (doc.exists) { showLoginError('Este email já está registado.'); document.getElementById('loginLoading').style.display = 'none'; return; }
      const hashed = await hashPass(pass);
      await db.collection('accounts').doc(key).set({ pass: hashed, name: name, email: email });
      currentUser = { name: name, key: key, email: email };
      saveSession();;
      const accsC = getAccounts();
      accsC[key] = { name: name, email: email, pass: hashed };
      saveAccounts(accsC);
    } else {
      const doc = await db.collection('accounts').doc(key).get();
      if (!doc.exists) { showLoginError('Email ou palavra-passe incorretos.'); document.getElementById('loginLoading').style.display = 'none'; return; }
      const valid = await verifyPass(pass, doc.data().pass);
      if (!valid) { loginAttempts++; if (loginAttempts >= 5) { loginBlockedUntil = Date.now() + 5 * 60 * 1000; loginAttempts = 0; } showLoginError('Email ou palavra-passe incorretos.'); document.getElementById('loginLoading').style.display = 'none'; return; }
      if (!doc.data().salt) {
        const newHashed = await hashPass(pass);
        db.collection('accounts').doc(key).set({ pass: newHashed }, { merge: true }).catch(()=>{});
      }
      currentUser = { name: doc.data().name, key: key, email: doc.data().email };
      saveSession();
      const accs = getAccounts();
      accs[key] = { name: doc.data().name, email: email, pass: valid };
      saveAccounts(accs);
    }
    document.getElementById('loginLoading').style.display = 'none';
    enterApp();
  } catch (e) {
    console.error('Erro login:', e);
    showLoginError('Algo correu mal. Tenta novamente.');
    document.getElementById('loginLoading').style.display = 'none';
  }
}

let accountsOpen = false;
function toggleAccountSwitcher() {
  accountsOpen = !accountsOpen;
  const el = document.getElementById('accountSwitcher');
  if (el) el.style.display = accountsOpen ? 'block' : 'none';
}
async function switchAccount(accKey) {
  if (userSnapshotUnsub) { userSnapshotUnsub(); userSnapshotUnsub = null; }
  const accs = getAccounts();
  const acc = accs[accKey];
  if (!acc) return;
  currentUser = { name: acc.name, key: accKey, email: acc.email, photoURL: acc.photoURL || '' };
  saveSession();;
  accountsOpen = false;
  await loadUserData();
  render();
  startRealtimeSync();
}
function switchToLogin(mode) {
  if (userSnapshotUnsub) { userSnapshotUnsub(); userSnapshotUnsub = null; }
  currentUser = null;
  localStorage.removeItem('fh_session');
  accountsOpen = false;
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('appContent').classList.add('app-hidden');
  if (mode === 'create') {
    isCreatingAccount = true;
    document.getElementById('loginName').style.display = 'block';
    document.getElementById('loginTitle').innerHTML = 'Criar <span>Conta</span>';
    document.getElementById('loginSubmitBtn').textContent = 'Criar';
    document.getElementById('loginToggle').innerHTML = 'Já tenho conta — <span>Entrar</span>';
  } else {
    isCreatingAccount = false;
    document.getElementById('loginName').style.display = 'none';
    document.getElementById('loginTitle').innerHTML = 'FIFA<span> RINHAS 26</span>';
    document.getElementById('loginSubmitBtn').textContent = 'Entrar';
    document.getElementById('loginToggle').innerHTML = 'Não tens conta? <span>Criar conta</span>';
  }
}

function logout() {
  if (userSnapshotUnsub) { userSnapshotUnsub(); userSnapshotUnsub = null; }
  currentUser = null;
  localStorage.removeItem('fh_session');
  document.getElementById('loginUser').value = '';
  document.getElementById('loginPass').value = '';
  document.getElementById('loginName').value = '';
  document.getElementById('loginName').style.display = 'none';
  document.getElementById('loginError').style.display = 'none';
  isCreatingAccount = false;
  document.getElementById('loginSubmitBtn').textContent = 'Entrar';
  document.getElementById('loginToggle').innerHTML = 'Não tens conta? <span>Criar conta</span>';
  document.getElementById('loginPass').placeholder = 'Palavra-passe';
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('appContent').classList.add('app-hidden');
}

async function deleteAccount() {
  if (!currentUser) return;
  try {
    await db.collection('accounts').doc(currentUser.key).delete();
    await db.collection('users').doc(currentUser.key).delete();
  } catch (e) { console.error(e); }
  const accs = getAccounts();
  delete accs[currentUser.key];
  saveAccounts(accs);
  logout();
}

async function deleteAllData() {
  if (currentAlbum === '2026') { _states2026 = {}; playerStates = _states2026; }
  else if (currentAlbum === '2022') { _states2022 = {}; playerStates = _states2022; }
  else if (currentAlbum === '2018') { _states2018 = {}; playerStates = _states2018; }
  else if (currentAlbum === '2014') { _states2014 = {}; playerStates = _states2014; }
  else if (currentAlbum === '2010') { _states2010 = {}; playerStates = _states2010; }
  else if (currentAlbum === '2006') { _states2006 = {}; playerStates = _states2006; }
  else if (currentAlbum === '2002') { _states2002 = {}; playerStates = _states2002; }
  else if (currentAlbum === '1998') { _states1998 = {}; playerStates = _states1998; }
  else if (currentAlbum === '1994') { _states1994 = {}; playerStates = _states1994; }
    else if (currentAlbum === '1990') { _states1990 = {}; playerStates = _states1990; }
    else if (currentAlbum === '1986') { _states1986 = {}; playerStates = _states1986; }
    else if (currentAlbum === '1982') { _states1982 = {}; playerStates = _states1982; }
    else if (currentAlbum === '1978') { _states1978 = {}; playerStates = _states1978; }
    else if (currentAlbum === '1974') { _states1974 = {}; playerStates = _states1974; }
    else if (currentAlbum === '1970') { _states1970 = {}; playerStates = _states1970; }
  else { _states2006 = {}; playerStates = _states2006; }
  showCoca = false;
  if (currentUser) {
    try {
      await db.collection('users').doc(currentUser.key).set({
        playerStates: _states2026,
        playerStates2022: _states2022,
        playerStates2018: _states2018,
        playerStates2014: _states2014,
        playerStates2010: _states2010,
        playerStates2006: _states2006,
        playerStates2002: _states2002,
        playerStates1998: _states1998,
        playerStates1994: _states1994,
        playerStates1990: _states1990,
        playerStates1986: _states1986,
        playerStates1982: _states1982,
        playerStates1978: _states1978,
        playerStates1974: _states1974,
        playerStates1970: _states1970,
        currentAlbum,
        showCoca: false,
        displayName: currentUser.name || '',
        photoURL: currentUser.photoURL || '',
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (e) { console.error(e); }
  }
  render();
}

function enterApp() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('appContent').classList.remove('app-hidden');
  document.querySelector('.header').style.display = '';
  document.getElementById('tabsBar').style.display = '';
  document.getElementById('progressBar').style.display = '';
  document.querySelector('.search-box').style.display = '';
  document.querySelector('.footer').style.display = '';
  document.getElementById('main').innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--muted);font-size:1.1em;"><div style="font-size:2em;margin-bottom:12px;">⏳</div>A carregar...</div>';
  loadUserData().then(() => { updateHeaderAlbum(); init(); startRealtimeSync(); });
}

const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000;
function saveSession() {
  if (!currentUser) return;
  currentUser.expiresAt = Date.now() + SESSION_DURATION;
  localStorage.setItem('fh_session', JSON.stringify(currentUser));
}

function checkSession() {
  const s = localStorage.getItem('fh_session');
  if (s) {
    const session = JSON.parse(s);
    const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
    if (session.expiresAt && Date.now() > session.expiresAt) {
      localStorage.removeItem('fh_session');
      return;
    }
    if (!session.expiresAt) {
      session.expiresAt = Date.now() + SEVEN_DAYS;
      currentUser = session;
      saveSession();
    } else {
      currentUser = session;
    }
    enterApp();
  }
}

document.getElementById('loginPass').addEventListener('keydown', function(e) { if (e.key === 'Enter') loginEmailPass(); });
document.getElementById('loginUser').addEventListener('keydown', function(e) { if (e.key === 'Enter') document.getElementById('loginPass').focus(); });
document.getElementById('loginSubmitBtn').addEventListener('click', loginEmailPass);

let adminEmails = [];

async function loadUserData() {
  if (!currentUser) return;
  isAdmin = false;
  try {
    const adminsDoc = await db.collection('config').doc('admins').get();
    if (adminsDoc.exists) {
      adminEmails = adminsDoc.data().emails || [];
    }
    if (adminEmails.length === 0) {
      adminEmails = ['tiago2009serra@gmail.com'];
      db.collection('config').doc('admins').set({ emails: adminEmails }).catch(()=>{});
    }
    const bannedDoc = await db.collection('banned').doc(currentUser.key).get();
    if (bannedDoc.exists) {
      currentUser = null;
      localStorage.removeItem('fh_session');
      document.getElementById('appContent').classList.add('app-hidden');
      document.getElementById('loginScreen').classList.add('hidden');
      document.getElementById('bannedScreen').style.display = 'flex';
      return;
    }
    const doc = await db.collection('users').doc(currentUser.key).get();
    if (doc.exists) {
      const data = doc.data();
      _states2026 = data.playerStates || {};
      _statesCwc2025 = data.playerStatesCwc2025 || {};
      _statesLiga2025 = data.playerStatesLiga2025 || {};
      _states2022 = data.playerStates2022 || {};
      _states2018 = data.playerStates2018 || {};
      _states2014 = data.playerStates2014 || {};
      _states2010 = data.playerStates2010 || {};
      _states2006 = data.playerStates2006 || {};
      _states2002 = data.playerStates2002 || {};
      _states1998 = data.playerStates1998 || {};
      _states1994 = data.playerStates1994 || {};
      _states1990 = data.playerStates1990 || {};
      _states1986 = data.playerStates1986 || {};
      _states1982 = data.playerStates1982 || {};
      _states1978 = data.playerStates1978 || {};
      _states1974 = data.playerStates1974 || {};
      _states1970 = data.playerStates1970 || {};
      currentAlbum = data.currentAlbum || '2026';
      showCoca = data.showCoca !== undefined ? data.showCoca : true;
      if (data.displayName) currentUser.name = data.displayName;
      if (data.photoURL) currentUser.photoURL = data.photoURL;
      if (data.isAdmin || adminEmails.includes(currentUser.email)) isAdmin = true;
      if (adminEmails.includes(currentUser.email) && !data.isAdmin) {
        db.collection('users').doc(currentUser.key).set({ isAdmin: true }, { merge: true }).catch(()=>{});
        db.collection('accounts').doc(currentUser.key).set({ isAdmin: true }, { merge: true }).catch(()=>{});
      }
      saveSession();;
      const accs = getAccounts();
      if (accs[currentUser.key]) {
        if (data.displayName) accs[currentUser.key].name = data.displayName;
        if (data.photoURL) accs[currentUser.key].photoURL = data.photoURL;
        saveAccounts(accs);
      }
    } else {
      _states2026 = {};
      _states2022 = {};
      _states2018 = {};
      _states2014 = {};
      _states2010 = {};
      _states2006 = {};
      _states2002 = {};
      _states1998 = {};
      _states1994 = {};
      _states1990 = {};
      _states1986 = {};
      _states1982 = {};
      currentAlbum = '2026';
      showCoca = false;
    }
    loadActivePlayerStates();
    const accDoc = await db.collection('accounts').doc(currentUser.key).get();
    if (accDoc.exists && accDoc.data().isAdmin) isAdmin = true;
  } catch (e) {
    console.error('Erro ao carregar dados:', e);
    _states2026 = {};
    _states2022 = {};
    _states2018 = {};
    _states2014 = {};
    _states2010 = {};
    _states2006 = {};
    _states2002 = {};
    _states1998 = {};
    _states1994 = {};
    _states1990 = {};
    _states1986 = {};
    _states1982 = {};
    currentAlbum = '2026';
    loadActivePlayerStates();
  }
}

function saveUserData() {
  if (!currentUser || viewOnlyUser) return;
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async () => {
    try {
      await db.collection('users').doc(currentUser.key).set({
        playerStates: _states2026,
        playerStatesCwc2025: _statesCwc2025,
        playerStatesLiga2025: _statesLiga2025,
        playerStates2022: _states2022,
        playerStates2018: _states2018,
        playerStates2014: _states2014,
        playerStates2010: _states2010,
        playerStates2006: _states2006,
        playerStates2002: _states2002,
        playerStates1998: _states1998,
        playerStates1994: _states1994,
        playerStates1990: _states1990,
        playerStates1986: _states1986,
        playerStates1982: _states1982,
        playerStates1978: _states1978,
        playerStates1974: _states1974,
        playerStates1970: _states1970,
        currentAlbum,
        showCoca,
        displayName: currentUser.name || '',
        photoURL: currentUser.photoURL || '',
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (e) {
      console.error('Erro ao guardar dados:', e);
    }
  }, 500);
}

function saveUserDataToStorage(key, data) {
  db.collection('users').doc(key).set(data).catch(e => console.error(e));
}

function getUserInitial() {
  if (!currentUser) return '?';
  return currentUser.name ? currentUser.name.charAt(0).toUpperCase() : '?';
}

function getUserDisplayName() {
  if (!currentUser) return '';
  return currentUser.name || 'Utilizador';
}

function changeDisplayName(newName) {
  if (!currentUser || !newName.trim()) return;
  currentUser.name = newName.trim();
  saveSession();;
  const accs = getAccounts();
  if (accs[currentUser.key]) { accs[currentUser.key].name = currentUser.name; saveAccounts(accs); }
  db.collection('users').doc(currentUser.key).set({
    displayName: currentUser.name,
    photoURL: currentUser.photoURL || '',
    lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true }).catch(e => console.error(e));
  db.collection('accounts').doc(currentUser.key).set({ name: currentUser.name }, { merge: true }).catch(e => console.error(e));
  render();
}

function changeProfilePhoto(input) {
  const file = input.files[0];
  if (!file || !currentUser) return;
  if (file.size > 500 * 1024) { alert('A imagem deve ter menos de 500KB.'); input.value = ''; return; }
  if (!file.type.match(/^image\/(jpeg|png|webp|gif)$/)) { alert('Formato não suportado. Use JPG, PNG, WebP ou GIF.'); input.value = ''; return; }
  const reader = new FileReader();
  reader.onload = function(e) {
    currentUser.photoURL = e.target.result;
    saveSession();
    const accs = getAccounts();
    if (accs[currentUser.key]) { accs[currentUser.key].photoURL = currentUser.photoURL; saveAccounts(accs); }
    db.collection('users').doc(currentUser.key).set({
      displayName: currentUser.name || '',
      photoURL: currentUser.photoURL,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true }).catch(e => console.error(e));
    render();
  };
  reader.readAsDataURL(file);
}

async function init() {
  if (!currentUser) return;
  document.getElementById('main').innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--muted);font-size:1.1em;"><div style="font-size:2em;margin-bottom:12px;">⏳</div>A carregar cromos...</div>';
  if (currentAlbum === '2018' || currentAlbum === '2022') {
    await loadTeamsFromFirestore();
    rebuildTeamOrders();
  }
if (currentAlbum === '2014' || currentAlbum === '2010' || currentAlbum === '2006' || currentAlbum === '2002' || currentAlbum === '1998' || currentAlbum === '1994' || currentAlbum === '1990' || currentAlbum === '1986' || currentAlbum === '1982' || currentAlbum === '1978' || currentAlbum === '1974' || currentAlbum === '1970') {
    rebuildTeamOrders();
  }
  if (allPlayers.length === 0) {
  let num = 1;
  const activeTeams = currentAlbum === '2026' ? teams : (currentAlbum === '2022' ? teams2022 : (currentAlbum === '2014' ? teams2014 : (currentAlbum === '2010' ? teams2010 : (currentAlbum === '2006' ? teams2006 : (currentAlbum === '2002' ? teams2002 : (currentAlbum === '1998' ? teams1998 : (currentAlbum === '1994' ? teams1994 : (currentAlbum === '1990' ? teams1990 : (currentAlbum === '1986' ? teams1986 : (currentAlbum === '1982' ? teams1982 : (currentAlbum === '1978' ? teams1978 : (currentAlbum === '1974' ? teams1974 : (currentAlbum === '1970' ? teams1970 : teams2018)))))))))))));
  if (currentAlbum === '2026') {
    fwcStickers.forEach(s => {
      allPlayers.push({ id: `fwc-${s.num}`, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num });
      num++;
    });
    cocaStickers.forEach(s => {
      allPlayers.push({ id: `coca-${s.num}`, group: 'Coca-Cola', team: 'Coca-Cola', name: s.name, pos: 'coca', num });
      num++;
    });
  }
  if (currentAlbum === '2022') {
    var fwc2022All = [
      { name: 'Panini', desc: 'Panini', icon: '🏷️' },
      { name: 'FIFA', desc: 'FIFA', icon: '🏛️' },
      { name: 'Troféu Oficial 1', desc: 'Troféu 1', icon: '🏆' },
      { name: 'Troféu Oficial 2', desc: 'Troféu 2', icon: '🏆' },
      { name: 'Mascote La\'eeb', desc: 'Mascote 1', icon: '🎭' },
      { name: 'Mascote La\'eeb 2', desc: 'Mascote 2', icon: '🎭' },
      { name: 'Emblema Oficial 1', desc: 'Emblema 1', icon: '🏅' },
      { name: 'Emblema Oficial 2', desc: 'Emblema 2', icon: '🏅' },
      { name: 'Ahmad Bin Ali', desc: 'Est. Ahmad Bin Ali', icon: '🏟️' },
      { name: 'Al Janoub', desc: 'Est. Al Janoub', icon: '🏟️' },
      { name: 'Al Thumama', desc: 'Est. Al Thumama', icon: '🏟️' },
      { name: 'Education City', desc: 'Est. Education City', icon: '🏟️' },
      { name: 'Khalifa International', desc: 'Est. Khalifa', icon: '🏟️' },
      { name: 'Estádio 974', desc: 'Est. 974', icon: '🏟️' },
      { name: 'Al Bayt (exterior)', desc: 'Est. Al Bayt ext.', icon: '🏟️' },
      { name: 'Al Bayt (interior)', desc: 'Est. Al Bayt int.', icon: '🏟️' },
      { name: 'Lusail (exterior)', desc: 'Est. Lusail ext.', icon: '🏟️' },
      { name: 'Lusail (interior)', desc: 'Est. Lusail int.', icon: '🏟️' },
      { name: 'Bola Al Rihla', desc: 'Al Rihla', icon: '⚽' },
      { name: 'Uruguai 1930', desc: 'Museu FIFA 1930', icon: '🏛️' },
      { name: 'Itália 1938', desc: 'Museu FIFA 1938', icon: '🏛️' },
      { name: 'Brasil 1958', desc: 'Museu FIFA 1958', icon: '🏛️' },
      { name: 'Inglaterra 1966', desc: 'Museu FIFA 1966', icon: '🏛️' },
      { name: 'Brasil 1970', desc: 'Museu FIFA 1970', icon: '🏛️' },
      { name: 'Argentina 1978', desc: 'Museu FIFA 1978', icon: '🏛️' },
      { name: 'Itália 1982', desc: 'Museu FIFA 1982', icon: '🏛️' },
      { name: 'Alemanha 1990', desc: 'Museu FIFA 1990', icon: '🏛️' },
      { name: 'França 1998', desc: 'Museu FIFA 1998', icon: '🏛️' },
      { name: 'Espanha 2010', desc: 'Museu FIFA 2010', icon: '🏛️' },
      { name: 'França 2018', desc: 'Museu FIFA 2018', icon: '🏛️' }
    ];
    fwc2022All.forEach(s => {
      allPlayers.push({ id: `fwc2022-${s.desc}`, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num });
      num++;
    });
  }
  if (currentAlbum === '2018') {
    var fwc2018MundialAll = [
      { name: 'Panini', id: 'fwc2018-Mundial Panini', num: 0 },
      { name: 'FIFA Fair Play', id: 'fwc2018-Mundial FIFA Fair Play', num: 1 },
      { name: 'Troféu FIFA World Cup', id: 'fwc2018-Mundial Troféu', num: 2 },
      { name: 'Gráfico 1', id: 'fwc2018-Mundial Gráfico 1', num: 3 },
      { name: 'Gráfico 2', id: 'fwc2018-Mundial Gráfico 2', num: 4 },
      { name: 'Logo 1', id: 'fwc2018-Mundial Logo 1', num: 5 },
      { name: 'Logo 2', id: 'fwc2018-Mundial Logo 2', num: 6 },
      { name: 'Bola Oficial', id: 'fwc2018-Mundial Bola Oficial', num: 7 }
    ];
    var fwc2018EstadiosAll = [
      { name: 'Ekaterinburg Arena', id: 'fwc2018-Est. Ekaterinburg Arena', num: 8 },
      { name: 'Kaliningrad Stadium', id: 'fwc2018-Est. Kaliningrad Stadium', num: 9 },
      { name: 'Kazan Arena', id: 'fwc2018-Est. Kazan Arena', num: 10 },
      { name: 'Spartak Stadium', id: 'fwc2018-Est. Spartak Stadium', num: 11 },
      { name: 'Nizhny Novgorod Stadium', id: 'fwc2018-Est. Nizhny Novgorod', num: 12 },
      { name: 'Luzhniki Stadium', id: 'fwc2018-Est. Luzhniki', num: 13 },
      { name: 'Rostov Arena', id: 'fwc2018-Est. Rostov Arena', num: 14 },
      { name: 'Saint Petersburg Stadium', id: 'fwc2018-Est. Saint Petersburg', num: 15 },
      { name: 'Samara Arena', id: 'fwc2018-Est. Samara Arena', num: 16 },
      { name: 'Mordovia Arena', id: 'fwc2018-Est. Mordovia Arena', num: 17 },
      { name: 'Fisht Stadium', id: 'fwc2018-Est. Fisht Stadium', num: 18 },
      { name: 'Volgograd Arena', id: 'fwc2018-Est. Volgograd Arena', num: 19 }
    ];
    var fwc2018CidadesAll = [
      { name: 'Moscow 1', id: 'fwc2018-Cid. Moscow 1', num: 20 },
      { name: 'Moscow 2', id: 'fwc2018-Cid. Moscow 2', num: 21 },
      { name: 'Kaliningrad', id: 'fwc2018-Cid. Kaliningrad', num: 22 },
      { name: 'Saint Petersburg', id: 'fwc2018-Cid. Saint Petersburg', num: 23 },
      { name: 'Sochi', id: 'fwc2018-Cid. Sochi', num: 24 },
      { name: 'Rostov-on-Don', id: 'fwc2018-Cid. Rostov-on-Don', num: 25 },
      { name: 'Volgograd', id: 'fwc2018-Cid. Volgograd', num: 26 },
      { name: 'Kazan', id: 'fwc2018-Cid. Kazan', num: 27 },
      { name: 'Nizhny Novgorod', id: 'fwc2018-Cid. Nizhny Novgorod', num: 28 },
      { name: 'Samara', id: 'fwc2018-Cid. Samara', num: 29 },
      { name: 'Yekaterinburg', id: 'fwc2018-Cid. Yekaterinburg', num: 30 },
      { name: 'Saransk', id: 'fwc2018-Cid. Saransk', num: 31 }
    ];
    [...fwc2018MundialAll, ...fwc2018EstadiosAll, ...fwc2018CidadesAll].forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
    var fwc2018LegendsAll = [
      { name: 'Brasil 1958', id: 'fwc2018-Legends Brasil 1958', num: 672 },
      { name: 'Alemanha 2014', id: 'fwc2018-Legends Alemanha 2014', num: 673 },
      { name: 'Itália 1982', id: 'fwc2018-Legends Itália 1982', num: 674 },
      { name: 'Uruguai 1930', id: 'fwc2018-Legends Uruguai 1930', num: 675 },
      { name: 'Argentina 1986', id: 'fwc2018-Legends Argentina 1986', num: 676 },
      { name: 'Inglaterra 1966', id: 'fwc2018-Legends Inglaterra 1966', num: 677 },
      { name: 'França 1998', id: 'fwc2018-Legends França 1998', num: 678 },
      { name: 'Espanha 2010', id: 'fwc2018-Legends Espanha 2010', num: 679 },
      { name: 'Pelé', id: 'fwc2018-Legends Pelé', num: 680 },
      { name: 'Miroslav Klose', id: 'fwc2018-Legends Miroslav Klose', num: 681 }
    ];
    fwc2018LegendsAll.forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'Legends', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  if (currentAlbum === '2014') {
    var fwc2014IntroAll = [
      { name: 'Arte Panini', id: 'fwc2014-Intro Arte Panini', num: 0 },
      { name: 'Troféu FIFA', id: 'fwc2014-Intro Troféu', num: 1 },
      { name: 'Logotipo', id: 'fwc2014-Intro Logotipo', num: 2 },
      { name: 'Mascote Fuleco', id: 'fwc2014-Intro Fuleco', num: 3 },
      { name: 'Bola Brazuca', id: 'fwc2014-Intro Brazuca', num: 4 },
      { name: 'Bandeiras', id: 'fwc2014-Intro Bandeiras', num: 5 },
      { name: 'Formação', id: 'fwc2014-Intro Formação', num: 6 },
      { name: 'Copa Confederações', id: 'fwc2014-Intro Confederações', num: 7 }
    ];
    var fwc2014EstadiosAll = [
      { name: 'Arena de São Paulo', id: 'fwc2014-Est. São Paulo', num: 8 },
      { name: 'Maracanã', id: 'fwc2014-Est. Maracanã', num: 9 },
      { name: 'Estádio Nacional', id: 'fwc2014-Est. Brasília', num: 10 },
      { name: 'Arena Fonte Nova', id: 'fwc2014-Est. Salvador', num: 11 },
      { name: 'Mineirão', id: 'fwc2014-Est. Belo Horizonte', num: 12 },
      { name: 'Arena Pantanal', id: 'fwc2014-Est. Cuiabá', num: 13 },
      { name: 'Arena da Amazônia', id: 'fwc2014-Est. Manaus', num: 14 },
      { name: 'Arena Pernambuco', id: 'fwc2014-Est. Recife', num: 15 },
      { name: 'Beira-Rio', id: 'fwc2014-Est. Porto Alegre', num: 16 },
      { name: 'Arena Castelão', id: 'fwc2014-Est. Fortaleza', num: 17 },
      { name: 'Arena das Dunas', id: 'fwc2014-Est. Natal', num: 18 },
      { name: 'Arena de Curitiba', id: 'fwc2014-Est. Curitiba', num: 19 }
    ];
    var fwc2014MapaAll = [
      { name: 'Mapa 1', id: 'fwc2014-Mapa 1', num: 20 },
      { name: 'Mapa 2', id: 'fwc2014-Mapa 2', num: 21 },
      { name: 'Mapa 3', id: 'fwc2014-Mapa 3', num: 22 },
      { name: 'Mapa 4', id: 'fwc2014-Mapa 4', num: 23 },
      { name: 'Mapa 5', id: 'fwc2014-Mapa 5', num: 24 },
      { name: 'Mapa 6', id: 'fwc2014-Mapa 6', num: 25 },
      { name: 'Mapa 7', id: 'fwc2014-Mapa 7', num: 26 },
      { name: 'Mapa 8', id: 'fwc2014-Mapa 8', num: 27 },
      { name: 'Mapa 9', id: 'fwc2014-Mapa 9', num: 28 },
      { name: 'Mapa 10', id: 'fwc2014-Mapa 10', num: 29 },
      { name: 'Mapa 11', id: 'fwc2014-Mapa 11', num: 30 },
      { name: 'Mapa 12', id: 'fwc2014-Mapa 12', num: 31 }
    ];
    [...fwc2014IntroAll, ...fwc2014EstadiosAll, ...fwc2014MapaAll].forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  if (currentAlbum === '2010') {
    var fwc2010All = [
      { name: 'My Game is Fair Play', id: 'fwc2010-Intro Fair Play', num: 0 },
      { name: 'FIFA World Cup Trophy', id: 'fwc2010-Intro Troféu', num: 1 },
      { name: 'Official Logo 1', id: 'fwc2010-Intro Logo1', num: 2 },
      { name: 'Official Logo 2', id: 'fwc2010-Intro Logo2', num: 3 },
      { name: 'Official Emblem', id: 'fwc2010-Intro Emblem', num: 4 },
      { name: 'Official Ball', id: 'fwc2010-Intro Ball', num: 5 },
      { name: 'Cape Town - Green Point 1', id: 'fwc2010-Est. Green Point 1', num: 6 },
      { name: 'Cape Town - Green Point 2', id: 'fwc2010-Est. Green Point 2', num: 7 },
      { name: 'Durban Stadium 1', id: 'fwc2010-Est. Durban 1', num: 8 },
      { name: 'Durban Stadium 2', id: 'fwc2010-Est. Durban 2', num: 9 },
      { name: 'Ellis Park 1', id: 'fwc2010-Est. Ellis Park 1', num: 10 },
      { name: 'Ellis Park 2', id: 'fwc2010-Est. Ellis Park 2', num: 11 },
      { name: 'Soccer City 1', id: 'fwc2010-Est. Soccer City 1', num: 12 },
      { name: 'Soccer City 2', id: 'fwc2010-Est. Soccer City 2', num: 13 },
      { name: 'Free State 1', id: 'fwc2010-Est. Free State 1', num: 14 },
      { name: 'Free State 2', id: 'fwc2010-Est. Free State 2', num: 15 },
      { name: 'Nelson Mandela Bay 1', id: 'fwc2010-Est. NMB 1', num: 16 },
      { name: 'Nelson Mandela Bay 2', id: 'fwc2010-Est. NMB 2', num: 17 },
      { name: 'Mbombela 1', id: 'fwc2010-Est. Mbombela 1', num: 18 },
      { name: 'Mbombela 2', id: 'fwc2010-Est. Mbombela 2', num: 19 },
      { name: 'Peter Mokaba 1', id: 'fwc2010-Est. Peter Mokaba 1', num: 20 },
      { name: 'Peter Mokaba 2', id: 'fwc2010-Est. Peter Mokaba 2', num: 21 },
      { name: 'Royal Bafokeng 1', id: 'fwc2010-Est. Royal Bafokeng 1', num: 22 },
      { name: 'Royal Bafokeng 2', id: 'fwc2010-Est. Royal Bafokeng 2', num: 23 },
      { name: 'Loftus Versfeld 1', id: 'fwc2010-Est. Loftus 1', num: 24 },
      { name: 'Loftus Versfeld 2', id: 'fwc2010-Est. Loftus 2', num: 25 },
      { name: 'Official Slogan', id: 'fwc2010-Extra Slogan', num: 26 },
      { name: 'Official Poster 1', id: 'fwc2010-Extra Poster1', num: 27 },
      { name: 'Official Poster 2', id: 'fwc2010-Extra Poster2', num: 28 },
      { name: 'Official Mascot Zakumi', id: 'fwc2010-Extra Zakumi', num: 29 }
    ];
    fwc2010All.forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  if (currentAlbum === '1998') {
    var fwc1998All = [
      { name: 'World Cup', id: 'fwc1998-Special World Cup', num: 1 },
      { name: 'Official Emblem', id: 'fwc1998-Special Emblem', num: 2 },
      { name: 'Official Mascot Footix', id: 'fwc1998-Special Mascot', num: 3 },
      { name: 'Stade de France', id: 'fwc1998-Est. Stade de France', num: 4 },
      { name: 'Parc des Princes', id: 'fwc1998-Est. Parc des Princes', num: 5 },
      { name: 'Stade Félix Bollaert', id: 'fwc1998-Est. Bollaert', num: 6 },
      { name: 'Stade Gerland', id: 'fwc1998-Est. Gerland', num: 7 },
      { name: 'Stade Geoffroy Guichard', id: 'fwc1998-Est. Geoffroy', num: 8 },
      { name: 'Stade Vélodrome', id: 'fwc1998-Est. Vélodrome', num: 9 },
      { name: 'Stade de la Mosson', id: 'fwc1998-Est. Mosson', num: 10 },
      { name: 'Stade Municipal', id: 'fwc1998-Est. Municipal', num: 11 },
      { name: 'Stade Lescure', id: 'fwc1998-Est. Lescure', num: 12 },
      { name: 'Stade de la Beaujoire', id: 'fwc1998-Est. Beaujoire', num: 13 }
    ];
    fwc1998All.forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  if (currentAlbum === '1994') {
    var fwc1994All = [
      { name: 'San Francisco', id: 'fwc1994-Cid. San Francisco', num: 1 },
      { name: 'Boston', id: 'fwc1994-Cid. Boston', num: 2 },
      { name: 'Orlando', id: 'fwc1994-Cid. Orlando', num: 3 },
      { name: 'Dallas', id: 'fwc1994-Cid. Dallas', num: 4 },
      { name: 'Detroit', id: 'fwc1994-Cid. Detroit', num: 5 },
      { name: 'Chicago', id: 'fwc1994-Cid. Chicago', num: 6 },
      { name: 'Soldier Field', id: 'fwc1994-Est. Soldier Field', num: 7 },
      { name: 'Pontiac Silverdome', id: 'fwc1994-Est. Pontiac Silverdome', num: 8 },
      { name: 'Giants Stadium', id: 'fwc1994-Est. Giants Stadium', num: 9 },
      { name: 'Foxboro Stadium', id: 'fwc1994-Est. Foxboro Stadium', num: 10 },
      { name: 'Cotton Bowl', id: 'fwc1994-Est. Cotton Bowl', num: 11 },
      { name: 'Citrus Bowl', id: 'fwc1994-Est. Citrus Bowl', num: 12 },
      { name: 'RFK Memorial Stadium', id: 'fwc1994-Est. RFK Memorial Stadium', num: 13 },
      { name: 'Stanford Stadium', id: 'fwc1994-Est. Stanford Stadium', num: 14 },
      { name: 'Rose Bowl', id: 'fwc1994-Est. Rose Bowl', num: 15 }
    ];
    fwc1994All.forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  if (currentAlbum === '1990') {
    var fwc1990All = [
      { name: 'FIFA World Cup "Italia 90" emblem', id: 'fwc1990-Intro-1', num: 1 },
      { name: 'FIFA World Cup Trophy', id: 'fwc1990-Intro-2', num: 2 },
      { name: 'FIFA World Cup "Italia 90" poster', id: 'fwc1990-Intro-3', num: 3 },
      { name: 'FIFA World Cup "Italia 90" talisman', id: 'fwc1990-Intro-4', num: 4 },
      { name: 'Playing talisman 1', id: 'fwc1990-Ciao-5', num: 5 },
      { name: 'Playing talisman 2', id: 'fwc1990-Ciao-6', num: 6 },
      { name: 'Playing talisman 3', id: 'fwc1990-Ciao-7', num: 7 },
      { name: 'Playing talisman 4', id: 'fwc1990-Ciao-8', num: 8 },
      { name: 'Roma - Stadio Olimpico', id: 'fwc1990-Stad-9', num: 9 },
      { name: 'Panorama of Roma', id: 'fwc1990-Cid-10', num: 10 },
      { name: 'Firenze - Stadio Comunale', id: 'fwc1990-Stad-11', num: 11 },
      { name: 'Panorama of Firenze', id: 'fwc1990-Cid-12', num: 12 },
      { name: 'Napoli - Stadio San Paolo', id: 'fwc1990-Stad-13', num: 13 },
      { name: 'Panorama of Napoli', id: 'fwc1990-Cid-14', num: 14 },
      { name: 'Playing talisman 5', id: 'fwc1990-Ciao-15', num: 15 },
      { name: 'Bari - Stadio Nuovo Comunale', id: 'fwc1990-Stad-16', num: 16 },
      { name: 'Panorama of Bari', id: 'fwc1990-Cid-17', num: 17 },
      { name: 'Playing talisman 6', id: 'fwc1990-Ciao-26', num: 26 },
      { name: 'Torino - Stadio Comunale', id: 'fwc1990-Stad-18', num: 18 },
      { name: 'Panorama of Torino', id: 'fwc1990-Cid-19', num: 19 },
      { name: 'Playing talisman 7', id: 'fwc1990-Ciao-27', num: 27 },
      { name: 'Milano - Stadio Giuseppe Meazza', id: 'fwc1990-Stad-20', num: 20 },
      { name: 'Panorama of Milano', id: 'fwc1990-Cid-21', num: 21 },
      { name: 'Genova - Stadio Luigi Ferraris', id: 'fwc1990-Stad-22', num: 22 },
      { name: 'Panorama of Genova', id: 'fwc1990-Cid-23', num: 23 },
      { name: 'Bologna - Stadio Renato Dall\'Ara', id: 'fwc1990-Stad-24', num: 24 },
      { name: 'Panorama of Bologna', id: 'fwc1990-Cid-25', num: 25 },
      { name: 'Verona - Stadio Bentegodi', id: 'fwc1990-Stad-28', num: 28 },
      { name: 'Panorama of Verona', id: 'fwc1990-Cid-29', num: 29 },
      { name: 'Udine - Stadio Friuli', id: 'fwc1990-Stad-31', num: 31 },
      { name: 'Panorama of Udine', id: 'fwc1990-Cid-30', num: 30 },
      { name: "Cagliari - Stadio Sant'Elia", id: 'fwc1990-Stad-33', num: 33 },
      { name: 'Panorama of Cagliari', id: 'fwc1990-Cid-32', num: 32 },
      { name: 'Playing talisman 8', id: 'fwc1990-Ciao-34', num: 34 },
      { name: 'Playing talisman 9', id: 'fwc1990-Ciao-35', num: 35 },
      { name: 'Palermo - Stadio Della Favorita', id: 'fwc1990-Stad-37', num: 37 },
      { name: 'Panorama of Palermo', id: 'fwc1990-Cid-36', num: 36 }
    ];
    fwc1990All.forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  if (currentAlbum === '1986') {
    [...fwc1986Special, ...fwc1986History, ...fwc1986Stadiums].forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  if (currentAlbum === '1982') {
    [...fwc1982Special, ...fwc1982Posters, ...fwc1982Stadiums].forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  if (currentAlbum === '1978') {
    [...fwc1978History, ...fwc1978Stadiums].forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  if (currentAlbum === '1974') {
    [...fwc1974Special, ...fwc1974Intro, ...fwc1974Mascots, ...fwc1974Stadiums].forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  if (currentAlbum === '1970') {
    [...fwc1970Special, ...fwc1970Posters, ...fwc1970Stadiums].forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  if (currentAlbum === '2006') {
    var fwc2006All = [
      { name: 'Official Match Ball Teamgeist', id: 'fwc2006-Intro Ball', num: 0 },
      { name: 'Trophy FIFA World Cup', id: 'fwc2006-Intro Trophy', num: 1 },
      { name: 'Official Emblem', id: 'fwc2006-Intro Emblem', num: 2 },
      { name: 'Official Mascot Goleo & Pille', id: 'fwc2006-Intro Mascot', num: 3 },
      { name: 'Olympiastadion Berlin', id: 'fwc2006-Est. Berlin', num: 4 },
      { name: 'Signal Iduna Park', id: 'fwc2006-Est. Dortmund', num: 5 },
      { name: 'Volksparkstadion', id: 'fwc2006-Est. Hamburg', num: 6 },
      { name: 'NRW Arena', id: 'fwc2006-Est. Gelsenkirchen', num: 7 },
      { name: 'AWD Arena', id: 'fwc2006-Est. Hannover', num: 8 },
      { name: 'RheinEnergieStadion', id: 'fwc2006-Est. Cologne', num: 9 },
      { name: 'Zentralstadion', id: 'fwc2006-Est. Leipzig', num: 10 },
      { name: 'Frankenstadion', id: 'fwc2006-Est. Nuremberg', num: 11 },
      { name: 'Gottlieb-Daimler-Stadion', id: 'fwc2006-Est. Stuttgart', num: 12 },
      { name: 'Waldstadion', id: 'fwc2006-Est. Frankfurt', num: 13 },
      { name: 'FIFA Fair Play', id: 'fwc2006-Extra Fair Play', num: 14 },
      { name: 'Germany panorama', id: 'fwc2006-Extra Panorama', num: 15 },
      { name: 'Official poster', id: 'fwc2006-Extra Poster', num: 16 }
    ];
    fwc2006All.forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  if (currentAlbum === 'cwc2025') {
    if (typeof cwc2025Album !== 'undefined' && cwc2025Album.teams) {
      const cwcGroupMap = {
        'SE Palmeiras': 'A', 'FC Porto': 'A', 'Al Ahly': 'A', 'Inter Miami': 'A',
        'Paris Saint-Germain': 'B', 'Atlético de Madrid': 'B', 'Botafogo': 'B', 'Seattle Sounders': 'B',
        'FC Bayern München': 'C', 'Auckland City': 'C', 'CA Boca Juniors': 'C', 'SL Benfica': 'C',
        'CR Flamengo': 'D', 'Espérance Sportive de Tunis': 'D', 'Chelsea FC': 'D', 'Club León': 'D',
        'CA River Plate': 'E', 'Urawa Red Diamonds': 'E', 'CF Monterrey': 'E', 'FC Internazionale Milano': 'E',
        'Fluminense FC': 'F', 'Borussia Dortmund': 'F', 'Ulsan HD FC': 'F', 'Mamelodi Sundowns': 'F',
        'Manchester City': 'G', 'Wydad AC': 'G', 'Al-Ain FC': 'G', 'Juventus FC': 'G',
        'Real Madrid CF': 'H', 'Al-Hilal': 'H', 'CF Pachuca': 'H', 'Red Bull Salzburg': 'H'
      };
      cwc2025Album.teams.forEach(team => {
        const grp = cwcGroupMap[team.name] || '';
        team.stickers.forEach(s => {
          const isSpecial = s.name.includes('Emblem') || s.name.includes('Chosen One') || s.name.includes('Crowd Hero');
          const pos = s.name.includes('Logo') ? 'badge' : (isSpecial ? 'fwc' : 'player');
          const id = `cwc2025-${s.num}`;
          allPlayers.push({ id, group: team.name, team: team.name, name: s.name, pos, num: s.num, country: team.country || '', cwcGroup: grp });
        });
      });
    }
  }
  if (currentAlbum === 'liga2025') {
    if (typeof PANINI_FUTEBOL_2025_2026 !== 'undefined') {
      const album = PANINI_FUTEBOL_2025_2026;
      Object.entries(album.sections).forEach(([sectionName, stickers]) => {
        stickers.forEach(s => {
          const pos = s.type === 'foil' ? 'fwc' : (s.rookie ? 'AT' : 'player');
          const id = `liga2025-${s.num}`;
          allPlayers.push({ id, group: sectionName, team: sectionName, name: s.name, pos, num: s.num });
        });
      });
    }
  }
  if (currentAlbum !== 'cwc2025' && currentAlbum !== 'liga2025') {
  for (const [gName, gData] of Object.entries(activeTeams)) {
    for (const team of gData.teams) {
      if (currentAlbum === '2018') {
        const idBadge = `${gName}-${team.name}-badge`;
        allPlayers.push({ id: idBadge, group: gName, team: team.name, name: 'Emblema', pos: 'badge', num: get2018SeqNum(team.name, 1) });
        const idPhoto = `${gName}-${team.name}-photo`;
        allPlayers.push({ id: idPhoto, group: gName, team: team.name, name: 'Foto de Equipa', pos: 'photo', num: get2018SeqNum(team.name, 13) });
        team.players.forEach((p, i) => {
          const pos = i < 3 ? 'GR' : i < 9 ? 'ZAG' : i < 14 ? 'MD' : 'AT';
          const id = `${gName}-${team.name}-${i}`;
          allPlayers.push({ id, group: gName, team: team.name, name: p, pos, num: get2018SeqNum(team.name, i < 11 ? i + 2 : i + 3) });
        });
      } else if (currentAlbum === '2026') {
        const idBadge = `${gName}-${team.name}-badge`;
        allPlayers.push({ id: idBadge, group: gName, team: team.name, name: 'Emblema', pos: 'badge', num });
        num++;
        team.players.forEach((p, i) => {
          if (i > 10) return;
          const pos = i < 3 ? 'GR' : i < 9 ? 'ZAG' : i < 14 ? 'MD' : 'AT';
          const id = `${gName}-${team.name}-${i}`;
          allPlayers.push({ id, group: gName, team: team.name, name: p, pos, num });
          num++;
        });
        const idPhoto = `${gName}-${team.name}-photo`;
        allPlayers.push({ id: idPhoto, group: gName, team: team.name, name: 'Foto de Equipa', pos: 'photo', num });
        num++;
        team.players.forEach((p, i) => {
          if (i <= 10) return;
          const pos = i < 3 ? 'GR' : i < 9 ? 'ZAG' : i < 14 ? 'MD' : 'AT';
          const id = `${gName}-${team.name}-${i}`;
          allPlayers.push({ id, group: gName, team: team.name, name: p, pos, num });
          num++;
        });
      } else if (currentAlbum === '2022') {
        const idPhoto = `${gName}-${team.name}-photo`;
        allPlayers.push({ id: idPhoto, group: gName, team: team.name, name: 'Foto de Equipa', pos: 'photo', num });
        num++;
        const idBadge = `${gName}-${team.name}-badge`;
        allPlayers.push({ id: idBadge, group: gName, team: team.name, name: 'Emblema', pos: 'badge', num });
        num++;
        team.players.forEach((p, i) => {
          const pos = i < 3 ? 'GR' : i < 9 ? 'ZAG' : i < 14 ? 'MD' : 'AT';
          const id = `${gName}-${team.name}-${i}`;
          allPlayers.push({ id, group: gName, team: team.name, name: p, pos, num });
          num++;
        });
      } else if (currentAlbum === '2014' || currentAlbum === '2010' || currentAlbum === '2006' || currentAlbum === '2002' || currentAlbum === '1998' || currentAlbum === '1994' || currentAlbum === '1990' || currentAlbum === '1986' || currentAlbum === '1982' || currentAlbum === '1978' || currentAlbum === '1974' || currentAlbum === '1970') {
        const getSeq = (t, p) => currentAlbum === '2014' ? get2014SeqNum(t, p) : (currentAlbum === '2010' ? get2010SeqNum(t, p) : (currentAlbum === '2006' ? get2006SeqNum(t, p) : (currentAlbum === '2002' ? get2002SeqNum(t, p) : (currentAlbum === '1998' ? get1998SeqNum(t, p) : (currentAlbum === '1994' ? get1994SeqNum(t, p) : (currentAlbum === '1990' ? get1990SeqNum(t, p) : (currentAlbum === '1986' ? get1986SeqNum(t, p) : (currentAlbum === '1982' ? get1982SeqNum(t, p) : (currentAlbum === '1978' ? get1978SeqNum(t, p) : (currentAlbum === '1974' ? get1974SeqNum(t, p) : get1970SeqNum(t, p)))))))))));
        if (currentAlbum === '1970') {
          const flagSeq = getSeq(team.name, 0);
          const idFlag = `${gName}-${team.name}-flag`;
          allPlayers.push({ id: idFlag, group: gName, team: team.name, name: 'Bandeira', pos: 'FLG', num: flagSeq });
        }
        const idBadge = `${gName}-${team.name}-badge`;
        allPlayers.push({ id: idBadge, group: gName, team: team.name, name: 'Emblema', pos: 'badge', num: getSeq(team.name, 1) });
        const idPhoto = `${gName}-${team.name}-photo`;
        const photoNum = (currentAlbum === '1998' && teamHasNoTeamPage1998 && teamHasNoTeamPage1998[team.name]) ? 0 : getSeq(team.name, 2);
        if (photoNum > 0) allPlayers.push({ id: idPhoto, group: gName, team: team.name, name: 'Foto de Equipa', pos: 'photo', num: photoNum });
        const isPaired1998 = currentAlbum === '1998' && (team.name === 'USA' || team.name === 'Iran' || team.name === 'Saudi Arabia' || team.name === 'Jamaica');
        team.players.forEach((p, i) => {
          if (isPaired1998 && i % 2 === 1) return;
          const pos = i < 3 ? 'GR' : i < 9 ? 'ZAG' : i < 14 ? 'MD' : 'AT';
          const combinedName = isPaired1998 && i + 1 < team.players.length ? p + '/' + team.players[i + 1] : p;
          const id = `${gName}-${team.name}-${i}`;
          allPlayers.push({ id, group: gName, team: team.name, name: combinedName, pos, num: getSeq(team.name, i + 3) });
        });
      } else {
        const idBadge = `${gName}-${team.name}-badge`;
        allPlayers.push({ id: idBadge, group: gName, team: team.name, name: 'Emblema', pos: 'badge', num });
        num++;
        const ap = team.players;
        const n = ap.length;
        const target = 18;
        const sel = [];
        const gkN2 = Math.min(3, Math.ceil(n*0.12));
        const defN2 = Math.min(6, Math.ceil(n*0.23));
        const mdN2 = Math.min(5, Math.ceil(n*0.19));
        const atN2 = Math.min(5, Math.ceil(n*0.19));
        for (let j=0;j<gkN2&&sel.length<target;j++) sel.push(j);
        for (let j=gkN2;j<gkN2+defN2&&sel.length<target;j++) sel.push(j);
        const mdStart2 = Math.floor(n*0.45);
        for (let j=mdStart2;j<mdStart2+mdN2&&sel.length<target;j++) sel.push(j);
        const atStart2 = Math.floor(n*0.7);
        for (let j=atStart2;j<atStart2+atN2&&sel.length<target;j++) sel.push(j);
        while(sel.length<target&&sel.length<n) sel.push(sel.length);
        sel.sort((a,b)=>a-b);
        sel.forEach((origI) => {
          const p = ap[origI];
          const pos = origI < Math.ceil(n*0.12) ? 'GR' : origI < Math.floor(n*0.42) ? 'ZAG' : origI < Math.floor(n*0.72) ? 'MD' : 'AT';
          const id = `${gName}-${team.name}-${origI}`;
          allPlayers.push({ id, group: gName, team: team.name, name: p, pos, num });
          num++;
        });
        const idPhoto = `${gName}-${team.name}-photo`;
        allPlayers.push({ id: idPhoto, group: gName, team: team.name, name: 'Foto de Equipa', pos: 'photo', num });
        num++;
      }
      }
    }
  }
  }
  if (currentAlbum === '2002') {
    const fwc2002Items = [
      { name: 'Troféu', id: 'fwc2002-Intro Troféu', num: 1 },
      { name: 'Emblema', id: 'fwc2002-Intro Emblema', num: 2 },
      { name: 'Mascote', id: 'fwc2002-Intro Mascote', num: 3 },
      { name: 'Pôster', id: 'fwc2002-Intro Pôster', num: 4 },
      { name: 'Sapporo Dome', id: 'fwc2002-Est. Sapporo', num: 5 },
      { name: 'Kashima', id: 'fwc2002-Est. Kashima', num: 6 },
      { name: 'Tokyo', id: 'fwc2002-Est. Tokyo', num: 7 },
      { name: 'Sendai', id: 'fwc2002-Est. Sendai', num: 8 },
      { name: 'Niigata', id: 'fwc2002-Est. Niigata', num: 9 },
      { name: 'Ibaraki', id: 'fwc2002-Est. Ibaraki', num: 10 },
      { name: 'Oita', id: 'fwc2002-Est. Oita', num: 11 },
      { name: 'Kobe Wing', id: 'fwc2002-Est. Kobe', num: 12 },
      { name: 'Yokohama', id: 'fwc2002-Est. Yokohama', num: 13 },
      { name: 'Shizuoka', id: 'fwc2002-Est. Shizuoka', num: 14 },
      { name: 'Osaka', id: 'fwc2002-Est. Osaka', num: 15 },
      { name: 'Miyagi', id: 'fwc2002-Est. Miyagi', num: 16 },
      { name: 'Nagai', id: 'fwc2002-Est. Nagai', num: 17 },
      { name: 'Kawasaki Todoroki', id: 'fwc2002-Est. Kawasaki', num: 18 },
      { name: 'Korea Daegu', id: 'fwc2002-Est. Daegu', num: 19 },
      { name: 'Korea Ulsan', id: 'fwc2002-Est. Ulsan', num: 20 },
      { name: 'Korea Suwon', id: 'fwc2002-Est. Suwon', num: 21 },
      { name: 'Korea Busan', id: 'fwc2002-Est. Busan', num: 22 },
      { name: 'Korea Jeonju', id: 'fwc2002-Est. Jeonju', num: 23 },
      { name: 'Korea Gwangju', id: 'fwc2002-Est. Gwangju', num: 24 }
    ];
    fwc2002Items.forEach(s => {
      allPlayers.push({ id: s.id, group: 'FWC', team: 'FWC', name: s.name, pos: 'fwc', num: s.num });
    });
  }
  renderGroupBar();
  render();
  atualizarContadores();
}

function getStates() { return viewOnlyUser ? viewOnlyUser.states : playerStates; }
function getState(id) { return viewOnlyUser ? (viewOnlyUser.states[id] || 'missing') : (playerStates[id] || 'missing'); }
function setState(id, s) {
  if (viewOnlyUser) return;
  playerStates[id] = s;
  saveUserData();
}

let currentPage = 'inicio';

function setPage(p) {
  currentPage = p;
  document.querySelectorAll('.footer-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.footer-btn[onclick="setPage('${p}')"]`).classList.add('active');

  const showCollection = p === 'inicio' || p === 'grupos';
  const showTrade = p === 'troca';
  document.getElementById('tabsBar').style.display = showCollection ? 'flex' : 'none';
  document.getElementById('progressBar').style.display = showCollection ? '' : 'none';
  document.getElementById('legendBar').style.display = showCollection ? 'flex' : 'none';
  document.getElementById('groupBarWrap').style.display = p === 'grupos' ? 'block' : 'none';
  document.getElementById('deleteAccountBar').style.display = p === 'defs' ? '' : 'none';
  document.getElementById('search').closest('.search-box').style.display = showCollection ? '' : 'none';
  if (p === 'grupos') {
    currentGroup = 'all';
    renderGroupBar();
  } else if (p === 'classif') {
    currentGroup = 'all';
    renderClassificacoes();
    return;
  } else {
    currentGroup = 'all';
  }
  render();
}

let _groupBarCache = '';
let _groupBarAlbum = '';

function renderGroupBar() {
  const bar = document.getElementById('groupBar');
  if (_groupBarAlbum === currentAlbum + '|' + showCoca && _groupBarCache) {
    bar.innerHTML = _groupBarCache;
    setTimeout(updateGroupArrows, 50);
    return;
  }
  const activeTeams = currentAlbum === '2026' ? teams : (currentAlbum === '2022' ? teams2022 : (currentAlbum === '2014' ? teams2014 : (currentAlbum === '2010' ? teams2010 : (currentAlbum === '2006' ? teams2006 : (currentAlbum === '2002' ? teams2002 : (currentAlbum === '1998' ? teams1998 : (currentAlbum === '1994' ? teams1994 : (currentAlbum === '1990' ? teams1990 : (currentAlbum === '1986' ? teams1986 : (currentAlbum === '1982' ? teams1982 : (currentAlbum === '1978' ? teams1978 : (currentAlbum === '1974' ? teams1974 : (currentAlbum === '1970' ? teams1970 : teams2018)))))))))))));
  let html = `<div class="group-btn active" onclick="setGroup('all')">Todos</div>`;
  if (currentAlbum === 'cwc2025' || currentAlbum === 'liga2025') {
    if (currentAlbum === 'cwc2025') {
      html += `<div class="group-btn" onclick="setGroup('Intro')">★ Intro</div>`;
      ['A','B','C','D','E','F','G','H'].forEach(g => {
        html += `<div class="group-btn" onclick="setGroup('Grupo ${g}')">Grupo ${g}</div>`;
      });
    } else {
      const cwcTeamsOrder = [];
      allPlayers.forEach(p => { if (!cwcTeamsOrder.includes(p.group)) cwcTeamsOrder.push(p.group); });
      cwcTeamsOrder.forEach(t => {
        const cc = allPlayers.find(p => p.group === t && p.country) ? allPlayers.find(p => p.group === t && p.country).country : '';
        const flagIso = cc === 'gb-eng' ? 'gb' : cc;
        const flag = flagIso ? `<img src="https://flagcdn.com/16x12/${flagIso}.png" style="width:14px;height:10px;vertical-align:middle;border-radius:1px;margin-right:4px;">` : '';
        html += `<div class="group-btn" onclick="setGroup('${t}')">${flag}<span class="gb-letter">${t}</span></div>`;
      });
    }
  } else {
  if (currentAlbum === '2026') {
    html += `<div class="group-btn" onclick="setGroup('FWC')">⭐ FWC</div>`;
    if (showCoca) html += `<div class="group-btn" onclick="setGroup('Coca-Cola')">🥤 Cola</div>`;
  } else if (currentAlbum === '2022' || currentAlbum === '2018' || currentAlbum === '2014' || currentAlbum === '2010' || currentAlbum === '2006' || currentAlbum === '2002' || currentAlbum === '1998' || currentAlbum === '1994' || currentAlbum === '1990' || currentAlbum === '1986' || currentAlbum === '1982' || currentAlbum === '1978' || currentAlbum === '1974' || currentAlbum === '1970') {
    html += `<div class="group-btn" onclick="setGroup('FWC')">⭐ FWC</div>`;
  }
  for (const g of Object.keys(activeTeams)) {
    const gFlags = activeTeams[g].teams.map(t => getFlagImg(t.name, 20)).join(' ');
    html += `<div class="group-btn" onclick="setGroup('${g}')"><span class="gb-letter">${g}</span><span class="gb-flags">${gFlags}</span></div>`;
  }
  }
  _groupBarCache = html;
  _groupBarAlbum = currentAlbum + '|' + showCoca;
  bar.innerHTML = html;
  setTimeout(updateGroupArrows, 50);
}

function setGroup(g) {
  currentGroup = g;
  document.querySelectorAll('.group-btn').forEach(b => {
    b.classList.toggle('active', (g === 'all' && b.textContent === 'Todos') || b.textContent === g || (g === 'FWC' && b.textContent.includes('FWC')) || (g === 'Coca-Cola' && b.textContent.includes('Cola')));
  });
  var active = document.querySelector('.group-btn.active');
  if (active) active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  render();
}

function setTab(t) {
  currentTab = t;
  document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.tab === t));
  render();
}

function render() {
  if (currentPage === 'classif') { renderClassificacoes(); return; }
  const search = document.getElementById('search').value.toLowerCase();
  const main = document.getElementById('main');
  let html = '';

  document.getElementById('adminTab').style.display = isAdmin ? 'flex' : 'none';

  if (currentPage === 'stats') {
    const activePlayers = (showCoca ? allPlayers : allPlayers.filter(p => p.pos !== 'coca')).filter(p => p.pos !== 'update');
    let owned = 0, wanted = 0;
    activePlayers.forEach(p => {
      var st = getState(p.id);
      if (currentAlbum === '2026' && (p.pos === 'GR' || p.pos === 'ZAG' || p.pos === 'MD' || p.pos === 'AT')) {
        var parts = p.id.split('-');
        var playerIdx = parseInt(parts[parts.length - 1]);
        var teamPos = playerIdx <= 10 ? playerIdx + 2 : playerIdx + 3;
        var updKey = updateLookup.get(p.team + '|' + teamPos);
        if (updKey != null) {
          var updSt = getState('update-' + updKey);
          if (st === 'wanted' || updSt === 'wanted') { wanted++; return; }
          else if (st === 'owned' || updSt === 'owned') { owned++; return; }
          else { return; }
        } else {
          if (st === 'owned') { owned++; return; }
          if (st === 'wanted') { wanted++; return; }
        }
      } else {
        if (st === 'owned') { owned++; return; }
        if (st === 'wanted') { wanted++; return; }
      }
    });
    const total = activePlayers.length;
    const pct = total > 0 ? Math.round((owned / total) * 100) : 0;
    const wcYear = currentAlbum === '2022' ? 2022 : (currentAlbum === '2018' ? 2018 : (currentAlbum === '2014' ? 2014 : (currentAlbum === '2010' ? 2010 : (currentAlbum === '2006' ? 2006 : (currentAlbum === '2002' ? 2002 : (currentAlbum === '1998' ? 1998 : (currentAlbum === '1994' ? 1994 : (currentAlbum === '1990' ? 1990 : (currentAlbum === '1986' ? 1986 : (currentAlbum === '1982' ? 1982 : (currentAlbum === '1978' ? 1978 : (currentAlbum === '1974' ? 1974 : (currentAlbum === '1970' ? 1970 : 2026)))))))))))));
    
    const worldCup = new Date(currentAlbum === '2022' ? '2022-11-20T00:00:00' : (currentAlbum === '2018' ? '2018-06-14T00:00:00' : (currentAlbum === '2010' ? '2010-06-11T00:00:00' : (currentAlbum === '2006' ? '2006-06-09T00:00:00' : (currentAlbum === '2002' ? '2002-05-31T00:00:00' : (currentAlbum === '1998' ? '1998-06-10T00:00:00' : (currentAlbum === '1994' ? '1994-06-17T00:00:00' : (currentAlbum === '1990' ? '1990-06-08T00:00:00' : (currentAlbum === '1986' ? '1986-05-31T00:00:00' : (currentAlbum === '1982' ? '1982-06-13T00:00:00' : (currentAlbum === '1978' ? '1978-06-01T00:00:00' : (currentAlbum === '1974' ? '1974-06-13T00:00:00' : (currentAlbum === '1970' ? '1970-05-31T00:00:00' : '2026-06-11T00:00:00')))))))))))));
    const now = new Date();
    const diff = worldCup - now;
    const cwDays = diff > 0 ? Math.floor(diff / 86400000) : 0;
    const cwHours = diff > 0 ? Math.floor((diff % 86400000) / 3600000) : 0;
    
    let groupStats = '';
    if (currentAlbum === 'cwc2025') {
      const cwcGroupLetters = ['A','B','C','D','E','F','G','H'];
      cwcGroupLetters.forEach(grp => {
        const teamPlayers = allPlayers.filter(p => p.cwcGroup === grp);
        let gOwned = 0;
        teamPlayers.forEach(p => { if (getState(p.id) === 'owned') gOwned++; });
        const gTotal = teamPlayers.length;
        const gPct = gTotal > 0 ? Math.round((gOwned / gTotal) * 100) : 0;
        groupStats += `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-bottom:1px solid var(--border);">
          <span style="font-weight:600;font-size:0.9em;">Grupo ${grp}</span>
          <span style="font-size:0.8em;color:var(--muted);">${gOwned}/${gTotal}</span>
          <div style="width:80px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden;">
            <div style="width:${gPct}%;height:100%;background:var(--owned);border-radius:3px;"></div>
          </div>
        </div>`;
      });
    } else if (currentAlbum === 'liga2025') {
      const ligaSections = {};
      allPlayers.forEach(p => { if (!ligaSections[p.group]) ligaSections[p.group] = []; ligaSections[p.group].push(p); });
      Object.keys(ligaSections).forEach(section => {
        const sectionPlayers = ligaSections[section];
        let sOwned = 0;
        sectionPlayers.forEach(p => { if (getState(p.id) === 'owned') sOwned++; });
        const sTotal = sectionPlayers.length;
        const sPct = sTotal > 0 ? Math.round((sOwned / sTotal) * 100) : 0;
        groupStats += `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-bottom:1px solid var(--border);">
          <span style="font-weight:600;font-size:0.9em;">${section}</span>
          <span style="font-size:0.8em;color:var(--muted);">${sOwned}/${sTotal}</span>
          <div style="width:80px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden;">
            <div style="width:${sPct}%;height:100%;background:var(--owned);border-radius:3px;"></div>
          </div>
        </div>`;
      });
    } else {
    const statsTeams = currentAlbum === '2026' ? teams : (currentAlbum === '2022' ? teams2022 : (currentAlbum === '2014' ? teams2014 : (currentAlbum === '2010' ? teams2010 : (currentAlbum === '2006' ? teams2006 : (currentAlbum === '2002' ? teams2002 : (currentAlbum === '1998' ? teams1998 : (currentAlbum === '1994' ? teams1994 : (currentAlbum === '1990' ? teams1990 : (currentAlbum === '1986' ? teams1986 : (currentAlbum === '1982' ? teams1982 : (currentAlbum === '1978' ? teams1978 : (currentAlbum === '1974' ? teams1974 : (currentAlbum === '1970' ? teams1970 : teams2018)))))))))))));
    for (const [gName, gData] of Object.entries(statsTeams)) {
      let gTotal = 0, gOwned = 0;
      for (const team of gData.teams) {
        gTotal += 20;
        const teamPlayers = allPlayers.filter(p => p.group === gName && p.team === team.name);
        teamPlayers.forEach(p => {
          if (getState(p.id) === 'owned') { gOwned++; return; }
          if (currentAlbum === '2026' && (p.pos === 'GR' || p.pos === 'ZAG' || p.pos === 'MD' || p.pos === 'AT')) {
            var parts = p.id.split('-');
            var playerIdx = parseInt(parts[parts.length - 1]);
            var teamPos = playerIdx <= 10 ? playerIdx + 2 : playerIdx + 3;
            var updKey = updateLookup.get(p.team + '|' + teamPos);
            if (updKey != null && getState('update-' + updKey) === 'owned') gOwned++;
          }
        });
      }
      const gPct = gTotal > 0 ? Math.round((gOwned / gTotal) * 100) : 0;
      groupStats += `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-bottom:1px solid var(--border);">
        <span style="font-weight:600;font-size:0.9em;">Grupo ${gName}</span>
        <span style="font-size:0.8em;color:var(--muted);">${gOwned}/${gTotal}</span>
        <div style="width:80px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden;">
          <div style="width:${gPct}%;height:100%;background:var(--owned);border-radius:3px;"></div>
        </div>
      </div>`;
    }
    }
    
    let posStats = {};
    activePlayers.forEach(p => {
      const posKey = (currentAlbum === 'cwc2025' || currentAlbum === 'liga2025') ? p.pos : p.pos;
      if (posKey === 'badge' || posKey === 'photo' || posKey === 'fwc' || posKey === 'coca' || posKey === 'update') return;
      if (!posStats[posKey]) posStats[posKey] = { total: 0, owned: 0 };
      posStats[posKey].total++;
      if (getState(p.id) === 'owned') { posStats[posKey].owned++; return; }
      if (currentAlbum === '2026') {
        var parts = p.id.split('-');
        var playerIdx = parseInt(parts[parts.length - 1]);
        var teamPos = playerIdx <= 10 ? playerIdx + 2 : playerIdx + 3;
        var updKey = updateLookup.get(p.team + '|' + teamPos);
        if (updKey != null && getState('update-' + updKey) === 'owned') posStats[p.pos].owned++;
      }
    });
    const posLabelsFull = { GR: 'Guarda-Redes', ZAG: 'Defesas', MD: 'Médios', AT: 'Avançados' };
    let posHTML = '';
    for (const [pos, data] of Object.entries(posStats)) {
      const posPct = data.total > 0 ? Math.round((data.owned / data.total) * 100) : 0;
      posHTML += `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-bottom:1px solid var(--border);">
        <span style="font-weight:600;font-size:0.9em;">${posLabelsFull[pos] || pos}</span>
        <span style="font-size:0.8em;color:var(--muted);">${data.owned}/${data.total}</span>
        <div style="width:80px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden;">
          <div style="width:${posPct}%;height:100%;background:var(--gold);border-radius:3px;"></div>
        </div>
      </div>`;
    }

    const statsTitle = currentAlbum === 'cwc2025' ? '🏆 Club World Cup 2025' : (currentAlbum === 'liga2025' ? '🏆 Futebol 2025-2026' : `🏆 Mundial ${wcYear} ${currentAlbum === '2026' ? 'em curso!' : 'já acabou!'}`);
    const showCountdown = diff > 0 && currentAlbum !== 'cwc2025' && currentAlbum !== 'liga2025';
    html = `<div style="padding:24px 20px;text-align:center;">
      <h2 style="color:var(--gold);margin-bottom:16px;">📊 Estatísticas</h2>
      ${showCountdown ? `<div style="background:linear-gradient(135deg,var(--card),var(--card2));border:1px solid var(--border);border-radius:14px;padding:16px;margin-bottom:20px;">
        <div style="font-size:0.8em;color:var(--muted);margin-bottom:4px;">⚽ Mundial ${wcYear} começa em</div>
        <div style="font-size:1.8em;font-weight:800;color:var(--gold);">${cwDays}d ${cwHours}h</div>
      </div>` : `<div style="background:linear-gradient(135deg,var(--card),var(--card2));border:1px solid var(--gold);border-radius:14px;padding:16px;margin-bottom:20px;">
        <div style="font-size:1.4em;font-weight:800;color:var(--gold);">${statsTitle}</div>
      </div>`}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:400px;margin:0 auto 20px;">
        <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:16px;border:1px solid var(--border);">
          <div style="font-size:2em;color:var(--owned);">${owned}</div>
          <div style="color:var(--muted);font-size:0.85em;">Tenho</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:16px;border:1px solid var(--border);">
          <div style="font-size:2em;color:var(--wanted);">${wanted}</div>
          <div style="color:var(--muted);font-size:0.85em;">Troca</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:16px;border:1px solid var(--border);">
          <div style="font-size:2em;color:var(--missing);">${total - owned}</div>
          <div style="color:var(--muted);font-size:0.85em;">Faltam</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:16px;border:1px solid var(--border);">
          <div style="font-size:2em;color:var(--gold);">${pct}%</div>
          <div style="color:var(--muted);font-size:0.85em;">Completo</div>
        </div>
      </div>
      <div style="text-align:left;max-width:400px;margin:0 auto 20px;">
        <h3 style="color:var(--gold);font-size:0.9em;margin-bottom:8px;">📍 Por Posição</h3>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:12px;overflow:hidden;">${posHTML}</div>
      </div>
      <div style="text-align:left;max-width:400px;margin:0 auto;">
        <h3 style="color:var(--gold);font-size:0.9em;margin-bottom:8px;">🌍 Por Grupo</h3>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:12px;overflow:hidden;">${groupStats}</div>
      </div>
    </div>`;
    main.innerHTML = html;
    return;
  }

  if (currentPage === 'defs') {
    const userPhoto = (currentUser && currentUser.photoURL) ? currentUser.photoURL : '';
    const userName = getUserDisplayName();
    const userInitial = getUserInitial();
    const accs = getAccounts();
    const otherAccs = Object.entries(accs).filter(([k]) => k !== currentUser.key);
    const switcherHTML = `
      <div style="margin-top:10px;">
        <div onclick="toggleAccountSwitcher()" style="display:flex;align-items:center;gap:8px;padding:12px 14px;background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;cursor:pointer;font-size:0.85em;color:var(--muted);">
          <span>🔄 Trocar conta</span>
          <span style="margin-left:auto;font-size:0.8em;transition:0.2s;${accountsOpen ? 'transform:rotate(180deg)' : ''}">▼</span>
        </div>
        <div id="accountSwitcher" style="display:${accountsOpen ? 'block' : 'none'};margin-top:6px;background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;overflow:hidden;">
          ${otherAccs.length > 0 ? otherAccs.map(([k, a]) => `<div onclick="switchAccount('${k}')" style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid var(--border);transition:0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.08)'" onmouseout="this.style.background='transparent'">
            ${a.photoURL ? `<img src="${a.photoURL}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;">` : `<div style="width:32px;height:32px;border-radius:50%;background:var(--blue);display:flex;align-items:center;justify-content:center;font-size:0.85em;font-weight:700;color:#fff;">${a.name ? escHtml(a.name.charAt(0).toUpperCase()) : '?'}</div>`}
            <div>
              <div style="font-weight:600;font-size:0.9em;color:var(--text);">${escHtml(a.name || 'Utilizador')}</div>
              <div style="font-size:0.75em;color:var(--muted);">${escHtml(a.email)}</div>
            </div>
          </div>`).join('') : '<div style="padding:12px 14px;font-size:0.8em;color:var(--muted);">Sem outras contas guardadas</div>'}
          <div onclick="switchToLogin('login')" style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid var(--border);transition:0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.08)'" onmouseout="this.style.background='transparent'">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);display:flex;align-items:center;justify-content:center;font-size:0.85em;font-weight:700;color:#fff;">🔑</div>
            <div style="font-weight:600;font-size:0.9em;color:var(--text);">Entrar noutra conta</div>
          </div>
          <div onclick="switchToLogin('create')" style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;transition:0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.08)'" onmouseout="this.style.background='transparent'">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-size:0.85em;font-weight:700;color:#fff;">➕</div>
            <div style="font-weight:600;font-size:0.9em;color:var(--text);">Criar conta nova</div>
          </div>
        </div>
      </div>
    `;
    html = `<div style="padding:24px 20px;text-align:center;">
      <h2 style="color:var(--gold);margin-bottom:20px;">⚙️ Definições</h2>
      <div style="max-width:400px;margin:0 auto;text-align:left;">
        <div style="display:flex;align-items:center;gap:14px;padding:16px;background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:12px;margin-bottom:20px;">
          <label style="cursor:pointer;position:relative;">
            ${userPhoto ? `<img src="${userPhoto}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;">` : `<div style="width:48px;height:48px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:1.3em;font-weight:800;color:#fff;">${userInitial}</div>`}
            <input type="file" accept="image/*" style="display:none;" onchange="changeProfilePhoto(this)">
            <div style="position:absolute;bottom:0;right:0;width:18px;height:18px;background:var(--accent);border-radius:50%;border:2px solid var(--card);display:flex;align-items:center;justify-content:center;font-size:0.6em;">📷</div>
          </label>
          <div style="flex:1;text-align:left;">
            <input type="text" id="editDisplayName" value="${userName}" style="background:rgba(255,255,255,0.08);border:1px solid var(--border);border-radius:8px;padding:6px 10px;color:var(--text);font-size:0.95em;font-weight:700;font-family:inherit;width:100%;box-sizing:border-box;" onchange="changeDisplayName(this.value)">
          </div>
        </div>
        ${switcherHTML}

        <div style="height:16px;"></div>

        ${currentAlbum === '2026' ? `<div style="margin-bottom:20px;">
          <label style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:12px;cursor:pointer;">
            <input type="checkbox" ${showCoca ? 'checked' : ''} onchange="toggleCoca(this.checked)" style="width:20px;height:20px;accent-color:#d32f2f;">
            <div>
              <div style="font-weight:600;color:var(--text);">🥤 Cromos Coca-Cola</div>
              <div style="font-size:0.8em;color:var(--muted);">Mostrar secção Coca-Cola (12 cromos)</div>
            </div>
          </label>
        </div>` : ''}
        <button onclick="selectAllCollection()" style="width:100%;background:#2e7d32;color:#fff;border:none;padding:12px 24px;border-radius:10px;font-size:1em;cursor:pointer;margin-bottom:12px;">✅ Selecionar coleção toda</button>
        <button onclick="if(confirm('Apagar toda a coleção?')){deleteAllData();}" style="width:100%;background:var(--accent);color:#fff;border:none;padding:12px 24px;border-radius:10px;font-size:1em;cursor:pointer;margin-bottom:12px;">🗑️ Apagar Coleção</button>
        <button onclick="logout()" style="width:100%;background:rgba(255,255,255,0.08);color:var(--muted);border:1px solid var(--border);padding:12px 24px;border-radius:10px;font-size:1em;cursor:pointer;">🚪 Sair da conta</button>
      </div>
    </div>`;
    main.innerHTML = html;
    return;
  }

  if (currentPage === 'admin' && isAdmin) {
    html = `<div style="padding:20px;text-align:center;overflow-x:hidden;">
      <h2 style="color:var(--gold);margin-bottom:16px;">🔑 Painel Admin</h2>
      <div id="adminContent" style="overflow-x:hidden;"><div style="color:var(--muted);padding:20px;">A carregar utilizadores...</div></div>
    </div>`;
    main.innerHTML = html;
    loadAdminPanel();
    return;
  }

  if (currentPage === 'troca') {
    const activePlayers = (showCoca ? allPlayers : allPlayers.filter(p => p.pos !== 'coca')).filter(p => p.pos !== 'update');
    const wanted = activePlayers.filter(p => getState(p.id) === 'wanted');
    const missing = activePlayers.filter(p => getState(p.id) === 'missing' && p.pos !== 'fwc' && p.pos !== 'coca');
    const owned = activePlayers.filter(p => getState(p.id) === 'owned').length;
    const total = activePlayers.length;

    const wantedByTeam = {};
    wanted.forEach(p => {
      const key = p.team;
      if (!wantedByTeam[key]) wantedByTeam[key] = [];
      wantedByTeam[key].push(p);
    });

    let wantedUpdateCount = 0;
    if (currentAlbum === '2026') {
      const wantedUpdates = updateStickers.filter(u => getState('update-' + u.num) === 'wanted');
      wantedUpdateCount = wantedUpdates.length;
      wantedUpdates.forEach(u => {
        const key = u.team;
        if (!wantedByTeam[key]) wantedByTeam[key] = [];
        wantedByTeam[key].push({ id: 'update-' + u.num, name: u.name, pos: u.pos, team: u.team, num: u.num, isUpdate: true, replacedNum: u.replacedNum });
      });
    }

    const totalWanted = wanted.length + wantedUpdateCount;

    const missingByTeam = {};
    missing.forEach(p => {
      const key = p.team;
      if (!missingByTeam[key]) missingByTeam[key] = [];
      missingByTeam[key].push(p);
    });

    let teamTradeHTML = '';
    const sortedWantedTeams = Object.keys(wantedByTeam).sort((a, b) => wantedByTeam[b].length - wantedByTeam[a].length);
    sortedWantedTeams.forEach(team => {
      const players = wantedByTeam[team];
      const flagImg = getFlagImg(team, 18);
      teamTradeHTML += `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;border-bottom:1px solid var(--border);font-size:0.85em;">
        ${flagImg}<span style="font-weight:600;flex:1;">${team}</span>
        <span style="color:var(--wanted);font-weight:700;">${players.length}</span>
      </div>`;
    });

    let wantedHTML = '';
    sortedWantedTeams.forEach(team => {
      const players = wantedByTeam[team];
      const flagImg = getFlagImg(team, 20);
      wantedHTML += `<div class="selecao-section">
        <div class="selecao-header open" onclick="toggleSelecao(this)">
          ${flagImg}<span class="name">${team}</span>
          <span class="info"><span style="color:var(--wanted);font-weight:700;">${players.length}</span></span>
          <span class="arrow">▼</span>
        </div>
        <div class="selecao-body open" style="padding-left:4px;">
          <div class="stickers" style="grid-template-columns:repeat(4, 1fr);gap:4px;">`;
      players.forEach(p => {
        const posLabel = posLabels[p.pos] || p.pos;
        const stickerNum = typeof p.num === 'number' ? p.num : '';
        const updBadge = p.isUpdate ? '<div style="position:absolute;top:2px;right:2px;background:#4caf50;color:#fff;font-size:0.5em;font-weight:900;padding:1px 4px;border-radius:4px;z-index:2;">UPD</div>' : '';
        wantedHTML += `<div class="sticker repeated" onclick="openModal('${p.id}','${p.name.replace(/'/g,"\\'")}','${p.pos}','${p.team.replace(/'/g,"\\'")}',${p.isUpdate ? p.num : (stickerNum || 0)})" style="aspect-ratio:2/3;min-height:60px;cursor:pointer;position:relative;">${updBadge}
          <div class="num" style="font-size:0.8em;">${p.isUpdate ? '' : stickerNum}</div>
          <div class="pos" style="font-size:0.45em;">${posLabel}</div>
          <div class="name" style="font-size:0.4em;">${p.name}</div>
        </div>`;
      });
      wantedHTML += `</div></div></div>`;
    });

    html = `<div style="padding:20px;">
      <h2 style="color:var(--gold);text-align:center;margin-bottom:16px;">🔄 Repetidas</h2>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px;">
        <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:14px;text-align:center;border:1px solid var(--border);">
          <div style="font-size:1.8em;color:var(--wanted);font-weight:800;">${totalWanted}</div>
          <div style="font-size:0.8em;color:var(--muted);">Repetidas</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:14px;text-align:center;border:1px solid var(--border);">
          <div style="font-size:1.8em;color:var(--missing);font-weight:800;">${missing.length}</div>
          <div style="font-size:0.8em;color:var(--muted);">Preciso</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:14px;text-align:center;border:1px solid var(--border);">
          <div style="font-size:1.8em;color:var(--owned);font-weight:800;">${owned}</div>
          <div style="font-size:0.8em;color:var(--muted);">Tenho</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:14px;text-align:center;border:1px solid var(--border);">
          <div style="font-size:1.8em;color:var(--gold);font-weight:800;">${total - owned}</div>
          <div style="font-size:0.8em;color:var(--muted);">Faltam no total</div>
        </div>
      </div>

      ${totalWanted > 0 ? `<div style="margin-bottom:16px;">
        <h3 style="color:var(--wanted);font-size:0.9em;margin-bottom:8px;">📤 Repetidas</h3>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:12px;overflow:hidden;">${teamTradeHTML}</div>
      </div>
      <div style="margin-bottom:20px;">${wantedHTML}</div>` : '<div style="text-align:center;padding:24px;color:var(--muted);background:rgba(255,255,255,0.03);border-radius:12px;border:1px solid var(--border);margin-bottom:16px;"><div style="font-size:2em;margin-bottom:8px;">📭</div>Não tens cromos marcados como repetidos.<br>No modal de cada cromo, marca como <span style="color:var(--wanted);font-weight:600;">🔄 Repetida</span></div>'}

      ${missing.length > 0 ? `<div style="margin-bottom:16px;">
        <h3 style="color:var(--missing);font-size:0.9em;margin-bottom:8px;">📥 Preciso (${missing.length})</h3>
      </div>` : ''}
    </div>`;
    main.innerHTML = html;
    return;
  }

    const activeTeams = (currentAlbum === '2026' ? teams2026 : (currentAlbum === '2022' ? teams2022 : (currentAlbum === '2018' ? teams2018 : (currentAlbum === '2014' ? teams2014 : (currentAlbum === '2010' ? teams2010 : (currentAlbum === '2006' ? teams2006 : (currentAlbum === '2002' ? teams2002 : (currentAlbum === '1998' ? teams1998 : (currentAlbum === '1994' ? teams1994 : (currentAlbum === '1990' ? teams1990 : (currentAlbum === '1986' ? teams1986 : (currentAlbum === '1982' ? teams1982 : (currentAlbum === '1978' ? teams1978 : (currentAlbum === '1974' ? teams1974 : (currentAlbum === '1970' ? teams1970 : teams2018)))))))))))))));
    const activeTeamOrder = getActiveTeamOrder();
  let groups = (currentPage === 'grupos' && currentGroup !== 'all' && currentGroup !== 'FWC' && currentGroup !== 'Coca-Cola') ? [currentGroup] : (currentGroup === 'FWC' || currentGroup === 'Coca-Cola') ? [] : Object.keys(activeTeams);

  if (currentAlbum === '2026' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    const matchFWC = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || 'museu'.includes(search) || 'museum'.includes(search);
    const fwcTop = fwcStickers.filter(s => s.num <= 8);
    const matchTabFWC = currentTab === 'all' || fwcTop.some(s => { const st = getState(`fwc-${s.num}`); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
    if (matchFWC && matchTabFWC) {
      let fwcHTML = '';
      fwcTop.forEach(s => {
        const id = `fwc-${s.num}`;
        const st = getState(id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const fireNum = s.num + 1;
        const url = `https://firebasestorage.googleapis.com/v0/b/centralcopa-prod.firebasestorage.app/o/public%2Fstickers%2FWC2026_BR%2F${fireNum}.jpg?alt=media`;
        const pngUrl = `https://firebasestorage.googleapis.com/v0/b/centralcopa-prod.firebasestorage.app/o/public%2Fstickers%2FWC2026_BR%2F${fireNum}.png?alt=media`;
        const displayNum = String(s.num).padStart(2, '0');
        fwcHTML += `<div class="sticker fwc ${st}" data-id="${id}" onclick="openModal('${id}','${s.name}','fwc','FWC',${s.num})">
          <img class="sticker-bg" loading="lazy" src="${url}" onerror="this.onerror=null;this.src='${pngUrl}';this.onerror=function(){this.style.display='none'}">
          <div class="num">${displayNum}</div>
          <div class="name">${s.desc}</div>
        </div>`;
      });
      if (fwcHTML) {
        html += `<div style="font-size:0.8em;font-weight:800;color:var(--gold);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--border);margin-bottom:12px;">⭐ FIFA World Cup 2026 (00-08)</div>`;
        html += `<div class="stickers">${fwcHTML}</div>`;
      }
    }
  }

  if (currentAlbum === '2022' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    var fwc2022Top = [
      { name: 'Panini', id: 'fwc2022-Panini', icon: '🏷️', cat: 'Conteúdo' },
      { name: 'FIFA', id: 'fwc2022-FIFA', icon: '🏛️', cat: 'Conteúdo' },
      { name: 'Troféu Oficial 1', id: 'fwc2022-Troféu 1', icon: '🏆', cat: 'Conteúdo' },
      { name: 'Troféu Oficial 2', id: 'fwc2022-Troféu 2', icon: '🏆', cat: 'Conteúdo' },
      { name: "Mascote La'eeb", id: "fwc2022-Mascote 1", icon: '🎭', cat: 'Conteúdo' },
      { name: "Mascote La'eeb 2", id: "fwc2022-Mascote 2", icon: '🎭', cat: 'Conteúdo' },
      { name: 'Emblema Oficial 1', id: 'fwc2022-Emblema 1', icon: '🏅', cat: 'Conteúdo' },
      { name: 'Emblema Oficial 2', id: 'fwc2022-Emblema 2', icon: '🏅', cat: 'Conteúdo' },
      { name: 'Ahmad Bin Ali', id: 'fwc2022-Est. Ahmad Bin Ali', icon: '🏟️', cat: 'Estádios' },
      { name: 'Al Janoub', id: 'fwc2022-Est. Al Janoub', icon: '🏟️', cat: 'Estádios' },
      { name: 'Al Thumama', id: 'fwc2022-Est. Al Thumama', icon: '🏟️', cat: 'Estádios' },
      { name: 'Education City', id: 'fwc2022-Est. Education City', icon: '🏟️', cat: 'Estádios' },
      { name: 'Khalifa International', id: 'fwc2022-Est. Khalifa', icon: '🏟️', cat: 'Estádios' },
      { name: 'Estádio 974', id: 'fwc2022-Est. 974', icon: '🏟️', cat: 'Estádios' },
      { name: 'Al Bayt (exterior)', id: 'fwc2022-Est. Al Bayt ext.', icon: '🏟️', cat: 'Estádios' },
      { name: 'Al Bayt (interior)', id: 'fwc2022-Est. Al Bayt int.', icon: '🏟️', cat: 'Estádios' },
      { name: 'Lusail (exterior)', id: 'fwc2022-Est. Lusail ext.', icon: '🏟️', cat: 'Estádios' },
      { name: 'Lusail (interior)', id: 'fwc2022-Est. Lusail int.', icon: '🏟️', cat: 'Estádios' },
      { name: 'Bola Al Rihla', id: 'fwc2022-Al Rihla', icon: '⚽', cat: 'Bola' }
    ];
    const matchFWC = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || 'panini'.includes(search) || 'estadio'.includes(search) || 'bola'.includes(search) || 'trofeu'.includes(search) || 'mascote'.includes(search) || 'emblema'.includes(search) || 'rihla'.includes(search);
    const matchTabFWC = currentTab === 'all' || fwc2022Top.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
    if (matchFWC && matchTabFWC) {
      html += `<div style="font-size:0.8em;font-weight:800;color:var(--gold);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--border);margin-bottom:12px;">⭐ FIFA World Cup Qatar 2022 (00-18)</div>`;
      let lastCat = '';
      let fwcHTML = '';
      fwc2022Top.forEach((s, i) => {
        const st = getState(s.id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        if (s.cat !== lastCat) {
          if (fwcHTML) html += `<div class="stickers">${fwcHTML}</div>`;
          lastCat = s.cat;
          fwcHTML = '';
          html += `<div style="font-size:0.7em;font-weight:600;color:var(--muted);padding:8px 0 4px;letter-spacing:0.5px;">${s.icon} ${s.cat}</div>`;
        }
        const displayNum = String(i).padStart(2, '0');
        const fwcCode = i === 0 ? '00' : `fwc${i}`;
        const fwcImgUrl = `https://www.laststicker.com/i/cards/7915/${fwcCode}.jpg`;
        fwcHTML += `<div class="sticker fwc ${st}" data-id="${s.id}" onclick="openModal('${s.id}','${s.name}','fwc','FWC',${i})">
          <img class="sticker-bg" loading="lazy" src="${fwcImgUrl}" onerror="this.style.display='none'">
          <div class="num">${displayNum}</div>
          <div class="name">${s.name}</div>
        </div>`;
      });
      if (fwcHTML) html += `<div class="stickers">${fwcHTML}</div>`;
    }
  }



  if (currentAlbum === '2018' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    var fwc2018Mundial = [
      { name: 'Panini', id: 'fwc2018-Mundial Panini', num: 0 },
      { name: 'FIFA Fair Play', id: 'fwc2018-Mundial FIFA Fair Play', num: 1 },
      { name: 'Troféu FIFA World Cup', id: 'fwc2018-Mundial Troféu', num: 2 },
      { name: 'Gráfico 1', id: 'fwc2018-Mundial Gráfico 1', num: 3 },
      { name: 'Gráfico 2', id: 'fwc2018-Mundial Gráfico 2', num: 4 },
      { name: 'Logo 1', id: 'fwc2018-Mundial Logo 1', num: 5 },
      { name: 'Logo 2', id: 'fwc2018-Mundial Logo 2', num: 6 },
      { name: 'Bola Oficial', id: 'fwc2018-Mundial Bola Oficial', num: 7 }
    ];
    var fwc2018Estadios = [
      { name: 'Ekaterinburg Arena', id: 'fwc2018-Est. Ekaterinburg Arena', num: 8 },
      { name: 'Kaliningrad Stadium', id: 'fwc2018-Est. Kaliningrad Stadium', num: 9 },
      { name: 'Kazan Arena', id: 'fwc2018-Est. Kazan Arena', num: 10 },
      { name: 'Spartak Stadium', id: 'fwc2018-Est. Spartak Stadium', num: 11 },
      { name: 'Nizhny Novgorod Stadium', id: 'fwc2018-Est. Nizhny Novgorod', num: 12 },
      { name: 'Luzhniki Stadium', id: 'fwc2018-Est. Luzhniki', num: 13 },
      { name: 'Rostov Arena', id: 'fwc2018-Est. Rostov Arena', num: 14 },
      { name: 'Saint Petersburg Stadium', id: 'fwc2018-Est. Saint Petersburg', num: 15 },
      { name: 'Samara Arena', id: 'fwc2018-Est. Samara Arena', num: 16 },
      { name: 'Mordovia Arena', id: 'fwc2018-Est. Mordovia Arena', num: 17 },
      { name: 'Fisht Stadium', id: 'fwc2018-Est. Fisht Stadium', num: 18 },
      { name: 'Volgograd Arena', id: 'fwc2018-Est. Volgograd Arena', num: 19 }
    ];
    var fwc2018Cidades = [
      { name: 'Moscow 1', id: 'fwc2018-Cid. Moscow 1', num: 20 },
      { name: 'Moscow 2', id: 'fwc2018-Cid. Moscow 2', num: 21 },
      { name: 'Kaliningrad', id: 'fwc2018-Cid. Kaliningrad', num: 22 },
      { name: 'Saint Petersburg', id: 'fwc2018-Cid. Saint Petersburg', num: 23 },
      { name: 'Sochi', id: 'fwc2018-Cid. Sochi', num: 24 },
      { name: 'Rostov-on-Don', id: 'fwc2018-Cid. Rostov-on-Don', num: 25 },
      { name: 'Volgograd', id: 'fwc2018-Cid. Volgograd', num: 26 },
      { name: 'Kazan', id: 'fwc2018-Cid. Kazan', num: 27 },
      { name: 'Nizhny Novgorod', id: 'fwc2018-Cid. Nizhny Novgorod', num: 28 },
      { name: 'Samara', id: 'fwc2018-Cid. Samara', num: 29 },
      { name: 'Yekaterinburg', id: 'fwc2018-Cid. Yekaterinburg', num: 30 },
      { name: 'Saransk', id: 'fwc2018-Cid. Saransk', num: 31 }
    ];
    var fwc2018Legends = [
      { name: 'Brasil 1958', id: 'fwc2018-Legends Brasil 1958', num: 672 },
      { name: 'Alemanha 2014', id: 'fwc2018-Legends Alemanha 2014', num: 673 },
      { name: 'Itália 1982', id: 'fwc2018-Legends Itália 1982', num: 674 },
      { name: 'Uruguai 1930', id: 'fwc2018-Legends Uruguai 1930', num: 675 },
      { name: 'Argentina 1986', id: 'fwc2018-Legends Argentina 1986', num: 676 },
      { name: 'Inglaterra 1966', id: 'fwc2018-Legends Inglaterra 1966', num: 677 },
      { name: 'França 1998', id: 'fwc2018-Legends França 1998', num: 678 },
      { name: 'Espanha 2010', id: 'fwc2018-Legends Espanha 2010', num: 679 },
      { name: 'Pelé', id: 'fwc2018-Legends Pelé', num: 680 },
      { name: 'Miroslav Klose', id: 'fwc2018-Legends Miroslav Klose', num: 681 }
    ];
    function renderFwc2018Section(items, title, icon) {
      const matchAny = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || title.toLowerCase().includes(search) || items.some(s => s.name.toLowerCase().includes(search));
      const matchTabAny = currentTab === 'all' || items.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
      if (!matchAny || !matchTabAny) return '';
      let h = '';
      items.forEach(s => {
        const st = getState(s.id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const imgUrl = `https://www.laststicker.com/i/cards/3852/${s.num === 0 ? '00' : s.num}.jpg`;
        h += `<div class="sticker fwc ${st}" data-id="${s.id}" onclick="openModal('${s.id}','${s.name}','fwc','FWC',${s.num})">
          <img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">
          <div class="num">${String(s.num).padStart(2,'0')}</div>
          <div class="name">${s.name}</div>
        </div>`;
      });
      if (!h) return '';
      return `<div style="font-size:0.8em;font-weight:800;color:var(--gold);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--border);margin-bottom:12px;">${icon} ${title}</div><div class="stickers">${h}</div>`;
    }
    html += renderFwc2018Section(fwc2018Mundial, 'Mundial', '🏆');
    html += renderFwc2018Section(fwc2018Estadios, 'Estádios', '🏟️');
    html += renderFwc2018Section(fwc2018Cidades, 'Cidades', '🗺️');
  }

  if (currentAlbum === '2014' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    var fwc2014Intro = [
      { name: 'Arte Panini', id: 'fwc2014-Intro Arte Panini', num: 0 },
      { name: 'Troféu FIFA', id: 'fwc2014-Intro Troféu', num: 1 },
      { name: 'Logotipo', id: 'fwc2014-Intro Logotipo', num: 2 },
      { name: 'Mascote Fuleco', id: 'fwc2014-Intro Fuleco', num: 3 },
      { name: 'Bola Brazuca', id: 'fwc2014-Intro Brazuca', num: 4 },
      { name: 'Bandeiras', id: 'fwc2014-Intro Bandeiras', num: 5 },
      { name: 'Formação', id: 'fwc2014-Intro Formação', num: 6 },
      { name: 'Copa Confederações', id: 'fwc2014-Intro Confederações', num: 7 }
    ];
    var fwc2014Estadios = [
      { name: 'Arena de São Paulo', id: 'fwc2014-Est. São Paulo', num: 8 },
      { name: 'Maracanã', id: 'fwc2014-Est. Maracanã', num: 9 },
      { name: 'Estádio Nacional', id: 'fwc2014-Est. Brasília', num: 10 },
      { name: 'Arena Fonte Nova', id: 'fwc2014-Est. Salvador', num: 11 },
      { name: 'Mineirão', id: 'fwc2014-Est. Belo Horizonte', num: 12 },
      { name: 'Arena Pantanal', id: 'fwc2014-Est. Cuiabá', num: 13 },
      { name: 'Arena da Amazônia', id: 'fwc2014-Est. Manaus', num: 14 },
      { name: 'Arena Pernambuco', id: 'fwc2014-Est. Recife', num: 15 },
      { name: 'Beira-Rio', id: 'fwc2014-Est. Porto Alegre', num: 16 },
      { name: 'Arena Castelão', id: 'fwc2014-Est. Fortaleza', num: 17 },
      { name: 'Arena das Dunas', id: 'fwc2014-Est. Natal', num: 18 },
      { name: 'Arena de Curitiba', id: 'fwc2014-Est. Curitiba', num: 19 }
    ];
    var fwc2014Mapa = [
      { name: 'Mapa 1', id: 'fwc2014-Mapa 1', num: 20 },
      { name: 'Mapa 2', id: 'fwc2014-Mapa 2', num: 21 },
      { name: 'Mapa 3', id: 'fwc2014-Mapa 3', num: 22 },
      { name: 'Mapa 4', id: 'fwc2014-Mapa 4', num: 23 },
      { name: 'Mapa 5', id: 'fwc2014-Mapa 5', num: 24 },
      { name: 'Mapa 6', id: 'fwc2014-Mapa 6', num: 25 },
      { name: 'Mapa 7', id: 'fwc2014-Mapa 7', num: 26 },
      { name: 'Mapa 8', id: 'fwc2014-Mapa 8', num: 27 },
      { name: 'Mapa 9', id: 'fwc2014-Mapa 9', num: 28 },
      { name: 'Mapa 10', id: 'fwc2014-Mapa 10', num: 29 },
      { name: 'Mapa 11', id: 'fwc2014-Mapa 11', num: 30 },
      { name: 'Mapa 12', id: 'fwc2014-Mapa 12', num: 31 }
    ];
    function renderFwc2014Section(items, title, icon) {
      const matchAny = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || title.toLowerCase().includes(search) || items.some(s => s.name.toLowerCase().includes(search));
      const matchTabAny = currentTab === 'all' || items.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
      if (!matchAny || !matchTabAny) return '';
      let h = '';
      items.forEach(s => {
        const st = getState(s.id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const imgUrl = `https://www.laststicker.com/i/cards/1498/${s.num === 0 ? '00' : s.num}.jpg`;
        h += `<div class="sticker fwc ${st}" data-id="${s.id}" onclick="openModal('${s.id}','${s.name}','fwc','FWC',${s.num})">
          <img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">
          <div class="num">${String(s.num).padStart(2,'0')}</div>
          <div class="name">${s.name}</div>
        </div>`;
      });
      if (!h) return '';
      return `<div style="font-size:0.8em;font-weight:800;color:var(--gold);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--border);margin-bottom:12px;">${icon} ${title}</div><div class="stickers">${h}</div>`;
    }
    html += renderFwc2014Section(fwc2014Intro, 'Introdução', '🏆');
    html += renderFwc2014Section(fwc2014Estadios, 'Estádios', '🏟️');
    html += renderFwc2014Section(fwc2014Mapa, 'Mapa', '🗺️');
  }

  if (currentAlbum === '2002' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    var fwc2002Intro = [
      { name: 'Troféu', id: 'fwc2002-Intro Troféu', num: 1 },
      { name: 'Emblema', id: 'fwc2002-Intro Emblema', num: 2 },
      { name: 'Mascote', id: 'fwc2002-Intro Mascote', num: 3 },
      { name: 'Pôster', id: 'fwc2002-Intro Pôster', num: 4 }
    ];
    var fwc2002Estadios = [
      { name: 'Sapporo Dome', id: 'fwc2002-Est. Sapporo', num: 5 },
      { name: 'Kashima', id: 'fwc2002-Est. Kashima', num: 6 },
      { name: 'Tokyo', id: 'fwc2002-Est. Tokyo', num: 7 },
      { name: 'Sendai', id: 'fwc2002-Est. Sendai', num: 8 },
      { name: 'Niigata', id: 'fwc2002-Est. Niigata', num: 9 },
      { name: 'Ibaraki', id: 'fwc2002-Est. Ibaraki', num: 10 },
      { name: 'Oita', id: 'fwc2002-Est. Oita', num: 11 },
      { name: 'Kobe Wing', id: 'fwc2002-Est. Kobe', num: 12 },
      { name: 'Yokohama', id: 'fwc2002-Est. Yokohama', num: 13 },
      { name: 'Shizuoka', id: 'fwc2002-Est. Shizuoka', num: 14 },
      { name: 'Osaka', id: 'fwc2002-Est. Osaka', num: 15 },
      { name: 'Miyagi', id: 'fwc2002-Est. Miyagi', num: 16 },
      { name: 'Nagai', id: 'fwc2002-Est. Nagai', num: 17 },
      { name: 'Kawasaki Todoroki', id: 'fwc2002-Est. Kawasaki', num: 18 },
      { name: 'Korea Daegu', id: 'fwc2002-Est. Daegu', num: 19 },
      { name: 'Korea Ulsan', id: 'fwc2002-Est. Ulsan', num: 20 },
      { name: 'Korea Suwon', id: 'fwc2002-Est. Suwon', num: 21 },
      { name: 'Korea Busan', id: 'fwc2002-Est. Busan', num: 22 },
      { name: 'Korea Jeonju', id: 'fwc2002-Est. Jeonju', num: 23 },
      { name: 'Korea Gwangju', id: 'fwc2002-Est. Gwangju', num: 24 }
    ];
    function renderFwc2002Section(items, title, icon) {
      const matchAny = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || title.toLowerCase().includes(search) || items.some(s => s.name.toLowerCase().includes(search));
      const matchTabAny = currentTab === 'all' || items.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
      if (!matchAny || !matchTabAny) return '';
      let h = '';
      items.forEach(s => {
        const st = getState(s.id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const imgUrl = `https://www.laststicker.com/i/cards/10/${s.num === 0 ? '00' : s.num}.jpg`;
        h += `<div class="sticker fwc ${st}" data-id="${s.id}" onclick="openModal('${s.id}','${s.name}','fwc','FWC',${s.num})">
          <img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">
          <div class="num">${String(s.num).padStart(2,'0')}</div>
          <div class="name">${s.name}</div>
        </div>`;
      });
      if (!h) return '';
      return `<div style="font-size:0.8em;font-weight:800;color:var(--gold);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--border);margin-bottom:12px;">${icon} ${title}</div><div class="stickers">${h}</div>`;
    }
    html += renderFwc2002Section(fwc2002Intro, 'Introdução', '🏆');
    html += renderFwc2002Section(fwc2002Estadios, 'Estádios', '🏟️');
  }

  if (currentAlbum === '2010' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    var fwc2010Intro = [
      { name: 'My Game is Fair Play', id: 'fwc2010-Intro Fair Play', num: '00' },
      { name: 'FIFA World Cup Trophy', id: 'fwc2010-Intro Troféu', num: '1' },
      { name: 'Official Logo 1', id: 'fwc2010-Intro Logo1', num: '2' },
      { name: 'Official Logo 2', id: 'fwc2010-Intro Logo2', num: '3' },
      { name: 'Official Emblem', id: 'fwc2010-Intro Emblem', num: '4' },
      { name: 'Official Ball', id: 'fwc2010-Intro Ball', num: '5' }
    ];
    var fwc2010Estadios = [
      { name: 'Cape Town - Green Point 1', id: 'fwc2010-Est. Green Point 1', num: '6' },
      { name: 'Cape Town - Green Point 2', id: 'fwc2010-Est. Green Point 2', num: '7' },
      { name: 'Durban Stadium 1', id: 'fwc2010-Est. Durban 1', num: '8' },
      { name: 'Durban Stadium 2', id: 'fwc2010-Est. Durban 2', num: '9' },
      { name: 'Ellis Park 1', id: 'fwc2010-Est. Ellis Park 1', num: '10' },
      { name: 'Ellis Park 2', id: 'fwc2010-Est. Ellis Park 2', num: '11' },
      { name: 'Soccer City 1', id: 'fwc2010-Est. Soccer City 1', num: '12' },
      { name: 'Soccer City 2', id: 'fwc2010-Est. Soccer City 2', num: '13' },
      { name: 'Free State 1', id: 'fwc2010-Est. Free State 1', num: '14' },
      { name: 'Free State 2', id: 'fwc2010-Est. Free State 2', num: '15' },
      { name: 'Nelson Mandela Bay 1', id: 'fwc2010-Est. NMB 1', num: '16' },
      { name: 'Nelson Mandela Bay 2', id: 'fwc2010-Est. NMB 2', num: '17' },
      { name: 'Mbombela 1', id: 'fwc2010-Est. Mbombela 1', num: '18' },
      { name: 'Mbombela 2', id: 'fwc2010-Est. Mbombela 2', num: '19' },
      { name: 'Peter Mokaba 1', id: 'fwc2010-Est. Peter Mokaba 1', num: '20' },
      { name: 'Peter Mokaba 2', id: 'fwc2010-Est. Peter Mokaba 2', num: '21' },
      { name: 'Royal Bafokeng 1', id: 'fwc2010-Est. Royal Bafokeng 1', num: '22' },
      { name: 'Royal Bafokeng 2', id: 'fwc2010-Est. Royal Bafokeng 2', num: '23' },
      { name: 'Loftus Versfeld 1', id: 'fwc2010-Est. Loftus 1', num: '24' },
      { name: 'Loftus Versfeld 2', id: 'fwc2010-Est. Loftus 2', num: '25' }
    ];
    var fwc2010Extra = [
      { name: 'Official Slogan', id: 'fwc2010-Extra Slogan', num: '26' },
      { name: 'Official Poster 1', id: 'fwc2010-Extra Poster1', num: '27' },
      { name: 'Official Poster 2', id: 'fwc2010-Extra Poster2', num: '28' },
      { name: 'Official Mascot Zakumi', id: 'fwc2010-Extra Zakumi', num: '29' }
    ];
    function renderFwc2010Section(items, title, icon) {
      const matchAny = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || title.toLowerCase().includes(search) || items.some(s => s.name.toLowerCase().includes(search));
      const matchTabAny = currentTab === 'all' || items.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
      if (!matchAny || !matchTabAny) return '';
      let h = '';
      items.forEach(s => {
        const st = getState(s.id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const imgUrl = `https://www.laststicker.com/i/cards/125/${s.num}.jpg`;
        h += `<div class="sticker fwc ${st}" data-id="${s.id}" onclick="openModal('${s.id}','${s.name}','fwc','FWC',${parseInt(s.num)||0})">
          <img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">
          <div class="num">${s.num}</div>
          <div class="name">${s.name}</div>
        </div>`;
      });
      if (!h) return '';
      return `<div style="font-size:0.8em;font-weight:800;color:var(--gold);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--border);margin-bottom:12px;">${icon} ${title}</div><div class="stickers">${h}</div>`;
    }
    html += renderFwc2010Section(fwc2010Intro, 'Introdução', '🏆');
    html += renderFwc2010Section(fwc2010Estadios, 'Estádios', '🏟️');
    html += renderFwc2010Section(fwc2010Extra, 'Extras', '⭐');
  }

  if (currentAlbum === '2006' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    var fwc2006Intro = [
      { name: 'Official Match Ball Teamgeist', id: 'fwc2006-Intro Ball', num: 0 },
      { name: 'Trophy FIFA World Cup', id: 'fwc2006-Intro Trophy', num: 1 },
      { name: 'Official Emblem', id: 'fwc2006-Intro Emblem', num: 2 },
      { name: 'Official Mascot Goleo & Pille', id: 'fwc2006-Intro Mascot', num: 3 }
    ];
    var fwc2006Estadios = [
      { name: 'Olympiastadion Berlin', id: 'fwc2006-Est. Berlin', num: 4 },
      { name: 'Signal Iduna Park', id: 'fwc2006-Est. Dortmund', num: 5 },
      { name: 'Volksparkstadion', id: 'fwc2006-Est. Hamburg', num: 6 },
      { name: 'NRW Arena', id: 'fwc2006-Est. Gelsenkirchen', num: 7 },
      { name: 'AWD Arena', id: 'fwc2006-Est. Hannover', num: 8 },
      { name: 'RheinEnergieStadion', id: 'fwc2006-Est. Cologne', num: 9 },
      { name: 'Zentralstadion', id: 'fwc2006-Est. Leipzig', num: 10 },
      { name: 'Frankenstadion', id: 'fwc2006-Est. Nuremberg', num: 11 },
      { name: 'Gottlieb-Daimler-Stadion', id: 'fwc2006-Est. Stuttgart', num: 12 },
      { name: 'Waldstadion', id: 'fwc2006-Est. Frankfurt', num: 13 }
    ];
    var fwc2006Extra = [
      { name: 'FIFA Fair Play', id: 'fwc2006-Extra Fair Play', num: 14 },
      { name: 'Germany panorama', id: 'fwc2006-Extra Panorama', num: 15 },
      { name: 'Official poster', id: 'fwc2006-Extra Poster', num: 16 }
    ];
    function renderFwc2006Section(items, title, icon) {
      const matchAny = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || title.toLowerCase().includes(search) || items.some(s => s.name.toLowerCase().includes(search));
      const matchTabAny = currentTab === 'all' || items.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
      if (!matchAny || !matchTabAny) return '';
      let h = '';
      items.forEach(s => {
        const st = getState(s.id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const imgUrl = `https://www.laststicker.com/i/cards/3/${s.num === 0 ? '0' : s.num}.jpg`;
        h += `<div class="sticker fwc ${st}" data-id="${s.id}" onclick="openModal('${s.id}','${s.name}','fwc','FWC',${s.num})">
          <img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">
          <div class="num">${String(s.num).padStart(2,'0')}</div>
          <div class="name">${s.name}</div>
        </div>`;
      });
      if (!h) return '';
      return `<div style="font-size:0.8em;font-weight:800;color:var(--text);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">${icon} ${title}</div><div class="stickers">${h}</div>`;
    }
    html += renderFwc2006Section(fwc2006Intro, 'Introdução', '🏆');
    html += renderFwc2006Section(fwc2006Estadios, 'Estádios', '🏟️');
    html += renderFwc2006Section(fwc2006Extra, 'Extras', '⭐');
  }

  if (currentAlbum === '1998' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    var fwc1998Intro = [
      { name: 'World Cup', id: 'fwc1998-Special World Cup', num: 1 },
      { name: 'Official Emblem', id: 'fwc1998-Special Emblem', num: 2 },
      { name: 'Official Mascot Footix', id: 'fwc1998-Special Mascot', num: 3 }
    ];
    var fwc1998Estadios = [
      { name: 'Stade de France', id: 'fwc1998-Est. Stade de France', num: 4 },
      { name: 'Parc des Princes', id: 'fwc1998-Est. Parc des Princes', num: 5 },
      { name: 'Stade Félix Bollaert', id: 'fwc1998-Est. Bollaert', num: 6 },
      { name: 'Stade Gerland', id: 'fwc1998-Est. Gerland', num: 7 },
      { name: 'Stade Geoffroy Guichard', id: 'fwc1998-Est. Geoffroy', num: 8 },
      { name: 'Stade Vélodrome', id: 'fwc1998-Est. Vélodrome', num: 9 },
      { name: 'Stade de la Mosson', id: 'fwc1998-Est. Mosson', num: 10 },
      { name: 'Stade Municipal', id: 'fwc1998-Est. Municipal', num: 11 },
      { name: 'Stade Lescure', id: 'fwc1998-Est. Lescure', num: 12 },
      { name: 'Stade de la Beaujoire', id: 'fwc1998-Est. Beaujoire', num: 13 }
    ];
    function renderFwc1998Section(items, title, icon) {
      const matchAny = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || title.toLowerCase().includes(search) || items.some(s => s.name.toLowerCase().includes(search));
      const matchTabAny = currentTab === 'all' || items.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
      if (!matchAny || !matchTabAny) return '';
      let h = '';
      items.forEach(s => {
        const st = getState(s.id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const imgUrl = `https://www.laststicker.com/i/cards/9/${s.num}.jpg`;
        h += `<div class="sticker fwc ${st}" data-id="${s.id}" onclick="openModal('${s.id}','${s.name}','fwc','FWC',${s.num})">
          <img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">
          <div class="num">${String(s.num).padStart(2,'0')}</div>
          <div class="name">${s.name}</div>
        </div>`;
      });
      if (!h) return '';
      return `<div style="font-size:0.8em;font-weight:800;color:var(--text);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">${icon} ${title}</div><div class="stickers">${h}</div>`;
    }
    html += renderFwc1998Section(fwc1998Intro, 'Introdução', '🏆');
    html += renderFwc1998Section(fwc1998Estadios, 'Estádios', '🏟️');
  }

  if (currentAlbum === '1994' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    var fwc1994Cidades = [
      { name: 'San Francisco', id: 'fwc1994-Cid. San Francisco', num: 1 },
      { name: 'Boston', id: 'fwc1994-Cid. Boston', num: 2 },
      { name: 'Orlando', id: 'fwc1994-Cid. Orlando', num: 3 },
      { name: 'Dallas', id: 'fwc1994-Cid. Dallas', num: 4 },
      { name: 'Detroit', id: 'fwc1994-Cid. Detroit', num: 5 },
      { name: 'Chicago', id: 'fwc1994-Cid. Chicago', num: 6 }
    ];
    var fwc1994Estadios = [
      { name: 'Soldier Field', id: 'fwc1994-Est. Soldier Field', num: 7 },
      { name: 'Pontiac Silverdome', id: 'fwc1994-Est. Pontiac Silverdome', num: 8 },
      { name: 'Giants Stadium', id: 'fwc1994-Est. Giants Stadium', num: 9 },
      { name: 'Foxboro Stadium', id: 'fwc1994-Est. Foxboro Stadium', num: 10 },
      { name: 'Cotton Bowl', id: 'fwc1994-Est. Cotton Bowl', num: 11 },
      { name: 'Citrus Bowl', id: 'fwc1994-Est. Citrus Bowl', num: 12 },
      { name: 'RFK Memorial Stadium', id: 'fwc1994-Est. RFK Memorial Stadium', num: 13 },
      { name: 'Stanford Stadium', id: 'fwc1994-Est. Stanford Stadium', num: 14 },
      { name: 'Rose Bowl', id: 'fwc1994-Est. Rose Bowl', num: 15 }
    ];
    function renderFwc1994Section(items, title, icon) {
      const matchAny = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || title.toLowerCase().includes(search) || items.some(s => s.name.toLowerCase().includes(search));
      const matchTabAny = currentTab === 'all' || items.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
      if (!matchAny || !matchTabAny) return '';
      let h = '';
      items.forEach(s => {
        const st = getState(s.id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const imgUrl = `https://www.laststicker.com/i/cards/8/${s.num}.jpg`;
        h += `<div class="sticker fwc ${st}" data-id="${s.id}" style="aspect-ratio:4/3;" onclick="openModal('${s.id}','${s.name}','fwc','FWC',${s.num})">
          <img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">
          <div class="num">${String(s.num).padStart(2,'0')}</div>
          <div class="name">${s.name}</div>
        </div>`;
      });
      if (!h) return '';
      return `<div style="font-size:0.8em;font-weight:800;color:var(--text);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">${icon} ${title}</div><div class="stickers">${h}</div>`;
    }
    html += renderFwc1994Section(fwc1994Cidades, 'Cidades', '🏙️');
    html += renderFwc1994Section(fwc1994Estadios, 'Estádios', '🏟️');
  }
  if (currentAlbum === '1990' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    fwc1990Intro = [
      { name: 'FIFA World Cup "Italia 90" emblem', id: 'fwc1990-Intro-1', num: 1 },
      { name: 'FIFA World Cup Trophy', id: 'fwc1990-Intro-2', num: 2 },
      { name: 'FIFA World Cup "Italia 90" poster', id: 'fwc1990-Intro-3', num: 3 },
      { name: 'FIFA World Cup "Italia 90" talisman', id: 'fwc1990-Intro-4', num: 4 }
    ];
    fwc1990Ciao = [
      { name: 'Playing talisman 1', id: 'fwc1990-Ciao-5', num: 5 },
      { name: 'Playing talisman 2', id: 'fwc1990-Ciao-6', num: 6 },
      { name: 'Playing talisman 3', id: 'fwc1990-Ciao-7', num: 7 },
      { name: 'Playing talisman 4', id: 'fwc1990-Ciao-8', num: 8 },
      { name: 'Playing talisman 5', id: 'fwc1990-Ciao-15', num: 15 },
      { name: 'Playing talisman 6', id: 'fwc1990-Ciao-26', num: 26 },
      { name: 'Playing talisman 7', id: 'fwc1990-Ciao-27', num: 27 },
      { name: 'Playing talisman 8', id: 'fwc1990-Ciao-34', num: 34 },
      { name: 'Playing talisman 9', id: 'fwc1990-Ciao-35', num: 35 }
    ];
    fwc1990Estadios = [
      { name: 'Roma - Stadio Olimpico', id: 'fwc1990-Stad-9', num: 9 },
      { name: 'Firenze - Stadio Comunale', id: 'fwc1990-Stad-11', num: 11 },
      { name: 'Napoli - Stadio San Paolo', id: 'fwc1990-Stad-13', num: 13 },
      { name: 'Bari - Stadio Nuovo Comunale', id: 'fwc1990-Stad-16', num: 16 },
      { name: 'Torino - Stadio Comunale', id: 'fwc1990-Stad-18', num: 18 },
      { name: 'Milano - Stadio Giuseppe Meazza', id: 'fwc1990-Stad-20', num: 20 },
      { name: 'Genova - Stadio Luigi Ferraris', id: 'fwc1990-Stad-22', num: 22 },
      { name: "Bologna - Stadio Renato Dall'Ara", id: 'fwc1990-Stad-24', num: 24 },
      { name: 'Verona - Stadio Bentegodi', id: 'fwc1990-Stad-28', num: 28 },
      { name: 'Udine - Stadio Friuli', id: 'fwc1990-Stad-31', num: 31 },
      { name: "Cagliari - Stadio Sant'Elia", id: 'fwc1990-Stad-33', num: 33 },
      { name: 'Palermo - Stadio Della Favorita', id: 'fwc1990-Stad-37', num: 37 }
    ];
    fwc1990Cidades = [
      { name: 'Panorama of Roma', id: 'fwc1990-Cid-10', num: 10 },
      { name: 'Panorama of Firenze', id: 'fwc1990-Cid-12', num: 12 },
      { name: 'Panorama of Napoli', id: 'fwc1990-Cid-14', num: 14 },
      { name: 'Panorama of Bari', id: 'fwc1990-Cid-17', num: 17 },
      { name: 'Panorama of Torino', id: 'fwc1990-Cid-19', num: 19 },
      { name: 'Panorama of Milano', id: 'fwc1990-Cid-21', num: 21 },
      { name: 'Panorama of Genova', id: 'fwc1990-Cid-23', num: 23 },
      { name: 'Panorama of Bologna', id: 'fwc1990-Cid-25', num: 25 },
      { name: 'Panorama of Verona', id: 'fwc1990-Cid-29', num: 29 },
      { name: 'Panorama of Udine', id: 'fwc1990-Cid-30', num: 30 },
      { name: 'Panorama of Cagliari', id: 'fwc1990-Cid-32', num: 32 },
      { name: 'Panorama of Palermo', id: 'fwc1990-Cid-36', num: 36 }
    ];
    function renderFwc1990Section(items, title, icon) {
      const matchAny = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || title.toLowerCase().includes(search) || items.some(s => s.name.toLowerCase().includes(search));
      const matchTabAny = currentTab === 'all' || items.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
      if (!matchAny || !matchTabAny) return '';
      let h = '';
      items.forEach(s => {
        const st = getState(s.id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const imgUrl = `https://www.laststicker.com/i/cards/7/${s.num}.jpg`;
        h += `<div class="sticker fwc ${st}" data-id="${s.id}" style="aspect-ratio:4/3;" onclick="openModal('${s.id}','${s.name.replace(/"/g,'').replace(/'/g,"\\'")}','fwc','FWC',${s.num})">
          <img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">
          <div class="num">${String(s.num).padStart(2,'0')}</div>
          <div class="name">${s.name}</div>
        </div>`;
      });
      if (!h) return '';
      return `<div style="font-size:0.8em;font-weight:800;color:var(--text);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">${icon} ${title}</div><div class="stickers">${h}</div>`;
    }
    html += renderFwc1990Section(fwc1990Intro, 'Introdução', '🏆');
    html += renderFwc1990Section(fwc1990Ciao, 'Ciao', '🎭');
    html += renderFwc1990Section(fwc1990Estadios, 'Estádios', '🏟️');
    html += renderFwc1990Section(fwc1990Cidades, 'Cidades', '🏙️');
  }

  function renderFwc1986Section(items, title, icon) {
    const matchAny = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || title.toLowerCase().includes(search) || items.some(s => s.name.toLowerCase().includes(search));
    const matchTabAny = currentTab === 'all' || items.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
    if (!matchAny || !matchTabAny) return '';
    let h = '';
    items.forEach(s => {
      const st = getState(s.id);
      const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
      if (!matchTab) return;
      const imgUrl = `https://www.laststicker.com/i/cards/168/${s.num}.jpg`;
      h += `<div class="sticker fwc ${st}" data-id="${s.id}" style="aspect-ratio:4/3;" onclick="openModal('${s.id}','${s.name.replace(/"/g,'').replace(/'/g,"\\'")}','fwc','FWC',${s.num})">
        <img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">
        <div class="num">${String(s.num).padStart(2,'0')}</div>
        <div class="name">${s.name}</div>
      </div>`;
    });
    if (!h) return '';
    return `<div style="font-size:0.8em;font-weight:800;color:var(--text);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">${icon} ${title}</div><div class="stickers">${h}</div>`;
  }
  function renderFwcGenericSection(items, title, icon, imgFn) {
    const matchAny = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || title.toLowerCase().includes(search) || items.some(s => s.name.toLowerCase().includes(search));
    const matchTabAny = currentTab === 'all' || items.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
    if (!matchAny || !matchTabAny) return '';
    let h = '';
    items.forEach(s => {
      const st = getState(s.id);
      const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
      if (!matchTab) return;
      const imgUrl = imgFn(s.num);
      h += `<div class="sticker fwc ${st}" data-id="${s.id}" style="aspect-ratio:4/3;" onclick="openModal('${s.id}','${s.name.replace(/"/g,'').replace(/'/g,"\\'")}','fwc','FWC',${s.num})">
        <img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">
        <div class="num">${String(s.num).padStart(2,'0')}</div>
        <div class="name">${s.name}</div>
      </div>`;
    });
    if (!h) return '';
    return `<div style="font-size:0.8em;font-weight:800;color:var(--text);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">${icon} ${title}</div><div class="stickers">${h}</div>`;
  }
  function renderFwc1982Section(items, title, icon) {
    const matchAny = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || title.toLowerCase().includes(search) || items.some(s => s.name.toLowerCase().includes(search));
    const matchTabAny = currentTab === 'all' || items.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
    if (!matchAny || !matchTabAny) return '';
    let h = '';
    items.forEach(s => {
      const st = getState(s.id);
      const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
      if (!matchTab) return;
      const imgUrl = `https://www.laststicker.com/i/cards/139/${s.num}.jpg`;
      h += `<div class="sticker fwc ${st}" data-id="${s.id}" style="aspect-ratio:4/3;" onclick="openModal('${s.id}','${s.name.replace(/"/g,'').replace(/'/g,"\\'")}','fwc','FWC',${s.num})">
        <img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">
        <div class="num">${String(s.num).padStart(2,'0')}</div>
        <div class="name">${s.name}</div>
      </div>`;
    });
    if (!h) return '';
    return `<div style="font-size:0.8em;font-weight:800;color:var(--text);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">${icon} ${title}</div><div class="stickers">${h}</div>`;
  }

  if (currentAlbum === '1986' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    html += renderFwc1986Section(fwc1986Special, 'Especiais', '🏆');
    html += renderFwc1986Section(fwc1986History, 'História', '📜');
    html += renderFwc1986Section(fwc1986Stadiums, 'Estádios', '🏟️');
  }
  if (currentAlbum === '1982' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    const fwc1982All = [...fwc1982Special, ...fwc1982Posters, ...fwc1982Stadiums].sort((a, b) => a.num - b.num);
    html += renderFwc1982Section(fwc1982All, 'FWC 1982', '🏆');
  }
  if (currentAlbum === '1978' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    const fwc1978img = (num) => `https://www.laststicker.com/i/cards/375/${num}.jpg`;
    html += renderFwcGenericSection(fwc1978History, 'História', '📜', fwc1978img, '1978');
    html += renderFwcGenericSection(fwc1978Stadiums, 'Estádios', '🏟️', fwc1978img, '1978');
  }
  if (currentAlbum === '1974' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    const fwc1974img = (num) => `https://www.laststicker.com/i/cards/374/${num}.jpg`;
    html += renderFwcGenericSection(fwc1974Special, 'Especiais', '🏆', fwc1974img);
    html += renderFwcGenericSection(fwc1974Intro, 'Introdução', '📜', fwc1974img);
    html += renderFwcGenericSection(fwc1974Mascots, 'Mascotes e Cidade', '🏙️', fwc1974img);
    html += renderFwcGenericSection(fwc1974Stadiums, 'Estádios', '🏟️', fwc1974img);
  }
  if (currentAlbum === '1970' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    const fwc1970img = (num) => `https://www.laststicker.com/i/cards/219/${num}.jpg`;
    html += renderFwcGenericSection(fwc1970Special, 'Mexico 70', '🏆', fwc1970img);
    html += renderFwcGenericSection(fwc1970Posters, 'Copas do Mundo', '🌍', fwc1970img);
    html += renderFwcGenericSection(fwc1970Stadiums, 'Estádio', '🏟️', fwc1970img);
  }

  if (currentAlbum === 'cwc2025' || currentAlbum === 'liga2025') {
    const cwcAlbumId = currentAlbum === 'cwc2025' ? '11090' : '';
    const cwcTeams = {};
    const cwcTeamCountry = {};
    const cwcTeamGroup = {};
    const cwcTeamOrder = [];
    allPlayers.forEach(p => {
      const key = p.group;
      if (!cwcTeams[key]) { cwcTeams[key] = []; cwcTeamOrder.push(key); }
      cwcTeams[key].push(p);
      if (p.country) cwcTeamCountry[key] = p.country;
      if (p.cwcGroup) cwcTeamGroup[key] = p.cwcGroup;
    });

    if (currentAlbum === 'cwc2025') {
      if (currentGroup === 'all' || currentGroup === 'Intro') {
        const introPlayers = cwcTeams['Intro'] || [];
        if (introPlayers.length > 0) {
          let introOwned = 0;
          let introHTML = '';
          introPlayers.forEach(p => {
            const st = getState(p.id);
            if (st === 'owned') introOwned++;
            const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
            const matchSearch = !search || p.name.toLowerCase().includes(search);
            if (!matchSearch || !matchTab) return;
            const displayNum = String(p.num).padStart(3, '0');
            const imgUrl = cwcAlbumId ? `https://www.laststicker.com/i/cards/${cwcAlbumId}/${p.num}.jpg` : '';
            introHTML += `<div class="sticker cwc-horiz ${st}" data-id="${p.id}" onclick="openModal('${p.id}','${p.name.replace(/'/g,"\\'")}','${p.pos}','Intro',${p.num})">
              ${imgUrl ? `<img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">` : ''}
              <div class="num">${displayNum}</div>
              <div class="name">${p.name}</div>
            </div>`;
          });
          if (introHTML) {
            html += `<div style="display:flex;align-items:center;gap:10px;padding:16px 0 8px;margin-bottom:4px;border-bottom:2px solid var(--gold);">
              <div style="width:36px;height:36px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:0.8em;color:#000;">★</div>
              <div style="flex:1;">
                <div style="font-size:0.9em;font-weight:800;color:var(--gold);text-transform:uppercase;">Intro</div>
                <div style="font-size:0.7em;color:var(--muted);">${introOwned}/${introPlayers.length} cromos</div>
              </div>
            </div>`;
            html += `<div class="stickers">${introHTML}</div>`;
          }
        }
      }
      const groupLetters = ['A','B','C','D','E','F','G','H'];
      groupLetters.forEach(grp => {
        if (currentGroup !== 'all' && currentGroup !== 'Grupo ' + grp) return;
        const teamsInGroup = cwcTeamOrder.filter(t => cwcTeamGroup[t] === grp);
        if (teamsInGroup.length === 0) return;
        let groupOwned = 0, groupTotal = 0, groupWanted = 0;
        teamsInGroup.forEach(t => { groupTotal += cwcTeams[t].length; cwcTeams[t].forEach(p => { const st = getState(p.id); if (st === 'owned') groupOwned++; if (st === 'wanted') groupWanted++; }); });
        if (currentTab === 'wanted' && groupWanted === 0) return;
        html += `<div style="display:flex;align-items:center;gap:10px;padding:16px 0 8px;margin-bottom:4px;border-bottom:2px solid var(--gold);">
          <div style="width:36px;height:36px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1em;color:#000;">${grp}</div>
          <div style="flex:1;">
            <div style="font-size:0.9em;font-weight:800;color:var(--gold);text-transform:uppercase;">Grupo ${grp}</div>
            <div style="font-size:0.7em;color:var(--muted);">${currentTab === 'wanted' ? groupWanted + ' para troca' : groupOwned + '/' + groupTotal + ' cromos'}</div>
          </div>
        </div>`;
        teamsInGroup.forEach(teamName => {
          const players = cwcTeams[teamName].sort((a,b) => a.num - b.num);
          const cc = cwcTeamCountry[teamName] || '';
          const flagIso = cc === 'gb-eng' ? 'gb' : cc;
          const flagImg = flagIso ? `<img src="https://flagcdn.com/32x24/${flagIso}.png" style="width:24px;height:18px;vertical-align:middle;border-radius:2px;margin-right:6px;">` : '';
          let teamOwned = 0;
          let teamHTML = '';
          players.forEach(p => {
            const st = getState(p.id);
            if (st === 'owned') teamOwned++;
            const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
            const matchSearch = !search || teamName.toLowerCase().includes(search) || p.name.toLowerCase().includes(search);
            if (!matchSearch || !matchTab) return;
            const displayNum = String(p.num).padStart(3, '0');
            const posLabel = p.pos === 'badge' ? 'EMB' : (p.pos === 'fwc' ? 'SPC' : '');
            const imgUrl = cwcAlbumId ? `https://www.laststicker.com/i/cards/${cwcAlbumId}/${p.num}.jpg` : '';
            teamHTML += `<div class="sticker ${st}" data-id="${p.id}" onclick="openModal('${p.id}','${p.name.replace(/'/g,"\\'")}','${p.pos}','${teamName.replace(/'/g,"\\'")}',${p.num})">
              ${imgUrl ? `<img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">` : ''}
              <div class="num">${displayNum}</div>
              ${posLabel ? `<div class="pos">${posLabel}</div>` : ''}
              <div class="name">${p.name}</div>
            </div>`;
          });
          if (teamHTML) {
            html += `<div style="display:flex;align-items:center;gap:6px;padding:8px 0 4px;">
              ${flagImg}
              <div style="flex:1;">
                <div style="font-size:0.8em;font-weight:700;color:var(--text);">${teamName}</div>
                <div style="font-size:0.65em;color:var(--muted);">${teamOwned}/${players.length}</div>
              </div>
            </div>`;
            html += `<div class="stickers">${teamHTML}</div>`;
          }
        });
      });
    } else {
      cwcTeamOrder.forEach(teamName => {
        if (currentGroup !== 'all' && currentGroup !== teamName) return;
        const players = cwcTeams[teamName].sort((a,b) => a.num - b.num);
        const cc = cwcTeamCountry[teamName] || '';
        const flagIso = cc === 'gb-eng' ? 'gb' : cc;
        const flagImg = flagIso ? `<img src="https://flagcdn.com/32x24/${flagIso}.png" style="width:24px;height:18px;vertical-align:middle;border-radius:2px;margin-right:6px;">` : '';
        let teamOwned = 0;
        let teamHTML = '';
        players.forEach(p => {
          const st = getState(p.id);
          if (st === 'owned') teamOwned++;
          const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
          const matchSearch = !search || teamName.toLowerCase().includes(search) || p.name.toLowerCase().includes(search);
          if (!matchSearch || !matchTab) return;
          const displayNum = String(p.num).padStart(3, '0');
          const posLabel = p.pos === 'badge' ? 'EMB' : (p.pos === 'fwc' ? 'SPC' : '');
          teamHTML += `<div class="sticker ${st}" data-id="${p.id}" onclick="openModal('${p.id}','${p.name.replace(/'/g,"\\'")}','${p.pos}','${teamName.replace(/'/g,"\\'")}',${p.num})">
            <div class="num">${displayNum}</div>
            ${posLabel ? `<div class="pos">${posLabel}</div>` : ''}
            <div class="name">${p.name}</div>
          </div>`;
        });
        const matchTeamSearch = !search || teamName.toLowerCase().includes(search) || players.some(p => p.name.toLowerCase().includes(search));
        if (matchTeamSearch && teamHTML) {
          html += `<div style="display:flex;align-items:center;gap:6px;padding:10px 0 8px;border-bottom:1px solid var(--border);margin-bottom:8px;">
            ${flagImg}
            <div style="flex:1;">
              <div style="font-size:0.85em;font-weight:800;color:var(--gold);text-transform:uppercase;letter-spacing:0.5px;">${teamName}</div>
              <div style="font-size:0.7em;color:var(--muted);">${teamOwned}/${players.length} cromos</div>
            </div>
          </div>`;
          html += `<div class="stickers">${teamHTML}</div>`;
        }
      });
    }
    main.innerHTML = html;
    return;
  }

  for (const gName of groups) {
    let groupHTML = '';
    const gData = activeTeams[gName];
    const sortedTeams = [...gData.teams].sort((a,b) => {
      const ia = activeTeamOrder.indexOf(a.name);
      const ib = activeTeamOrder.indexOf(b.name);
      const fa = ia === -1 ? gData.teams.indexOf(a) : ia;
      const fb = ib === -1 ? gData.teams.indexOf(b) : ib;
      return fa - fb;
    });
    for (const team of sortedTeams) {
      let playersHTML = '';
      let playersOnlyHTML = '';
      let badgeHTML = '';
      let photoHTML = '';
      let count = 0;
      const totalStickers = (currentAlbum === '2026') ? 20 : (currentAlbum === '1974' && teamHasNoTeamPage1974 && teamHasNoTeamPage1974[team.name]) ? 5 : (currentAlbum === '1994' && teamHasNoTeamPage1994 && teamHasNoTeamPage1994[team.name] ? (['Bolivia','Nigeria','Saudi Arabia'].includes(team.name) ? 10 : 17) : (currentAlbum === '1998' && teamHasNoTeamPage1998 && teamHasNoTeamPage1998[team.name] ? (['USA','Iran','Saudi Arabia','Jamaica'].includes(team.name) ? 9 : 17) : (currentAlbum === '1982' && teamHasNoTeamPage1982 && teamHasNoTeamPage1982[team.name] ? 10 : team.players.length + (currentAlbum === '1970' ? 3 : 2))));
      const is2022 = currentAlbum === '2022';
      const idBadge = `${gName}-${team.name}-badge`;
      const stateBadge = getState(idBadge);
      const idPhoto = `${gName}-${team.name}-photo`;
      const statePhoto = getState(idPhoto);
      const matchTeam = !search || team.name.toLowerCase().includes(search);
      const matchTabBadge = currentTab === 'all' || (currentTab === 'owned' && stateBadge === 'owned') || (currentTab === 'missing' && (stateBadge === 'missing' || stateBadge === 'wanted')) || (currentTab === 'wanted' && stateBadge === 'wanted');
      const matchTabPhoto = currentTab === 'all' || (currentTab === 'owned' && statePhoto === 'owned') || (currentTab === 'missing' && (statePhoto === 'missing' || statePhoto === 'wanted')) || (currentTab === 'wanted' && statePhoto === 'wanted');

      if (currentAlbum === '2026') {
        if (matchTeam && matchTabBadge) {
          count++;
          const badgeUrl = getStickerImageUrl(team.name, 1);
          playersHTML += `<div class="sticker badge ${stateBadge}" data-id="${idBadge}" onclick="openModal('${idBadge}','Emblema','EMB','${team.name.replace(/'/g,"\\'")}',1)">
            <img class="sticker-bg" loading="lazy" src="${badgeUrl}" data-team="${team.name}" data-num="1" onerror="handleBadgeError(this)">
            <div class="num">${String(1).padStart(2,'0')}</div>
            <div class="pos">EMB</div>
            <div class="name">${getFlagImg(team.name, 32)}</div>
          </div>`;
        }
        team.players.forEach((p, i) => {
          if (i > 10) return;
          const stickerNum = i + 2;
          const pos = i < 3 ? 'GR' : i < 9 ? 'ZAG' : i < 14 ? 'MD' : 'AT';
          const id = `${gName}-${team.name}-${i}`;
          let state = getState(id);
          let displayName = p;
          let displayNum = stickerNum;
          let displayUrl = getStickerImageUrl(team.name, i + 2);
          let updateBadge = '';
          let isUpdate = false;
          let updOnlyState = '';
          let updMatch = null;
          if (currentAlbum === '2026') {
            const updNum = updateLookup.get(team.name + '|' + stickerNum);
            if (updNum != null) {
              updMatch = updateByNum.get(updNum);
              const updSt = getState('update-' + updNum);
              updOnlyState = updSt || '';
              if (updSt === 'owned' && state !== 'wanted') {
                displayName = updMatch.name;
                displayNum = stickerNum;
                displayUrl = getUpdateImageUrl(team.name, updMatch.replacedNum) || getStickerImageUrl(team.name, updMatch.replacedNum);
                updateBadge = '<div style="position:absolute;top:2px;right:2px;background:#4caf50;color:#fff;font-size:0.5em;font-weight:900;padding:1px 4px;border-radius:4px;z-index:2;">UPD</div>';
                isUpdate = true;
              } else if (updSt === 'wanted' && state !== 'wanted') {
                displayName = updMatch.name;
                displayNum = stickerNum;
                displayUrl = getUpdateImageUrl(team.name, updMatch.replacedNum) || getStickerImageUrl(team.name, updMatch.replacedNum);
                updateBadge = '<div style="position:absolute;top:2px;right:2px;background:#4caf50;color:#fff;font-size:0.5em;font-weight:900;padding:1px 4px;border-radius:4px;z-index:2;">UPD</div>';
                isUpdate = true;
              }
            }
          }
          const updName = (updMatch && updMatch.name) ? updMatch.name.toLowerCase() : '';
          const updOldName = (updMatch && updMatch.replacedName) ? updMatch.replacedName.toLowerCase() : '';
          const matchSearch = !search || p.toLowerCase().includes(search) || team.name.toLowerCase().includes(search) || updName.includes(search) || updOldName.includes(search);
          if (updMatch && search) {
            if (updName.includes(search)) {
              displayName = updMatch.name;
              displayUrl = getUpdateImageUrl(team.name, updMatch.replacedNum) || getStickerImageUrl(team.name, updMatch.replacedNum);
              updateBadge = '<div style="position:absolute;top:2px;right:2px;background:#4caf50;color:#fff;font-size:0.5em;font-weight:900;padding:1px 4px;border-radius:4px;z-index:2;">UPD</div>';
              isUpdate = true;
            } else {
              displayName = p;
              displayUrl = getStickerImageUrl(team.name, i + 2);
              updateBadge = '';
              isUpdate = false;
            }
          }
          let effectiveState = state;
          if (currentAlbum === '2026' && updOnlyState) {
            if (state === 'wanted' || updOnlyState === 'wanted') effectiveState = 'wanted';
            else if (state === 'owned' || updOnlyState === 'owned') effectiveState = 'owned';
            else effectiveState = updOnlyState;
          }
          const matchTab = currentTab === 'all' || (currentTab === 'owned' && effectiveState === 'owned') || (currentTab === 'missing' && (effectiveState === 'missing' || effectiveState === 'wanted')) || (currentTab === 'wanted' && effectiveState === 'wanted');
          if (!matchSearch || !matchTab) return;
          count++;
          const escapedId = id.replace(/'/g,"\\'");
          const escapedP = p.replace(/'/g,"\\'");
          const escapedTeam = team.name.replace(/'/g,"\\'");
            playersHTML += `<div class="sticker ${effectiveState} ${isUpdate ? 'is-update' : ''}" data-id="${id}" style="aspect-ratio:3/4;position:relative;" onclick="openModal('${escapedId}','${escapedP}','${pos}','${escapedTeam}',${stickerNum})">
              ${updateBadge}
              <img class="sticker-bg" loading="lazy" src="${displayUrl}" data-team="${team.name}" data-player="${displayName}" data-num="${displayNum}" data-pn="${displayName}" onerror="handleStickerError(this)">
              <div class="num">${String(displayNum).padStart(2,'0')}</div>
              <div class="pos">${pos}</div>
              <div class="name">${displayName}</div>
            </div>`;
          });
        if (matchTeam && matchTabPhoto) {
          count++;
          const photoUrl = getStickerImageUrl(team.name, 13);
          playersHTML += `<div class="sticker photo ${statePhoto}" data-id="${idPhoto}" style="aspect-ratio:4/3;" onclick="openModal('${idPhoto}','Foto de Equipa','photo','${team.name.replace(/'/g,"\\'")}',13)">
            <img class="sticker-bg" loading="lazy" src="${photoUrl}" data-team="${team.name}" data-num="13" onerror="handlePhotoError(this)">
            <div class="num">${String(13).padStart(2,'0')}</div>
            <div class="pos">EQP</div>
            <div class="name">${getFlagImg(team.name, 32)}</div>
          </div>`;
        }
        team.players.forEach((p, i) => {
          if (i <= 10) return;
          const stickerNum = i + 3;
          const pos = i < 3 ? 'GR' : i < 9 ? 'ZAG' : i < 14 ? 'MD' : 'AT';
          const id = `${gName}-${team.name}-${i}`;
          let state = getState(id);
          let displayName = p;
          let displayNum = stickerNum;
          let displayUrl = getStickerImageUrl(team.name, i + 3);
          let updateBadge = '';
          let isUpdate = false;
          let updOnlyState2 = '';
          let updMatch2 = null;
          if (currentAlbum === '2026') {
            const updNum2 = updateLookup.get(team.name + '|' + stickerNum);
            if (updNum2 != null) {
              updMatch2 = updateByNum.get(updNum2);
              const updSt = getState('update-' + updNum2);
              updOnlyState2 = updSt || '';
              if (updSt === 'owned' && state !== 'wanted') {
                displayName = updMatch2.name;
                displayNum = stickerNum;
                displayUrl = getUpdateImageUrl(team.name, updMatch2.replacedNum) || getStickerImageUrl(team.name, updMatch2.replacedNum);
                updateBadge = '<div style="position:absolute;top:2px;right:2px;background:#4caf50;color:#fff;font-size:0.5em;font-weight:900;padding:1px 4px;border-radius:4px;z-index:2;">UPD</div>';
                isUpdate = true;
              } else if (updSt === 'wanted' && state !== 'wanted') {
                displayName = updMatch2.name;
                displayNum = stickerNum;
                displayUrl = getUpdateImageUrl(team.name, updMatch2.replacedNum) || getStickerImageUrl(team.name, updMatch2.replacedNum);
                updateBadge = '<div style="position:absolute;top:2px;right:2px;background:#4caf50;color:#fff;font-size:0.5em;font-weight:900;padding:1px 4px;border-radius:4px;z-index:2;">UPD</div>';
                isUpdate = true;
              }
            }
          }
          const updName2 = (updMatch2 && updMatch2.name) ? updMatch2.name.toLowerCase() : '';
          const updOldName2 = (updMatch2 && updMatch2.replacedName) ? updMatch2.replacedName.toLowerCase() : '';
          const matchSearch = !search || p.toLowerCase().includes(search) || team.name.toLowerCase().includes(search) || updName2.includes(search) || updOldName2.includes(search);
          if (updMatch2 && search) {
            if (updName2.includes(search)) {
              displayName = updMatch2.name;
              displayUrl = getUpdateImageUrl(team.name, updMatch2.replacedNum) || getStickerImageUrl(team.name, updMatch2.replacedNum);
              updateBadge = '<div style="position:absolute;top:2px;right:2px;background:#4caf50;color:#fff;font-size:0.5em;font-weight:900;padding:1px 4px;border-radius:4px;z-index:2;">UPD</div>';
              isUpdate = true;
            } else {
              displayName = p;
              displayUrl = getStickerImageUrl(team.name, i + 3);
              updateBadge = '';
              isUpdate = false;
            }
          }
          let effectiveState2 = state;
          if (currentAlbum === '2026' && updOnlyState2) {
            if (state === 'wanted' || updOnlyState2 === 'wanted') effectiveState2 = 'wanted';
            else if (state === 'owned' || updOnlyState2 === 'owned') effectiveState2 = 'owned';
            else effectiveState2 = updOnlyState2;
          }
          const matchTab = currentTab === 'all' || (currentTab === 'owned' && effectiveState2 === 'owned') || (currentTab === 'missing' && (effectiveState2 === 'missing' || effectiveState2 === 'wanted')) || (currentTab === 'wanted' && effectiveState2 === 'wanted');
          if (!matchSearch || !matchTab) return;
          count++;
          playersHTML += `<div class="sticker ${effectiveState2} ${isUpdate ? 'is-update' : ''}" data-id="${id}" style="aspect-ratio:3/4;position:relative;" onclick="openModal('${id}','${p.replace(/'/g,"\\'")}','${pos}','${team.name.replace(/'/g,"\\'")}',${stickerNum})">
            ${updateBadge}
            <img class="sticker-bg" loading="lazy" src="${displayUrl}" data-team="${team.name}" data-player="${displayName}" data-num="${displayNum}" data-pn="${displayName}" onerror="handleStickerError(this)">
            <div class="num">${String(displayNum).padStart(2,'0')}</div>
            <div class="pos">${pos}</div>
            <div class="name">${displayName}</div>
          </div>`;
        });
        const teamUpdAdditions = updateStickers.filter(u => u.team === team.name && !u.replacedNum);
        teamUpdAdditions.forEach(u => {
          const uId = `update-${u.num}`;
          const uState = getState(uId);
          const uMatchTab = currentTab === 'all' || (currentTab === 'owned' && uState === 'owned') || (currentTab === 'missing' && (uState === 'missing' || uState === 'wanted')) || (currentTab === 'wanted' && uState === 'wanted');
          const uMatchSearch = !search || u.name.toLowerCase().includes(search) || team.name.toLowerCase().includes(search);
          if (!uMatchSearch || !uMatchTab) return;
          count++;
          const uImgUrl = getUpdateImageUrl(team.name, u.replacedNum) || getStickerImageUrl(team.name, u.replacedNum) || '';
          playersHTML += `<div class="sticker ${uState} is-update" data-id="${uId}" style="aspect-ratio:3/4;position:relative;" onclick="openModal('${uId}','${u.name.replace(/'/g,"\\'")}','${u.pos}','${team.name.replace(/'/g,"\\'")}',0)">
            <div style="position:absolute;top:2px;right:2px;background:#4caf50;color:#fff;font-size:0.5em;font-weight:900;padding:1px 4px;border-radius:4px;z-index:2;">UPD</div>
            <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#8B1A4A,#1a1a2e);padding:8px;">
              <div style="margin-bottom:4px;">${getFlagImg(team.name, 40)}</div>
              <div style="font-size:0.65em;font-weight:900;color:#fff;text-align:center;word-break:break-word;">${u.name}</div>
            </div>
            <div class="num" style="background:#4caf50;">ADD</div>
            <div class="pos">${u.pos}</div>
          </div>`;
        });
      } else if (is2022) {
        const badgeSeq = 2;
        const photoSeq = 1;
        if (matchTeam && matchTabPhoto) {
          count++;
          const photoUrl = getStickerImageUrl(team.name, 1);
          playersHTML += `<div class="sticker photo ${statePhoto}" data-id="${idPhoto}" style="aspect-ratio:4/3;" onclick="openModal('${idPhoto}','Foto de Equipa','photo','${team.name.replace(/'/g,"\\'")}',1)">
            <img class="sticker-bg" loading="lazy" src="${photoUrl}" data-team="${team.name}" data-num="1" onerror="handlePhotoError(this)">
            <div class="num">${String(1).padStart(2,'0')}</div>
            <div class="pos">EQP</div>
            <div class="name">${getFlagImg(team.name, 32)}</div>
          </div>`;
        }
        if (matchTeam && matchTabBadge) {
          count++;
          const badgeUrl = getStickerImageUrl(team.name, 2);
          playersHTML += `<div class="sticker badge ${stateBadge}" data-id="${idBadge}" onclick="openModal('${idBadge}','Emblema','EMB','${team.name.replace(/'/g,"\\'")}',${badgeSeq})">
            <img class="sticker-bg" loading="lazy" src="${badgeUrl}" data-team="${team.name}" data-num="${badgeSeq}" onerror="handleBadgeError(this)">
            <div class="num">${String(badgeSeq).padStart(2,'0')}</div>
            <div class="pos">EMB</div>
            <div class="name">${getFlagImg(team.name, 32)}</div>
          </div>`;
        }
        team.players.forEach((p, i) => {
          const stickerNum = i + 3;
          const pos = i < 3 ? 'GR' : i < 9 ? 'ZAG' : i < 14 ? 'MD' : 'AT';
          const id = `${gName}-${team.name}-${i}`;
          const state = getState(id);
          const matchSearch = !search || p.toLowerCase().includes(search) || team.name.toLowerCase().includes(search);
          const matchTab = currentTab === 'all' || (currentTab === 'owned' && state === 'owned') || (currentTab === 'missing' && (state === 'missing' || state === 'wanted')) || (currentTab === 'wanted' && state === 'wanted');
          if (!matchSearch || !matchTab) return;
          count++;
          const playerUrl = getStickerImageUrl(team.name, stickerNum);
          playersHTML += `<div class="sticker ${state}" data-id="${id}" style="aspect-ratio:3/4;" onclick="openModal('${id}','${p.replace(/'/g,"\\'")}','${pos}','${team.name.replace(/'/g,"\\'")}',${stickerNum})">
            <img class="sticker-bg" loading="lazy" src="${playerUrl}" data-team="${team.name}" data-player="${p}" data-num="${stickerNum}" data-pn="${p}" onerror="handleStickerError(this)">
            <div class="num">${String(stickerNum).padStart(2,'0')}</div>
            <div class="pos">${pos}</div>
            <div class="name">${p}</div>
          </div>`;
        });
      } else if (currentAlbum === '2018') {
        const badgeSeq = get2018SeqNum(team.name, 1);
        const photoSeq = get2018SeqNum(team.name, 13);
        if (matchTeam && matchTabBadge) {
          count++;
          const badgeUrl = getStickerImageUrl(team.name, 1);
          playersHTML += `<div class="sticker badge ${stateBadge}" data-id="${idBadge}" onclick="openModal('${idBadge}','Emblema','EMB','${team.name.replace(/'/g,"\\'")}',${badgeSeq})">
            <img class="sticker-bg" loading="lazy" src="${badgeUrl}" data-team="${team.name}" data-num="${badgeSeq}" onerror="handleBadgeError(this)">
            <div class="num">${String(badgeSeq).padStart(2,'0')}</div>
            <div class="pos">EMB</div>
            <div class="name">${getFlagImg(team.name, 32)}</div>
          </div>`;
        }
        if (matchTeam && matchTabPhoto) {
          count++;
          const photoUrl = getStickerImageUrl(team.name, 13);
          playersHTML += `<div class="sticker photo ${statePhoto}" data-id="${idPhoto}" style="aspect-ratio:4/3;" onclick="openModal('${idPhoto}','Foto de Equipa','photo','${team.name.replace(/'/g,"\\'")}',${photoSeq})">
            <img class="sticker-bg" loading="lazy" src="${photoUrl}" data-team="${team.name}" data-num="${photoSeq}" onerror="handlePhotoError(this)">
            <div class="num">${String(photoSeq).padStart(2,'0')}</div>
            <div class="pos">EQP</div>
            <div class="name">${getFlagImg(team.name, 32)}</div>
          </div>`;
        }
        team.players.forEach((p, i) => {
          const albumPos = i < 11 ? i + 2 : i + 3;
          const stickerNum = get2018SeqNum(team.name, albumPos);
          const pos = i < 3 ? 'GR' : i < 9 ? 'ZAG' : i < 14 ? 'MD' : 'AT';
          const id = `${gName}-${team.name}-${i}`;
          const state = getState(id);
          const matchSearch = !search || p.toLowerCase().includes(search) || team.name.toLowerCase().includes(search);
          const matchTab = currentTab === 'all' || (currentTab === 'owned' && state === 'owned') || (currentTab === 'missing' && (state === 'missing' || state === 'wanted')) || (currentTab === 'wanted' && state === 'wanted');
          if (!matchSearch || !matchTab) return;
          count++;
          const playerUrl = getStickerImageUrl(team.name, albumPos);
          playersHTML += `<div class="sticker ${state}" data-id="${id}" style="aspect-ratio:3/4;" onclick="openModal('${id}','${p.replace(/'/g,"\\'")}','${pos}','${team.name.replace(/'/g,"\\'")}',${stickerNum})">
            <img class="sticker-bg" loading="lazy" src="${playerUrl}" data-team="${team.name}" data-player="${p}" data-num="${stickerNum}" data-pn="${p}" onerror="handleStickerError(this)">
            <div class="num">${String(stickerNum).padStart(2,'0')}</div>
            <div class="pos">${pos}</div>
            <div class="name">${p}</div>
          </div>`;
        });
      } else if (currentAlbum === '2014' || currentAlbum === '2010') {
        const getSeq = (t, p) => currentAlbum === '2014' ? get2014SeqNum(t, p) : get2010SeqNum(t, p);
        const photoSeq = getSeq(team.name, 2);
        const badgeSeq = getSeq(team.name, 1);
        const photoStyle = currentAlbum === '2014' ? 'aspect-ratio:3/4;' : 'aspect-ratio:4/3;';
        const badgeStyle = currentAlbum === '2014' ? 'aspect-ratio:4/3;' : '';
        const emblemaFirst = false;
        team.players.forEach((p, i) => {
          const stickerNum = getSeq(team.name, i + 3);
          const pos = i < 3 ? 'GR' : i < 9 ? 'ZAG' : i < 14 ? 'MD' : 'AT';
          const id = `${gName}-${team.name}-${i}`;
          const state = getState(id);
          const matchSearch = !search || p.toLowerCase().includes(search) || team.name.toLowerCase().includes(search);
          const matchTab = currentTab === 'all' || (currentTab === 'owned' && state === 'owned') || (currentTab === 'missing' && (state === 'missing' || state === 'wanted')) || (currentTab === 'wanted' && state === 'wanted');
          if (!matchSearch || !matchTab) return;
          count++;
          const playerUrl = getStickerImageUrl(team.name, i + 3);
          playersOnlyHTML += `<div class="sticker ${state}" data-id="${id}" style="aspect-ratio:3/4;" onclick="openModal('${id}','${p.replace(/'/g,"\\'")}','${pos}','${team.name.replace(/'/g,"\\'")}',${stickerNum})">
            <img class="sticker-bg" loading="lazy" src="${playerUrl}" data-team="${team.name}" data-player="${p}" data-num="${stickerNum}" data-pn="${p}" onerror="handleStickerError(this)">
            <div class="num">${String(stickerNum).padStart(2,'0')}</div>
            <div class="pos">${pos}</div>
            <div class="name">${p}</div>
          </div>`;
        });
        if (matchTeam && matchTabBadge) {
          count++;
          const badgeUrl = getStickerImageUrl(team.name, 1);
          badgeHTML += `<div class="sticker badge ${stateBadge}" data-id="${idBadge}" style="${badgeStyle}" onclick="openModal('${idBadge}','Emblema','EMB','${team.name.replace(/'/g,"\\'")}',${badgeSeq})">
            <img class="sticker-bg" loading="lazy" src="${badgeUrl}" data-team="${team.name}" data-num="${badgeSeq}" onerror="handleBadgeError(this)">
            <div class="num">${String(badgeSeq).padStart(2,'0')}</div>
            <div class="pos">EMB</div>
            <div class="name">${getFlagImg(team.name, 32)}</div>
          </div>`;
        }
        if (matchTeam && matchTabPhoto) {
          count++;
          const photoUrl = getStickerImageUrl(team.name, 2);
          photoHTML += `<div class="sticker photo ${statePhoto}" data-id="${idPhoto}" style="${photoStyle}" onclick="openModal('${idPhoto}','Foto de Equipa','photo','${team.name.replace(/'/g,"\\'")}',${photoSeq})">
            <img class="sticker-bg" loading="lazy" src="${photoUrl}" data-team="${team.name}" data-num="${photoSeq}" onerror="handlePhotoError(this)">
            <div class="num">${String(photoSeq).padStart(2,'0')}</div>
            <div class="pos">EQP</div>
            <div class="name">${getFlagImg(team.name, 32)}</div>
          </div>`;
        }
        playersHTML = emblemaFirst ? (badgeHTML + photoHTML + playersOnlyHTML) : (photoHTML + badgeHTML + playersOnlyHTML);
      } else if (currentAlbum === '2006' || currentAlbum === '2002' || currentAlbum === '1998' || currentAlbum === '1994' || currentAlbum === '1990' || currentAlbum === '1986' || currentAlbum === '1982' || currentAlbum === '1978' || currentAlbum === '1974' || currentAlbum === '1970') {
        const getSeq = (t, p) => currentAlbum === '2006' ? get2006SeqNum(t, p) : (currentAlbum === '2002' ? get2002SeqNum(t, p) : (currentAlbum === '1998' ? get1998SeqNum(t, p) : (currentAlbum === '1994' ? get1994SeqNum(t, p) : (currentAlbum === '1990' ? get1990SeqNum(t, p) : (currentAlbum === '1986' ? get1986SeqNum(t, p) : (currentAlbum === '1982' ? get1982SeqNum(t, p) : (currentAlbum === '1978' ? get1978SeqNum(t, p) : (currentAlbum === '1974' ? get1974SeqNum(t, p) : get1970SeqNum(t, p)))))))));
        const is2006 = currentAlbum === '2006';
        const is1998 = currentAlbum === '1998';
        const is1990 = currentAlbum === '1990';
        const is1994 = currentAlbum === '1994';
        const photoSeq = getSeq(team.name, 2);
        const badgeSeq = getSeq(team.name, 1);
        const photoStyle = (currentAlbum === '2006' && ['Angola', 'Ghana', 'Saudi Arabia'].includes(team.name)) ? 'aspect-ratio:4/3;' : (currentAlbum === '2006' ? 'aspect-ratio:3/4;' : 'aspect-ratio:4/3;');
        const emblemaHorizontais2002 = ['Spain', 'Slovenia', 'South Korea', 'Ireland', 'England'];
        const badgeStyle = currentAlbum === '2006' ? 'aspect-ratio:4/3;' : (currentAlbum === '1994' && ['Bolivia', 'Nigeria', 'Saudi Arabia'].includes(team.name) ? 'aspect-ratio:4/3;' : (emblemaHorizontais2002.includes(team.name) ? 'aspect-ratio:4/3;max-width:96%;margin:0 auto;' : (currentAlbum === '1974' && teamHasNoTeamPage1974 && teamHasNoTeamPage1974[team.name] ? 'aspect-ratio:4/3;max-width:96%;margin:0 auto;' : '')));
        const emblemaFirst = currentAlbum === '2006';
        const ordenarPorNum = currentAlbum === '1994' || currentAlbum === '1990' || currentAlbum === '1986' || currentAlbum === '1982' || currentAlbum === '1978' || currentAlbum === '1974' || currentAlbum === '1970' || (currentAlbum === '2002' && ['Ecuador', 'Russia', 'Tunisia'].includes(team.name));
        let photoHTML = '';
        let badgeHTML = '';
        let playersOnlyHTML = '';
        const stickerParts = [];
        const pairedTeams1998 = ['USA', 'Iran', 'Saudi Arabia', 'Jamaica'];
        const isPairedRender1998 = currentAlbum === '1998' && pairedTeams1998.includes(team.name);
        team.players.forEach((p, i) => {
          if (isPairedRender1998 && i % 2 === 1) return;
          const stickerNum = getSeq(team.name, i + 3);
          const pos = i < 3 ? 'GR' : i < 9 ? 'ZAG' : i < 14 ? 'MD' : 'AT';
          const combinedName = isPairedRender1998 && i + 1 < team.players.length ? p + '/' + team.players[i + 1] : p;
          const id = `${gName}-${team.name}-${i}`;
          const state = getState(id);
          const matchSearch = !search || combinedName.toLowerCase().includes(search) || team.name.toLowerCase().includes(search);
          const matchTab = currentTab === 'all' || (currentTab === 'owned' && state === 'owned') || (currentTab === 'missing' && (state === 'missing' || state === 'wanted')) || (currentTab === 'wanted' && state === 'wanted');
          if (!matchSearch || !matchTab) return;
          count++;
          const playerUrl = getStickerImageUrl(team.name, i + 3);
          const playerStyle = (currentAlbum === '2002' && p.includes('/')) ? 'aspect-ratio:4/3;' : (currentAlbum === '2006' && ['Angola', 'Ghana', 'Saudi Arabia'].includes(team.name)) ? 'aspect-ratio:4/3;' : isPairedRender1998 ? 'aspect-ratio:4/3;' : (currentAlbum === '1994' && ['Bolivia', 'Nigeria', 'Saudi Arabia'].includes(team.name)) ? 'aspect-ratio:4/3;' : (currentAlbum === '1990' && p.includes('/')) ? 'aspect-ratio:4/3;' : (currentAlbum === '1986' && p.includes('/')) ? 'aspect-ratio:4/3;' : 'aspect-ratio:3/4;';
          const html = `<div class="sticker ${state}" data-id="${id}" style="${playerStyle}" onclick="openModal('${id}','${combinedName.replace(/'/g,"\\'")}','${pos}','${team.name.replace(/'/g,"\\'")}',${stickerNum})">
            ${combinedName.includes('Eusébio') ? '<div style="position:absolute;top:2px;right:4px;font-size:1em;z-index:10;text-shadow:0 0 4px gold;">👑</div>' : ''}
            <img class="sticker-bg" loading="lazy" src="${playerUrl}" data-team="${team.name}" data-player="${combinedName}" data-num="${stickerNum}" data-pn="${combinedName}" onerror="handleStickerError(this)">
            <div class="num">${String(stickerNum).padStart(2,'0')}</div>
            <div class="pos">${pos}</div>
            <div class="name">${combinedName}</div>
          </div>`;
          if (ordenarPorNum) stickerParts.push({ n: stickerNum, html }); else playersOnlyHTML += html;
        });
        if (currentAlbum === '1970' && matchTeam) {
          const flagSeq = getSeq(team.name, 0);
          if (flagSeq) {
            const idFlag = `${gName}-${team.name}-flag`;
            const stateFlag = getState(idFlag);
            const matchTabFlag = currentTab === 'all' || (currentTab === 'owned' && stateFlag === 'owned') || (currentTab === 'missing' && (stateFlag === 'missing' || stateFlag === 'wanted')) || (currentTab === 'wanted' && stateFlag === 'wanted');
            if (matchTabFlag) {
              count++;
              const flagUrl = getStickerImageUrl(team.name, 0);
              const html = `<div class="sticker ${stateFlag}" data-id="${idFlag}" style="aspect-ratio:4/3;max-width:96%;margin:0 auto;" onclick="openModal('${idFlag}','Bandeira','FLG','${team.name.replace(/'/g,"\\'")}',${flagSeq})">
                <img class="sticker-bg" loading="lazy" src="${flagUrl}" data-team="${team.name}" data-num="${flagSeq}" onerror="handleStickerError(this)">
                <div class="num">${String(flagSeq).padStart(2,'0')}</div>
                <div class="pos">FLG</div>
                <div class="name">${getFlagImg(team.name, 32)}</div>
              </div>`;
              if (ordenarPorNum) stickerParts.push({ n: flagSeq, html }); else playersOnlyHTML = html + playersOnlyHTML;
            }
          }
        }
        if (matchTeam && matchTabBadge) {
          count++;
          const badgeUrl = getStickerImageUrl(team.name, 1);
          const html = `<div class="sticker badge ${stateBadge}" data-id="${idBadge}" style="${badgeStyle}" onclick="openModal('${idBadge}','Emblema','EMB','${team.name.replace(/'/g,"\\'")}',${badgeSeq})">
            <img class="sticker-bg" loading="lazy" src="${badgeUrl}" data-team="${team.name}" data-num="${badgeSeq}" onerror="handleBadgeError(this)">
            <div class="num">${String(badgeSeq).padStart(2,'0')}</div>
            <div class="pos">EMB</div>
            <div class="name">${getFlagImg(team.name, 32)}</div>
          </div>`;
          if (ordenarPorNum) stickerParts.push({ n: badgeSeq, html }); else badgeHTML += html;
        }
        if (matchTeam && matchTabPhoto && photoSeq > 0 && !(currentAlbum === '1998' && teamHasNoTeamPage1998 && teamHasNoTeamPage1998[team.name])) {
          count++;
          const photoUrl = getStickerImageUrl(team.name, 2);
          const html = `<div class="sticker photo ${statePhoto}" data-id="${idPhoto}" style="${photoStyle}" onclick="openModal('${idPhoto}','Foto de Equipa','photo','${team.name.replace(/'/g,"\\'")}',${photoSeq})">
            <img class="sticker-bg" loading="lazy" src="${photoUrl}" data-team="${team.name}" data-num="${photoSeq}" onerror="handlePhotoError(this)">
            <div class="num">${String(photoSeq).padStart(2,'0')}</div>
            <div class="pos">EQP</div>
            <div class="name">${getFlagImg(team.name, 32)}</div>
          </div>`;
          if (ordenarPorNum) stickerParts.push({ n: photoSeq, html }); else photoHTML += html;
        }
        if (ordenarPorNum) {
          stickerParts.sort((a, b) => a.n - b.n);
          playersHTML = stickerParts.map(s => s.html).join('');
        } else {
          playersHTML = emblemaFirst ? (badgeHTML + photoHTML + playersOnlyHTML) : (photoHTML + badgeHTML + playersOnlyHTML);
        }
      }
      if (!playersHTML) continue;
      const ownedBase = [idBadge, ...team.players.map((_, i) => `${gName}-${team.name}-${i}`), ...(!(currentAlbum === '1998' && teamHasNoTeamPage1998 && teamHasNoTeamPage1998[team.name]) && !(currentAlbum === '1974' && teamHasNoTeamPage1974 && teamHasNoTeamPage1974[team.name]) ? [idPhoto] : [])].filter(id => getState(id) === 'owned').length;
      const teamUpdates = currentAlbum === '2026' ? updateStickers.filter(u => u.team === team.name) : [];
      const ownedUpdates = teamUpdates.filter(u => getState(`update-${u.num}`) === 'owned' && getState(`${gName}-${team.name}-${u.replacedNum - 2}`) !== 'owned').length;
      const owned = Math.min(ownedBase + ownedUpdates, 20);
      const totalStickersTeam = 20;
      const tn = team.name.replace(/'/g,"\\'");
      groupHTML += `<div class="selecao-section"><div class="selecao-header open" onclick="toggleSelecao(this)">
        ${getFlagImg(team.name, 28)}<span class="name">${team.name}</span>
        <span class="info"><span class="owned">${owned}</span>/<span>${totalStickersTeam}</span></span>
        <span class="dots-btn" onclick="event.stopPropagation();toggleDotsMenu(this)" data-team="${tn}" data-group="${gName}">⋯</span>
        <span class="arrow">▼</span></div>
        <div class="dots-menu" id="dots-${gName}-${team.name.replace(/\s/g,'_')}">
          <div class="dots-option" onclick="selectAllTeam('${gName}','${tn}')">✅ Selecionar tudo</div>
          <div class="dots-option" onclick="removeAllTeam('${gName}','${tn}')">🗑️ Remover tudo</div>
        </div>
        <div class="selecao-body open"><div class="stickers">${playersHTML}</div></div></div>`;
    }
    if (groupHTML) {
      const gFlags = activeTeams[gName].teams.map(t => getFlagImg(t.name, 28)).join(' ');
      html += `<div style="font-size:0.8em;font-weight:800;color:var(--gold);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--border);margin-bottom:12px;display:flex;align-items:center;gap:8px;">Grupo ${gName} <span style="display:inline-flex;gap:4px;vertical-align:middle;">${gFlags}</span></div>`;
      html += groupHTML;
    }
  }

  if (currentAlbum === '2018' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    var fwc2018Legends = [
      { name: 'Brasil 1958', id: 'fwc2018-Legends Brasil 1958', num: 672 },
      { name: 'Alemanha 2014', id: 'fwc2018-Legends Alemanha 2014', num: 673 },
      { name: 'Itália 1982', id: 'fwc2018-Legends Itália 1982', num: 674 },
      { name: 'Uruguai 1930', id: 'fwc2018-Legends Uruguai 1930', num: 675 },
      { name: 'Argentina 1986', id: 'fwc2018-Legends Argentina 1986', num: 676 },
      { name: 'Inglaterra 1966', id: 'fwc2018-Legends Inglaterra 1966', num: 677 },
      { name: 'França 1998', id: 'fwc2018-Legends França 1998', num: 678 },
      { name: 'Espanha 2010', id: 'fwc2018-Legends Espanha 2010', num: 679 },
      { name: 'Pelé', id: 'fwc2018-Legends Pelé', num: 680 },
      { name: 'Miroslav Klose', id: 'fwc2018-Legends Miroslav Klose', num: 681 }
    ];
    const matchLegends = !search || 'legends'.includes(search) || 'lenda'.includes(search) || 'pelé'.includes(search) || 'pele'.includes(search) || 'klose'.includes(search);
    const matchTabLegends = currentTab === 'all' || fwc2018Legends.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
    if (matchLegends && matchTabLegends) {
      let legendsHTML = '';
      fwc2018Legends.forEach(s => {
        const st = getState(s.id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const imgUrl = `https://www.laststicker.com/i/cards/3852/${s.num}.jpg`;
        legendsHTML += `<div class="sticker fwc ${st}" data-id="${s.id}" onclick="openModal('${s.id}','${s.name}','fwc','FWC',${s.num})">
          <img class="sticker-bg" loading="lazy" src="${imgUrl}" onerror="this.style.display='none'">
          <div class="num">${s.num}</div>
          <div class="name">${s.name}</div>
        </div>`;
      });
      if (legendsHTML) {
        html += `<div style="font-size:0.8em;font-weight:800;color:var(--gold);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--border);margin-bottom:12px;">⭐ Legends (672-681)</div>`;
        html += `<div class="stickers">${legendsHTML}</div>`;
      }
    }
  }

  if (currentAlbum === '2022' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    var fwc2022Museu = [
      { name: 'Uruguai 1930', id: 'fwc2022-Museu FIFA 1930', icon: '🏛️' },
      { name: 'Itália 1938', id: 'fwc2022-Museu FIFA 1938', icon: '🏛️' },
      { name: 'Brasil 1958', id: 'fwc2022-Museu FIFA 1958', icon: '🏛️' },
      { name: 'Inglaterra 1966', id: 'fwc2022-Museu FIFA 1966', icon: '🏛️' },
      { name: 'Brasil 1970', id: 'fwc2022-Museu FIFA 1970', icon: '🏛️' },
      { name: 'Argentina 1978', id: 'fwc2022-Museu FIFA 1978', icon: '🏛️' },
      { name: 'Itália 1982', id: 'fwc2022-Museu FIFA 1982', icon: '🏛️' },
      { name: 'Alemanha 1990', id: 'fwc2022-Museu FIFA 1990', icon: '🏛️' },
      { name: 'França 1998', id: 'fwc2022-Museu FIFA 1998', icon: '🏛️' },
      { name: 'Espanha 2010', id: 'fwc2022-Museu FIFA 2010', icon: '🏛️' },
      { name: 'França 2018', id: 'fwc2022-Museu FIFA 2018', icon: '🏛️' }
    ];
    const matchMuseu = !search || 'museu'.includes(search) || 'museum'.includes(search) || '1930'.includes(search) || '1938'.includes(search) || '1958'.includes(search) || '1966'.includes(search) || '1970'.includes(search) || '1978'.includes(search) || '1982'.includes(search) || '1990'.includes(search) || '1998'.includes(search) || '2010'.includes(search) || '2018'.includes(search);
    const matchTabMuseu = currentTab === 'all' || fwc2022Museu.some(s => { const st = getState(s.id); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
    if (matchMuseu && matchTabMuseu) {
      let museuHTML = '';
      fwc2022Museu.forEach((s, i) => {
        const st = getState(s.id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const displayNum = String(i + 19).padStart(2, '0');
        const museuImgUrl = `https://www.laststicker.com/i/cards/7915/fwc${i + 19}.jpg`;
        museuHTML += `<div class="sticker fwc ${st}" data-id="${s.id}" onclick="openModal('${s.id}','${s.name}','fwc','FWC',${i + 19})">
          <img class="sticker-bg" loading="lazy" src="${museuImgUrl}" onerror="this.style.display='none'">
          <div class="num">${displayNum}</div>
          <div class="name">${s.name}</div>
        </div>`;
      });
      if (museuHTML) {
        html += `<div style="font-size:0.8em;font-weight:800;color:var(--gold);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--border);margin-bottom:12px;">🏛️ Museu FIFA (19-29)</div>`;
        html += `<div class="stickers">${museuHTML}</div>`;
      }
    }
  }
  if (currentAlbum === '2026' && (currentGroup === 'all' || currentGroup === 'FWC')) {
    const matchFWC = !search || 'fwc'.includes(search) || 'world cup'.includes(search) || 'fifa'.includes(search) || 'museu'.includes(search) || 'museum'.includes(search);
    const fwcBottom = fwcStickers.filter(s => s.num >= 9);
    const matchTabFWC = currentTab === 'all' || fwcBottom.some(s => { const st = getState(`fwc-${s.num}`); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
    if (matchFWC && matchTabFWC) {
      let fwcHTML = '';
      fwcBottom.forEach(s => {
        const id = `fwc-${s.num}`;
        const st = getState(id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const fireNum = s.num + 1;
        const url = `https://firebasestorage.googleapis.com/v0/b/centralcopa-prod.firebasestorage.app/o/public%2Fstickers%2FWC2026_BR%2F${fireNum}.jpg?alt=media`;
        const pngUrl = `https://firebasestorage.googleapis.com/v0/b/centralcopa-prod.firebasestorage.app/o/public%2Fstickers%2FWC2026_BR%2F${fireNum}.png?alt=media`;
        const displayNum = String(s.num).padStart(2, '0');
        fwcHTML += `<div class="sticker fwc ${st}" data-id="${id}" onclick="openModal('${id}','${s.name}','fwc','FWC',${s.num})">
          <img class="sticker-bg" loading="lazy" src="${url}" onerror="this.onerror=null;this.src='${pngUrl}';this.onerror=function(){this.style.display='none'}">
          <div class="num">${displayNum}</div>
          <div class="name">${s.desc}</div>
        </div>`;
      });
      if (fwcHTML) {
        html += `<div style="font-size:0.8em;font-weight:800;color:var(--gold);padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--border);margin-bottom:12px;">⭐ FIFA World Cup 2026 (09-19)</div>`;
        html += `<div class="stickers">${fwcHTML}</div>`;
      }
    }
  }

  if (currentAlbum === '2026' && showCoca && (currentGroup === 'all' || currentGroup === 'Coca-Cola')) {
    const matchCoca = !search || 'coca'.includes(search) || 'coca-cola'.includes(search);
    const matchTabCoca = currentTab === 'all' || cocaStickers.some(s => { const st = getState(`coca-${s.num}`); return (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted'); });
    if (matchCoca && matchTabCoca) {
      let cocaHTML = '';
      cocaStickers.forEach(s => {
        const id = `coca-${s.num}`;
        const st = getState(id);
        const matchTab = currentTab === 'all' || (currentTab === 'owned' && st === 'owned') || (currentTab === 'missing' && (st === 'missing' || st === 'wanted')) || (currentTab === 'wanted' && st === 'wanted');
        if (!matchTab) return;
        const url = s.url || `https://firebasestorage.googleapis.com/v0/b/centralcopa-prod.firebasestorage.app/o/public%2Fstickers%2FWC2026_BR%2F${s.pos}.jpg?alt=media`;
        const pngUrl = s.url ? s.url.replace('.jpg', '.png') : `https://firebasestorage.googleapis.com/v0/b/centralcopa-prod.firebasestorage.app/o/public%2Fstickers%2FWC2026_BR%2F${s.pos}.png?alt=media`;
        cocaHTML += `<div class="sticker ${st}" data-id="${id}" onclick="openModal('${id}','${s.name}','Coca-Cola','Coca-Cola',${s.num})" style="border-color:rgba(211,47,47,0.6);">
          <img class="sticker-bg" loading="lazy" src="${url}" referrerpolicy="no-referrer" onerror="handleCocaError(this)">
          <div class="num">${s.num}</div>
          <div class="name">${s.name}</div>
        </div>`;
      });
      if (cocaHTML) {
        html += `<div style="font-size:0.8em;font-weight:800;color:#d32f2f;padding:12px 0 4px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--border);margin-bottom:12px;">🥤 Coca-Cola</div>`;
        html += `<div class="stickers">${cocaHTML}</div>`;
      }
    }
  }

const viewBanner = viewOnlyUser ? `<div style="background:linear-gradient(135deg,rgba(212,175,55,0.2),rgba(212,175,55,0.05));border:1px solid rgba(212,175,55,0.3);border-radius:10px;padding:10px 16px;margin:12px 16px;display:flex;align-items:center;justify-content:space-between;">
  <span style="font-size:0.85em;color:var(--gold);font-weight:600;">👁️ A ver como: ${viewOnlyUser.name}</span>
  <button onclick="adminExitViewOnly()" style="background:rgba(212,175,55,0.2);color:var(--gold);border:1px solid rgba(212,175,55,0.3);padding:6px 14px;border-radius:8px;cursor:pointer;font-size:0.8em;font-weight:600;">← Voltar ao admin</button>
</div>` : '';
main.innerHTML = viewBanner + (html || '<div style="text-align:center;padding:40px;color:var(--muted)">Nenhum resultado encontrado</div>');
  atualizarContadores();
}

function toggleSelecao(el) {
  const body = el.nextElementSibling;
  const arrow = el.querySelector('.arrow');
  body.classList.toggle('open');
  el.classList.toggle('open');
  arrow.textContent = body.classList.contains('open') ? '▼' : '▶';
}

function toggleDotsMenu(el) {
  const team = el.dataset.team;
  const group = el.dataset.group;
  const menuId = `dots-${group}-${team.replace(/\s/g,'_')}`;
  document.querySelectorAll('.dots-menu.show').forEach(m => {
    if (m.id !== menuId) m.classList.remove('show');
  });
  document.getElementById(menuId).classList.toggle('show');
}

function selectAllTeam(gName, teamName) {
  const actT = currentAlbum === '2026' ? teams : (currentAlbum === '2022' ? teams2022 : (currentAlbum === '2014' ? teams2014 : (currentAlbum === '2010' ? teams2010 : (currentAlbum === '2006' ? teams2006 : (currentAlbum === '2002' ? teams2002 : (currentAlbum === '1998' ? teams1998 : (currentAlbum === '1994' ? teams1994 : (currentAlbum === '1990' ? teams1990 : (currentAlbum === '1986' ? teams1986 : (currentAlbum === '1982' ? teams1982 : (currentAlbum === '1978' ? teams1978 : (currentAlbum === '1974' ? teams1974 : (currentAlbum === '1970' ? teams1970 : teams2018)))))))))))));
  const team = actT[gName].teams.find(t => t.name === teamName);
  if (!team) return;
  setState(`${gName}-${teamName}-badge`, 'owned');
  team.players.forEach((_, i) => setState(`${gName}-${teamName}-${i}`, 'owned'));
  setState(`${gName}-${teamName}-photo`, 'owned');
  document.querySelectorAll('.dots-menu.show').forEach(m => m.classList.remove('show'));
  render();
}

function removeAllTeam(gName, teamName) {
  const actT = currentAlbum === '2026' ? teams : (currentAlbum === '2022' ? teams2022 : (currentAlbum === '2014' ? teams2014 : (currentAlbum === '2010' ? teams2010 : (currentAlbum === '2006' ? teams2006 : (currentAlbum === '2002' ? teams2002 : (currentAlbum === '1998' ? teams1998 : (currentAlbum === '1994' ? teams1994 : (currentAlbum === '1990' ? teams1990 : (currentAlbum === '1986' ? teams1986 : (currentAlbum === '1982' ? teams1982 : (currentAlbum === '1978' ? teams1978 : (currentAlbum === '1974' ? teams1974 : (currentAlbum === '1970' ? teams1970 : teams2018)))))))))))));
  const team = actT[gName].teams.find(t => t.name === teamName);
  if (!team) return;
  setState(`${gName}-${teamName}-badge`, 'missing');
  team.players.forEach((_, i) => setState(`${gName}-${teamName}-${i}`, 'missing'));
  setState(`${gName}-${teamName}-photo`, 'missing');
  document.querySelectorAll('.dots-menu.show').forEach(m => m.classList.remove('show'));
  render();
}

document.addEventListener('click', function(e) {
    document.querySelectorAll('.dots-menu.show').forEach(m => m.classList.remove('show'));
});

function selectAllCollection() {
  allPlayers.forEach(p => setState(p.id, 'owned'));
  render();
}

function removeAllCollection() {
  allPlayers.forEach(p => setState(p.id, 'missing'));
  render();
}

function toggleCoca(v) {
  showCoca = v;
  saveUserData();
  render();
  atualizarContadores();
}

function selectUpdateSticker(el, id, side, imgUrl) {
  document.querySelectorAll('.update-select-item').forEach(item => item.classList.remove('selected'));
  el.classList.add('selected');
  modalUpdateSelected = { id, side, imgUrl };
  const num = parseInt(id.replace('update-', ''));
  const sel = updateByNum.get(num);
  if (side === 'original') {
    document.getElementById('modalName').textContent = sel && sel.originalName ? sel.originalName : (sel ? sel.name : '');
    document.getElementById('modalPos').textContent = sel && sel.originalTeam ? `Original · ${sel.originalTeam}` : `Original · ${sel ? sel.team : ''}`;
  } else {
    document.getElementById('modalName').textContent = sel ? sel.name : '';
    document.getElementById('modalPos').textContent = `Update · ${sel ? sel.team : ''}`;
  }
  document.getElementById('modalActions').style.display = '';
  const state = getState(id);
  document.querySelectorAll('.modal .action-btn').forEach(b => {
    b.className = 'action-btn';
    if (b.dataset.state === state) b.classList.add(state === 'owned' ? 'owned-sel' : state === 'wanted' ? 'selected' : 'missing-sel');
  });
}



const teamOrder = ["México","Sudáfrica","Coreia do Sul","República Tcheca","Canadá","Bósnia e Herzegovina","Catar","Suíça","Brasil","Marrocos","Haití","Escócia","Estados Unidos","Paraguai","Austrália","Turquia","Alemanha","Curaçao","Costa do Marfim","Equador","Países Baixos","Japão","Suécia","Tunísia","Bélgica","Egito","Irã","Nova Zelândia","Espanha","Cabo Verde","Arábia Saudita","Uruguai","França","Senegal","Iraque","Noruega","Argentina","Argélia","Áustria","Jordânia","Portugal","Congo DR","Uzbequistão","Colômbia","Inglaterra","Croácia","Gana","Panamá"];

const teamOrder2022 = [];
const teamOrder2018 = [];
const teamOrder2014 = [];
const teamOrder2010 = [];
const teamOrder2006 = [];
const teamOrder2002 = [];
const teamOrder1998 = [];
const teamOrder1994 = [];
const teamOrder1990 = [];
const teamOrder1986 = [];
const teamOrder1982 = [];
const teamOrder1978 = [];
const teamOrder1974 = [];
const teamOrder1970 = [];
function rebuildTeamOrders() {
  teamOrder2022.length = 0;
  teamOrder2018.length = 0;
  teamOrder2014.length = 0;
  teamOrder2010.length = 0;
  teamOrder2006.length = 0;
  teamOrder2002.length = 0;
  teamOrder1998.length = 0;
  teamOrder1994.length = 0;
  teamOrder1990.length = 0;
  teamOrder1986.length = 0;
  teamOrder1982.length = 0;
  const grpOrder = ['A','B','C','D','E','F','G','H'];
  grpOrder.forEach(g => {
    if (teams2022[g]) teams2022[g].teams.forEach(t => teamOrder2022.push(t.name));
    if (teams2018[g]) teams2018[g].teams.forEach(t => teamOrder2018.push(t.name));
    if (teams2014[g]) teams2014[g].teams.forEach(t => teamOrder2014.push(t.name));
    if (teams2010[g]) teams2010[g].teams.forEach(t => teamOrder2010.push(t.name));
    if (teams2006[g]) teams2006[g].teams.forEach(t => teamOrder2006.push(t.name));
    if (teams2002[g]) teams2002[g].teams.forEach(t => teamOrder2002.push(t.name));
    if (teams1998[g]) teams1998[g].teams.forEach(t => teamOrder1998.push(t.name));
    if (teams1994[g]) teams1994[g].teams.forEach(t => teamOrder1994.push(t.name));
    if (teams1990[g]) teams1990[g].teams.forEach(t => teamOrder1990.push(t.name));
    if (teams1986[g]) teams1986[g].teams.forEach(t => teamOrder1986.push(t.name));
    if (teams1982[g]) teams1982[g].teams.forEach(t => teamOrder1982.push(t.name));
    teamOrder1978.length = 0;
    if (teams1978) Object.keys(teams1978).forEach(g => { if (teams1978[g]) teams1978[g].teams.forEach(t => teamOrder1978.push(t.name)); });
    teamOrder1974.length = 0;
    if (teams1974) {
      const allTeams1974 = [];
      Object.keys(teams1974).forEach(g => { if (teams1974[g]) teams1974[g].teams.forEach(t => allTeams1974.push(t.name)); });
      allTeams1974.sort((a, b) => (teamBase1974[a] || 999) - (teamBase1974[b] || 999));
      allTeams1974.forEach(t => teamOrder1974.push(t));
    }
    teamOrder1970.length = 0;
    if (teams1970) Object.keys(teams1970).forEach(g => { if (teams1970[g]) teams1970[g].teams.forEach(t => teamOrder1970.push(t.name)); });
  });
}

function getActiveTeamOrder() { return currentAlbum === '2026' ? teamOrder : (currentAlbum === '2022' ? teamOrder2022 : (currentAlbum === '2014' ? teamOrder2014 : (currentAlbum === '2010' ? teamOrder2010 : (currentAlbum === '2006' ? teamOrder2006 : (currentAlbum === '2002' ? teamOrder2002 : (currentAlbum === '1998' ? teamOrder1998 : (currentAlbum === '1994' ? teamOrder1994 : (currentAlbum === '1990' ? teamOrder1990 : (currentAlbum === '1986' ? teamOrder1986 : (currentAlbum === '1982' ? teamOrder1982 : (currentAlbum === '1978' ? teamOrder1978 : (currentAlbum === '1974' ? teamOrder1974 : (currentAlbum === '1970' ? teamOrder1970 : teamOrder2018)))))))))))));
 }

function getStickerImageUrl(teamName, stickerPos) {
  if (currentAlbum === '2022') {
    const code = lsTeamCode[teamName];
    if (!code) return '';
    return `https://www.laststicker.com/i/cards/7915/${code}${stickerPos}.jpg`;
  }
  if (currentAlbum === '2018') {
    const seq = get2018SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/3852/${seq}.jpg`;
  }
  if (currentAlbum === '2014') {
    const seq = get2014SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/1498/${seq}.jpg`;
  }
  if (currentAlbum === '2010') {
    const seq = get2010SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/125/${seq}.jpg`;
  }
  if (currentAlbum === '2006') {
    const seq = get2006SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/3/${seq}.jpg`;
  }
  if (currentAlbum === '2002') {
    const seq = get2002SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/10/${seq}.jpg`;
  }
  if (currentAlbum === '1998') {
    const seq = get1998SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/9/${seq}.jpg`;
  }
  if (currentAlbum === '1994') {
    const seq = get1994SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/8/${seq}.jpg`;
  }
  if (currentAlbum === '1990') {
    const seq = get1990SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/7/${seq}.jpg`;
  }
  if (currentAlbum === '1986') {
    const seq = get1986SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/168/${seq}.jpg`;
  }
  if (currentAlbum === '1982') {
    const seq = get1982SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/139/${seq}.jpg`;
  }
  if (currentAlbum === '1978') {
    const seq = get1978SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/375/${seq}.jpg`;
  }
  if (currentAlbum === '1974') {
    const seq = get1974SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/374/${seq}.jpg`;
  }
  if (currentAlbum === '1970') {
    const seq = get1970SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/219/${seq}.jpg`;
  }
  const idx = teamOrder.indexOf(teamName);
  if (idx === -1) return '';
  const imgNum = (idx * 20) + stickerPos + 20;
  return `https://firebasestorage.googleapis.com/v0/b/centralcopa-prod.firebasestorage.app/o/public%2Fstickers%2FWC2026_BR%2F${imgNum}.jpg?alt=media`;
}
function get2018SeqNum(teamName, stickerPos) {
  const idx = teamOrder2018.indexOf(teamName);
  if (idx === -1) return 0;
  if (stickerPos === 1) return 32 + idx * 20;
  if (stickerPos === 13) return 33 + idx * 20;
  return 34 + idx * 20 + (stickerPos < 13 ? stickerPos - 2 : stickerPos - 3);
}
function get2014SeqNum(teamName, stickerPos) {
  const idx = teamOrder2014.indexOf(teamName);
  if (idx === -1) return 0;
  if (stickerPos === 1) return 33 + idx * 19;
  if (stickerPos === 2) return 32 + idx * 19;
  const lp = stickerPos - 3;
  return 34 + idx * 19 + lp;
}
function get2010SeqNum(teamName, stickerPos) {
  const idx = teamOrder2010.indexOf(teamName);
  if (idx === -1) return 0;
  if (stickerPos === 1) return 31 + idx * 19;
  if (stickerPos === 2) return 30 + idx * 19;
  const lp = stickerPos - 3;
  return 32 + idx * 19 + lp;
}
function get2006SeqNum(teamName, stickerPos) {
  const base = teamBase2006[teamName];
  if (!base) return 0;
  return base + stickerPos - 1;
}
function get1990SeqNum(teamName, stickerPos) {
  const base = teamBase1990[teamName];
  if (!base) return 0;
  if (teamHasNoTeamPage1990[teamName]) {
    return base + stickerPos - 1;
  }
  if (stickerPos === 1) return base;
  if (stickerPos === 2) return base + 3;
  if (stickerPos === 3) return base + 1;
  if (stickerPos === 4) return base + 2;
  return base + stickerPos - 1;
}
function get1986SeqNum(teamName, stickerPos) {
  const base = teamBase1986[teamName];
  if (!base) return 0;
  return base + stickerPos - 1;
}
function get1982SeqNum(teamName, stickerPos) {
  const base = teamBase1982[teamName];
  if (!base) return 0;
  return base + stickerPos - 1;
}
function get1974SeqNum(teamName, stickerPos) {
  const base = teamBase1974[teamName];
  if (!base) return 0;
  if (teamHasNoTeamPage1974 && teamHasNoTeamPage1974[teamName]) {
    const map = { 1: base + 2, 2: 0, 3: base, 4: base + 1, 5: base + 3, 6: base + 4 };
    return map[stickerPos] || 0;
  }
  return base + stickerPos - 1;
}
function get1970SeqNum(teamName, stickerPos) {
  const base = teamBase1970[teamName];
  if (!base) return 0;
  const smallTeams1970 = { 'Belgium':1, 'El Salvador':1, 'Uruguay':1, 'Sweden':1, 'Israel':1, 'Czechoslovakia':1, 'Romania':1, 'Bulgaria':1, 'Peru':1, 'Morocco':1 };
  if (smallTeams1970[teamName]) {
    if (stickerPos === 0) return base;
    if (stickerPos === 1) return base + 1;
    if (stickerPos === 2) return base + 3;
    if (stickerPos === 3) return base + 2;
    return base + stickerPos;
  }
  if (stickerPos === 0) return base;
  return base + stickerPos;
}
function get1994SeqNum(teamName, stickerPos) {
  const base = teamBase1994[teamName];
  if (!base) return 0;
  if (teamHasNoTeamPage1994 && teamHasNoTeamPage1994[teamName]) {
    if (stickerPos === 1) return base;
    if (stickerPos === 2) return base + 9;
    return base + stickerPos - 2;
  }
  if (stickerPos === 1) return base + 4;
  if (stickerPos === 2) return base + 13;
  if (stickerPos <= 6) return base + stickerPos - 3;
  if (stickerPos <= 14) return base + stickerPos - 2;
  return base + stickerPos - 1;
}
function get1998SeqNum(teamName, stickerPos) {
  const base = teamBase1998[teamName];
  if (!base) return 0;
  if (teamName === 'USA' || teamName === 'Iran' || teamName === 'Saudi Arabia' || teamName === 'Jamaica') {
    if (stickerPos === 1) return base;
    if (stickerPos === 2) return base + 3;
    const idx = stickerPos - 3;
    if (idx < 4) return base + 1 + Math.floor(idx / 2);
    return base + 4 + Math.floor((idx - 4) / 2);
  }
  if (teamHasNoTeamPage1998[teamName]) {
    if (stickerPos === 1) return base;
    if (stickerPos === 2) return 0;
    return base + stickerPos - 2;
  }
  if (stickerPos === 1) return base + 1;
  if (stickerPos === 2) return base;
  return base + stickerPos - 1;
}
function get2002SeqNum(teamName, stickerPos) {
  const base = teamBase2002[teamName];
  if (!base) return 0;
  // Seleções cujo emblema precede a foto (overlap com a seleção anterior):
  // emblema=X, jog 1-2 em X+1/X+2, foto em X+3, jog 3+ em X+4..
  const emblemBefore = { 'Ecuador': 511, 'Russia': 521, 'Tunisia': 567 };
  if (emblemBefore[teamName]) {
    const e = emblemBefore[teamName];
    if (stickerPos === 1) return e;
    if (stickerPos === 2) return e + 3;
    const p = stickerPos - 3;
    if (p < 2) return e + 1 + p;
    return e + 4 + (p - 2);
  }
  if (stickerPos === 1) return base + 1;
  if (stickerPos === 2) return base;
  return base + stickerPos - 1;
}
function getStickerImageUrlPng(teamName, stickerPos) {
  if (currentAlbum === '2022') {
    const code = lsTeamCode[teamName];
    if (!code) return '';
    return `https://www.laststicker.com/i/cards/7915/${code}${stickerPos}.jpg`;
  }
  if (currentAlbum === '2018') {
    const seq = get2018SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/3852/${seq}.jpg`;
  }
  if (currentAlbum === '2014') {
    const seq = get2014SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/1498/${seq}.png`;
  }
  if (currentAlbum === '2010') {
    const seq = get2010SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/125/${seq}.png`;
  }
  if (currentAlbum === '2006') {
    return '';
  }
  if (currentAlbum === '2002') {
    return '';
  }
  if (currentAlbum === '1998') {
    const seq = get1998SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/9/${seq}.png`;
  }
  if (currentAlbum === '1994') {
    const seq = get1994SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/8/${seq}.jpg`;
  }
  if (currentAlbum === '1990') {
    const seq = get1990SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/7/${seq}.jpg`;
  }
  if (currentAlbum === '1986') {
    const seq = get1986SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/168/${seq}.jpg`;
  }
  if (currentAlbum === '1982') {
    const seq = get1982SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/139/${seq}.jpg`;
  }
  if (currentAlbum === '1978') {
    const seq = get1978SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/375/${seq}.jpg`;
  }
  if (currentAlbum === '1974') {
    const seq = get1974SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/374/${seq}.jpg`;
  }
  if (currentAlbum === '1970') {
    const seq = get1970SeqNum(teamName, stickerPos);
    if (!seq) return '';
    return `https://www.laststicker.com/i/cards/219/${seq}.jpg`;
  }
  const idx = teamOrder.indexOf(teamName);
  if (idx === -1) return '';
  const imgNum = (idx * 20) + stickerPos + 20;
  return `https://firebasestorage.googleapis.com/v0/b/centralcopa-prod.firebasestorage.app/o/public%2Fstickers%2FWC2026_BR%2F${imgNum}.png?alt=media`;
}

function openModal(id, name, pos, team, num) {
  if (pos === 'fwc' && currentAlbum === '1990') {
    const found = fwc1990Intro.concat(fwc1990Ciao, fwc1990Estadios, fwc1990Cidades).find(s => s.id === id);
    if (found) name = found.name;
  }
  if (pos === 'fwc' && currentAlbum === '1986') {
    const found = fwc1986Special.concat(fwc1986History, fwc1986Stadiums).find(s => s.id === id);
    if (found) name = found.name;
  }
  if (pos === 'fwc' && currentAlbum === '1982') {
    const found = fwc1982Special.concat(fwc1982Posters, fwc1982Stadiums).find(s => s.id === id);
    if (found) name = found.name;
  }
  currentModal = { id, name, pos, team, num };
  modalUpdateSelected = null;

  const gridU = document.getElementById('modalUpdateGrid');
  const modalActions = document.getElementById('modalActions');
  const bigImg = document.getElementById('modalStickerImg');
  let bigImgTag = document.getElementById('modalStickerImgTag');

  gridU.style.display = 'none';
  gridU.innerHTML = '';
  gridU.className = '';
  modalActions.style.display = '';
  bigImg.style.display = 'flex';
  bigImg.innerHTML = '<img id="modalStickerImgTag" src="" alt="Cromo">';

  if (currentAlbum === '2026' && pos !== 'fwc' && pos !== 'FWC' && pos !== 'Coca-Cola' && pos !== 'Update' && pos !== 'EMB') {
    const matchUpdateKey = updateLookup.get(team + '|' + num);
    const matchUpdate = matchUpdateKey != null ? updateByNum.get(matchUpdateKey) : null;
    if (matchUpdate) {
      const updateId = `update-${matchUpdate.num}`;
      const updState = getState(updateId);
      const playerUrl = getStickerImageUrl(team, num);
      const playerState = getState(id);
      const updFlag = getFlagImg(team, 48);

      gridU.innerHTML = `
        <div id="pairContainer" style="display:flex;gap:10px;justify-content:center;width:100%;padding:0 4px;">
          <div id="pairPlayer" class="pair-box" data-sel="1" onclick="selectPair('player')" style="flex:1;max-width:48%;text-align:center;cursor:pointer;border:3px solid #ff9800;border-radius:12px;padding:8px 4px;background:rgba(255,152,0,0.08);transition:all 0.2s;">
            <div style="font-size:0.6em;color:#ff9800;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">⬅ Sai</div>
            <div style="aspect-ratio:3/4;max-height:220px;border-radius:8px;overflow:hidden;background:#111;display:flex;align-items:center;justify-content:center;">
              <img src="${playerUrl}" style="width:100%;height:100%;object-fit:cover;" data-team="${team}" data-pn="${name}" data-num="${num}" onerror="this.onerror=null;var tc=updateTeamCode[this.getAttribute('data-team')]||'';this.src='https://www.laststicker.com/i/cards/12176/'+tc+this.getAttribute('data-num')+'.jpg';this.onerror=function(){handleStickerError(this)}">
            </div>
          </div>
          <div id="pairUpdate" class="pair-box" data-sel="0" onclick="selectPair('update')" style="flex:1;max-width:48%;text-align:center;cursor:pointer;border:3px solid transparent;border-radius:12px;padding:8px 4px;background:transparent;transition:all 0.2s;">
            <div style="font-size:0.6em;color:#4caf50;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Entra ➡</div>
            <div id="pairUpdateInner" data-team="${team}" data-upd-name="${matchUpdate.name}" style="aspect-ratio:3/4;max-height:220px;border-radius:8px;overflow:hidden;background:#111;display:flex;align-items:center;justify-content:center;border:2px solid #4caf50;position:relative;">
              <div style="position:absolute;top:4px;right:4px;background:rgba(76,175,80,0.9);padding:2px 6px;border-radius:8px;font-size:0.5em;color:#fff;font-weight:700;z-index:3;">UPDATE</div>
            </div>
          </div>
        </div>
        <div id="pairInfo" style="text-align:center;margin-top:10px;">
          <div id="pairInfoNum" style="font-size:1.4em;font-weight:900;color:var(--accent);margin-bottom:4px;">${String(num).padStart(2,'0')}</div>
          <div id="pairInfoName" style="font-weight:700;font-size:1em;color:#fff;margin-bottom:2px;">${name}</div>
          <div id="pairInfoPos" style="font-size:0.75em;color:#999;margin-bottom:10px;">${pos} · ${team}</div>
          <div style="display:flex;gap:8px;justify-content:center;" id="pairButtons" class="${viewOnlyUser ? 'viewonly-block' : ''}">
            <button class="action-btn" data-state="missing" onclick="setPairState('${id}','missing')" style="padding:10px 18px;border-radius:10px;">
              <span class="ico">❌</span>Falta
            </button>
            <button class="action-btn" data-state="wanted" onclick="setPairState('${id}','wanted')" style="padding:10px 18px;border-radius:10px;">
              <span class="ico">🔄</span>Troca
            </button>
            <button class="action-btn" data-state="owned" onclick="setPairState('${id}','owned')" style="padding:10px 18px;border-radius:10px;">
              <span class="ico">✅</span>Tenho
            </button>
          </div>
          ${viewOnlyUser ? '<div style="text-align:center;font-size:0.8em;color:var(--muted);margin-top:8px;">👁️ Modo só leitura — não é possível alterar</div>' : ''}
        </div>`;

      window._pairData = {
        player: { id, name, pos, team, num, state: playerState },
        update: { id: updateId, name: matchUpdate.name, pos: 'UPD', team, num: num, state: updState },
        current: 'player'
      };

      var pairUpdInner = document.getElementById('pairUpdateInner');
      if (pairUpdInner) {
        var updImgUrl = getUpdateImageUrl(team, matchUpdate.replacedNum);
        if (updImgUrl) {
          var updImg = document.createElement('img');
          updImg.style.cssText = 'width:100%;height:100%;object-fit:cover;position:absolute;inset:0;';
          updImg.src = updImgUrl;
          updImg.onerror = function() { handleUpdateImageError(this); };
          pairUpdInner.insertBefore(updImg, pairUpdInner.firstChild);
        } else {
          handleUpdateImageError(pairUpdInner);
        }
      }

      document.getElementById('modalNum').textContent = String(num).padStart(2,'0');
      document.getElementById('modalName').textContent = name;
      document.getElementById('modalPos').textContent = `${pos} · ${team}`;
      bigImg.style.display = 'none';
      document.getElementById('modalNum').style.display = 'none';
      document.getElementById('modalName').style.display = 'none';
      document.getElementById('modalPos').style.display = 'none';
      gridU.style.display = 'block';
      modalActions.style.display = 'none';
      document.getElementById('modal').classList.add('show');
      selectPair('player');
      return;
    }
  }

  const emblemaHorizontais2002 = ['Spain', 'Slovenia', 'South Korea', 'Ireland', 'England'];
  document.getElementById('modalNum').textContent = (currentAlbum === 'cwc2025' || currentAlbum === 'liga2025') ? String(num).padStart(3, '0') : ((pos === 'fwc' || pos === 'FWC') ? (currentAlbum === '2018' ? String(num).padStart(2, '0') : String(num).padStart(2, '0')) : num);
  document.getElementById('modalName').textContent = name.includes('Eusébio') ? '👑 Eusébio' : name;
  document.getElementById('modalPos').textContent = `${pos} · ${team}`;
  bigImgTag = document.getElementById('modalStickerImgTag');
  bigImg.classList.toggle('photo-modal', pos === 'photo' || pos === 'FLG' || (currentAlbum === '2006' && pos === 'EMB') || (currentAlbum === '2014' && pos === 'EMB') || (currentAlbum === '2002' && pos === 'EMB' && emblemaHorizontais2002.includes(team)) || (currentAlbum === '1974' && pos === 'EMB' && teamHasNoTeamPage1974 && teamHasNoTeamPage1974[team]) || (currentAlbum === '2002' && pos !== 'EMB' && pos !== 'photo' && name.includes('/')) || (currentAlbum === '2006' && pos !== 'EMB' && ['Angola', 'Ghana', 'Saudi Arabia'].includes(team)) || (currentAlbum === '1998' && ['USA', 'Iran', 'Saudi Arabia', 'Jamaica'].includes(team)) || (currentAlbum === '1994' && ['Bolivia', 'Nigeria', 'Saudi Arabia'].includes(team)) || (currentAlbum === '1990' && pos !== 'EMB' && pos !== 'photo' && name.includes('/')) || (currentAlbum === '1986' && pos !== 'EMB' && pos !== 'photo' && name.includes('/')) || (currentAlbum === '1982' && pos !== 'EMB' && pos !== 'photo' && name.includes('/')));
  bigImg.classList.toggle('badge-horiz-2002', currentAlbum === '2002' && pos === 'EMB' && emblemaHorizontais2002.includes(team));
  bigImg.classList.toggle('fwc-modal', pos === 'fwc');
  bigImg.classList.toggle('coca-modal', pos === 'Coca-Cola');
  bigImg.classList.toggle('cwc-horiz-modal', currentAlbum === 'cwc2025' && num <= 4);
  let imgUrl = '';
  if (pos === 'fwc' || pos === 'FWC') {
    if (currentAlbum === 'cwc2025') {
      imgUrl = `https://www.laststicker.com/i/cards/11090/${num}.jpg`;
    } else if (currentAlbum === '2022') {
      const fwcCode = num === 0 ? '00' : `fwc${num}`;
      imgUrl = `https://www.laststicker.com/i/cards/7915/${fwcCode}.jpg`;
    } else if (currentAlbum === '2018') {
      imgUrl = `https://www.laststicker.com/i/cards/3852/${num === 0 ? '00' : num}.jpg`;
    } else if (currentAlbum === '2014') {
      imgUrl = `https://www.laststicker.com/i/cards/1498/${num === 0 ? '00' : num}.jpg`;
    } else if (currentAlbum === '2010') {
      imgUrl = `https://www.laststicker.com/i/cards/125/${num === 0 ? '00' : num}.jpg`;
    } else if (currentAlbum === '2006') {
      imgUrl = `https://www.laststicker.com/i/cards/3/${num}.jpg`;
    } else if (currentAlbum === '2002') {
      imgUrl = `https://www.laststicker.com/i/cards/10/${num}.jpg`;
    } else if (currentAlbum === '1998') {
      imgUrl = `https://www.laststicker.com/i/cards/9/${num}.jpg`;
    } else if (currentAlbum === '1994') {
      imgUrl = `https://www.laststicker.com/i/cards/8/${num}.jpg`;
    } else if (currentAlbum === '1990') {
      imgUrl = `https://www.laststicker.com/i/cards/7/${num}.jpg`;
    } else if (currentAlbum === '1986') {
      imgUrl = `https://www.laststicker.com/i/cards/168/${num}.jpg`;
    } else if (currentAlbum === '1982') {
      imgUrl = `https://www.laststicker.com/i/cards/139/${num}.jpg`;
    } else if (currentAlbum === '1978') {
      imgUrl = `https://www.laststicker.com/i/cards/375/${num}.jpg`;
    } else if (currentAlbum === '1974') {
      imgUrl = `https://www.laststicker.com/i/cards/374/${num}.jpg`;
    } else if (currentAlbum === '1970') {
      imgUrl = `https://www.laststicker.com/i/cards/219/${num}.jpg`;
    } else {
      const fireNum = num + 1;
      imgUrl = `https://firebasestorage.googleapis.com/v0/b/centralcopa-prod.firebasestorage.app/o/public%2Fstickers%2FWC2026_BR%2F${fireNum}.jpg?alt=media`;
    }
  } else if (pos === 'Coca-Cola') {
    const cs = cocaStickers.find(x => x.num === num);
    if (cs) {
      imgUrl = cs.url || '';
    }
  } else if (pos === 'Update') {
    const updEntry = updateByNum.get(num);
    if (updEntry) {
      imgUrl = getStickerImageUrl(updEntry.team, updEntry.replacedNum);
    }
  } else if (currentAlbum === 'cwc2025') {
    imgUrl = `https://www.laststicker.com/i/cards/11090/${num}.jpg`;
  } else if (currentAlbum === 'liga2025') {
    imgUrl = '';
  } else if (currentAlbum === '2018') {
    imgUrl = `https://www.laststicker.com/i/cards/3852/${num}.jpg`;
  } else if (currentAlbum === '2014') {
    imgUrl = `https://www.laststicker.com/i/cards/1498/${num}.jpg`;
  } else if (currentAlbum === '2010') {
    imgUrl = `https://www.laststicker.com/i/cards/125/${num}.jpg`;
  } else if (currentAlbum === '2006') {
    imgUrl = `https://www.laststicker.com/i/cards/3/${num}.jpg`;
  } else if (currentAlbum === '2002') {
    imgUrl = `https://www.laststicker.com/i/cards/10/${num}.jpg`;
  } else if (currentAlbum === '1998') {
    imgUrl = `https://www.laststicker.com/i/cards/9/${num}.jpg`;
  } else if (currentAlbum === '1994') {
    imgUrl = `https://www.laststicker.com/i/cards/8/${num}.jpg`;
  } else if (currentAlbum === '1990') {
    imgUrl = `https://www.laststicker.com/i/cards/7/${num}.jpg`;
  } else if (currentAlbum === '1986') {
    imgUrl = `https://www.laststicker.com/i/cards/168/${num}.jpg`;
  } else if (currentAlbum === '1982') {
    imgUrl = `https://www.laststicker.com/i/cards/139/${num}.jpg`;
  } else if (currentAlbum === '1978') {
    imgUrl = `https://www.laststicker.com/i/cards/375/${num}.jpg`;
  } else if (currentAlbum === '1974') {
    imgUrl = `https://www.laststicker.com/i/cards/374/${num}.jpg`;
  } else if (currentAlbum === '1970') {
    imgUrl = `https://www.laststicker.com/i/cards/219/${num}.jpg`;
  } else {
      imgUrl = getStickerImageUrl(team, num);
    }
  if (imgUrl) {
    bigImgTag.src = imgUrl;
    bigImg.style.display = 'flex';
    bigImg.querySelectorAll('.crown-overlay').forEach(e => e.remove());
    if (name.includes('Eusébio')) {
      var crownDiv = document.createElement('div');
      crownDiv.className = 'crown-overlay';
      crownDiv.style.cssText = 'position:absolute;top:8px;right:12px;font-size:2em;z-index:20;text-shadow:0 0 8px gold,0 0 16px gold;pointer-events:none;';
      crownDiv.textContent = '👑';
      bigImg.appendChild(crownDiv);
    }
    const pngUrl = (pos === 'fwc' || pos === 'FWC') ? imgUrl.replace('.jpg', '.png') : (pos === 'Coca-Cola' ? imgUrl.replace('.jpg', '.png') : (pos === 'Update' ? imgUrl.replace('.jpg', '.png') : ((currentAlbum === '2018' || currentAlbum === '2014' || currentAlbum === '2010' || currentAlbum === '2006' || currentAlbum === '2002' || currentAlbum === '1998' || currentAlbum === '1994' || currentAlbum === '1990' || currentAlbum === '1986' || currentAlbum === '1982') ? imgUrl : getStickerImageUrlPng(team, num))));
    bigImgTag.onerror = function() {
      if (pngUrl && bigImgTag.src !== pngUrl) {
        bigImgTag.src = pngUrl;
      } else {
        var pfb = playerFallback[team + '-' + name] || teamBadgeFallback[team];
        if (pfb) {
          bigImgTag.src = pfb;
          bigImgTag.onerror = function() { bigImg.style.display = 'none'; };
        } else if (pos !== 'fwc' && pos !== 'FWC' && pos !== 'Coca-Cola' && num !== 1) {
          bigImgTag.src = getStickerImageUrl(team, 1);
          bigImgTag.onerror = function() { bigImg.style.display = 'none'; };
        } else {
          bigImg.style.display = 'none';
        }
      }
    };
    bigImgTag.onload = function() { bigImg.style.display = 'flex'; };
  } else if (currentAlbum === '2022' && team && team !== 'FWC' && team !== 'Coca-Cola') {
    var tc = teamColors2022[team] || ['#1a2a6c','#b21f1f'];
    var bg = tc.length > 2 ? 'linear-gradient(135deg,' + tc[0] + ',' + tc[1] + ')' : 'linear-gradient(135deg,' + tc[0] + ',' + (tc[1]||tc[0]) + ')';
    var flagIso = teamIso[team] || '';
    var flagHtml = flagIso ? '<img src="https://flagcdn.com/96x72/' + flagIso + '.png" style="width:48px;height:36px;opacity:0.3;border-radius:3px;">' : '';
    var ini = name.split(' ').map(function(w){return w[0]}).join('').substring(0,2).toUpperCase();
    bigImgTag.style.display = 'none';
    bigImg.style.display = 'flex';
    bigImg.style.background = bg;
    bigImg.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,0.5);padding:20px;">' + flagHtml + '<div style="font-size:2em;font-weight:900;letter-spacing:2px;margin-top:8px;">' + ini + '</div><div style="font-size:0.9em;opacity:0.9;margin-top:6px;">' + name + '</div><div style="font-size:0.7em;opacity:0.6;margin-top:4px;">' + team + '</div></div>';
  } else {
    bigImg.style.display = 'none';
  }
  const state = getState(id);
  document.querySelectorAll('.modal .action-btn').forEach(b => {
    b.className = 'action-btn';
    if (b.dataset.state === state) b.classList.add(state === 'owned' ? 'owned-sel' : state === 'wanted' ? 'selected' : 'missing-sel');
  });
  document.getElementById('modal').classList.add('show');
}

function closeModal() {
  document.getElementById('modal').classList.remove('show');
  currentModal = null;
  modalUpdateSelected = null;
  window._pairData = null;
  const bigImg = document.getElementById('modalStickerImg');
  bigImg.style.display = '';
  bigImg.innerHTML = '<img id="modalStickerImgTag" src="" alt="Cromo">';
  bigImg.className = 'sticker-img-full';
  const grid = document.getElementById('modalUpdateGrid');
  grid.style.display = 'none';
  grid.innerHTML = '';
  grid.className = '';
  document.getElementById('modalNum').style.display = '';
  document.getElementById('modalName').style.display = '';
  document.getElementById('modalPos').style.display = '';
  document.getElementById('modalActions').style.display = '';
  atualizarContadores();
}

function setModalState(s) {
  if (!currentModal) return;
  setState(currentModal.id, s);
  document.querySelectorAll('.modal .action-btn').forEach(b => {
    b.className = 'action-btn';
    if (b.dataset.state === s) b.classList.add(s === 'owned' ? 'owned-sel' : s === 'wanted' ? 'selected' : 'missing-sel');
  });
  var el = document.querySelector('[data-id="' + currentModal.id + '"]');
  if (el) {
    el.classList.remove('owned','wanted','missing');
    el.classList.add(s);
  }
  atualizarContadores();
}

function setModalStateDirect(stickerId, s) {
  setState(stickerId, s);
  const el = document.querySelector('[data-id="' + stickerId + '"]');
  if (el) {
    el.classList.remove('owned','wanted','missing');
    el.classList.add(s);
  }
  atualizarContadores();
  if (currentModal && currentModal.id === stickerId) {
    document.querySelectorAll('.modal .action-btn').forEach(b => {
      if (b.closest('#modalActions')) {
        b.className = 'action-btn';
        if (b.dataset.state === s) b.classList.add(s === 'owned' ? 'owned-sel' : s === 'wanted' ? 'selected' : 'missing-sel');
      }
    });
  }
}

function _handleUpdateImgError(img, name, num, pos) {
  img.style.display = 'none';
  img.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:100%;background:#1a2332;border:2px dashed #444;border-radius:8px;padding:12px;text-align:center;"><div style="font-size:2em;margin-bottom:4px;">📋</div><div style="font-size:0.7em;color:#999;font-weight:700;">' + name + '</div><div style="font-size:0.6em;color:#666;margin-top:2px;">#' + num + ' · ' + pos + '</div></div>';
}
function selectPair(which) {
  if (!window._pairData) return;
  window._pairData.current = which;
  const data = window._pairData[which];
  const playerBox = document.getElementById('pairPlayer');
  const updateBox = document.getElementById('pairUpdate');
  if (which === 'player') {
    playerBox.style.borderColor = '#ff9800';
    playerBox.style.background = 'rgba(255,152,0,0.08)';
    updateBox.style.borderColor = 'transparent';
    updateBox.style.background = 'transparent';
  } else {
    updateBox.style.borderColor = '#ff9800';
    updateBox.style.background = 'rgba(255,152,0,0.08)';
    playerBox.style.borderColor = 'transparent';
    playerBox.style.background = 'transparent';
  }
  document.getElementById('pairInfoNum').textContent = String(data.num).padStart(2,'0');
  document.getElementById('pairInfoName').textContent = data.name;
  document.getElementById('pairInfoPos').textContent = `${data.pos} · ${data.team}`;
  const st = getState(data.id);
  document.querySelectorAll('#pairButtons .action-btn').forEach(b => {
    b.className = 'action-btn';
    if (b.dataset.state === st) b.classList.add(st === 'owned' ? 'owned-sel' : st === 'wanted' ? 'selected' : 'missing-sel');
  });
  document.querySelectorAll('#pairButtons .action-btn').forEach(b => {
    const state = b.dataset.state;
    b.setAttribute('onclick', `setPairState('${data.id}','${state}')`);
  });
}

function setPairState(stickerId, s) {
  if (viewOnlyUser) return;
  if (!window._pairData) return;
  setState(stickerId, s);
  const el = document.querySelector('[data-id="' + stickerId + '"]');
  if (el) {
    el.classList.remove('owned','wanted','missing');
    el.classList.add(s);
  }
  atualizarContadores();
  renderGroupBar();
  if (window._pairData.player.id === stickerId) {
    window._pairData.player.state = s;
  } else {
    window._pairData.update.state = s;
  }
  const st = getState(stickerId);
  document.querySelectorAll('#pairButtons .action-btn').forEach(b => {
    b.className = 'action-btn';
    if (b.dataset.state === st) b.classList.add(st === 'owned' ? 'owned-sel' : st === 'wanted' ? 'selected' : 'missing-sel');
  });
}

function atualizarContadores() {
  if (!allPlayers) return;
  var owned = 0, total = 0;
  for (var i = 0; i < allPlayers.length; i++) {
    var p = allPlayers[i];
    if (p.pos === 'coca' && !showCoca) continue;
    if (p.pos === 'update') continue;
    total++;
    var st = getState(p.id);
    if (currentAlbum === '2026' && (p.pos === 'GR' || p.pos === 'ZAG' || p.pos === 'MD' || p.pos === 'AT')) {
      var parts = p.id.split('-');
      var playerIdx = parseInt(parts[parts.length - 1]);
      var teamPos = playerIdx <= 10 ? playerIdx + 2 : playerIdx + 3;
      var updKey = updateLookup.get(p.team + '|' + teamPos);
      if (updKey != null) {
        var updSt = getState('update-' + updKey);
        if (st === 'wanted' || updSt === 'wanted') { /* wanted takes priority */ }
        else if (st === 'owned' || updSt === 'owned') { owned++; continue; }
      } else {
        if (st === 'owned') { owned++; continue; }
      }
    } else {
      if (st === 'owned') { owned++; continue; }
    }
  }
  if (owned > total) owned = total;
  document.getElementById('missingBadge').textContent = total - owned;
  document.getElementById('ownedCount').textContent = owned;
  document.getElementById('totalCount').textContent = total;
  document.getElementById('progressCount').textContent = owned;
  document.getElementById('progressTotal').textContent = total;
  document.getElementById('progressPct').textContent = total > 0 ? Math.floor((owned / total) * 100) : 0;
  document.getElementById('progressFill').style.width = total > 0 ? (owned / total) * 100 + '%' : '0%';
  refreshAlbumDropdownIfOpen();
}

let searchTimer = null;
document.getElementById('search').addEventListener('input', function() { clearTimeout(searchTimer); searchTimer = setTimeout(render, 200); });
document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => setTab(t.dataset.tab)));
document.getElementById('modal').addEventListener('click', function(e) { if (e.target === this) closeModal(); });

function toggleShareMenu() {
  document.getElementById('shareMenu').classList.toggle('show');
}

function getMissingByTeam() {
  const map = {};
  const nums1 = [];
  const nums2 = [];
  if (currentAlbum === '2026') {
    fwcStickers.forEach(s => {
      const st = getState(`fwc-${s.num}`);
      if (st === 'missing') {
        if (s.num <= 8) nums1.push(String(s.num).padStart(2, '0'));
        else nums2.push(String(s.num).padStart(2, '0'));
      }
    });
  }
  if (currentAlbum === '2022') {
    const fwc2022Top = ['fwc2022-Panini','fwc2022-FIFA','fwc2022-Troféu 1','fwc2022-Troféu 2','fwc2022-Mascote 1','fwc2022-Mascote 2','fwc2022-Emblema 1','fwc2022-Emblema 2','fwc2022-Est. Ahmad Bin Ali','fwc2022-Est. Al Janoub','fwc2022-Est. Al Thumama','fwc2022-Est. Education City','fwc2022-Est. Khalifa','fwc2022-Est. 974','fwc2022-Est. Al Bayt ext.','fwc2022-Est. Al Bayt int.','fwc2022-Est. Lusail ext.','fwc2022-Est. Lusail int.','fwc2022-Al Rihla'];
    const fwc2022Museu = ['fwc2022-Museu FIFA 1930','fwc2022-Museu FIFA 1938','fwc2022-Museu FIFA 1958','fwc2022-Museu FIFA 1966','fwc2022-Museu FIFA 1970','fwc2022-Museu FIFA 1978','fwc2022-Museu FIFA 1982','fwc2022-Museu FIFA 1990','fwc2022-Museu FIFA 1998','fwc2022-Museu FIFA 2010','fwc2022-Museu FIFA 2018'];
    const fwcMissing = [];
    fwc2022Top.forEach((id, i) => { if (getState(id) === 'missing') fwcMissing.push(String(i).padStart(2, '0')); });
    if (fwcMissing.length) nums1.push(...fwcMissing);
    const fwcMuseuMissing = [];
    fwc2022Museu.forEach((id, i) => { if (getState(id) === 'missing') fwcMuseuMissing.push(String(i + 19).padStart(2, '0')); });
    if (fwcMuseuMissing.length) nums2.push(...fwcMuseuMissing);
  }
  if (currentAlbum === '2018') {
    const fwcMundial = ['fwc2018-Mundial Panini','fwc2018-Mundial FIFA Fair Play','fwc2018-Mundial Troféu','fwc2018-Mundial Gráfico 1','fwc2018-Mundial Gráfico 2','fwc2018-Mundial Logo 1','fwc2018-Mundial Logo 2','fwc2018-Mundial Bola Oficial'];
    const fwcEstadios = ['fwc2018-Est. Ekaterinburg Arena','fwc2018-Est. Kaliningrad Stadium','fwc2018-Est. Kazan Arena','fwc2018-Est. Spartak Stadium','fwc2018-Est. Nizhny Novgorod','fwc2018-Est. Luzhniki','fwc2018-Est. Rostov Arena','fwc2018-Est. Saint Petersburg','fwc2018-Est. Samara Arena','fwc2018-Est. Mordovia Arena','fwc2018-Est. Fisht Stadium','fwc2018-Est. Volgograd Arena'];
    const fwcCidades = ['fwc2018-Cid. Moscow 1','fwc2018-Cid. Moscow 2','fwc2018-Cid. Kaliningrad','fwc2018-Cid. Saint Petersburg','fwc2018-Cid. Sochi','fwc2018-Cid. Rostov-on-Don','fwc2018-Cid. Volgograd','fwc2018-Cid. Kazan','fwc2018-Cid. Nizhny Novgorod','fwc2018-Cid. Samara','fwc2018-Cid. Yekaterinburg','fwc2018-Cid. Saransk'];
    const mM = []; fwcMundial.forEach((id, i) => { if (getState(id) === 'missing') mM.push(String(i).padStart(2, '0')); });
    const mE = []; fwcEstadios.forEach((id, i) => { if (getState(id) === 'missing') mE.push(String(i + 8).padStart(2, '0')); });
    const mC = []; fwcCidades.forEach((id, i) => { if (getState(id) === 'missing') mC.push(String(i + 20).padStart(2, '0')); });
    if (mM.length) map['Mundial'] = mM;
    if (mE.length) map['Estádios'] = mE;
    if (mC.length) map['Cidades'] = mC;
  }
  if (currentAlbum === '2014') {
    const fwc2014Intro = ['fwc2014-Intro Arte Panini','fwc2014-Intro Troféu','fwc2014-Intro Logotipo','fwc2014-Intro Fuleco','fwc2014-Intro Brazuca','fwc2014-Intro Bandeiras','fwc2014-Intro Formação','fwc2014-Intro Confederações'];
    const fwc2014Estadios = ['fwc2014-Est. São Paulo','fwc2014-Est. Maracanã','fwc2014-Est. Brasília','fwc2014-Est. Salvador','fwc2014-Est. Belo Horizonte','fwc2014-Est. Cuiabá','fwc2014-Est. Manaus','fwc2014-Est. Recife','fwc2014-Est. Porto Alegre','fwc2014-Est. Fortaleza','fwc2014-Est. Natal','fwc2014-Est. Curitiba'];
    const fwc2014Mapa = ['fwc2014-Mapa 1','fwc2014-Mapa 2','fwc2014-Mapa 3','fwc2014-Mapa 4','fwc2014-Mapa 5','fwc2014-Mapa 6','fwc2014-Mapa 7','fwc2014-Mapa 8','fwc2014-Mapa 9','fwc2014-Mapa 10','fwc2014-Mapa 11','fwc2014-Mapa 12'];
    const mI = []; fwc2014Intro.forEach((id, i) => { if (getState(id) === 'missing') mI.push(String(i).padStart(2, '0')); });
    const mE = []; fwc2014Estadios.forEach((id, i) => { if (getState(id) === 'missing') mE.push(String(i + 8).padStart(2, '0')); });
    const mM = []; fwc2014Mapa.forEach((id, i) => { if (getState(id) === 'missing') mM.push(String(i + 20).padStart(2, '0')); });
    if (mI.length) map['Introdução'] = mI;
    if (mE.length) map['Estádios'] = mE;
    if (mM.length) map['Mapa'] = mM;
  }
  if (currentAlbum === '2006') {
    const fwc2006All = ['fwc2006-Intro Ball','fwc2006-Intro Trophy','fwc2006-Intro Emblem','fwc2006-Intro Mascot','fwc2006-Est. Berlin','fwc2006-Est. Dortmund','fwc2006-Est. Hamburg','fwc2006-Est. Gelsenkirchen','fwc2006-Est. Hannover','fwc2006-Est. Cologne','fwc2006-Est. Leipzig','fwc2006-Est. Nuremberg','fwc2006-Est. Stuttgart','fwc2006-Est. Frankfurt','fwc2006-Extra Fair Play','fwc2006-Extra Panorama','fwc2006-Extra Poster'];
    const mF = []; fwc2006All.forEach((id, i) => { if (getState(id) === 'missing') mF.push(String(i).padStart(2, '0')); });
    if (mF.length) map['FWC'] = mF;
  }
  if (currentAlbum === '2002') {
    const fwc2002All = ['fwc2002-Intro Troféu','fwc2002-Intro Emblema','fwc2002-Intro Mascote','fwc2002-Intro Pôster','fwc2002-Est. Sapporo','fwc2002-Est. Kashima','fwc2002-Est. Tokyo','fwc2002-Est. Sendai','fwc2002-Est. Niigata','fwc2002-Est. Ibaraki','fwc2002-Est. Oita','fwc2002-Est. Kobe','fwc2002-Est. Yokohama','fwc2002-Est. Shizuoka','fwc2002-Est. Osaka','fwc2002-Est. Miyagi','fwc2002-Est. Nagai','fwc2002-Est. Kawasaki','fwc2002-Est. Daegu','fwc2002-Est. Ulsan','fwc2002-Est. Suwon','fwc2002-Est. Busan','fwc2002-Est. Jeonju','fwc2002-Est. Gwangju'];
    const mF = []; fwc2002All.forEach((id, i) => { if (getState(id) === 'missing') mF.push(String(i).padStart(2, '0')); });
    if (mF.length) map['FWC'] = mF;
  }
  if (currentAlbum === '1998') {
    const fwc1998All = ['fwc1998-Special World Cup','fwc1998-Special Emblem','fwc1998-Special Mascot','fwc1998-Est. Stade de France','fwc1998-Est. Parc des Princes','fwc1998-Est. Bollaert','fwc1998-Est. Gerland','fwc1998-Est. Geoffroy','fwc1998-Est. Vélodrome','fwc1998-Est. Mosson','fwc1998-Est. Municipal','fwc1998-Est. Lescure','fwc1998-Est. Beaujoire'];
    const mF = []; fwc1998All.forEach((id, i) => { if (getState(id) === 'missing') mF.push(String(i).padStart(2, '0')); });
    if (mF.length) map['FWC'] = mF;
  }
  if (currentAlbum === '1994') {
    const fwc1994All = ['fwc1994-City San Francisco','fwc1994-City Boston','fwc1994-City Orlando','fwc1994-City Dallas','fwc1994-City Detroit','fwc1994-City Chicago','fwc1994-Est. Chicago','fwc1994-Est. Detroit','fwc1994-Est. New York','fwc1994-Est. Boston','fwc1994-Est. Dallas','fwc1994-Est. Orlando','fwc1994-Est. Washington','fwc1994-Est. San Francisco','fwc1994-Est. Los Angeles'];
    const mF = []; fwc1994All.forEach((id, i) => { if (getState(id) === 'missing') mF.push(String(i).padStart(2, '0')); });
    if (mF.length) map['FWC'] = mF;
  }
  if (currentAlbum === '1990') {
    const fwc1990All = ['fwc1990-Intro-1','fwc1990-Intro-2','fwc1990-Intro-3','fwc1990-Intro-4','fwc1990-Ciao-5','fwc1990-Ciao-6','fwc1990-Ciao-7','fwc1990-Ciao-8','fwc1990-Stad-9','fwc1990-Cid-10','fwc1990-Stad-11','fwc1990-Cid-12','fwc1990-Stad-13','fwc1990-Cid-14','fwc1990-Ciao-15','fwc1990-Stad-16','fwc1990-Cid-17','fwc1990-Ciao-26','fwc1990-Stad-18','fwc1990-Cid-19','fwc1990-Stad-20','fwc1990-Cid-21','fwc1990-Stad-22','fwc1990-Cid-23','fwc1990-Stad-24','fwc1990-Cid-25','fwc1990-Ciao-27','fwc1990-Stad-28','fwc1990-Cid-29','fwc1990-Cid-30','fwc1990-Stad-31','fwc1990-Cid-32','fwc1990-Stad-33','fwc1990-Ciao-34','fwc1990-Ciao-35','fwc1990-Cid-36','fwc1990-Stad-37'];
    const mF = []; fwc1990All.forEach((id, i) => { if (getState(id) === 'missing') mF.push(String(i + 1).padStart(2, '0')); });
    if (mF.length) map['FWC'] = mF;
  }
  if (currentAlbum === '1986') {
    const fwc1986All = fwc1986Special.concat(fwc1986History, fwc1986Stadiums);
    const mF = []; fwc1986All.forEach(s => { if (getState(s.id) === 'missing') mF.push(String(s.num).padStart(2, '0')); });
    if (mF.length) map['FWC'] = mF;
  }
  if (currentAlbum === '1982') {
    const fwc1982All = fwc1982Special.concat(fwc1982Posters, fwc1982Stadiums);
    const mF = []; fwc1982All.forEach(s => { if (getState(s.id) === 'missing') mF.push(String(s.num).padStart(2, '0')); });
    if (mF.length) map['FWC'] = mF;
  }
  if (currentAlbum === '1978') {
    const fwc1978All = fwc1978History.concat(fwc1978Stadiums);
    const mF = []; fwc1978All.forEach(s => { if (getState(s.id) === 'missing') mF.push(String(s.num).padStart(2, '0')); });
    if (mF.length) map['FWC'] = mF;
  }
  if (currentAlbum === '1974') {
    const fwc1974All = fwc1974Special.concat(fwc1974Intro, fwc1974Mascots, fwc1974Stadiums);
    const mF = []; fwc1974All.forEach(s => { if (getState(s.id) === 'missing') mF.push(String(s.num).padStart(2, '0')); });
    if (mF.length) map['FWC'] = mF;
  }
  if (currentAlbum === '1970') {
    const fwc1970All = fwc1970Special.concat(fwc1970Posters, fwc1970Stadiums);
    const mF = []; fwc1970All.forEach(s => { if (getState(s.id) === 'missing') mF.push(String(s.num).padStart(2, '0')); });
    if (mF.length) map['FWC'] = mF;
  }
  if (nums1.length) map['FWC 00-08'] = nums1;
  if (currentAlbum === 'cwc2025' || currentAlbum === 'liga2025') {
    const teamMap = {};
    allPlayers.forEach(p => {
      const st = getState(p.id);
      if (st === 'missing') {
        if (!teamMap[p.team]) teamMap[p.team] = [];
        teamMap[p.team].push(String(p.num).padStart(3, '0'));
      }
    });
    Object.entries(teamMap).forEach(([team, nums]) => { map[team] = nums; });
  } else {
  const shareTeams = currentAlbum === '2026' ? teams : (currentAlbum === '2022' ? teams2022 : (currentAlbum === '2014' ? teams2014 : (currentAlbum === '2010' ? teams2010 : (currentAlbum === '2006' ? teams2006 : (currentAlbum === '2002' ? teams2002 : (currentAlbum === '1998' ? teams1998 : (currentAlbum === '1994' ? teams1994 : (currentAlbum === '1990' ? teams1990 : (currentAlbum === '1986' ? teams1986 : (currentAlbum === '1982' ? teams1982 : (currentAlbum === '1978' ? teams1978 : (currentAlbum === '1974' ? teams1974 : (currentAlbum === '1970' ? teams1970 : teams2018)))))))))))));
  const is2022 = currentAlbum === '2022';
  const is2018 = currentAlbum === '2018';
  const is2014 = currentAlbum === '2014';
  const is2010 = currentAlbum === '2010';
  const is2006 = currentAlbum === '2006';
  const is2002 = currentAlbum === '2002';
  const is1998 = currentAlbum === '1998';
  const is1994 = currentAlbum === '1994';
  const is1990 = currentAlbum === '1990';
  const is1986 = currentAlbum === '1986';
  const is1982 = currentAlbum === '1982';
  for (const [gName, gData] of Object.entries(shareTeams)) {
    for (const team of gData.teams) {
      const nums = [];
      if (is2022) {
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(1);
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(2);
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(i + 3);
        });
      } else if (is2018) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get2018SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get2018SeqNum(team.name, 13));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get2018SeqNum(team.name, i + 3));
        });
      } else if (is2014) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get2014SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get2014SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get2014SeqNum(team.name, i + 3));
        });
      } else if (is2010) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get2010SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get2010SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get2010SeqNum(team.name, i + 3));
        });
      } else if (is2006) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get2006SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get2006SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get2006SeqNum(team.name, i + 3));
        });
      } else if (is2002) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get2002SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get2002SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get2002SeqNum(team.name, i + 3));
        });
      } else if (is1998) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get1998SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get1998SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get1998SeqNum(team.name, i + 3));
        });
      } else if (is1994) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get1994SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get1994SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get1994SeqNum(team.name, i + 3));
        });
      } else if (is1990) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get1990SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get1990SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get1990SeqNum(team.name, i + 3));
        });
      } else if (is1986) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get1986SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get1986SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get1986SeqNum(team.name, i + 3));
        });
      } else if (is1982) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get1982SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get1982SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get1982SeqNum(team.name, i + 3));
        });
      } else if (currentAlbum === '1978') {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get1978SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get1978SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get1978SeqNum(team.name, i + 3));
        });
      } else if (currentAlbum === '1974') {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get1974SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get1974SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get1974SeqNum(team.name, i + 3));
        });
      } else if (currentAlbum === '1970') {
        const flag = `${gName}-${team.name}-flag`;
        if (getState(flag) === 'missing') nums.push(get1970SeqNum(team.name, 0));
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(get1970SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(get1970SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(get1970SeqNum(team.name, i + 3));
        });
      } else {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'missing') nums.push(1);
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'missing') nums.push(i < 11 ? i + 2 : i + 3);
        });
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'missing') nums.push(13);
      }
      if (nums.length) map[team.name] = nums.filter(n => n > 0).sort((a, b) => a - b);
    }
  }
  if (nums2.length) map['FWC 09-19'] = nums2;
  if (currentAlbum === '2018') {
    const legendIds = [
      { id: 'fwc2018-Legends Brasil 1958', num: 672 },
      { id: 'fwc2018-Legends Alemanha 2014', num: 673 },
      { id: 'fwc2018-Legends Itália 1982', num: 674 },
      { id: 'fwc2018-Legends Uruguai 1930', num: 675 },
      { id: 'fwc2018-Legends Argentina 1986', num: 676 },
      { id: 'fwc2018-Legends Inglaterra 1966', num: 677 },
      { id: 'fwc2018-Legends França 1998', num: 678 },
      { id: 'fwc2018-Legends Espanha 2010', num: 679 },
      { id: 'fwc2018-Legends Pelé', num: 680 },
      { id: 'fwc2018-Legends Miroslav Klose', num: 681 }
    ];
    const legendMissing = [];
    legendIds.forEach(s => { if (getState(s.id) === 'missing') legendMissing.push(s.num); });
    if (legendMissing.length) map['Legends'] = legendMissing;
  }
  }
  if (currentAlbum === '2026' && showCoca) {
    const nums = [];
    cocaStickers.forEach(s => { if (getState(`coca-${s.num}`) === 'missing') nums.push(s.num); });
    if (nums.length) map['Coca-Cola'] = nums;
  }
  return map;
}

function getWantedByTeam() {
  const map = {};
  if (currentAlbum === 'cwc2025' || currentAlbum === 'liga2025') {
    const teamMap = {};
    allPlayers.forEach(p => {
      const st = getState(p.id);
      if (st === 'wanted') {
        if (!teamMap[p.team]) teamMap[p.team] = [];
        teamMap[p.team].push(String(p.num).padStart(3, '0'));
      }
    });
    Object.entries(teamMap).forEach(([team, nums]) => { map[team] = nums; });
    return map;
  }
  const shareTeams = currentAlbum === '2026' ? teams : (currentAlbum === '2022' ? teams2022 : (currentAlbum === '2014' ? teams2014 : (currentAlbum === '2010' ? teams2010 : (currentAlbum === '2006' ? teams2006 : (currentAlbum === '2002' ? teams2002 : (currentAlbum === '1998' ? teams1998 : (currentAlbum === '1994' ? teams1994 : (currentAlbum === '1990' ? teams1990 : (currentAlbum === '1986' ? teams1986 : (currentAlbum === '1982' ? teams1982 : (currentAlbum === '1978' ? teams1978 : (currentAlbum === '1974' ? teams1974 : (currentAlbum === '1970' ? teams1970 : teams2018)))))))))))));
  const is2022 = currentAlbum === '2022';
  const is2018 = currentAlbum === '2018';
  const is2014 = currentAlbum === '2014';
  const is2010 = currentAlbum === '2010';
  const is2006 = currentAlbum === '2006';
  const is2002 = currentAlbum === '2002';
  const is1998 = currentAlbum === '1998';
  const is1994 = currentAlbum === '1994';
  const is1990 = currentAlbum === '1990';
  const is1986 = currentAlbum === '1986';
  const is1982 = currentAlbum === '1982';
  for (const [gName, gData] of Object.entries(shareTeams)) {
    for (const team of gData.teams) {
      const nums = [];
      if (is2022) {
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(1);
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(2);
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(i + 3);
        });
      } else if (is2018) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get2018SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get2018SeqNum(team.name, 13));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get2018SeqNum(team.name, i + 3));
        });
      } else if (is2014) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get2014SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get2014SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get2014SeqNum(team.name, i + 3));
        });
      } else if (is2010) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get2010SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get2010SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get2010SeqNum(team.name, i + 3));
        });
      } else if (is2006) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get2006SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get2006SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get2006SeqNum(team.name, i + 3));
        });
      } else if (is2002) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get2002SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get2002SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get2002SeqNum(team.name, i + 3));
        });
      } else if (is1998) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get1998SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get1998SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get1998SeqNum(team.name, i + 3));
        });
      } else if (is1994) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get1994SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get1994SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get1994SeqNum(team.name, i + 3));
        });
      } else if (is1990) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get1990SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get1990SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get1990SeqNum(team.name, i + 3));
        });
      } else if (is1986) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get1986SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get1986SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get1986SeqNum(team.name, i + 3));
        });
      } else if (is1982) {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get1982SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get1982SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get1982SeqNum(team.name, i + 3));
        });
      } else if (currentAlbum === '1978') {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get1978SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get1978SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get1978SeqNum(team.name, i + 3));
        });
      } else if (currentAlbum === '1974') {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get1974SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get1974SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get1974SeqNum(team.name, i + 3));
        });
      } else if (currentAlbum === '1970') {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(get1970SeqNum(team.name, 1));
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(get1970SeqNum(team.name, 2));
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(get1970SeqNum(team.name, i + 3));
        });
      } else {
        const badge = `${gName}-${team.name}-badge`;
        if (getState(badge) === 'wanted') nums.push(1);
        team.players.forEach((p, i) => {
          const id = `${gName}-${team.name}-${i}`;
          if (getState(id) === 'wanted') nums.push(i < 11 ? i + 2 : i + 3);
        });
        const photo = `${gName}-${team.name}-photo`;
        if (getState(photo) === 'wanted') nums.push(13);
      }
      if (nums.length) map[team.name] = nums.filter(n => n > 0).sort((a, b) => a - b);
    }
  }
  if (currentAlbum === '1994') {
    const fwc1994All = ['fwc1994-City San Francisco','fwc1994-City Boston','fwc1994-City Orlando','fwc1994-City Dallas','fwc1994-City Detroit','fwc1994-City Chicago','fwc1994-Est. Chicago','fwc1994-Est. Detroit','fwc1994-Est. New York','fwc1994-Est. Boston','fwc1994-Est. Dallas','fwc1994-Est. Orlando','fwc1994-Est. Washington','fwc1994-Est. San Francisco','fwc1994-Est. Los Angeles'];
    const wF = []; fwc1994All.forEach((id, i) => { if (getState(id) === 'wanted') wF.push(String(i).padStart(2, '0')); });
    if (wF.length) map['FWC'] = wF;
  }
  if (currentAlbum === '2026') {
    fwcStickers.forEach(s => {
      if (getState(`fwc-${s.num}`) === 'wanted') {
        const key = s.num <= 8 ? 'FWC 00-08' : 'FWC 09-19';
        if (!map[key]) map[key] = [];
        map[key].push(String(s.num).padStart(2, '0'));
      }
    });
    cocaStickers.forEach(s => {
      if (getState(`coca-${s.num}`) === 'wanted') {
        if (!map['Coca-Cola']) map['Coca-Cola'] = [];
        map['Coca-Cola'].push(s.num);
      }
    });
  }
  if (currentAlbum === '2022') {
    const fwcIds = ['fwc2022-00','fwc2022-FWC1','fwc2022-FWC2','fwc2022-FWC3','fwc2022-FWC4','fwc2022-FWC5','fwc2022-FWC6','fwc2022-FWC7','fwc2022-FWC8','fwc2022-FWC9','fwc2022-FWC10','fwc2022-FWC11','fwc2022-FWC12','fwc2022-FWC13','fwc2022-FWC14','fwc2022-FWC15','fwc2022-FWC16','fwc2022-FWC17','fwc2022-FWC18'];
    const fwcWanted = [];
    fwcIds.forEach((id, i) => { if (getState(id) === 'wanted') fwcWanted.push(String(i).padStart(2, '0')); });
    if (fwcWanted.length) map['FWC'] = fwcWanted;
  }
  if (currentAlbum === '2018') {
    const fwcMundial = ['fwc2018-Mundial Panini','fwc2018-Mundial FIFA Fair Play','fwc2018-Mundial Troféu','fwc2018-Mundial Gráfico 1','fwc2018-Mundial Gráfico 2','fwc2018-Mundial Logo 1','fwc2018-Mundial Logo 2','fwc2018-Mundial Bola Oficial'];
    const fwcEstadios = ['fwc2018-Est. Ekaterinburg Arena','fwc2018-Est. Kaliningrad Stadium','fwc2018-Est. Kazan Arena','fwc2018-Est. Spartak Stadium','fwc2018-Est. Nizhny Novgorod','fwc2018-Est. Luzhniki','fwc2018-Est. Rostov Arena','fwc2018-Est. Saint Petersburg','fwc2018-Est. Samara Arena','fwc2018-Est. Mordovia Arena','fwc2018-Est. Fisht Stadium','fwc2018-Est. Volgograd Arena'];
    const fwcCidades = ['fwc2018-Cid. Moscow 1','fwc2018-Cid. Moscow 2','fwc2018-Cid. Kaliningrad','fwc2018-Cid. Saint Petersburg','fwc2018-Cid. Sochi','fwc2018-Cid. Rostov-on-Don','fwc2018-Cid. Volgograd','fwc2018-Cid. Kazan','fwc2018-Cid. Nizhny Novgorod','fwc2018-Cid. Samara','fwc2018-Cid. Yekaterinburg','fwc2018-Cid. Saransk'];
    const wM = []; fwcMundial.forEach((id, i) => { if (getState(id) === 'wanted') wM.push(String(i).padStart(2, '0')); });
    const wE = []; fwcEstadios.forEach((id, i) => { if (getState(id) === 'wanted') wE.push(String(i + 8).padStart(2, '0')); });
    const wC = []; fwcCidades.forEach((id, i) => { if (getState(id) === 'wanted') wC.push(String(i + 20).padStart(2, '0')); });
    if (wM.length) map['Mundial'] = wM;
    if (wE.length) map['Estádios'] = wE;
    if (wC.length) map['Cidades'] = wC;
    const legendIds = [
      { id: 'fwc2018-Legends Brasil 1958', num: 672 },
      { id: 'fwc2018-Legends Alemanha 2014', num: 673 },
      { id: 'fwc2018-Legends Itália 1982', num: 674 },
      { id: 'fwc2018-Legends Uruguai 1930', num: 675 },
      { id: 'fwc2018-Legends Argentina 1986', num: 676 },
      { id: 'fwc2018-Legends Inglaterra 1966', num: 677 },
      { id: 'fwc2018-Legends França 1998', num: 678 },
      { id: 'fwc2018-Legends Espanha 2010', num: 679 },
      { id: 'fwc2018-Legends Pelé', num: 680 },
      { id: 'fwc2018-Legends Miroslav Klose', num: 681 }
    ];
    const legendWanted = [];
    legendIds.forEach(s => { if (getState(s.id) === 'wanted') legendWanted.push(s.num); });
    if (legendWanted.length) map['Legends'] = legendWanted;
  }
  if (currentAlbum === '2014') {
    const fwc2014Intro = ['fwc2014-Intro Arte Panini','fwc2014-Intro Troféu','fwc2014-Intro Logotipo','fwc2014-Intro Fuleco','fwc2014-Intro Brazuca','fwc2014-Intro Bandeiras','fwc2014-Intro Formação','fwc2014-Intro Confederações'];
    const fwc2014Estadios = ['fwc2014-Est. São Paulo','fwc2014-Est. Maracanã','fwc2014-Est. Brasília','fwc2014-Est. Salvador','fwc2014-Est. Belo Horizonte','fwc2014-Est. Cuiabá','fwc2014-Est. Manaus','fwc2014-Est. Recife','fwc2014-Est. Porto Alegre','fwc2014-Est. Fortaleza','fwc2014-Est. Natal','fwc2014-Est. Curitiba'];
    const fwc2014Mapa = ['fwc2014-Mapa 1','fwc2014-Mapa 2','fwc2014-Mapa 3','fwc2014-Mapa 4','fwc2014-Mapa 5','fwc2014-Mapa 6','fwc2014-Mapa 7','fwc2014-Mapa 8','fwc2014-Mapa 9','fwc2014-Mapa 10','fwc2014-Mapa 11','fwc2014-Mapa 12'];
    const wI = []; fwc2014Intro.forEach((id, i) => { if (getState(id) === 'wanted') wI.push(String(i).padStart(2, '0')); });
    const wE = []; fwc2014Estadios.forEach((id, i) => { if (getState(id) === 'wanted') wE.push(String(i + 8).padStart(2, '0')); });
    const wM = []; fwc2014Mapa.forEach((id, i) => { if (getState(id) === 'wanted') wM.push(String(i + 20).padStart(2, '0')); });
    if (wI.length) map['Introdução'] = wI;
    if (wE.length) map['Estádios'] = wE;
    if (wM.length) map['Mapa'] = wM;
  }
  if (currentAlbum === '2006') {
    const fwc2006All = ['fwc2006-Intro Ball','fwc2006-Intro Trophy','fwc2006-Intro Emblem','fwc2006-Intro Mascot','fwc2006-Est. Berlin','fwc2006-Est. Dortmund','fwc2006-Est. Hamburg','fwc2006-Est. Gelsenkirchen','fwc2006-Est. Hannover','fwc2006-Est. Cologne','fwc2006-Est. Leipzig','fwc2006-Est. Nuremberg','fwc2006-Est. Stuttgart','fwc2006-Est. Frankfurt','fwc2006-Extra Fair Play','fwc2006-Extra Panorama','fwc2006-Extra Poster'];
    const wF = []; fwc2006All.forEach((id, i) => { if (getState(id) === 'wanted') wF.push(String(i).padStart(2, '0')); });
    if (wF.length) map['FWC'] = wF;
  }
  if (currentAlbum === '2002') {
    const fwc2002All = ['fwc2002-Intro Troféu','fwc2002-Intro Emblema','fwc2002-Intro Mascote','fwc2002-Intro Pôster','fwc2002-Est. Sapporo','fwc2002-Est. Kashima','fwc2002-Est. Tokyo','fwc2002-Est. Sendai','fwc2002-Est. Niigata','fwc2002-Est. Ibaraki','fwc2002-Est. Oita','fwc2002-Est. Kobe','fwc2002-Est. Yokohama','fwc2002-Est. Shizuoka','fwc2002-Est. Osaka','fwc2002-Est. Miyagi','fwc2002-Est. Nagai','fwc2002-Est. Kawasaki','fwc2002-Est. Daegu','fwc2002-Est. Ulsan','fwc2002-Est. Suwon','fwc2002-Est. Busan','fwc2002-Est. Jeonju','fwc2002-Est. Gwangju'];
    const wF = []; fwc2002All.forEach((id, i) => { if (getState(id) === 'wanted') wF.push(String(i).padStart(2, '0')); });
    if (wF.length) map['FWC'] = wF;
  }
  if (currentAlbum === '1998') {
    const fwc1998All = ['fwc1998-Special World Cup','fwc1998-Special Emblem','fwc1998-Special Mascot','fwc1998-Est. Stade de France','fwc1998-Est. Parc des Princes','fwc1998-Est. Bollaert','fwc1998-Est. Gerland','fwc1998-Est. Geoffroy','fwc1998-Est. Vélodrome','fwc1998-Est. Mosson','fwc1998-Est. Municipal','fwc1998-Est. Lescure','fwc1998-Est. Beaujoire'];
    const wF = []; fwc1998All.forEach((id, i) => { if (getState(id) === 'wanted') wF.push(String(i).padStart(2, '0')); });
    if (wF.length) map['FWC'] = wF;
  }
  if (currentAlbum === '1990') {
    const fwc1990All = ['fwc1990-Intro-1','fwc1990-Intro-2','fwc1990-Intro-3','fwc1990-Intro-4','fwc1990-Ciao-5','fwc1990-Ciao-6','fwc1990-Ciao-7','fwc1990-Ciao-8','fwc1990-Stad-9','fwc1990-Cid-10','fwc1990-Stad-11','fwc1990-Cid-12','fwc1990-Stad-13','fwc1990-Cid-14','fwc1990-Ciao-15','fwc1990-Stad-16','fwc1990-Cid-17','fwc1990-Ciao-26','fwc1990-Stad-18','fwc1990-Cid-19','fwc1990-Stad-20','fwc1990-Cid-21','fwc1990-Stad-22','fwc1990-Cid-23','fwc1990-Stad-24','fwc1990-Cid-25','fwc1990-Ciao-27','fwc1990-Stad-28','fwc1990-Cid-29','fwc1990-Cid-30','fwc1990-Stad-31','fwc1990-Cid-32','fwc1990-Stad-33','fwc1990-Ciao-34','fwc1990-Ciao-35','fwc1990-Cid-36','fwc1990-Stad-37'];
    const wF = []; fwc1990All.forEach((id, i) => { if (getState(id) === 'wanted') wF.push(String(i + 1).padStart(2, '0')); });
    if (wF.length) map['FWC'] = wF;
  }
  if (currentAlbum === '1986') {
    const fwc1986All = fwc1986Special.concat(fwc1986History, fwc1986Stadiums);
    const wF = []; fwc1986All.forEach(s => { if (getState(s.id) === 'wanted') wF.push(String(s.num).padStart(2, '0')); });
    if (wF.length) map['FWC'] = wF;
  }
  if (currentAlbum === '1982') {
    const fwc1982All = fwc1982Special.concat(fwc1982Posters, fwc1982Stadiums);
    const wF = []; fwc1982All.forEach(s => { if (getState(s.id) === 'wanted') wF.push(String(s.num).padStart(2, '0')); });
    if (wF.length) map['FWC'] = wF;
  }
  if (currentAlbum === '1978') {
    const fwc1978All = fwc1978History.concat(fwc1978Stadiums);
    const wF = []; fwc1978All.forEach(s => { if (getState(s.id) === 'wanted') wF.push(String(s.num).padStart(2, '0')); });
    if (wF.length) map['FWC'] = wF;
  }
  if (currentAlbum === '1974') {
    const fwc1974All = fwc1974Special.concat(fwc1974Intro, fwc1974Mascots, fwc1974Stadiums);
    const wF = []; fwc1974All.forEach(s => { if (getState(s.id) === 'wanted') wF.push(String(s.num).padStart(2, '0')); });
    if (wF.length) map['FWC'] = wF;
  }
  if (currentAlbum === '1970') {
    const fwc1970All = fwc1970Special.concat(fwc1970Posters, fwc1970Stadiums);
    const wF = []; fwc1970All.forEach(s => { if (getState(s.id) === 'wanted') wF.push(String(s.num).padStart(2, '0')); });
    if (wF.length) map['FWC'] = wF;
  }
  return map;
}

function getShareText() {
  const map = getMissingByTeam();
  const wantedMap = getWantedByTeam();
  const total = allPlayers.filter(p => getState(p.id) === 'owned').length;
  const totalMissing = Object.values(map).reduce((s, a) => s + a.length, 0);
  const totalWanted = Object.values(wantedMap).reduce((s, a) => s + a.length, 0);
  const albumYear = currentAlbum === '2022' ? '22' : (currentAlbum === '2018' ? '18' : (currentAlbum === '2014' ? '14' : (currentAlbum === '2010' ? '10' : (currentAlbum === '2006' ? '06' : (currentAlbum === '2002' ? '02' : (currentAlbum === '1998' ? '98' : (currentAlbum === '1994' ? '94' : (currentAlbum === '1990' ? '90' : (currentAlbum === '1986' ? '86' : (currentAlbum === '1982' ? '82' : (currentAlbum === '1978' ? '78' : (currentAlbum === '1974' ? '74' : (currentAlbum === '1970' ? '70' : '26')))))))))))));
  if (!totalMissing && !totalWanted) return `Fifarinhas ${albumYear} - Completei todos os cromos! ⚽🏆`;
  const lines = [`Fifarinhas ${albumYear} (${total}/${allPlayers.length} cromos)`];
  if (totalMissing) {
    for (const [team, nums] of Object.entries(map)) {
      lines.push(`${team}: ${nums.join(', ')}`);
    }
  }
  if (totalWanted) {
    lines.push('');
    lines.push('Trocas:');
    for (const [team, nums] of Object.entries(wantedMap)) {
      lines.push(`${team}: ${nums.join(', ')}`);
    }
  }
  return lines.join('\n');
}

function shareWhatsApp() {
  window.open(`https://wa.me/?text=${encodeURIComponent(getShareText())}`, '_blank');
  document.getElementById('shareMenu').classList.remove('show');
}

function shareFacebook() {
  window.open(`https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(getShareText())}`, '_blank');
  document.getElementById('shareMenu').classList.remove('show');
}

function shareTwitter() {
  const text = getShareText().slice(0, 280);
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  document.getElementById('shareMenu').classList.remove('show');
}

function shareTelegram() {
  window.open(`https://t.me/share/url?url=${encodeURIComponent('https://turbosquat.github.io/Fifa-PRO26/')}&text=${encodeURIComponent(getShareText())}`, '_blank');
  document.getElementById('shareMenu').classList.remove('show');
}

function shareEmail() {
  const subject = 'FIFA PRO26 - Cromos em falta';
  const body = getShareText();
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('shareMenu').classList.remove('show');
}

function copyMissingText() {
  const text = getShareText();
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => alert('Copiado!'));
  } else {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    alert('Copiado!');
  }
  document.getElementById('shareMenu').classList.remove('show');
}

function shareMissingPDF() {
  const map = getMissingByTeam();
  const wantedMap = getWantedByTeam();
  const totalOwned = allPlayers.filter(p => getState(p.id) === 'owned').length;
  const totalMissing = Object.values(map).reduce((s, a) => s + a.length, 0);
  const totalWanted = Object.values(wantedMap).reduce((s, a) => s + a.length, 0);
  if (!totalMissing && !totalWanted) { alert('Tens todos os cromos!'); return; }
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>Cromos em falta</title>
  <style>body{font-family:Arial,sans-serif;padding:30px;color:#333}h1{font-size:1.4em;border-bottom:2px solid #e94560;padding-bottom:8px;color:#e94560}h2{font-size:1.1em;color:#2ecc71;margin:20px 0 10px;border-bottom:1px solid #ddd;padding-bottom:6px}.count{font-size:0.85em;color:#888;margin-bottom:20px}table{width:100%;border-collapse:collapse}td{padding:8px 12px;border-bottom:1px solid #eee;font-size:0.9em}td:first-child{font-weight:bold;white-space:nowrap;width:180px}td:last-child{color:#555}@media print{body{padding:15px}}</style>
  </head><body><h1>Cromos em falta - FIFA PRO26</h1><p class="count">${totalOwned}/${allPlayers.length} cromos | ${totalMissing} em falta | ${totalWanted} para troca</p>`);
  if (totalMissing) {
    win.document.write('<table>');
    for (const [team, nums] of Object.entries(map)) {
      win.document.write(`<tr><td>${team}</td><td>${nums.join(', ')}</td></tr>`);
    }
    win.document.write('</table>');
  }
  if (totalWanted) {
    win.document.write('<h2>Trocas:</h2><table>');
    for (const [team, nums] of Object.entries(wantedMap)) {
      win.document.write(`<tr><td>${team}</td><td>${nums.join(', ')}</td></tr>`);
    }
    win.document.write('</table>');
  }
  win.document.write('</body></html>');
  win.document.close();
  setTimeout(() => { win.print(); }, 500);
  document.getElementById('shareMenu').classList.remove('show');
}

document.addEventListener('click', function(e) {
  if (!e.target.classList.contains('share-btn') && !e.target.closest('.share-menu')) {
    document.getElementById('shareMenu').classList.remove('show');
  }
});

async function loadAdminPanel() {
  const el = document.getElementById('adminContent');
  if (!el) return;
  try {
    const [accSnap, userSnap, bannedSnap] = await Promise.all([
      db.collection('accounts').get(),
      db.collection('users').get(),
      db.collection('banned').get()
    ]);
    const userMap = {};
    userSnap.docs.forEach(d => { userMap[d.id] = d.data(); });
    const users = [];
    const statesField = currentAlbum === '2022' ? 'playerStates2022' : (currentAlbum === '2018' ? 'playerStates2018' : (currentAlbum === '2014' ? 'playerStates2014' : (currentAlbum === '2010' ? 'playerStates2010' : (currentAlbum === '2006' ? 'playerStates2006' : (currentAlbum === '2002' ? 'playerStates2002' : (currentAlbum === '1998' ? 'playerStates1998' : (currentAlbum === '1994' ? 'playerStates1994' : (currentAlbum === '1990' ? 'playerStates1990' : (currentAlbum === '1986' ? 'playerStates1986' : (currentAlbum === '1982' ? 'playerStates1982' : (currentAlbum === '1978' ? 'playerStates1978' : (currentAlbum === '1974' ? 'playerStates1974' : (currentAlbum === '1970' ? 'playerStates1970' : 'playerStates')))))))))))));
    const albumLabel = currentAlbum;
    accSnap.docs.forEach(d => {
      const acc = d.data();
      const ud = userMap[d.id] || {};
      const states = ud[statesField] || {};
      const owned = Object.keys(states).filter(k => states[k] === 'owned' && !k.startsWith('update-')).length;
      const wanted = Object.values(states).filter(v => v === 'wanted').length;
      const updOwned = Object.keys(states).filter(k => k.startsWith('update-') && states[k] === 'owned').length;
      const total = Object.keys(states).length;
      users.push({
        key: d.id,
        name: ud.displayName || acc.name || 'Sem nome',
        email: acc.email || '',
        photoURL: ud.photoURL || '',
        owned, wanted, total, updOwned,
        lastUpdated: ud.lastUpdated,
        isAdmin: acc.isAdmin || false
      });
    });
    users.sort((a, b) => {
      if (!a.lastUpdated) return 1;
      if (!b.lastUpdated) return -1;
      return b.lastUpdated.seconds - a.lastUpdated.seconds;
    });
    const totalOwned = users.reduce((s, u) => s + u.owned, 0);
    const totalWanted = users.reduce((s, u) => s + u.wanted, 0);
    let h = `<div style="display:flex;justify-content:center;margin-bottom:16px;">
      <div style="background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;padding:10px 24px;text-align:center;">
        <div style="font-size:1.4em;font-weight:800;color:var(--gold);">${users.length}</div>
        <div style="font-size:0.75em;color:var(--muted);">Contas — Álbum ${albumLabel}</div>
      </div>
    </div>`;
    h += '<div style="display:flex;flex-direction:column;gap:8px;">';
    users.forEach(u => {
      const timeStr = u.lastUpdated ? new Date(u.lastUpdated.seconds * 1000).toLocaleDateString('pt-PT') : 'Sem atividade';
      const safeName = escHtml(u.name);
      const safeEmail = escHtml(u.email);
      const safeKey = escHtml(u.key);
      const safePhoto = u.photoURL ? escHtml(u.photoURL) : '';
      h += `<div style="display:flex;align-items:center;gap:10px;padding:10px;background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;flex-wrap:wrap;cursor:pointer;" onclick="adminShowUser('${safeKey}','${safeName.replace(/'/g,"\\'")}','${safeEmail.replace(/'/g,"\\'")}','${safePhoto}','${escHtml(timeStr)}',${u.isAdmin},${u.owned},${u.wanted},${u.updOwned},${u.total})">
        ${u.photoURL ? `<img src="${safePhoto}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;">` : `<div style="width:32px;height:32px;border-radius:50%;background:${u.isAdmin ? 'var(--gold)' : 'var(--accent)'};display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:0.8em;">${safeName.charAt(0).toUpperCase()}</div>`}
        <div style="flex:1;min-width:0;text-align:left;">
          <div style="font-weight:600;font-size:0.85em;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${safeName}${u.isAdmin ? ' ⭐' : ''}</div>
          <div style="font-size:0.7em;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${safeEmail}</div>
          <div style="font-size:0.65em;color:var(--muted);">Atividade: ${escHtml(timeStr)}</div>
        </div>
        <div style="display:flex;gap:8px;font-size:0.75em;flex-shrink:0;">
          <span style="color:#f39c12;" title="Atualização">🔁 ${u.updOwned}</span>
          <span style="color:#e94560;" title="Tenho">✅${u.owned}</span>
          <span style="color:#2ecc71;" title="Troca">🔄${u.wanted}</span>
        </div>
      </div>`;
    });
    h += '</div>';
    h += `<div style="margin-top:20px;"><button onclick="adminCreateNew()" style="width:100%;background:rgba(233,69,96,0.15);color:#e94560;border:1px solid rgba(233,69,96,0.3);padding:12px 24px;border-radius:10px;font-size:1em;cursor:pointer;font-weight:600;">🔑 Criar novo admin</button></div>`;
    if (bannedSnap.docs.length > 0) {
      h += `<div style="margin-top:24px;margin-bottom:12px;font-weight:700;color:#e94560;font-size:0.9em;">🚫 Contas Banidas (${bannedSnap.docs.length})</div>`;
      h += '<div style="display:flex;flex-direction:column;gap:8px;">';
      bannedSnap.docs.forEach(d => {
        const b = d.data();
        const bTime = b.bannedAt ? new Date(b.bannedAt.seconds * 1000).toLocaleDateString('pt-PT') : '—';
        h += `<div style="display:flex;align-items:center;gap:10px;padding:10px;background:rgba(233,69,96,0.08);border:1px solid rgba(233,69,96,0.2);border-radius:10px;flex-wrap:wrap;">
          <div style="width:32px;height:32px;border-radius:50%;background:rgba(233,69,96,0.2);display:flex;align-items:center;justify-content:center;font-size:0.85em;">🚫</div>
          <div style="flex:1;min-width:0;text-align:left;">
            <div style="font-weight:600;font-size:0.85em;color:#e94560;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${b.email || d.id}</div>
            <div style="font-size:0.65em;color:var(--muted);">Banido em: ${bTime}</div>
          </div>
          <button onclick="adminUnbanUser('${d.id}','${b.email || ''}')" style="background:rgba(46,204,113,0.15);color:#2ecc71;border:1px solid rgba(46,204,113,0.3);padding:5px 8px;border-radius:6px;font-size:0.7em;cursor:pointer;flex-shrink:0;">✅ Desbanir</button>
        </div>`;
      });
      h += '</div>';
    }
    el.innerHTML = h;
  } catch (e) {
    el.innerHTML = '<div style="color:#e94560;">Erro ao carregar: ' + e.message + '</div>';
  }
}

function adminShowUser(key, name, email, photoURL, timeStr, isAdmin, owned, wanted, updOwned, total) {
  const el = document.getElementById('adminContent');
  if (!el) return;
  const pct = total > 0 ? Math.floor((owned / total) * 100) : 0;
  el.innerHTML = `<div style="padding:8px 0;">
    <button onclick="loadAdminPanel()" style="background:rgba(255,255,255,0.08);color:var(--text);border:1px solid var(--border);padding:8px 16px;border-radius:8px;cursor:pointer;font-size:0.85em;margin-bottom:16px;">← Voltar</button>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
      ${photoURL ? `<img src="${photoURL}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;">` : `<div style="width:48px;height:48px;border-radius:50%;background:${isAdmin ? 'var(--gold)' : 'var(--accent)'};display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:1.2em;">${name.charAt(0).toUpperCase()}</div>`}
      <div style="text-align:left;">
        <div style="font-weight:700;font-size:1em;color:var(--text);">${name}${isAdmin ? ' ⭐' : ''}</div>
        <div style="font-size:0.8em;color:var(--muted);">${email}</div>
        <div style="font-size:0.75em;color:var(--muted);">Última atividade: ${timeStr}</div>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <button onclick="adminViewAccount('${key}')" style="width:100%;background:linear-gradient(135deg,rgba(212,175,55,0.15),rgba(212,175,55,0.05));color:var(--gold);border:1px solid rgba(212,175,55,0.3);padding:16px;border-radius:12px;cursor:pointer;text-align:left;font-size:0.95em;font-weight:600;">
        📋 Dados da conta
      </button>
      <button onclick="adminViewAll('${key}','${name.replace(/'/g,"\\'")}')" style="width:100%;background:linear-gradient(135deg,rgba(46,204,113,0.15),rgba(46,204,113,0.05));color:#2ecc71;border:1px solid rgba(46,204,113,0.3);padding:16px;border-radius:12px;cursor:pointer;text-align:left;font-size:0.95em;font-weight:600;">
        👁️ Ver tudo (só leitura)
      </button>
      ${isAdmin ? `<button onclick="adminDeleteUser('${key}','${name.replace(/'/g,"\\'")}')" style="width:100%;background:rgba(233,69,96,0.1);color:var(--gold);border:1px solid rgba(233,69,96,0.3);padding:16px;border-radius:12px;cursor:pointer;text-align:left;font-size:0.95em;font-weight:600;">⭐ Remover admin</button>` : `<button onclick="adminDeleteUser('${key}','${name.replace(/'/g,"\\'")}')" style="width:100%;background:rgba(233,69,96,0.1);color:#e94560;border:1px solid rgba(233,69,96,0.3);padding:16px;border-radius:12px;cursor:pointer;text-align:left;font-size:0.95em;font-weight:600;">🚫 Expulsar utilizador</button>`}
    </div>
  </div>`;
}

async function adminViewAccount(key) {
  const el = document.getElementById('adminContent');
  if (!el) return;
  el.innerHTML = '<div style="color:var(--muted);padding:20px;">A carregar dados da conta...</div>';
  try {
    const accDoc = await db.collection('accounts').doc(key).get();
    const userDoc = await db.collection('users').doc(key).get();
    const acc = accDoc.exists ? accDoc.data() : {};
    const ud = userDoc.exists ? userDoc.data() : {};
    const created = acc.createdAt ? new Date(acc.createdAt.seconds * 1000).toLocaleString('pt-PT') : '—';
    const lastUpd = ud.lastUpdated ? new Date(ud.lastUpdated.seconds * 1000).toLocaleString('pt-PT') : '—';
    el.innerHTML = `<div style="padding:8px 0;">
      <button onclick="adminShowUser('${escHtml(key)}','${escHtml(ud.displayName||acc.name||'').replace(/'/g,"\\'")}','${escHtml(acc.email||'').replace(/'/g,"\\'")}','${escHtml(ud.photoURL||'')}','—',${acc.isAdmin||false},0,0,0,0)" style="background:rgba(255,255,255,0.08);color:var(--text);border:1px solid var(--border);padding:8px 16px;border-radius:8px;cursor:pointer;font-size:0.85em;margin-bottom:16px;">← Voltar</button>
      <h3 style="color:var(--gold);margin-bottom:16px;">📋 Dados da Conta</h3>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;padding:12px;">
          <div style="font-size:0.7em;color:var(--muted);margin-bottom:4px;">Nome</div>
          <div style="font-weight:600;color:var(--text);">${ud.displayName || acc.name || '—'}</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;padding:12px;">
          <div style="font-size:0.7em;color:var(--muted);margin-bottom:4px;">Email</div>
          <div style="font-weight:600;color:var(--text);">${acc.email || '—'}</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;padding:12px;">
          <div style="font-size:0.7em;color:var(--muted);margin-bottom:4px;">UID Firebase</div>
          <div style="font-weight:600;color:var(--text);font-size:0.8em;word-break:break-all;">${key}</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;padding:12px;">
          <div style="font-size:0.7em;color:var(--muted);margin-bottom:4px;">Admin</div>
          <div style="font-weight:600;color:var(--text);">${acc.isAdmin ? '⭐ Sim' : 'Não'}</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;padding:12px;">
          <div style="font-size:0.7em;color:var(--muted);margin-bottom:4px;">Conta criada</div>
          <div style="font-weight:600;color:var(--text);">${created}</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;padding:12px;">
          <div style="font-size:0.7em;color:var(--muted);margin-bottom:4px;">Última atividade</div>
          <div style="font-weight:600;color:var(--text);">${lastUpd}</div>
        </div>
        ${ud.photoURL ? `<div style="background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center;">
          <div style="font-size:0.7em;color:var(--muted);margin-bottom:8px;">Foto de perfil</div>
          <img src="${ud.photoURL}" style="width:64px;height:64px;border-radius:50%;object-fit:cover;">
        </div>` : ''}
      </div>
    </div>`;
  } catch (e) {
    el.innerHTML = '<div style="color:#e94560;">Erro: ' + e.message + '</div>';
  }
}

let adminViewUnsub = null;

async function adminViewAll(key, name) {
  const el = document.getElementById('adminContent');
  if (!el) return;
  el.innerHTML = '<div style="color:var(--muted);padding:20px;">A carregar coleção completa...</div>';
  try {
    const statesField = currentAlbum === '2022' ? 'playerStates2022' : (currentAlbum === '2018' ? 'playerStates2018' : (currentAlbum === '2014' ? 'playerStates2014' : (currentAlbum === '2010' ? 'playerStates2010' : (currentAlbum === '2006' ? 'playerStates2006' : (currentAlbum === '2002' ? 'playerStates2002' : (currentAlbum === '1998' ? 'playerStates1998' : (currentAlbum === '1994' ? 'playerStates1994' : (currentAlbum === '1990' ? 'playerStates1990' : (currentAlbum === '1986' ? 'playerStates1986' : (currentAlbum === '1982' ? 'playerStates1982' : (currentAlbum === '1978' ? 'playerStates1978' : (currentAlbum === '1974' ? 'playerStates1974' : (currentAlbum === '1970' ? 'playerStates1970' : 'playerStates')))))))))))));
    const saved = JSON.parse(JSON.stringify(playerStates));
    viewOnlyUser = { key, name, states: {}, savedPlayerStates: saved };
    currentTab = 'all';
    currentGroup = 'all';
    document.getElementById('search').value = '';
    setPage('inicio');
    if (adminViewUnsub) adminViewUnsub();
    adminViewUnsub = db.collection('users').doc(key).onSnapshot(doc => {
      if (!viewOnlyUser) { if (adminViewUnsub) { adminViewUnsub(); adminViewUnsub = null; } return; }
      const ud = doc.exists ? doc.data() : {};
      const states = ud[statesField] || {};
      viewOnlyUser.states = states;
      Object.keys(playerStates).forEach(k => delete playerStates[k]);
      Object.assign(playerStates, states);
      render();
    });
  } catch (e) {
    viewOnlyUser = null;
    if (adminViewUnsub) { adminViewUnsub(); adminViewUnsub = null; }
    el.innerHTML = '<div style="color:#e94560;">Erro: ' + e.message + '</div>';
  }
}

function adminExitViewOnly() {
  if (adminViewUnsub) { adminViewUnsub(); adminViewUnsub = null; }
  if (viewOnlyUser && viewOnlyUser.savedPlayerStates) {
    Object.keys(playerStates).forEach(k => delete playerStates[k]);
    Object.assign(playerStates, viewOnlyUser.savedPlayerStates);
  }
  viewOnlyUser = null;
  currentPage = 'admin';
  setPage('admin');
}

async function adminDeleteUser(key, name) {
  if (!confirm(`Expulsar "${name}" e apagar todos os seus dados?`)) return;
  try {
    const accDoc = await db.collection('accounts').doc(key).get();
    const email = accDoc.exists ? accDoc.data().email : '';
    if (key === currentUser.key) {
      const newAdminEmail = prompt('Estás a eliminar a tua conta admin.\nInsere o email de um novo admin para manter o acesso:');
      if (!newAdminEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newAdminEmail)) {
        alert('Email inválido. Operação cancelada.');
        return;
      }
      const newAdminKey = newAdminEmail.trim().toLowerCase().replace(/[^a-z0-9]/g, '_');
      adminEmails.push(newAdminEmail.trim().toLowerCase());
      await db.collection('config').doc('admins').set({ emails: adminEmails });
      await db.collection('accounts').doc(newAdminKey).set({ isAdmin: true }, { merge: true }).catch(()=>{});
      await db.collection('users').doc(newAdminKey).set({ isAdmin: true }, { merge: true }).catch(()=>{});
      alert(`${newAdminEmail} foi promovido a admin!`);
    }
    await db.collection('users').doc(key).delete();
    await db.collection('accounts').doc(key).delete();
    if (email) {
      await db.collection('banned').doc(key).set({ email: email, bannedAt: firebase.firestore.FieldValue.serverTimestamp() });
    }
    if (key === currentUser.key) {
      currentUser = null;
      localStorage.removeItem('fh_session');
      location.reload();
      return;
    }
    alert('Utilizador expulso!');
    loadAdminPanel();
  } catch (e) {
    alert('Erro ao apagar: ' + e.message);
  }
}

async function adminUnbanUser(key, email) {
  if (!confirm(`Desbanir "${email || key}"? Poderá voltar a criar conta.`)) return;
  try {
    await db.collection('banned').doc(key).delete();
    alert('Conta desbanida! Pode voltar a criar conta.');
    loadAdminPanel();
  } catch (e) {
    alert('Erro ao desbanir: ' + e.message);
  }
}

async function adminCreateNew() {
  const email = prompt('Email do novo admin:');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { alert('Email inválido.'); return; }
  const name = prompt('Nome do novo admin:');
  if (!name || !name.trim()) { alert('Nome obrigatório.'); return; }
  const pass = prompt('Palavra-passe (mínimo 8 caracteres):');
  if (!pass || pass.length < 8) { alert('Palavra-passe inválida. Mínimo 8 caracteres.'); return; }
  const key = email.trim().toLowerCase().replace(/[^a-z0-9]/g, '_');
  try {
    const exists = await db.collection('accounts').doc(key).get();
    if (exists.exists) { alert('Email já está registado.'); return; }
    const hashed = await hashPass(pass);
    await db.collection('accounts').doc(key).set({ pass: hashed, name: name.trim(), email: email.trim().toLowerCase(), isAdmin: true });
    adminEmails.push(email.trim().toLowerCase());
    await db.collection('config').doc('admins').set({ emails: adminEmails });
    alert(`${name.trim()} foi criado como admin!`);
    loadAdminPanel();
  } catch (e) {
    alert('Algo correu mal. Tenta novamente.');
  }
}

checkSession();

function scrollGroupBar(px) {
  var bar = document.getElementById('groupBar');
  bar.scrollBy({ left: px, behavior: 'smooth' });
  setTimeout(updateGroupArrows, 350);
}
function updateGroupArrows() {
  var bar = document.getElementById('groupBar');
  var l = document.getElementById('groupArrowL');
  var r = document.getElementById('groupArrowR');
  if (!bar || !l || !r) return;
  l.classList.toggle('hidden', bar.scrollLeft <= 2);
  r.classList.toggle('hidden', bar.scrollLeft + bar.clientWidth >= bar.scrollWidth - 2);
}
document.getElementById('groupBar').addEventListener('scroll', updateGroupArrows);

const wcAlbums = [
  { name: 'FIFA World Cup 2026 Panini', year: '2026', host: 'EUA · Canadá · México', teams: 48, total: 980, users: 10908, img: 'https://static.wikia.nocookie.net/football-sticker-album/images/6/61/Wc26.jpg/revision/latest?cb=20260426161508' },
  { name: 'FIFA Club World Cup 2025 Panini', year: 'cwc2025', host: 'EUA', teams: 32, total: 550, users: 0, img: 'https://www.laststicker.com/i/album/11090.jpg' },
  { name: 'Futebol 2025-2026 Panini', year: 'liga2025', host: 'Portugal', teams: 18, total: 497, users: 0, img: 'https://www.cromos.pt/storage/uploads/collections/8SAsKzSQphLZYveZEluzCeDrq6GNeu0XszRAo4SR.jpg' },
  { name: 'FIFA World Cup 2022 Panini', year: '2022', host: 'Qatar', teams: 32, total: 670, users: 8420, img: 'https://static.wikia.nocookie.net/football-sticker-album/images/4/49/2022_World_Cup_Album.jpg/revision/latest?cb=20240127041012' },
  { name: 'FIFA World Cup 2018 Panini', year: '2018', host: 'Rússia', teams: 32, total: 682, users: 6310, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/2018-panini-album-400x400.png' },
  { name: 'FIFA World Cup 2014 Panini', year: '2014', host: 'Brasil', teams: 32, total: 640, users: 5750, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/2014-panini-album-400x400.png' },
  { name: 'FIFA World Cup 2010 Panini', year: '2010', host: 'África do Sul', teams: 32, total: 640, users: 4920, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/2010-panini-album-400x400.png' },
  { name: 'FIFA World Cup 2006 Panini', year: '2006', host: 'Alemanha', teams: 32, total: 605, users: 3800, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/2006-panini-album-400x400.png' },
  { name: 'FIFA World Cup 2002 Panini', year: '2002', host: 'Coreia · Japão', teams: 32, total: 576, users: 3200, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/2002-panini-album-400x400.png' },
  { name: 'FIFA World Cup 1998 Panini', year: '1998', host: 'França', teams: 32, total: 560, users: 2800, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/1998-panini-album-400x400.png' },
  { name: 'FIFA World Cup 1994 Panini', year: '1994', host: 'EUA', teams: 24, total: 444, users: 2400, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/1994-panini-album-400x400.png' },
  { name: 'FIFA World Cup 1990 Panini', year: '1990', host: 'Itália', teams: 24, total: 448, users: 2100, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/1990-panini-album-400x400.png' },
  { name: 'FIFA World Cup 1986 Panini', year: '1986', host: 'México', teams: 24, total: 427, users: 1900, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/1986-panini-album-400x400.png' },
  { name: 'FIFA World Cup 1982 Panini', year: '1982', host: 'Espanha', teams: 24, total: 427, users: 1700, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/1982-panini-album-400x400.png' },
  { name: 'FIFA World Cup 1978 Panini', year: '1978', host: 'Argentina', teams: 16, total: 400, users: 1400, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/1978-panini-album-400x400.png' },
  { name: 'FIFA World Cup 1974 Panini', year: '1974', host: 'Alemanha Ocidental', teams: 16, total: 400, users: 1200, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/1974-panini-album-400x400.png' },
  { name: 'FIFA World Cup 1970 Panini', year: '1970', host: 'México', teams: 16, total: 271, users: 1100, img: 'https://www.cfclassics.co/images/media/stickers/panini/wc/1970-panini-album-400x400.png' },
];

function switchAlbum(year) {
  if (year === currentAlbum) { toggleAlbumDropdown(); return; }
  currentAlbum = year;
  _groupBarAlbum = '';
  loadActivePlayerStates();
  if (year === '2026') teams = teams2026;
  else if (year === 'cwc2025') teams = {};
  else if (year === 'liga2025') teams = {};
  else if (year === '2022') teams = teams2022;
  else if (year === '2014') teams = teams2014;
  else if (year === '2010') teams = teams2010;
  else if (year === '2006') teams = teams2006;
  else if (year === '2002') teams = teams2002;
  else if (year === '1998') teams = teams1998;
  else if (year === '1994') teams = teams1994;
  else if (year === '1990') teams = teams1990;
  else if (year === '1986') teams = teams1986;
  else if (year === '1982') teams = teams1982;
  else if (year === '1978') teams = teams1978;
  else if (year === '1974') teams = teams1974;
  else if (year === '1970') teams = teams1970;
  else teams = teams2018;
  allPlayers = [];
  currentGroup = 'all';
  currentTab = 'all';
  classifExpanded = null;
  showCoca = year === '2026';
  updateHeaderAlbum();
  toggleAlbumDropdown();
  document.getElementById('main').innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--muted);font-size:1.1em;"><div style="font-size:2em;margin-bottom:12px;">⏳</div>A carregar...</div>';
  renderGroupBar();
  init();
}

function updateHeaderAlbum() {
  const h1 = document.getElementById('loginTitle');
  if (h1) {
    if (currentAlbum === '2026') h1.innerHTML = 'FIFA<span> RINHAS 26</span>';
    else if (currentAlbum === '2022') h1.innerHTML = 'FIFA<span> RINHAS 22</span>';
    else if (currentAlbum === '2018') h1.innerHTML = 'FIFA<span> RINHAS 18</span>';
    else if (currentAlbum === '2014') h1.innerHTML = 'FIFA<span> RINHAS 14</span>';
    else if (currentAlbum === '2010') h1.innerHTML = 'FIFA<span> RINHAS 10</span>';
    else if (currentAlbum === '2006') h1.innerHTML = 'FIFA<span> RINHAS 06</span>';
    else if (currentAlbum === '2002') h1.innerHTML = 'FIFA<span> RINHAS 02</span>';
    else if (currentAlbum === '1998') h1.innerHTML = 'FIFA<span> RINHAS 98</span>';
    else if (currentAlbum === '1994') h1.innerHTML = 'FIFA<span> RINHAS 94</span>';
    else if (currentAlbum === '1990') h1.innerHTML = 'FIFA<span> RINHAS 90</span>';
    else if (currentAlbum === '1986') h1.innerHTML = 'FIFA<span> RINHAS 86</span>';
    else if (currentAlbum === '1982') h1.innerHTML = 'FIFA<span> RINHAS 82</span>';
    else if (currentAlbum === '1978') h1.innerHTML = 'FIFA<span> RINHAS 78</span>';
    else if (currentAlbum === '1974') h1.innerHTML = 'FIFA<span> RINHAS 74</span>';
    else if (currentAlbum === '1970') h1.innerHTML = 'FIFA<span> RINHAS 70</span>';
    else if (currentAlbum === 'cwc2025') h1.innerHTML = 'FIFA<span> RINHAS CWC</span>';
    else if (currentAlbum === 'liga2025') h1.innerHTML = 'FIFA<span> RINHAS LIGA</span>';
    else h1.innerHTML = 'FIFA<span> RINHAS 26</span>';
  }
}

function toggleAlbumDropdown() {
  const dd = document.getElementById('albumDropdown');
  const arrow = document.getElementById('albumArrow');
  const isOpen = dd.style.display === 'block';
  dd.style.display = isOpen ? 'none' : 'block';
  if (arrow) arrow.classList.toggle('open', !isOpen);
  if (!isOpen) buildAlbumList();
}

function buildAlbumList() {
  const el = document.getElementById('albumList');
  if (!el) return;
  let h = '';
  wcAlbums.forEach(a => {
    const isCurrent = a.year === currentAlbum;
    const activeStates = a.year === '2026' ? _states2026 : (a.year === 'cwc2025' ? _statesCwc2025 : (a.year === 'liga2025' ? _statesLiga2025 : (a.year === '2022' ? _states2022 : (a.year === '2018' ? _states2018 : (a.year === '2014' ? _states2014 : (a.year === '2010' ? _states2010 : (a.year === '2006' ? _states2006 : (a.year === '2002' ? _states2002 : (a.year === '1998' ? _states1998 : (a.year === '1994' ? _states1994 : (a.year === '1990' ? _states1990 : (a.year === '1986' ? _states1986 : (a.year === '1982' ? _states1982 : (a.year === '1978' ? _states1978 : (a.year === '1974' ? _states1974 : (a.year === '1970' ? _states1970 : {})))))))))))))));
    let owned = 0;
    let albumTotal = a.total;
    if (a.year === '2026' && isCurrent && allPlayers && allPlayers.length > 0) {
      allPlayers.forEach(p => {
        if (p.pos === 'coca') return;
        if (p.pos === 'update') return;
        var st = activeStates[p.id];
        if (p.pos === 'GR' || p.pos === 'ZAG' || p.pos === 'MD' || p.pos === 'AT') {
          var parts = p.id.split('-');
          var playerIdx = parseInt(parts[parts.length - 1]);
          var teamPos = playerIdx <= 10 ? playerIdx + 2 : playerIdx + 3;
          const updKey = updateLookup.get(p.team + '|' + teamPos);
          if (updKey != null) {
            var updSt = activeStates['update-' + updKey];
            if (st === 'wanted' || updSt === 'wanted') { /* wanted takes priority */ }
            else if (st === 'owned' || updSt === 'owned') { owned++; return; }
          } else {
            if (st === 'owned') { owned++; return; }
          }
        } else {
          if (st === 'owned') { owned++; return; }
        }
      });
    } else {
      if (a.year === '2026' && currentUser && activeStates) {
        owned = Object.keys(activeStates).filter(k => activeStates[k] === 'owned' && !k.startsWith('coca-') && !k.startsWith('update-')).length;
        updateStickers.forEach(u => {
          if (activeStates['update-' + u.num] === 'owned') {
            const origKey = updateToOriginalKey.get(u.num);
            if (!origKey || activeStates[origKey] !== 'owned') owned++;
          }
        });
      } else {
        owned = currentUser && activeStates ? Object.keys(activeStates).filter(k => activeStates[k] === 'owned' && !k.startsWith('coca-')).length : 0;
      }
    }
    if (owned > albumTotal) owned = albumTotal;
    const pct = albumTotal > 0 ? Math.floor((owned / albumTotal) * 100) : 0;
    const thumb = a.img
      ? '<img src="' + a.img + '" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" onerror="this.style.display=\'none\';this.parentElement.innerHTML=\'<span style=font-size:1.6em>⚽</span>\'">'
      : '<span style="font-size:1.6em">⚽</span>';
    const canSwitch = a.year === '2026' || a.year === 'cwc2025' || a.year === 'liga2025' || a.year === '2022' || a.year === '2018' || a.year === '2014' || a.year === '2010' || a.year === '2006' || a.year === '2002' || a.year === '1998' || a.year === '1994' || a.year === '1990' || a.year === '1986' || a.year === '1982' || a.year === '1978' || a.year === '1974' || a.year === '1970';
    const clickAction = canSwitch ? "switchAlbum('" + a.year + "')" : "alert('Álbum " + a.year + " — Em breve!')";
    h += '<div class="album-opt ' + (isCurrent ? 'current' : '') + '" onclick="' + clickAction + '">'
      + '<div class="album-thumb">' + thumb + '</div>'
      + '<div class="album-body" style="position:relative;">'
      + '<div class="name">' + a.name + '</div>'
      + '<div class="host">' + a.host + ' · ' + a.teams + ' seleções</div>'
      + '<div class="progress-row">'
      + '<div class="progress-bar"><div class="fill" style="width:' + pct + '%"></div></div>'
      + '<span class="progress-text">' + owned + ' / ' + albumTotal + ' Cromos</span>'
      + '</div>'
      + '<div class="pct">' + pct + '%</div>'
      + '</div>'
      + '</div>';
  });
  el.innerHTML = h;
}

function refreshAlbumDropdownIfOpen() {
  const dd = document.getElementById('albumDropdown');
  if (dd && dd.style.display === 'block') buildAlbumList();
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.brand') && !e.target.closest('#albumDropdown')) {
    const dd = document.getElementById('albumDropdown');
    const arrow = document.getElementById('albumArrow');
    if (dd) dd.style.display = 'none';
    if (arrow) arrow.classList.remove('open');
  }
});

function escHtml(s) {
  const d = document.createElement('div');
  d.textContent = s || '';
  return d.innerHTML;
}

const wc2026Groups = {
  "A": ["México","Sudáfrica","Coreia do Sul","República Tcheca"],
  "B": ["Canadá","Bósnia e Herzegovina","Catar","Suíça"],
  "C": ["Brasil","Marrocos","Haití","Escócia"],
  "D": ["Estados Unidos","Paraguai","Austrália","Turquia"],
  "E": ["Alemanha","Curaçao","Costa do Marfim","Equador"],
  "F": ["Países Baixos","Japão","Suécia","Tunísia"],
  "G": ["Bélgica","Egito","Irã","Nova Zelândia"],
  "H": ["Espanha","Cabo Verde","Arábia Saudita","Uruguai"],
  "I": ["França","Senegal","Iraque","Noruega"],
  "J": ["Argentina","Argélia","Áustria","Jordânia"],
  "K": ["Portugal","Congo DR","Uzbequistão","Colômbia"],
  "L": ["Inglaterra","Croácia","Gana","Panamá"]
};

const updateToOriginalKey = new Map();
updateStickers.forEach(u => {
  for (const [grp, teams] of Object.entries(wc2026Groups)) {
    if (teams.includes(u.team)) {
      const playerIdx = u.replacedNum <= 12 ? u.replacedNum - 2 : u.replacedNum - 3;
      updateToOriginalKey.set(u.num, grp + '-' + u.team + '-' + playerIdx);
      break;
    }
  }
});

const wc2026Matches = [
  {g:"A",h:"México",a:"Sudáfrica",hg:2,ag:0,played:true,day:"11 Jun",time:"21:00",stadium:"Azteca",goals:[{p:"Quiñones",m:"9'",t:"México"},{p:"Jiménez",m:"67'",t:"México"}]},
  {g:"A",h:"Coreia do Sul",a:"República Tcheca",hg:2,ag:1,played:true,day:"11 Jun",time:"23:30",stadium:"Guadalajara",goals:[{p:"Hwang In-beom",m:"67'",t:"Coreia do Sul"},{p:"Oh Hyeon-gyu",m:"80'",t:"Coreia do Sul"},{p:"Krejčí",m:"59'",t:"República Tcheca"}]},
  {g:"B",h:"Canadá",a:"Bósnia e Herzegovina",hg:1,ag:1,played:true,day:"12 Jun",time:"18:00",stadium:"Toronto",goals:[{p:"Larin",m:"78'",t:"Canadá"},{p:"Lukić",m:"21'",t:"Bósnia e Herzegovina"}]},
  {g:"D",h:"Estados Unidos",a:"Paraguai",hg:4,ag:1,played:true,day:"12 Jun",time:"21:00",stadium:"Los Angeles",goals:[{p:"Bobadilla",m:"7' o.g.",t:"Estados Unidos"},{p:"Balogun",m:"31'",t:"Estados Unidos"},{p:"Balogun",m:"45+5'",t:"Estados Unidos"},{p:"Maurício",m:"73'",t:"Paraguai"},{p:"Reyna",m:"90+8'",t:"Estados Unidos"}]},
  {g:"B",h:"Catar",a:"Suíça",hg:1,ag:1,played:true,day:"13 Jun",time:"18:00",stadium:"San Francisco",goals:[{p:"Muheim",m:"90+4' o.g.",t:"Catar"},{p:"Embolo",m:"17' pen",t:"Suíça"}]},
  {g:"C",h:"Brasil",a:"Marrocos",hg:1,ag:1,played:true,day:"13 Jun",time:"21:00",stadium:"New York",goals:[{p:"Saibari",m:"21'",t:"Marrocos"},{p:"Vinícius",m:"32'",t:"Brasil"}]},
  {g:"C",h:"Haití",a:"Escócia",hg:0,ag:1,played:true,day:"13 Jun",time:"21:00",stadium:"Boston",goals:[{p:"McGinn",m:"28'",t:"Escócia"}]},
  {g:"D",h:"Austrália",a:"Turquia",hg:2,ag:0,played:true,day:"13 Jun",time:"18:00",stadium:"Vancouver",goals:[{p:"Irankunda",m:"27'",t:"Austrália"},{p:"Metcalfe",m:"75'",t:"Austrália"}]},
  {g:"E",h:"Alemanha",a:"Curaçao",hg:7,ag:1,played:true,day:"14 Jun",time:"18:00",stadium:"Houston",goals:[{p:"Comenencia",m:"21'",t:"Curaçao"},{p:"Nmecha",m:"6'",t:"Alemanha"},{p:"Schlotterbeck",m:"38'",t:"Alemanha"},{p:"Havertz",m:"45+5' pen",t:"Alemanha"},{p:"Musiala",m:"47'",t:"Alemanha"},{p:"Brown",m:"68'",t:"Alemanha"},{p:"Undav",m:"78'",t:"Alemanha"},{p:"Havertz",m:"88'",t:"Alemanha"}]},
  {g:"F",h:"Países Baixos",a:"Japão",hg:2,ag:2,played:true,day:"14 Jun",time:"21:00",stadium:"Dallas",goals:[{p:"Van Dijk",m:"51'",t:"Países Baixos"},{p:"Summerville",m:"64'",t:"Países Baixos"},{p:"Nakamura",m:"57'",t:"Japão"},{p:"Kamada",m:"88'",t:"Japão"}]},
  {g:"E",h:"Costa do Marfim",a:"Equador",hg:1,ag:0,played:true,day:"14 Jun",time:"21:00",stadium:"Philadelphia",goals:[{p:"Diallo",m:"90'",t:"Costa do Marfim"}]},
  {g:"F",h:"Suécia",a:"Tunísia",hg:5,ag:1,played:true,day:"14 Jun",time:"21:00",stadium:"Monterrey",goals:[{p:"Rekik",m:"43'",t:"Tunísia"},{p:"Ayari",m:"7'",t:"Suécia"},{p:"Isak",m:"30'",t:"Suécia"},{p:"Gyökeres",m:"59'",t:"Suécia"},{p:"Svanberg",m:"84'",t:"Suécia"},{p:"Ayari",m:"90+6'",t:"Suécia"}]},
  {g:"H",h:"Espanha",a:"Cabo Verde",hg:0,ag:0,played:true,day:"15 Jun",time:"18:00",stadium:"Atlanta",goals:[]},
  {g:"G",h:"Bélgica",a:"Egito",hg:1,ag:1,played:true,day:"15 Jun",time:"18:00",stadium:"Seattle",goals:[{p:"Hany",m:"66' o.g.",t:"Bélgica"},{p:"Ashour",m:"19'",t:"Egito"}]},
  {g:"H",h:"Arábia Saudita",a:"Uruguai",hg:1,ag:1,played:true,day:"15 Jun",time:"21:00",stadium:"Miami",goals:[{p:"Al-Amri",m:"41'",t:"Arábia Saudita"},{p:"M. Araújo",m:"80'",t:"Uruguai"}]},
  {g:"G",h:"Irã",a:"Nova Zelândia",hg:2,ag:2,played:true,day:"15 Jun",time:"21:00",stadium:"Los Angeles",goals:[{p:"Just",m:"7'",t:"Nova Zelândia"},{p:"Rezaeian",m:"32'",t:"Irã"},{p:"Just",m:"54'",t:"Nova Zelândia"},{p:"Mohebi",m:"64'",t:"Irã"}]},
  {g:"I",h:"França",a:"Senegal",hg:3,ag:1,played:true,day:"16 Jun",time:"21:00",stadium:"New York",goals:[{p:"Mbaye",m:"90+5'",t:"Senegal"},{p:"Mbappé",m:"66'",t:"França"},{p:"Barcola",m:"82'",t:"França"},{p:"Mbappé",m:"90+6'",t:"França"}]},
  {g:"I",h:"Iraque",a:"Noruega",hg:1,ag:4,played:true,day:"16 Jun",time:"21:00",stadium:"Boston",goals:[{p:"Haaland",m:"29'",t:"Noruega"},{p:"Haaland",m:"43'",t:"Noruega"},{p:"Hussein",m:"39'",t:"Iraque"},{p:"Østigård",m:"76'",t:"Noruega"},{p:"Hussein",m:"90+6' o.g.",t:"Noruega"}]},
  {g:"J",h:"Argentina",a:"Argélia",hg:3,ag:0,played:true,day:"16 Jun",time:"21:00",stadium:"Kansas City",goals:[{p:"Messi",m:"17'",t:"Argentina"},{p:"Messi",m:"60'",t:"Argentina"},{p:"Messi",m:"76'",t:"Argentina"}]},
  {g:"J",h:"Áustria",a:"Jordânia",hg:3,ag:1,played:true,day:"16 Jun",time:"21:00",stadium:"San Francisco",goals:[{p:"Olwan",m:"50'",t:"Jordânia"},{p:"Schmid",m:"20'",t:"Áustria"},{p:"Al-Arab",m:"76' o.g.",t:"Áustria"},{p:"Arnautović",m:"90+12' pen",t:"Áustria"}]},
  {g:"K",h:"Portugal",a:"Congo DR",hg:1,ag:1,played:true,day:"17 Jun",time:"18:00",stadium:"Houston",goals:[{p:"J. Neves",m:"6'",t:"Portugal"},{p:"Wissa",m:"45+5'",t:"Congo DR"}]},
  {g:"L",h:"Inglaterra",a:"Croácia",hg:4,ag:2,played:true,day:"17 Jun",time:"21:00",stadium:"Dallas",goals:[{p:"Baturina",m:"36'",t:"Croácia"},{p:"Kane",m:"12' pen",t:"Inglaterra"},{p:"Musa",m:"45+5'",t:"Croácia"},{p:"Kane",m:"42'",t:"Inglaterra"},{p:"Bellingham",m:"47'",t:"Inglaterra"},{p:"Rashford",m:"85'",t:"Inglaterra"}]},
  {g:"L",h:"Gana",a:"Panamá",hg:1,ag:0,played:true,day:"17 Jun",time:"18:00",stadium:"Toronto",goals:[{p:"Yirenkyi",m:"90+5'",t:"Gana"}]},
  {g:"K",h:"Uzbequistão",a:"Colômbia",hg:1,ag:3,played:true,day:"17 Jun",time:"21:00",stadium:"Mexico City",goals:[{p:"Muñoz",m:"40'",t:"Colômbia"},{p:"Fayzullaev",m:"60'",t:"Uzbequistão"},{p:"Díaz",m:"65'",t:"Colômbia"},{p:"Campaz",m:"90+9'",t:"Colômbia"}]},
  {g:"A",h:"República Tcheca",a:"Sudáfrica",hg:1,ag:1,played:true,day:"18 Jun",time:"18:00",stadium:"Atlanta",goals:[{p:"Sadílek",m:"6'",t:"República Tcheca"},{p:"Mokoena",m:"83' pen",t:"Sudáfrica"}]},
  {g:"B",h:"Suíça",a:"Bósnia e Herzegovina",hg:4,ag:1,played:true,day:"18 Jun",time:"21:00",stadium:"Los Angeles",goals:[{p:"Mahmić",m:"90+3'",t:"Bósnia e Herzegovina"},{p:"Manzambi",m:"74'",t:"Suíça"},{p:"Vargas",m:"84'",t:"Suíça"},{p:"Manzambi",m:"90'",t:"Suíça"},{p:"Xhaka",m:"90+7' pen",t:"Suíça"}]},
  {g:"B",h:"Canadá",a:"Catar",hg:6,ag:0,played:true,day:"18 Jun",time:"21:00",stadium:"Vancouver",goals:[{p:"Larin",m:"16'",t:"Canadá"},{p:"J. David",m:"29'",t:"Canadá"},{p:"J. David",m:"45+3'",t:"Canadá"},{p:"Saliba",m:"64'",t:"Canadá"},{p:"Manai",m:"75' o.g.",t:"Canadá"},{p:"J. David",m:"90+2'",t:"Canadá"}]},
  {g:"A",h:"México",a:"Coreia do Sul",hg:1,ag:0,played:true,day:"18 Jun",time:"21:00",stadium:"Guadalajara",goals:[{p:"Romo",m:"50'",t:"México"}]},
  {g:"C",h:"Brasil",a:"Haití",hg:3,ag:0,played:true,day:"19 Jun",time:"18:00",stadium:"Philadelphia",goals:[{p:"Cunha",m:"23'",t:"Brasil"},{p:"Cunha",m:"36'",t:"Brasil"},{p:"Vinícius",m:"45+3'",t:"Brasil"}]},
  {g:"C",h:"Escócia",a:"Marrocos",hg:0,ag:1,played:true,day:"19 Jun",time:"21:00",stadium:"Boston",goals:[{p:"Saibari",m:"2'",t:"Marrocos"}]},
  {g:"D",h:"Estados Unidos",a:"Austrália",hg:2,ag:0,played:true,day:"19 Jun",time:"18:00",stadium:"Seattle",goals:[{p:"Burgess",m:"11' o.g.",t:"Estados Unidos"},{p:"Freeman",m:"43'",t:"Estados Unidos"}]},
  {g:"D",h:"Turquia",a:"Paraguai",hg:0,ag:1,played:true,day:"19 Jun",time:"21:00",stadium:"San Francisco",goals:[{p:"Galarza",m:"2'",t:"Paraguai"}]},
  {g:"E",h:"Alemanha",a:"Costa do Marfim",hg:2,ag:1,played:true,day:"20 Jun",time:"18:00",stadium:"Toronto",goals:[{p:"Kessié",m:"30'",t:"Costa do Marfim"},{p:"Undav",m:"68'",t:"Alemanha"},{p:"Undav",m:"90+4'",t:"Alemanha"}]},
  {g:"E",h:"Equador",a:"Curaçao",hg:0,ag:0,played:true,day:"20 Jun",time:"21:00",stadium:"Kansas City",goals:[]},
  {g:"F",h:"Países Baixos",a:"Suécia",hg:5,ag:1,played:true,day:"20 Jun",time:"18:00",stadium:"Houston",goals:[{p:"Brobbey",m:"5'",t:"Países Baixos"},{p:"Brobbey",m:"17'",t:"Países Baixos"},{p:"Gakpo",m:"47'",t:"Países Baixos"},{p:"Gakpo",m:"54'",t:"Países Baixos"},{p:"Elanga",m:"59'",t:"Suécia"},{p:"Summerville",m:"89'",t:"Países Baixos"}]},
  {g:"F",h:"Tunísia",a:"Japão",hg:0,ag:4,played:true,day:"20 Jun",time:"21:00",stadium:"Monterrey",goals:[{p:"Kamada",m:"4'",t:"Japão"},{p:"Ueda",m:"31'",t:"Japão"},{p:"J. Itō",m:"69'",t:"Japão"},{p:"Ueda",m:"83'",t:"Japão"}]},
  {g:"H",h:"Espanha",a:"Arábia Saudita",hg:4,ag:0,played:true,day:"21 Jun",time:"18:00",stadium:"Atlanta",goals:[{p:"Yamal",m:"10'",t:"Espanha"},{p:"Oyarzabal",m:"21'",t:"Espanha"},{p:"Oyarzabal",m:"24'",t:"Espanha"},{p:"Al-Tambakti",m:"49' o.g.",t:"Espanha"}]},
  {g:"G",h:"Bélgica",a:"Irã",hg:0,ag:0,played:true,day:"21 Jun",time:"21:00",stadium:"Los Angeles",goals:[]},
  {g:"H",h:"Uruguai",a:"Cabo Verde",hg:2,ag:2,played:true,day:"21 Jun",time:"21:00",stadium:"Miami",goals:[{p:"K. Pina",m:"21'",t:"Cabo Verde"},{p:"M. Araújo",m:"44'",t:"Uruguai"},{p:"Canobbio",m:"45+6'",t:"Uruguai"},{p:"Varela",m:"61'",t:"Cabo Verde"}]},
  {g:"G",h:"Nova Zelândia",a:"Egito",hg:1,ag:3,played:true,day:"21 Jun",time:"21:00",stadium:"Vancouver",goals:[{p:"Surman",m:"15'",t:"Nova Zelândia"},{p:"Ziko",m:"58'",t:"Egito"},{p:"Salah",m:"67'",t:"Egito"},{p:"Trézéguet",m:"82'",t:"Egito"}]},
  {g:"J",h:"Argentina",a:"Áustria",hg:2,ag:0,played:true,day:"22 Jun",time:"18:00",stadium:"Dallas",goals:[{p:"Messi",m:"38'",t:"Argentina"},{p:"Messi",m:"90+5'",t:"Argentina"}]},
  {g:"I",h:"França",a:"Iraque",hg:3,ag:0,played:true,day:"22 Jun",time:"18:00",stadium:"Philadelphia",goals:[{p:"Mbappé",m:"14'",t:"França"},{p:"Mbappé",m:"54'",t:"França"},{p:"Dembélé",m:"66'",t:"França"}]},
  {g:"I",h:"Noruega",a:"Senegal",hg:3,ag:2,played:true,day:"22 Jun",time:"21:00",stadium:"New York",goals:[{p:"Pedersen",m:"43'",t:"Noruega"},{p:"I. Sarr",m:"53'",t:"Senegal"},{p:"Haaland",m:"48'",t:"Noruega"},{p:"Haaland",m:"58'",t:"Noruega"},{p:"I. Sarr",m:"90+3'",t:"Senegal"}]},
  {g:"J",h:"Jordânia",a:"Argélia",hg:1,ag:2,played:true,day:"22 Jun",time:"21:00",stadium:"San Francisco",goals:[{p:"Al-Rashdan",m:"36'",t:"Jordânia"},{p:"Benbouali",m:"69'",t:"Argélia"},{p:"Gouiri",m:"82'",t:"Argélia"}]},
  {g:"K",h:"Portugal",a:"Uzbequistão",hg:5,ag:0,played:true,day:"23 Jun",time:"18:00",stadium:"Houston",goals:[{p:"Ronaldo",m:"6'",t:"Portugal"},{p:"Mendes",m:"17'",t:"Portugal"},{p:"Ronaldo",m:"39'",t:"Portugal"},{p:"Nematov",m:"60' o.g.",t:"Portugal"},{p:"Leão",m:"87'",t:"Portugal"}]},
  {g:"L",h:"Inglaterra",a:"Gana",hg:0,ag:0,played:true,day:"23 Jun",time:"18:00",stadium:"Boston",goals:[]},
  {g:"L",h:"Panamá",a:"Croácia",hg:0,ag:1,played:true,day:"23 Jun",time:"18:00",stadium:"Toronto",goals:[{p:"Budimir",m:"54'",t:"Croácia"}]},
  {g:"K",h:"Colômbia",a:"Congo DR",hg:1,ag:0,played:true,day:"23 Jun",time:"21:00",stadium:"Guadalajara",goals:[{p:"Muñoz",m:"76'",t:"Colômbia"}]},
  {g:"B",h:"Suíça",a:"Canadá",hg:2,ag:1,played:true,day:"24 Jun",time:"21:00",stadium:"Vancouver",goals:[{p:"Vargas",m:"46'",t:"Suíça"},{p:"Manzambi",m:"57'",t:"Suíça"},{p:"P. David",m:"76'",t:"Canadá"}]},
  {g:"B",h:"Bósnia e Herzegovina",a:"Catar",hg:3,ag:1,played:true,day:"24 Jun",time:"21:00",stadium:"Seattle",goals:[{p:"Al-Haydos",m:"42'",t:"Catar"},{p:"Alajbegović",m:"29'",t:"Bósnia e Herzegovina"},{p:"Abunada",m:"34' o.g.",t:"Bósnia e Herzegovina"},{p:"Mahmić",m:"80'",t:"Bósnia e Herzegovina"}]},
  {g:"C",h:"Escócia",a:"Brasil",hg:0,ag:3,played:true,day:"24 Jun",time:"18:00",stadium:"Miami",goals:[{p:"Vinícius",m:"7'",t:"Brasil"},{p:"Vinícius",m:"45+3'",t:"Brasil"},{p:"Cunha",m:"60'",t:"Brasil"}]},
  {g:"C",h:"Marrocos",a:"Haití",hg:4,ag:2,played:true,day:"24 Jun",time:"18:00",stadium:"Atlanta",goals:[{p:"Bounou",m:"10' o.g.",t:"Haití"},{p:"Isidor",m:"43'",t:"Haití"},{p:"Hakimi",m:"39'",t:"Marrocos"},{p:"Saibari",m:"45+1'",t:"Marrocos"},{p:"Rahimi",m:"78'",t:"Marrocos"},{p:"Yassine",m:"89'",t:"Marrocos"}]},
  {g:"A",h:"República Tcheca",a:"México",hg:0,ag:3,played:true,day:"24 Jun",time:"21:00",stadium:"Mexico City",goals:[{p:"M. Chávez",m:"55'",t:"México"},{p:"Quiñones",m:"61'",t:"México"},{p:"Fidalgo",m:"90+4'",t:"México"}]},
  {g:"A",h:"Sudáfrica",a:"Coreia do Sul",hg:1,ag:0,played:true,day:"24 Jun",time:"21:00",stadium:"Monterrey",goals:[{p:"Maseko",m:"63'",t:"Sudáfrica"}]},
  {g:"E",h:"Curaçao",a:"Costa do Marfim",hg:0,ag:2,played:true,day:"25 Jun",time:"18:00",stadium:"Philadelphia",goals:[{p:"Pépé",m:"7'",t:"Costa do Marfim"},{p:"Pépé",m:"64'",t:"Costa do Marfim"}]},
  {g:"E",h:"Equador",a:"Alemanha",hg:2,ag:1,played:true,day:"25 Jun",time:"18:00",stadium:"New York",goals:[{p:"Sané",m:"2'",t:"Alemanha"},{p:"Angulo",m:"9'",t:"Equador"},{p:"Plata",m:"77'",t:"Equador"}]},
  {g:"F",h:"Japão",a:"Suécia",hg:1,ag:1,played:true,day:"25 Jun",time:"18:00",stadium:"Dallas",goals:[{p:"Maeda",m:"56'",t:"Japão"},{p:"Elanga",m:"62'",t:"Suécia"}]},
  {g:"F",h:"Tunísia",a:"Países Baixos",hg:1,ag:3,played:true,day:"25 Jun",time:"18:00",stadium:"Kansas City",goals:[{p:"Skhiri",m:"3' o.g.",t:"Países Baixos"},{p:"Mastouri",m:"54'",t:"Tunísia"},{p:"Brobbey",m:"7'",t:"Países Baixos"},{p:"Van Hecke",m:"62'",t:"Países Baixos"}]},
  {g:"D",h:"Turquia",a:"Estados Unidos",hg:3,ag:2,played:true,day:"25 Jun",time:"21:00",stadium:"Los Angeles",goals:[{p:"Trusty",m:"3'",t:"Estados Unidos"},{p:"Güler",m:"10'",t:"Turquia"},{p:"Berhalter",m:"49'",t:"Estados Unidos"},{p:"Yılmaz",m:"31'",t:"Turquia"},{p:"Ayhan",m:"90+8'",t:"Turquia"}]},
  {g:"D",h:"Paraguai",a:"Austrália",hg:0,ag:0,played:true,day:"25 Jun",time:"21:00",stadium:"San Francisco",goals:[]},
  {g:"I",h:"Noruega",a:"França",hg:1,ag:4,played:true,day:"26 Jun",time:"18:00",stadium:"Boston",goals:[{p:"Dembélé",m:"7'",t:"França"},{p:"Aasgaard",m:"21'",t:"Noruega"},{p:"Dembélé",m:"20'",t:"França"},{p:"Dembélé",m:"32'",t:"França"},{p:"Doué",m:"90+4'",t:"França"}]},
  {g:"I",h:"Senegal",a:"Iraque",hg:5,ag:0,played:true,day:"26 Jun",time:"18:00",stadium:"Toronto",goals:[{p:"Diarra",m:"4'",t:"Senegal"},{p:"I. Sarr",m:"56'",t:"Senegal"},{p:"P. Gueye",m:"59'",t:"Senegal"},{p:"P. Gueye",m:"71'",t:"Senegal"},{p:"I. Ndiaye",m:"82'",t:"Senegal"}]},
  {g:"H",h:"Cabo Verde",a:"Arábia Saudita",hg:0,ag:0,played:true,day:"26 Jun",time:"18:00",stadium:"Houston",goals:[]},
  {g:"H",h:"Uruguai",a:"Espanha",hg:0,ag:1,played:true,day:"26 Jun",time:"21:00",stadium:"Guadalajara",goals:[{p:"Baena",m:"42'",t:"Espanha"}]},
  {g:"G",h:"Egito",a:"Irã",hg:1,ag:1,played:true,day:"26 Jun",time:"21:00",stadium:"Seattle",goals:[{p:"Saber",m:"5'",t:"Egito"},{p:"Rezaeian",m:"14'",t:"Irã"}]},
  {g:"G",h:"Nova Zelândia",a:"Bélgica",hg:1,ag:5,played:true,day:"26 Jun",time:"21:00",stadium:"Vancouver",goals:[{p:"Trossard",m:"28'",t:"Bélgica"},{p:"Trossard",m:"50'",t:"Bélgica"},{p:"Just",m:"84'",t:"Nova Zelândia"},{p:"De Bruyne",m:"66'",t:"Bélgica"},{p:"Lukaku",m:"86'",t:"Bélgica"},{p:"Saelemaekers",m:"90+4'",t:"Bélgica"}]},
  {g:"L",h:"Panamá",a:"Inglaterra",hg:0,ag:2,played:true,day:"27 Jun",time:"18:00",stadium:"New York",goals:[{p:"Bellingham",m:"62'",t:"Inglaterra"},{p:"Kane",m:"67'",t:"Inglaterra"}]},
  {g:"L",h:"Croácia",a:"Gana",hg:2,ag:1,played:true,day:"27 Jun",time:"18:00",stadium:"Philadelphia",goals:[{p:"Luckassen",m:"73'",t:"Gana"},{p:"P. Sučić",m:"31'",t:"Croácia"},{p:"Vlašić",m:"83'",t:"Croácia"}]},
  {g:"K",h:"Colômbia",a:"Portugal",hg:0,ag:0,played:true,day:"27 Jun",time:"18:00",stadium:"Miami",goals:[]},
  {g:"K",h:"Congo DR",a:"Uzbequistão",hg:3,ag:1,played:true,day:"27 Jun",time:"18:00",stadium:"Atlanta",goals:[{p:"Shomurodov",m:"10'",t:"Uzbequistão"},{p:"Wissa",m:"68' pen",t:"Congo DR"},{p:"Mayele",m:"78'",t:"Congo DR"},{p:"Wissa",m:"90+1'",t:"Congo DR"}]},
  {g:"J",h:"Argélia",a:"Áustria",hg:3,ag:3,played:true,day:"27 Jun",time:"21:00",stadium:"Kansas City",goals:[{p:"Arnautović",m:"28'",t:"Áustria"},{p:"Belghali",m:"45'",t:"Argélia"},{p:"Sabitzer",m:"55'",t:"Áustria"},{p:"Mahrez",m:"60'",t:"Argélia"},{p:"Mahrez",m:"90+3'",t:"Argélia"},{p:"Kalajdžić",m:"90+6'",t:"Áustria"}]},
  {g:"J",h:"Jordânia",a:"Argentina",hg:1,ag:3,played:true,day:"27 Jun",time:"21:00",stadium:"Dallas",goals:[{p:"Lo Celso",m:"19'",t:"Argentina"},{p:"L. Martínez",m:"31' pen",t:"Argentina"},{p:"Al-Taamari",m:"55'",t:"Jordânia"},{p:"Messi",m:"80'",t:"Argentina"}]}
];

const wc2026Knockout = [
  {id:"r32-1",round:"16avos",home:"Sudáfrica",away:"Canadá",hg:0,ag:1,played:true,label:"2ºA vs 2ºB",day:"28 Jun",stadium:"Los Angeles",goals:[{p:"Eustáquio",m:"90+2'",t:"Canadá"}]},
  {id:"r32-2",round:"16avos",home:"Alemanha",away:"Paraguai",hg:1,ag:1,played:true,label:"1ºE vs 3ºD",day:"29 Jun",stadium:"Boston",penalties:"3-4",et:true,goals:[{p:"Havertz",m:"54'",t:"Alemanha"},{p:"Enciso",m:"42'",t:"Paraguai"}]},
  {id:"r32-3",round:"16avos",home:"Países Baixos",away:"Marrocos",hg:1,ag:1,played:true,label:"1ºF vs 2ºC",day:"29 Jun",stadium:"Monterrey",penalties:"2-3",et:true,goals:[{p:"Gakpo",m:"72'",t:"Países Baixos"},{p:"Diop",m:"90+1'",t:"Marrocos"}]},
  {id:"r32-4",round:"16avos",home:"Brasil",away:"Japão",hg:2,ag:1,played:true,label:"1ºC vs 2ºF",day:"29 Jun",stadium:"Houston",goals:[{p:"Sano",m:"29'",t:"Japão"},{p:"Casemiro",m:"56'",t:"Brasil"},{p:"Martinelli",m:"90+5'",t:"Brasil"}]},
  {id:"r32-5",round:"16avos",home:"França",away:"Suécia",hg:3,ag:0,played:true,label:"1ºI vs 3ºF",day:"30 Jun",stadium:"New York",goals:[{p:"Mbappé",m:"45'",t:"França"},{p:"Barcola",m:"53'",t:"França"},{p:"Mbappé",m:"74'",t:"França"}]},
  {id:"r32-6",round:"16avos",home:"Costa do Marfim",away:"Noruega",hg:1,ag:2,played:true,label:"2ºE vs 2ºI",day:"30 Jun",stadium:"Dallas",goals:[{p:"Nusa",m:"39'",t:"Noruega"},{p:"Diallo",m:"74'",t:"Costa do Marfim"},{p:"Haaland",m:"86'",t:"Noruega"}]},
  {id:"r32-7",round:"16avos",home:"México",away:"Equador",hg:2,ag:0,played:true,label:"1ºA vs 3ºE",day:"30 Jun",stadium:"Mexico City",goals:[{p:"Quiñones",m:"22'",t:"México"},{p:"Jiménez",m:"31'",t:"México"}]},
  {id:"r32-8",round:"16avos",home:"Inglaterra",away:"Congo DR",hg:2,ag:1,played:true,label:"1ºL vs 3ºK",day:"1 Jul",stadium:"Atlanta",goals:[{p:"Cipenga",m:"7'",t:"Congo DR"},{p:"Kane",m:"75'",t:"Inglaterra"},{p:"Kane",m:"86'",t:"Inglaterra"}]},
  {id:"r32-9",round:"16avos",home:"Estados Unidos",away:"Bósnia e Herzegovina",hg:2,ag:0,played:true,label:"1ºD vs 3ºB",day:"1 Jul",stadium:"San Francisco",goals:[{p:"Balogun",m:"45'",t:"Estados Unidos"},{p:"Tillman",m:"82'",t:"Estados Unidos"}]},
  {id:"r32-10",round:"16avos",home:"Bélgica",away:"Senegal",hg:3,ag:2,played:true,label:"1ºG vs 3ºI",day:"1 Jul",stadium:"Seattle",et:true,goals:[{p:"Diarra",m:"25'",t:"Senegal"},{p:"I. Sarr",m:"51'",t:"Senegal"},{p:"Lukaku",m:"86'",t:"Bélgica"},{p:"Tielemans",m:"89'",t:"Bélgica"},{p:"Tielemans",m:"120+5' pen",t:"Bélgica"}]},
  {id:"r32-11",round:"16avos",home:"Portugal",away:"Croácia",hg:2,ag:1,played:true,label:"2ºK vs 2ºL",day:"2 Jul",stadium:"Toronto",goals:[{p:"Perišić",m:"53'",t:"Croácia"},{p:"Ronaldo",m:"68' pen",t:"Portugal"},{p:"Ramos",m:"90+4'",t:"Portugal"}]},
  {id:"r32-12",round:"16avos",home:"Espanha",away:"Áustria",hg:3,ag:0,played:true,label:"1ºH vs 2ºJ",day:"2 Jul",stadium:"Los Angeles",goals:[{p:"Oyarzabal",m:"36'",t:"Espanha"},{p:"Porro",m:"66'",t:"Espanha"},{p:"Oyarzabal",m:"89'",t:"Espanha"}]},
  {id:"r32-13",round:"16avos",home:"Suíça",away:"Argélia",hg:2,ag:0,played:true,label:"1ºB vs 3ºJ",day:"2 Jul",stadium:"Vancouver",goals:[{p:"Embolo",m:"10'",t:"Suíça"},{p:"Ndoye",m:"46'",t:"Suíça"}]},
  {id:"r32-14",round:"16avos",home:"Argentina",away:"Cabo Verde",hg:3,ag:2,played:true,label:"1ºJ vs 2ºH",day:"3 Jul",stadium:"Miami",et:true,goals:[{p:"Messi",m:"29'",t:"Argentina"},{p:"D. Duarte",m:"59'",t:"Cabo Verde"},{p:"L. Martínez",m:"92'",t:"Argentina"},{p:"Lopes Cabral",m:"103'",t:"Cabo Verde"},{p:"Diney",m:"111' o.g.",t:"Argentina"}]},
  {id:"r32-15",round:"16avos",home:"Colômbia",away:"Gana",hg:1,ag:0,played:true,label:"1ºK vs 3ºL",day:"3 Jul",stadium:"Kansas City",goals:[{p:"J. Arias",m:"14'",t:"Colômbia"}]},
  {id:"r32-16",round:"16avos",home:"Egito",away:"Austrália",hg:1,ag:1,played:true,label:"2ºG vs 2ºD",day:"3 Jul",stadium:"Dallas",penalties:"4-2",et:true,goals:[{p:"Ashour",m:"13'",t:"Egito"},{p:"Hany",m:"55' o.g.",t:"Austrália"}]},

  {id:"r16-1",round:"oitavos",home:"Paraguai",away:"França",hg:0,ag:1,played:true,label:"Vence r32-2 vs Vence r32-5",day:"4 Jul",stadium:"Philadelphia",goals:[{p:"Mbappé",m:"70' pen",t:"França"}]},
  {id:"r16-2",round:"oitavos",home:"Canadá",away:"Marrocos",hg:0,ag:3,played:true,label:"Vence r32-1 vs Vence r32-3",day:"4 Jul",stadium:"Houston",goals:[{p:"Ounahi",m:"50'",t:"Marrocos"},{p:"Ounahi",m:"82'",t:"Marrocos"},{p:"Rahimi",m:"90+8'",t:"Marrocos"}]},
  {id:"r16-3",round:"oitavos",home:"Brasil",away:"Noruega",hg:1,ag:2,played:true,label:"Vence r32-4 vs Vence r32-6",day:"5 Jul",stadium:"New York",goals:[{p:"Haaland",m:"79'",t:"Noruega"},{p:"Haaland",m:"90'",t:"Noruega"},{p:"Neymar",m:"90+10' pen",t:"Brasil"}]},
  {id:"r16-4",round:"oitavos",home:"México",away:"Inglaterra",hg:2,ag:3,played:true,label:"Vence r32-7 vs Vence r32-8",day:"5 Jul",stadium:"Dallas",goals:[{p:"Bellingham",m:"36'",t:"Inglaterra"},{p:"Bellingham",m:"38'",t:"Inglaterra"},{p:"Quiñones",m:"42'",t:"México"},{p:"Kane",m:"60' pen",t:"Inglaterra"},{p:"Jiménez",m:"69' pen",t:"México"}]},
  {id:"r16-5",round:"oitavos",home:"Portugal",away:"Espanha",hg:0,ag:1,played:true,label:"Vence r32-11 vs Vence r32-12",day:"6 Jul",stadium:"Dallas",goals:[{p:"Merino",m:"90+1'",t:"Espanha"}]},
  {id:"r16-6",round:"oitavos",home:"Estados Unidos",away:"Bélgica",hg:1,ag:4,played:true,label:"Vence r32-9 vs Vence r32-10",day:"6 Jul",stadium:"Seattle",goals:[{p:"De Ketelaere",m:"9'",t:"Bélgica"},{p:"Tillman",m:"31'",t:"Estados Unidos"},{p:"De Ketelaere",m:"33'",t:"Bélgica"},{p:"Vanaken",m:"57'",t:"Bélgica"},{p:"Lukaku",m:"90+3'",t:"Bélgica"}]},
  {id:"r16-7",round:"oitavos",home:"Argentina",away:"Egito",hg:3,ag:2,played:true,label:"Vence r32-14 vs Vence r32-16",day:"7 Jul",stadium:"Atlanta",goals:[{p:"Ibrahim",m:"15'",t:"Egito"},{p:"Ziko",m:"67'",t:"Egito"},{p:"Romero",m:"79'",t:"Argentina"},{p:"Messi",m:"83'",t:"Argentina"},{p:"Fernández",m:"90+2'",t:"Argentina"}]},
  {id:"r16-8",round:"oitavos",home:"Suíça",away:"Colômbia",hg:0,ag:0,played:true,label:"Vence r32-13 vs Vence r32-15",day:"7 Jul",stadium:"Vancouver",penalties:"4-3",et:true,goals:[]},

  {id:"qf-1",round:"quartos",home:"França",away:"Marrocos",hg:2,ag:0,played:true,label:"Vence r16-1 vs Vence r16-2",day:"9 Jul",stadium:"Boston",goals:[{p:"Mbappé",m:"60'",t:"França"},{p:"Dembélé",m:"66'",t:"França"}]},
  {id:"qf-2",round:"quartos",home:"Espanha",away:"Bélgica",hg:2,ag:1,played:true,label:"Vence r16-5 vs Vence r16-6",day:"10 Jul",stadium:"Los Angeles",goals:[{p:"Fabián",m:"30'",t:"Espanha"},{p:"De Ketelaere",m:"41'",t:"Bélgica"},{p:"Merino",m:"88'",t:"Espanha"}]},
  {id:"qf-3",round:"quartos",home:"Noruega",away:"Inglaterra",hg:1,ag:2,played:true,label:"Vence r16-3 vs Vence r16-4",day:"10 Jul",stadium:"Miami",et:true,goals:[{p:"Schjelderup",m:"36'",t:"Noruega"},{p:"Bellingham",m:"45+2'",t:"Inglaterra"},{p:"Bellingham",m:"93'",t:"Inglaterra"}]},
  {id:"qf-4",round:"quartos",home:"Argentina",away:"Suíça",hg:3,ag:1,played:true,label:"Vence r16-7 vs Vence r16-8",day:"11 Jul",stadium:"Kansas City",et:true,goals:[{p:"Mac Allister",m:"10'",t:"Argentina"},{p:"Ndoye",m:"67'",t:"Suíça"},{p:"Alvarez",m:"112'",t:"Argentina"},{p:"L. Martínez",m:"120+1'",t:"Argentina"}]},

  {id:"sf-1",round:"meias",home:"França",away:"Espanha",hg:0,ag:2,played:true,label:"Vence qf-1 vs Vence qf-2",day:"14 Jul",stadium:"Dallas",goals:[{p:"Oyarzabal",m:"22' pen",t:"Espanha"},{p:"Porro",m:"58'",t:"Espanha"}]},
  {id:"sf-2",round:"meias",home:"Inglaterra",away:"Argentina",hg:1,ag:2,played:true,label:"Vence qf-3 vs Vence qf-4",day:"15 Jul",stadium:"Atlanta",goals:[{p:"Gordon",m:"55'",t:"Inglaterra"},{p:"Fernández",m:"85'",t:"Argentina"},{p:"L. Martínez",m:"90+2'",t:"Argentina"}]},

  {id:"3rd",round:"terceiro",home:"França",away:"Inglaterra",hg:4,ag:6,played:true,label:"Perde sf-1 vs Perde sf-2",day:"18 Jul",stadium:"Miami",goals:[{p:"Rice",m:"3'",t:"Inglaterra"},{p:"Konsa",m:"18'",t:"Inglaterra"},{p:"Saka",m:"37'",t:"Inglaterra"},{p:"Saka",m:"45+1'",t:"Inglaterra"},{p:"Mbappé",m:"48'",t:"França"},{p:"Barcola",m:"54'",t:"França"},{p:"Mbappé",m:"66'",t:"França"},{p:"Saka",m:"87' pen",t:"Inglaterra"},{p:"Dembélé",m:"90+6'",t:"França"},{p:"Bellingham",m:"90+8'",t:"Inglaterra"}]},

  {id:"final",round:"final",home:"Espanha",away:"Argentina",hg:1,ag:0,played:true,label:"Vence sf-1 vs Vence sf-2",day:"19 Jul",stadium:"MetLife Stadium",et:true,goals:[{p:"Torres",m:"106'",t:"Espanha"}]}
];

function showMatchDetail(matchId) {
  const cd = getClassifData();
  const m = cd.knockout.find(x => x.id === matchId);
  if(!m) return;
  const isPen = !!m.penalties;
  const isET = !!m.et;
  const homeWin = m.hg>m.ag || (isPen && parseInt(m.penalties.split('-')[0])>parseInt(m.penalties.split('-')[1]));
  const awayWin = m.ag>m.hg || (isPen && parseInt(m.penalties.split('-')[1])>parseInt(m.penalties.split('-')[0]));
  let modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;';
  let content = '';
  content += '<div style="background:var(--bg,#1a1a2e);border:2px solid var(--gold);border-radius:14px;padding:20px;max-width:380px;width:100%;position:relative;text-align:center;">';
  content += '<div onclick="this.closest(\'div[style*=fixed]\').remove()" style="position:absolute;top:8px;right:12px;font-size:1.4em;cursor:pointer;color:var(--text-muted);z-index:1;">✕</div>';
  content += '<div style="font-size:0.65em;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">'+m.day+' · '+m.stadium+'</div>';
  content += '<div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:10px;">';
  content += '<div style="text-align:center;flex:1;">';
  content += getFlagImg(m.home,40);
  content += '<div style="font-weight:700;font-size:0.85em;margin-top:4px;color:'+(homeWin?'var(--gold)':'var(--text)')+';">'+m.home+'</div>';
  content += '</div>';
  content += '<div style="text-align:center;">';
  content += '<div style="font-size:2em;font-weight:900;color:var(--gold);line-height:1;">'+m.hg+' - '+m.ag+'</div>';
  if(isPen) content += '<div style="font-size:0.7em;color:var(--text-muted);margin-top:2px;">pen '+m.penalties+'</div>';
  if(isET && !isPen) content += '<div style="font-size:0.7em;color:var(--text-muted);margin-top:2px;">pro.</div>';
  content += '</div>';
  content += '<div style="text-align:center;flex:1;">';
  content += getFlagImg(m.away,40);
  content += '<div style="font-weight:700;font-size:0.85em;margin-top:4px;color:'+(awayWin?'var(--gold)':'var(--text)')+';">'+m.away+'</div>';
  content += '</div>';
  content += '</div>';
  if(m.goals && m.goals.length > 0) {
    content += '<div style="border-top:1px solid var(--border);padding-top:10px;margin-top:6px;">';
    const homeGoals = m.goals.filter(g => g.t === m.home);
    const awayGoals = m.goals.filter(g => g.t === m.away);
    if(homeGoals.length > 0) {
      homeGoals.forEach(g => {
        content += '<div style="font-size:0.75em;color:var(--text);margin:3px 0;text-align:left;">⚽ <b>'+g.p+'</b> '+g.m+'</div>';
      });
    }
    if(awayGoals.length > 0) {
      awayGoals.forEach(g => {
        content += '<div style="font-size:0.75em;color:var(--text);margin:3px 0;text-align:right;">'+g.m+' <b>'+g.p+'</b> ⚽</div>';
      });
    }
    content += '</div>';
  }
  content += '</div>';
  modal.innerHTML = content;
  modal.addEventListener('click', function(e){ if(e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
}

function showGroupMatchDetail(idx) {
  const cd = getClassifData();
  const m = cd.matches[idx];
  if(!m || !m.played) return;
  let modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;';
  let content = '';
  content += '<div style="background:var(--bg,#1a1a2e);border:2px solid var(--gold);border-radius:14px;padding:20px;max-width:380px;width:100%;position:relative;text-align:center;">';
  content += '<div onclick="this.closest(\'div[style*=fixed]\').remove()" style="position:absolute;top:8px;right:12px;font-size:1.4em;cursor:pointer;color:var(--text-muted);z-index:1;">✕</div>';
  content += '<div style="font-size:0.65em;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Grupo '+m.g+' · '+m.day+' · '+m.time+' · '+m.stadium+'</div>';
  content += '<div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:10px;">';
  content += '<div style="text-align:center;flex:1;">';
  content += getFlagImg(m.h,40);
  content += '<div style="font-weight:700;font-size:0.85em;margin-top:4px;color:'+(m.hg>m.ag?'var(--gold)':'var(--text)')+';">'+m.h+'</div>';
  content += '</div>';
  content += '<div style="text-align:center;">';
  content += '<div style="font-size:2em;font-weight:900;color:var(--gold);line-height:1;">'+m.hg+' - '+m.ag+'</div>';
  content += '</div>';
  content += '<div style="text-align:center;flex:1;">';
  content += getFlagImg(m.a,40);
  content += '<div style="font-weight:700;font-size:0.85em;margin-top:4px;color:'+(m.ag>m.hg?'var(--gold)':'var(--text)')+';">'+m.a+'</div>';
  content += '</div>';
  content += '</div>';
  if(m.goals && m.goals.length > 0) {
    content += '<div style="border-top:1px solid var(--border);padding-top:10px;margin-top:6px;">';
    const homeGoals = m.goals.filter(g => g.t === m.h);
    const awayGoals = m.goals.filter(g => g.t === m.a);
    if(homeGoals.length > 0) {
      homeGoals.forEach(g => {
        content += '<div style="font-size:0.75em;color:var(--text);margin:3px 0;text-align:left;">⚽ <b>'+g.p+'</b> '+g.m+'</div>';
      });
    }
    if(awayGoals.length > 0) {
      awayGoals.forEach(g => {
        content += '<div style="font-size:0.75em;color:var(--text);margin:3px 0;text-align:right;">'+g.m+' <b>'+g.p+'</b> ⚽</div>';
      });
    }
    content += '</div>';
  }
  content += '</div>';
  modal.innerHTML = content;
  modal.addEventListener('click', function(e){ if(e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
}

const wc2022Groups = {
  "A": ["Catar","Equador","Senegal","Países Baixos"],
  "B": ["Inglaterra","Irã","Estados Unidos","País de Gales"],
  "C": ["Argentina","Arábia Saudita","México","Polónia"],
  "D": ["França","Austrália","Dinamarca","Tunísia"],
  "E": ["Espanha","Costa Rica","Alemanha","Japão"],
  "F": ["Bélgica","Canadá","Marrocos","Croácia"],
  "G": ["Brasil","Sérvia","Suíça","Camarões"],
  "H": ["Portugal","Gana","Uruguai","Coreia do Sul"]
};
const wc2022Matches = [
  {g:"A",h:"Catar",a:"Equador",hg:0,ag:2,played:true,day:"20 Nov",time:"19:00",stadium:"Al Bayt",goals:[{p:"Valencia",m:"16' pen",t:"Equador"},{p:"Valencia",m:"31'",t:"Equador"}]},
  {g:"A",h:"Senegal",a:"Países Baixos",hg:0,ag:2,played:true,day:"21 Nov",time:"19:00",stadium:"Al Thumama",goals:[{p:"Gakpo",m:"84'",t:"Países Baixos"},{p:"Klaassen",m:"90+9'",t:"Países Baixos"}]},
  {g:"B",h:"Inglaterra",a:"Irã",hg:6,ag:2,played:true,day:"21 Nov",time:"16:00",stadium:"Khalifa",goals:[{p:"Bellingham",m:"35'",t:"Inglaterra"},{p:"Saka",m:"43'",t:"Inglaterra"},{p:"Sterling",m:"45+1'",t:"Inglaterra"},{p:"Saka",m:"62'",t:"Inglaterra"},{p:"Taremi",m:"65'",t:"Irã"},{p:"Rashford",m:"71'",t:"Inglaterra"},{p:"Grealish",m:"90+1'",t:"Inglaterra"},{p:"Taremi",m:"90+13'",t:"Irã"}]},
  {g:"B",h:"Estados Unidos",a:"País de Gales",hg:1,ag:1,played:true,day:"21 Nov",time:"22:00",stadium:"Ahmad bin Ali",goals:[{p:"Weah",m:"36'",t:"Estados Unidos"},{p:"Bale",m:"82' pen",t:"País de Gales"}]},
  {g:"A",h:"Catar",a:"Senegal",hg:1,ag:3,played:true,day:"25 Nov",time:"16:00",stadium:"Al Thumama",goals:[{p:"Dia",m:"41'",t:"Senegal"},{p:"Diédhiou",m:"48'",t:"Senegal"},{p:"Muntari",m:"78'",t:"Catar"},{p:"Dieng",m:"84'",t:"Senegal"}]},
  {g:"A",h:"Países Baixos",a:"Equador",hg:1,ag:1,played:true,day:"25 Nov",time:"19:00",stadium:"Khalifa",goals:[{p:"Gakpo",m:"6'",t:"Países Baixos"},{p:"Valencia",m:"49'",t:"Equador"}]},
  {g:"B",h:"País de Gales",a:"Irã",hg:0,ag:2,played:true,day:"25 Nov",time:"13:00",stadium:"Ahmad bin Ali",goals:[{p:"Cheshmi",m:"90+8'",t:"Irã"},{p:"Rezaeian",m:"90+11'",t:"Irã"}]},
  {g:"B",h:"Inglaterra",a:"Estados Unidos",hg:0,ag:0,played:true,day:"25 Nov",time:"22:00",stadium:"Al Bayt",goals:[]},
  {g:"A",h:"Países Baixos",a:"Catar",hg:2,ag:0,played:true,day:"29 Nov",time:"18:00",stadium:"Al Bayt",goals:[{p:"Gakpo",m:"26'",t:"Países Baixos"},{p:"De Jong",m:"49'",t:"Países Baixos"}]},
  {g:"A",h:"Equador",a:"Senegal",hg:1,ag:2,played:true,day:"29 Nov",time:"18:00",stadium:"Khalifa",goals:[{p:"Sarr",m:"44' pen",t:"Senegal"},{p:"Caicedo",m:"67'",t:"Equador"},{p:"Koulibaly",m:"70'",t:"Senegal"}]},
  {g:"B",h:"País de Gales",a:"Inglaterra",hg:0,ag:3,played:true,day:"29 Nov",time:"21:00",stadium:"Ahmad bin Ali",goals:[{p:"Rashford",m:"51'",t:"Inglaterra"},{p:"Foden",m:"51'",t:"Inglaterra"},{p:"Rashford",m:"68'",t:"Inglaterra"}]},
  {g:"B",h:"Irã",a:"Estados Unidos",hg:0,ag:1,played:true,day:"29 Nov",time:"21:00",stadium:"Al Thumama",goals:[{p:"Pulisic",m:"38'",t:"Estados Unidos"}]},
  {g:"C",h:"Argentina",a:"Arábia Saudita",hg:1,ag:2,played:true,day:"22 Nov",time:"13:00",stadium:"Lusail",goals:[{p:"Messi",m:"10' pen",t:"Argentina"},{p:"Al-Shehri",m:"48'",t:"Arábia Saudita"},{p:"Al-Dawsari",m:"53'",t:"Arábia Saudita"}]},
  {g:"C",h:"México",a:"Polónia",hg:0,ag:0,played:true,day:"22 Nov",time:"19:00",stadium:"Stadium 974",goals:[]},
  {g:"C",h:"Polónia",a:"Arábia Saudita",hg:2,ag:0,played:true,day:"26 Nov",time:"16:00",stadium:"Education City",goals:[{p:"Zieliński",m:"39'",t:"Polónia"},{p:"Świderski",m:"82'",t:"Polónia"}]},
  {g:"C",h:"Argentina",a:"México",hg:2,ag:0,played:true,day:"26 Nov",time:"22:00",stadium:"Lusail",goals:[{p:"Messi",m:"64'",t:"Argentina"},{p:"Fernández",m:"87'",t:"Argentina"}]},
  {g:"D",h:"França",a:"Austrália",hg:4,ag:1,played:true,day:"22 Nov",time:"22:00",stadium:"Al Janoub",goals:[{p:"Goodwin",m:"9'",t:"Austrália"},{p:"Rabiot",m:"27'",t:"França"},{p:"Mbappé",m:"32'",t:"França"},{p:"Giroud",m:"55'",t:"França"},{p:"Mbappé",m:"68'",t:"França"}]},
  {g:"D",h:"Dinamarca",a:"Tunísia",hg:0,ag:0,played:true,day:"22 Nov",time:"16:00",stadium:"Education City",goals:[]},
  {g:"D",h:"Tunísia",a:"Austrália",hg:0,ag:1,played:true,day:"26 Nov",time:"13:00",stadium:"Al Janoub",goals:[{p:"Duke",m:"23'",t:"Austrália"}]},
  {g:"D",h:"França",a:"Dinamarca",hg:2,ag:1,played:true,day:"26 Nov",time:"19:00",stadium:"Stadium 974",goals:[{p:"Mbappé",m:"61'",t:"França"},{p:"Christensen",m:"68'",t:"Dinamarca"},{p:"Mbappé",m:"86'",t:"França"}]},
  {g:"E",h:"Alemanha",a:"Japão",hg:1,ag:2,played:true,day:"23 Nov",time:"16:00",stadium:"Khalifa",goals:[{p:"Gündoğan",m:"33' pen",t:"Alemanha"},{p:"Doan",m:"75'",t:"Japão"},{p:"Asano",m:"83'",t:"Japão"}]},
  {g:"E",h:"Espanha",a:"Costa Rica",hg:7,ag:0,played:true,day:"23 Nov",time:"19:00",stadium:"Al Thumama",goals:[{p:"Olmo",m:"21'",t:"Espanha"},{p:"Asensio",m:"31'",t:"Espanha"},{p:"F. Torres",m:"40'",t:"Espanha"},{p:"Gavi",m:"54'",t:"Espanha"},{p:"Solari",m:"56'",t:"Espanha"},{p:"Morata",m:"75'",t:"Espanha"},{p:"Morata",m:"90'",t:"Espanha"}]},
  {g:"C",h:"Polónia",a:"Argentina",hg:0,ag:2,played:true,day:"30 Nov",time:"21:00",stadium:"Stadium 974",goals:[{p:"Messi",m:"46' pen",t:"Argentina"},{p:"Álvarez",m:"67'",t:"Argentina"}]},
  {g:"C",h:"Arábia Saudita",a:"México",hg:1,ag:2,played:true,day:"30 Nov",time:"21:00",stadium:"Lusail",goals:[{p:"Dawsari",m:"52'",t:"Arábia Saudita"},{p:"Martín",m:"47'",t:"México"},{p:"Chávez",m:"52'",t:"México"}]},
  {g:"D",h:"Tunísia",a:"França",hg:1,ag:0,played:true,day:"30 Nov",time:"18:00",stadium:"Education City",goals:[{p:"Khazri",m:"58'",t:"Tunísia"}]},
  {g:"D",h:"Austrália",a:"Dinamarca",hg:1,ag:0,played:true,day:"30 Nov",time:"18:00",stadium:"Al Janoub",goals:[{p:"Leckie",m:"60'",t:"Austrália"}]},
  {g:"E",h:"Japão",a:"Costa Rica",hg:0,ag:1,played:true,day:"27 Nov",time:"13:00",stadium:"Ahmad bin Ali",goals:[{p:"Fuller",m:"81'",t:"Costa Rica"}]},
  {g:"E",h:"Espanha",a:"Alemanha",hg:1,ag:1,played:true,day:"27 Nov",time:"22:00",stadium:"Al Bayt",goals:[{p:"Morata",m:"62'",t:"Espanha"},{p:"Füllkrug",m:"83'",t:"Alemanha"}]},
  {g:"F",h:"Marrocos",a:"Croácia",hg:0,ag:0,played:true,day:"23 Nov",time:"13:00",stadium:"Al Bayt",goals:[]},
  {g:"F",h:"Bélgica",a:"Canadá",hg:1,ag:0,played:true,day:"23 Nov",time:"22:00",stadium:"Ahmad bin Ali",goals:[{p:"Batshuayi",m:"44'",t:"Bélgica"}]},
  {g:"G",h:"Suíça",a:"Camarões",hg:1,ag:0,played:true,day:"24 Nov",time:"13:00",stadium:"Al Janoub",goals:[{p:"Embolo",m:"48'",t:"Suíça"}]},
  {g:"G",h:"Brasil",a:"Sérvia",hg:2,ag:0,played:true,day:"24 Nov",time:"22:00",stadium:"Lusail",goals:[{p:"Richarlison",m:"62'",t:"Brasil"},{p:"Richarlison",m:"73'",t:"Brasil"}]},
  {g:"H",h:"Uruguai",a:"Coreia do Sul",hg:0,ag:0,played:true,day:"24 Nov",time:"16:00",stadium:"Education City",goals:[]},
  {g:"H",h:"Portugal",a:"Gana",hg:3,ag:2,played:true,day:"24 Nov",time:"19:00",stadium:"Stadium 974",goals:[{p:"Ronaldo",m:"65' pen",t:"Portugal"},{p:"B. André",m:"73'",t:"Gana"},{p:"Leão",m:"80'",t:"Portugal"},{p:"Bukari",m:"89'",t:"Gana"},{p:"Fernandes",m:"90+3'",t:"Portugal"}]},
  {g:"E",h:"Japão",a:"Espanha",hg:2,ag:1,played:true,day:"1 Dec",time:"21:00",stadium:"Khalifa",goals:[{p:"Doan",m:"48'",t:"Japão"},{p:"Tanaka",m:"53'",t:"Japão"},{p:"Morata",m:"11'",t:"Espanha"}]},
  {g:"E",h:"Costa Rica",a:"Alemanha",hg:2,ag:4,played:true,day:"1 Dec",time:"21:00",stadium:"Al Bayt",goals:[{p:"Tejeda",m:"58'",t:"Costa Rica"},{p:"Vargas",m:"70'",t:"Costa Rica"},{p:"Havertz",m:"10'",t:"Alemanha"},{p:"Havertz",m:"73'",t:"Alemanha"},{p:"Füllkrug",m:"85'",t:"Alemanha"},{p:"Musiala",m:"89'",t:"Alemanha"}]},
  {g:"F",h:"Bélgica",a:"Marrocos",hg:0,ag:2,played:true,day:"27 Nov",time:"16:00",stadium:"Al Thumama",goals:[{p:"Sabiri",m:"73'",t:"Marrocos"},{p:"Aboukhlal",m:"90+2'",t:"Marrocos"}]},
  {g:"F",h:"Croácia",a:"Canadá",hg:4,ag:1,played:true,day:"27 Nov",time:"19:00",stadium:"Khalifa",goals:[{p:"Livaja",m:"36'",t:"Croácia"},{p:"Kramarić",m:"53'",t:"Croácia"},{p:"Livaja",m:"70'",t:"Croácia"},{p:"Oršić",m:"90+4'",t:"Croácia"},{p:"Davies",m:"26'",t:"Canadá"}]},
  {g:"G",h:"Brasil",a:"Suíça",hg:1,ag:0,played:true,day:"28 Nov",time:"16:00",stadium:"Stadium 974",goals:[{p:"Casemiro",m:"83'",t:"Brasil"}]},
  {g:"G",h:"Camarões",a:"Sérvia",hg:3,ag:3,played:true,day:"28 Nov",time:"19:00",stadium:"Al Janoub",goals:[{p:"Aboubakar",m:"29'",t:"Camarões"},{p:"Choupo-Moting",m:"63'",t:"Camarões"},{p:"Toko Ekambi",m:"66'",t:"Camarões"},{p:"Pavlović",m:"45+1'",t:"Sérvia"},{p:"Milinković-Savić",m:"53'",t:"Sérvia"},{p:"A. Mitrović",m:"54'",t:"Sérvia"}]},
  {g:"H",h:"Coreia do Sul",a:"Gana",hg:2,ag:3,played:true,day:"28 Nov",time:"13:00",stadium:"Education City",goals:[{p:"Cho Gue-sung",m:"20'",t:"Coreia do Sul"},{p:"Cho Gue-sung",m:"27'",t:"Coreia do Sul"},{p:"Salisu",m:"24'",t:"Gana"},{p:"Kudus",m:"34'",t:"Gana"},{p:"Kudus",m:"68'",t:"Gana"}]},
  {g:"H",h:"Portugal",a:"Uruguai",hg:2,ag:0,played:true,day:"29 Nov",time:"16:00",stadium:"Lusail",goals:[{p:"Fernandes",m:"54'",t:"Portugal"},{p:"Fernandes",m:"90+3'",t:"Portugal"}]},
  {g:"F",h:"Croácia",a:"Bélgica",hg:0,ag:0,played:true,day:"1 Dec",time:"16:00",stadium:"Ahmad bin Ali",goals:[]},
  {g:"F",h:"Marrocos",a:"Canadá",hg:2,ag:1,played:true,day:"1 Dec",time:"16:00",stadium:"Al Thumama",goals:[{p:"Ziyech",m:"4'",t:"Marrocos"},{p:"En-Nesyri",m:"23'",t:"Marrocos"},{p:"Aguerd",m:"40' o.g.",t:"Canadá"}]},
  {g:"G",h:"Camarões",a:"Brasil",hg:1,ag:0,played:true,day:"2 Dec",time:"21:00",stadium:"Lusail",goals:[{p:"Aboubakar",m:"90+2'",t:"Camarões"}]},
  {g:"G",h:"Sérvia",a:"Suíça",hg:2,ag:3,played:true,day:"2 Dec",time:"21:00",stadium:"Stadium 974",goals:[{p:"Mitrović",m:"26'",t:"Sérvia"},{p:"Vlahović",m:"35'",t:"Sérvia"},{p:"Shaqiri",m:"20'",t:"Suíça"},{p:"Akanji",m:"40'",t:"Suíça"},{p:"Embolo",m:"48'",t:"Suíça"}]},
  {g:"H",h:"Coreia do Sul",a:"Portugal",hg:2,ag:1,played:true,day:"2 Dec",time:"18:00",stadium:"Education City",goals:[{p:"Hwang Hee-chan",m:"90+1'",t:"Coreia do Sul"},{p:"Ronaldo",m:"5'",t:"Portugal"},{p:"Kim Young-gwon",m:"27'",t:"Coreia do Sul"}]},
  {g:"H",h:"Uruguai",a:"Gana",hg:2,ag:0,played:true,day:"2 Dec",time:"18:00",stadium:"Al Janoub",goals:[{p:"De Arrascaeta",m:"26'",t:"Uruguai"},{p:"De Arrascaeta",m:"32'",t:"Uruguai"}]}
];
const wc2022Knockout = [
  {id:"qf-1",round:"oitavos",home:"Países Baixos",away:"Estados Unidos",hg:3,ag:1,played:true,day:"3 Dec",stadium:"Khalifa",goals:[{p:"Depay",m:"10'",t:"Países Baixos"},{p:"Blind",m:"45+1'",t:"Países Baixos"},{p:"Wright",m:"76'",t:"Estados Unidos"},{p:"Dumfries",m:"81'",t:"Países Baixos"}]},
  {id:"qf-2",round:"oitavos",home:"Argentina",away:"Austrália",hg:2,ag:1,played:true,day:"3 Dec",stadium:"Ahmad bin Ali",goals:[{p:"Messi",m:"35'",t:"Argentina"},{p:"Álvarez",m:"57'",t:"Argentina"},{p:"Fernández",m:"77' o.g.",t:"Austrália"}]},
  {id:"qf-3",round:"oitavos",home:"França",away:"Polónia",hg:3,ag:1,played:true,day:"4 Dec",stadium:"Al Thumama",goals:[{p:"Giroud",m:"44'",t:"França"},{p:"Mbappé",m:"74'",t:"França"},{p:"Mbappé",m:"90+1'",t:"França"},{p:"Lewandowski",m:"90+9' pen",t:"Polónia"}]},
  {id:"qf-4",round:"oitavos",home:"Inglaterra",away:"Senegal",hg:3,ag:0,played:true,day:"4 Dec",stadium:"Al Bayt",goals:[{p:"Henderson",m:"38'",t:"Inglaterra"},{p:"Kane",m:"45+3'",t:"Inglaterra"},{p:"Saka",m:"57'",t:"Inglaterra"}]},
  {id:"qf-5",round:"oitavos",home:"Japão",away:"Croácia",hg:1,ag:1,played:true,day:"5 Dec",stadium:"Al Janoub",penalties:"1-3",et:true,goals:[{p:"Maeda",m:"43'",t:"Japão"},{p:"Perišić",m:"55'",t:"Croácia"}]},
  {id:"qf-6",round:"oitavos",home:"Brasil",away:"Coreia do Sul",hg:4,ag:1,played:true,day:"5 Dec",stadium:"Stadium 974",goals:[{p:"Vinícius",m:"7'",t:"Brasil"},{p:"Neymar",m:"13' pen",t:"Brasil"},{p:"Richarlison",m:"29'",t:"Brasil"},{p:"Paquetá",m:"36'",t:"Brasil"},{p:"Paik Seung-ho",m:"76'",t:"Coreia do Sul"}]},
  {id:"qf-7",round:"oitavos",home:"Marrocos",away:"Espanha",hg:0,ag:0,played:true,day:"6 Dec",stadium:"Education City",penalties:"3-0",et:true,goals:[]},
  {id:"qf-8",round:"oitavos",home:"Portugal",away:"Suíça",hg:6,ag:1,played:true,day:"6 Dec",stadium:"Lusail",goals:[{p:"Ramos",m:"17'",t:"Portugal"},{p:"Pepe",m:"33'",t:"Portugal"},{p:"Ramos",m:"51'",t:"Portugal"},{p:"Guerreiro",m:"55'",t:"Portugal"},{p:"Ramos",m:"67'",t:"Portugal"},{p:"Akanji",m:"58'",t:"Suíça"},{p:"Leão",m:"90+2'",t:"Portugal"}]},
  {id:"sf-1",round:"quartos",home:"Croácia",away:"Brasil",hg:1,ag:1,played:true,day:"9 Dec",stadium:"Education City",penalties:"4-2",et:true,goals:[{p:"Neymar",m:"105+1'",t:"Brasil"},{p:"Petković",m:"117'",t:"Croácia"}]},
  {id:"sf-2",round:"quartos",home:"Países Baixos",away:"Argentina",hg:2,ag:2,played:true,day:"9 Dec",stadium:"Lusail",penalties:"3-4",et:true,goals:[{p:"Nahuel Molina",m:"35'",t:"Argentina"},{p:"Messi",m:"73' pen",t:"Argentina"},{p:"Weghorst",m:"83'",t:"Países Baixos"},{p:"Weghorst",m:"101'",t:"Países Baixos"}]},
  {id:"sf-3",round:"quartos",home:"Marrocos",away:"Portugal",hg:1,ag:0,played:true,day:"10 Dec",stadium:"Al Thumama",goals:[{p:"En-Nesyri",m:"42'",t:"Marrocos"}]},
  {id:"sf-4",round:"quartos",home:"Inglaterra",away:"França",hg:1,ag:2,played:true,day:"10 Dec",stadium:"Al Bayt",goals:[{p:"Tchouaméni",m:"17'",t:"França"},{p:"Kane",m:"54' pen",t:"Inglaterra"},{p:"Giroud",m:"78'",t:"França"}]},
  {id:"3rd-1",round:"terceiro",home:"Croácia",away:"Marrocos",hg:2,ag:1,played:true,day:"17 Dec",stadium:"Khalifa",goals:[{p:"Gvardiol",m:"9'",t:"Croácia"},{p:"Oršić",m:"42'",t:"Croácia"},{p:"Dari",m:"9'",t:"Marrocos"}]},
  {id:"final-1",round:"final",home:"Argentina",away:"França",hg:3,ag:3,played:true,day:"18 Dec",stadium:"Lusail",penalties:"4-2",et:true,goals:[{p:"Messi",m:"23' pen",t:"Argentina"},{p:"Di María",m:"36'",t:"Argentina"},{p:"Mbappé",m:"80' pen",t:"França"},{p:"Mbappé",m:"81'",t:"França"},{p:"Messi",m:"108'",t:"Argentina"},{p:"Mbappé",m:"118' pen",t:"França"}]}
];

let classifExpanded = null;
let classifView = 'groups';

function getClassifData() {
  if (currentAlbum === '2022') return { groups: wc2022Groups, matches: wc2022Matches, knockout: wc2022Knockout, year: '2022' };
  return { groups: wc2026Groups, matches: wc2026Matches, knockout: wc2026Knockout, year: '2026' };
}
function calcGroupStandings(gl) {
  const cd = getClassifData();
  const tms = cd.groups[gl];
  const tbl = {};
  tms.forEach(t => { tbl[t] = {j:0,v:0,e:0,d:0,gp:0,gc:0,sg:0,pontos:0}; });
  cd.matches.filter(m => m.g === gl).forEach(m => {
    if (!m.played && m.hg === 0 && m.ag === 0) return;
    tbl[m.h].j++; tbl[m.a].j++;
    tbl[m.h].gp += m.hg; tbl[m.h].gc += m.ag;
    tbl[m.a].gp += m.ag; tbl[m.a].gc += m.hg;
    if (m.hg > m.ag) { tbl[m.h].v++; tbl[m.h].pontos+=3; tbl[m.a].d++; }
    else if (m.hg < m.ag) { tbl[m.a].v++; tbl[m.a].pontos+=3; tbl[m.h].d++; }
    else { tbl[m.h].e++; tbl[m.a].e++; tbl[m.h].pontos++; tbl[m.a].pontos++; }
  });
  tms.forEach(t => { tbl[t].sg = tbl[t].gp - tbl[t].gc; });
  return tms.slice().sort((a,b) => tbl[b].pontos - tbl[a].pontos || tbl[b].sg - tbl[a].sg || tbl[b].gp - tbl[a].gp).map(t => ({name:t,...tbl[t]}));
}

function renderClassificacoes() {
  const main = document.getElementById('main');
  const cd = getClassifData();
  if (currentAlbum !== '2026' && currentAlbum !== '2022') {
    main.innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--muted);"><div style="font-size:2.5em;margin-bottom:12px;">🏆</div><div style="font-size:1.1em;font-weight:700;margin-bottom:8px;">Classificações indisponíveis</div><div style="font-size:0.85em;">As classificações só estão disponíveis para os albuns<br><strong>2026</strong> e <strong>2022</strong>.</div></div>';
    return;
  }
  let html = '<div style="padding:12px 16px 80px;">';
  html += '<h2 style="color:var(--gold);margin:0 0 12px;font-size:1.2em;text-align:center;">🏆 Mundial ' + cd.year + ' — Classificações</h2>';
  html += '<div style="display:flex;gap:8px;justify-content:center;margin-bottom:16px;">';
  html += '<div onclick="classifView=\'groups\';renderClassificacoes();" style="padding:8px 18px;border-radius:20px;cursor:pointer;font-weight:700;font-size:0.85em;background:' + (classifView==='groups'?'var(--accent)':'var(--card)') + ';color:' + (classifView==='groups'?'#fff':'var(--text)') + ';transition:all 0.2s;">📋 Grupos</div>';
  html += '<div onclick="classifView=\'bracket\';renderClassificacoes();" style="padding:8px 18px;border-radius:20px;cursor:pointer;font-weight:700;font-size:0.85em;background:' + (classifView==='bracket'?'var(--accent)':'var(--card)') + ';color:' + (classifView==='bracket'?'#fff':'var(--text)') + ';transition:all 0.2s;">🏅 Mata-Mata</div>';
  html += '</div>';
  if (classifView === 'groups') {
    Object.keys(cd.groups).forEach(gl => {
      const isOpen = classifExpanded === gl;
      const tms = cd.groups[gl];
      const flags = tms.map(t => getFlagImg(t, 20)).join(' ');
      html += '<div style="background:var(--card);border-radius:12px;margin-bottom:8px;overflow:hidden;border:1px solid var(--border);">';
      html += '<div onclick="classifExpanded=\'' + (isOpen?'':gl) + '\';renderClassificacoes();" style="padding:12px 14px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;">';
      html += '<div style="display:flex;align-items:center;gap:8px;"><span style="font-weight:900;color:var(--gold);">Grupo ' + gl + '</span><span style="font-size:0.85em;">' + flags + '</span></div>';
      html += '<span style="color:var(--text-muted);font-size:0.8em;transition:transform 0.3s;transform:rotate(' + (isOpen?'180':'0') + 'deg);">▼</span>';
      html += '</div>';
      if (isOpen) {
        const sorted = calcGroupStandings(gl);
        html += '<div style="padding:0 14px 14px;">';
        html += '<table style="width:100%;border-collapse:collapse;font-size:0.72em;margin-bottom:12px;">';
        html += '<tr style="color:var(--text-muted);border-bottom:1px solid var(--border);font-size:0.85em;"><th style="text-align:left;padding:4px 2px;">#</th><th style="text-align:left;padding:4px 4px;">Seleção</th><th style="text-align:center;padding:4px 3px;">J</th><th style="text-align:center;padding:4px 3px;">V</th><th style="text-align:center;padding:4px 3px;">E</th><th style="text-align:center;padding:4px 3px;">D</th><th style="text-align:center;padding:4px 3px;">GM</th><th style="text-align:center;padding:4px 3px;">GS</th><th style="text-align:center;padding:4px 3px;">DG</th><th style="text-align:center;padding:4px 3px;font-weight:900;">Pts</th></tr>';
        sorted.forEach((t, idx) => {
          const rowBg = idx < 2 ? 'background:rgba(76,175,80,0.08);' : idx < 3 ? 'background:rgba(255,193,7,0.06);' : '';
          html += '<tr style="' + rowBg + 'border-bottom:1px solid rgba(255,255,255,0.05);">';
          html += '<td style="padding:5px 2px;font-weight:700;color:' + (idx<2?'#4caf50':idx<3?'#ffc107':'var(--text-muted)') + ';">' + (idx+1) + '</td>';
          html += '<td style="padding:5px 4px;display:flex;align-items:center;gap:4px;">' + getFlagImg(t.name,16) + '<span style="font-weight:600;">' + t.name + '</span></td>';
          html += '<td style="text-align:center;padding:5px 3px;">' + t.j + '</td>';
          html += '<td style="text-align:center;padding:5px 3px;">' + t.v + '</td>';
          html += '<td style="text-align:center;padding:5px 3px;">' + t.e + '</td>';
          html += '<td style="text-align:center;padding:5px 3px;">' + t.d + '</td>';
          html += '<td style="text-align:center;padding:5px 3px;">' + t.gp + '</td>';
          html += '<td style="text-align:center;padding:5px 3px;">' + t.gc + '</td>';
          html += '<td style="text-align:center;padding:5px 3px;">' + (t.sg>0?'+':'') + t.sg + '</td>';
          html += '<td style="text-align:center;padding:5px 3px;font-weight:900;color:var(--gold);">' + t.pontos + '</td>';
          html += '</tr>';
        });
        html += '</table>';
        const matches = cd.matches.filter(m => m.g === gl);
        html += '<div style="font-weight:700;font-size:0.78em;color:var(--text-muted);margin-bottom:6px;">Jogos</div>';
        matches.forEach(m => {
          const played = m.played;
          html += '<div onclick="showGroupMatchDetail('+cd.matches.indexOf(m)+')" style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;margin-bottom:4px;background:rgba(255,255,255,0.03);border-radius:8px;cursor:pointer;">';
          html += '<div style="display:flex;align-items:center;gap:5px;flex:1;">' + getFlagImg(m.h,16) + '<span style="font-size:0.82em;font-weight:600;">' + m.h + '</span></div>';
          html += '<div style="text-align:center;min-width:55px;"><span style="font-weight:900;font-size:1.05em;color:var(--gold);">' + (played?m.hg+' - '+m.ag:'vs') + '</span><div style="font-size:0.62em;color:var(--text-muted);">' + m.day + ' · ' + m.time + '</div></div>';
          html += '<div style="display:flex;align-items:center;gap:5px;flex:1;justify-content:flex-end;"><span style="font-size:0.82em;font-weight:600;">' + m.a + '</span>' + getFlagImg(m.a,16) + '</div>';
          html += '</div>';
        });
        html += '</div>';
      }
      html += '</div>';
    });
  } else {
    const rounds = [{name:"Oitavos-de-final",filter:"oitavos"},{name:"Quartos-de-final",filter:"quartos"},{name:"Meias-finais",filter:"meias"},{name:"3º Lugar",filter:"terceiro"},{name:"Final",filter:"final"}];
    rounds.forEach(r => {
      const ms = cd.knockout.filter(m => m.round === r.filter);
      if (ms.length === 0) return;
      html += '<div style="margin-bottom:14px;">';
      html += '<div style="text-align:center;margin-bottom:8px;"><span style="font-weight:900;color:var(--gold);font-size:0.8em;text-transform:uppercase;letter-spacing:1px;">' + r.name + '</span></div>';
      ms.forEach(m => {
        const played = m.played || m.home;
        const isPen = !!m.penalties;
        const isET = !!m.et;
        const homeWin = played && (m.hg>m.ag || (isPen && parseInt(m.penalties.split('-')[0])>parseInt(m.penalties.split('-')[1])));
        const awayWin = played && (m.ag>m.hg || (isPen && parseInt(m.penalties.split('-')[1])>parseInt(m.penalties.split('-')[0])));
        html += '<div onclick="showMatchDetail(\''+m.id+'\')" style="background:var(--card);border:1px solid var(--border);border-radius:8px;padding:6px 10px;margin-bottom:3px;cursor:pointer;">';
        html += '<div style="display:flex;align-items:center;justify-content:space-between;">';
        html += '<div style="display:flex;align-items:center;gap:3px;font-size:0.7em;font-weight:'+(homeWin?'900':'600')+';flex:1;min-width:0;color:'+(homeWin?'var(--gold)':'var(--text)')+';">' + (m.home ? getFlagImg(m.home,20)+'<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+m.home+'</span>' : '?') + '</div>';
        html += '<div style="font-weight:900;font-size:0.8em;color:var(--gold);padding:0 8px;text-align:center;white-space:nowrap;">' + (played?m.hg+' - '+m.ag:'vs');
        if(isPen) html += '<div style="font-size:0.6em;color:var(--text-muted);font-weight:600;">pen '+m.penalties+'</div>';
        if(isET && !isPen) html += '<div style="font-size:0.6em;color:var(--text-muted);font-weight:600;">pro.</div>';
        html += '</div>';
        html += '<div style="display:flex;align-items:center;justify-content:flex-end;gap:3px;font-size:0.7em;font-weight:'+(awayWin?'900':'600')+';flex:1;min-width:0;color:'+(awayWin?'var(--gold)':'var(--text)')+';"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+m.away+'</span>' + (m.away ? getFlagImg(m.away,20) : '?') + '</div>';
        html += '</div>';
        html += '<div style="font-size:0.5em;color:var(--text-muted);text-align:center;margin-top:2px;">'+m.day+' · '+m.stadium+'</div>';
        html += '</div>';
      });
      html += '</div>';
    });
  }
  html += '</div>';
  main.innerHTML = html;
}

