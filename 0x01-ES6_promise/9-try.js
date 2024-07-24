export default function guardrail(mathFuntion) {
  const queue = [];
  const value = mathFuntion();
  try {
    queue.push(value);
  } catch (error) {
    queue.push(error);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
