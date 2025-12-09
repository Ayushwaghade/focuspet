// let coins = 0;
// let sess = [];

// Load user data after login
async function loadUserData() {
  const token = localStorage.getItem("authToken");
  if (!token) return;

  const res = await fetch("http://localhost:5000/api/user/me", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json();

  coins = data.coins;
  sess = data.sessions;

  updDisp();
  drawChart();
}

// update UI
function updDisp() {
  document.getElementById("coinsDisplay").textContent = "Coins: " + coins;
}

// save coins to DB
async function saveCoins() {
  const token = localStorage.getItem("authToken");

  await fetch("http://localhost:5000/api/user/coins", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ coins }),
  });
}

// run when page loads
loadUserData();
