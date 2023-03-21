// CRUD -=> Create , Retrive, update, Delete

// function onFormSubmit(){
//     event.preventDefault()
//     getUserData()
    
// }

// // Data Retrieve
// function getUserData(){
//     let formData = {}
//     formData["Name"] = document.getElementById('fname').value
//     formData["Email"] = document.getElementById('femail').value
//     formData["Number"] = document.getElementById('fnumber').value
//     formData["Message"] = document.getElementById('fmessage').value
//     console.log(formData)
// }

let selectedRow = null
function onFormSubmit(){
    event.preventDefault()
     
     let data = getUserData()
    
    if(selectedRow === null){
        createData(data)
    }else{
        updateData(data)
    }
     reset()
}

function getUserData(){
    let formData = {}
    formData["Name"] = document.getElementById('fname').value
    formData["Email"] = document.getElementById('femail').value
    formData["Number"] = document.getElementById('fnumber').value
    formData["Message"] = document.getElementById('fmessage').value
    return formData
}

function createData(userData){
    let table = document.getElementById('store').getElementsByTagName('tbody')[0]
    let row = table.insertRow(table.length)
    let cell1 = row.insertCell(0)
    cell1.innerHTML = userData.Name
    let cell2 = row.insertCell(1)
    cell2.innerHTML = userData.Email
    let cell3 = row.insertCell(2)
    cell3.innerHTML = userData.Number
    let cell4 = row.insertCell(3)
    cell4.innerHTML = userData.Message
    let cell5 = row.insertCell(4)
    cell5.innerHTML = `<button onclick="editData(this)">Edit</button>
                        <button onclick="deleteData(this)">Delete</button>`
}

// Edit Data
function editData(td){
    selectedRow = td.parentElement.parentElement
    document.getElementById('fname').value = selectedRow.cells[0].innerHTML
    document.getElementById('femail').value = selectedRow.cells[1].innerHTML
    document.getElementById('fnumber').value = selectedRow.cells[2].innerHTML
    document.getElementById('fmessage').value = selectedRow.cells[3].innerHTML

}

// update Data
function updateData(updatedData){
    selectedRow.cells[0].innerHTML = updatedData.Name
    selectedRow.cells[1].innerHTML = updatedData.Email
    selectedRow.cells[2].innerHTML = updatedData.Number
    selectedRow.cells[3].innerHTML = updatedData.Message
    selectedRow = null
}

// Delete Data
function deleteData(del){
    if(confirm('Do You want To Delete ?')){
        let row = del.parentElement.parentElement
        document.getElementById('store').deleteRow(row.rowIndex)
    }
}



// Reset Input Field
function reset(){
    document.getElementById('fname').value = ''
    document.getElementById('femail').value = ''
    document.getElementById('fnumber').value = ''
    document.getElementById('fmessage').value = ''
}