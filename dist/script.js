// Example issue records. Edit this array to practice making a focused Git commit.
const issues = [
  { id: "FD-101", category: "Devices", title: "Printer is offline", description: "The printer appears in the device list but does not receive a print job.", firstCheck: "Confirm power and connection, then check the print queue." },
  { id: "FD-102", category: "Accounts", title: "Cannot sign in", description: "A user sees an error after entering their account credentials.", firstCheck: "Confirm the username and check whether the account is locked." },
  { id: "FD-103", category: "Network", title: "Wi-Fi keeps disconnecting", description: "A laptop loses its wireless connection during normal use.", firstCheck: "Check signal strength and try another known working network." },
  { id: "FD-104", category: "Devices", title: "Monitor has no signal", description: "The computer is running, but the external display stays blank.", firstCheck: "Check the input source, cable, and display settings." },
  { id: "FD-105", category: "Accounts", title: "Password reset link expired", description: "A password reset email opens an invalid or expired link.", firstCheck: "Request a fresh link and use the newest email." },
  { id: "FD-106", category: "Network", title: "Website will not load", description: "One site is unreachable while other sites work normally.", firstCheck: "Check the URL and compare results in another browser." },
  {id: "FD-107", category: "Devices", title: "Keyboard not working", description: "The space bar on the keyboard is not working.", firstCheck: "Check for dirt or debris around the space bar."},
];

const grid = document.querySelector("#issue-grid");
const search = document.querySelector("#issue-search");
const filters = document.querySelectorAll(".filter");
const count = document.querySelector("#result-count");
const empty = document.querySelector("#empty-state");
let selectedCategory = "all";

function renderIssues() {
  const query = search.value.trim().toLowerCase();
  const matches = issues.filter((issue) => {
    const categoryMatches = selectedCategory === "all" || issue.category === selectedCategory;
    const textMatches = [issue.title, issue.description, issue.category, issue.id].some((text) => text.toLowerCase().includes(query));
    return categoryMatches && textMatches;
  });

  // Static lesson data is controlled in this file, so the card markup is safe to render here.
  grid.innerHTML = matches.map((issue) => `
    <article class="issue-card">
      <div class="card-top"><span class="badge">${issue.category}</span><span class="issue-id">${issue.id}</span></div>
      <h3>${issue.title}</h3><p>${issue.description}</p>
      <div class="check"><strong>First check:</strong> ${issue.firstCheck}</div>
    </article>
  `).join("");
  count.textContent = `${matches.length} ${matches.length === 1 ? "issue" : "issues"}`;
  empty.hidden = matches.length !== 0;
}

search.addEventListener("input", renderIssues);
filters.forEach((button) => button.addEventListener("click", () => {
  selectedCategory = button.dataset.category;
  filters.forEach((filter) => {
    const active = filter === button;
    filter.classList.toggle("active", active);
    filter.setAttribute("aria-pressed", String(active));
  });
  renderIssues();
}));

renderIssues();
