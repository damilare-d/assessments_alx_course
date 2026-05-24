// ============================================================
// DATA STRUCTURE
// students — array of objects: { id: number, name: string, grade: number }
// nextId   — auto-incrementing ID counter
// ============================================================

let students = [];
let nextId = 1;


// ============================================================
// VALIDATOR FUNCTIONS
// Each returns an error string, or "" if the value is valid.
// ============================================================

function validateName(name) {
  if (!name.trim()) return 'Student name is required.';
  return '';
}

function validateGrade(grade) {
  if (grade === '' || grade === null) return 'Grade is required.';
  const n = parseFloat(grade);
  if (isNaN(n)) return 'Grade must be a number.';
  if (n < 0 || n > 100) return 'Grade must be between 0 and 100.';
  return '';
}


// ============================================================
// HELPER — set inline validation state on a field
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


// ============================================================
// CALCULATE AVERAGE
// Returns the mean grade, or 0 if no students exist.
// ============================================================

function calcAverage() {
  if (students.length === 0) return 0;
  const total = students.reduce(function (sum, s) { return sum + s.grade; }, 0);
  return total / students.length;
}


// ============================================================
// RENDER — rebuild the student table from the students array
// ============================================================

function renderStudents() {
  const tbody = document.getElementById('studentList');
  const average = calcAverage();

  // Clear existing rows
  tbody.innerHTML = '';

  students.forEach(function (student, index) {
    const row = document.createElement('tr');

    // Bonus: highlight students who scored above the average
    if (students.length > 1 && student.grade > average) {
      row.classList.add('above-avg');
    }

    row.innerHTML =
      '<td>' + (index + 1) + '</td>' +
      '<td>' + escapeHtml(student.name) + '</td>' +
      '<td>' + student.grade.toFixed(1) + '</td>' +
      '<td><button class="btn-delete" data-id="' + student.id + '">Delete</button></td>';

    tbody.appendChild(row);
  });
}


// ============================================================
// UPDATE AVERAGE CARD
// ============================================================

function updateAverage() {
  const card = document.getElementById('averageCard');
  const valueEl = document.getElementById('averageValue');

  if (students.length === 0) {
    card.classList.add('hidden');
    return;
  }

  const avg = calcAverage();
  valueEl.textContent = avg.toFixed(1) + ' / 100';
  card.classList.remove('hidden');
}


// ============================================================
// TOGGLE EMPTY STATE / TABLE VISIBILITY
// ============================================================

function toggleEmptyMsg() {
  const emptyMsg = document.getElementById('emptyMsg');
  const table = document.getElementById('studentTable');

  if (students.length === 0) {
    emptyMsg.classList.remove('hidden');
    table.classList.add('hidden');
  } else {
    emptyMsg.classList.add('hidden');
    table.classList.remove('hidden');
  }
}


// ============================================================
// BONUS — localStorage persistence
// ============================================================

function saveToStorage() {
  localStorage.setItem('gradeTracker', JSON.stringify({ students: students, nextId: nextId }));
}

function loadFromStorage() {
  const raw = localStorage.getItem('gradeTracker');
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    if (data && Array.isArray(data.students)) {
      students = data.students;
      nextId = data.nextId || students.length + 1;
    }
  } catch (e) {
    // Corrupt data — start fresh
    students = [];
    nextId = 1;
  }
}


// ============================================================
// SECURITY HELPER — prevent XSS in student names
// ============================================================

function escapeHtml(text) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}


// ============================================================
// EVENT — Add Student (form submit)
// ============================================================

document.getElementById('addStudentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput  = document.getElementById('studentName');
  const gradeInput = document.getElementById('studentGrade');
  const nameError  = document.getElementById('nameError');
  const gradeError = document.getElementById('gradeError');

  const nameMsg  = validateName(nameInput.value);
  const gradeMsg = validateGrade(gradeInput.value);

  setFieldState(nameInput,  nameError,  nameMsg);
  setFieldState(gradeInput, gradeError, gradeMsg);

  // Stop if either field is invalid
  if (nameMsg || gradeMsg) return;

  // Add new student object to the array
  students.push({
    id:    nextId++,
    name:  nameInput.value.trim(),
    grade: parseFloat(gradeInput.value)
  });

  // Update the DOM
  renderStudents();
  updateAverage();
  toggleEmptyMsg();
  saveToStorage();

  // Reset the form
  this.reset();
  nameInput.classList.remove('valid', 'invalid');
  gradeInput.classList.remove('valid', 'invalid');
  nameError.textContent  = '';
  gradeError.textContent = '';

  // Return focus to the name field for quick entry
  nameInput.focus();
});


// ============================================================
// EVENT — Delete Student (delegated click on tbody)
// ============================================================

document.getElementById('studentList').addEventListener('click', function (e) {
  if (!e.target.classList.contains('btn-delete')) return;

  const id = parseInt(e.target.dataset.id, 10);
  students = students.filter(function (s) { return s.id !== id; });

  renderStudents();
  updateAverage();
  toggleEmptyMsg();
  saveToStorage();
});


// ============================================================
// REAL-TIME VALIDATION (BONUS) — runs on input blur
// ============================================================

document.getElementById('studentName').addEventListener('blur', function () {
  setFieldState(this, document.getElementById('nameError'), validateName(this.value));
});

document.getElementById('studentGrade').addEventListener('blur', function () {
  setFieldState(this, document.getElementById('gradeError'), validateGrade(this.value));
});


// ============================================================
// INITIALISE — load persisted data and render on page load
// ============================================================

loadFromStorage();
renderStudents();
updateAverage();
toggleEmptyMsg();
