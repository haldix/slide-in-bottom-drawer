document.addEventListener('DOMContentLoaded', () => {
  const drawerCont = document.getElementById('bottom-drawer');
  const drawerCloseBtn = document.getElementById('btn-drawer-close');
  const drawerToggleButton = document.getElementById('btn-drawer-toggle');

  function handleKeydown(e) {
    if (e.keyCode === 27) {
      drawerCont.classList.remove('active');
      drawerToggleButton.focus();
    }
  }

  function toggleDrawer() {
    if (drawerCont.classList.contains('active')) {
      drawerCont.classList.remove('active');
      drawerCont.setAttribute('aria-hidden', 'true');
      drawerToggleButton.setAttribute('aria-label', 'drawer collapsed');
      drawerToggleButton.focus();
    } else {
      drawerCont.setAttribute('aria-hidden', 'false');
      drawerToggleButton.setAttribute('aria-label', 'drawer expanded');
      // Time value must be greater than animation value in CSS
      setTimeout(() => drawerCloseBtn.focus(), 301);
      drawerCont.classList.add('active');
    }
  }

  function moveFocusToTop(e) {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      firstFocusableElement.focus();
    }
  }

  function moveFocusToBottom(e) {
    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      lastFocusableElement.focus();
    }
  }

  const focusableInDrawer = [
    ...drawerCont.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]'
    ),
  ];

  const firstFocusableElement = focusableInDrawer[0];
  const lastFocusableElement = focusableInDrawer[focusableInDrawer.length - 1];

  firstFocusableElement.addEventListener('keydown', moveFocusToBottom);
  lastFocusableElement.addEventListener('keydown', moveFocusToTop);
  drawerToggleButton.addEventListener('click', toggleDrawer);
  drawerCloseBtn.addEventListener('click', toggleDrawer);
  document.addEventListener('keydown', handleKeydown);
});
