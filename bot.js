// === Auto-answer trigger for Joldo.kg ===
// 🔥 Press `` to activate auto-answer highlight

document.addEventListener("keydown", (() => {
    let inputBuffer = "";

    return function (event) {
        inputBuffer += event.key;

        // Trigger when `` is typed
        if (inputBuffer.includes("``")) {
            inputBuffer = "";

            const cleanText = text =>
                text.toLowerCase().replace(/[\s\p{P}]/gu, "");

            const boldElement = document.querySelector('div[style="margin: 15px 0px;"] b');
            if (!boldElement) return console.log("❌ Question not found");

            const questionText = cleanText(boldElement.innerText.trim());
            console.log("🔍 Searching:", questionText);

            const foundItem = window.hackedData?.find(q =>
                cleanText(q.ques) === questionText
            );

            if (!foundItem) return console.log("❌ No match in hackedData");

            const correctAnswer = foundItem.answers.find(ans =>
                ans.istrue == 1 || ans.istrue == "1"
            );

            if (!correctAnswer) return console.log("❌ No correct answer in data");

            console.log("✅ Correct answer:", correctAnswer.name);

            const answerDiv = document.querySelector("div.px-2");
            if (!answerDiv) return console.log("❌ Answer block not found");

            const buttons = answerDiv.querySelectorAll("button.btn.btn-secondary");

            buttons.forEach(button => {
                // Reset style on click
                button.onclick = () => {
                    button.style.backgroundColor = "";
                    button.style.color = "";
                    button.style.border = "";
                    button.style.fontWeight = "";
                };

                if (cleanText(button.innerText) === cleanText(correctAnswer.name)) {
                    console.log("🎯 Button found:", button.innerText);
                    button.style.backgroundColor = "green";
                    button.style.color = "white";
                    button.style.border = "2px solid red";
                    button.style.fontWeight = "bold";
                }
            });
        }

        // Keep buffer short
        if (inputBuffer.length > 10) {
            inputBuffer = inputBuffer.slice(-6);
        }
    };
})());
