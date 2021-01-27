const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const bankTransfer = document.getElementById("bank-tranction");
    bankTransfer.style.display = "block";
})


// Deposit Button Control
const depositBtn = document.getElementById("addDeposit");
    depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    //Convert system
    const depositNumber = parseFloat(depositAmount);

    // current Deposit System In Javascript

    const currentDeposit =  document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    
    document.getElementById("currentDeposit").innerText = totalDeposit;
    document.getElementById("depositAmount").value = "";
})