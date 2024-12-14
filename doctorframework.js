let users = [];

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const role = document.getElementById('signupRole').value;
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const hospitalId = document.getElementById('signupHospitalId').value;

    // Validate doctor ID format
    if (role === 'doctor' && !/^#\d{3}-\d{3}-\d{5}$/.test(hospitalId)) {
        alert('Invalid Doctor ID format. Please use the format #987-453-26788.');
        return;
    }

    // Store user data
    users.push({ role, username, email, password, hospitalId });
    alert('Signup successful! You can now log in.');

    // Show login form and hide signup form
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hospitalId = document.getElementById('hospitalId').value;

    // Find user
    const user = users.find(u => u.username === username && u.password === password && u.role === role);

    if (user) {
        if (role === 'doctor' && user.hospitalId !== hospitalId) {
            alert('Invalid Doctor ID. Please try again.');
        } else {
            showDashboard(role);
        }
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

function toggleSignupHospitalIdField() {
    const role = document.getElementById('signupRole').value;
    const hospitalIdField = document.getElementById('signupHospitalId');
    if (role === 'doctor') {
        hospitalIdField.style.display = 'block';
    } else {
        hospitalIdField.style.display = 'none';
    }
}

function toggleHospitalIdField() {
    const role = document.getElementById('role').value;
    const hospitalIdField = document.getElementById('hospitalId');
    if (role === 'doctor') {
        hospitalIdField.style.display = 'block';
    } else {
        hospitalIdField.style.display = 'none';
    }
}

function showDashboard(role) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

    if (role === 'doctor') {
        document.getElementById('doctor-dashboard').style.display = 'block';
    } else if (role === 'patient') {
        document.getElementById('patient-dashboard').style.display = 'block';
    }
}

// Initialize the form
toggleSignupHospitalIdField();
toggleHospitalIdField();