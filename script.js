document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.element');
  
    elements.forEach(function(element) {
      const id = element.getAttribute('id');
      const valueElement = element.querySelector('.value');
      const incrementBtn = element.querySelector('.increment');
      const decrementBtn = element.querySelector('.decrement');
      const resetBtn = element.querySelector('.reset');
  
      
      let count = localStorage.getItem(id) || 0;
      valueElement.textContent = count;
  
      incrementBtn.addEventListener('click', function() {
        count++;
        valueElement.textContent = count;
        localStorage.setItem(id, count);
      });
  
      decrementBtn.addEventListener('click', function() {
        if (count > 0) {
          count--;
          valueElement.textContent = count;
          localStorage.setItem(id, count);
        }
      });
  
      resetBtn.addEventListener('click', function() {
        count = 0;
        valueElement.textContent = count;
        localStorage.setItem(id, count);
      });
    });
  });
  