
function postContainer() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data))
}

function postContainer2(data) {
  const postDiv = document.getElementById("post-container");
  for (const post of data) {
    const divCreate = document.createElement("div");
    console.log(post);
    divCreate.innerHTML = `
                        <h4> user:-${data.userId} </h4>
                        <h5> post : ${data.user} </h5>
                       `;
    postDiv.appendChild(divCreate);
  }
}
