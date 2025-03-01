const BASE_URL = "https://api.yourbackend.com"; // Replace with your actual API URL

export const fetchProblems = async () => {
  const response = await fetch(`${BASE_URL}/problems`);
  return response.json();
};

export const fetchProblemDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/problems/${id}`);
  return response.json();
};

export const submitSolution = async (problemId, code) => {
  const response = await fetch(`${BASE_URL}/submissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ problemId, code }),
  });
  return response.json();
};
