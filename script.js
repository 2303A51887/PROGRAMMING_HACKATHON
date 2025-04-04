function toggleRegister() {
    const form = document.getElementById("registerForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
  }
  
  // Sample form submission handler
  document.getElementById("appraisalForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted. Data should be sent to the server here.");
  });
  
  // Admin PDF Download Example
  document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#appraisalTable tbody");
  
    if (tableBody) {
      const sampleData = [
        { name: "Dr. A Kumar", code: "EMP001", date: "2025-04-01" },
        { name: "Prof. B Sharma", code: "EMP002", date: "2025-04-03" }
      ];
  
      sampleData.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${entry.name}</td>
          <td>${entry.code}</td>
          <td>${entry.date}</td>
          <td><button onclick="downloadPDF('${entry.name}', '${entry.code}', '${entry.date}')">Download PDF</button></td>
        `;
        tableBody.appendChild(row);
      });
    }
  });
  
  function downloadPDF(name, code, date) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Employee Code: ${code}`, 10, 20);
    doc.text(`Date Submitted: ${date}`, 10, 30);
    doc.save(`${code}_Appraisal.pdf`);
  }
  