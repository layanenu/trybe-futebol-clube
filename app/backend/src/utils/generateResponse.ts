const generateResponse = (status: number, message: unknown) => ({ status, message });
const generateResponseError = (status: number, message: unknown) =>
  generateResponse(status, { message });

export { generateResponse, generateResponseError };
