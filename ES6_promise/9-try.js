export default function guardrail(mathFunction) {
  const handleFunction = () => {
    try {
      return mathFunction();
    } catch (error) {
      return `Error: ${error.message}`;
    }
  };

  const queue = [handleFunction(), 'Guardrail was processed'];

  return queue;
}
