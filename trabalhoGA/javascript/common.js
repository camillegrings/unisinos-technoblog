function redirectToProfilePage() {
    const hasFilledForm = localStorage.getItem('hasFilledForm')

    if(!hasFilledForm) {
        window.location = '../form/index.html'
    }
}