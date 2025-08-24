# ✊✋✌ Rock Paper Scissors Game

A fun and interactive **Rock Paper Scissors** game built with **HTML, CSS, and JavaScript**.  
Play against the computer and test your luck while exploring key JavaScript concepts.

---

## 🚀 Live Demo
[Click here to play](https://renu-kg.github.io/Rock-Paper-Scissors/)  

---

## ✨ Features
- Play against the computer  
- Randomized computer moves using `Math.random()`  
- Displays round results (Win / Lose / Draw) dynamically in the DOM  
- Keeps track of player and computer scores with variables  
- Reset option for a new game  

---

## 🛠️ Tech Stack
- **HTML** – structure and buttons  
- **CSS** – styling and layout  
- **JavaScript** – game mechanics & interactivity  

---

## 🎮 How to Play
1. Open the deployed site or run locally.  
2. Choose **Rock**, **Paper**, or **Scissors**.  
3. The computer randomly picks its move.  
4. Rules:  
   - Rock beats Scissors  
   - Scissors beats Paper  
   - Paper beats Rock  
5. The game updates results and scores instantly.  

---

## 🧑‍💻 JavaScript Concepts Used

This project demonstrates several **JavaScript fundamentals**:

### 🎯 Event Listeners
Detecting when the player clicks a button (`rock`, `paper`, or `scissors`).
```js
buttons.forEach(button => {
  button.addEventListener("click", playRound);
});

```

 ### Math.random()  
  To generate a random choice for the computer.  
  ```js
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
```
