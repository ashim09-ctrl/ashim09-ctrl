// Initialize username
window.onload = function() {
    let username = prompt("Enter your username:");
    document.getElementById("username-display").innerText = username;
};

// Handle Send Message Button
document.getElementById("send-btn").addEventListener("click", function() {
    const messageInput = document.getElementById("chat-input");
    const message = messageInput.value.trim();
    if (message) {
        appendMessage("You", message);
        messageInput.value = "";
    }
});

function appendMessage(user, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `<strong>${user}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
}

// Handle Enter key to send
document.getElementById("chat-input").addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        document.getElementById("send-btn").click();
    }
});

// Handle File Upload (Pin Button)
document.getElementById("attachment-btn").addEventListener("click", function() {
    document.getElementById("file-input").click();
});

document.getElementById("file-input").addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        appendMessage("You", `Sent a file: ${file.name}`);
    }
});

// Handle Emoji Picker
document.getElementById("emoji-btn").addEventListener("click", function() {
    const emojiPicker = document.getElementById("emoji-picker");
    emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll(".emoji").forEach(function(emoji) {
    emoji.addEventListener("click", function() {
        const inputField = document.getElementById("chat-input");
        inputField.value += emoji.innerText;
    });
});

// Handle Voice Recording
let isRecording = false;

document.getElementById("voice-record-btn").addEventListener("click", function() {
    if (isRecording) {
        stopRecording();
    } else {
        startRecording();
    }
});

function startRecording() {
    console.log("Recording started");
    isRecording = true;
}

function stopRecording() {
    console.log("Recording stopped");
    isRecording = false;
    appendMessage("You", "Sent a voice note");
}
document.addEventListener('DOMContentLoaded', () => {
    const usernameDisplay = document.getElementById('username-display');
    const emojiPicker = document.getElementById('emoji-picker');
    const emojiBtn = document.getElementById('emoji-btn');
    const fileInput = document.getElementById('file-input');
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    const lightboxClose = document.getElementById('lightbox-close');
    const sendBtn = document.getElementById('send-btn');
  
    // Handle emoji picker
    emojiBtn.addEventListener('click', () => {
      emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'block' : 'none';
    });
  
    document.querySelectorAll('.emoji').forEach(emoji => {
      emoji.addEventListener('click', () => {
        chatInput.value += emoji.textContent;
        emojiPicker.style.display = 'none';
      });
    });
  
    // Handle file input
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        const message = document.createElement('div');
        message.classList.add('message');
        if (file.type.startsWith('image/')) {
          message.innerHTML = `<img src="${url}" class="message-img" />`;
        } else if (file.type.startsWith('video/')) {
          message.innerHTML = `<video src="${url}" class="message-video" controls></video>`;
        } else if (file.type.startsWith('audio/')) {
          message.innerHTML = `<audio src="${url}" class="message-audio" controls></audio>`;
        }
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    });
  
    // Handle lightbox
    chatBox.addEventListener('click', (event) => {
      if (event.target.tagName === 'IMG') {
        lightbox.style.display = 'flex';
        lightboxImg.src = event.target.src;
        lightboxImg.style.display = 'block';
        lightboxVideo.style.display = 'none';
      } else if (event.target.tagName === 'VIDEO') {
        lightbox.style.display = 'flex';
        lightboxVideo.src = event.target.src;
        lightboxVideo.style.display = 'block';
        lightboxImg.style.display = 'none';
      }
    });
  
    lightboxClose.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  
    // Handle send button
    sendBtn.addEventListener('click', () => {
      const messageText = chatInput.value;
      if (messageText.trim()) {
        const message = document.createElement('div');
        message.classList.add('message');
        message.textContent = messageText;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
        chatInput.value = '';
      }
    });
  });
  