# tour-guide
Final project for IT Bootcamp

### Tehnologije

1. react 16.14.5
2. react-router-dom 16.14.5
3. redux 16.14.5
4. axios
5. JSON-server

### Struktura foldera:

1. common
    - Sve komponente koje se koriste vise puta u aplikaciji
2. routes
    - Glavne komponente (Rute) aplikacije
    - Direktna veza sa ```<Route>``` komponentom
3. services
    - Pomocne funkcije i komunikacija sa serverom

### Instalacija (Front-End)

Prethodno potrebna instalacija NodeJS (v12.14.0 ili novija)
    
    1. Klonirati repozitorijum
    2. npm install

### Instalacija (JSON-server)

    1. U kloniranom repozitorijumu se nalazi db.json fajl
    2. Instalirati JSON-server: ```npm install -g json-server```

### Pokretanje projekta

    1. ```json-server --watch db.json --port 3005```
        -Pokrece JSON-server na portu 3005 (Bitno!)
    2. ```npm start```
        -Pokrece React

Lokalni web server koristi standardni React port 3000.

Aplikacija je prikaz turistickih tura gradova, daje informacije o sadrzaju tura i cenama.

Generalne funkcionalnosti: sadrzi login za users da mogu da se loguju na aplikaciju putem dugmeta submit.

Strana izgleda ovako:

1. Home Page (URL:/#/) u okviru koga je i Login stranica za logovanje korisnika
2. About Page (URL:/#/about)
3. Contact Page (URL:/#/contact)
4. Tour Page (URL:/#/tour)
