const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const generateWord = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < n; i++) {
        text += letters[(Math.random() * (letters.length - 1)).toFixed(0)];
    }
    return text;
}




const getWords = () => {
    const numOfWords = Number(input.value);

    if (numOfWords > 0) {

        const para = document.createElement("p");


        let words = ""

        for (let i = 0; i < numOfWords; i++) {

            const randomNumber = (Math.random() * 6).toFixed(0);
            words += generateWord(randomNumber).toLocaleLowerCase();
            words += " ";
        }


        para.innerText = words;

        para.setAttribute("class", "paras");

        container.append(para);
    }
}

