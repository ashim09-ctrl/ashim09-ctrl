// chat.js - Handles chat-related functionalities

document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
  
    // Handle sending text messages
    sendBtn.addEventListener('click', () => {
      const messageText = chatInput.value;
      if (messageText.trim()) {
        // Send message to the server (you need to implement this part)
        // Example: sendMessage(messageText);
  
        // Append message to chatBox
        const message = document.createElement('div');
        message.classList.add('message');
        message.textContent = messageText;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
        chatInput.value = '';
      }
    });
  
    // Add functionality to receive messages from the server
    // Example: socket.on('message', (msg) => { /* Append message to chatBox */ });
  });
  // call.js

document.addEventListener('DOMContentLoaded', () => {
    const audioCallBtn = document.getElementById('audio-call-btn');
    const videoCallBtn = document.getElementById('video-call-btn');
    const endCallBtn = document.getElementById('end-call-btn');
    const endAudioCallBtn = document.getElementById('end-audio-call-btn');
    const videoCallUI = document.getElementById('video-call-ui');
    const audioCallUI = document.getElementById('audio-call-ui');
    const localVideo = document.getElementById('local-video');
    const remoteVideo = document.getElementById('remote-video');
    let localStream;
    let peerConnection;
  
    // Setup WebRTC configuration
    const iceServers = {
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    };
  
    const handleSuccess = (stream) => {
      localVideo.srcObject = stream;
      localStream = stream;
    };
  
    const handleError = (error) => {
      console.error('Error accessing media devices.', error);
    };
  
    const startVideoCall = () => {
      videoCallUI.classList.remove('hidden');
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(handleSuccess)
        .catch(handleError);
      // Add additional WebRTC setup for peer connection here
    };
  
    const startAudioCall = () => {
      audioCallUI.classList.remove('hidden');
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(handleSuccess)
        .catch(handleError);
      // Add additional WebRTC setup for peer connection here
    };
  
    const endCall = () => {
      if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
      }
      localStream.getTracks().forEach(track => track.stop());
      videoCallUI.classList.add('hidden');
      audioCallUI.classList.add('hidden');
    };
  
    audioCallBtn.addEventListener('click', startAudioCall);
    videoCallBtn.addEventListener('click', startVideoCall);
    endCallBtn.addEventListener('click', endCall);
    endAudioCallBtn.addEventListener('click', endCall);
  });
  