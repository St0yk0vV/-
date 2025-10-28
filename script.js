const priceInput = document.getElementById("price");
const givenInput = document.getElementById("given");
const calcBtn = document.getElementById("calcBtn");
const resultEl = document.getElementById("result");

calcBtn.addEventListener("click", () => {
  const price = parseFloat(priceInput.value);
  const given = parseFloat(givenInput.value);

  if (isNaN(price) || isNaN(given)) {
    resultEl.textContent = "❌ Моля, въведете и двете стойности!";
    resultEl.style.color = "black";
    return;
  }

  if (given < price) {
    const shortage = (price - given).toFixed(2);
    resultEl.textContent = `⚠️ Недостатъчна сума! Трябват още ${shortage} лв.`;
    resultEl.style.color = "red"; // червен текст
    return;
  }

  const change = (given - price).toFixed(2);
  resultEl.textContent = `✅ Рестото е ${change} лв.`;
  resultEl.style.color = "green"; // зелен текст
});
