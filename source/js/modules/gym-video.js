const playVideo = () => {
  const gymVideo = document.querySelector('.gym__media');
  const posterImage = gymVideo.querySelector('.gym__poster');
  const videoButton = gymVideo.querySelector('.gym__button');

  videoButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
    iframe.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', '');
    posterImage.remove();
    videoButton.remove();
    gymVideo.appendChild(iframe);
  });
};

export {playVideo};
