const loginForm = {
    init() {
        this.form = document.getElementById('loginForm');
        this.bindEvents();
    },

    bindEvents() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    },

    handleSubmit(event) {
        event.preventDefault();
        
        const identifier = document.getElementById('identifier').value;
        const password = document.getElementById('password').value;

        if (this.validateForm(identifier, password)) {
            this.submitLogin({
                identifier,
                password
            });
        }
    },

    validateForm(identifier, password) {
        if (!identifier || identifier.trim() === '') {
            alert('Please enter your username, email, or phone number');
            return false;
        }

        if (!password || password.length < 6) {
            alert('Please enter your password');
            return false;
        }

        return true;
    },

    async submitLogin(loginData) {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('userToken', data.token);
                window.location.href = '/dashboard';
            } else {
                const error = await response.json();
                alert(`Login failed: ${error.message}`);
            }
        } catch (error) {
            alert('Login failed. Please try again later.');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loginForm.init();
});
