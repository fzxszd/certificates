const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxTitle = lightbox.querySelector('p');
const closeLightbox = () => { lightbox.hidden = true; document.body.style.overflow = ''; };
document.querySelectorAll('.certificate-card').forEach(card => {
  card.querySelector('.certificate-preview').addEventListener('click', () => {
    lightboxImage.src = card.dataset.image;
    lightboxImage.alt = card.dataset.title;
    lightboxTitle.textContent = card.dataset.title;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });
