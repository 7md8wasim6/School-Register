var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);

  resetForm();
}

function readFormData() {
  var formData = {};
  formData["fullname"] = document.getElementById("fullname").value;
  formData["Studentid"] = document.getElementById("Studentid").value;
  formData["course"] = document.getElementById("course").value;
  formData["YOR"] = document.getElementById("YOR").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("studentlist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.Studentid;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.course;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.YOR;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)">edit</a>
   <a onClick="onDelete(this)">delete</a>`;
}
function resetForm() {
  document.getElementById("fullname").value = "";
  document.getElementById("Studentid").value = "";
  document.getElementById("course").value = "";
  document.getElementById("YOR").value = "";
}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
  document.getElementById("Studentid").value = selectedRow.cells[1].innerHTML;
  document.getElementById("course").value = selectedRow.cells[2].innerHTML;
  document.getElementById("YOR").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullname;
  selectedRow.cells[1].innerHTML = formData.Studentid;
  selectedRow.cells[2].innerHTML = formData.course;
  selectedRow.cells[3].innerHTML = formData.YOR;
}
function onDelete(td) {
  if (confirm("are you sure to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("studentlist").deleteRow(row.rowIndex);
    resetForm();
  }
}
