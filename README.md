# Ryukyuan language dictionary

This project provides a web interface for viewing fieldwork data from the 1960s on the endangered Ryukyuan languages of southern Japan.

The Ryukyuan languages are spoken on the Ryukyu Islands in the south of Japan. Together with Japanese, they belong to the Japonic language family. Most of the languages are now endangered with only a few native speakers remaining. Therefore, considerable effort has been undertaken in Japan to preserve the languages through extensive fieldwork.

This project digitizes fieldwork data that were publish in 1966 by Hirayama, Ōshima and Nakamoto, containing the 630 vocabulary entries from 13 Ryukyuan languages and the Kagoshima dialect of southern Japan, in total more than 8,000 words. (Dtailed bibliographic information is contained in the app).

## Usage

The dictionary can be searched by either English glosses, a romanized version of the original Japanese (Rōmaji) or in Japanese. The English glosses are based on the World Loanword Database ([WOLD](https://wold.clld.org/)). Additionally, this source provides information on how likely language concepts are to be borrowed or retained vocabulary respectively. These scores are also provided. The rank given in brackets next to the score refers to the borrowability in the dataset, i.e. rank 1 ('the fire') is the least prone to borrowing, and lower ranks being vocabulary that is more likely to be a borrowing. This can be used in research on the reconstruction of Proto-Ryukyuan.

Although the data has been digitized with great care, scans of all the entries are also provided to verify the data and detect possible errors during the digitizing step. It is also useful to see the exact transcription practice of the original source, since some letters could not be written properly with unicode characters.

## Technical implementation

The app is designed as a client-side rendered webpage written mainly in HTML with the data stored in JSON files. Functionality is achieved through the minimal JavaScript framework [Alpine](https://alpinejs.dev/).

Considering the size of the dataset, the search functionality was implemented with a simple JavaScript filter. If this database is to be extended in the future, it may be neccessary to reimplement it as an indexed search for quicker lookup times.

For displaying the location of all the languages, the JavaScript library [Leaflet](https://leafletjs.com/) was used. It provides a convenient way to embed an OpenStreeMap layer with custom markers for the language locations. The visibility of the map can be toggled with a button.

For the general styling of the app, the minimalist CSS framework [Milligram](https://milligram.io/) was used. The original source was modified and parameterized, so that the color scheme of the app can quickly be changed. Some lines were also commented out so as to not interfere with the custom CSS for the application. The app automatically applies dark mode if the user's operating system uses it. Dark mode can also be achieved by manually setting the `dark` class on the body element of the page.

The app is fully responsive and works well on desktop as well as mobile devices. Icons are provided through [Feather](https://feathericons.com/).

### Note

Only a small subset of the complete data is uploaded on Github. This is to protect the copyright of the original source. Enough data is provided to test the functionality of the application. The demo video below uses a local copy of the complete data set.

### Video Demo

[Link](https://youtu.be/VENKypZjEp0)

#### Description

These are the timestamps in the video:

- 0:03 App start
- 0:04 English search
- 0:12 Dark mode
- 0:18 Continuing search
- 0:22 Normal mode
- 0:25 Mobile view
- 0:32 Minimize map
- 0:33 Desktop view
- 0:39 Romanized Japanaese search (case insensitive)
- 0:48 Japanese search
- 0:50 Selecting from dropdown

IMPORTANT:

Change of entry `1.5.37` (天)!
Rōmaji was changed from 'ten' to 'ama' in the `info.json` and `searchterms.json` files, to avoid key conflict with `tō とお ‘ten’`.
