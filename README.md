# 🌌 Cosmic ATM Simulator

An interactive, sci-fi-themed ATM banking simulator built with **HTML5, CSS3, and JavaScript**. This project features a multi-stage user flow, custom CSS transition animations, PIN authentication with intruder lockdown, and real-time balance management.

---
  
## ✨ Features

* **🔐 Secure PIN Authentication:** Requires a valid security key (`1234`) to access the terminal.
* **🚨 Intruder Lockdown Mode:** Tracks failed login attempts and locks down the system after **3 incorrect tries**.
* **🌀 Cosmic Vortex Transition:** Custom CSS keyframe animations (imploding login box, blackhole vortex, and screen flash) smoothly transition users into the main interface.
* **💰 Core ATM Operations:**
  * **Check Balance:** Displays the current balance and automatically hides it after 6 seconds for privacy.
  * **Withdraw Funds:**  Withdraws valid amounts directly from the balance with instant green or red border feedback.
  * **Deposit Funds:** Instantly updates the account balance with visual input feedback.
* **🚪 Secure Exit / Reset:** Clears displayed balances, resets all animations, and returns the terminal to the initial login screen.
* **⌨️ Keyboard Accessibility:** Supports the `Enter` key across login, withdrawal, and deposit inputs.

---

## 🛠️ Built With

* **HTML5** – Multi-stage terminal structure
* **CSS3** – Glassmorphism UI, neon glow effects, and keyframe animations
* **JavaScript (ES6)** – DOM manipulation, state management, and input validation

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   [git clone https://github.com](https://github.com/Mahzala-Abu-Bakar/ATM-simulator.git)
   ```
2. **Open the project:**
   Navigate to the project folder and open `index.html` in any modern web browser.
3. **Log in:**
   Enter the default PIN **`1234`** to unlock the ATM terminal.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
