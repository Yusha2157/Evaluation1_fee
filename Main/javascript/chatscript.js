function sendMessage() {
    const messageInput = document.getElementById('chatInput');
    const messageText = messageInput.value.trim();

    
    if (messageText !== "") {
        const currentTime = new Date();
        const hours = currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours();
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const ampm = currentTime.getHours() >= 12 ? 'PM' : 'AM';
        const timeString = `${hours}:${minutes} ${ampm}`;

        const messageItem = document.createElement('div');
        messageItem.classList.add('message-item', 'own');

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.innerHTML = `<p>${messageText}</p>`;

        const messageTime = document.createElement('div');
        messageTime.classList.add('message-time');
        messageTime.innerText = timeString;

        
        messageItem.appendChild(messageContent);
        messageItem.appendChild(messageTime);

        
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.appendChild(messageItem);

        
        messageInput.value = "";

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
