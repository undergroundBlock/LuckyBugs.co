ניסוי חברתי
האם הציבור יהיה מוכן להתאחד לחיים טובים יותר ללא עושק?
10% מההון נחסך ל4 שנים לדור הבא {מכניקה לקפיצה ושדרוג נכסים}
21% להנהלה
69% לקנייה וניהול הנכסים

כמה אופציות
1 - ספינת תענוגות
2 - בתי נופש
3 - מועדון / מסיבות
4 - נכסים מניבים


Club House - Techno
---------------------------
free enter for every club or festival made by

10,000 כרטיסים מקסימום
מתחיל במחיר
0.01BNB
מסתיים במחיר 100BNB

הפואנטה היא שאין צורך ביותר מידי אנשים מהסיבה שהמקומות שניתן לקנות מוגבלים
---------------------------------------------------------------------------------------------
למשל 2500 כרטיסים זה מספיק והמחיר ייעצר באזור ה 20BNB
שזה עלול להיות 20 אלף דולר.. אבל כשהמחיר


100 כרטיסים ראשונים
אתר הזמנות לבעלי כרטיס

אם נישאר על האלף כרטיסים
ואנשים ימכרו כל הזמן את הכרטיס שלהם בזול לפחות התקציב יעלה עם הזמן 
1000 כרטיסים המחיר עומד על 10BNB
אנשים מוכרים ב 5 BNB הקופה עולה ב 1 BNB כל מכירה שזה אומר 100 מכירות 100 BNB וכל פעם זה גודל כי הביקוש גודל 
כי יש עוד נכסים 

אם 10,000 כרטיסים באמת יימכרו והכרטיס האחרון יימכר במחיר של 100 BNB 
בממומצע של 50BNB לכרטיס 
זה אומר שגוייס 150,000,000 מליון דולר! לא כולל עמלות 

זה אומר שגוייס סכום לרכישת 100 נכסים חברתיים!
social life going to the next level
ישראלים תפיצו פרוייקט כחול לבן 
חופשות מסיבות ונדלן
יש אירוע יומולדת לך או לבן משפחה? שריינו השכרת מערכת של טורבוסאונד ;-)
באיסוף עצמי ללא תשלום

מדלגים על הקומבינות של הבנקים

כשאתה מוכר את הכרטיס זה מבטל את ההזמנות שלך ומישהו אחר יכול לתפוס את המקום שלך


בעצם החוזה מוכר 10,000 כרטיסים

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TicketMarketplace {
    address private owner;
    address private managingContract;

    uint256 public ticketPrice;
    uint256 public ticketsInitilized;
    uint256 public constant taxPercentage = 21;
    uint256 public constant initialPrice = 0.01 ether;
    uint256 public constant maxTickets = 10000;

    uint256 societyBalance;
    mapping(address => uint256) public balances;
    mapping(uint256 => address) public ticketOwners; 
    mapping(uint256 => bool) public ticketsForSale; // האם הכרטיס למכירה?
    mapping(uint256 => uint256) public ticketPrices; // מחיר הכרטיס
    
    event TicketPurchased(address buyer, uint256 ticketId, uint256 price);
    event TicketListed(address seller, uint256 ticketId, uint256 price);
    event TicketUnlisted(address seller, uint256 ticketId);
    
    constructor() {
        owner = msg.sender;
        managingContract = owner;
        ticketPrice = initialPrice;
        ticketsInitilized = 1;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function.");
        _;
    }

    function setManagingContract(address managingAddress) public onlyOwner {
        managingContract = managingAddress;
    }

    function sendToManagingContract() public onlyOwner {
        payable(managingContract).transfer(societyBalance);
        societyBalance = 0;
    }

    function withdrawFunds() external payable  {
        uint256 balance = balances[msg.sender];
        require(balance > 0, "No funds available for withdrawal.");
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(balance);
    }
    
    // work
    function purchaseTicket(uint256 ticketId) external payable {
        require(ticketId >= 1 && ticketId <= maxTickets, "Invalid ticket ID.");
        require(msg.value >= ticketPrices[ticketId], "Insufficient funds.");
        require(ticketsForSale[ticketId], "Ticket not available for sale.");
        require(ticketOwners[ticketId] != msg.sender, "You cannot buy your own ticket.");
        
        
        uint256 taxAmount = (ticketPrices[ticketId] * taxPercentage) / 100;
        uint256 purchaseValue = ticketPrices[ticketId] - taxAmount;

        ticketsForSale[ticketId] = false;

        if (msg.value > ticketPrices[ticketId]) {
            uint256 refundAmount = msg.value - ticketPrices[ticketId];
            payable(msg.sender).transfer(refundAmount);
        } 

        if (ticketOwners[ticketId] != owner){ // לא שייך לבעלים
            payable(ticketOwners[ticketId]).transfer(purchaseValue);
            ticketOwners[ticketId] = msg.sender;
            uint256 taxAmount2 = (taxAmount * taxPercentage) / 100; 
            societyBalance += taxAmount - taxAmount2;
            balances[owner] += taxAmount2;
        } else { // שייך לבעלים
            societyBalance += purchaseValue;
            balances[owner] += taxAmount;
            ticketOwners[ticketId] = msg.sender;
        }


        emit TicketPurchased(msg.sender, ticketId, purchaseValue);
    }
    
    function listTicket(uint256 ticketId, uint256 price) external {
        require(ticketId >= 1 && ticketId <= maxTickets, "Invalid ticket ID.");
        require(ticketOwners[ticketId] == msg.sender, "You can only list your own tickets.");
        require(!ticketsForSale[ticketId], "Ticket already listed for sale.");
        
        ticketsForSale[ticketId] = true;
        ticketPrices[ticketId] = price;
        
        emit TicketListed(msg.sender, ticketId, price);
    }
    
    function unlistTicket(uint256 ticketId) external {
        require(ticketId >= 1 && ticketId <= maxTickets, "Invalid ticket ID.");
        require(ticketOwners[ticketId] == msg.sender, "You can only unlist your own tickets.");
        require(ticketsForSale[ticketId], "Ticket is not listed for sale.");
        
        ticketsForSale[ticketId] = false;
           
        emit TicketUnlisted(msg.sender, ticketId);
    }
    

    // work 
    function uploadTickets(uint256 amount) external onlyOwner {
        uint256 a = ticketsInitilized + amount; 
        for (uint256 i = ticketsInitilized; i < a; i++) {

            uint256 ticketId = i;
            require(ticketId >= 1 && ticketId <= maxTickets, "Invalid ticket ID.");
            require(ticketOwners[ticketId] == address(0), "Ticket already sold.");
            
            ticketsInitilized++;
            ticketOwners[ticketId] = owner;
            ticketsForSale[ticketId] = true;
            ticketPrices[ticketId] = ticketPrice;
            
            emit TicketListed(owner, ticketId, ticketPrice);
            
            if (ticketPrice < maxTickets * initialPrice) {
                ticketPrice += initialPrice;
            }
        }
    }
}





 








