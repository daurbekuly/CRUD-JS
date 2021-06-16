function onFormSubmit(){
    var formData = readFormData()
    insertNewRecord(formData)
}

function readFormData(){
    var fullName = document.getElementById('fullName').value
    localStorage.setItem('fullName', JSON.stringify(fullName))
    return localStorage
}

function insertNewRecord(data){
    var table = document.getElementById('orderList').getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0)
    console.log(JSON.parse(data.getItem('fullName')))
}



// document.addEventListener("DOMContentLoaded", function() {

//     var ids = {"fullName": [], "2": [], "3": []}
//     console.log(ids.value(fullname))
//     for (var id of ids) {
//       var input = document.getElementById(id);
//       input.value = localStorage.getItem(id);
//       ((id, input) => {
//         input.addEventListener("change", function() {
//           localStorage.setItem(id, input.value);
//         });
//       })(id, input);
//     } 

//   });