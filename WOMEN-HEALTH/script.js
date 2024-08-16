/*ADDING MEDIACTIONS AND HISTORY BUTTON FUNCTIONALITY */
document.getElementById('add-medical-history-button').addEventListener('click', function() {
    var formSection = document.getElementById('medical-history-form-section');
    formSection.style.display = formSection.style.display === 'none' || formSection.style.display === '' ? 'block' : 'none';
});

document.getElementById('add-medications-button').addEventListener('click', function() {
    var formSection = document.getElementById('medications-form-section');
    formSection.style.display = formSection.style.display === 'none' || formSection.style.display === '' ? 'block' : 'none';
});


/* CHATBOT BUTTON FUNCTIONALITY*/

document.addEventListener('DOMContentLoded', function(){
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');

    chatbotToggle.addEventListener('click',function(){
        chatbotContainer.classList.toggle('chatbot-open');
        if(chatbotContainer.classList.contains('chatbot-open')){
            chatbotToggle.textContent = 'Chat with us';
        }
    });
});

/*ADD FUNCTIONALITY SO THAT THE CHATBOT CAN START THE WELCOMING CHAT */