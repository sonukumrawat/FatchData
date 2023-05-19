let button = document.querySelector('button')
let Name = document.querySelector('#Name')
let email = document.querySelector('#email')
let username = document.querySelector('#username')
let address = document.querySelector('#address')


const fetchdata = async ()=>{
   const response =  await fetch
   ("https://jsonplaceholder.typicode.com/users")
   const data =  await response.json();

   data.forEach((item) => {
      let bit = document.createElement("td")
      let newtff= document.createElement("td")
      let texttd = document.createElement("td")
      let hyy = document.createElement("td")
      bit .className="list-group-item"
      newtff.className="list-group-item"
      texttd.className="list-group-item"
      hyy.className="list-group-item"
      bit.innerText = item.name;
      newtff.innerText=item.email;
      texttd.innerText=item.username;
   hyy.innerText=item.address;
      Name.appendChild(bit);
      email.appendChild(newtff);
      username.appendChild(texttd);
      address.appendChild(hyy);
   
      
   })
}
button.addEventListener("click", fetchdata)
