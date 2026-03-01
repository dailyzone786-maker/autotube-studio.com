function goDashboard() {
  window.location.href = "dashboard.html";
}

function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark");
  body.classList.toggle("light");
}

fetch("/api/status")
  .then(res => res.json())
  .then(data => {
    const statusEl = document.getElementById("status");
    if (statusEl) {
      statusEl.innerText = data.status;
    }
  });
