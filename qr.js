const wrapper = document.querySelector(".wrapper"),
    generatebtn = wrapper.querySelector(".form button"),
    qrimg = wrapper.querySelector(".qr-code img"),
    qrinput = wrapper.querySelector(".form input");



generatebtn.addEventListener("click", () => {
    let qrvalue = qrinput.value;
    if (!qrvalue) return;
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
    generatebtn.innerText = "GENERATING QR CODE.....";
    qrimg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generatebtn.innerText = "GENERATE QR CODE";

    });

});

qrinput.addEventListener("keyup", () => {
    if (!qrinput.value) {
        wrapper.classList.remove("active");

    }
});