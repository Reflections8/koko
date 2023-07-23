document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.intro__videoWrapper-video')
  const videoWrapper = document.querySelector('.intro__videoWrapper')
  const videoContainer = document.querySelector('.intro__videoWrapper-Container')
  const videoSideImg = document.querySelector('.intro__videoWrapper-sideImgWrapper')

  const currentWidth = video.clientWidth
  video.setAttribute('style', `height: ${String((currentWidth / 2.58).toFixed())}px`)
  videoWrapper.setAttribute('style', `height: ${String((currentWidth / 2.58).toFixed())}px`)
  videoContainer.setAttribute('style', `height: ${String((currentWidth / 2.58).toFixed())}px`)
  videoSideImg.setAttribute('style', `height: ${String((currentWidth / 2.58).toFixed())}px`)

  window.addEventListener('resize', e => {
    const currentWidth = video.clientWidth
    video.setAttribute('style', `height: ${String((currentWidth / 2.58).toFixed())}px`)
    videoWrapper.setAttribute('style', `height: ${String((currentWidth / 2.58).toFixed())}px`)
    videoContainer.setAttribute('style', `height: ${String((currentWidth / 2.58).toFixed())}px`)
    videoSideImg.setAttribute('style', `height: ${String((currentWidth / 2.58).toFixed())}px`)
  })
})