# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Kim Dekker

  #### Je startniveau:
  Zwart

  #### Je focus:
  Surface layer is de focus, daarna komt het responsive maken erbij.
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
https://yetimotion.com/

  #### Screenshot(s) van de eerste pagina (small screen): 
https://yetimotion.com/about/
  <img src="readme-images/yeti_about.jpg" width="375px" alt="De about pagina van Yeti">

  #### Screenshot(s) van de tweede pagina (small screen):
https://yetimotion.com/studiolife_category/all-cool-stuff/
  <img src="readme-images/yeti_coolstuff.jpg" width="375px" alt="de pagina met coole content van Yeti">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  1. in de about pagina werkt de screenreader niet goed. Dat komt door functie dat je kan hoveren over de headers om een andere header te krijgen. Dit is niet goed gebouwd en daardoor raakt de screenreader van de leg.
  <img src="readme-images/voiceassistant/1.jpg" width="375px" alt="Screenreader die in de war raakt van de titels">


  2. De eerste kop is een kop niveau 3. Het zou semantisch beter gecodeert zijn als de eerste kop een H1 was geweest.
  <img src="readme-images/voiceassistant/2.jpg" width="375px" alt="Het verkeerde header element is gebruikt">


  3. Ik raak constant kwijt waar de screenreader op de pagina is. Dit is een indicatie dat de HTML niet juist/semantisch is gestructureerd. Hierdoor kunnen mensen die navigeren met screenreader niet fijn navigeren over de site.
  <img src="readme-images/voiceassistant/3.jpg" width="375px" alt="Screenreader die heel ergens anders op de pagina aan het lezen is dan waar ik op de pagina ben">


  4. De titel die in de afbeelding te zien is zou in 1x moeten zeggen "PART OF OUR JOB IS TO FIND etc.". Daarintegen leest de screenreader elke keer maar 1 woord. Tevens spreekt de screenreader de woorden na FIND nieteens uit. 
  <img src="readme-images/voiceassistant/4.jpg" width="375px" alt="Screenreader die maar 1 woord van de hele zin voorleest">


  5. Inhakend op punt 4. Het volgende wat de screenreader leest na punt 4 is een volgende titel, maar omdat deze niet netjes in de pagina is gezet (een beetje lui), begint de screenreader de hele zin in aparte hoofdletters op te lezen (als een soort alfabet).
  <img src="readme-images/voiceassistant/5.jpg" width="375px" alt="Screenreader die G E T I N T O U C H et cetera voorleest in plaats van de normale zin">


  6. Linkjes staan in de website over het algemeen gewoon te vaag vermeld. De ene keer met nummers, de andere keer zonder tekst en dan weer met alleen een indicatie van een afbeelding... Als slechtziend persoon zou ik dit een feedback loop from hell hebben gevonden. 
  <img src="readme-images/voiceassistant/6.jpg" width="375px" alt="Slecht geneste linkjes">
    <img src="readme-images/voiceassistant/8.jpg" width="375px" alt="Nog een afbeelding met slecht geneste linkjes">



  7. Bij het hoveren over de linkjes te zien in de afbeelding, komt er een bewegende animatie op de achtergrond die dan mooi met de muis meebeweegt. Net als meerdere van dit soort flashy animaties/video's/content, is dit nergens op de website uit te zetten voor gebruikers die niet tegen dit soort flashy content kunnen.
  <img src="readme-images/voiceassistant/7.jpg" width="375px" alt="Afbeelding waar punt 7 visueel wordt onderbouwd">


  8. De structuur van het menu begint prima, maar we kunnen het hamburger menu niet selecteren, waardoor navigeren over de website onmogelijk wordt gemaakt. Je zou nu dus eerst helemaal naar de footer moeten, om daar meer opties te krijgen (maar hoe weet een gebruiker dat dan?). Overall is het navigeren over de website ontzettend confusing en ik raak contant in de war over waar ik ben.
  <img src="readme-images/voiceassistant/9.jpg" width="375px" alt="Afbeelding waar punt 7 visueel wordt onderbouwd">


  ##### Conclustie
  Navigeren over de website werd mij als screenreader-gebruiker eigelijk onmogelijk gemaakt. Als ik een doel had om naar heen te gaan, kostte het zoveel moeite dat ik niet anders kon dan begeleiden met scrollen en muisklikken, maar dat kan niet iedereen. Toegankelijkheid zou alleen op dit punt al falen, maar daarbij komt kijken dat heel de HTML structuur niet juist is > slechte linkjes, slechte headers en geen alt text maakt het voor screenreader-gebruikers helemaal niet duidelijk waar ze op de website zijn en wat voor content ze nou aan het lezen zijn.


</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
