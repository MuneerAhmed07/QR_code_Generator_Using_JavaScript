const generateBtn = document.querySelector("button"),
qrCode = document.querySelector(".qrcode"),
qrInput = document.querySelector("input"),
qrImg = document.querySelector("img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrCode.classList.add("active");
});