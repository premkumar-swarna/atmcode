let correctPin = "9676"; 
let currentPin = "";
let balance = 1000; 

// Append digit to the PIN input
function appendNumber(num) {
    if (currentPin.length < 4) {
        currentPin += num;
        document.getElementById("pin").value = currentPin;
    }
}

// Clear the PIN input
function clearPin() {
    currentPin = "";
    document.getElementById("pin").value = currentPin;
}

// Submit the PIN
function submitPin() {
    if (currentPin === correctPin) {
        document.getElementById("message").innerText = "PIN Correct. Access granted.";
        document.getElementById("atmActions").style.display = "block";
        document.getElementById("atm-screen").style.display = "none";
        document.getElementById("balanceDiv").style.display = "none";
    } else {
        document.getElementById("message").innerText = "Incorrect PIN. Try again.";
        currentPin = "";
        document.getElementById("pin").value = "";
    }
}

// Check the balance
function checkBalance() {
    document.getElementById("message").innerText = "Checking balance...";
    document.getElementById("balanceDiv").style.display = "block";
}

// Withdraw money
function withdrawMoney() {
    let amount = prompt("Enter the amount to withdraw:");
    if (amount && !isNaN(amount) && amount > 0) {
        amount = parseFloat(amount);
        if (amount <= balance) {
            balance -= amount;
            document.getElementById("balanceAmount").innerText = balance.toFixed(2);
            document.getElementById("message").innerText = `You have successfully withdrawn $${amount.toFixed(2)}.`;
        } else {
            window.alert("insuffiecent funds");
        }
    } else {
        document.getElementById("message").innerText = "Invalid amount.";
    }
}

// Logout
function logout() {
    currentPin = "";
    document.getElementById("pin").value = "";
    document.getElementById("message").innerText = "Logged out. Please enter your PIN.";
    document.getElementById("atmActions").style.display = "none";
    document.getElementById("atm-screen").style.display = "block";
    document.getElementById("balanceDiv").style.display = "none";
}
