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
    const depositNumber = getInputNumber("depositAmount");
        
    // const depositAmount = document.getElementById("depositAmount").value;
    //Convert system
    // const depositNumber = parseFloat(depositAmount);

    // current Deposit System In Javascript

    // const currentDeposit =  document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    
    // document.getElementById("currentDeposit").innerText = totalDeposit;

        spanTagUpdate("currentDeposit", depositNumber);
        spanTagUpdate("currentBalance", depositNumber);
        
    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("depositAmount").value = "";
})


//withdraw Button Control
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
    spanTagUpdate("currentWithdraw", withdrawNumber);
    spanTagUpdate("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id) {
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}


function spanTagUpdate(id, depositNumber) {
    const currentDeposit =  document.getElementById(id).innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    
    document.getElementById(id).innerText = totalDeposit;

}