let users = [
    {
        email:"muhammad2157.be23@chitkara.edu.in",
        password: "Yusha123"
    },
    {
        email:"sahil2137.be23@chitkara.edu.in",
        password:"Sahil123"
    },
    {
        email:"paavni2170.be23@chitkara.edu.in",
        password:"Paavni2170"
    }
];

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check if the credentials match any user in the array
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        window.location.href = '..\Homepage.html';
    } else {
        alert("Invalid email or password.");
    }
}