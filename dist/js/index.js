// Get DOM elements
const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');
const userMenuButton = document.getElementById('user-menu-button');
const userMenu = document.querySelector('[aria-labelledby="user-menu-button"]');

// Toggle mobile menu
mobileMenuButton.addEventListener('click', () => {
  const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
  mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
  mobileMenu.classList.toggle('hidden', isExpanded);
});

// Toggle user menu
userMenuButton.addEventListener('click', () => {
  const isExpanded = userMenuButton.getAttribute('aria-expanded') === 'true';
  userMenuButton.setAttribute('aria-expanded', !isExpanded);
  userMenu.classList.toggle('hidden', isExpanded);
});

// Close user menu when clicking outside
document.addEventListener('click', (event) => {
  if (
    !userMenuButton.contains(event.target) &&
    !userMenu.contains(event.target)
  ) {
    userMenuButton.setAttribute('aria-expanded', 'false');
    userMenu.classList.add('hidden');
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  if (
    !mobileMenuButton.contains(event.target) &&
    !mobileMenu.contains(event.target)
  ) {
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.add('hidden');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Remove the 'active' class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add the 'active' class to the clicked link
      this.classList.add('active');
    });
  });
});




