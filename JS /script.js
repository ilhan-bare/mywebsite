/* =========================================================
   Maniza Perfume — script.js
   Part 3: Functionality — nav toggle, product filtering,
   image lightbox, and validated forms (enquiry + contact).
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Mobile nav toggle ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* ---------- 2. Islamic Clothing: category / size / colour filter ---------- */
  var categorySelect = document.getElementById('filter-category');
  var sizeSelect = document.getElementById('filter-size');
  var colourSelect = document.getElementById('filter-colour');
  var productGrid = document.getElementById('product-grid');
  var emptyMessage = document.getElementById('filter-empty');

  if (productGrid && categorySelect && sizeSelect && colourSelect) {
    var cards = Array.prototype.slice.call(productGrid.querySelectorAll('.card'));

    function applyFilters() {
      var cat = categorySelect.value;
      var size = sizeSelect.value;
      var colour = colourSelect.value;
      var visibleCount = 0;

      cards.forEach(function (card) {
        var matchesCat = cat === 'all' || card.dataset.category === cat;
        var matchesSize = size === 'all' || card.dataset.size === size;
        var matchesColour = colour === 'all' || card.dataset.colour === colour;
        var show = matchesCat && matchesSize && matchesColour;
        card.style.display = show ? '' : 'none';
        if (show) visibleCount++;
      });

      if (emptyMessage) {
        emptyMessage.hidden = visibleCount !== 0;
      }
    }

    categorySelect.addEventListener('change', applyFilters);
    sizeSelect.addEventListener('change', applyFilters);
    colourSelect.addEventListener('change', applyFilters);
  }

  /* ---------- 3. Image lightbox ---------- */
  var galleryImages = document.querySelectorAll('.card img, article img, .grid img');
  if (galleryImages.length) {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Enlarged product image');
    overlay.innerHTML = '<button class="lightbox-close" aria-label="Close image">&times;</button><img class="lightbox-img" alt="">';
    document.body.appendChild(overlay);

    var lightboxImg = overlay.querySelector('.lightbox-img');
    var lightboxClose = overlay.querySelector('.lightbox-close');

    function openLightbox(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      overlay.classList.add('lightbox-open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      overlay.classList.remove('lightbox-open');
      document.body.style.overflow = '';
    }

    galleryImages.forEach(function (img) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () {
        openLightbox(img.src, img.alt);
      });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  /* ---------- 4. Enquiry form: validation + dynamic cost/availability response ---------- */
  var enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    var enquiryConfirmation = document.getElementById('enquiry-confirmation');

    var responseByType = {
      perfume: 'Our perfumes range from R350 to R600 depending on the scent, and are usually in stock — we will confirm exact availability on WhatsApp.',
      clothing: 'Islamic clothing ranges from R280 to R550 depending on the item and size — we will confirm stock for your size shortly.',
      sizing: 'We are happy to help with sizing — please share your usual size or measurements on WhatsApp and we will recommend the best fit.',
      delivery: 'Local delivery is available around the taxi rank and mall area, and in-store collection is always free.',
      sponsor: 'Thank you for your interest in stocking or partnering with us — our team will follow up with more details.',
      other: 'Thanks for reaching out — we will review your message and get back to you as soon as we can.'
    };

    function showFieldError(field, message) {
      clearFieldError(field);
      var error = document.createElement('p');
      error.className = 'field-error';
      error.textContent = message;
      error.style.color = '#b23b3b';
      error.style.fontSize = '0.8rem';
      error.style.marginTop = '4px';
      field.insertAdjacentElement('afterend', error);
      field.setAttribute('aria-invalid', 'true');
    }

    function clearFieldError(field) {
      field.removeAttribute('aria-invalid');
      var next = field.nextElementSibling;
      if (next && next.classList.contains('field-error')) {
        next.remove();
      }
    }

    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name');
      var phone = document.getElementById('phone');
      var email = document.getElementById('email');
      var message = document.getElementById('message');
      var enquiryType = document.getElementById('enquiry-type');

      var valid = true;
      var phonePattern = /^[0-9+\s-]{7,15}$/;
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name.value.trim()) {
        showFieldError(name, 'Please enter your name.');
        valid = false;
      } else {
        clearFieldError(name);
      }

      if (!phone.value.trim() || !phonePattern.test(phone.value.trim())) {
        showFieldError(phone, 'Please enter a valid phone number (7–15 digits).');
        valid = false;
      } else {
        clearFieldError(phone);
      }

      if (email.value.trim() && !emailPattern.test(email.value.trim())) {
        showFieldError(email, 'Please enter a valid email address.');
        valid = false;
      } else {
        clearFieldError(email);
      }

      if (!message.value.trim() || message.value.trim().length < 5) {
        showFieldError(message, 'Please tell us a little more (at least 5 characters).');
        valid = false;
      } else {
        clearFieldError(message);
      }

      if (!valid) {
        if (enquiryConfirmation) enquiryConfirmation.hidden = true;
        return;
      }

      if (enquiryConfirmation) {
        var typeText = responseByType[enquiryType.value] || responseByType.other;
        enquiryConfirmation.innerHTML = 'Thank you, ' + name.value.trim() + ' — your enquiry has been noted.<br>' + typeText;
        enquiryConfirmation.hidden = false;
        enquiryConfirmation.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  /* ---------- 5. Contact form: validation + compile into email ---------- */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    var contactConfirmation = document.getElementById('contact-confirmation');
    var RECIPIENT_EMAIL = 'manizaperfume@gmail.com';

    function showFieldError2(field, message) {
      clearFieldError2(field);
      var error = document.createElement('p');
      error.className = 'field-error';
      error.textContent = message;
      error.style.color = '#b23b3b';
      error.style.fontSize = '0.8rem';
      error.style.marginTop = '4px';
      field.insertAdjacentElement('afterend', error);
      field.setAttribute('aria-invalid', 'true');
    }

    function clearFieldError2(field) {
      field.removeAttribute('aria-invalid');
      var next = field.nextElementSibling;
      if (next && next.classList.contains('field-error')) {
        next.remove();
      }
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var cname = document.getElementById('c-name');
      var cemail = document.getElementById('c-email');
      var ctype = document.getElementById('c-type');
      var cmessage = document.getElementById('c-message');

      var valid = true;
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!cname.value.trim()) {
        showFieldError2(cname, 'Please enter your name.');
        valid = false;
      } else {
        clearFieldError2(cname);
      }

      if (!cemail.value.trim() || !emailPattern.test(cemail.value.trim())) {
        showFieldError2(cemail, 'Please enter a valid email address.');
        valid = false;
      } else {
        clearFieldError2(cemail);
      }

      if (!cmessage.value.trim() || cmessage.value.trim().length < 10) {
        showFieldError2(cmessage, 'Please write a message of at least 10 characters.');
        valid = false;
      } else {
        clearFieldError2(cmessage);
      }

      if (!valid) {
        if (contactConfirmation) contactConfirmation.hidden = true;
        return;
      }

      var subject = '[Website] ' + ctype.options[ctype.selectedIndex].text + ' from ' + cname.value.trim();
      var body =
        'Name: ' + cname.value.trim() + '\n' +
        'Email: ' + cemail.value.trim() + '\n' +
        'Message type: ' + ctype.options[ctype.selectedIndex].text + '\n\n' +
        cmessage.value.trim();

      var mailtoLink = 'mailto:' + RECIPIENT_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      if (contactConfirmation) {
        contactConfirmation.innerHTML = 'Thanks, ' + cname.value.trim() + ' — your message is ready. ' +
          '<a href="' + mailtoLink + '" style="color:var(--plum); font-weight:700;">Click here to send it from your email app</a>.';
        contactConfirmation.hidden = false;
      }

      window.location.href = mailtoLink;
    });
  }

});
