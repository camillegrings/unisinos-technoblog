function redirectToProfilePage() {
    const hasFilledForm = localStorage.getItem('hasFilledForm')

    if(!hasFilledForm) {
        window.location = '../form/index.html'
    }
}

document.getElementById("greetings").innerText += ` ${localStorage.getItem('nome')}`;