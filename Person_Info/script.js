function validateForm() {
    const phone = document.getElementById("phone").value;

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit phone number");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
