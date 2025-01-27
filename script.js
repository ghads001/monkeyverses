document.addEventListener('DOMContentLoaded', () => {
  // Add parallax effect to stars
  document.addEventListener('mousemove', (e) => {
    const stars = document.querySelector('.stars');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    stars.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  });

  // Add subtle movement to collage images
  const collageImages = document.querySelectorAll('.collage-img');
  
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    collageImages.forEach((img, index) => {
      const offset = (index + 1) * 10;
      img.style.transform = `
        rotate(${(index * 5) - 5}deg) 
        scale(1.1) 
        translate(${x * offset}px, ${y * offset}px)
      `;
    });
  });

  // Add touch movement for mobile devices
  document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const x = touch.clientX / window.innerWidth;
    const y = touch.clientY / window.innerHeight;
    
    collageImages.forEach((img, index) => {
      const offset = (index + 1) * 5; // Reduced offset for mobile
      img.style.transform = `
        rotate(${(index * 5) - 5}deg) 
        scale(1.1) 
        translate(${x * offset}px, ${y * offset}px)
      `;
    });
  });

  // Update NFT card hover effects
  const nftCards = document.querySelectorAll('.nft-card');
  nftCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      const monkey = card.querySelector('.monkey-avatar');
      if (!monkey.classList.contains('cybermonkey')) {
        monkey.style.transform = 'scale(1.1)';
      }
    });
    
    card.addEventListener('mouseout', () => {
      const monkey = card.querySelector('.monkey-avatar');
      if (!monkey.classList.contains('cybermonkey')) {
        monkey.style.transform = 'scale(1)';
      }
    });
  });

  // Add glow effect to lock icon on hover
  const lockContainer = document.querySelector('.locked-container');
  if (lockContainer) {
    lockContainer.addEventListener('mouseover', () => {
      const lockIcon = document.querySelector('.lock-icon');
      lockIcon.style.filter = 'drop-shadow(0 0 10px #00fff2)';
    });
    
    lockContainer.addEventListener('mouseout', () => {
      const lockIcon = document.querySelector('.lock-icon');
      lockIcon.style.filter = 'none';
    });
  }

  // Add hover effect for Telegram preview
  const telegramPreview = document.querySelector('.telegram-preview');
  if (telegramPreview) {
    telegramPreview.addEventListener('mouseover', () => {
      telegramPreview.style.transform = 'scale(1.05)';
    });
    
    telegramPreview.addEventListener('mouseout', () => {
      telegramPreview.style.transform = 'scale(1)';
    });
  }

  // Add pulsing effect to Telegram button
  const telegramButton = document.querySelector('.telegram-button');
  if (telegramButton) {
    setInterval(() => {
      telegramButton.style.transform = 'translateY(-3px)';
      setTimeout(() => {
        telegramButton.style.transform = 'translateY(0)';
      }, 500);
    }, 3000);
  }
});