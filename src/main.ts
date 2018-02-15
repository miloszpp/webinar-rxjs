class Car {
    constructor(private engine: string) {

    }
}

setInterval(() => {
    document.getElementsByTagName("h1")[0].innerText = "Bye!";
}, 1000);