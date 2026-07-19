let hobbys = [
  {
    title: "Aquarell-Künstler",
    imgName: "aquarell-kuenstler.png",
    description:
      "Die plötzliche Überzeugung, dass in dir ein unentdeckter Meister des sanften Farbverlaufs schlummert. Nach stundenlanger Recherche im Netz bestellst du das edelste Zubehör, um dann festzustellen, dass Wasserfarben tun, was sie wollen. Am Ende bleibt nur ein nasser, grauer Fleck auf extrem teurem Papier.",
    likes: 425,
    dislikes: 8742,
    liked: false,
    disliked: true,
    saved: true,
    comments: [
      {
        userName: "Werner_Wichtig",
        commentContent:
          "Das Papier eignet sich hervorragend, um Einkaufszettel drauf zu schreiben, die man dann zu Hause vergisst.",
        costs: 85,
        duration: 2,
        euphoriaLevel: 9,
      },
      {
        userName: "Pinselschubser",
        commentContent:
          "Hab mir ein Set aus feinstem Eichhörnchenhaar gekauft. Einmal benutzt, um ein schiefes Haus zu malen. Seitdem unberührt.",
        costs: 120,
        duration: 5,
        euphoriaLevel: 10,
      },
      {
        userName: "ChaosQueen",
        commentContent:
          "Ich habe das Wasserglas mit meinem Kaffee verwechselt und danach aus Frust alles in den Keller verbannt.",
        costs: 45,
        duration: 3,
        euphoriaLevel: 8,
      },
      {
        userName: "DopaMinator",
        commentContent:
          "Die Youtube-Tutorials sahen so babyleicht aus. Spoiler: Sind sie nicht.",
        costs: 60,
        duration: 2,
        euphoriaLevel: 7,
      },
      {
        userName: "PigmentMonster",
        commentContent:
          "Habe jetzt 36 Farben in Profiqualität. Male damit nichts, aber das Sortieren nach Farbcodes im Kasten hat mir drei Stunden lang richtig heftig Dopamin gegeben. Beste Woche meines Lebens.",
        costs: 190,
        duration: 8,
        euphoriaLevel: 10,
      },
    ],
  },
  {
    title: "Sauerteig-Flüsterer",
    imgName: "sauerteig-fluesterer.png",
    description:
      "Brot backen wie vor 100 Jahren – mit nichts als Mehl, Wasser und Liebe. Du züchtest ein hochsensibles Haustier in einem Glas, gibst ihm einen Namen und fütterst es penibel nach Wecker. Nach einer Woche vergisst du es im Kühlschrank, wo es ein tragisches, pelziges Ende nimmt.",
    likes: 1280,
    dislikes: 340,
    liked: true,
    disliked: false,
    saved: false,
    comments: [
      {
        userName: "HefeHeld",
        commentContent:
          "Mein Ansatz hieß 'Ragnar'. Er ist heldenhaft im Kühlschrank verschimmelt, während ich ein langes Wochenende weg war. Ich vermisse ihn.",
        costs: 35,
        duration: 6,
        euphoriaLevel: 9,
      },
      {
        userName: "FermentationFan",
        commentContent:
          "Es fühlt sich eher an wie ein Haustier als ein Hobby. Man muss ständig füttern und timen. Wenn das Brot gelingt, genial – aber der Weg dahin ist verdammt frustrierend.",
        costs: 45,
        duration: 120,
        euphoriaLevel: 5,
      },
      {
        userName: "CrustyBrot",
        commentContent: 
          "Wie viele Tage hat es gedauert, bis deine Kultur so aktiv war? Mein Ansatz will einfach nicht aufgehen.",
        costs: 25,
        duration: 72,
        euphoriaLevel: 4,
      },
      {
        userName: "BrotBereuer",
        commentContent:
          "Zwei Gärkörbchen, ein Spezialmesser zum Einschneiden und ein schwerer gusseiserner Topf gekauft. Resultat: Ein Stein, mit dem man Scheiben einwerfen kann.",
        costs: 150,
        duration: 10,
        euphoriaLevel: 8,
      },
      {
        userName: "KrustenFan",
        commentContent:
          "Es hat einmal perfekt geklappt und mein Hirn hat sofort beschlossen, dass dieses Abenteuer damit erfolgreich abgeschlossen und ab jetzt sterbenslangweilig ist.",
        costs: 40,
        duration: 7,
        euphoriaLevel: 10,
      },
      {
        userName: "MehlVoodoo",
        commentContent:
          "Warum sagt einem keiner, wie unfassbar klebrig dieser Teig ist? Meine komplette Küche sah aus wie ein Tatort.",
        costs: 15,
        duration: 2,
        euphoriaLevel: 6,
      },
      {
        userName: "DoughBoy",
        commentContent:
          "Ich backe wieder Aufbackbrötchen aus der Plastiktüte. Der Druck war einfach zu hoch für mich.",
        costs: 80,
        duration: 5,
        euphoriaLevel: 7,
      },
    ],
  },
  {
    title: "3D-Druck-Gott",
    imgName: "3d-druck-gott.png",
    description:
      "Die absolute Macht, jeden beliebigen Plastikgegenstand der Welt selbst zu erschaffen. Du verbringst Nächte damit, das Druckbett mikrometergenau zu leveln und Foren nach den perfekten Slicer-Einstellungen zu durchsuchen. Wenn er endlich läuft, druckst du drei nutzlose Staubfänger und verlierst schlagartig das Interesse.",
    likes: 2940,
    dislikes: 120,
    liked: true,
    disliked: false,
    saved: true,
    comments: [
      {
        userName: "NaehEule",
        commentContent:
          "Steht jetzt dekorativ neben der Nähmaschine und sammelt Staub an.",
        costs: 450,
        duration: 14,
        euphoriaLevel: 10,
      },
      {
        userName: "TechSucht",
        commentContent:
          "Nachts um 3 Uhr im Halbschlaf das Heizbett kalibriert. Das war mein absoluter Dopamin-Peak. Danach nie wieder eingeschaltet.",
        costs: 380,
        duration: 18,
        euphoriaLevel: 10,
      },
      {
        userName: "FilamentFresser",
        commentContent:
          "Ich habe tonnenweise buntes Plastik gekauft. Mein ganzer Stolz ist ein winziger, perfekt gedruckter Oktopus, dessen Beine wackeln. Er bewacht jetzt mein schlechtes Gewissen.",
        costs: 520,
        duration: 24,
        euphoriaLevel: 9,
      },
      {
        userName: "SpaghettiMonster",
        commentContent:
          "Der Drucker hat nur Plastiksalat produziert. Frustriert in die Ecke gestellt und vergessen.",
        costs: 299,
        duration: 10,
        euphoriaLevel: 4,
      },
      {
        userName: "FirstLayerPorn",
        commentContent:
          "90% Levelling und Troubleshooting, 10% eigentlicher Druck. Man braucht Nerven aus Stahl, aber wenn ein komplexes Modell fehlerfrei vom Bett kommt, fühlt man sich unbesiegbar.",
        costs: 340,
        duration: 18,
        euphoriaLevel: 9,
      },
      {
        userName: "Upgraditis",
        commentContent:
          "Man kauft einen Drucker, um Teile für den Drucker zu drucken. Klingt absurd, macht aber süchtig. Die Lernkurve bei Slicing-Software ist allerdings steil.",
        costs: 420,
        duration: 24,
        euphoriaLevel: 7,
      },
      {
        userName: "ResinRookie",
        commentContent:
          "Nichts für ungeduldige Menschen. Fehldrucke nach 15 Stunden Laufzeit zerstören dich mental, aber die Detailgenauigkeit entschädigt am Ende für fast alles.",
        costs: 375,
        duration: 15,
        euphoriaLevel: 8,
      },
      {
        userName: "ModdingMaster",
        commentContent:
          "Geniales Hobby für Bastler. Es gibt nichts Besseres, als funktionale Alltagshelfer selbst zu konstruieren und direkt in den Händen zu halten.",
        costs: 310,
        duration: 4,
        euphoriaLevel: 10,
      },
      {
        userName: "NozzleTerror",
        commentContent:
          "Der Einstieg ist teuer und verbraucht massig Strom und Filament für den Mülleimer. Wenn es läuft, ist es Magie, wenn nicht, hasst man sein Leben.",
        costs: 450,
        duration: 30,
        euphoriaLevel: 4,
      },
      {
        userName: "LayerZero",
        commentContent:
          "Die ersten drei Tage waren magisch. Jetzt nervt mich das Lüftergeräusch nur noch und ich brauche den Platz auf dem Schreibtisch für mein neues Hobby.",
        costs: 410,
        duration: 12,
        euphoriaLevel: 8,
      },
    ],
  },
  {
    title: "Zimmerpflanzen-Dschungel",
    imgName: "zimmerpflanzen-dschungel.png",
    description:
      "Die Vision einer grünen Ruheoase in den eigenen vier Wänden. Du kaufst seltene Monstera-Ableger, Spezialerde, Tonperlen und stylische Gießkannen für ein Vermögen. Drei Wochen später vergisst du das Gießen komplett und verwandelst deine Wohnung in eine traurige Galerie vertrockneter brauner Stängel.",
    likes: 812,
    dislikes: 50,
    liked: false,
    disliked: false,
    saved: true,
    comments: [
      {
        userName: "GrünerZweig",
        commentContent:
          "Habe mir eine Excel-Tabelle für die Gießzyklen erstellt. Nach zwei Tagen habe ich die Tabelle vergessen und nach zwei Wochen waren alle Pflanzen tot.",
        costs: 120,
        duration: 14,
        euphoriaLevel: 9,
      },
      {
        userName: "KakteenFeind",
        commentContent:
          "Sogar mein Kaktus ist verschrumpelt. Ich wusste nicht mal, dass das physikalisch möglich ist.",
        costs: 45,
        duration: 30,
        euphoriaLevel: 5,
      },
      {
        userName: "DschungelKönig",
        commentContent:
          "Die Monstera Variegata hat mich ein halbes Vermögen gekostet. Jetzt hat sie braune Flecken und ich traue mich nicht mal mehr, sie anzusehen.",
        costs: 250,
        duration: 12,
        euphoriaLevel: 8,
      },
      {
        userName: "BioMüll",
        commentContent:
          "Trauermücken. Überall. Ich habe die Pflanzen schreiend auf den Balkon verbannt und die Wohnung desinfiziert.",
        costs: 80,
        duration: 5,
        euphoriaLevel: 3,
      },
      {
        userName: "WasserMarsch",
        commentContent:
          "Das Umtopfen hat super viel Spaß gemacht, die ganze Erde auf dem Teppichboden danach weniger. Trotzdem cooler Nachmittag.",
        costs: 65,
        duration: 1,
        euphoriaLevel: 9,
      },
    ],
  },
  {
    title: "Mechanical Keyboard Builder",
    imgName: "keyboard-builder.png",
    description:
      "Weil Standard-Tastaturen für dein Gehirn einfach nicht genug 'Click' machen. Du bestellst nackte Platinen, Gehäuse aus Aluminium, unzählige Schalter-Typen und winzige Pinsel, um jeden einzelnen Switch per Hand einzufetten. Wenn das Meisterwerk fertig ist und perfekt klingt, tippst du drei Sätze und fängst an, nach dem nächsten Layout zu suchen.",
    likes: 1543,
    dislikes: 98,
    liked: true,
    disliked: false,
    saved: false,
    comments: [
      {
        userName: "LubingLover",
        commentContent:
          "70 Switches einzeln aufgemacht, gefettet und wieder zusammengebaut. Meine Finger waren danach taub, aber der Sound ist pure Poesie für die Ohren.",
        costs: 320,
        duration: 15,
        euphoriaLevel: 10,
      },
      {
        userName: "LötKolbenKlaus",
        commentContent:
          "Habe mir beim Löten den Tisch verbrannt und zwei Switches geschmolzen. Funktioniert trotzdem, sieht nur wild aus.",
        costs: 180,
        duration: 8,
        euphoriaLevel: 7,
      },
      {
        userName: "ClickyClack",
        commentContent:
          "Meine Frau droht mit Scheidung, weil das Board so laut ist. Hat sich gelohnt.",
        costs: 240,
        duration: 6,
        euphoriaLevel: 9,
      },
      {
        userName: "KeycapCollector",
        commentContent:
          "Allein die Tastenkappen haben 150 Euro gekostet, weil sie farblich exakt zu meinem Schreibtisch-Setup passen mussten. Jetzt stauben sie ein.",
        costs: 390,
        duration: 9,
        euphoriaLevel: 10,
      },
      {
        userName: "ISO_Layout_Pain",
        commentContent:
          "Aus Versehen das falsche Tastaturlayout bestellt. Die Frustration hat den Hyperfokus sofort gekillt.",
        costs: 110,
        duration: 2,
        euphoriaLevel: 2,
      },
      {
        userName: "LubingHell",
        commentContent:
          "Dieses Hobby ist die reinste Sisyphusarbeit. 90 Switches einzeln zu öffnen und zu luben dauert gefühlt Wochen, aber das Tippgefühl danach ist einfach unschlagbar.",
        costs: 165,
        duration: 6,
        euphoriaLevel: 9,
      },
      {
        userName: "RabbitHoleRider",
        commentContent:
          "Ein absolutes finanzielles Grab! Man fängt mit einem günstigen Custom-Board an und ehe man sich versieht, wartet man auf drei verschiedene Groupbuys für Keycaps.",
        costs: 350,
        duration: 48,
        euphoriaLevel: 8
      },
      {
        userName: "ThockEnthusiast",
        commentContent:
          "Das perfekte Hobby für Perfektionisten. Wenn die Stabilizer endlich perfekt balanciert sind und nicht mehr klappern, ist das pure Befriedigung.",
        costs: 195,
        duration: 3,
        euphoriaLevel: 10,
      },
    ],
  },
  {
    title: "Espresso-Wissenschaftler",
    imgName: "espresso-wissenschaftler.png",
    description:
      "Kaffee trinken reicht nicht, es muss eine exakte Wissenschaft sein. Du kaufst eine Siebträgermaschine mit PID-Steuerung, eine Mühle, die auf das Zehntelgramm genau mahlt, und diveres Zubehör wie WDT-Tools und Präzisionssiebe. Nach Wochen des Justierens trinkst du endlich den 'perfekten' Espresso, nur um festzustellen, dass du eigentlich lieber Tee magst.",
    likes: 2109,
    dislikes: 187,
    liked: false,
    disliked: true,
    saved: false,
    comments: [
      {
        userName: "CaffeineOverdose",
        commentContent:
          "Habe am ersten Tag 12 doppelte Espressi getrunken, um den Mahlgrad einzustellen. Mein Herzschlag war danach im dreistelligen Bereich und ich konnte Farben hören.",
        costs: 850,
        duration: 4,
        euphoriaLevel: 9,
      },
      {
        userName: "CremaKönig",
        commentContent:
          "Das Zubehör kostet mittlerweile mehr als die Maschine selbst. Aber wehe, der Puck hat Channeling!",
        costs: 1200,
        duration: 495,
        euphoriaLevel: 10,
      },
      {
        userName: "FilterFan",
        commentContent:
          "Die Reinigung der Maschine ist mir viel zu anstrengend. Nutze jetzt wieder meine 10-Euro-French-Press.",
        costs: 600,
        duration: 7,
        euphoriaLevel: 5,
      },
      {
        userName: "LatteArtAmateur",
        commentContent:
          "Ich versuche seit Tagen, ein Herz in den Schaum zu gießen. Es sieht jedes Mal aus wie eine Zwiebel.",
        costs: 545,
        duration: 5,
        euphoriaLevel: 8,
      },
      {
        userName: "ChannelingCrisis",
        commentContent:
          "Das ist kein Kaffeekochen, das ist pure Physik und Chemie. Wer hier ein schnelles Hobby sucht, wird scheitern. Jedes Gramm und jede Sekunde entscheiden über Genie oder totalen Müll.",
        costs: 530,
        duration: 2,
        euphoriaLevel: 8,
      },
      {
        userName: "GoldShotQuest",
        commentContent:
          "Man gibt Tausende von Euro aus, nur um den perfekten 'God Shot' zu jagen. Absolut elitär und teuer, aber der Geschmack ruiniert dir danach jeden normalen Café-Besuch.",
        costs: 1450,
        duration: 1,
        euphoriaLevel: 10,
      },
      {
        userName: "BeanNerd",
        commentContent:
          "Extrem frustrierend, wenn man eine neue Bohnensorte einstellen muss und fünf Shots hintereinander sauer schmecken. Nichts für schwache Nerven am frühen Morgen.",
        costs: 580,
        duration: 1,
        euphoriaLevel: 3,
      },
      {
        userName: "PuckPrepPro",
        commentContent:
          "Das Hobby lebt von den Ritualen. WDT-Tool, Wiegen, Leveln, Tampen – die Vorbereitung macht fast mehr Spaß als das Trinken selbst.",
        costs: 605,
        duration: 1,
        euphoriaLevel: 9,
      },
      {
        userName: "GrindFine",
        commentContent:
          "Bohnen im Wert von 40 Euro durchgejagt, nur um den perfekten 'Flow' zu finden. Als es klappte, war die Packung leer.",
        costs: 590,
        duration: 2,
        euphoriaLevel: 7,
      },
    ],
  },
  {
    title: "Arduino-Roboterbauer",
    imgName: "roboterbauer.png",
    description:
      "Der feste Glaube, dass du ohne Vorkenntnisse eine autonome, KI-gestützte Drohne bauen kannst. Du bestellst haufenweise Mikrocontroller, Sensoren, Motoren und Kabel direkt aus China. Am Ende schaffst du es nach tagelangem Kampf, eine winzige rote LED zum Blinken zu bringen, und erklärst das Projekt für erfolgreich beendet.",
    likes: 1780,
    dislikes: 42,
    liked: true,
    disliked: false,
    saved: true,
    comments: [
      {
        userName: "CodeClasher",
        commentContent:
          "Hab mir beim Löten den Daumen verbrannt, aber die LED blinkt! Ich bin praktisch der neue Elon Musk.",
        costs: 65,
        duration: 14,
        euphoriaLevel: 10,
      },
      {
        userName: "SensorSalat",
        commentContent:
          "Ich habe 40 verschiedene Sensoren gekauft und weiß bei keinem einzigen, was er eigentlich misst.",
        costs: 120,
        duration: 5,
        euphoriaLevel: 8,
      },
      {
        userName: "LoopSlayer",
        commentContent:
          "Der Code hatte einen Syntax-Fehler, den ich nach 6 Stunden Suche aufgegeben habe. Liegt jetzt im Karton der Schande.",
        costs: 40,
        duration: 1,
        euphoriaLevel: 3,
      },
      {
        userName: "RobotFails",
        commentContent:
          "Mein fahrbarer Roboter sollte Hindernissen ausweichen. Er ist schnurgerade gegen die Wand gefahren und in drei Teile zerbrochen.",
        costs: 150,
        duration: 4,
        euphoriaLevel: 9,
      },
      {
        userName: "BreadboardGamer",
        commentContent:
          "Kabelchaos pur. Es sieht aus wie eine Bombe, aber das Gefühl, wenn der Summer das erste Mal einen Ton abgibt, ist unbeschreiblich.",
        costs: 55,
        duration: 2,
        euphoriaLevel: 10,
      },
    ],
  },
  {
    title: "Buchbinde-Manufaktur",
    imgName: "buchbinde-manufaktur.png",
    description:
      "Eigene Notizbücher von Hand binden – weil gekaufte Hefte deine brillanten Gedanken nicht würdigen. Du kaufst Buchbinderpappe, Spezialkleber, Faden, Ahlen und wunderschönes marmoriertes Vorsatzpapier. Du bindest genau ein Buch, das so schön ist, dass du dich niemals trauen wirst, auch nur ein Wort hineinzuschreiben.",
    likes: 612,
    dislikes: 19,
    liked: false,
    disliked: false,
    saved: true,
    comments: [
      {
        userName: "BlankPage",
        commentContent:
          "Es liegt seit zwei Jahren unbenutzt auf meinem Nachttisch. Jedes Mal, wenn ich reinschreiben will, denke ich: 'Nein, das ist nicht wichtig genug für dieses Buch.'",
        costs: 75,
        duration: 5,
        euphoriaLevel: 9,
      },
      {
        userName: "SpineBreaker",
        commentContent:
          "Habe mich dreimal mit der Ahle in den Finger gestochen. Blut, Schweiß und Tränen stecken in diesem Einband.",
        costs: 45,
        duration: 2,
        euphoriaLevel: 8,
      },
      {
        userName: "CraftsmanSoul",
        commentContent:
          "Unglaublich beruhigendes und meditatives Handwerk. Das präzise Falzen und Vernähen entschleunigt komplett, erfordert aber extrem viel Fingerspitzengefühl.",
        costs: 35,
        duration: 5,
        euphoriaLevel: 9,
      },
      {
        userName: "BlankPageSyndrome",
        commentContent:
          "Das Hobby hat ein großes Problem: Die Ergebnisse sind am Ende so ästhetisch und makellos, dass man eine Blockade bekommt, die Bücher jemals zu beschreiben.",
        costs: 35,
        duration: 8,
        euphoriaLevel: 6,
      },
      {
        userName: "PaperCuts",
        commentContent:
          "Das Falzen der einzelnen Seiten war extrem beruhigend. Mein Gehirn lief im absoluten Zen-Modus. Leider hielt der Effekt nur bis zum Kleben.",
        costs: 30,
        duration: 1,
        euphoriaLevel: 10,
      },
      {
        userName: "GlueSticky",
        commentContent:
          "Habe die Seiten falsch herum eingeklebt. Das Notizbuch öffnet sich jetzt quasi rückwärts. Ein echtes Designerstück.",
        costs: 50,
        duration: 3,
        euphoriaLevel: 6,
      },
      {
        userName: "BookLover",
        commentContent:
          "Gleich Material für fünf weitere Bücher gekauft. Die Reste liegen jetzt in der Schublade für 'zukünftige Projekte'.",
        costs: 110,
        duration: 10,
        euphoriaLevel: 9,
      },
    ],
  },
  {
    title: "Paracord-Flechter",
    imgName: "paracord-flechter.png",
    description:
      "Plötzlich müssen alle Gegenstände in deinem Besitz eine taktische Überlebens-Kordel haben. Du kaufst kilometerweise buntes Fallschirmseil und Verschlüsse, um Hundehalsbänder, Schlüsselanhänger und Armbänder zu flechten. Nach dem dritten Armband hast du keine Lust mehr und deine Familie weigert sich, weitere 'Geschenke' anzunehmen.",
    likes: 539,
    dislikes: 310,
    liked: false,
    disliked: true,
    saved: false,
    comments: [
      {
        userName: "KnotenKönig",
        commentContent:
          "Mein Hund trägt jetzt ein Halsband, das theoretisch einen Panzer abschleppen könnte. Er hasst es, weil es so schwer ist.",
        costs: 40,
        duration: 3,
        euphoriaLevel: 8,
      },
      {
        userName: "SurvivalSchaf",
        commentContent:
          "Habe meiner kompletten Verwandtschaft Schlüsselanhänger zu Weihnachten geschenkt. Die Begeisterung hielt sich dezent in Grenzen.",
        costs: 65,
        duration: 4,
        euphoriaLevel: 9,
      },
      {
        userName: "CobraStitch",
        commentContent:
          "Meine Fingerkuppen waren vom festen Zuziehen der Knoten tagelang feuerrot. Nie wieder.",
        costs: 25,
        duration: 1,
        euphoriaLevel: 7,
      },
      {
        userName: "SeilSalat",
        commentContent:
          "Die Schnüre haben sich in der Kiste so spektakulär verknotet, dass ich die Kiste einfach komplett weggeworfen habe.",
        costs: 35,
        duration: 2,
        euphoriaLevel: 4,
      },
      {
        userName: "TacticalGear",
        commentContent:
          "Es macht süchtig, wenn man den Dreh einmal raus hat. Habe an einem Abend sechs Armbänder geflochten, während ich eine Serie geschaut habe. Jetzt liegen sie rum.",
        costs: 50,
        duration: 1,
        euphoriaLevel: 10,
      },
    ],
  },
  {
    title: "Acryl-Pouring-Meister",
    imgName: "acryl-meister.png",
    description:
      "Farbe einfach auf eine Leinwand schütten und hoffen, dass es nach moderner Kunst aussieht. Du besorgst dir literweise Acrylfarbe, Silikonöl für die Zellbildung, einen Heißluftföhn und unzählige Becher. Du flutest dein Wohnzimmer mit Farbe, versaust den Küchentisch und stellst fest, dass das Endergebnis eher an ein totes Einhorn als an Kunst erinnert.",
    likes: 980,
    dislikes: 1205,
    liked: false,
    disliked: false,
    saved: false,
    comments: [
      {
        userName: "FarbFlut",
        commentContent:
          "Trotz Abdeckfolie hat mein Laminatboden jetzt ein wunderschönes, dauerhaftes blau-pinkes Muster. Der Vermieter wird es lieben.",
        costs: 130,
        duration: 2,
        euphoriaLevel: 10,
      },
      {
        userName: "SilikonZelle",
        commentContent:
          "Mit dem Heißluftföhn die Farbzellen aktiviert. Das zuzusehen war extrem befriedigend, aber der Gestank in der Wohnung war tagelang unerträglich.",
        costs: 95,
        duration: 1,
        euphoriaLevel: 9,
      },
      {
        userName: "MudPour",
        commentContent:
          "Wenn man zu viele Farben mischt, wird es am Ende einfach nur ein trauriges, schlammiges Braun. Mein Bild sieht aus wie eine Pfütze.",
        costs: 60,
        duration: 2,
        euphoriaLevel: 4,
      },
      {
        userName: "CanvasKiller",
        commentContent:
          "Ich habe fire Leinwände an einem Nachmittag vollgekippt. Jetzt habe ich keinen Platz mehr zum Trocknen und die ganze Wohnung riecht nach Chemie.",
        costs: 170,
        duration: 1,
        euphoriaLevel: 9,
      },
      {
        userName: "CleanUpCrew",
        commentContent:
          "Das Saubermachen danach hat dreimal so lange gedauert wie das eigentliche Malen. Der Hyperfokus ist schlagartig verpufft.",
        costs: 40,
        duration: 1,
        euphoriaLevel: 5,
      },
    ],
  },
];