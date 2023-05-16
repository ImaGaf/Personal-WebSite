   
   const btn = document.getElementById("buton");

document.getElementById('form')
 .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';
 
    const serviceID = 'default_service';
    const templateID = 'template_3f2t1he';
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Send Email';
       alert('Sent!');
       document.getElementById('form').reset();
     }, (err) => {
       btn.value = 'Send Email';
       alert(JSON.stringify(err));
     });
});



