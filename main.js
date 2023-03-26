const form = document.querySelector('form');
const videoContainer = document.querySelector('#video-container');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const m3u8Link = document.querySelector('#m3u8-link').value;
  
  const video = document.createElement('video');
  video.controls = true;

  const source = document.createElement('source');
  source.src = m3u8Link;
  source.type = 'application/x-mpegURL';

  video.appendChild(source);
  videoContainer.appendChild(video);
});
