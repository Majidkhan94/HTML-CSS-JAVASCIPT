document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Form submit roko

    // Input values lo
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;

    // Data prepare karo
    const content =
      `Full Name: ${name}\n` +
      `Email: ${email}\n` +
      `Password: ${password}\n` +
      `Confirm Password: ${confirmPassword}\n` +
      `Phone: ${phone}`;

    // Blob aur link create karo
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "registration-data.txt";
    a.click();

    URL.revokeObjectURL(url); // Clean up
  });