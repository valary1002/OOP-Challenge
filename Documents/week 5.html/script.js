// Change text content and CSS styles
document.getElementById("changeBtn").addEventListener("click", function () {
    const heading = document.getElementById("main-heading");
    const desc = document.getElementById("description");
  
    heading.textContent = "You've changed the heading!";
    desc.textContent = "Styles and content have been updated.";
  
    // Change styles via JS
    heading.style.color = "tomato";
    desc.style.fontSize = "1.2rem";
    document.body.style.backgroundColor = "#f0f8ff";
  });
  
  // Add or remove an element
  document.getElementById("toggleElementBtn").addEventListener("click", function () {
    const existing = document.getElementById("dynamic");
  
    if (existing) {
      existing.remove(); // remove the element if it exists
    } else {
      const newElement = document.createElement("div");
      newElement.id = "dynamic";
      newElement.textContent = "I'm a new element added to the DOM!";
      newElement.style.marginTop = "1rem";
      newElement.style.padding = "0.5rem";
      newElement.style.backgroundColor = "#d4edda";
      document.body.appendChild(newElement);
    }
  });
  