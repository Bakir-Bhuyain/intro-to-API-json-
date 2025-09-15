function postContainer() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => postContainer2(data));
}

function postContainer2(posts) {
  const postDiv = document.getElementById("post-container");
  for (const post of posts) {
    const divCreate = document.createElement("div");
    console.log(post);
    divCreate.innerHTML = `
                        <h4> user:- ${post.userId} </h4>
                        <h5> post : ${post.id} </h5>
                       <p>body :- ${post.body}</p>
                        `;
    postDiv.appendChild(divCreate);
  }
}
postContainer();
