//Task 1 - Base Structure Setup
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

//Task 2 - Adding Risk Items
function addRiskItem(riskName, riskLevel, department) {
    //Creating riskCard div
    const riskCard = document.createElement("div");   
    riskCard.classList.add('riskCard');
    riskCard.setAttribute("risk-level", riskLevel)


    //Added riskCard content
    riskCard.innerHTML = `  
    <h3>${riskName}</h3>
    <span>Risk Level: <strong>${riskLevel}</strong></span>
    <p>${department}</p>
    <button class="resolve-btn">Resolve</button> 
    `;  
    //Appending to container
    riskDashboard.appendChild(riskCard); 

    //Added resolveButton for Task 3
    const resolveButton = document.createElement("button"); 
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", (event) => { 
        event.stopPropagation();     
    
        riskDashboard.removeChild(riskCard); });
    
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

    function highlightLowCards() { //Highlighting low cards with green
        const tickets = document.querySelectorAll("[risk-level='Low']");
        const ticketArray = Array.from(tickets);
    
        ticketArray.forEach(ticket => {
            ticket.style.backgroundColor = "Green";
            ticket.style.color = "black";
        });
    }

    function highlightMediumCards() {   //Highlighting medium cards with yellow
        const tickets = document.querySelectorAll("[risk-level='Medium']");
        const ticketArray = Array.from(tickets);
    
        ticketArray.forEach(ticket => {
            ticket.style.backgroundColor = "Yellow";
            ticket.style.color = "black";
        });
    }

    function highlightHighCards() {     //Highlighting high cards with red
        const tickets = document.querySelectorAll("[risk-level='High']");
        const ticketArray = Array.from(tickets);
    
        ticketArray.forEach(ticket => {
            ticket.style.backgroundColor = "red";
            ticket.style.color = "black";
        });
    }
    highlightLowCards();
    highlightMediumCards();
    highlightHighCards();

};

//Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

//Task 3 - Removing Risk Items

//Modified addRiskItem by adding the function removingRisk

//Test Case
addRiskItem("Market Fluctuations", "High", "Finance");


//Task 4 - Risk Categorization

//Test Cases
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");


//Task 5 - Bulk Risk Updates

//Added Increase Risk Button 
const increaseRiskButton = document.createElement("button");
increaseRiskButton.textContent = "Increase Risk Levels";

//Clicking resuklts in allRiskCards which changes Low TO Medium and Medium TO High
increaseRiskButton.addEventListener("click", () => {
    const allRiskCards = document.querySelectorAll('.riskCard');
    
    allRiskCards.forEach(riskCard => {
        const riskLevel = riskCard.getAttribute("risk-level");
        
        if (riskLevel === "Low") { //Updating risk level text and colors to match medium
            riskCard.setAttribute("risk-level", "Medium");
            riskCard.querySelector("strong").textContent = "Medium";  
            riskCard.style.backgroundColor = "yellow";  
            riskCard.style.color = "black";  
        } else if (riskLevel === "Medium") { //Updating risk level text and color to match high
            riskCard.setAttribute("risk-level", "High");
            riskCard.querySelector("strong").textContent = "High";
            riskCard.style.backgroundColor = "red";  
            riskCard.style.color = "black";  
        }
    });
});

//Test Case
addRiskItem("Employee Retention", "Low", "HR");
riskDashboard.appendChild(increaseRiskButton);


//Task 6 - Event Propagation Fix

// Click inside a risk card should not trigger a dashboard-wide event.








