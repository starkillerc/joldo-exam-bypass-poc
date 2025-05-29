# Joldo.kg Client-Side Answer Exploit

This project demonstrates a logic flaw in the Joldo.kg driving test platform, which allows users to extract correct answers and automate test completion through injected JavaScript.

---

## 🧠 Idea

The Joldo.kg frontend is built with Vue.js. When a user takes a test:

- Questions and encrypted answers are sent to the frontend
- The decryption and **answer validation logic happen entirely in the browser**
- The frontend performs decryption and local validation to avoid sending a request to the server after each answer.
- Although the server does validate results at the end, **correct answers are already available on the client**, making automation possible.

---

## ⚙️ What I Did

1. Opened Chrome DevTools → `Storage`
2. Located the part of the Vue state where the decrypted answers are stored
3. Hooked into the app logic and injected a watcher to save correct answers into `window.hackeddata`
4. Wrote a script that:
   - Reads the current question
   - Finds the correct answer in `window.hackedData`
   - Programmatically clicks the right answer
   - Repeats

Result:  
→ Fully automated solving of all questions, collecting points without reading a single task.

---

## ⚠️ Why It Works

- The frontend performs decryption and correctness checking
- There’s no server-side enforcement of user actions
- Anyone with DevTools access can hook into the state, extract correct answers, and bypass the UX

---

## 📦 Technologies Used

- JavaScript (injected in-browser)
- Chrome DevTools
- Vue.js app structure awareness

---

## ❗ Disclaimer

This project is for educational and research purposes only.  
No real accounts were exploited. No answers were submitted on behalf of others.  
The goal is to show that placing validation logic and answer data on the client opens the door to automation and abuse.
