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

    const jawabanNya = [
        { input1: 1, jawaban: 'A' },
        { input2: 2, jawaban: 'I' },
        { input3: 3, jawaban: 'A' },
        { input4: 4, jawaban: 'O' },
        { input5: 5, jawaban: 'P' },
        { input6: 6, jawaban: 'I' },
        { input7: 7, jawaban: 'N' },
        { input8: 8, jawaban: 'G' },
        { input9: 9, jawaban: 'T' },
        { input10: 10, jawaban: 'W' },
        { input11: 11, jawaban: 'E' },
        { input11: 12, jawaban: 'A' },
        { input11: 13, jawaban: 'K' },
        { input11: 14, jawaban: 'D' },
        { input11: 15, jawaban: 'S' },
        { input11: 16, jawaban: 'C' },
        { input11: 17, jawaban: 'L' },
        { input11: 18, jawaban: 'U' },
        { input11: 19, jawaban: 'T' },
        { input11: 20, jawaban: 'C' },
        { input11: 21, jawaban: 'H' },
        { input11: 22, jawaban: 'C' },
        { input11: 23, jawaban: 'E' },
        { input11: 24, jawaban: 'N' },
        { input11: 25, jawaban: 'C' },
        { input11: 26, jawaban: 'R' },
        { input11: 27, jawaban: 'Y' },
        { input11: 28, jawaban: 'P' },
        { input11: 29, jawaban: 'T' },
        { input11: 30, jawaban: 'D' },
        { input11: 31, jawaban: 'P' },
    ];


    document.getElementById("validate-button").addEventListener("click", () => {
        let score = 0;
        const inputs = document.querySelectorAll('input[type="text"]');

        inputs.forEach((input, index) => {

            const userJawab = input.value.toUpperCase();

            if (index < jawabanNya.length) {

                const jawabanBenar = jawabanNya[index].jawaban;

                if (userJawab === "") {
                    input.style.backgroundColor = 'lightcoral';
                } else if (userJawab === jawabanBenar) {
                    score++;
                    input.style.backgroundColor = 'lightgreen';
                } else {
                    score--;
                    input.style.backgroundColor = 'lightcoral';
                }
            }
        });

        document.querySelector('.skornya h3').textContent = `Score: ${score}`;
    });

});