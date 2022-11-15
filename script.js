function deleteRow(x) {
  let temp1 = x.parentNode.parentNode;
  let i = temp1.rowIndex;
  let text =
    document.getElementsByTagName("tr")[i].firstElementChild.textContent;
  let msg = confirm(`Do you want to delete ${text}`);
  msg.valueOf();
  if (msg) {
    document.getElementById("myTable").deleteRow(i);
    if (msg) {
      alert(`${text}'s row deleted`);
    }
  }
}

function searchFunction() {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("myTable");
  let tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
        console.log(td.textContent)
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
