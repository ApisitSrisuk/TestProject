let lastValidInput = ""; 

// Validate Full Name input (English or Thai letters only)
document.getElementById('fullName').addEventListener('input', function(event) {
  const input = event.target.value;
  const regexEnglish = /^[a-zA-Z\s]*$/;  
  const regexThai = /^[ก-ฮ\s]*$/;      

  if (regexEnglish.test(input)) {
    event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
    lastValidInput = event.target.value; 
  } else if (regexThai.test(input)) {
    event.target.value = input.replace(/[^ก-ฮ\s]/g, '');
    lastValidInput = event.target.value; 
  } else {
    event.target.value = lastValidInput;
  }
});

// Format salary to include commas for thousands
function formatSalary(event) {
  let value = salary.value.replace(/[^0-9,]/g, '');
  let parts = value.split(',');
  let number = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
  let formattedValue = number;

  if (parts.length > 1) {
    formattedValue += ',' + parts[1]; 
  }

  salary.value = formattedValue;
}

// Validate email format
document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailError = document.getElementById("email-error");
  
  if (!emailPattern.test(email)) {
    emailError.style.display = "block"; 
    return; 
  } else {
    emailError.style.display = "none"; 
  }

  // Check if password and confirm password match
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const confirmPasswordError = document.getElementById("confirm-password-error");

  if (password !== confirmPassword) {
    confirmPasswordError.style.display = "block"; // Show error message
    return; // Stop form submission
  } else {
    confirmPasswordError.style.display = "none"; 
  }

  // If all checks pass
  alert("ลงทะเบียนสำเร็จ!");
  document.getElementById("signup-form").reset();
});

// Validate Password according to pattern
function validatePassword() {
  var password = document.getElementById('password').value;
  var passwordError = document.getElementById('password-error');
  var passwordInput = document.getElementById('password');
  
  var passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!passwordPattern.test(password)) {
    passwordInput.setCustomValidity('');
    passwordError.style.display = 'block';
  } else {
    passwordInput.setCustomValidity('');
    passwordError.style.display = 'none'; 
  }
}