const body = document.querySelector("body");
let users = [];

fetch("https://api.escuelajs.co/api/v1/users")
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {

            users.push(data[i]);

            body.innerHTML += `
        <div class="card" id="${data[i].id}">
            <img src="${data[i].avatar}" alt="${data[i].name}" class="card-image">
            <div class="card-content">
                <h2 class="card-title">${data[i].name}</h2>
                <p class="card-email">Email: ${data[i].email}</p>
                <p class="card-password">Password: ${data[i].password}</p>
                <p class="card-role">Role: ${data[i].role}</p>
                <p class="card-meta">
                    Created on: <span class="card-timestamp">${new Date(data[i].creationAt).toDateString()}</span>
                </p>
                <p class="card-meta">
                    Updated on: <span class="card-timestamp">${new Date(data[i].updatedAt).toDateString()}</span>
                </p>
                <button class="delete-button">Delete</button>
            </div>
        </div>
      `;
        }
    })

