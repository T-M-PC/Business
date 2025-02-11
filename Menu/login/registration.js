const registrationForm = {
    init() {
        this.form = document.getElementById('registrationForm');
        this.bindEvents();
    },

    bindEvents() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    },

    handleSubmit(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const verifyPassword = document.getElementById('verifyPassword').value;

        if (this.validateForm(username, email, phone, password, verifyPassword)) {
            this.submitRegistration({
                username,
                email,
                phone,
                password
            });
        }
    },

    validateForm(username, email, phone, password, verifyPassword) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (password !== verifyPassword) {
            alert('Passwords do not match');
            return false;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number');
            return false;
        }

        if (username.length < 3) {
            alert('Username must be at least 3 characters long');
            return false;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return false;
        }

        return true;
    },

    async submitRegistration(userData) {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert('Registration successful!');
                window.location.href = '/login';
            } else {
                const error = await response.json();
                alert(`Registration failed: ${error.message}`);
            }
        } catch (error) {
            alert('Registration failed. Please try again later.');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    registrationForm.init();
});