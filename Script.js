document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add code here to handle form submission, such as sending data to a server
    // For demonstration purposes, let's just log the form data to the console
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach(function(value, key){
      formDataObject[key] = value;
    });
    console.log(formDataObject);
  });