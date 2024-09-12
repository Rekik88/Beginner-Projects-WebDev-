function calculate() {
  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value);
  const time = Number(document.getElementById("time").value);
  const result = document.getElementById("total");

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    window.alert("Please enter valid numbers.");
  } else if (principal < 0 || rate < 0 || time < 0) {
    window.alert("Numbers cannot be negative.");
  } else {
    result.textContent = (
      principal * Math.pow(1 + rate / 100, time)
    ).toLocaleString("en-US", { style: "currency", currency: "USD" });
  }
}
