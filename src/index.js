import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import personFacade from "./personFacade"




function getPersoner(){
  personFacade.getPersons()
  .then(data => {
    const persons = data.all;
    const personRows = persons.map(person => `
    <tr>
    <td>${person.id}</td>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>${person.phone}</td>
    <td>${person.street}</td>
    <td>${person.zip}</td>
    <td>${person.city}</td>
    </tr>
      `
      )
      const rowsAsString = personRows.join("");
      document.getElementById("tbody").innerHTML = rowsAsString
  })
  }
  getPersoner()
  
  //tilføj person
  savebtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    let brugerAge = document.getElementById("firstName").value
    let brugerName = document.getElementById("lastName").value
    let brugerGender = document.getElementById("phone").value
    
    
    const newBruger = {
      firstName: brugerAge,
      lastName: brugerName,
      phone: brugerGender,
    }
  
    personFacade.addPerson(newBruger).catch(err => {
      if (err.status){
        err.fullError.then(e=>console.log(e.msg))
      }
      else{console.log("Network error");}
      }
    )
    
  
    
  })
  //reload
  reload.addEventListener("click", (evt) => {
    evt.preventDefault()
    getPersoner()
  })
  

