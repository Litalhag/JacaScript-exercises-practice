function toggleColumn(index) {
  let rows = document.querySelectorAll("#dataTable tr");
  rows.forEach((row) => {
    let cell = row.cells[index];
    if (cell.style.display === "none") {
      cell.style.display = "";
      // cell.style.display === "";
    } else {
      cell.style.display = "none";
    }
  });
}

function resetTable() {
  let rows = document.querySelectorAll("#dataTable tr");
  rows.forEach((row) => {
    Array.from(row.cells).forEach((cell) => {
      cell.style.display = "";
    });
  });
}
