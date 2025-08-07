const showToastBtn = document.querySelector('.show-toast');
const horizontalPosition = document.querySelector('#horizontal-position');
const verticalPosition = document.querySelector('#vertical-position');
const toastType = document.querySelector('#toast-type');
const toastMessage = document.querySelector('#toast-message');
const toastsContainer = document.querySelector('.toasts-container');
const durationInput = document.querySelector('#duration');

showToastBtn.addEventListener('click', () => {
  // Reset position classes
  toastsContainer.classList.remove('top', 'bottom', 'left', 'right');
  toastsContainer.classList.add(horizontalPosition.value);
  toastsContainer.classList.add(verticalPosition.value);

  // Create toast
  const newToast = document.createElement('div');
  newToast.classList.add('toast', toastType.value);
  newToast.setAttribute('role', 'alert');
  newToast.setAttribute('aria-live', 'assertive');
  newToast.textContent = toastMessage.value.trim();

  // Create close button
  const closeIcon = document.createElement('span');
  closeIcon.textContent = ' ✕';
  closeIcon.style.cursor = 'pointer';
  newToast.append(closeIcon);

  // Add toast to DOM
  toastsContainer.append(newToast);

  // Remove function with animation
  function removeToast() {
    if (toastsContainer.classList.contains('right')) {
      newToast.classList.add('go-right');
    } else {
      newToast.classList.add('go-left');
    }
    setTimeout(() => newToast.remove(), 300);
  }

  // Manual removal
  closeIcon.addEventListener('click', removeToast);

  // Auto removal
  let duration = parseInt(durationInput.value);
  if (isNaN(duration) || duration <= 0) duration = 3;

  setTimeout(removeToast, duration * 1000);
});
