document.addEventListener("DOMContentLoaded", () => {
    // Select div ids for question numbers
    const q1 = document.getElementById("no1");
    const q2 = document.getElementById("no2");
    const q3 = document.getElementById("no3");
    const q4 = document.getElementById("no4");
    const q5 = document.getElementById("no5");
    const q6 = document.getElementById("no6");
    const q7 = document.getElementById("no7");
    const q8 = document.getElementById("no8");
    const q9 = document.getElementById("no9");
    const q10 = document.getElementById("no10");

    // Set the text context for question numbers
    q1.textContent = '1';
    q2.textContent = '2';
    q3.textContent = '3';
    q4.textContent = '4';
    q5.textContent = '5';
    q6.textContent = '6';
    q7.textContent = '7';
    q8.textContent = '8';
    q9.textContent = '9';
    q10.textContent = '10';

    // Example correct answers array
    const correctAnswers = [
        { question: 1, answer: 'AI' },
        { question: 2, answer: 'WWW' },
        { question: 3, answer: 'SQL' },
        { question: 4, answer: 'HTML' },
        { question: 5, answer: 'PL/SQL' },
        { question: 6, answer: 'PC' },
        { question: 7, answer: 'Cloud' },
        { question: 8, answer: 'RAM' },
        { question: 9, answer: 'Data' },
        { question: 10, answer: 'API' }
    ];

    // Validate answers on button click
    document.getElementById("validate-button").addEventListener("click", () => {
        let score = 0;
        const inputs = document.querySelectorAll('input[type="text"]');

        inputs.forEach((input, index) => {
            const userAnswer = input.value.toUpperCase(); // Get user input and convert to uppercase

            // Check if index is within bounds of correctAnswers array
            if (index < correctAnswers.length) {
                const correctAnswer = correctAnswers[index].answer; // Get correct answer from array

                if (userAnswer === correctAnswer) {
                    score++;
                    input.style.backgroundColor = 'lightgreen'; // Highlight correct answers
                } else {
                    input.style.backgroundColor = 'lightcoral'; // Highlight incorrect answers
                }
            } else {
                console.error(`Index ${index} is out of bounds for correctAnswers array.`);
            }
        });

        // Update the score display
        document.querySelector('.footer h3').textContent = `Score: ${score}`;
    });
});