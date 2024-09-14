// emoji.js - Handles emoji picker functionality

document.addEventListener('DOMContentLoaded', () => {
    const emojiPicker = document.getElementById('emoji-picker');
    const emojiBtn = document.getElementById('emoji-btn');
    const chatInput = document.getElementById('chat-input');
  
    // Toggle emoji picker visibility
    emojiBtn.addEventListener('click', () => {
      emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'block' : 'none';
    });
  
    // Insert emoji into chat input
    document.querySelectorAll('.emoji').forEach(emoji => {
      emoji.addEventListener('click', () => {
        chatInput.value += emoji.textContent;
        emojiPicker.style.display = 'none';
      });
    });
  });
  