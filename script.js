// Sample transaction data (mock data for demonstration)
const transactions = [
  {
    id: "1",
    merchant: "Apple Store",
    amount: "-€49.99",
    date: "Today",
    category: "Online Purchase",
    icon: "fas fa-shopping-cart",
    color: "#0078d7",
    receipt: {
      items: [
        { name: "Apple Music Subscription (1 month)", price: "€9.99" },
        { name: "App Store Purchase (Game)", price: "€40.00" },
      ],
      subtotal: "€49.99",
      tax: "€0.00",
      total: "€49.99",
    },
  },
  {
    id: "2",
    merchant: "Salary Deposit",
    amount: "+€3,450.00",
    date: "Yesterday",
    category: "Monthly Salary",
    icon: "fas fa-money-check-alt",
    color: "#28a745",
    receipt: {
      items: [
        { name: "Gross Salary", price: "€4,500.00" },
        { name: "Tax Deduction", price: "-€800.00" },
        { name: "Social Security", price: "-€250.00" },
      ],
      subtotal: "€3,450.00",
      tax: "€0.00",
      total: "€3,450.00",
    },
  },
  {
    id: "3",
    merchant: "Coffee Shop",
    amount: "-€4.50",
    date: "27 Oct",
    category: "Daily Expense",
    icon: "fas fa-coffee",
    color: "#e74c3c",
    receipt: {
      items: [
        { name: "Latte", price: "€3.00" },
        { name: "Croissant", price: "€1.50" },
      ],
      subtotal: "€4.50",
      tax: "€0.00",
      total: "€4.50",
    },
  },
  {
    id: "4",
    merchant: "Supermarket",
    amount: "-€75.20",
    date: "26 Oct",
    category: "Groceries",
    icon: "fas fa-shopping-basket",
    color: "#f39c12",
    receipt: {
      items: [
        { name: "Groceries", price: "€70.00" },
        { name: "Plastic Bags", price: "€0.20" },
        { name: "Tax", price: "€5.00" },
      ],
      subtotal: "€70.20",
      tax: "€5.00",
      total: "€75.20",
    },
  },
  {
    id: "5",
    merchant: 'Restaurant "Taste of Asia"',
    amount: "-€35.00",
    date: "25 Oct",
    category: "Dining Out",
    icon: "fas fa-utensils",
    color: "#9b59b6",
    receipt: {
      items: [
        { name: "Pad Thai", price: "€15.00" },
        { name: "Spring Rolls", price: "€8.00" },
        { name: "Soft Drink", price: "€4.00" },
        { name: "Service Charge", price: "€8.00" },
      ],
      subtotal: "€27.00",
      tax: "€0.00",
      total: "€35.00",
    },
  },
  {
    id: "6",
    merchant: "Online Clothing Store",
    amount: "-€120.00",
    date: "24 Oct",
    category: "Shopping",
    icon: "fas fa-tshirt",
    color: "#34495e",
    receipt: {
      items: [
        { name: "T-Shirt", price: "€30.00" },
        { name: "Jeans", price: "€70.00" },
        { name: "Shipping", price: "€20.00" },
      ],
      subtotal: "€100.00",
      tax: "€0.00",
      total: "€120.00",
    },
  },
  {
    id: "7",
    merchant: "Public Transport",
    amount: "-€2.80",
    date: "24 Oct",
    category: "Transportation",
    icon: "fas fa-bus",
    color: "#3498db",
    receipt: {
      items: [{ name: "Bus Fare", price: "€2.80" }],
      subtotal: "€2.80",
      tax: "€0.00",
      total: "€2.80",
    },
  },
  {
    id: "8",
    merchant: "Gym Membership",
    amount: "-€45.00",
    date: "23 Oct",
    category: "Health & Fitness",
    icon: "fas fa-dumbbell",
    color: "#27ae60",
    receipt: {
      items: [{ name: "Monthly Membership Fee", price: "€45.00" }],
      subtotal: "€45.00",
      tax: "€0.00",
      total: "€45.00",
    },
  },
  {
    id: "9",
    merchant: 'Bookstore "The Reading Nook"',
    amount: "-€18.50",
    date: "22 Oct",
    category: "Entertainment",
    icon: "fas fa-book",
    color: "#8e44ad",
    receipt: {
      items: [{ name: 'Novel "The Silent Patient"', price: "€18.50" }],
      subtotal: "€18.50",
      tax: "€0.00",
      total: "€18.50",
    },
  },
  {
    id: "10",
    merchant: "Electricity Bill",
    amount: "-€60.00",
    date: "21 Oct",
    category: "Utilities",
    icon: "fas fa-lightbulb",
    color: "#f1c40f",
    receipt: {
      items: [{ name: "Electricity Consumption (Oct)", price: "€60.00" }],
      subtotal: "€60.00",
      tax: "€0.00",
      total: "€60.00",
    },
  },
];

// Function to generate random date within a range
function getRandomDate(start, end) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, " ");
}

// Function to generate a random amount
function getRandomAmount(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

// Function to generate random receipt items
function generateRandomReceiptItems() {
  const itemOptions = [
    { name: "Coffee", price: 3.5 },
    { name: "Sandwich", price: 6.0 },
    { name: "Book", price: 15.0 },
    { name: "T-Shirt", price: 25.0 },
    { name: "Groceries", price: 50.0 },
    { name: "Movie Ticket", price: 10.0 },
    { name: "Bus Ticket", price: 2.5 },
    { name: "Software License", price: 99.0 },
  ];
  const numItems = Math.floor(Math.random() * 3) + 1; // 1 to 3 items
  const items = [];
  let subtotal = 0;

  for (let i = 0; i < numItems; i++) {
    const item = itemOptions[Math.floor(Math.random() * itemOptions.length)];
    items.push({ name: item.name, price: `€${item.price.toFixed(2)}` });
    subtotal += item.price;
  }

  const taxRate = 0.05; // 5% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return {
    items: items,
    subtotal: `€${subtotal.toFixed(2)}`,
    tax: `€${tax.toFixed(2)}`,
    total: `€${total.toFixed(2)}`,
  };
}

// Generate hundreds of additional transactions
const additionalTransactions = [];
const merchants = [
  "Cafe Latte",
  "Grocery Mart",
  "Fashion Hub",
  "Tech Gadgets",
  "Book Haven",
  "Fitness First",
  "Travel Co.",
  "Home Essentials",
];
const categories = [
  "Daily Expense",
  "Groceries",
  "Shopping",
  "Electronics",
  "Entertainment",
  "Health & Fitness",
  "Travel",
  "Home",
];
const icons = [
  "fas fa-coffee",
  "fas fa-shopping-basket",
  "fas fa-tshirt",
  "fas fa-laptop",
  "fas fa-book",
  "fas fa-dumbbell",
  "fas fa-plane",
  "fas fa-couch",
];
const colors = [
  "#e74c3c",
  "#f39c12",
  "#34495e",
  "#1abc9c",
  "#8e44ad",
  "#27ae60",
  "#3498db",
  "#95a5a6",
];

const startDate = new Date(2023, 0, 1); // Jan 1, 2023
const endDate = new Date(); // Today

for (let i = 11; i <= 250; i++) {
  // Generate 240 additional transactions
  const isExpense = Math.random() < 0.8; // 80% chance of being an expense
  const amount = isExpense
    ? -getRandomAmount(5, 200)
    : getRandomAmount(50, 500);
  const merchant = merchants[Math.floor(Math.random() * merchants.length)];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const icon = icons[Math.floor(Math.random() * icons.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const date = getRandomDate(startDate, endDate);
  const receipt = generateRandomReceiptItems();

  additionalTransactions.push({
    id: `${i}`,
    merchant: merchant,
    amount: `${isExpense ? "" : "+"}${amount}`,
    date: date,
    category: category,
    icon: icon,
    color: color,
    receipt: receipt,
  });
}

transactions.push(...additionalTransactions);

let displayedTransactions = 5; // Number of transactions initially displayed
let myChart; // Variable to hold the Chart.js instance
let budgetChart; // Variable to hold the Budget Chart.js instance
let transactionHistory = []; // To store navigation history for back button

document.addEventListener("DOMContentLoaded", () => {
  loadTransactions();
  renderAccountChart();
  renderBudgetChart(); // Render budget chart on load
  // Initialize transaction history with the home page
  transactionHistory.push("home-page");

  // Add event listener for search input
  const searchInput = document.getElementById("transaction-search");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      const query = event.target.value.toLowerCase();
      const filtered = filterTransactions(query);
      displayedTransactions = 5; // Reset displayed count for filtered results
      loadTransactions(filtered);
    });
  }
});

function navigateTo(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");

  // Update navigation history
  if (transactionHistory[transactionHistory.length - 1] !== pageId) {
    transactionHistory.push(pageId);
  }

  // Update active nav item
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });
  const navItem = document.querySelector(
    `.nav-item[onclick="navigateTo('${pageId}')"]`
  );
  if (navItem) {
    navItem.classList.add("active");
  }
}

function navigateBack() {
  if (transactionHistory.length > 1) {
    transactionHistory.pop(); // Remove current page
    const previousPageId = transactionHistory[transactionHistory.length - 1];
    navigateTo(previousPageId);
  }
}

/**
 * Filters the transactions based on a search query.
 * The search is case-insensitive and checks merchant, amount, date, category,
 * and receipt item names and prices.
 * @param {string} query The search string.
 * @returns {Array} The filtered list of transactions.
 */
function filterTransactions(query) {
  if (!query) {
    return transactions; // Return all transactions if query is empty
  }
  return transactions.filter((transaction) => {
    const searchableText = [
      transaction.merchant,
      transaction.amount,
      transaction.date,
      transaction.category,
    ].map((s) => String(s).toLowerCase()); // Ensure all are strings and lowercase

    // Check receipt items
    if (transaction.receipt && transaction.receipt.items) {
      transaction.receipt.items.forEach((item) => {
        searchableText.push(String(item.name).toLowerCase());
        searchableText.push(String(item.price).toLowerCase());
      });
    }

    return searchableText.some((text) => text.includes(query));
  });
}

/**
 * Loads and displays transactions in the list.
 * @param {Array} [transactionsToRender=transactions] Optional array of transactions to render.
 * If not provided, uses the global `transactions` array.
 */
function loadTransactions(transactionsToRender = transactions) {
  const transactionsList = document.getElementById("transactions-list");
  transactionsList.innerHTML = ""; // Clear existing transactions

  // Sort transactions by date (most recent first) before slicing
  const sortedTransactions = [...transactionsToRender].sort((a, b) => {
    const dateA = new Date(
      a.date.replace(/(\d{2}) (\w{3}) (\d{4})/, "$2 $1, $3")
    );
    const dateB = new Date(
      b.date.replace(/(\d{2}) (\w{3}) (\d{4})/, "$2 $1, $3")
    );
    return dateB - dateA;
  });

  const transactionsToDisplay = sortedTransactions.slice(
    0,
    displayedTransactions
  );

  if (transactionsToDisplay.length === 0) {
    transactionsList.innerHTML =
      '<p style="text-align: center; color: #777; padding: 20px;">No transactions found matching your search.</p>';
  } else {
    transactionsToDisplay.forEach((transaction) => {
      const transactionDiv = document.createElement("div");
      transactionDiv.classList.add("transaction");
      transactionDiv.onclick = () => showTransactionDetail(transaction);

      const iconDiv = document.createElement("div");
      iconDiv.classList.add("transaction-icon");
      iconDiv.style.backgroundColor = transaction.color;
      iconDiv.innerHTML = `<i class="${transaction.icon}" style="color: white;"></i>`;

      const detailsDiv = document.createElement("div");
      detailsDiv.classList.add("transaction-details");
      detailsDiv.innerHTML = `
                <div class="transaction-title">${transaction.merchant}</div>
                <div class="transaction-info">${transaction.category} • ${transaction.date}</div>
            `;

      const amountDiv = document.createElement("div");
      amountDiv.classList.add("transaction-amount");
      if (transaction.amount.startsWith("+")) {
        amountDiv.classList.add("positive");
      }
      amountDiv.textContent = transaction.amount;

      transactionDiv.appendChild(iconDiv);
      transactionDiv.appendChild(detailsDiv);
      transactionDiv.appendChild(amountDiv);

      transactionsList.appendChild(transactionDiv);
    });
  }

  // Hide "Show More" button if all transactions (or filtered transactions) are displayed
  const showMoreBtn = document.getElementById("show-more-btn");
  if (displayedTransactions >= sortedTransactions.length) {
    // Use sortedTransactions.length for comparison
    showMoreBtn.style.display = "none";
  } else {
    showMoreBtn.style.display = "block";
  }
}

function loadMoreTransactions() {
  displayedTransactions += 5; // Load 5 more transactions
  const currentSearchQuery = document
    .getElementById("transaction-search")
    .value.toLowerCase();
  const filtered = filterTransactions(currentSearchQuery);
  loadTransactions(filtered); // Re-render the list with more items
}

function showTransactionDetail(transaction) {
  document.getElementById("transaction-merchant").textContent =
    transaction.merchant;
  document.getElementById("transaction-amount").textContent =
    transaction.amount;
  document.getElementById("transaction-date").textContent = transaction.date;
  document.getElementById("transaction-type").textContent =
    transaction.category;
  document.getElementById("transaction-reference").textContent =
    transaction.category; // Using category as reference for mock data

  const receiptIcon = document.getElementById("receipt-icon");
  receiptIcon.innerHTML = `<i class="${transaction.icon}" style="color: white;"></i>`;
  receiptIcon.style.backgroundColor = transaction.color;

  const receiptItemsList = document.getElementById("receipt-items-list");
  receiptItemsList.innerHTML = "";
  if (transaction.receipt && transaction.receipt.items) {
    transaction.receipt.items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("receipt-item");
      itemDiv.innerHTML = `
                <div class="receipt-item-name">${item.name}</div>
                <div class="receipt-item-price">${item.price}</div>
            `;
      receiptItemsList.appendChild(itemDiv);
    });
    document.getElementById("receipt-subtotal").textContent =
      transaction.receipt.subtotal;
    document.getElementById("receipt-tax").textContent =
      transaction.receipt.tax;
    document.getElementById("receipt-total").textContent =
      transaction.receipt.total;
  } else {
    // Handle cases where no receipt items are available
    receiptItemsList.innerHTML =
      '<div class="receipt-item">No detailed receipt available.</div>';
    document.getElementById("receipt-subtotal").textContent =
      transaction.amount;
    document.getElementById("receipt-tax").textContent = "€0.00";
    document.getElementById("receipt-total").textContent = transaction.amount;
  }

  // Set amount color based on positive/negative
  const receiptAmountElement = document.getElementById("transaction-amount");
  if (transaction.amount.startsWith("+")) {
    receiptAmountElement.style.color = "#28a745"; // Green for positive
  } else {
    receiptAmountElement.style.color = "#dc3545"; // Red for negative
  }

  navigateTo("receipt-page");
}

function renderAccountChart() {
  const ctx = document.getElementById("accountChart").getContext("2d");
  if (myChart) {
    myChart.destroy(); // Destroy existing chart if it exists
  }
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Account Balance",
          data: [10000, 10500, 11000, 12000, 12560, 13000],
          borderColor: "#0078d7",
          backgroundColor: "rgba(0, 120, 215, 0.2)",
          fill: true,
          tension: 0.3,
          pointBackgroundColor: "#0078d7",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#0078d7",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Account Balance Trend",
          font: {
            size: 16,
            weight: "bold",
          },
          color: "#333",
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#555",
          },
        },
        y: {
          beginAtZero: false,
          grid: {
            color: "#eee",
          },
          ticks: {
            callback: function (value) {
              return "€" + value.toLocaleString();
            },
            color: "#555",
          },
        },
      },
    },
  });
}

function renderBudgetChart() {
  const ctx = document.getElementById("budgetChart").getContext("2d");
  if (budgetChart) {
    budgetChart.destroy(); // Destroy existing chart if it exists
  }

  const budgetData = {
    labels: ["Groceries", "Transport", "Housing", "Entertainment"],
    data: [210, 84, 900, 70],
    budgetLimits: [320, 200, 1000, 200],
  };

  budgetChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: budgetData.labels,
      datasets: [
        {
          label: "Spent",
          data: budgetData.data,
          backgroundColor: [
            "rgba(0, 120, 215, 0.8)", // Blue
            "rgba(40, 167, 69, 0.8)", // Green
            "rgba(220, 53, 69, 0.8)", // Red
            "rgba(155, 89, 182, 0.8)", // Purple
          ],
          borderColor: [
            "rgba(0, 120, 215, 1)",
            "rgba(40, 167, 69, 1)",
            "rgba(220, 53, 69, 1)",
            "rgba(155, 89, 182, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "Budget Limit",
          data: budgetData.budgetLimits,
          backgroundColor: "rgba(200, 200, 200, 0.4)", // Lighter grey for limits
          borderColor: "rgba(150, 150, 150, 0.8)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: "#333",
          },
        },
        title: {
          display: true,
          text: "Monthly Budget Overview",
          font: {
            size: 16,
            weight: "bold",
          },
          color: "#333",
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#555",
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            color: "#eee",
          },
          ticks: {
            callback: function (value) {
              return "€" + value;
            },
            color: "#555",
          },
        },
      },
    },
  });
}

function showMessage(message) {
  const modal = document.getElementById("message-modal");
  document.getElementById("modal-message").textContent = message;
  modal.style.display = "flex"; // Use flex to center the modal
}

function hideMessage() {
  const modal = document.getElementById("message-modal");
  modal.style.display = "none";
}

function showPdfLoading() {
  document.getElementById("pdf-loading-modal").style.display = "flex";
}

function hidePdfLoading() {
  document.getElementById("pdf-loading-modal").style.display = "none";
}

/**
 * Hides the budget tips modal.
 */
function hideBudgetTips() {
  const modal = document.getElementById("budget-tips-modal");
  modal.style.display = "none";
}

function exportReceiptAsPdf() {
  showPdfLoading();
  const receiptContainer = document.getElementById(
    "receipt-container-to-export"
  );
  const generalDetails = document.querySelector(".general-transaction-details");

  // Create a temporary div to hold content for PDF, ensuring it's not hidden by overflow
  const printContent = document.createElement("div");
  printContent.style.width = receiptContainer.offsetWidth + "px"; // Match width for layout
  printContent.style.padding = "20px"; // Add some padding for better PDF appearance
  printContent.style.backgroundColor = "#fff"; // Ensure white background for PDF
  printContent.style.fontFamily = "Inter, sans-serif"; // Ensure font consistency

  // Append a clone of the receipt container and general details
  printContent.appendChild(receiptContainer.cloneNode(true));
  printContent.appendChild(generalDetails.cloneNode(true));

  // Append to body temporarily to render for html2canvas
  document.body.appendChild(printContent);

  html2canvas(printContent, {
    scale: 2, // Increase scale for better resolution
    useCORS: true, // Enable CORS if you have external images (though we don't here)
  })
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF("p", "mm", "a4"); // Portrait, millimeters, A4 size

      const imgWidth = 190; // A4 width minus margins (210mm - 10mm*2)
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 10; // Initial position from top

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("ubank_receipt.pdf");
      hidePdfLoading();
      document.body.removeChild(printContent); // Clean up temporary div
      showMessage("Receipt exported as PDF!");
    })
    .catch((error) => {
      hidePdfLoading();
      document.body.removeChild(printContent); // Clean up temporary div
      console.error("Error generating PDF:", error);
      showMessage("Failed to export receipt. Please again.");
    });
}

// Function to get budget tips using Gemini API
async function getBudgetTips(category, spent, limit) {
  const budgetTipsModal = document.getElementById("budget-tips-modal");
  const budgetTipsContent = document.getElementById("budget-tips-content");
  const budgetTipsLoading = document.getElementById("budget-tips-loading");
  const budgetTipsCategory = document.getElementById("budget-tips-category");

  budgetTipsCategory.textContent = category;
  budgetTipsContent.innerHTML = ""; // Clear previous content
  budgetTipsContent.classList.remove("insight-response"); // Remove styling for placeholder
  budgetTipsLoading.style.display = "block"; // Show loading indicator
  budgetTipsModal.style.display = "flex"; // Show modal

  const prompt = `You are a financial advisor. I have spent €${spent} out of my €${limit} budget for ${category}. Provide 3 concise and actionable tips on how I can save money and stay within or reduce my spending for this category.`;

  try {
    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = "AIzaSyD2NHHY_AVnyC4xwfF7REhFVEhNH4M223Q"; // Provided API Key
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `API error: ${response.status} - ${errorData.error.message}`
      );
    }

    const result = await response.json();
    if (
      result.candidates &&
      result.candidates.length > 0 &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0
    ) {
      const text = result.candidates[0].content.parts[0].text;
      budgetTipsContent.innerHTML = `<p>${text.replace(/\n/g, "<br>")}</p>`;
      budgetTipsContent.classList.add("insight-response"); // Add styling back
    } else {
      budgetTipsContent.innerHTML =
        '<p class="placeholder-text">No insights generated. Please try again.</p>';
      budgetTipsContent.classList.add("insight-response");
    }
  } catch (error) {
    console.error("Error fetching budget tips:", error);
    budgetTipsContent.innerHTML = `<p class="placeholder-text">Error generating tips: ${error.message}.</p>`;
    budgetTipsContent.classList.add("insight-response");
  } finally {
    budgetTipsLoading.style.display = "none"; // Hide loading indicator
  }
}

// Function to get financial insights using Gemini API
async function getFinancialInsights() {
  const insightQueryInput = document.getElementById("insight-query");
  const insightResponseDiv = document.getElementById("insight-response");
  const insightLoadingDiv = document.getElementById("insight-loading");

  const userQuery = insightQueryInput.value.trim();

  if (!userQuery) {
    showMessage("Please enter a question to get insights.");
    return;
  }

  insightResponseDiv.innerHTML = ""; // Clear previous response
  insightResponseDiv.classList.remove("insight-response"); // Temporarily remove styling
  insightLoadingDiv.style.display = "block"; // Show loading indicator

  // Construct a detailed context of recent transactions including receipt items for Gemini
  const allTransactionsContext = transactions
    .map((t) => {
      let transactionDetails = `Transaction ID: ${t.id}, Merchant: ${t.merchant}, Amount: ${t.amount}, Date: ${t.date}, Category: ${t.category}`;
      if (t.receipt && t.receipt.items && t.receipt.items.length > 0) {
        const items = t.receipt.items
          .map((item) => `${item.name} (${item.price})`)
          .join("; ");
        transactionDetails += `, Receipt Items: [${items}]`;
        // Add subtotal, tax, and total if available in receipt
        if (t.receipt.subtotal)
          transactionDetails += `, Subtotal: ${t.receipt.subtotal}`;
        if (t.receipt.tax) transactionDetails += `, Tax: ${t.receipt.tax}`;
        if (t.receipt.total)
          transactionDetails += `, Total: ${t.receipt.total}`;
      }
      // Assuming a generic card detail if not explicitly in transaction data
      transactionDetails += `, Card Used: •••• 3568 (Personal)`;
      // Placeholder for discounts if they were available
      transactionDetails += `, Discounts: None`; // Or "Discount: €X.XX" if applicable
      return transactionDetails;
    })
    .join(" ||| "); // Use a very strong separator between full transaction records

  const prompt = `You are an expert bank clerk and financial advisor. You have access to the following transaction, card, and receipt details, including items and their prices, as well as transaction details and discounts (if any).

Here is the transaction data:
${allTransactionsContext}

Based on this data, please answer the user's question. If the information is not explicitly available in the provided data, state that you cannot access real-time or more granular details beyond what is given. Do not make up information.

User's Question: "${userQuery}"

Provide a concise, helpful, and professional answer.`;

  try {
    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = "AIzaSyD2NHHY_AVnyC4xwfF7REhFVEhNH4M223Q"; // Provided API Key
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `API error: ${response.status} - ${errorData.error.message}`
      );
    }

    const result = await response.json();
    if (
      result.candidates &&
      result.candidates.length > 0 &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0
    ) {
      const text = result.candidates[0].content.parts[0].text;
      insightResponseDiv.innerHTML = `<p>${text.replace(/\n/g, "<br>")}</p>`;
      insightResponseDiv.classList.add("insight-response"); // Add styling back
    } else {
      insightResponseDiv.innerHTML =
        '<p class="placeholder-text">No insights generated. Please try again.</p>';
      insightResponseDiv.classList.add("insight-response");
    }
  } catch (error) {
    console.error("Error fetching financial insights:", error);
    insightResponseDiv.innerHTML = `<p class="placeholder-text">Error generating insights: ${error.message}.</p>`;
    insightResponseDiv.classList.add("insight-response");
  } finally {
    insightLoadingDiv.style.display = "none"; // Hide loading indicator
  }
}
