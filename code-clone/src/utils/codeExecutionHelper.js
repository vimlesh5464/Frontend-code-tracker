export const executeCode = async (code, language) => {
  const response = await fetch("https://api.code-execution.com/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, language }),
  });

  return response.json();
};
