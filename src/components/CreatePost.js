// ...existing code...
const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form data:", formData); // Add this line to log form data
    try {
        const response = await fetch('/api/createPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log("Response data:", result); // Add this line to log response data
        // ...existing code...
    } catch (error) {
        console.error("Error submitting form:", error); // Add this line to log errors
        // ...existing code...
    }
};
// ...existing code...
