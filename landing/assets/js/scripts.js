// Mostrar modal de inicio de sesión
function mostrarLogin() {
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
}

// Alias para compatibilidad con el HTML
function showLoginModal() {
    mostrarLogin();
}

// Manejo de login (acepta cualquier dato)
function handleLogin(usuario, clave) {
    console.log('Login exitoso para:', usuario);

    // Guardar sesión
    sessionStorage.setItem('authenticated', 'true');
    sessionStorage.setItem('usuario', usuario);
    sessionStorage.setItem('loginTime', new Date().toISOString());

    // Redirigir a admin
    window.location.href = '/Dashboard/modules/mains/admin.html';
}

// Evento al cargar DOM
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const usuario = document.getElementById('username').value.trim();
            const clave = document.getElementById('password').value;

            // Como es solo diseño, acepta cualquier dato (si está vacío pone valores por defecto)
            handleLogin(usuario || "Invitado", clave || "1234");
        });
    }
});
