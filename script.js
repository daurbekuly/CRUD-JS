function onFormSubmit(){
    var formData = readFormData()
    insertNewRecord(formData)
    resetForm()
}

function readFormData(){
    var formData = {}
    formData['fullName'] = document.getElementById('fullName').value
    formData['image'] = document.getElementById('image').files[0]
    formData['date'] = document.getElementById('date').value
    formData['hasOrder'] = document.getElementById('hasOrder').value
    return formData
}

function insertNewRecord(data){
    var table = document.getElementById('orderList').getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.fullName
    cell2 = newRow.insertCell(1)
    
    let reader = new FileReader()
    reader.readAsDataURL(data.image)
    console.log(reader.result)
    // cell2.innerHTML = `<img src="${image_url}"/>`
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.date
    cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.hasOrder
    cell5 = newRow.insertCell(4)
    cell5.innerHTML = `<a onclick='onEdit(this)'>Edit</a>
                       <a>Delete</a>`
}

function resetForm(){
    document.getElementById('fullName').value = ''
    document.getElementById('image').value = ''
    document.getElementById('date').value = ''
    document.getElementById('hasOrder').value = ''  

}

function onEdit(td){
    selectedRow = td.parentElement.parentElement
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML
    document.getElementById('image').value = selectedRow.cells[1].innerHTML
    document.getElementById('date').value = selectedRow.cells[2].innerHTML
    document.getElementById('hasOrder').value = selectedRow.cells[3].innerHTML
}