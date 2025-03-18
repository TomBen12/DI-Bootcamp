alert("hello client");

fetch("http://localhost:3001/api/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    render(data)
  })
  .catch((e) => {
    console.log(e);
  });

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div>
         <h2>${item.name}</h2>
         <p>${item.email}</p>
        </div>`;
  });
  document.getElementById('root').innerHTML = html.join('')
};
