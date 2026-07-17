const LEETCODE_SESSION = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfYXV0aF91c2VyX2lkIjoiMTQzOTE3NTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJhbGxhdXRoLmFjY291bnQuYXV0aF9iYWNrZW5kcy5BdXRoZW50aWNhdGlvbkJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI0MjQ3NDdmMTI2YmU1NWI2MTRlYzdmMmQ2YmUyY2ZhOGIyOGMzOTc3YmJjNTc2ZmU5YmVmNDIwMWU3NGE3NTIzIiwic2Vzc2lvbl91dWlkIjoiZWRlN2VkYjkiLCJpZCI6MTQzOTE3NTUsImVtYWlsIjoiYWRpdHlhLnVwYWRoeWF5YTExQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiQWRpdHlhLVVwYWRoeWF5YSIsInVzZXJfc2x1ZyI6IkFkaXR5YS1VcGFkaHlheWEiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jb20vdXNlcnMvQWRpdHlhLVVwYWRoeWF5YS9hdmF0YXJfMTc0NDQ0NTI2MS5wbmciLCJyZWZyZXNoZWRfYXQiOjE3ODQzMDgyNjcsImlwIjoiMTUyLjU4LjU5LjY2IiwiaWRlbnRpdHkiOiI0ZmMwN2JhNTk5ZjlkODRhYzJjNWYzZDM2YmU1YWFkZiIsImRldmljZV93aXRoX2lwIjpbIjUyODk5ZDNmYTFlMjNhMzFmMWEzMTNhNzNlNGZhNjVhIiwiMTUyLjU4LjU5LjY2Il19.t6VRCcWIkXAtD5_yf8N3gcpBpJ5B7z4_c_MMUejndbA"
const CSRF_TOKEN = "Ky70MOVsY1xEhx0GUmsDI2CgnpKY8LAM"
const NEW_SESSION_NAME = "Rebound";
const UA = "Mozilla/5.0";

const fetchWithRetry = async (url, options, retries) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (response.ok) {
                console.log('Request succeeded:', response);
                return response;
            } else {
                console.log('Request failed');
            }
        } catch (error) {
            console.log('Fetch error:', error);
        }
    }
    console.log(`All ${retries} attempts failed.`);
};

const url = "https://leetcode.com/session/";
const options = {
    headers: {
        "content-type": "application/json",
        "x-csrftoken": CSRF_TOKEN,
        "User-Agent": UA,
        "x-requested-with": "XMLHttpRequest",
        "cookie": `LEETCODE_SESSION=${LEETCODE_SESSION};`
    },
    body: JSON.stringify({
        func: "create",
        name: NEW_SESSION_NAME
    }),
    method: "PUT"
};
const maxRetries = 50; // Set the maximum number of retries you are welcome to change this value

fetchWithRetry(url, options, maxRetries);
