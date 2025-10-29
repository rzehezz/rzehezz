// Asynchronous coding agent

console.log('Asynchronous coding agent started.');

/**
 * Simulates an asynchronous task.
 * @param {string} taskName The name of the task.
 * @param {number} delay The delay in milliseconds.
 * @returns {Promise<string>} A promise that resolves with a success message.
 */
function performAsyncTask(taskName, delay) {
  return new Promise((resolve, reject) => {
    console.log(`Task "${taskName}" started.`);
    setTimeout(() => {
      resolve(`Task "${taskName}" completed after ${delay}ms.`);
    }, delay);
  });
}

/**
 * Main function to demonstrate the agent.
 */
async function main() {
  console.log('Main function started.');
  const result1 = await performAsyncTask('Task 1', 1000);
  console.log(result1);
  const result2 = await performAsyncTask('Task 2', 500);
  console.log(result2);
  console.log('Main function finished.');
}

main();
