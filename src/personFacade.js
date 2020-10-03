
  const URL = "http://www.albertsl.com/api/person/"

  function addPerson(person) {
    const options = makeOptions("POST", person)
    return fetch(URL, options)
    .then(handleHttpErrors)
  }
  
  function getPersonById(id) {
    let getURL = URL + "/" + id
    return fetch(getURL)
    .then(res=>res.json())
  }


  
  function getPersons() {
    return fetch(URL)
    .then(handleHttpErrors)
  }

  function editPerson(id, person) {
    const options = makeOptions("PUT", user)
    let putURL = URL + "/" + id
    return fetch(putURL, options)
    .then(handleHttpErrors)
    
  }

  function deletePerson(id) {
    const options = makeOptions("DELETE", "")
    let putURL = URL + "/" + id
    return fetch(putURL, options)
    .then(handleHttpErrors)
    
  }
  
  /* Make sure you understand what we create here, it involves VITAL JavaScript knowledge */
  const personFacade = {
    addPerson,
    getPersonById,
    getPersons,
    editPerson,
    deletePerson
  }

  function makeOptions(method, body) {
    var opts =  {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    if(body){
      opts.body = JSON.stringify(body);
    }
    return opts;
   }
   

   function handleHttpErrors(res){
    if(!res.ok){
      return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
   }
   
  
  
  
  
  export default personFacade;