// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "W9KM - EN51wr";

// Grid layout desired
var layout_cols = 2;
var layout_rows = 3;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "2196F3",
    "PSK Reporter",
    "https://www.pskreporter.info/pskmap.html",
    "1.0"
  ],
  [
    "2196F3",
    "CONTESTS",
    "https://www.contestcalendar.com/fivewkcal.php",
    "1"
  ],
  [
    "2196F3",
    "DX CLUSTER",
    "https://dxcluster.ha8tks.hu/map/",
    "1"
  ],
  ,
  [
    "2196F3",
    "SOLAR",
    "https://www.solarham.com/",
    "1"
  ],[
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#9.26/41.759/-88.313",
    "1",
    "R"
  ],
  [
    "2196F3",
    "VENTUSKY",
    "https://www.ventusky.com/?p=41.904;-87.823;9&l=wind-10m",
    "1",
    "R"
  ],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=41.759&lon=-88.313&zoom=5",
    "1",
    "R"
  ],
  [
    "2196F3",
    "WINDY",
    "https://embed.windy.com/embed2.html?lat=41.759&lon=-88.313&detailLat=41.759&detailLon=-88.313&width=900&height=600&zoom=8&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1",
    "1",
    "R"
  ],
  [
    "2196F3",
    "ADSB",
    "https://globe.adsbexchange.com/?airport=ORD",
    "1",
    "R"
  ],
  [
    "2196F3",
    "APRS",
    "https://aprs-map.info/?center=41.7037,-88.0865&zoom=10",
    "1",
    "R"
  ]
];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KLOT_loop.gif"
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png"
  ],
  [
    "",
    "iframe|https://www.pskreporter.info/pskmap.html?preset&callsign=EN&what=grid&mode=FT8&band=45000000-55000000&timerange=900&hidepink=1&showgrid=1&showsnr=1&hidestats=1&noautozoom=1&mapCenter=47.910675160763475,-80.00511321479877,1.9327087149600564"
  ],
  [
    "",
    "https://prop.kc2g.com/renders/current/mufd-normal-now.svg"
  ],
  [
    "LIGHTNING LOCAL",
    "iframe|https://map.blitzortung.org/#8.26/41.759/-88.313"
  ],
  [
    "",
    "https://www.hamqsl.com/solar101vhf.php"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  60000,
  60200,
  300100,
  60300,
  240600,
  60800
];

// CUT END