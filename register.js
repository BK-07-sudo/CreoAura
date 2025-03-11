// Restrict mobile number input to digits only and limit to 10 digits
document.getElementById('mobile').addEventListener('input', function (event) {
  // Remove non-digit characters
  this.value = this.value.replace(/\D/g, '');

  // Limit to 10 digits
  if (this.value.length > 10) {
    this.value = this.value.slice(0, 10); // Keep only the first 10 digits
  }
});

// Form submission validation
document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const gender = document.getElementById('gender').value;
  const mobile = document.getElementById('mobile').value.trim();
  const countryCode = document.getElementById('country-code').value;

  // Name validation: Only letters and spaces allowed
  if (!/^[A-Za-z\s]+$/.test(name)) {
    alert('Name should contain only letters and spaces. Numbers and special characters are not allowed.');
    return;
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Gender validation
  if (!gender) {
    alert('Please select your gender.');
    return;
  }

  // Mobile number validation: Exactly 10 digits allowed
  if (mobile.length !== 10) {
    alert('Mobile number should be exactly 10 digits. Letters and special characters are not allowed.');
    return;
  }

  // If all validations pass
  alert('Registration successful!');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Gender:', gender);
  console.log('Mobile:', countryCode + mobile); // Log mobile with country code

  // Optionally, reset the form
  document.getElementById('registration-form').reset();
});