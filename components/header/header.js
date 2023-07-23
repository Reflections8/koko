document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header')
  const headerNav = document.querySelector('.header__inner-nav')
  const headerBurgerIcon = document.querySelector('.header__inner-nav-buttonWrapper-burgerIcon')
  const headerBurgerIconSpan = document.querySelectorAll('.header__inner-nav-buttonWrapper-burgerIcon-span')

  if (window.scrollY >= 75) {
    header.classList.add('header--Scrolled')
    headerNav.classList.add('header__inner-nav--Scrolled')
    headerBurgerIconSpan.forEach(item => {
      item.classList.add('header__inner-nav-buttonWrapper-burgerIcon-span--Scrolled')
    })

  } else if (window.scrollY === 0) {
    header.classList.remove('header--Scrolled')
    headerNav.classList.remove('header__inner-nav--Scrolled')
    headerBurgerIconSpan.forEach(item => {
      item.classList.remove('header__inner-nav-buttonWrapper-burgerIcon-span--Scrolled')
    })
  }
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 75) {
      header.classList.add('header--Scrolled')
      headerNav.classList.add('header__inner-nav--Scrolled')
      headerBurgerIconSpan.forEach(item => {
        item.classList.add('header__inner-nav-buttonWrapper-burgerIcon-span--Scrolled')
      })
    } else if (window.scrollY === 0) {
      header.classList.remove('header--Scrolled')
      headerNav.classList.remove('header__inner-nav--Scrolled')
      headerBurgerIconSpan.forEach(item => {
        item.classList.remove('header__inner-nav-buttonWrapper-burgerIcon-span--Scrolled')
      })
    }
  })

  /* Burger logic */
  const burgerMenu = document.querySelector('.header__burgerMenu')
  headerBurgerIcon.addEventListener('click', () => {
    headerBurgerIcon.classList.toggle('header__inner-nav-buttonWrapper-burgerIconActive')
    burgerMenu.classList.toggle('header__burgerMenu--Hidden')
  })

  /* Close burger if any of burger nav items clicked */
  const burgerNavLinks = document.querySelectorAll('.header__burgerMenu-inner-nav-item')
  burgerNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      headerBurgerIcon.classList.remove('header__inner-nav-buttonWrapper-burgerIconActive')
      burgerMenu.classList.add('header__burgerMenu--Hidden')
    })
  })

  /* Nav links select logic */
  const navLinks = document.querySelectorAll('.header__inner-nav-item')

  const removeNavActiveClass = () => {
    navLinks.forEach(item => {
        item.classList.remove('header__inner-nav-item--Active')
      }
    )
  }

  navLinks.forEach(item => {
      item.addEventListener('click', e => {
        removeNavActiveClass()
        e.target.classList.add('header__inner-nav-item--Active')
      })
    }
  )

  /* Sound logic */
  const video = document.querySelector('.intro__videoWrapper-video')
  const soundWrapper = document.querySelector('.header__inner-soundWrapper')

  const soundIcon = document.querySelector('.header__inner-soundWrapper-soundIcon')
  const noSoundIcon = document.querySelector('.header__inner-soundWrapper-noSoundIcon')

  soundWrapper.addEventListener('click', () => {
    video.muted = !video.muted;
    if (video.muted) {
      soundIcon.classList.add('hidden')
      noSoundIcon.classList.remove('hidden')
    } else {
      soundIcon.classList.remove('hidden')
      noSoundIcon.classList.add('hidden')
    }
  })
})