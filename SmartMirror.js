Module.register("MMM-JordynSmartMirror", { defaults: { greeting: "Good Morning!" },

start: function () { Log.info("Starting MMM-JordynSmartMirror"); this.updateTime(); setInterval(() => { this.updateTime(); }, 1000); },

updateTime: function () { this.updateDom(); },

getDom: function () { const wrapper = document.createElement("div"); wrapper.className = "jordyn-smart-mirror";

// Mirror name const title = document.createElement("div"); title.className = "mirror-name"; title.innerHTML = "Jordyn's Smart Mirror"; wrapper.appendChild(title);

// Greeting const greeting = document.createElement("div"); greeting.className = "mirror-greeting"; greeting.innerHTML = this.getGreeting(); wrapper.appendChild(greeting);

// Current time const time = document.createElement("div"); time.className = "mirror-time"; time.innerHTML = moment().format("h:mm A"); wrapper.appendChild(time);

// Current date const date = document.createElement("div"); date.className = "mirror-date"; date.innerHTML = moment().format("dddd, MMMM D, YYYY"); wrapper.appendChild(date);

return wrapper; },

getGreeting: function () { const hour = moment().hour();

if (hour < 12) { return "Good Morning!"; } else if (hour < 18) { return "Good Afternoon!"; } else { return "Good Evening!"; } } });
