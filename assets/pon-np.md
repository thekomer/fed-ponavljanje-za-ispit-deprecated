# FED - ponavljanje

## <a name="html"></a>HTML &mdash; struktura i sadržaj

### <a name="#sto-je-html"></a>Što je HTML?

* **HTML** - **HyperText Markup Language**:
* prezentacijski jezik (jezik označavanja) za kreiranje web stranica
* aktualna verzija: HTML5
* služi za definiciju pojedinih komponenti od kojih se sastoji web stranica
  * struktura dokumenta (layout)
  * sadržaj dokumenta i njegove karakteristike

### <a name="sto-je-html"></a>HTML elementi

* web stranica se gradi pomoću HTML elemenata
* tip elementa određuje njegova oznaka (tag)
  *  označava sadržaj elementa - daje informaciju što sadržaj predstavlja
  *  ključne riječi unutar uglatih zagrada: `<title>`, `<div>`, `<h1>`, `<p>`, ...
     *  obično dolaze u paru: `<title> </title>`
  * neki elementi nemaju sadržaj ili ne mogu sadržavati pod elemente -> definiraju se samo s jednom oznakom &rarr; npr. `<br>` ili `<br />`


### <a name="HTML-atributi"></a>HTML atributi

* HTML elementi mogu sadržavati atribute
  * pružaju dodatne informacije o HTML elementu
  * uvijek se definiraju u početnoj oznaci (početnom tagu)
  * definicija:
    * naziv=“vrijednost”
    * naziv
* lista atributa: https://www.w3schools.com/tags/ref_attributes.asp

### Anatomija (struktura) HTML elementa

```HTML
<p class="description"> sadrzaj elementa </p>
```

* ```<p ... > ... </p>``` - html oznake, početna i završna  (tagovi)
* ```class="description"``` - atribut: naziv="vrijednost"

### Struktura i sadržaj HTML dokumenta

```HTML
<!DOCTYPE html>
<html lang="hr">
<head>
    <title>Naziv dokumenta</title>
</head>
<body>
    Sadržaj dokumenta
</body>
</html>
```

### Meta oznake

```HTML
<meta charset="UTF-8" />
<meta name="author" content="Pero Perić" />
<meta name="keywords" content= "ključne riječi" />
<meta name="description" content="opis stranice" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Elementi za označavanje teksta
* naslovi

```HTML
<h1>naslov 1. razine</h1>
<h2>naslov 2. razine</h2>
<h3>Naslov 3. razine</h3>
<h4>Naslov 4. razine</h4>
<h5>Naslov 5. razine</h5>
<h6>Naslov 6. razine</h6>
```

* paragraf

```HTML
<p> ... </p>
```

* unaprijed oblikovan tekst

```HTML
<pre> ... </pre>
```

* novi red

```HTML
<br />
```

* Vodoravna linija

```html
<hr />
```

* oblikovanje teksta

```html
<b> podebljano </b>
<strong> naglašeno važno </strong>
<i> ukošeno </i>
<em> naglašeno koso </em>
<mark> markirano </mark>
<small> mala slova </small>
<del> prekriženo </del>
<ins> ubačeno </ins>
<sub> malo dolje </sub>
<sup> malo gore </sup>
```

* Simbolička lista

```html
<ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
</ul>
```

* Brojčana lista

```html
<ol>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
</ol>
```

* Opisna lista

```html
<dl>
    <dt>Lorem ipsum</dt>
    <dd>Lorem ipsum</dd>
    <dt>Lorem ipsum</dt>
    <dd>Lorem ipsum</dd>
</dl>
```

### Multimedijski sadržaj

* Kod dohvaćanja vanjske datoteke upisujemo putanju (URL) do nje:
  * apsolutna putanja
    * sadrži URL adresu datoteke smještene u vanjskoj web domeni
      * ne upravljamo datotekom koja nije smještena u našoj web mapi
      * da li kršimo autorska prava?
  * primjer:

  ```html
  <img src="https://www.algebra.hr/mapa/slika.jpg" />
  ```

  *  relativna putanja
    *  putanja od HTML dokumenta iz kojeg želimo dohvatiti datoteku do same datoteke
    *  datoteka je smještena u našoj web mapi te mi njome upravljamo
    *  kraći zapis putanje
    *  primjer:

  ```HTML
  <img src="mapa/slika.jpg" />
  ```

* grafike

  ```HTML
  <img src="slike/logo.jpg" alt="Logo naše ustanove" width="600" height="400" />

  <picture>
    <source media="" srcset="" width="" height="" />
    <source media="" srcset="" width="" height="" />
    <img src="" alt="" width="" height="" />
  </picture>
  ```

* Video sadržaj

  ```HTML
  <video controls width="560" height="320" poster="slike/promo.jpg">
    <source src="video/promo-video.mp4" type="video/mp4" />
    <source src="video/promo-video.ogv" type="video/ogg" />
    <source src="video/promo-video.webm" type="video/webm" />
  </video>

  <video src="video/promo-video.mp4" controls width="560" height="320" poster="slike/promo.jpg"></video>
  ```

* Audio sadržaj

  ```HTML
  <audio controls>
    <source src="audio/promo-audio.mp3" type="audio/mpeg" />
    <source src="audio/promo-audio.oga" type="audio/ogg" />
    <source src="audio/promo-audio.wav" type="audio/wav" />
  </audio>

  <audio src="audio/promo-audio.mp3" controls></audio>
  ```

### Poveznice

* vrste poveznica:
  * unutarnje poveznice
    ```HTML
    <a href="dokumenti/o-nama.html"> O nama </a>
    ```

  * vanjske poveznice
    ```HTML
    <a href="https://algebra.hr/"> Algebra </a>
    ```

  * poveznice prema elektroničkoj pošti ili za uspostavljanje tel. poziva
    ```HTML
    <a href="mailto:info@algebra.hr">Kontakt</a> // e-mail
    <a href="tel:+123456789"> +123456789 </a> // telefon
    ```

  * poveznice unutar samog HTML dokumenta - sidra prema elementu s određenim ID-em
    ```HTML
    <a href="#p3">Skok na Poglavlje 3</a> // link prema
      ...
    <h2 id="p3">Poglavlje 3</h2>
    ```

* primjeri dodatnih atributa:
  * download:
    ```HTML
    <a href="images/image.jpg" download></a>
    ```

  * target:
    ```HTML
    <a href="https://www.algebra.hr" target="_blank" hreflang="hr">Algebra</a>
    ```

  * media:
    ```HTML
    <a href="ispis.asp?output=print" media="print and (resolution:300dpi)">Ispiši</a>
    ```

  * rel="nofollow":
    ```HTML
    <a rel="nofollow" href="http://www.example.com/">Hello World</a>
    ```

  * rel="noreferrer noopener":
    ```HTML
    <a rel="noreferrer noopener" href="http://www.example.com/">Hello World</a>
    ```

### Rad s tablicama

* definiranje tablice

    ```HTML
    <table></table>,      // tablica
    <tr></tr>,            // redak - table raw
    <th></th>,            // naglašena ćelija - table head
    <td></td>,            // ćelija (podatak) - table data
    <caption></caption>   // natpis
    ```

    ```HTML
    <thead></thead>,      // zaglavlje
    <tbody></tbody>,      // tijelo tablice
    <tfoot></tfoot>       // footer tablice
    ```

* atributi za tablice:
  * **colspan** - Spajanje ćelija na razini reda (vodoravno). - za ```<th></th>, <td></td>```
  * **rowspan** - Spajanje ćelija na razini kolone ili stupca (okomito). - za ```<th></th>, <td></td>```
  * **border** - Dodavanje okvira tablici (bolje rješenje: CSS). - za ```<table></table>, ...```

* Anatomija tablice

```HTML
<table border="1">  // granica jedan pixel
  <caption>Naslov</caption> // naslov
  <thead>           // header koj ima jedan redak
    <tr>            // redak koji ima tri ćelije (stupda)
      <th>1</th>    // ćelija
      <th>2</th>
      <th>3</th>
    </tr>
  </thead>
  <tbody>           // body od jednog retka
    <tr>            // redak s tri ćelije
      <td>4</td>    // ćelija
      <td>5</td>
      <td>6</td>
    </tr>
  </tbody>
  <tfoot>           // footer s jednim retkom
    <tr>            // redak s tri ćelije
      <td>7</td>    // ćelija
      <td>8</td>
      <td>9</td>
    </tr>
  </tfoot>
</table>
```

### Obrasci

* obrazac (forma)
  ```HTML
  <form action="" method="post" enctype="text/plain" autocomplete="on">
    // tu idu elementi obrasca
  </form>
  ```

* primjeri elemenata obrasca

  ```HTML
  <label for="elID">tekst</label>
        // tekst uz element s id-em elID
  <input type="text">
        // jednoredni tekstualan unos
  <textarea name="" id="" cols="30" rows="10"></textarea>
        // višeredni tekstualni unos
  <select name="" id="">
      <option>1</option>
      <option>2</option>
  </select>
        // padajući izbornik s opcijama
  <button></button>
        // gumb
  <datalist id="elID">
    <option value="">
    <option value="">
  </datalist>
        // lista opcija za tekstualan unos s id-em elID
  ```

# Strukturiranje sadržaja (semantički elementi)

* podjela elemenata:
  * elementi bloka - div: ```<div></div>``` - sadržaj koji grupiramo isključivo za stiliziranje u css-u
  * elementi reda - span: ```<span></span>```

* semantički elementi:
  * ```<header></header>``` - header - uvodni sadržaj
  * ```<footer></footer>``` - footer - sadrži podatke o autorskim pravima, kontakt podatke, dodatne linkove i slično
  * ```<nav></nav>``` - nav - glavna navigacija
  * ```<main></main>``` - main - glavni sadržaj stranice
  * ```<section></section>``` - section - tematski grupiran sadržaj, u vezi s ostatkom sadržaja stranice
  * ```<article></article>``` - article - cjelina neovisnog samostalnog sadržaja
  * ```<aside></aside>``` - aside - sadržaj koji nije direktno povezan sa sadržajem koji ga okružuje
  * ```<figure></figure>``` - figure - ilustracija, dijagram, fotografija, kod kao zasebna cjelina
  * ```<address></address>``` - address - kontakt informacije
  * ```<details></details>``` - details - dodatni podaci (mogu se zatvoriti)
  * ```<summary></summary>``` - summary - vidljiv naslov za details

### Temelji pristupačnosti internetskih stranica

* Pristupačnost web rješenja:
  * mogućnost da se web rješenje koristi prema potrebama i mogućnostima korisnika
* Postiže se:
  * primjenom semantičkih HTML elemenata
  * pravilnom definicijom HTML atributa (npr. "alt" kao zamjenski tekst za grafike, "role" za davanje značenja elementima, "lang" kao oznaka jezika sadržaja itd.)
  * osiguranjem tekstualnog sadržaja kao alternative za ne-tekstualni sadržaj (npr. tekstualni transkript za audio sadržaj)
  * omogućavanjem korisnicima da prilagode vlastito sučelje (veličinu znakova, boje itd.)
  * više: https://www.w3.org/WAI/fundamentals/accessibility-principles/

## HTML Zadaci

### Zadatak

Na zadanom primjeru objasnite razliku između HTML oznake i atributa:

```HTML
<audio controls src="glazba/jingl.mp3"></audio>
```

#### Rješenje

* HTML **oznaka** (audio) - Određuje tip HTML elementa te daje značenje njegovom sadržaju
* HTML **atributi** (controls, src) - pruža dodatne informacije o sadržaju HTML elementa

### Zadatak

Potrebno je HTML dokumentu dodijeliti metapodatak koji opisuje njegov sadržaj u formi sljedeće rečenice "Službene stranice Učilišta Algebra". Što je potrebno napisati unutar `<head>` oznake HTML dokumenta kako bi se to postiglo?

#### Rješenje

```HTML
<meta name="description" content="Službene stranice Učilišta Algebra" />
```

### Zadatak

Potrebno je HTML dokumentu dodijeliti oznaku jezika sadržaja "en". Koji atribut je potrebno dodijeliti elementu <html> kako bi se to postiglo?

#### Rješenje

```HTML
<html lang="en"></html>
```

### Zadatak

Kod otvaranja HTML dokumenta u web pregledniku u njegovom zaglavlju ispisuje se naslov "Učilište Algebra". Pomoću kojeg HTML elementa je naslov dokumenta postavljen?

```HTML
<title>Učilište Algebra</title>
```

### Zadatak

Zadan je sadržaj: https://example.com/movie.mp4

Pomoću HTML-a objavite video sadržaj s kontrolama za upravljanje reprodukcijom sadržaja. Video formi dodijelite dimenzije 600 x 400 px. (zadatak riješiti u dostupnom code editoru).

#### Rješenje

```HTML
<video src="https://example.com/movie.mp4" controls width="600" height="400"></video>
```

### Zadatak

Zadan je sadržaj na sljedećoj relativnoj putanji:
galerija/panorama-grada.jpg

Pomoću HTML-a objavite grafiku te joj dodijelite dimenzije 720 x 500 px. Postavite zamjenski tekst "Panorama grada" (zadatak riješiti u dostupnom code editoru).

#### Rješenje

```HTML
<img src="galerija/panorama-grada.jpg" alt="Panorama grada" width="720" height="500" />
```

### Zadatak

Koji element koristimo za označavanje sadržaja koji predstavlja podnožje tijela stranice ili podnožje određene sekcije (sadrži autorska prava, kontakt podatke itd.)?

#### Rješenje

```HTML
<footer></footer>
```

### Zadatak

Koji element koristimo za označavanje sadržaja koji predstavlja cjelinu neovisnog (samostalnog) sadržaja u dokumentu?

#### Rješenje

```HTML
<article></article>
```

### Zadatak

Koji element koristimo za grupiranje sadržaja isključivo radi stiliziranja pomoću CSS-a (bez da mu damo značenje)?

```HTML
<div></div>
```

### Zadatak

Koji element koristimo za tematsko grupiranje sadržaja?

#### Rješenje

```HTML
<section></section>
```

### Zadatak

Što predstavlja pristupačnost web rješenja? Navedite nekoliko primjera kako se ona postiže.

#### Rješenje:

* Mogućnost da se web rješenje koristi prema potrebama i mogućnostima korisnika.
* Postiže se:
  * primjenom semantičkih HTML elemenata
  * pravilnom definicijom HTML atributa (npr. "alt" kao zamjenski tekst za grafike, "role" za davanje značenja elementima, "lang" kao oznaka jezika sadržaja itd.)
  * osiguranjem tekstualnog sadržaja kao alternative za ne-tekstualni sadržaj (npr. tekstualni transkript za audio sadržaj)
  * omogućavanjem korisnicima da prilagode vlastito sučelje (veličinu znakova, boje itd.)
  * više: https://www.w3.org/WAI/fundamentals/accessibility-principles/

## CSS - izgled i dizajn

### Što je CSS

* **CSS - Cascading Style Sheets**
  * aktualna verzija: CSS3
* računalni jezik koji koristimo za definiciju načina na koji će pojedini HTML elementi web stranice biti prikazani
  * izgled i format HTML elemenata web stranice
  * dopunjuje HTML
  * objavljen sadržaj dobiva skroman, unaprijed postavljen stil
  * daljnje uređivanje vrši se CSS jezikom
* omogućuje razdvajanje sadržaja dokumenta (definiranog HTML-om) od prezentacije (stila) dokumenta
  * pojednostavljuje te unaprjeđuje razvoj web stranica

### Pravila CSS-a

* sintaksa:
  * ```selektor {deklaracijski blok}```
  * ```selektor { deklaracija; deklaracija }```
  * ```selektor { svojstvo : vrijednost; svojstvo : vrijednost; }```
* pr.:

  ```CSS
  p { color:blue; font-size:16px; }
  ```

### Kako primijeniti CSS na HTML?

1. Linijski CSS
  * unutar HTML oznaka -> dodavanje atributa "style" HTML elementu
    * ne koriste se selektori
    * ograničava primjenu CSS pravila samo na element u kojemu su napisana
    * daje nepregledan kod
  * pr.:

    ```CSS
    <p style="color:red;font-size:16px;">Odlomak teksta</p>
    ```

2. Unutarnji CSS
  * pisanje u zaglavlju HTML dokumenta, unutar elementa `<style></style>`
    * traži upotrebu selektora
    * ograničava primjenu CSS pravila samo na HTML dokument u kojemu su napisana
      * uređivanje jedne web stranice na specifičan način
    * pr.:

      ```CSS
      <head>
        <meta charset="UTF-8">
        <title>HTML dokument</title>
        <style>
          p {
            color: red;
            font-size: 16px;
          }
        </style>
      </head>
      <body>
      ...
      ```

3. Vanjski CSS
  * pisanje u zasebnoj vanjskoj datoteci
    * traži upotrebu selektora
    * optimalna metoda pisanja CSS-a
      * omogućuje istovremeno uređivanje više HTML datoteka &rarr;  manje koda
      * razdvajanje sadržaja dokumenta (definiranog HTML-om) od prezentacije dokumenta
      * vanjska CSS datoteka se sprema u memoriji web preglednika &rarr; bolje performanse
      * viša ocjena web rješenja kod indeksiranja od strane tražilica
  * pr.:

    ```CSS
    ...
    <head>
      <meta charset="UTF-8">
      <title>HTML dokument</title>
      <link rel="stylesheet“ href="style.css">
    </head>
    <body>
    ...
    ```

### Minifikacija koda

* Prije objavljivanja web rješenja možemo minificirati CSS kod
  * s time ćemo smanjiti veličinu datoteke te ubrzati njeno preuzimanje sa poslužitelja
* pr. prije:

  ```CSS
  body {
    background-color: azure;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 18px;
    color: #333;
  }
  #zaglavlje img {
    max-width: 100%;
    height: auto;
  }
  ```

* pr. poslije:

  ```CSS
  body{background-color:azure;font-family:Verdana,Geneva,Tahoma,sans-
  serif;font-size:18px;color:#333}#zaglavlje img{max-width:100%;height:auto;}
  ```

### Selektori

* selektori određuju na koji će HTML element/e CSS pravilo biti primijenjeno
  * ne pišemo ih ako koristimo linijski zapis pravila - unutar HTML oznake
* vrste selektora:
  * jednostavni selektori
  * selektori atributa
  * pseudoklase
  * pseudo-elementi
  * kontekstualni selektori
  * grupni selektori
* detaljan opis svih tipova selektora: https://www.w3schools.com/cssref/css_selectors.asp

1. Jednostavni selektori
  * selektori HTML elemenata

    ```CSS
    h1 {
        color: red;
        font-size: 32px;
    }
    p {
        color: blue;
        font-size: 16px;
    }
    ul {
        color: green;
    }
    ```

  * selektori atributa class (više elemenata mogu imati istu klasu)

    ```CSS
    .stavka {
        color: red;
    }
    ```

  * selektori atributa id (ID jedinstven za element)

    ```CSS
    #odlomak1 {
        color: red;
    }
    #odlomak2 {
        color: green;
    }
    ```

2. Selektori atributa

    ```CSS
    [attr]
    [attr=val]
    [attr~=val]
    [attr^=val]
    [attr|=val]
    [attr$=val]
    [attr*=val]
    ```

3. Pseudoklase
  * stil se dodjeljuje prema stanju ili poziciji elementa

    ```CSS
    :first-child
    :last-child
    :nth-child()
    :first-of-type
    :last-of-type
    :nth-last-child()
    ```

  * poveznicama &rarr; omogućuju dodjeljivanje drugačijeg stila ovisno o njihovom stanju

    ```CSS
    :link
    :visited
    :hover
    :focus
    :active
    ```

4. Pseudoelementi
  * omogućuju postavljanje sadržaja iza ili ispred sadržaja elementa
  * omogućuju uređivanje dijela sadržaja elementa

    ```CSS
    ::after
    ::before
    ::first-letter
    ::first-line
    ::selection
    ::marker
    ```

5. Kontekstualni selektori (Combinators)
  * omogućuju dohvaćanje željenog elementa s obzirom na kontekst u kojem se nalazi
    * stil se dodjeljuje elementima s obzirom na njihovu poziciju unutar HTML koda
  * mogu uključiti sve tipove selektora
  * primjeri - stil se dodjeljuje:

    ```CSS
    div p {...}                         /* elementu p unutar elementa div */
    div > p {...}                      /* elementu p kojemu je roditelj element div */
    #sadrzaj > p a {...}         /* elementu a unutar elementa p kojemu je roditelj element s id-om sadrzaj*/
    div + p {...}                      /* svakom elementu p koji je smješten odmah iza elementa div unutar istog roditelja */
    div ~ p {...}                      /* svakom elementu p koji je smješten iza elementa div unutar istog roditelja */
    ```

6. Grupiranje selektora
  * pr.:

    ```CSS
    p, a, table{...}
    p, .element1, #odlomak1{...}
    [title], a[target="_blank"]{...}
    div a, header a{...}
    ...
    ```

### CSS varijable

* Spremnik za vrijednost koja se može više puta iskoristiti unutar dokumenta
  *  naziv joj započinje sa znakom `"--"`
  *  pristupa joj se preko funkcije `var()`
  *  pr.:

    ```CSS
    :root {
        --blue: #1e90ff;
        --white: #ffffff;
    }
    body {
        background-color: var(--blue);
    }
    ```

### Uređivanje fonta znakova

* za uređivanje fonta znakova koristimo sljedeća svojstva:
  * `font-family` &rarr; Određivanje obitelji fonta znakova - određuje stilska svojstva znakova.
  * `@font-face`  &rarr; Moguće je koristit fontove koji nisu instalirani na računalima korisnika.
  * `font-size` &rarr; Veličina znakova.
  * `font-style` &rarr; Prikaz nakošenih ili kurzivnih znakova.
  * `font-weight` &rarr; Debljina znakova.
  * `font-variant` &rarr; Veliki znakovi manjeg formata.
  * `line-height` &rarr; Visina linije znakova.
  * ***Kraći zapis*** &rarr; `font: font-style font-variant font-weight font-size/line-height font-family;`

### Uređivanje teksta

* za uređivanje teksta koristimo sljedeća svojstva::
  * `color` &rarr; Boja znakova.
  * `text-align` &rarr; Poravnanje sadržaja unutar elementa (znakovi i pod elementi reda).
  * `text-decoration` &rarr; Dekoriranje znakova.
  * `text-transform` &rarr; Prikaz slovnih znakova u velikom ili malom formatu.
  * `text-shadow` &rarr; Primjena sjene nad znakovima - moguće postaviti više sjena.
  * `text-indent` &rarr; Uvlačenje prve linije znakova.
  * `word-spacing` &rarr; Razmak između riječi.
  * `letter-spacing` &rarr; Razmak između znakova.
  * `vertical-align` &rarr; Vertikalno poravnanje pod elementa reda.
  * `word-wrap` &rarr; Prijelom riječi koje ne stanu u jedan red.

### Uređivanje pozadine

* za uređivanje pozadine elemenata, koristimo sljedeća svojstva:
  * `background-color` &rarr; Pozadinska boja.
  * `background-image` &rarr; Pozadinska slika (jedna ili više) te gradijent (linearni, radijalni i konusni).
  * `background-repeat` &rarr; Način ponavljanja pozadinske slike.
  * `background-attachment` &rarr; Da li je pozadinska slika fiksirana ili se pomiče s ostatkom sadržaja.
  * `background-position` &rarr; Pozicija pozadinske slike.
  * `background-size` &rarr; Veličina pozadinske slike.
  * **kraći zapis** &rarr; `background: bg-image1 bg-repeat1 position1/bg-size1 bg-attachment1, bg-color bg-image2 bg-repeat2 position2/bg-size2 bg-attachment2;`

### BOX model

* prikazuje strukturu HTML elementa
* HTML element može sadržavati:
  * sadržaj
    * tekst, slika ili drugi oblik sadržaja
  * ispunu
    * područje oko sadržaja, preuzima pozadinu elementa kojemu pripada
  * okvir
    * uokviruje ispunu i sadržaj
  * marginu
    * prazno područje oko okvira
    * transparentna &mdash; na nju ne utječe pozadina elementa kojemu pripada

### Podešavanje dimenzija elementa

* za postavljanje dimenzija elementa koristimo sljedeća svojstva:
  * `width` &mdash; Širina područja sadržaja elementa.
  * `height` &mdash;  Visina područja sadržaja elementa.
  * `max-width / max-height` &mdash; Maksimalna širina / visina područja sadržaja elementa.
  * `min-width / min-height` &mdash; Minimalna širina / visina područja sadržaja elementa.
  * `box-sizing` &mdash; Promjena zadanog načina računanja dimenzija elementa.

### Podešavanje ispune, okvira i margine

* za postavljanje ispune, okvira i margine koristimo sljedeća svojstva:
  * `padding` &mdash; Dimenzije ispune.
  * `padding-[top, right, bottom, left]` &mdash; Dimenzije pojedinih strana ispune.
  * `border-width` &mdash; Debljina okvira.
  * `border-style` &mdash; Stil okvira.
  * `border-color` &mdash; Boja okvira.
  * `border-[top-, right-, bottom-, left-]` &mdash; Podešavanje pojedinih strana okvira.
  * `margin` &mdash; Dimenzije margine.
  * `margin-[top, right, bottom, left]` &mdash; Dimenzije pojedinih strana margine.

### Kako su elementi prikazani

* dvije osnovne skupine HTML elemenata:
  * blok elementi
    * zauzima cijelu dostupnu širinu roditelja &mdash; može se utjecati na širinu i visinu
    * iza i ispred elementa slijedi novi red
    * moguće je utjecati na sve strane ispune i margine
  * elementi reda
    * zauzima samo potrebnu širinu za prikaz sadržaja &mdash; ne može se utjecati na širinu i visinu
      * postoje iznimke &rarr;  img, video ...
    * moguće je postaviti druge elemente reda u isti red
    * ne mogu sadržavati pod elemente iz grupe blok
    * moguće je utjecati samo na lijevu i desnu stranu ispune i margine
      * gornja i donja ispuna se mogu postaviti (pozadina i okvir okolo), ali neće utjecati na pozicije susjednih elemenata
      * postoje iznimke &rarr;  img, video ...

### Kako su elementi prikazani

* promjena načina kako su HTML elementi prikazani:
  * `display` &rarr; Način prikazivanja elementa (promjena grupe kojoj pripada)
    * moguće vrijednosti: `inline` / `block` / `inline-block` / `flex` / `grid` / `none` / `...`

### Uređivanje elemenata &mdash; dodatna svojstva

* dodatna svojstva:
  * `border-radius` / `border-top-left-radius` /  `border-top-right-radius` / `border-bottom-right-radius` / `border-bottom-left-radius` &mdash; postavljanje zaobljenih kuteva
  * `box-shadow` &mdash; Postavljanje sjene elementu &mdash;  moguće postaviti više sjena.
  * `overflow` &mdash; Ponašanje elementa ako sadržaj prekoračuje njegove dimenzije.
  * `clip-path` &mdash; Isječak vidljivog dijela elementa.
  * `opacity` &mdash; Definiranje transparentnosti elementa
  * `resize` &mdash; Omogućuje promjenu dimenzije elementa od strane korisnika.

### Metode pozicioniranje elemenata

* metode pozicioniranja:
  * `static` &mdash; statično pozicioniranje (unaprijed zadano, pomaci nemaju efekta)
  * `relative` &mdash; relativno pozicioniranje
  * `absolute` &mdash; apsolutno pozicioniranje
  * `fixed` &mdash; fiksno pozicioniranje
  * `sticky` &mdash; ljepljivo pozicioniranje (relative + fixed)

* metodu pozicioniranja postavljamo svojstvom position:
  * pr.:

    ```CSS
    header {position: fixed;}
    ```

* nakon postavljanja metode, elementi se pozicioniraju sljedećim
svojstvima
  * horizontalni pomak (px, %, ...)
    * `left`
    * `right`
  * vertikalni pomak (px, %, ...)
    * `top`
    * `bottom`
  * preklapanje – jedan iza drugog (-10, -1, 0, 1, 10, ...)
    * `z-index`

### Izrada layout-a: Flexible Box Layout

* pr.:

  ```CSS
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">5</div>
    <div class="flex-item">6</div>
    <div class="flex-item">7</div>
    <div class="flex-item">8</div>
  </div>
  ...
  .flex-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    height: 600px;
  }
  .flex-item {
    flex-basis: 32%;
    width: 24%;
  }
  .flex-item:nth-child(4n + 1) {
    flex-basis: 100%;
  }
  ```

### CSS transformacije

* omogućuju promjenu oblika, pozicije i veličine HTML elementa
* definicija:
  * `transform: metoda();`
  * `transform: metoda1() metoda2() ...;`
* postoje:
  * 2D transformacije
  * 3D transformacije
*  Primjeri metoda transformacija:
   *  `translate(x,y)` &mdash; Element se pomiče po x i y osi (px, %, ...).
   *  `rotate(deg)` &mdash; Element se rotira (deg) – 2D rotacija.
   *  `scale(x,y)` &mdash; Element se skalira u zadanom omjeru.
   *  `skew(deg)` &mdash; Element se iskrivljava po x i y osi (deg).
   *  `rotatex(deg)` &mdash; Element se rotira oko x osi (deg) &mdash; 3D rotacija.
   *  `rotatey(deg)` &mdash; Element se rotira oko y osi (deg) &mdash; 3D rotacija.
      * **napomena**: deg &rarr; stupnjevi
 * pr.:

    ```CSS
    div {
    transform: translate(50px, 100px);
    }
    ```

### CSS tranzicije
 * omogućuje prijelaz elementa iz jednog stila u drugi, koji se odvija postepeno u zadanom vremenskom trajanju
 * prijelaz se aktivira:
   * pomoću pseudo klase
     * `:hover` &rarr; promjena stila kada pokazivač miša prijeđe preko elementa
     * `:focus` &rarr; promjena stila kada element dobije fokus
   * pomoću skripte (JavaScript)
 * definicija (svojstva):
   * `transition-property` &mdash; Svojstva nad kojima se primjenjuje tranzicija.
   * `transition-duration` &mdash; Vrijeme koliko dugo tranzicija traje (ms ili s).
   * `transition-timing-function` &mdash; Određuje krivulju brzine tranzicije.
   * `transition-delay` &mdash; Odgoda početka tranzicije (ms ili s).
   * **Kraći zapis**: `transition: property duration timing-function delay;`
 * pr.:

    ```CSS
    div {
      transition: background 1s ease-in-out, transform 0.5s linear;
    }
    div:hover {
      background: red;
      transform: scale(1.2, 2) skew(10deg, 5deg);
    }
    ```

### CSS animacije

* više povezanih tranzicija
* omogućuju da se stil HTML elementa postepeno mijenja iz
jednog u drugi
* CSS animacije se definiraju u dva osnovna koraka:
  1. pravilo `@keyframes` &rarr; definira samu animaciju, njezine ključne kadrove i svojstva koja se animiraju
  2. svojstvo `animation` &rarr; dodjeljuje animaciju određenom elementu i definira kako je animiran
* svojstvoa animation:
  * `animation-name` &mdash; Naziv animacije.
  * `animation-duration` &mdash; Vrijeme trajanja ciklusa animacije (ms ili s).
  * `animation-timing-function` &mdash; Određuje krivulju brzine animacije.
  * `animation-delay` &mdash; Odgoda početka animacije (ms ili s).
  * `animation-iteration-count` &mdash; Broj koliko puta će se animacija izvršiti (infinite: neograničeno).
  * `animation-direction` &mdash; Smjer izvršavanja animacije.
  * `animation-fill-mode` &mdash; Određuje stil elementa u vremenu kada je animacija zaustavljena.
  * `animation-play-state` &mdash; Određuje da li se animacija izvršava.
  * **Kraći zapis** &rarr; `animation: name duration timing-function delay iteration-count direction fill-mode play-state;`

* pr.:

  ```CSS
  @keyframes animacija1 {
    0% {
      top: 0px;
      left: 0px;
      background: red;
    }
    50% {
      top: 100px;
      left: 100px;
      background: yellow;
    }
    100% {
      top: 0px;
      left: 0px;
      background: red;
    }
  }

    ...

  div {
    animation: animacija1 5s linear 2s infinite alternate;
  }
  ```

### Responzivni web dizajn

* Responzivni dizajn predstavlja standard suvremenog web razvoja
* Web rješenje je responzivno:
  * kada se prilagođava karakteristikama uređaja na kojemu se pregledava
    * najčešće veličini ekrana uređaja
  * kada omogućava dobro korisničko iskustvo, bez obzira na uređaj koji se koristi za njegovo pregledavanje
  * kada se samo automatski prilagodi karakteristikama uređaja
    * izrađuje se samo jedna verzija web rješenja, što omogućava njegovo jednostavno održavanje i optimizaciju radu tražilica (SEO)
* Viewport:
  * korisniku vidljivo područje web stranice &mdash; ovisi o karakteristikama uređaja na kojemu se stranica pregledava
    * jednako veličini prostora prozora web preglednika unutar kojeg se pregledava web stranica
  * HTML5 je omogućio kontrolu nad vidljivim područjem upotrebom <meta> elementa:
    * daje uputu web pregledniku kako da kontrolira dimenzije web stranice i njeno skaliranje

    ```CSS
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ```
    * `width` &mdash; Širina sučelja je jednaka širini zaslona uređaja
    * `initial-scale` &mdash; Početna razina zumiranja stranice kod njenog učitavanja u web preglednik

###  Media Queries

* Media Query:
  * pomoću `@media` upita određeni CSS blok se uzima u obzir samo kod ispunjenja zadanog uvjeta
    * omogućuje primjenu drugačijih stilova stranice na uređajima različitih karakteristika
  * uvjet za primjenu definiranog stila može biti:
    * tip medija
    * širina i visina vidljivog područja stranice (viewport)
    * širina i visina zaslona uređaja
    * orijentacija (portret ili pejzaž)
    * rezolucija
    * ...
* primjena određenog CSS bloka samo ako je zadovoljeni zadani uvjet:

  ```CSS
  @media not|only mediatype and (media feature) and|, (media feature) {
    .my-code { ... }
  }
  @media (media feature) {
    .my-code { ... }
  }
  ```

* primjena cijele vanjske CSS datoteke samo ako je zadovoljeni zadani uvjet:

  ```CSS
  <link rel="stylesheet" media="mediatype and (media feature)" href="style.css" />
  ```

### Predprocesori

* Predprocesori
  * skriptni jezici koji proširuju zadane mogućnosti CSS-a
  * omogućuju upotrebu logike, varijabli, ugnježđivanja, nasljeđivanja, funkcija te matematičkih operacija
  * automatiziraju ponavljajuće zadatke, smanjuju broj pogrešaka, stvaraju dijelove koda za višekratnu upotrebu te osiguravaju kompatibilnost sa starijim verzijama web preglednika
  * najpopularniji: *Sass*, *Less* i *Stylus*
* Ulazni kôd &rarr; compiler &rarr; CSS
* Varijable

  ```SCSS
    $red: #833;
    body {
     color: $red;
    }
  ```

* Nesting

  ```SCSS
  .markdown-body {
    p {
      color: blue;
    }
  }
    &:hover {
        color: red;
    }
  }
  ```

* Extend

  ```SCSS
  .button {
    ...
  }
  .push-button {
    @extend .button;
  }
  ```

* Composing - učitavanje css/scss datoteka u našu. Omogućuje modularnost SCSS-a.
* partials - css datoteka imena koji počinje s underscore (kao `_name.scss`) i služi samo za uključivanje u glavnu datoteku, ne pretvara se u css. Uključuje se s `@use './name'` ili ~~`@import './name'`~~


  ```SCSS
  @import './other_sass_file'; // deprecated
  @use './other_sass_file';
  ```

* Mixins - blokovi koda koje možemo ponovno koristiti, odnosno pomažu nam da ne ponavljamo kod. Primaju argumente i vraćaju CSS pravila čime pomažu kreirati dinamike stilove i modularnog koda.

  ```SCSS
  @mixin heading-font {     // definiramo mixin stil
    font-family: sans-serif;
    font-weight: bold;
  }
  h1 {
    @include heading-font;  // uključujemo mixin stil
  }

  @mixin font-size($n) {
    font-size: $n * 1.2em;
  }
  body {
    @include font-size(2);
  }

  @mixin pad($n: 10px) {
    padding: $n;
  }

  body {
    @include pad(15px);
  }
  ```
* function - scss funkcije - blokovi koda koji omogućuju definiranje  kompleksnih operacija nad sass vrijednostima koje je moguće koristiti više puta. Omogućuju apstrakciju koda.

  ```SCSS
  @function name($val1, $val2) {
    @return $val1 * $val2;
  }

  p {
    prop: name(2,3);
  }
  ```

* For loops

  ```SCSS
  @for $i from 1 through 4 {
    .item-#{$i} { left: 20px * $i; }
  }

  @mixin pad($n: 10px) {
    padding: $n;
  }

  body {
    @include pad(15px);
  }
  ```

* Each loops

  ```SCSS
  $menu-items: home about services contact;

  @each $item in $menu-items {
    .photo-#{$item} {
      background: url('images/#{$item}.jpg');
    }
  }
  ```

* Conditionals

  ```SCSS
  @if $position == 'left' {
    position: absolute;
    left: 0;
  } @else {
    position: static;
  }
  ```

* Maps

  ```SCSS
  $map: (key1: value1, key2: value2, key3: value3);
  map-get($map, key1)
  ```
## CSS Zadaci

### Zadatak

Nadopunite isječak koda tako da elementu dodijelite crvenu boju znakova preko linijskog zapisa.

```HTML
<p>Lorem ipsum dolor</p>
```

#### Rješenje

```HTML
<p style="color: red;">Lorem ipsum dolor</p>
```

### Zadatak

Nadopunite isječak koda tako da u zaglavlju HTML dokumenta dohvatite vanjsku CSS datoteku sa sljedeće lokacije: css/style.css

```HTML
<head>
</head>
```

#### Rješenje

```HTML
<head>
  <link rel="stylesheet" href="css/style.css" />
</head>
```

### Zadatak

Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve HTML elemente koji sadrže atribut title s točnom vrijednošću "Učilište Algebra".

```CSS
{
  display: inline-block;
  padding: 2em;
  color: #eee;
  font-size: 20px;
}
```

#### Rješenje:

```CSS
[title="Učilište Algebra"] {
  display: inline-block;
  padding: 2em;
  color: #eee;
  font-size: 20px;
}
```

### Zadatak

Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve HTML elemente koji sadrže atribut title u čijoj vrijednosti se bilo gdje nalazi izraz "Algebra".

```CSS
{
  display: inline-block;
  padding: 2em;
  color: #eee;
  font-size: 20px;
}
```

#### Rješenje

```CSS
[title*="Algebra"] {
  display: inline-block;
  padding: 2em;
  color: #eee;
  font-size: 20px;
}
```

### Zadatak

Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve HTML elemente koji sadrže atribut title na početku čije vrijednosti se nalazi izraz "Algebra".

```CSS
{
  display: inline-block;
  padding: 2em;
  color: #eee;
  font-size: 20px;
}
```

#### Rješenje

```CSS
[title^="Algebra"] {
  display: inline-block;
  padding: 2em;
  color: #eee;
  font-size: 20px;
}
```

### Zadatak

Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve posjećene poveznice `<a>` (one koje su već bile otvarane).

```CSS
{
  display: inline-block;
  padding: 2em;
  color: #eee;
  font-size: 20px;
}
```

#### Rješenje

```CSS
a:visited {
  display: inline-block;
  padding: 2em;
  color: #eee;
  font-size: 20px;
}
```

### Zadatak

Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve slike `<img>` iznad kojih je postavljen pokazivač miša.

```CSS
{
  transform: scale(1.1);
}
```

#### Rješenje

```CSS
img:hover {
  transform: scale(1.1);
}
```

### Zadatak

Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve paragrafe `<p>` koji su prvo dijete, određenog tipa, svog roditelja.

```CSS
{
  color: #eee;
  font-size: 20px;
}
```

#### Rješenje

```CSS
p:first-of-type {
  color: #eee;
  font-size: 20px;
}
```

### Zadatak

Nadopunite isječak koda odgovarajućim selektorom tako da ugradite sadržaj "Upamti: " sa zadanim stilovima prije postojećeg sadržaja naslova 1. razine `<h1>`.

```CSS
{
  content: "Upamti: ";
  color: red;
  background-color: yellow;
}
```

#### Rješenje

```CSS
h1::before {
  content: "Upamti: ";
  color: red;
  background-color: yellow;
}
```

### Zadatak

Vrijednost varijable "text-color" postavite kao boju znakova svih paragrafa.

```CSS
:root {
  --text-color: #333;
}
  p {
}
```

#### Rješenje

```CSS
:root {
  --text-color: #333;
}
p {
  color: var(--text-color);
}
```

### Zadatak

Zadan je `<article>` element koji sadrži tekstualni sadržaj. Koristeći CSS selektirajte element i uredite ga tako da odgovara obliku na slici (pomoću margina centrirajte područje sadržaja elementa). Pretpostavite veličine i boje, one ne moraju biti u potpunosti točne.


#### Rješenje

```CSS
article {
  background-color: #eee;
  text-align: justify;
  width: 300px;
  border: 5px solid #666;
  margin: 2em auto;
  padding: 2em;
}
```

### Zadatak

Zadan je `<article>` element koji sadrži tekstualni sadržaj. Koristeći CSS selektirajte element i uredite ga tako da odgovara obliku na slici (pomoću margina područje sadržaja elementa postavite na desnu stranu). Pretpostavite veličine i boje, one ne moraju biti u potpunosti točne.

#### Rješenje

```CSS
article {
  background-color: #eee;
  text-align: justify;
  width: 25%;
  border-left: 8px double #666;
  border-right: 5px dashed #666;
  margin: 2em 0 2em auto;
  padding: 2em 4em;
}
```

### Zadatak

Na prazno mjesto upišite izraz za poziv SCSS funkcije "margin" te joj dodijelite dva cjelobrojna argumenta.

```SCSS
@function margin($a, $b) {
  @return $a * $b;
}
p {
  margin-top: ____________ * 1px;
}

```

#### Rješenje

```SCSS
@function margin($a, $b) {
  @return $a * $b;
}

p {
  margin-top: margin(3, 2) * 1px;
}
```

### Zadatak

Unutar pravila koje obuhvaća sve elemente tipa `<section>` primijenite SCSS mixin "flex-container".

```SCSS
@mixin flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

section {

}
```

#### Rješenje

```SCSS
@mixin flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

section {
  @include flex-container;
}

```

### Zadatak

Dohvatite "partials" datoteku sa sljedeće lokacije: `base/_color.scss`

#### Rješenje

```SCSS
@import "base/color";
```

### Zadatak

Kako se naziva proces prilagodbe CSS koda za produkciju, čime se smanjuje veličina datoteke te ubrzava njeno preuzimanje sa poslužitelja?

#### Rješenje

Proces se naziva minifikacija ili minimizacija CSS koda.

## Zadatak

Napravi oblik sa slike u css-u unutar `<div>` elementa. (Na slici je crveni List nagnut u desno).

### Rješenje

```HTML
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      .box {
        width: 200px;
        height: 200px;
        border-top-left-radius: 200px;
        border-bottom-right-radius: 200px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
  </html>
```

## JavaScript &mdash; klijentsko skriptiranje

### Što je JavaScript?

* JavaScript:
  * skriptni jezik &mdash; programski jezik koji omogućuje upravljanje aplikacijom u koju je ubačen
    * automatizira izvršavanje zadataka
  * može se koristiti i na strani klijenta i na strani poslužitelja. Mi učimo njegovu primjenu na strani klijenta:
    * osigurava interaktivnost i dinamičnost HTML stranice
      * njime se programira ponašanje web stranice
  * za napredniji rad dostupan je veliki broj razvojnih okvira i biblioteka (jQuery, React, ...)

### Klasifikacija jezika

* JavaScript je skriptni programski jezik visoke razine, dobar i za **objektno-orijentirano** i za **funkcijsko** programiranje.
* Skup funkcija koje pruža ovisi o okolini u kojoj se koristi
* JavaScript jezik se razvija prema **ECMAScript specifikaciji**:
  * opisuje sintaksu i ponašanje programskog jezika
  * definira standard za implementaciju JavaScript jezika

### Ugradnja JavaScripta u HTML

1. Linijski (inline), između oznaka `<script>` i `</script>`
2. Iz vanjske datoteke definirane src atributom `<script>` elementa
3. U atributu HTML elementa kojemu se dodjeljuje događaj (onclick, onmouseover itd.)
4. U URI-u koji koristi poseban javascript: protokol (blokirano od strane modernih web preglednika)

    ```HTML
    <script>
    ...
    </script>
    <script src="script.js"></script>
    ```

### Sinkrone, asinkrone i odgođene skripte

Različiti tipovi učitavanja:
1. **Sinkrono** &mdash; uključenje JS skripte prije kraja `<body>` elementa - kad je 99% html-a već učitano
2. **Asinkrono** &mdash; stavljanjem **`async`** atributa na `<script>` element: load-anje skripte ne blokira dokument
3. **Odgođeno** &mdash; stavljanjem **`defer`** atributa na `<script>` element: ni load-anje ni izvođenje JS-a neće blokirati dokument

### Vrijednosti

* **Literali** su nepromjenjive vrijednosti, poput brojeva i teksta.

* **Varijable** su promjenjive i koriste se za spremanje podataka.
  * koriste ključnu riječ **`var`** za deklaraciju
  * koriste znak jednakosti **`=`** za dodjeljivanje vrijednosti
  * puni izraz za varijablu `x`
  ```JS
    var x = 1;
  ```

### Deklaracija

Djelokrug (doseg) varijabli:
  * globalni djelokrug (**globalne** varijable)
    * definiraju se izvan funkcija
    * mogu se koristiti u čitavom programu, zatvaranjem stranice brišu se
  * djelokrug funkcije (**lokalne** varijable)
    * definiraju se unutar funkcije te se mogu koristiti samo unutar nje
    * izlaskom iz funkcije brišu se
  * djelokrug **bloka**
    * definiraju se unutar bloka `{}` pomoću ključne riječi `let` ili `const`
    * dostupne su samo unutar bloka u kojemu su definirane
    * moraju se deklarirati prije upotrebe te se ne mogu ponovo deklarirati

### Imenovanje

* **Identifikator** &mdash; jednostavno ime za imenovanje varijabli i funkcija i za pružanje oznaka za određene petlje u JavaScript kodu.

* Ima par pravila kod imenovanja:
1. JavaScript razlikuje velika i mala slova
2. Naziv mora početi sa **slovom**, **podvlakom (_)** ili **znakom dolara ($)** (*ne znamenka!*)
3. Sljedeći znakovi mogu biti **slova**, **znamenke**, **podvlake** ili **$**
4. Ključne riječi se ne smiju koristiti kao identifikatori

### Tipovi podataka u JavaScriptu

* Primitivni
  - brojevi
  - znakovni nizovi
  - logičke vrijednosti
  - undefined
  - null
* Objektni
  * objekti
  * nizovi
  * funkcije

### String

* **String** je niz znakova (0 ili više) okružen navodnicima.
  * Navodnici mogu biti jednostruki ili dvostruki.
  * Brojanje pozicije znaka u string-u počinje od **nule**!

  ```JS
  var myString = "";          // prazan string
  myString = "Lorem ipsum";
  myString = " Lorem ipsum";  // string sa prazninama na početku
  ```

* Svojstva i metode
  * `length` &mdash; Duljina stringa
  * `charAt()` &mdash; Vraća znak na poziciji
  * `trim()` &mdash; Miče praznine na početku i kraju string-a
  * `indexOf()` &mdash; Vraća poziciju string-a unutar string-a
  * `search()` &mdash; Traži da li se izraz nalazi unutar znakovnog niza – vraća poziciju podudaranja
  * `replace()` &mdash; Vraća novi string sa zamijenjenim izrazom
  * `toUpperCase()` &mdash; Pretvara string-u u sva velika slova
  * `substring()` &mdash; Vraća dio znakovnog niza između dvaju indeksa
  * `concat()` &mdash; Povezuje više nizova u jedan

### Tipovi operatora

* Po tipu operacije
  * Logički &mdash; `&& || !`
  * Artimetički &mdash; `+ - * / % ** ++ --`
  * Operatori dodjeljivanja &mdash; `= += -= *= /= %= **=`
  * Relacijski &mdash; `== === != !== > < >= <= ?`
  * Bitovni (bitwise) &mdash; `& | ~ ^ << >> >>>`
  * Operator konkatenacije &mdash; `+`
  * Ostali &mdash; `delete`, `typeof`, `void`, `instanceof`, `in`, `?.`, `??`, `??=`

### Vrste izjava (kontrolne strukture)

* **Uvjetno grananje:**
  *  izvršava se ili preskače blok naredbi ovisno o istinitosti zadanog uvjeta &rarr; kod se grana na više dijelova od kojih će se samo jedan izvršiti.
* **Petlje (iteracije):**
  * blok naredbi se izvršava više puta.
* **Skokovi** (poput break, return, throw):
  * naređuju interpreteru da skoči na neki drugi dio programa.

### Uvjetno grananje

* **`If`**

  ```JS
  if (izraz) {
    // Izvrši kod u bloku #1
  }
  ```

* **`if - else if`**

  ```JS
  if (izraz) {
    // Izvrši kod u bloku #1
  } else if (izraz2) {
    // Izvrši kod u bloku #2
  }
  ```

* **`switch`**
  * Switch izjava je bolja alternativa kompliciranim if izjavama.

  ```JS
  switch(n) {
    case 1:
      // Execute code block #1.
      break;
    case 2:
      // Execute code block #2.
      break;
    default:
      // Execute code block #3.
  }
  ```

### Petlje

* **`while`**

  ```JS
  var count = 0;
  while (count < 10) {
    console.log(count);
    count++;
  }
  ```

* **`do ... while`**

  ```JS
  var count = 0;
  do {
    console.log(count);
    count++;
  } while (count < 10);
  ```

* **`for`**

  ```JS
  for (var count = 0; count < 10; count++) {
    console.log(count);
  }
  ```

* **`for ... in`**

  ```JS
  for (var i in nazivObjekta) {
    /* ... */
  }
  ```

* `continue` - izjava preskače obradu trenutnog člana petlje i nastavlja sa sljedećim

  ```JS
  for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
  }
  ```

* `break` - izjava prekida petlju i izlazi iz nje

  ```JS
  for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
  }
  ```

### Niz (array)

* ***Niz je sortirana zbirka vrijednosti.***
  * Svaka pojedina vrijednost u nizu se naziva elementom niza. Može biti bilo kojeg JS tipa podatka, a sam niz je tipa objekt. Niz prepoznajemo po uglatim zagradama ( `[]` )

  ```JS
  var name1 = 'John';
  var name2 = 'Jane';
  var name3 = 'Mike';

  var names = ['John', 'Jane', 'Mike'];

  console.log(names);
  console.log(typeof(names));
  ```

#### Elementi niza - Postavljanje i dohvaćanje

* Za razliku od klasičnih objekata, elementi u nizu se dohvaćaju brojkom (ne-negativnim interger-om), tj. **index**-om elementa.
* Index-i elemenata počinju od **nule**.
* Nizovi se mogu proširivati i smanjivati po volji.

  ```JS
  var names = ['John', 'Jane', 'Mike'];
  var name1 = names[0];

  names[3] = 'Holly';
  ```

* iteriranje unutar niza

  ```JS
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }

  names.forEach(function(value){
    console.log(value);
  });
  ```

#### Svojstva i metode nad nizom

* `length` &mdash; Vraća duljinu niza
* `push()` &mdash; Dodaje element na kraj niza
* `pop()` &mdash; Miče zadnji element niza
* `splice()` &mdash; Na zadanoj poziciji dodaje ili briše željeni broj elemenata
* `filter()` &mdash; Vraća novi niz popunjen s elementima početnog niza koji zadovoljavaju zadani uvjet
* `reverse()` &mdash; Obrne redoslijed elemenata u nizu
* `sort()` &mdash; Sortira elemente niza (default: po abecedi)
* `forEach()` (ES5)Iterira kroz niz, pozivajući funkciju koju odredite za svaki element
* `map()` (ES5)Prosljeđuje svaki element niza funkciji i vraća niz koji sadrži vrijednosti vraćene tom funkcijom

### Funkcija

* **Funkcija** &mdash; je blok JavaScript koda koji izvršava neki zadatak.
* U drugim jezicima funkcija se naziva procedura ili subrutina.
* Funkcije koristimo jer njezin kod možete **ponovo upotrijebiti**: definirajte ga jednom i koristite ga više puta.
* Možete koristiti isti kod **više puta s različitim argumentima** za dobivanje različitih rezultata.

#### Definicija i pozivanje funkcije

* definicija

  ```JS
  function nazivFunkcije() {
    // nesto napravi
  }
  ```

* pozivanje

  ```JS
  nazivFunkcije();
  ```

#### "Return" - ključna riječ

* Svaka funkcija vraća vrijednost undefined, osim ako upotrijebimo ključnu riječ `return`
* Vraća izračunatu vrijednost iz funkcije
* U slučaju izjave return prije kraja funkcije, ostatak funkcije je ignoriran (izvršavanje funkcije se prekida)

  ```JS
  function nazivFunkcije() {
    var value = 1;
    return value;
  }
  console.log(nazivFunkcije());

  function nazivFunkcije() {
    var value = 1;
    return value;
    value += 1;
  }
  console.log(nazivFunkcije());
  ```

#### Parametri i argumenti

* Definicija funkcije može (ali ne mora) sadržavati popis identifikatora, poznatih kao **parametri**, koji djeluju kao lokalne varijable za tijelo funkcije
  * parametri - kod definicije funkcije
  * **argumenti** - kod poziva funkcije

  ```JS
  function udaljenostKoordinata(x1, y1, x2, y2) // PARAMETRI
  {
    var dx = x2 - x1;
    var dy = y2 - y1;
    console.log(Math.sqrt(dx*dx + dy*dy));
  }

  udaljenostKoordinata(1,1,3,4);  // ARGUMENTI
  ```

### JavaScript OOP

* JavaScript je dizajniran da bude objektno-orijentiran jezik.
* **Objektno-orijentirano programiranje**:
  * metoda programiranja koja se temelji na upotrebi objekata u izradi računalnih programa
  * **objekt** &rarr; programska struktura koja se sastoji od
    * **svojstva** (podatkovne vrijednosti) koja ga opisuju
    * **metoda** (radnje), čijim izvršavanjem se njime upravlja
  * primjena objekata program čini razumljivijim, lakšim za održavanje, u pravilu ga skraćuje te omogućuje njegovo brže izvršavanje

#### Kreiranje objekta

Možemo kreirati objekt pomoću:
* **literala**
   * kreira se jedan primjerak objekta, zajedno s pripadajućim podacima
   * za dohvaćanje svojstva unutar definicije objekta koristimo ključnu riječ **`this`**

  ```JS
  var dog = {
    breed: 'Golden retriever',
    bark: function() {
      return this.breed + ' says Wuf Wuf';
    }
  };

  var firstBreed = dog.breed;
  var whatDogSays = dog.bark();
  ```

* operatora **new**
* **`Object.create()`** metode
* funkcije **konstruktora**
  * kreira se predložak, putem kojeg je moguće kreirati neograničen broj objekata istog tipa, ali drugačijih podataka
  * objekt &rarr; primjerak (instanca) predloška, kreiran u vremenu izvršavanja programa
    * *NAPOMENA*: kako bi se približio drugim objektno orijentiranim programskim jezicima, JavaScript omogućuje upotrebu klasa umjesto funkcija konstruktora
  * konstruktor &mdash; funkcija dizajnirana za inicijalizaciju novostvorenih objekata.
  * Riječ **new** ispred bilo koje funkcije pretvara poziv funkcije u poziv konstruktora.

  ```JS
  function Dog() {
    this.hasSit = false;
    this.bark = function() {
      return 'Wuf Wuf';
    }
    this.doSit = function() {
      this.hasSit = true;
    }
  }

  var dog = new Dog();
  dog.bark();
  ```

#### OOP - Nasljeđivanje

* Nasljeđivanje &mdash; dijeljenje zajedničkih svojstva i metoda između objekata različitih tipova (kreiranih iz različitih funkcija konstruktora)
* u JavaScript jeziku nasljeđivanje se realizira pomoću **prototip objekta**:
  * objekt koji je povezan sa svakom funkcijom i objektom
  * omogućuje:
    * implementaciju nasljeđivanja
    * dodjeljivanje svojstva i metoda svim postojećim objektima određenog tipa (kreiranima iz iste funkcije konstruktora)

* Upotreba prototip objekta:
  * definicija nasljeđivanja

  ```JS
  function Konstruktor1(){
    // ...
  }

  function Konstruktor2(){
    Konstruktor1().call();
    // ...
  }

  Konstruktor2.prototype = Object.create(Konstruktor1.prototype);
  ```

### Tipovi objekata po podrijetlu

1. **Nativni** objekt je objekt ili klasa objekata definirana u ECMAScript specifikaciji (`Array`, `Function`, `Date` ...)
2. **Host** objekt je objekt definiran okruženjem domaćina, u našem slučaju web preglednika (npr. `HTMLElement` objekt)
3. **Korisnički definiran** objekt je svaki objekt kreiran izvršenjem JavaScript koda

### `Date` objekt

* Core JavaScript uključuje konstruktor `Date()` za kreiranje objekata koji predstavljaju datume i vremena
* Ovi objekti Date imaju metode koje pružaju API za jednostavno
izračunavanje datuma
* Objekti datuma nisu osnovna vrsta kao što su brojevi.

  ```JS
  var d = new Date();
  var d = new Date(2018, 11, 24, 10, 33, 30, 0);
  var d = new Date("October 13, 2014 11:13:00");
  var d = new Date(-100000000000);
  ```

#### metode Date objekta

* `getDate()` &mdash; Vraća redni broj dana u mjesecu
* `getHours()` &mdash; Vraća sat iz trenutnog vremena
* `getFullYear()` &mdash; Vraća godinu iz trenutnog datuma
* `setDate()` &mdash; Postavlja redni broj dana u mjesecu
* `setHours()` &mdash; Postavlja vrijednost sata
* `setFullYear()` &mdash; Postavlja vrijednost godine
* `now()` &mdash; Vraća broj milisekunda od 01.01.1970 00:00:00
* `toLocaleString()` Vraća vrijednost datuma i vremena u lokalnom formatu korisnika
* ...

### `Math` objekt

* Pored osnovnih aritmetičkih operatora, JavaScript podržava složenije matematičke operacije kroz skup funkcija i konstanti definiranih kao svojstva objekta Math:
* objekt Math nije potrebno kreirati (instancirati)
  * postoji samo jedan primjerak objekta tog tipa
  * sve metode i svojstva su statička

#### `Math` objekt - primjeri svojstva i metoda

* svojstva
  * `PI` &mdash; Sadrži vrijednost konstante PI
  * `SQRT2` &mdash; Sadrži vrijednost drugog korijena broja 2
  * `LN10` &mdash; Sadrži vrijednost prirodnog logaritma broja 10
  * ...
* metode
  * `pow()` &mdash; Vraća vrijednost x potenciranu s y &rarr; `Math.pow(x,y)`
  * `sqrt()` &mdash; Vraća drugi korijen broja
  * `random()` &mdash; Vraća slučajno generiran broj između 0 i 1 (isključujući 1)
  * `floor()` &mdash; Vraća niži cijeli broj
  * `round()` &mdash; Zaokružuje vrijednost na najbliži cijeli broj
    * Za zaokruživanje na decimale: `broj.toPrecision()` ili `broj.toFixed()`
  * ...

### Regexp

* Regular expressions
  * U JavaScript-u su i regularni izrazi objekti.
* Opisuje uzorak znakovnog niza
  * omogućuje pretragu traženog uzorka unutar znakovnog niza
* Redovni izrazi obrasci su koji se koriste za podudaranje kombinacija znakova u tekstu.

  ```JS
  var re = new RegExp('[žšđćč]', 'ig');
  var re = /[žšđćč]/ig;
  ```

* Regexp – metode
  * `exec()` &mdash; Provjerava da li znakovni niz sadrži uzorak znakova - vraća zajedničku vrijednost
  * `test()` &mdash; Provjerava da li znakovni niz sadrži uzorak znakova - vraća istina ili laž

* Za pretragu, moguća upotreba string metoda:
  * `znakovniNiz.search(uzorak)`
  * `znakovniNiz.match(uzorak)`

### Browser Object Model (BOM)

* skupina unaprijed definiranih objekata koji stranici (JavaScript-u) omogućuju interakciju s web preglednikom
* omogućava JavaScript-u "razgovor" s web preglednikom
  * objekt preko kojeg to ostvarujemo je globalni objekt window
* ne postoji službeni standard
  * većina web preglednika ipak ima implementirano identično sučelje za komunikaciju s JavaScript jezikom
* hijerarhijska struktura BOM objekata:
  * window (BOM)
    * navigator
    * location
    * history
    * screen
    * document (DOM)
      * html
      * head
        * title
          * naslov
      * body
        * p
          * "text"
        * a
          * href
            * "link"

### HTML DOM

* Platforma i jezično neutralno sučelje koje omogućuje programima i skriptama dinamički pristup i ažuriranje sadržaja, strukture i stila dokumenta.

* definira:
  * HTML elemente kao objekte
  * svojstva svih HTML elemenata
  * metode pristupa svim HTML elementima
  * događaje za sve HTML elemente

#### `Document` objekt

* Objekt `document` predstavlja našu web stranicu.
* Ako želite pristupiti bilo kojem elementu HTML stranice, uvijek započinjemo s pristupom objektu dokumenta.

#### Selektiranje DOM elementa

* Za mijenjanje DOMa ili elementa u DOMu prvo ga moramo ‘pronaći’ u dokument strukturi i selektirati.
* DOM definira brojne **načine odabira elemenata**, koristeći:
  * **id** elementa
  * **tag** elementa (tip)
  * CSS **klasu** ili drugi CSS **selektor**
  * **atribut** name

  ```JS
  document.getElementById("header-title");
  document.getElementsByTagName("li");
  document.getElementsByClassName("description");
  document.getElementsByName("gender");
  document.querySelector("#header-title");
  document.querySelectorAll(".description");
  ```

#### Kreiranje i brisanje elemenata

* kreiranje

  ```JS
  var f = document.querySelector("#footer");
  var d = document.createElement("div");
  f.appendChild(d);
  ```

* brisanje

  ```JS
  var f = document.querySelector("#footer");
  f.remove();
  /* ili */
  f.parentNode.removeChild(f);
  ```

#### DOM - Svojstva za navigaciju kroz DOM stablo

* `parentNode` &mdash; Vraća roditelja zadanog člana
* `children` &mdash; Vraća kolekciju (HTMLCollection) HTML elemenata kojima je zadani element roditelj
* `childNodes` &mdash; Vraća kolekciju (NodeList) čvorova kojima je zadani čvor roditelj
* `firstChild` / `firstElementChild` &mdash; Vraća prvi čvor / HTML element kojemu je zadani čvor / element roditelj
* `lastChild` / `lastElementChild` &mdash; Vraća zadnji čvor / HTML element kojemu je zadani čvor / element roditelj
* `nextSibling` / `nextElementSibling` &mdash; Vraća prvi čvor / HTML element nakon zadanog, na istoj razini DOM stabla
* `previousSibling` / `previousElementSibling`  &mdash; Vraća prvi čvor / HTML element prije zadanog, na istoj razini DOM stabla

#### DOM - Dodatne metode

* `createTextNode()` &mdash; Kreira tekstualni član DOM stabla
* `insertBefore()` &mdash; Roditelju dodaje element prije odabranog pod-elementa
* `insertAdjacentHTML()` &mdash; Ubacuje HTML kod na zadanu poziciju (`afterbegin`, `afterend`, `beforebegin`, `beforeend`)
* `replaceChild()` &mdash; Roditelju zamjenjuje pod-element
* `remove()` &mdash; Uklanja odabrani element iz DOM stabla

#### DOM - Dohvaćanje ili postavljanje sadržaja

* Tekstualni sadržaj:

  ```JS
  var content = el.textContent;
  var content = el.innerText;

  el.textContent = "Ima 4 rijeke";
  el.innerText = "Ima 4 rijeke";
  ```

* HTML sadržaj:

  ```JS
  var content = el.innerHTML;
  el.innerHTML = "Ima <span>4 rijeke</span>";
  ```

#### DOM - Dohvaćanje ili postavljanje vrijednosti atributa

* Vrijednosti atributa HTML elemenata dostupne su kao **svojstva**
`HTMLElement` objekata koji predstavljaju te elemente.

  ```JS
  var img = document.querySelector("img");
  img.src = "ipsum.png";

  img.getAttribute("width");
  img.setAttribute("height", "40");
  img.removeAttribute("height");
  ```

### DOM - Dinamička promjena stilova - inline stilovi

* Atribut `style` HTML elementa je njegov inline stil i poništava sve specifikacije stila u prije definiranom stylesheet-u - ima **najviši prioritet** u CSS kaskadi kao inline deklaracija stila.

  ```JS
  document.getElementById(id).style.property = new style;
  ```

* camelCase:

  ```JS
  element.style.font-family = "Arial"; // KRIVO!!!
  element.style.fontFamily = "Arial"; // DOBRO

  element.style.float = "left"  // KRIVO
  element.style.cssFloat = "left";  // DOBRO
  ```

### Dinamička promjena stilova - mijenjanje klasa

* Ponekad želimo umjesto inline stila promijeniti CSS klasu elementa.
Za to koristimo **className** i **classList** svojstva elemenata.

  ```JS
  var element = document.getElementById("id");
  element.className = "containerElement containerElement-left";

  console.log(element.classList);
  element.classList.add("containerElement", "containerElement-left");
  element.classList.remove("hide");
  element.classList.toggle("hide");
  ```

### Animiranje CSS-a

* Zbog svoje dinamičke i interaktivne prirode, JavaScript se često koristi za animiranje CSS svojstava.

  ```JS
    var elem = document.getElementById("cube");
    var pos = 0;
    var id = setInterval(frame, 10);

    function frame() {
      pos++;
      elem.style.left = pos + 'px';
    }
  ```

### Događaj

* Kad god se nešto dogodi na našoj web stranici, možemo koristiti JavaScript u reakciji na taj događaj.
* Događaji:
  * aktivnosti unutar HTML dokumenta koje web preglednik može prepoznati
  * mogu pokrenuti izvršavanje određene operacije definirane JavaScript jezikom
  * radnja izvršena od strane web preglednika ili korisnika web stranice:
    * završi učitavanje HTML dokumenta
    * promijeni se vrijednost input elementa
    * klik na gumbić unutar web stranice
    * ...

#### Tipovi događaja

* window &mdash; load, popstate, resize, ...
* document &mdash; DOMContentLoaded
* body, img, link, style, script &mdash; load
* form &mdash; blur, change, focus, input, invalid, reset, submit, ...
* Mouse &mdash; click, mouseenter, mouseleave, wheel, ...
* Key &mdash; keydown, keypress, keyup
* HTML5 &mdash; drag, dragstart, scroll, play, pause, progress, ...
* Mobile &mdash; touchstart, touchend

#### Postavljanje događaja

3 su načina:
1. **inline**

    ```HTML
    <input type="button" onblur="blur();" value="Click" />
    ```

2. kao svojstvo na elementu

    ```HTML
    <input type="button" value="Click" />
    ```
    ```JS
    var button = document.querySelector("input");
    button.onblur = function() {
      ...
    }
    ```

3. **`addEventListener`** metoda

    ```HTML
    <input type="button" value="Click" />
    ```
    ```JS
    var button = document.querySelector("input");
    function handleBlur() { ... }
    button.addEventListener("blur", handleBlur);
    button.removeEventListener("blur", handleBlur);
    ```

### ES6 (ECMAScript 6) novosti

1. Nove definicije varijabli (let, const)
2. Template literali
3. "Spread" operator
4. "Arrow" funkcije
5. Klase i moduli
6. Promises
7. ...

* **`let`** deklaracija
  * Prednosti let deklaracije (naspram var):
    * Označuje da planiramo mijenjati tu varijablu
    * Opseg varijable je ograničen unutar bloka, ne funkcije

    ```JS
    var x = 10;
    {
      let x = 2;
    }
    ```

* **`const`** deklaracija
  * Ima slično ponašanje kao let deklaracija (block scope), osim što se vrijednost varijable **ne može mijenjati**.
  * **Funkcionalno programiranje izbjegava promjenu stanja i mijenjanje varijabli, tako da je const deklaracija puno bolja od let ili var u 99% slučajeva**.

* Template literali
  * Umjesto konkatenacije stringova pomoću + operatora, koristimo backtickove.

    ```JS
    const ime = 'Ivan';
    const pozdrav = `Moje ime je ${ime}`;
    console.log(pozdrav);
    ```

* "**Spread**" operator (**`...`**)
  * Omogućava nam dekonstrukciju struktura kao što su nizovi ili objekti na njihove elemente.

    ```JS
    function ispisiImena(prvo, drugo, trece) {
      console.log(prvo);
    }
    const x = ['Ivan', 'Marija', 'David'];
    ispisiImena(...x);
    ```

* "**Rest**" operator (**`...`**)
  * Omogućava nam definiciju funkcije sa nepoznatim brojem argumenata.

    ```JS
    function vratiZbroj(...args) {// args -> niz
      let suma = 0;
      for (let arg of args) suma += arg;
      return suma;
    }
    console.log(vratiZbroj(1)); // 1
    console.log(vratiZbroj(1, 2, 3)); // 6
    ```

* "**Arrow**" funkcije (`=>`)
  * Omogućuju kraću sintaksu za definiranje funkcija
    * bez zagrada, ključnih riječi function i return, ili kombinaciji

    ```JS
    const bark = () => "Wuf wuf";
    myArray.forEach(element => console.log(element));
    myArray.forEach(element => {
      console.log(this);
      return element;
    );
    ```

* Klase
  * ES6 je dodao ključnu riječ **class**, kako bi jezik približili klasičnoj sintaksi OOP jezika (Java, C++), ali ništa se u pozadini nije promijenilo.
  * Također, imamo par novih izraza koje nam pomožu u radu sa "klasama".
    * **constructor** &mdash; metoda koja se zove prilikom kreiranja objekta
    * **extends** &mdash; za nasljeđivanje, kao u klasičnom OOPu

    ```JS
    class Golden extends Dog {
      constructor(breed) {
        this.breed = breed;
      }
    }
    ```

### Obećanja (Promises)

*  Obećanje (**promise**) je objekt koji predstavlja eventualni uspješni završetak ili neuspjeh asinkrone operacije
   *  rezultirati će jednom vrijednosti koja može biti ili riješena ili neriješena (odbačena)

    ```JS
    new Promise((resolve, reject) => {
      // ...
      if ( /*...*/ ) {
        return resolve;
      }
      return reject;
    })
    .then()
    .catch();
    ```

  * **Egzekutor funkcija** - mora vratiti ili resolve ili reject callback funkciju.
  * **then** metoda reagira na stanje fulfilled Promise objekta &rarr; može primiti dva argumenta: callback funkcije za slučaj uspjeha ili neuspjeha

### API - Application Programming Interface

* Sučelje aplikacijskog programa koje se može definirati kao skup metoda komunikacije između različitih softverskih komponenti.

### AJAX (Asynchronous JavaScript And XML)

* predstavlja standard u web razvoju
* omogućuje asinkronu komunikaciju klijenta i poslužitelja
  * razmjena podataka s web poslužiteljem odvija se u pozadini (bez prekidanja rada skripte u web pregledniku)
  * moguće je **slati podatke** na poslužitelj i **primati ih** s njega, nakon što je stranica već učitana, bez da se prekida njen rad u pregledniku klijenta
  * omogućuje asinkrono ažuriranje web stranica
    * moguće je ažurirati dio web stranice, bez ponovnog učitavanja cijele stranice
* izrađuje se više interaktivna web aplikacija

#### AJAX skripta

* primjer skripte koja šalje zahtjev poslužitelju te rukuje dobivenim odgovorom:

  ```JS
  function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "data.php", true);
    xhttp.send();
  }
  ```

### Implementacija asinkronih operacija putem metode `fetch`

* Kao alternativu objektu tipa XMLHttpRequest za realizaciju
asinkronih operacija možemo koristiti metodu `fetch()`
  * rad joj se temelji na objektu tipa Promise (obećanje)
  * daje nam veću fleksibilnost te pojednostavljuje definiciju skripte

Rad pomoću `fetch()`:
1. dohvaćanje JSON sadržaja iz odgovora
2. prosljeđivanje dohvaćenih podataka funkciji koja će s njima rukovati
3. ako Promise rezultira s neuspješnom obradom zahtjeva, opis greške šaljemo funkciji koja će s njime rukovati

```JS
fetch("URI")
.then(odgovor => odgovor.json()) // 1.
.then(podaci => rukujPodacima(podaci)) // 2.
.catch(greska => rukujGreskom(greska.toString())); // 3.
```

### Minifikacija JS-a

* Load-anje JavaScript koda (kao i HTML-a i CSS-a) se može smanjiti **minifikacijom skripti**, što smanjuje veličinu datoteke.

* prije:

  ```JS
  // return random number between 1 and 6
  function dieToss() {
    return Math.floor(Math.random() * 6) + 1;
  }
  // function returns a promise that succeeds if a 6 is tossed
  function tossASix() {
    return new RSVP.Promise(function(fulfill, reject) {
      var number = Math.floor(Math.random() * 6) + 1;
      if (number === 6) {
        fulfill(number);
      } else {
        reject(number);
      }
    });
  }
  // display toss result and launch another toss
  function logAndTossAgain(toss) {
    console.log("Tossed a " + toss + ", need to try again.");
    return tossASix();
  }
  function logSuccess(toss) {}
  ```

* poslije:

  ```JS
  function dieToss(){return Math.floor(6*Math.random())+1}function tossASix(){return new RSVP.Promise(function(a,b){var c=Math.floor(6*Math.random())+1;6===c?a(c):b(c)})}function logAndTossAgain(a){return console.log("Tossed a "+a+", need to try again."),tossASix()}function logSuccess(a){}
  ```

## JavaScript - Zadaci

### Zadatak

Je li JavaScript jezik predviđen za objektno-orijentirano ili funkcijsko programiranje?

#### Rješenje

JavaScript je skriptni programski jezik visoke razine, dobar i za **objektno-orijentirano** i za **funkcijsko programiranje**.

### Zadatak

Što je ECMAScript?

#### Rješenje

JavaScript jezik se razvija prema ECMAScript specifikaciji:
* opisuje sintaksu i ponašanje programskog jezika
* definira standard za implementaciju JavaScript jezika.

### Zadatak

Što od navedenog nije ispravan identifikator varijable?
1. 1userData
2. $userData
3. user_data
4. user1Data

#### Rješenje

1. 1userData

### Zadatak

Koji izraz koristimo u definiciji spremnika za podatke ako želimo onemogućiti promjenu primitivne vrijednosti?

#### Rješenje

const

### Zadatak

Opišite pojedine djelokruge varijabli.
* globalni djelokrug (globalne varijable)
stranice brišu se
* djelokrug funkcije (lokalne varijable)
* djelokrug bloka


#### Rješenje

* globalni djelokrug (globalne varijable)
  * definiraju se izvan funkcija
  * mogu se koristiti u čitavom programu, zatvaranjem stranice brišu se
* djelokrug funkcije (lokalne varijable)
  * definiraju se unutar funkcije te se mogu koristiti samo unutar nje
  * izlaskom iz funkcije brišu se
* djelokrug bloka
  * definiraju se unutar bloka `{}` pomoću ključne riječi let
  * dostupne su samo unutar bloka u kojemu su definirane
  * moraju se deklarirati prije upotrebe te se ne mogu ponovo deklarirati

### Zadatak

Deklarirajte i inicijalizirajte varijable `firstName` i `lastName` i spojite ih u varijablu `fullName`, ali s razmakom (`" "`) između imena i prezimena.

#### Rješenje

```JS
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
/* ili */
var fullName = firstName.concat(" ", lastName);
/* ili */
const fullName = `${firstName} ${lastName}`;
```

### Zadatak

Deklarirajte varijable `y` i `z` te im dodijelite proizvoljne vrijednosti. Nakon toga razlomite ovu ternarnu operaciju na 3 različite operacije (upotrebom grananja). Ispišite dobivenu vrijednost varijable `x`.

```JS
var x = z === 2 ? y : 5;
```

#### Rješenje

```JS
var x;
var y = 10, z = 2;
if (z === 2) {
  x = y;
} else {
  x = 5;
}
```
### Zadatak

Napravi funkciju koja prima dva broja kao parametre i vrati veći broj. Ako su brojevi isti onda vrati prvi broj.

#### Rješenje

```JS
  function veci(br1, br2) {
    if (br1 === br2) {
      return broj1;
    } else if (br1 > br2) {
      return broj1;
    } else return broj2;
  }
```
ili
```JS
  const veci = (a,b) => (a >= b ? a : b) ;
```

### Zadatak

Koji izraz možemo koristiti kao alternativu "`if`" izraza za postavljanje višestrukog grananja?

#### Rješenje

Izraz "`switch`".

### Zadatak

Koliko puta će se izvršiti sljedeći blok naredbi?

```JS
for (let count = 0; count <= 10; count+=2) {
  console.log(count);
}
```

#### Rješenje

6 puta.

### Zadatak

S obzirom da je uvjet petlje lažan blok naredbi se neće niti jedanput izvršiti. Promijenite definiciju uvjetne petlje tako se da blok naredbi uvijek izvrši barem jedanput, bez obzira o istinitosti uvjeta. Vrijednost varijable "`count`", kao i izraz uvjeta ne smijete promijeniti.

```JS
var count = 10;
while (count < 10) {
  console.log(count);
  count++;
}
```

#### Rješenje

```JS
var count = 10;
do {
  console.log(count);
  count++;
} while (count < 10);
```

### Zadatak

Unutar petlji možemo koristiti izraze `continue` i `break`. Koja je razlika između njih?

#### Rješenje

Izraz `continue` prekida trenutnu iteraciju (odnosno trenutno izvršavanje bloka naredbi) te nastavlja s idućom. Izraz `break` prekida izvršavanje petlje te izlazi iz nje.

### Zadatak

Napišite JavaScript funkciju koja prihvaća cjelobrojnu vrijednost kao argument te vraća poruku da li se radi o parnom ili neparnom broju. Pretpostavite da će argument uvijek biti cjelobrojna vrijednost.

#### Rješenje

```JS
function parniIliNeparni(a){
  if(a % 2 == 0){
    return "Broj " + a + " je paran.";
  } else {
    return "Broj " + a + " je neparan.";
  }
}
```

### Zadatak

Napišite JavaScript funkciju koja prihvaća zadani niz kao argument i pronalazi najdužu riječ unutar niza. Vratite tu riječ iz funkcije i spremite u varijablu čiju ćete vrijednost ispisati u konzoli.

```JS
var rijeci = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
```

#### Rješenje

```JS
var rijeci = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
function pronadiNajduljuRijec(niz) {
  var rijec = "";
  for (let i = 0; i < niz.length; i++) {
    if (rijec.length < niz[i].length) {
      rijec = niz[i];
    }
  }
return rijec;
}
var najduljaRijec = pronadiNajduljuRijec(rijeci);
console.log(najduljaRijec);
```

### Zadatak

Što predstavlja BOM (Browser Object Model)?

#### Rješenje

Skupina unaprijed definiranih objekata koji stranici (JavaScript-u) omogućuju interakciju s web preglednikom. Iako ne postoji službeni standard, većina web preglednika ipak ima implementirano identično sučelje za komunikaciju s JavaScript jezikom.

### Zadatak

Što predstavlja DOM (Document Object Model)?

#### Rješenje

Platforma i jezično neutralno sučelje koje omogućuje programima i skriptama dinamički pristup i ažuriranje sadržaja, strukture i stila dokumenta.

Definira:
- HTML elemente kao objekte
- svojstva svih HTML elemenata
- metode pristupa svim HTML elementima
- događaje za sve HTML elemente.

### Zadatak

Napiši js kod koji će uvijek napisati trenutačnu godinu.

#### Rješenje

```JS
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
console.log("Current year is:", currentYear);
```

### Zadatak

Navedite barem tri metode objekta "document" za dohvaćanje HTML elemenata.

#### Rješenje

```JS
document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()
document.getElementsByName()
document.querySelector()
document.querySelectorAll()
```

### Zadatak

Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te mu dodajte novi podelement tipa `<h1>` s tekstom "Naslov" (novi element biti će posljednji podelement svog roditelja).

#### Rješenje

```JS
var roditelj = document.getElementById("zaglavlje");
roditelj.innerHTML += "<h1>Naslov</h1>";
/* ili */
var roditelj = document.getElementById("zaglavlje");
var naslov = document.createElement("h1");
naslov.textContent = "Naslov";
roditelj.appendChild(naslov);
```

### Zadatak

Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te ga uklonite iz HTML stabla.

#### Rješenje

```JS
var element = document.getElementById("zaglavlje");
element.remove();
/* ili */
var element = document.getElementById("zaglavlje");
element.parentNode.removeChild(element);
```

### Zadatak

Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te mu postavite sljedeću pozadinsku boju: "`#ddd`".

#### Rješenje

```JS
var element = document.getElementById("zaglavlje");
element.style.backgroundColor = "#ddd";
/* ili */
var element = document.getElementById("zaglavlje");
element.style.cssText = "background-color: #ddd;";
```

## Razvojna okolina

### Verzioniranje koda

* Verzioniranje koda služi za čuvanje i praćenje promjena u
datoteci ili skupu datoteka
* Tijekom vremena, bilježe se promjene koje su se dogodile u
datotekama
* Moguće je pozvati se na bilo koju prethodnu verziju
  * kronološki pregled promjena (tko je uveo promjene i kada )

### Version Control System (VCS)

Korištenje sustava za kontrolu verzije donosi dvije velike
prednosti:
* omogućuje lak oporavak u slučaju da je nešto pošlo po krivu
* uvelike olakšava suradnju više od jedne osobe na istom
projektu

### Vrste sustava za verzioniranje koda

1. Lokalni sustav za verzioniranje koda
2. Centralizirani sustav za verzioniranje k0da
3. Distribuirani sustav za verzioniranje k0da

### Distribuirani sustav za verzioniranje koda

* Kod distribuiranog sustava za upravljanje verzijama (**Git**, **Mercurial**, **Bazaar**, **Darcs**) klijenti na svom računalu imaju kopiju cijele baze podataka poslužitelja
* Ukoliko dođe do oštećenja podataka kod poslužitelja, podaci klijenata mogu se smo kopirati na novi (popravljeni) poslužitelj
* Jedna od glavnih prednosti DVCS-a je što klijent ne treba stalno biti spojen na poslužitelj

### Repozitorij

* Repozitorij (repository - repo) je mjesto na kojem se pohranjuju sve datoteke jednog projekta
* Repozitoriji mogu biti lokalni ili na nekom poslužitelju (ovisno o sustavu za verzioniranje koji koristimo)
* Na jednom repozitoriju može raditi jedna ili više osoba
* Neki od popularnih repozitorija: GitHub, GitLab, Bitbucket

### Git

* **Git** je distribuirani sustav za verzioniranje koda (DVCS)
* Omogućuje praćenje promjena u izvornom kodu tijekom razvoja softvera te koordiniranje rada među programerima
* Git ne nudi mehanizme kontrole pristupa, ali je dizajniran za rad s drugim alatima koji su specijalizirani za kontrolu pristupa (git repozitoriji - GitHub, GitLab, Bitbucket, ..)

### Git naredbe

* `git init` &mdash; inicijalizacija git repozitorija
* `git clone` &mdash; povlačenje (kloniranje) postojećeg repozitorija na lokalno računalo
* `git add` &mdash; dodavanje datoteka na Git repozitorij (ovom naredbom označavamo datoteke čije promjene želimo sačuvati i spremiti na udaljeni repozitorij)
* `git rm` &mdash; micanje datoteka s Git repozitorija
* `git commit -m "message"` &mdash; lokalno spremanje trenutne verzije repozitorija (message - poruka, opis promjena koje želite spremiti)
* `git checkout` &mdash; promjena grane ili vraćanje na prijašnje stanje unutar trenutne grane
* `git push` &mdash; zapisivanje svih lokalnih commitova na udaljeni repozitorij (npr. GitHub)
* `git pull` &mdash; povlačenje promjena s udaljenog na lokalni repozitorij

#### grananje

* `git branch` &mdash; kreiranje vlastite grane Git repozitorija
* `git checkout <ime-branch-a>` &mdash; naredba koja služi za promjenu branch-a (ime-branch-a označava granu na koju se želimo preseliti)
  * uz parametar `-b` omogućuje kreiranje nove grane i postavljanje u nju
* `git merge` &mdash; spajanje dvije Git grane
  * git merge se najčešće koristi kako bi se promjene iz nekog branch-a zapisale u glavni (master) branch

### Biblioteke i razvojni okviri

* programska rješenja čija primjena olakšava razvoj aplikacije
  * osiguravaju unaprijed definirane resurse: podatkovne strukture, tipove objekata, metode, ...
* definiraju vlastite konvencije i standarde pisanja programskog koda
* razlika:
  * biblioteke su jednostavnije, pružaju fleksibilnost u smislu da programeri sami biraju koje će resurse i kako primijeniti
  * razvojni okvir je kompleksniji, daje zadanu arhitekturu prema kojoj se razvija aplikacija &rarr; pruža veću pomoć u radu, ali je teže naučiti njegovu primjenu
* primjeri:
  * jQuery
  * Handlebars
  * Bootstrap

### Babel

* JavaScript compiler
* Babel se uglavnom koristi za pretvaranje ECMAScript 2015+ koda u unazad kompatibilnu verziju JavaScript-a u trenutnim i starijim preglednicima ili okruženjima.
* pr.:

  ```JS
  [1, 2, 3].map((n) => n + 1);

  // pretvara u

  [1, 2, 3].map(function(n) {
    return n + 1;
  });
  ```

### Node.js

* Node.js je JavaScript runtime environment - razvojna okolina koja omogućuje pokretanje JavaScript programa izvan web preglednika.
* npm (node package manager) - snažan upravitelj programskim paketima koji dolazi uz Node.js instalaciju (ne treba ga posebno instalirati)
  * softverski alat koji automatizira proces instaliranja, nadogradnje, konfiguriranja i brisanja računalnih programa ili biblioteka (paketa).
* naredbe:
  * `npm version` - trenutna verzija npm-a
  * `npm run` - lista raspoloživih skripti
  * `npm run <nazivSkripte>` - pokretanje odabrane skripte
  * `npm search <nazivPaketa>` - pretraživanje npm baze paketa
  * `npm init` - inicijalizira node paket – kreira package.json datoteku
  * `npm install --save <nazivPaketa>` - lokalna instalacija paketa i editiranje package.json datoteke (parametar --save se podrazumijeva)
  * `npm install <nazivPaketa>@<verzija>` - instaliranje točno određene verzije paketa
  * `npm install --save-dev <nazivPaketa>` - instaliranje paketa koji se koriste samo prilikom razvoja aplikacije i editiranje package.json datoteke
  * `npm install -g <nazivPaketa>` - globalna instalacija paketa
  * `npm install <lokacija paketa na disku>` - instaliranje paketa s računala
  * `npm uninstall --save <nazivPaketa>` - brisanje paketa i brisanje iz package.json datoteke (parametar `--save` se podrazumijeva)
  * `npm uninstall --no-save <nazivPaketa>` - brisanje paketa (neće se brisati iz datoteke package.json)
  * `npm uninstall -g <nazivPaketa>` - brisanje globalnog paketa
  * `npm ls` - lista paketa instaliranih u trenutnom direktoriju
  * `npm ls -g` - lista globalno instaliranih paketa

### Task runner-i

* Task runner je alat koji omogućuje automatizaciju ponavljajućih zadataka koji se tipično rade ručno tijekom razvoja projekta.
* grunt, gulp, broccoli, brunch, ...

* CSS:
  * Kompiliraj SCSS u CSS
  * Pokreni Autoprefixer na novom CSS-u
  * Minificiraj CSS
* JavaScript
  * Provjeri JavaScript error-e
  * Konkateniraj sve JS file-ove
  * Minificiraj skripte
* Ostalo
  * Optimiziraj sve JPG, GIF, or PNG slike
  * Prati datoteke i pokreni task-ove ako je potrebno
  * Pokreni BrowserSync radi testiranja u više preglednika i uređaja odjednom

### Bundler-i

* **Module bundler** je alat koji se koristi prilikom izgradnje aplikacije za produkciju
* **Bundling** je proces kombiniranja i optimizacije više modula u jedan ili više proizvodno spremnih paketa
* pr.: webpack, rollup, browserify, fusebox ...

## Razvojna okolina - Zadaci

### Zadatak

Što je sustav za verzioniranje koda te zašto se koristi u web razvoju?

#### Rješenje

Alat koji omogućuje čuvanje i praćenje promjena u datoteci ili skupu datoteka tijekom vremena (tko je napravio promjenu i kada). Omogućuje lak oporavak u slučaju da je nešto pošlo po krivu (vraćanje datoteka u prethodno stanje) te olakšava suradnju više od jedne osobe koje rade na istom projektu.

### Zadatak

Koji tipovi sustava za verzioniranje koda postoje?

#### Rješenje

* Lokalni sustav za verzioniranje koda
* Centralizirani sustav za verzioniranje koda
* Distribuirani sustav za verzioniranje koda

### Zadatak

Što je Git?

#### Rješenje

Git je distribuirani sustav za verzioniranje koda (DVCS). Omogućuje praćenje promjena u izvornom kodu tijekom razvoja softvera te koordiniranje rada među programerima.

### Zadatak

Što je repozitorij?

#### Rješenje

Repozitorij je mjesto na kojem se pohranjuju sve datoteke jednog projekta. Može biti lokalni ili na nekom poslužitelju, dok na jednom repozitoriju može raditi jedna ili više osoba.

### Zadatak

Napišite Git naredbu s kojom se inicijalizira Git repozitorij.

#### Rješenje

```git
git init
```

### Zadatak

Napišite Git naredbu s kojom se lokalno sprema trenutna verzija repozitorija.

#### Rješenje

```git
git commit -m "message"
```

### Zadatak

Napišite Git naredbu za zapisivanje svih lokalnih commit-ova na udaljeni repozitorij (npr. GitHub).

#### Rješenje

```git
git push
```

### Zadatak

Napišite Git naredbu za povlačenje promjena s udaljenog na lokalni repozitorij.

#### Rješenje

```git
git pull
```

ili?

```git
git fetch
```

### Zadatak

Napišite Git naredbu za spajanje dvije Git grane kako bi se promjene iz jedne zapisale u drugu (u glavnu granu repozitorija – master).

#### Rješenje

```git
git merge
```

### Zadatak

Što predstavlja jQuery?

#### Rješenje

Brzu JavaScript biblioteku bogatu mnogim mogućnostima.
Značajno pojednostavljuje izvršavanje sljedećih radnji:
* upravljanje HTML stablom (DOM)
* upravljanje CSS stilovima
* primjenu efekata i animacija u radu web stranica
* upotrebu događaja za pokretanje definiranih operacija
* asinkronu komunikacija klijenta i poslužitelja (AJAX).

### Zadatak

Što je npm (node package manager)?

#### Rješenje

Snažan upravitelj programskim paketima:
* softverski alat koji automatizira proces instaliranja, nadogradnje, konfiguriranja i brisanja računalnih programa ili biblioteka (paketa)
* dolazi s instalacijom Node.js okruženja.

### Zadatak

Napišite npm naredbu za instalaciju paketa &quot;lodash&quot; i editiranje package.json datoteke (ovisnost se zapisuje u datoteku package.json).

#### Rješenje

```sh
npm install --save lodash
# ili
npm install lodash
```

### Zadatak

Napišite npm naredbu za instalaciju paketa "jest" koji se koristi samo prilikom razvoja aplikacije. Ovisnost se zapisuje u datoteku package.json (naredba editira package.json datoteku).

#### Rješenje

```sh
npm install --save-dev jest
```

### Zadatak

Što su task runner-i?

#### Rješenje

* Task runner je alat koji omogućuje automatizaciju ponavljajućih zadataka koji se tipično rade ručno tijekom razvoja projekta.
* Primjeri: gulp, grunt, broccoli, brunch, ...

### Zadatak

Što je module bundler?

#### Rješenje

* Alat koji se koristi prilikom izgradnje aplikacije za produkciju.
* Omogućuje povezivanje i optimizaciju više modula (datoteka) u jedan proizvodno spreman paket.
* Primjeri: webpack, rollup, browserify, ...

## ReactJS

### Što je ReactJS

* vrlo popularna JavaScript biblioteka
* služi za izradu korisničkih sučelja (eng. user interface - UI)
* pomoću malih izoliranih dijelova koda (komponenti) stvaramo
kompleksan, efikasan i fleksibilan UI
* razvio: Facebook Inc. 2013. godine
* React aplikacije su single page aplikacije

### Zašto ReactJS

* U čistom JavaScript-u teško je reflektirati promjene u stanju aplikacije (promjene nastale korisničkom interakcijom)
* Jednostavnija izrada i održavanje aplikacije
* Bolje performanse &mdash; virtualni DOM
* Velika i aktivna zajednica

&rarr; Rezultirajući kôd ima bolje performanse jer se u pozadini koristi zrela i optimizirana biblioteka

### Create React App (Vite)

* Create React App je biblioteka koja omogućuje kreiranje React aplikacije samo jednom naredbom u CLI-ju:

  ```sh
  npx create-react-app my-app
  ```

* rezultat ove naredbe je direktorij my-app unutar kojeg je organizirana cijela React aplikacija
* nije potrebno instalirati niti postavljati Webpack i Babel, ti alati su već konfigurirani i aplikacija je spremna za pokretanje
* moderna alternativa analogne funkcionalnosti: Vite

  ```sh
  npm create vite@latest
  ```

### Export/import

* Kako bi se programski kôd napisan u jednoj datoteci mogao koristiti u drugoj datoteci, potrebno ga je:
  * **export**-ati iz izvorne datoteke i
  * **import**-ati u datoteci u kojoj ga želimo iskoristiti

#### Export

Dva su načina za napraviti export:
1. **default export** &mdash; možemo imati samo jedan default export po datoteci, kod importa moramo specificirati ime import modula
2. **named export** &mdash; možemo imati više named exporta po datoteci, ali kod importa moramo znati ime svakog modula

### JSX

* predstavlja proširenje JavaScript jezika
  * prije izvršavanja prevodi se u standardni JavaScript kod
* koristi se za opisivanje izgleda korisničkog sučelja u React aplikaciji
  * olakšava dodavanje HTML-a unutar React komponenata (JavaScript koda)
* ima sintaksu vrlo sličnu HTML-u te ga, uz znanje HTML-a vrlo lako rabe i početnici

### ReactJS komponente

* osnovni koncept React-a &mdash; React je u svojoj jezgri biblioteka za stvaranje komponenata
* komponente su neovisni, ponovno iskoristivi dijelovi koda
* tipična React web-aplikacija može biti prikazana kao stablo komponenti i to tako da postoji jedna korijenska (`root`) komponenta ("`App`"), i potencijalno beskonačna količina ugniježđenih komponenti
* Razlikujemo:
  * komponente definirane funkcijom i komponente definirane klasom
  * složene (pametne, stateful) i jednostavne (prezentacijske, stateless) komponente

### Props

* props ("property-ji") su način na koji komponente međusobno komuniciraju
* props-i se koriste kako bi se informacije prenijele iz parent komponente u child komponentu
* protok podataka kroz props-e je uvijek jednosmjeran - iz parent komponente u child komponentu
* child komponenta ne može i ne smije mijenjati props objekt koji je primila od parent-a

#### Props - funkcije

```JS
function ChildComponent(props) {
  return <h1>Ja sam {props.name}</h1>;
}
function ParentComponent() {
  return (
    <div>
      <h1>Ja sam ParentComponent</h1>
    <ChildComponent name="Child" />
    </div>
  );
}
```

#### Props - klase

```JS
class ChildComponent extends React.Component {
  render() {
    return <h1>Ja sam {this.props.name}</h1>;
  }
}
class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Ja sam ParentComponent</h1>
        <ChildComponent name="Child" />
      </div>
    );
  }
}
```

#### Children props

```JS
function Component1(props) {
  return (
    <div>{props.children}</div>
  );
}
function Component2() {
  return (
    <Component1>
      <h1>Naslov</h1>
      <p>Paragraf</p>
    </Component1>
  );
}
```

### Stanje komponente (state)

* **state** - lokalno stanje komponente
  * komponenta ima kontrolu nad svojim stanjem i može ga mijenjati pomoću metode **setState** &mdash; komponenta definirana klasom
  * **useState** hook omogućuje korištenje stanja u komponentama definiranima funkcijom
* kod promjene stanja komponenta se ponovno iscrtava (renderira) kako bi prikazala promjene u stanju
  * renderiraju se i sve njezine child komponente

```JS
class MyComponent extends React.Component {
  state = {
    city: "Zagreb",
    state: "Hrvatska"
  };
  changeState = () => {
    const newCity = this.state.city === "Zagreb" ? "Osijek" : "Zagreb";
    this.setState({ city: newCity });
  };
}
render() {
  return (
    <div>
      <h1>Grad: {this.state.city}</h1>
      <h1>Država: {this.state.state}</h1>
      <button onClick={this.changeState}>Drugi grad</button>
    </div>
  );
}
```

### Hooks

* hooks predstavljaju novi dodatak koji se pojavio s React 16.8 verzijom biblioteke
  * omogućuju upotrebu stanja (state) i drugih mogućnosti unutar komponenata definiranih funkcijom (npr. simulacija životnog ciklusa komponente)
* **useState** hook funkcija omogućuje korištenje stanja u komponentama definiranima funkcijom
* **useEffect** hook funkcija omogućuje simulacija životnog ciklusa komponente

### useState hook

* pr.:

  ```JS
  function Example() {
    // Deklaracija state varijable (count) i metode za njeno ažuriranje (setCount)
    const [count, setCount] = useState(0);
    var changeCount = () => {
      setCount(count + 1);
    }
    return (<div>
      <p>You clicked {count} times</p>
      <button onClick={changeCount}> Change count </button>
    </div>);
  }
  ```

### Događaji (events)

<a name="pookie"></a>

* ao i u HTML-u, postoji definirana lista događaja na koje React komponente mogu reagirati, npr: onClick, onChange, ...
* aktiviranjem događaja izvršava se funkcija dodijeljena tom događaju - vrlo često ta funkcija mijenja stanje neke komponente ili cijele aplikacije
* camelCase imena:
  * `onclick` &rarr; `onClick`
  * `onchange` &rarr; `onChange`
  * `onmouseover` &rarr; `onMouseOver`
  * `onload` &rarr; `onLoad`

#### Primjer korištenja event-a:

```JS
  function ReactComponent() {
    const handleButtonClick = (event) => {
      console.log("Button click!");
    };
    return (
      <button onClick={handleButtonClick}>
        Klikni me!
      </button>
    );
  }
```

### Metode životnog ciklusa

* životni ciklus komponente može se definirati kao niz metoda koje se pozivaju u različitim fazama postojanja komponente
  * možemo definirati kod koji će se izvršiti u točno određenom trenutku procesa
* te metode nazivamo lifecycle methods, a pozivaju se u sljedećim fazama:
  * inicijalizacija komponente (**initialization**)
  * postavljanje na DOM (**mounting**)
  * ažuriranje (**updating**)
  * brisanje iz DOM-a (**unmounting**)

* pr.:

  ```JS
  class LifeCycle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: null };
    }
    componentDidMount() {
      this.getList();
    }
    getList = () => {
      // method to make api call
    };
    render() {
      return (<div>
          <h3>Hello mounting methods!</h3>
          <div id="container"></div>
      </div>);
    }
  }
  ```

### useEffect hook

* useEffect hook koristimo kada želimo uzrokovati neke nuspojave (eng. side effects) prije ili poslije iscrtavanja (renderiranja) komponente definirane funkcijom
* useEffect hook može zamijeniti glavne lifecycle metode: **`componentDidMount()`**, **`componentDidUpdate()`** te **`componentWillUnmount()`**
  * različitom implementacijom useEffect hook-a možemo ga pokrenuti u istim životnim fazama (funkcijske) komponente u kojima su se pokretale lifecycle metode u komponentama definiranima klasom
* pr.:

  ```JS
  function Component() {
    useEffect(() => {
    /* ... */
    }, [stateVariable]); // Pokreni efekt samo ako se promijenila vrijednost stateVariable
    return (<div>
      <h3>Hello useEffect hook!</h3>
    </div>);
  }
  ```

### Liste u React-u

* liste olakšavaju definiciju sadržaja koji vraća određena komponenta te omogućuju veću fleksibilnost u upravljanju njime:

  ```JS
  function NumberList() {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <ul>
        {numbers.map(number => <li>{number}</li>)}
      </ul>
    );
  }
  ```

### Obrasci

* Primjer React obrasca s funkcijama koje reagiraju na događaje promjene imena (onChange) i predavanja obrasca (onSubmit):
  * podaci obrasca se pohranjuju u stanje komponente

  ```JSX
  <form onSubmit={this.handleSubmit}>
    <label>Ime:</label>
    <input name="name" onChange={this.handleChange} value={this.state.name}/>
    <input type="submit" value="Potvrdi" />
  </form>
  ```

### CSS u React-u

Najčešći načini za stilizaciju sadržaja komponenti u React-u:
1. CSS Stylesheet
1. Inline stilovi
2. CSS Modules

* **pr 1.** CSS Stylesheet: `ShadowCard.js` & `ShadowCard.css`

  ```JS
  import React from "react";
  import "./ShadowCard.css";
  export default function Card() {
    return (
      <p className="shadow-card ">
        Dobar dan!
      </p>
    );
  }
  ```
  ```CSS
  .shadow-card {
    border-radius: 8px;
    box-sizing: border-box;
    margin: 24px;
    padding: 24px;
    box-shadow: 0 0 8px 0 darkgreen;
    width: 200px;
    color: darkgreen;
    font-weight: bold;
  }
  ```

* **pr.2.** inline: `ShadowCard.js`

  ```JS
  import React from "react";
  const cardStyle = {
    borderRadius: 8,
    boxSizing: "border-box",
    margin: 24,
    padding: 24,
    boxShadow: "0 0 8px 0 darkred",
    width: 200,
    color: "darkred",
    fontWeight: "bold"
  };
  export default function Card() {
    return <p style={cardStyle}>Dobar dan!</p>;
  }
  ```

* **pr.3.** SCC Modules: `ShadowCard.js` & `ShadowCard.module.css`

  ```JS
  import React from "react";
  import styles from "./ShadowCard.module.css";

  export default function Card() {
    return
      (<p className={styles.shadow-card}>
        Dobar dan!
      </p>);
  }
  ```
  ```CSS
  .shadow-card {
    border-radius: 8px;
    box-sizing: border-box;
    margin: 24px;
    padding: 24px;
    box-shadow: 0 0 8px 0 darkgreen;
    width: 200px;
    color: darkgreen;
    font-weight: bold;
  }
  ```

### Dodatne mogućnosti

* **React Context**
* **Higher Order Components** (HOC) - komponente višeg reda
* **React Router**
* **GraphQL** = Graph Query Language, jezik upita baze graf

### API

* **API** = **A**pplication **P**rogramming **I**nterface
* API-ji omogućavaju aplikacijama da komuniciraju jedna s drugom
* nas zanimaju mrežni API-ji koji služe za komunikaciju web- aplikacija (React aplikacija) s poslužiteljem na kojem se nalaze podaci

#### implementacija asinkronih operacija putem metode `fetch()`

* primjer poziva metode `fetch()`

  ```JS
  fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => response.json())
    .then(data => handleData(data))
    .catch(error => handleError(error.toString()));
  ```

### Skladišta stanja (engl. stores)

* u većim React aplikacijama često se pojavljuje potreba da više komponenti dijeli isto stanje aplikacije
* koristimo napredne biblioteke za upravljanje stanjima koje za spremanje podataka koriste skladišta stanja (state store)
* najpopularnije biblioteke:
  * **Redux** i **MobX**

## ReactJS Zadaci

### Zadatak

Objasnite što je React.

#### Rješenje

React je popularna JavaScript biblioteka koja služi za izradu korisničkih
sučelja. Pomoću malih izoliranih dijelova koda (komponenti) stvaramo
kompleksno, efikasno i fleksibilno korisničko sučelje.

### Zadatak

Napišite naredbu za kreiranje React aplikacije preko CLI-a (Command-line interface). Naziv aplikacije glasi "react-app".

#### Rješenje

```sh
npx create-react-app react-app
```

### Zadatak

Što je potrebno napraviti kako bi se programski kôd napisan u jednoj datoteci mogao koristiti u drugoj datoteci?

#### Rješenje

Kod je potrebno:
* export-ati (napraviti izvoz) iz izvorne datoteke i
* import-ati (napraviti uvoz) u datoteci u kojoj ga želimo iskoristiti

### Zadatak

Prikazana je definicija React komponente koja sadrži grešku u JSX sintaksi. Objasnite u čemu je greška.

  ```JS
  function MyComponent() {
    return (
      <h1>Hello!</h1>
      <p>How are you?</p>
    );
  }
  ```

#### Rješenje

Ako komponenta vraća više JSX elemenata, svaki mora biti ugniježđen u jednom vršnom elementu, najčešće elementu `<div>`.

  ```JS
  function MyComponent() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>How are you?</p>
      </div>
    );
  }
  ```

### Zadatak

Što je potrebno upisati na prazno mjesto kako bi uključili JavaScript izraz unutar JSX te u sadržaj koji generira ugradili zbroj konstanti `x` i `y`?

```JS
  function MyComponent() {
    const x = 5, y = 7;
    return (
      <div>
        <h1>Hello!</h1>
        <p>Zbroj: x + y</p>
      </div>
    );
  }
```

#### Rješenje

Unutar JSX-a JavaScript kod je potrebno postaviti unutar vitičastih zagrada: `{JavaScript code}`

```JS
  function MyComponent() {
    const x = 5, y = 7;
    return (
      <div>
        <h1>Hello!</h1>
        <p>Zbroj: {x + y}</p>
      </div>
    );
  }
```

### Zadatak

Ako je vrijednost konstante "user" jednaka "administrator" komponenta vraća poruku "Hello Friend", u suprotnom vraća poruku "Hello Stranger". Što je potrebno upisati na prazna mjesta kako bi se postiglo zadano uvjetno iscrtavanje?

```JS
  function MyComponent() {
    const user = "administrator";
    const greetings = user === "administrator" __ <p>Hello Friend</p> __ <p>Hello Stranger</p>;
    return <div>{greetings}</div>;
}
```

#### Rješenje

Koristi se ternarni operator. Fale upitnik i dvotočka.

```JS
  function MyComponent() {
  const user = "administrator";
  const greetings = user === "administrator" ? <p>Hello Friend</p> : <p>Hello Stranger</p>;
  return <div>{greetings}</div>;
}
```

### Zadatak

Na koja dva načina je moguće kreirati komponente unutar React biblioteke?

#### Rješenje

Komponente je moguće kreirati pomoću funkcije ili klase.

### Zadatak

Objasnite što su propsi ("property-i").

#### Rješenje

Propsi su način na koji komponente međusobno komuniciraju:
* omogućuju prijenos informacija iz komponente roditelj (parent) u komponentu dijete (child). Protok podataka kroz propse je uvijek jednosmjeran - iz komponente roditelj u komponentu dijete:
* komponenta dijete ne može i ne smije mijenjati props objekt koji je primila od roditelja.

### Zadatak

Što je potrebno upisati na prazno mjesto kako bi komponenti "ChildComponent" proslijedili props "name" s proizvoljnom vrijednošću (npr. "Child")?

```JS
  function ParentComponent() {
    return (
      <div>
        <h1>Ja sam ParentComponent</h1>
        <ChildComponent ___________ />
      </div>
    );
  }

  function ChildComponent(props) {
    return <h1>Ja sam {props.name}</h1>;
  }
```

#### Rješenje

Potrebno je upisati `name="Child"`.

```JS
  function ParentComponent() {
    return (
      <div>
        <h1>Ja sam ParentComponent</h1>
        <ChildComponent name="Child" />
      </div>
    );
  }

  function ChildComponent(props) {
    return <h1>Ja sam {props.name}</h1>;
  }
```

### Zadatak

Što predstavlja stanje komponente te što se dogodi s komponentom ako se ono promijeni?

#### Rješenje

* Stanje komponente predstavlja built-in objekt koji sadrži podatke o komponenti.
* Ako se stanje komponente promijeni ona se ponovno iscrtava (renderira) kako bi prikazala promjene u stanju.
* Ponovnim renderiranjem komponente, renderiraju se i sve njezine child komponente.

### Zadatak

Putem koje metode je jedino ispravno mijenjati stanje komponente definirane klasom, kako bi osigurali da se ona ponovno iscrta (renderira)?

#### Rješenje

Metoda setState.

### Zadatak

Što omogućuju hook funkcije? Navedite nekoliko primjera hook funkcija.

#### Rješenje

Hook funkcije omogućuju upotrebu stanja (state) i drugih mogućnosti unutar komponenata definiranih funkcijom (npr. simulacija životnog ciklusa komponente).
Primjeri:
* **useState** hook funkcija omogućuje korištenje stanja u komponentama definiranima funkcijom
* **useEffect** hook funkcija omogućuje oponašanje rada metoda životnog ciklusa.

### Zadatak

Nadopunite definiciju komponente tako da se klikom na gumbić poziva funkcija "`handleButtonClick`".

```JS
  function MyComponent() {
    const handleButtonClick = () => {
      console.log("Button click!");
    };
    return (
      <button _____________________>Klikni me!</button>
    );
  }
```

#### Rješenje

```JS
  function MyComponent() {
    const handleButtonClick = () => {
      console.log("Button click!");
    };
    return (
      <button onClick={handleButtonClick}>Klikni me!</button>
    );
  }
```

### Zadatak

Navedite faze životnog ciklusa React komponente.

#### Rješenje

1. Inicijalizacija komponente (initialization)
2. Postavljanje na DOM (mounting)
3. Ažuriranje (updating)
4. Brisanje iz DOM-a (unmounting)

### Zadatak

Što omogućuje primjena lista unutar React komponenti? Zašto elementima liste dajemo svojstvo `key` s jedinstvenom vrijednošću?

#### Rješenje

Liste olakšavaju definiciju sadržaja (elemenata istog tipa) koji vraća
određena komponenta te omogućuju veću fleksibilnost u upravljanju njime.

Svojstvo `key` pomaže React-u da prepozna elemente liste koji su se
promijenili, dodali ili uklonili - osigurava bolje performanse.

### Zadatak

Navedite tri načina za stilizaciju sadržaja komponenti u React-u.

#### Rješenje

1. CSS Stylesheet
2. Inline stilovi
3. CSS Modules

### Zadatak

Koji tip aplikacija gradimo s React-om?

#### Rješenje

S React-om gradimo Single-page aplikacije:
* web-aplikacije koje se sastoje od samo jedne stranice
* stranica u interakciji s korisnikom vrši dinamičko prepisivanje trenutnog sadržaja umjesto učitavanja nove stranice.
