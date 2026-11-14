const CORRECT_PASSWORD = "1234";
let failedAttempts = 0;
const MAX_ATTEMPTS = 3;

function triggerLockdown() {
  document.getElementById("first-screen").style.display = "none";
  document.getElementById("lockdown-screen").classList.add("active");
}

function checkPassword() {
  const inputField = document.getElementById("password-input");
  const errorMsg = document.getElementById("error-msg");

  if (inputField.value === CORRECT_PASSWORD) {
    errorMsg.textContent = "";
    inputField.style.borderColor = "green";
    startCosmicVortexSequence();
  } else {
    failedAttempts++;

    if (failedAttempts >= MAX_ATTEMPTS) {
      triggerLockdown();
    } else {
      const attemptsLeft = MAX_ATTEMPTS - failedAttempts;
      errorMsg.textContent = `Invalid Key. Failed attempt! ${attemptsLeft} attempts left.`;

      // Turn the input border red
      inputField.style.borderColor = "#ff4757";
      inputField.value = "";
    }
  }
}

function startCosmicVortexSequence() {
  const loginBox = document.getElementById("login-screen");
  const Blackhole = document.getElementById("blackhole-vortex");
  const Flash = document.getElementById("flash-light");
  const stage1 = document.getElementById("first-screen");
  const stage2 = document.getElementById("next-screen");
  //--- Running The CSS animations
  loginBox.classList.add("implode-animation");
  Blackhole.classList.add("vortex-animation");

  setTimeout(function () {
    Flash.classList.add("flash-animation");
  }, 2000);

  //--- Turn/Swap to other screen
  setTimeout(function () {
    stage1.style.display = "none";
    stage2.style.display = "block";
  }, 2300);
}

let balance = 20000;

function proceedToPage3() {
  document.getElementById("next-screen").style.display = "none";
  document.getElementById("third-screen").style.display = "block";

  const stage1 = document.getElementById("first-screen");
  const stage2 = document.getElementById("next-screen");
  const stage3 = document.getElementById("third-screen");

  stage1.style.display = "none";
  stage2.style.display = "none";
  stage2.style.visibility = "hidden";
  stage2.style.pointerEvents = "none";
  stage2.style.zIndex = "-1";

  stage3.style.display = "block";
  stage3.style.visibility = "visible";
}

function BalanceShow() {
  let balanceV = document.getElementById("balance-value");
  balanceV.innerText = balance;

  setTimeout(() => {
    balanceV.innerText = "";
  }, 6000);
}

// Withdraw
function checkWithdraw() {
  const errorMsg = document.getElementById("error-msg-atm");
  const withdrawInput = document.getElementById("withdraw-input");
  const balanceV = document.getElementById("balance-value");

  if (withdrawInput.value > 0 && withdrawInput.value <= balance) {
    errorMsg.textContent = "";
    withdrawInput.style.borderColor = "green";

    balance = balance - withdrawInput.value;
    balanceV.innerText = balance;
  } else {
    errorMsg.textContent = "Enter right amount. Amount not present";
    withdrawInput.style.borderColor = "#ff4757";
  }
  withdrawInput.value = "";

  setTimeout(() => {
    withdrawInput.style.borderColor = "";
  }, 1000);
}

// Deposit
function checkDeposit() {
  const inputField = document.getElementById("deposit-input");
  const errorMsg = document.getElementById("error-msg-atm");
  const balanceV = document.getElementById("balance-value");

  if (inputField.value >= 0) {
    errorMsg.textContent = "";
    inputField.style.borderColor = "green";
    balance = balance + +inputField.value;
    balanceV.innerText = balance;
  } else {
    errorMsg.textContent = "Invalid amount.";
    inputField.style.borderColor = "#ff4757";
  }
  inputField.value = "";

  setTimeout(() => {
    inputField.style.borderColor = "";
  }, 1000);
}

function exitATM() {
  // 1. Hide Stage 3-third screen
  const stage3 = document.getElementById("third-screen");
  stage3.style.display = "none";
  stage3.style.visibility = "hidden";

  // 2. Clearing ATM data & messages
  document.getElementById("balance-value").innerText = "";
  document.getElementById("withdraw-input").value = "";
  document.getElementById("deposit-input").value = "";
  document.getElementById("error-msg-atm").textContent = "";

  // 3. reset the (Login Screen) & Animations
  const stage1 = document.getElementById("first-screen");
  const loginBox = document.getElementById("login-screen");
  const blackhole = document.getElementById("blackhole-vortex");
  const flash = document.getElementById("flash-light");
  const passwordInput = document.getElementById("password-input");

  loginBox.classList.remove("implode-animation");
  blackhole.classList.remove("vortex-animation");
  flash.classList.remove("flash-animation");

  passwordInput.value = "";
  passwordInput.style.borderColor = "";
  failedAttempts = 0;

  stage1.style.display = "block";
}

window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});

document
  .getElementById("withdraw-input")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") checkWithdraw();
  });

document
  .getElementById("deposit-input")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") checkDeposit();
  });
