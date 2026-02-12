const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const demoContent = document.getElementById("demoContent");
const eventContainer = document.getElementById("eventContainer");

const sampleEvent = [
    {
        title: "web-Dev",
        date: "4-5-23",
        category: "workshop",
        description: "iubuvihu ohfowihfw fuwbwi"
    },
    {
        title: "web-Dev2",
        date: "3-3-25",
        category: "confrence",
        description: "nud buwouhw h9whg9wro g"
    }
];

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,  
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);
});

function createEventCard(eventData) {
    const card = document.createElement("div");

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    return card;
}

function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");
    emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}