// Loader ko show karne ka function
function showLoader() {
    document.getElementById('loader').style.display = 'block'; // Apne loader ka ID ya class lagayen
  }
  
  // Loader ko hide karne ka function
  function hideLoader() {
    document.getElementById('loader').style.display = 'none';
  }
  async function someAsyncOperation() {
    showLoader(); // Operation start hone par loader ko show karein
    try {
      // Aapka async code, jaise data fetch ya API call
      await fetch('your-api-endpoint'); // Example API call
    } catch (error) {
      console.error('Error:', error);
    } finally {
      hideLoader(); // Operation complete hone par loader ko hide karein
    }
  }
  
  // Example: Page load hone par operation start karen
  document.addEventListener('DOMContentLoaded', someAsyncOperation);
    
