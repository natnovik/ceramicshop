const user = fetch("https://jsonplaceholder.typicode.com/users");
user
 .then((response) =>{
     console.log(response);

     const userdata = response.json();

     console.log(userdata);
     
     userdata.then((users) =>{
        const result = document.getElementById('result');
        let context="";
        
        for (var n = 0; n < users.length; n++) { 
            context += `<tr>
                            <td>${users[n].id}</td>
                            <td>${users[n].name}</td>
                            <td>${users[n].username}</td>
                            <td>${users[n].email}</td>
                        </tr>`
          }
          result.innerHTML = context;
     });
 })
 .catch((error) => console.log(error));