export const handleError = (error, context) => {
  console.error(`Error in ${context}:`, error);
  alert(`An error occurred: ${error.message}`);
};
