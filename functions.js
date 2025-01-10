// JavaScript to toggle the navigation menu on small screens
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  if (hamburgerIcon) {
      hamburgerIcon.addEventListener("click", function () {
          const navList = document.getElementById("nav-list");
          if (navList) {
              navList.classList.toggle("active");
          }
      });
  }
});



// JavaScript to restrict the pickup date to within 7 days from the current date
document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("date");
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 7);

    // Format dates to YYYY-MM-DD format for input[type="date"]
    const formatDate = (date) => {
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    };

    dateInput.setAttribute("min", formatDate(today));
    dateInput.setAttribute("max", formatDate(maxDate));
  });

// CART DRAWER

document.addEventListener("DOMContentLoaded", function () {
    const sideDrawer = document.getElementById("sideDrawer");
    const openDrawer = document.getElementById("openDrawer");
    const closeDrawer = document.getElementById("closeDrawer");

    if (sideDrawer && openDrawer && closeDrawer) {
        openDrawer.addEventListener("click", function () {
            sideDrawer.classList.add("open");
        });

        closeDrawer.addEventListener("click", function () {
            sideDrawer.classList.remove("open");
        });
    }
});



// JavaScript to restrict the pickup date to within 7 days from the current date
// JavaScript to restrict the pickup date to within 7 days from the current date
document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("date");
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 7);

    // Format dates to YYYY-MM-DD format for input[type="date"]
    const formatDate = (date) => {
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    };

    dateInput.setAttribute("min", formatDate(today));
    dateInput.setAttribute("max", formatDate(maxDate));
  });

  // JavaScript to handle the Generate Code button click
  document.addEventListener("DOMContentLoaded", function () {
    const generateCodeBtn = document.getElementById("generateCodeBtn");
    if (generateCodeBtn) {
        generateCodeBtn.addEventListener("click", function () {
            const generatedCode = "HSS" + Math.floor(Math.random() * 1000000);
            const generatedCodeElement = document.getElementById("generatedCode");
            const generatedCodeSection = document.getElementById("generatedCodeSection");

            if (generatedCodeElement && generatedCodeSection) {
                generatedCodeElement.textContent = generatedCode;
                generatedCodeSection.style.display = "block";
            }
        });
    }
});

console.log(document.getElementById("hamburger-icon")); // Check if it logs null
console.log(document.getElementById("nav-list")); // Check if it logs null

//CHECK OUT
//CHECK OUT
//CHECK OUT

document.addEventListener("DOMContentLoaded", () => {
  const cartItems = [
    { name: "Product 1", quantity: 2, price: 500 },
    { name: "Product 2", quantity: 1, price: 300 },
  ];

  // Calculate and Update Total Price
  function updateCartTotal() {
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    document.querySelector(".total-price").textContent = `₱${totalPrice}`;
  }

  // Populate Cart Items in the DOM
  function populateCart() {
    const cartContainer = document.querySelector(".cart-items");
    cartContainer.innerHTML = ""; // Clear existing items

    cartItems.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      cartItem.innerHTML = `
        <span class="product-name" style="font-size: 16px;">${item.name}</span>
        <span class="quantity" style="font-size: 13px;">Quantity: ${item.quantity}</span>
        <span class="price" style="font-size: 13px;">₱${item.price}</span>
      `;
      cartContainer.appendChild(cartItem);
    });

    updateCartTotal();
  }

  // Generate a Unique Order Code
  function generateOrderCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 8 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join("");
  }

  // Show Popup Modal
  function showPopup(orderCode) {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    popup.innerHTML = `
      <div class="popup-content">
        <h2>Reservation Complete</h2>
        <p>Your Order Code is:</p>
        <h3>${orderCode}</h3>
        <button class="close-btn2">Close</button>
        <button class="print-btn">Print</button>
      </div>
    `;

    document.body.appendChild(popup);

    document.querySelector(".close-btn2").addEventListener("click", () => {
      document.body.removeChild(popup);
      window.location.href = "index.html";
    });

    document.querySelector(".print-btn").addEventListener("click", async () => {
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const phone = document.querySelector("#phone").value;
      const date = document.querySelector("#date").value;
      const time = document.querySelector("#time").value;
    
      // Retrieve cart items
      const cartItems = Array.from(document.querySelectorAll(".cart-item")).map((item) => {
        const productName = item.querySelector(".product-name").textContent;
        const quantity = item.querySelector(".quantity").textContent.replace("Quantity: ", "");
        const price = item.querySelector(".price").textContent.replace("₱", "");  // Remove peso sign
        return { productName, quantity, price };
      });
    
      // Retrieve total price
      const totalPrice = document.querySelector(".total-price").textContent.replace("₱", ""); // Remove peso sign
    
      // Retrieve order code
      const orderCode = document.querySelector(".popup h3").textContent;
    
      // Generate PDF Content
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
    
      // Add Background Color
      doc.setFillColor(228, 211, 255); 
      doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F'); 
    
      doc.setFont("times", "normal"); 
      doc.setFontSize(16); // Set default font size
      
    
      // Add Title
      doc.setFontSize(30);
      doc.setTextColor("#0e0124");
      doc.text("= Reservation Details =", 105, 25, { align: "center" });
    
      // Add Personal Information
      doc.setFontSize(12);
      doc.setTextColor("#000");
      doc.text("Full Name:", 20, 40);
      doc.text(name, 60, 40);
      doc.text("Email:", 20, 50);
      doc.text(email, 60, 50);
      doc.text("Phone:", 20, 60);
      doc.text(phone, 60, 60);
      doc.text("Pickup Date:", 20, 70);
      doc.text(date, 60, 70);
      doc.text("Pickup Time:", 20, 80);
      doc.text(time, 60, 80);
    
      doc.setLineWidth(0.5);
      
   

      // Add Order Code Section
      doc.setFontSize(14);
      doc.setTextColor("#333");
      doc.text("Order Code", 105, 100, { align: "center" });
    
      doc.setFontSize(12);
      doc.setTextColor("#000");
      doc.text(orderCode, 105, 110, { align: "center" });

      doc.setLineWidth(0.5);
      doc.line(20, 88, 190, 88); // Horizontal line
      doc.line(20, 120, 190, 120); // Horizontal line

      // Add Cart Details
      doc.setFontSize(14);
      doc.text("Cart Details", 20, 130);
    
      // Table Headers
      let yPosition = 140;
      doc.setFontSize(12);
      doc.setTextColor("#000");
      doc.text("No.", 20, yPosition);
      doc.text("Product", 40, yPosition);
      doc.text("Quantity", 120, yPosition);
      doc.text("Price", 160, yPosition);
    
      // Add Items in Table
      yPosition += 10;
      cartItems.forEach((item, index) => {
        doc.text(`${index + 1}`, 20, yPosition);
        doc.text(item.productName, 40, yPosition);
        doc.text(item.quantity, 120, yPosition);
        doc.text(item.price, 160, yPosition);  
        yPosition += 10;
      });


      // Add Total Price
      yPosition += 10;
      doc.setFontSize(14);
      doc.setTextColor("#333");
      doc.text("Total Price:", 20, yPosition);
      doc.setFontSize(12);
      doc.text(totalPrice, 60, yPosition);  

      //doc.setLineDash([5, 5], 0);
      doc.line(20, yPosition + 10, 190, yPosition + 10); // Horizontal line

      // Add Footer
      doc.setFontSize(10);
      doc.setTextColor("#34008d");
      doc.text("Thank you for your reservation!", 105, 280, { align: "center" });
    
      // Save the PDF
      doc.save(`reservation-${orderCode}.pdf`);
    });
    
    
    
    
  }

  // Validate Form
  function validateForm() {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    if (!name || !email || !phone || !date || !time) {
      alert("Please fill out all required fields.");
      return false;
    }

    const today = new Date();
    const selectedDate = new Date(date);
    const diffDays = Math.ceil((selectedDate - today) / (1000 * 60 * 60 * 24));

    if (diffDays < 0 || diffDays > 7) {
      alert("Pickup date must be within 7 days from today.");
      return false;
    }

    return true;
  }

  // Handle Form Submission
  document.querySelector(".btn").addEventListener("click", () => {
    if (validateForm()) {
      const orderCode = generateOrderCode();
      showPopup(orderCode);
    }
  });

  populateCart();
});


console.log(window.jspdf ? "jsPDF loaded" : "jsPDF not loaded");
