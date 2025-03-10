//Task 1 - Base Structure Setup
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

//Task 2 - Adding Risk Items
function addRiskItem(riskName, riskLevel, department) {
    //Creating riskCard div
    const riskCard = document.createElement("div");   
    riskCard.classList.add('riskCard');

    //Added resolveButton for Task 3
    const resolveButton = document.createElement("button"); 
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", (event) => { 
        event.stopPropagation();     
    
        riskDashboard.removeChild(riskCard); });

    //Added riskCard content
    riskCard.innerHTML = `  
        <h3>${riskName}</h3>
        <span>Risk Level: <strong>${riskLevel}</strong></span>
        <p>${department}</p>
        <button class="resolve-btn">Resolve</button> 
    `;  

    //Appending to container
    riskDashboard.appendChild(riskCard); 
}

//Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

//Task 3 - Removing Risk Items
function removingRisk () {  //Function to be called to remove the card
    document.getElementById("riskDashboard").addEventListener("click", function(event) {
        if (event.target.classList.contains("resolve-btn")) {
            event.stopPropagation();
            event.target.parentElement.remove(); //Removes the card
        }
    });
};
//Calling removingRisk
removingRisk();

//Test Case
addRiskItem("Market Fluctuations", "High", "Finance");




