const handleSubmit = (e) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    confirm("Name: " + name + ", Email: " + email + ", Message: " + message);
    alert("Message sent successfully");
}