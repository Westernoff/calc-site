// Калькулятор процентов
function calcPercent() {
  const base = parseFloat(document.getElementById('base-number').value);
  const percent = parseFloat(document.getElementById('percent-value').value);
  const result = document.getElementById('percent-result');

  if (isNaN(base) || isNaN(percent)) {
    result.textContent = "Введите корректные значения!";
    return;
  }

  result.textContent = `${percent}% от ${base} = ${(base * percent / 100).toFixed(2)}`;
}

// Кредитный калькулятор (аннуитетный)
function calcCredit() {
  const amount = parseFloat(document.getElementById('loan-amount').value);
  const months = parseInt(document.getElementById('loan-term').value);
  const rate = parseFloat(document.getElementById('loan-rate').value);
  const result = document.getElementById('credit-result');

  if (isNaN(amount) || isNaN(months) || isNaN(rate)) {
    result.textContent = "Введите корректные значения!";
    return;
  }

  const monthlyRate = rate / 100 / 12;
  const payment = amount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -months)));

  result.textContent = `Ежемесячный платёж: ${payment.toFixed(2)} ₽`;
}

// BMI калькулятор
function calcBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;
  const result = document.getElementById('bmi-result');

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    result.textContent = "Введите корректные значения!";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  let status = "";

  if (bmi < 18.5) status = "Недостаточный вес";
  else if (bmi < 25) status = "Норма";
  else if (bmi < 30) status = "Избыточный вес";
  else status = "Ожирение";

  result.textContent = `Ваш BMI: ${bmi} (${status})`;
}
