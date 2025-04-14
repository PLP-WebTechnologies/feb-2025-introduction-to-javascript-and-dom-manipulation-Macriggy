function changeText() {
    const content = document.getElementById('content');
    content.textContent = 'The text has been changed dynamically!';
  }
  
  function toggleStyle() {
    const content = document.getElementById('content');
    content.classList.toggle('highlight');
  }
  
  function addElement() {
    const section = document.getElementById('extra-section');
    if (!document.getElementById('new-paragraph')) {
      const newPara = document.createElement('p');
      newPara.id = 'new-paragraph';
      newPara.textContent = 'This paragraph was added dynamically!';
      section.appendChild(newPara);
    }
  }
  
  function removeElement() {
    const element = document.getElementById('new-paragraph');
    if (element) {
      element.remove();
    }
  }
  