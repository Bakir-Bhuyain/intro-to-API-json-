function loadUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => users(data));
}

function users(data) {
  const ul = document.getElementById("users-list");
  for (const user of data) {
    console.log(user.name);
    const li = document.createElement('li');
    li.innerText = user.name; 
    ul.appendChild(li);
  }
}







function userContainer(){
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => usersLists(data));
}

function usersLists (data){
      const ul = document.getElementById("listOf-users");
      for ( const users2 of data){
            console.log(users2);
            const li = document.createElement('li');
            li.innerText =users2.name;
            ul.appendChild(li);
      }
}