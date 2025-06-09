const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openmodal = () => {
  // Show elements
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // Trigger fade in
  setTimeout(() => {
    modal.classList.add('opacity-100', 'scale-100');
    modal.classList.remove('opacity-0', 'scale-95');

    overlay.classList.add('opacity-100');
    overlay.classList.remove('opacity-0');
  }, 10); // slight delay ensures transition works
};

const closemodal = () => {
  // Trigger fade out
  modal.classList.remove('opacity-100', 'scale-100');
  modal.classList.add('opacity-0', 'scale-95');

  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0');

  // Wait for animation to end before hiding
  setTimeout(() => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }, 300); // match duration-300
};
