document.getElementById('signInButton').addEventListener('click', function () {
    showModal('signInModal');
});

// Sign Up button
document.getElementById('signUpButton').addEventListener('click', function () {
    showModal('signUpModal');
});

// All Posts button
document.getElementById('allPostsButton').addEventListener('click', function () {
    // Redirect to the bloglist.html page
    window.location.href = 'bloglist.html';
});

// Create Post button
document.getElementById('createPostButton').addEventListener('click', function () {
    showModal('createPostModal');
});