//Task 1 - Base Structure Setup
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

//Task 2 - Adding Risk Items
function addRiskItem(riskName, riskLevel, department) {
    //Creating riskCard div
    const riskCard = document.createElement("div");   
    riskCard.classList.add('riskCard');

    //Added riskCard content
    riskCard.innerHTML = `  
        <h3>${riskName}</h3>
        <span>Risk Level: <strong>${riskLevel}</strong></span>
        <p>${department}</p>
    `;  

    //Appending to container
    riskDashboard.appendChild(riskCard); 
}

//Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");


