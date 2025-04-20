function generateMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randNum = Math.random();
            const message = randNum < 0.5
                ? "0xy" + randNum
                : "abc" + randNum;
            resolve(message);
        }, Math.random() * 1000);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.textContent = "Generating...";
    generateMessage().then((message) => {
        document.body.textContent = message.startsWith("0xy") ? "good message" : "bad message";
    });
});