// after installation of OneCallWeather
{ module: "MMM-OneCallWeather", position: "topright", header: "Weather", config: { apikey: "YOUROPENWEATHERAPIKEY", iconset: "9a", iconsetFormat: "svg", units: "imperial", showHumidity: true, maxDailiesToShow: 3, showDescription: true } }

//

{ module: "MMM-SmartMirror", position: "top_left" },

{ module: "MMM-OneCallWeather", position: "topright", header: "Weather", config: { apikey: "YOUROPENWEATHERAPIKEY", iconset: "9a", iconsetFormat: "svg", units: "imperial", showHumidity: true, maxDailiesToShow: 3, showDescription: true } },

{ module: "MMM-CalendarExt2", position: "top_left", config: { firstDayOfWeek: 0, mode: "month" } }
