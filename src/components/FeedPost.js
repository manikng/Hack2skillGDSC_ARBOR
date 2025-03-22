// ...existing code...
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('/api/feedPosts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log("Fetched data:", data); // Add this line to log fetched data
            setPosts(data);
        } catch (error) {
            console.error("Error fetching data:", error); // Add this line to log errors
        }
    };
    fetchData();
}, []);
// ...existing code...
