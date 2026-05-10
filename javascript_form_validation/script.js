// ============================================================
// VALIDATOR FUNCTIONS
// Each returns an error string, or "" if the value is valid.
// ============================================================

function validateFullName(name) {
  if (!name.trim()) return 'Full name is required.';
  const words = name.trim().split(/\s+/);
  if (words.length < 2) return 'Please enter at least a first and last name.';
  return '';
}

function validateEmail(email) {
  if (!email.trim()) return 'Email address is required.';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address (e.g. name@domain.com).';
  return '';
}

function validatePassword(password) {
  if (!password) return 'Password is required.';
  if (password.length < 8)      return 'Password must be at least 8 characters long.';
  if (!/[A-Z]/.test(password))  return 'Password must contain at least one uppercase letter.';
  if (!/[0-9]/.test(password))  return 'Password must contain at least one number.';
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password))
                                 return 'Password must contain at least one special character.';
  return '';
}

function validateConfirmPassword(password, confirm) {
  if (!confirm) return 'Please confirm your password.';
  if (password !== confirm) return 'Passwords do not match.';
  return '';
}

function validateAge(age) {
  if (age === '' || age === null) return 'Age is required.';
  const n = parseInt(age, 10);
  if (isNaN(n) || n < 18) return 'You must be 18 or older to register.';
  return '';
}


// ============================================================
// REAL-TIME VALIDATION (BONUS) — runs on input blur
// ============================================================

function setFieldState(inputEl, errorSpan, errorMsg) {
  if (errorMsg) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
    errorSpan.textContent = errorMsg;
  } else {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    errorSpan.textContent = '';
  }
}

document.getElementById('fullName').addEventListener('blur', function () {
  const el = document.getElementById('fullNameError');
  setFieldState(this, el, validateFullName(this.value));
});

document.getElementById('email').addEventListener('blur', function () {
  const el = document.getElementById('emailError');
  setFieldState(this, el, validateEmail(this.value));
});

document.getElementById('password').addEventListener('blur', function () {
  const el = document.getElementById('passwordError');
  setFieldState(this, el, validatePassword(this.value));
});

document.getElementById('confirmPassword').addEventListener('blur', function () {
  const password = document.getElementById('password').value;
  const el = document.getElementById('confirmPasswordError');
  setFieldState(this, el, validateConfirmPassword(password, this.value));
});

document.getElementById('age').addEventListener('blur', function () {
  const el = document.getElementById('ageError');
  setFieldState(this, el, validateAge(this.value));
});


// ============================================================
// SUBMIT HANDLER — alerts all errors, or shows success
// ============================================================

document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName       = document.getElementById('fullName').value;
  const email          = document.getElementById('email').value;
  const password       = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const age            = document.getElementById('age').value;

  // Collect all validation errors
  const errors = [];

  const nameErr    = validateFullName(fullName);
  const emailErr   = validateEmail(email);
  const pwErr      = validatePassword(password);
  const confirmErr = validateConfirmPassword(password, confirmPassword);
  const ageErr     = validateAge(age);

  if (nameErr)    errors.push('Full Name: '        + nameErr);
  if (emailErr)   errors.push('Email Address: '    + emailErr);
  if (pwErr)      errors.push('Password: '         + pwErr);
  if (confirmErr) errors.push('Confirm Password: ' + confirmErr);
  if (ageErr)     errors.push('Age: '              + ageErr);

  // Alert each error and stop if any exist
  if (errors.length > 0) {
    alert('Please fix the following errors:\n\n' + errors.join('\n'));
    return;
  }

  // All inputs are valid
  alert('Registration successful! Welcome, ' + fullName.trim() + '!');

  const successMsg = document.getElementById('successMsg');
  successMsg.textContent = 'Welcome, ' + fullName.trim() + '! Your registration was successful.';
  successMsg.classList.remove('hidden');

  this.reset();

  // Clear all real-time state after reset
  document.querySelectorAll('input').forEach(function (input) {
    input.classList.remove('valid', 'invalid');
  });
  document.querySelectorAll('.error-msg').forEach(function (span) {
    span.textContent = '';
  });
});
