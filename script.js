function goToEvents() {
  window.location.href = "events.html";
}

async function loadEvents() {
  const res = await fetch("http://localhost:3000/events");
  const data = await res.json();

  const container = document.getElementById("events-container");

  data.forEach(event => {
    const div = document.createElement("div");
    div.className = "event-card";
    div.innerHTML = `
      <h3>${event.name}</h3>
      <p>${event.date}</p>
      <button onclick="bookEvent('${event.name}')">Book</button>
    `;
    container.appendChild(div);
  });
}

function bookEvent(name) {
  alert("Booked " + name);
}

if (document.getElementById("events-container")) {
  loadEvents();
}