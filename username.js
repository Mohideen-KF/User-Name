kf.app.page.getComponent('CustomComponents_hWWqd7k-x6').onMount(function() {
    createGlobalUserNameVariable();
});

function createGlobalUserNameVariable() {
    // Get the user name from Kissflow
    const userName = kf.user.Name;

    // Create a global variable using a safer method
    Object.defineProperty(window, 'globalUserName', {
        value: userName,
        writable: false,
        configurable: false
    });

    // Create an element to hold the user name (optional, for demonstration)
    const userNameElement = document.createElement('div');
    userNameElement.id = 'globalUserNameContainer';
    userNameElement.style.display = 'none'; // Hide the element
    userNameElement.textContent = userName;

    // Append the element to the body
    document.body.appendChild(userNameElement);

    console.log('Global user name variable created:', window['globalUserName']);
}
