const deleteHandler = async (event) => {
    event.preventDefault();

    // Collect the post id from the url
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // Send a DELETE request to the API endpoint
    const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to delete post');
    }
}