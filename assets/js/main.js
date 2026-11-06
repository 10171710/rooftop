/**
 * AURA SKY - Luxury Rooftop Restaurant & Lounge Bar
 * Core Interactive JavaScript (Dark/Light Mode, RTL, Reservation, Filters, Lightbox, Audio)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initNavigation();
  initReservationModal();
  initMenuFilters();
  initEventFilters();
  initGalleryLightbox();
  initCountdownTimer();
  initAmbientAudio();
  initFAQAccordion();
  initBackToTop();
  initGlobalFooterModals();
  initStatCounters();
  initBlogGazette();
  initBlogDetailsSearch();
});

/* ===================================================================
   1. Theme Management (Dark / Light Mode)
   =================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('aura-theme');

  // Apply saved theme or default to dark mode for luxury rooftop ambiance
  if (savedTheme === 'light') {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }

  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  themeToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const html = document.documentElement;
      const isDark = html.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('aura-theme', newTheme);
    });
  });
}

function applyTheme(theme) {
  const html = document.documentElement;
  const body = document.body;
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  if (theme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
    if (body) {
      body.classList.remove('dark');
      body.classList.add('light');
      body.style.backgroundColor = '#FFFFFF';
      body.style.color = '#0F172A';
    }
  } else {
    html.classList.add('dark');
    html.classList.remove('light');
    if (body) {
      body.classList.add('dark');
      body.classList.remove('light');
      body.style.backgroundColor = '';
      body.style.color = '';
    }
  }

  // Enforce pure black header and footer backgrounds in both themes
  if (header) {
    header.style.setProperty('background-color', '#000000', 'important');
    header.style.setProperty('background', '#000000', 'important');
  }
  if (footer) {
    footer.style.setProperty('background-color', '#000000', 'important');
    footer.style.setProperty('background', '#000000', 'important');
  }

  updateThemeIcons(theme);
}

function updateThemeIcons(theme) {
  const icons = document.querySelectorAll('.theme-toggle-icon');
  icons.forEach(icon => {
    if (theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      icon.setAttribute('title', 'Switch to Day/Light Mode');
      icon.setAttribute('aria-label', 'Switch to Day/Light Mode');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      icon.setAttribute('title', 'Switch to Midnight/Dark Mode');
      icon.setAttribute('aria-label', 'Switch to Midnight/Dark Mode');
    }
  });
}

/* ===================================================================
   2. RTL Management (Arabic / Hebrew Support)
   =================================================================== */
function initRTL() {
  const html = document.documentElement;
  const savedRTL = localStorage.getItem('aura-rtl');

  if (savedRTL === 'rtl') {
    enableRTL(true);
  } else {
    enableRTL(false);
  }

  const rtlToggles = document.querySelectorAll('.rtl-toggle-btn');
  rtlToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const isRTL = html.getAttribute('dir') === 'rtl';
      enableRTL(!isRTL);
    });
  });
}

function enableRTL(enable) {
  const html = document.documentElement;
  const rtlLabels = document.querySelectorAll('.rtl-toggle-label');
  const rtlButtons = document.querySelectorAll('.rtl-toggle-btn');

  if (enable) {
    html.setAttribute('dir', 'rtl');
    html.classList.add('rtl');
    localStorage.setItem('aura-rtl', 'rtl');
    rtlLabels.forEach(el => el.textContent = 'RTL');
    rtlButtons.forEach(btn => {
      btn.setAttribute('aria-label', 'RTL Mode Enabled - Click to switch to LTR');
      btn.setAttribute('title', 'RTL Mode');
    });
  } else {
    html.setAttribute('dir', 'ltr');
    html.classList.remove('rtl');
    localStorage.setItem('aura-rtl', 'ltr');
    rtlLabels.forEach(el => el.textContent = 'LTR');
    rtlButtons.forEach(btn => {
      btn.setAttribute('aria-label', 'LTR Mode Enabled - Click to switch to RTL');
      btn.setAttribute('title', 'LTR Mode');
    });
  }

  // Ensure trailing punctuation (periods, exclamations, question marks) stays on the right side of English content
  fixRTLPunctuation(enable);
}

/**
 * Normalizes trailing punctuation in RTL mode across all content so that
 * periods appear on the right side of English/Latin sentences rather than jumping to the left.
 */
function fixRTLPunctuation(enable) {
  if (!document.body) return;

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.parentElement) return NodeFilter.FILTER_REJECT;
        const tag = node.parentElement.tagName.toLowerCase();
        if (tag === 'script' || tag === 'style' || tag === 'textarea' || tag === 'input' || tag === 'code' || tag === 'pre') {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const LRM = '\u200E';
  const punctuationRegex = /([a-zA-Z0-9'\"\)])([\.\!\?])(\s*)$/;
  let node;
  while ((node = walker.nextNode())) {
    const val = node.nodeValue;
    if (!val) continue;

    if (enable) {
      if (punctuationRegex.test(val) && !val.includes(LRM)) {
        node.nodeValue = val.replace(punctuationRegex, '$1$2' + LRM + '$3');
      }
    } else {
      if (val.includes(LRM)) {
        node.nodeValue = val.split(LRM).join('');
      }
    }
  }
}

/* ===================================================================
   3. Header Navigation, Scroll Effects & Mobile Menu
   =================================================================== */
function initNavigation() {
  const header = document.querySelector('header');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileDropdownToggle = document.getElementById('mobileHomeDropdownBtn');
  const mobileDropdownMenu = document.getElementById('mobileHomeDropdownMenu');

  // Header shadow on scroll (Header background is always pure solid black in both themes)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('shadow-2xl');
    } else {
      header?.classList.remove('shadow-2xl');
    }
  });

  // Mobile menu open / close
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
  }

  // Mobile sub-dropdown toggle
  if (mobileDropdownToggle && mobileDropdownMenu) {
    mobileDropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      mobileDropdownMenu.classList.toggle('hidden');
      const arrow = mobileDropdownToggle.querySelector('.fa-chevron-down');
      if (arrow) {
        arrow.classList.toggle('rotate-180');
      }
    });
  }
}

/* ===================================================================
   4. Universal Table Reservation Modal Flow
   =================================================================== */
function initReservationModal() {
  const modal = document.getElementById('reservationModal');
  if (!modal) return;

  window.openReservationModal = function () {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    const dateInput = document.getElementById('reserveDate');
    if (dateInput && !dateInput.value) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
    }
  };

  const openBtns = document.querySelectorAll('[data-open-reservation]');
  const closeBtns = modal.querySelectorAll('[data-close-modal]');
  const form = document.getElementById('reservationForm');
  const stepIndicators = modal.querySelectorAll('.step-indicator');
  const steps = modal.querySelectorAll('.booking-step');

  let currentStep = 1;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
      // Preset date to today
      const dateInput = document.getElementById('reserveDate');
      if (dateInput && !dateInput.value) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal();
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }

  // Next / Prev step navigation in Modal
  modal.querySelectorAll('[data-next-step]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        goToStep(currentStep + 1);
      }
    });
  });

  modal.querySelectorAll('[data-prev-step]').forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(currentStep - 1);
    });
  });

  function goToStep(stepNum) {
    currentStep = stepNum;
    steps.forEach((step, idx) => {
      if (idx + 1 === stepNum) {
        step.classList.remove('hidden');
      } else {
        step.classList.add('hidden');
      }
    });

    stepIndicators.forEach((ind, idx) => {
      const circle = ind.querySelector('span:first-child');
      if (idx + 1 <= stepNum) {
        ind.classList.add('active', 'text-amber-400');
        ind.classList.remove('text-gray-500');
        if (circle) {
          circle.classList.add('border-amber-400', 'text-amber-400');
          circle.classList.remove('border-gray-600', 'text-gray-500');
        }
      } else {
        ind.classList.remove('active', 'text-amber-400');
        ind.classList.add('text-gray-500');
        if (circle) {
          circle.classList.remove('border-amber-400', 'text-amber-400');
          circle.classList.add('border-gray-600', 'text-gray-500');
        }
      }
    });

    // If step 3, update summary
    if (stepNum === 3) {
      updateBookingSummary();
    }
  }

  function validateStep(step) {
    if (step === 1) {
      const guests = document.getElementById('reserveGuests')?.value;
      const date = document.getElementById('reserveDate')?.value;
      const time = document.getElementById('reserveTime')?.value;
      if (!guests || !date || !time) {
        showToast('Required Information', 'Please select guests count, date, and preferred time slot.', 'warning');
        return false;
      }
    }
    return true;
  }

  function updateBookingSummary() {
    const guests = document.getElementById('reserveGuests')?.value || '2 Guests';
    const date = document.getElementById('reserveDate')?.value || 'Today';
    const time = document.getElementById('reserveTime')?.value || '20:00';
    const area = document.querySelector('input[name="seating_area"]:checked')?.value || 'Skyline Terrace';

    const sumElem = document.getElementById('summaryDetails');
    if (sumElem) {
      sumElem.innerHTML = `
        <div class="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-sm space-y-1">
          <div class="flex justify-between">
            <span class="text-gray-400">Guests & Time:</span>
            <span class="font-semibold text-amber-300">${guests} • ${time}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Date:</span>
            <span class="font-semibold text-white">${date}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Seating Area:</span>
            <span class="font-semibold text-amber-400">${area}</span>
          </div>
        </div>
      `;
    }
  }

  // Restrict all phone inputs to 10 digits numeric only
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    input.setAttribute('maxlength', '10');
    input.setAttribute('pattern', '[0-9]{10}');
    input.setAttribute('inputmode', 'numeric');
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    });
  });

  // Handle Form Submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const phoneInput = form.querySelector('input[type="tel"]');
      const phoneVal = phoneInput ? phoneInput.value.replace(/[^0-9]/g, '') : '';

      if (phoneVal.length !== 10) {
        showToast('10-Digit Phone Required', 'Please enter a mandatory 10-digit mobile number.', 'warning');
        phoneInput?.focus();
        return;
      }

      const guestName = document.getElementById('reserveName')?.value || 'Valued Guest';
      closeModal();
      showToast('Reservation Confirmed!', `Thank you ${guestName}, your skyline table has been reserved. A confirmation SMS & email have been dispatched.`, 'success');
      form.reset();
      goToStep(1);
    });
  }
}

/* ===================================================================
   5. Menu Filter Tabs
   =================================================================== */
function initMenuFilters() {
  const filterBtns = document.querySelectorAll('[data-menu-filter]');
  const menuItems = document.querySelectorAll('.menu-item-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-black', 'border-amber-500');
        b.classList.add('border-gray-700', 'text-gray-400');
      });

      btn.classList.add('bg-amber-500', 'text-black', 'border-amber-500');
      btn.classList.remove('border-gray-700', 'text-gray-400');

      const filter = btn.getAttribute('data-menu-filter');

      menuItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filter === 'all' || itemCategory === filter) {
          item.style.display = 'block';
          item.classList.add('animate-fadeIn');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ===================================================================
   5b. Events Live Instrument Filters (Rooftop Lounge & Restaurant)
   =================================================================== */
function filterEvents(category, targetBtn) {
  const filterBtns = document.querySelectorAll('[data-event-filter], .event-filter-btn');
  const eventCards = document.querySelectorAll('.event-card');

  if (targetBtn) {
    filterBtns.forEach(btn => {
      btn.classList.remove('bg-amber-500', 'text-black', 'border-amber-500');
      btn.classList.add('glass-dark', 'border-gray-700', 'text-gray-300');
    });
    targetBtn.classList.add('bg-amber-500', 'text-black', 'border-amber-500');
    targetBtn.classList.remove('glass-dark', 'border-gray-700', 'text-gray-300');
  }

  const rawCat = (category || 'all').toLowerCase().trim();

  eventCards.forEach(card => {
    const cardCats = (card.getAttribute('data-event-category') || '').toLowerCase();
    let isMatch = false;

    if (rawCat === 'all' || rawCat.includes('all') || rawCat.includes('date')) {
      isMatch = true;
    } else if (rawCat === 'sax-brass' || rawCat.includes('sax') || rawCat.includes('brass') || rawCat.includes('dj')) {
      isMatch = cardCats.includes('sax') || cardCats.includes('brass') || cardCats.includes('percussion');
    } else if (rawCat === 'strings-piano' || rawCat.includes('string') || rawCat.includes('piano') || rawCat.includes('guitar') || rawCat.includes('jazz') || rawCat.includes('violin')) {
      isMatch = cardCats.includes('string') || cardCats.includes('piano') || cardCats.includes('guitar') || cardCats.includes('violin');
    } else {
      isMatch = cardCats.includes(rawCat);
    }

    if (isMatch) {
      card.style.display = 'flex';
      card.classList.remove('hidden');
      card.classList.add('animate-fadeIn');
    } else {
      card.style.display = 'none';
      card.classList.add('hidden');
    }
  });
}
window.filterEvents = filterEvents;

function initEventFilters() {
  const filterBtns = document.querySelectorAll('[data-event-filter], .event-filter-btn');
  const filterContainer = document.querySelector('.events-filter-bar');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = btn.getAttribute('data-event-filter') || btn.textContent.toLowerCase().trim();
      filterEvents(cat, btn);
    });
  });

  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (btn) {
        const cat = btn.getAttribute('data-event-filter') || btn.textContent.toLowerCase().trim();
        filterEvents(cat, btn);
      }
    });
  }
}

/* ===================================================================
   6. Gallery Filter & Lightbox Viewer
   =================================================================== */
function initGalleryLightbox() {
  const filterBtns = document.querySelectorAll('[data-gallery-filter]');
  const galleryItems = document.querySelectorAll('.gallery-card');
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxClose = document.getElementById('lightboxClose');

  // Filter items
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-amber-500', 'text-black');
          b.classList.add('text-gray-400', 'hover:text-amber-400');
        });
        btn.classList.add('bg-amber-500', 'text-black');
        btn.classList.remove('text-gray-400', 'hover:text-amber-400');

        const filter = btn.getAttribute('data-gallery-filter');
        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Open Lightbox
  galleryItems.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.getAttribute('data-title') || 'AURA Rooftop Experience';
      if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        if (lightboxTitle) lightboxTitle.textContent = title;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', () => {
      closeLightbox();
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      document.body.style.overflow = 'auto';
    }
  }
}

/* ===================================================================
   7. Countdown Timer (Coming Soon & Special Events)
   =================================================================== */
function initCountdownTimer() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  // Set target date 45 days in future
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 45);

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ===================================================================
   8. Ambient Lounge Audio Synthesizer Simulator
   =================================================================== */
function initAmbientAudio() {
  const audioBtn = document.getElementById('ambientAudioBtn');
  if (!audioBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let oscillators = [];

  audioBtn.addEventListener('click', () => {
    if (!isPlaying) {
      startAmbientSound();
      audioBtn.classList.add('audio-pulse', 'text-amber-400');
      audioBtn.querySelector('i')?.classList.remove('fa-volume-xmark');
      audioBtn.querySelector('i')?.classList.add('fa-volume-high');
      showToast('Ambient Beats Active', 'Playing gentle rooftop lounge harmonic breeze', 'info');
    } else {
      stopAmbientSound();
      audioBtn.classList.remove('audio-pulse', 'text-amber-400');
      audioBtn.querySelector('i')?.classList.add('fa-volume-xmark');
      audioBtn.querySelector('i')?.classList.remove('fa-volume-high');
      showToast('Audio Muted', 'Lounge atmosphere muted', 'info');
    }
  });

  function startAmbientSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioCtx = new AudioContext();

      // Deep mellow rooftop lounge chords (C minor 9th / Ambient Lounge tones)
      const frequencies = [130.81, 155.56, 196.00, 233.08, 293.66];
      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.04, audioCtx.currentTime); // gentle soothing volume
      masterGain.connect(audioCtx.destination);

      oscillators = frequencies.map((freq) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        // Gentle undulating filter
        gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
        return osc;
      });

      isPlaying = true;
    } catch (err) {
      console.log('Audio init prevented:', err);
    }
  }

  function stopAmbientSound() {
    oscillators.forEach(osc => {
      try { osc.stop(); } catch (e) { }
    });
    oscillators = [];
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
    isPlaying = false;
  }
}

/* ===================================================================
   9. FAQ Accordion
   =================================================================== */
function initFAQAccordion() {
  const faqButtons = document.querySelectorAll('.faq-toggle');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');

      const isOpen = !content.classList.contains('hidden');

      // Close all other FAQs in same group
      const parent = btn.closest('.faq-container');
      if (parent) {
        parent.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        parent.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));
      }

      if (!isOpen) {
        content.classList.remove('hidden');
        icon?.classList.add('rotate-180');
      }
    });
  });
}

/* ===================================================================
   10. Toast Notification System
   =================================================================== */
function showToast(title, message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'fixed bottom-6 right-6 z-[99999] flex flex-col gap-3 max-w-sm pointer-events-none';
    container.style.cssText = 'z-index: 99999 !important;';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const borderClass = type === 'success'
    ? 'border-emerald-500/50 shadow-emerald-500/20'
    : type === 'warning'
      ? 'border-amber-500/50 shadow-amber-500/20'
      : 'border-blue-500/50 shadow-blue-500/20';

  toast.className = `toast-box pointer-events-auto p-4 rounded-xl border shadow-2xl transition-all duration-300 transform translate-y-4 opacity-0 flex items-start gap-3 ${borderClass}`;
  toast.style.cssText = 'background: #000000 !important; background-color: #000000 !important; box-shadow: 0 14px 40px rgba(0, 0, 0, 0.9), 0 0 20px rgba(245, 158, 11, 0.2) !important;';

  const iconClass = type === 'success'
    ? 'fa-circle-check text-emerald-400'
    : type === 'warning'
      ? 'fa-triangle-exclamation text-amber-400'
      : 'fa-circle-info text-blue-400';

  toast.innerHTML = `
    <i class="fa-solid ${iconClass} text-xl mt-0.5 shrink-0"></i>
    <div class="flex-1 min-w-0">
      <h4 class="toast-title font-semibold text-sm leading-snug" style="color: #FFFFFF !important; font-weight: 700 !important; margin: 0 0 2px 0;">${title}</h4>
      <p class="toast-desc text-xs leading-relaxed" style="color: #E2E8F0 !important; margin: 0;">${message}</p>
    </div>
    <button class="toast-close text-gray-400 hover:text-white text-sm focus:outline-none ml-2 shrink-0 p-1" style="color: #94A3B8 !important;" onclick="this.closest('.toast-box')?.remove()" aria-label="Close notification">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  // Auto remove after 4.5 seconds
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Global expose
window.showToast = showToast;



/* ===================================================================
   10. AllergiQ-Inspired Dynamic Footer Features & Back-to-Top Button
   =================================================================== */
function initBackToTop() {
  let btn = document.querySelector('.back-to-top-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.className = 'back-to-top-btn';
    btn.setAttribute('aria-label', 'Back to top');
    btn.setAttribute('title', 'Back to top');
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(btn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 280) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function initGlobalFooterModals() {
  let modal = document.getElementById('footerLegalModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'footerLegalModal';
    modal.className = 'fixed inset-0 z-50 hidden items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300';
    modal.innerHTML = `
      <div class="modal-legal-card relative w-full max-w-2xl rounded-2xl border border-amber-500/40 p-6 sm:p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto">
        <button type="button" class="modal-close-btn absolute top-5 right-5 text-lg w-8 h-8 rounded-full flex items-center justify-center transition focus:outline-none" onclick="closeFooterLegalModal()" aria-label="Close modal">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div id="footerLegalModalContent"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeFooterLegalModal();
    });
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest('footer a');
    if (!link) return;
    const text = (link.textContent || '').trim().toLowerCase();

    if (text.includes('privacy policy')) {
      e.preventDefault();
      openFooterLegalModal('Privacy & VIP Guest Policy', `
        <div class="space-y-4 text-xs leading-relaxed">
          <div class="modal-alert-box p-3.5 rounded-xl text-xs">
            <i class="fa-solid fa-shield-halved mr-1.5 text-amber-500"></i> <strong>VIP Discretion Guarantee:</strong> AURA SKY guarantees total privacy for all penthouse lounge guests, corporate clients, and VIP cabana patrons.
          </div>
          <h4 class="text-sm font-bold uppercase tracking-wider font-display">1. Information Collection</h4>
          <p>We collect essential reservation information including guest name, direct telephone contact, email address, and dietary requirements strictly for culinary preparation and skyline table allocation.</p>
          <h4 class="text-sm font-bold uppercase tracking-wider font-display">2. Confidentiality & Security</h4>
          <p>Payment data is encrypted using 256-bit SSL protocols. We do not sell or lease guest lists, celebration details, or contact data to third parties.</p>
          <h4 class="text-sm font-bold uppercase tracking-wider font-display">3. VIP Concierge Inquiries</h4>
          <p>For custom security arrangements or celebrity dining requests, please contact our VIP Concierge directly at <a href="mailto:concierge@auraskyrooftop.com" class="underline">concierge@auraskyrooftop.com</a>.</p>
        </div>
      `);
    } else if (text.includes('dress code')) {
      e.preventDefault();
      openFooterLegalModal('Skyline Lounge Dress Code Policy', `
        <div class="space-y-4 text-xs leading-relaxed">
          <div class="modal-alert-box p-3.5 rounded-xl text-xs">
            <i class="fa-solid fa-vest-patches mr-1.5 text-amber-500"></i> <strong>Dress Code Standard:</strong> Smart Casual & Evening Elegant.
          </div>
          <h4 class="text-sm font-bold uppercase tracking-wider font-display">Daytime Ambience (12:00 PM – 5:00 PM)</h4>
          <p>Upscale casual attire is warmly welcomed. Tailored shorts, collared shirts, and stylish sneakers are permitted in the sky dining terrace.</p>
          <h4 class="text-sm font-bold uppercase tracking-wider font-display">Evening & Midnight Rooftop (5:00 PM – Close)</h4>
          <p>Sophisticated evening wear is required. Strictly prohibited: athletic apparel, beachwear, flip-flops, torn garments, or gym trainers.</p>
          <h4 class="text-sm font-bold uppercase tracking-wider font-display">Management Right of Admission</h4>
          <p>AURA SKY reserves the right to decline entry to ensure a premium ambiance for all penthouse guests.</p>
        </div>
      `);
    } else if (text.includes('terms of service')) {
      e.preventDefault();
      openFooterLegalModal('Terms of Service & Reservations', `
        <div class="space-y-4 text-xs leading-relaxed">
          <div class="modal-alert-box p-3.5 rounded-xl text-xs">
            <i class="fa-solid fa-file-contract mr-1.5 text-amber-500"></i> <strong>Reservation Policies:</strong> Table holds, cancellation windows, and minimum spend terms.
          </div>
          <h4 class="text-sm font-bold uppercase tracking-wider font-display">1. Table Hold Policy</h4>
          <p>Reserved tables will be held for up to 15 minutes past the scheduled arrival time before release to the priority waitlist.</p>
          <h4 class="text-sm font-bold uppercase tracking-wider font-display">2. Cancellation Policy</h4>
          <p>Complimentary cancellations are permitted up to 6 hours prior to your reservation time. Late cancellations for parties of 6+ may incur a $25 per guest fee.</p>
          <h4 class="text-sm font-bold uppercase tracking-wider font-display">3. Age Requirements</h4>
          <p>Guests dining after 9:00 PM in the Lounge and DJ Bar areas must be 21+ with valid government-issued photographic identification.</p>
        </div>
      `);
    } else if (text.includes('sitemap')) {
      e.preventDefault();
      openFooterLegalModal('Penthouse Experience Sitemap', `
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
          <div class="space-y-2">
            <h5 class="font-bold font-display uppercase text-xs mb-1">Main Pages</h5>
            <div><a href="index.html" class="hover:underline">Home 1 - Sky Lounge</a></div>
            <div><a href="index-2.html" class="hover:underline">Home 2 - Nightlife Penthouse</a></div>
            <div><a href="about.html" class="hover:underline">About Our Penthouse</a></div>
            <div><a href="menu.html" class="hover:underline">Culinary & Drinks Menu</a></div>
          </div>
          <div class="space-y-2">
            <h5 class="font-bold font-display uppercase text-xs mb-1">Nightlife & Booking</h5>
            <div><a href="events.html" class="hover:underline">Events & Live DJ Lineup</a></div>
            <div><a href="gallery.html" class="hover:underline">Panoramic Photo Gallery</a></div>
            <div><a href="pricing.html" class="hover:underline">VIP Cabana Packages</a></div>
            <div><a href="contact.html" class="hover:underline">Location & Directions</a></div>
          </div>
          <div class="space-y-2">
            <h5 class="font-bold font-display uppercase text-xs mb-1">Portals & VIP</h5>
            <div><a href="dashboard-guest.html" class="hover:underline">Guest VIP Dashboard</a></div>
            <div><a href="dashboard-admin.html" class="hover:underline">Staff Admin Dashboard</a></div>
            <div><a href="login.html" class="hover:underline">Login / VIP Access</a></div>
            <div><a href="register.html" class="hover:underline">Create Account</a></div>
          </div>
        </div>
      `);
    }
  });
}

function openFooterLegalModal(title, bodyHtml) {
  const modal = document.getElementById('footerLegalModal');
  const content = document.getElementById('footerLegalModalContent');
  if (!modal || !content) return;
  content.innerHTML = `
    <h3 class="modal-legal-title font-display text-xl font-bold mb-4 border-b border-gray-800 pb-3 flex items-center gap-2.5">
      <span class="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shrink-0"></span>
      <span>${title}</span>
    </h3>
    ${bodyHtml}
    <div class="modal-legal-footer mt-6 pt-4 border-t border-gray-800 flex justify-end">
      <button type="button" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/25" onclick="closeFooterLegalModal()">
        Acknowledge & Close
      </button>
    </div>
  `;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeFooterLegalModal() {
  const modal = document.getElementById('footerLegalModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
window.closeFooterLegalModal = closeFooterLegalModal;

/* ===================================================================
   11. Stat Counter Animation (Gradual Increase / Count-Up on Scroll)
   =================================================================== */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const rawTarget = el.getAttribute('data-target');
    if (!rawTarget) return;

    const target = Math.max(parseFloat(rawTarget) || 0, 0);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const useComma = el.getAttribute('data-comma') === 'true' || target >= 1000;
    const duration = target <= 10 ? 1200 : 2000; // 1.2s for small counts, 2s for larger numbers

    const getOrdinal = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return (s[(v - 20) % 10] || s[v] || s[0]);
    };

    const format = (value) => {
      const formatted = useComma ? value.toLocaleString('en-US') : value.toString();
      if (suffix === 'th') {
        const ord = value === 0 ? 'th' : getOrdinal(value);
        return `${prefix}${formatted}${ord}`;
      }
      return `${prefix}${formatted}${suffix}`;
    };

    // Always start from zero so the count-up is visible and never negative.
    el.textContent = format(0);
    let startTime = null;

    const update = (currentTime) => {
      if (startTime === null) startTime = currentTime;

      // Clamp progress so the first frame can never render a negative value.
      const progress = Math.min(Math.max((currentTime - startTime) / duration, 0), 1);

      // Smooth cubic ease-out curve (fast initial acceleration, slow gradual finish)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.min(Math.max(Math.floor(easeOut * target), 0), target);

      el.textContent = format(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = format(target);
      }
    };

    requestAnimationFrame(update);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    counters.forEach(counter => observer.observe(counter));
  } else {
    counters.forEach(counter => animateCounter(counter));
  }
}

/* ===================================================================
   14. Blog Gazette Search & Curated Topics Filter System
   =================================================================== */
const AURA_BLOG_ARTICLES = [
  {
    id: 1,
    title: "Skyline Charcoal Grilling: Wood-Fired Nikkei Gastronomy",
    category: "Rooftop Dining",
    topics: ["binchotan", "rooftopdining", "gastronomy", "wagyu", "charcoal", "grill", "nikkei"],
    url: "blog-details-1.html",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80",
    readTime: "5 min read",
    author: "Julian Vance",
    excerpt: "Japanese binchotan charcoal sear craft infusing prime A5 Wagyu and sea bass."
  },
  {
    id: 2,
    title: "Anatomy of Sunset Cocktails: Smoked Bourbons & Elixirs",
    category: "Mixology & Bar",
    topics: ["mixology", "cocktails", "smokedbourbon", "elixirs", "bar", "bourbon", "sunset"],
    url: "blog-details-2.html",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=400&q=80",
    readTime: "6 min read",
    author: "Sophia Leclerc",
    excerpt: "Crafting twilight libations balancing clarified citrus juices, house bitters, and cedar smoke."
  },
  {
    id: 3,
    title: "Twilight to Midnight: High-Altitude Supper Club Nights",
    category: "Terrace Atmosphere",
    topics: ["supperclub", "terraceatmosphere", "nightlife", "skyline", "terrace", "atmosphere"],
    url: "blog-details-3.html",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
    readTime: "4 min read",
    author: "Liam Sterling",
    excerpt: "From golden skyline horizons to candlelit booths under the midnight sky."
  },
  {
    id: 4,
    title: "Soundscapes Above the Clouds: Live Saxophone & Deep House",
    category: "Live Sessions",
    topics: ["acoustics", "livesessions", "deephouse", "sound", "saxophone", "music"],
    url: "blog-details-4.html",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
    readTime: "5 min read",
    author: "DJ Matteo Ross",
    excerpt: "Soulful live brass improvisations blended with warm ambient house rhythms."
  },
  {
    id: 5,
    title: "Cellar in the Sky: Grand Cru Champagne & Caviar Flights",
    category: "Sommelier Reserves",
    topics: ["grandcru", "sommelierreserves", "champagne", "caviar", "wine", "cellar"],
    url: "blog-details-5.html",
    image: "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=400&q=80",
    readTime: "6 min read",
    author: "Antoine Dubois",
    excerpt: "Vintage champagnes paired with chilled Osetra caviar and Breton oysters."
  },
  {
    id: 6,
    title: "The Penthouse Cabanas: Bespoke Bottle Service & Lounging",
    category: "VIP Experiences",
    topics: ["penthousecabanas", "vipexperiences", "bottleservice", "cabanas", "lounge", "vip"],
    url: "blog-details-6.html",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=400&q=80",
    readTime: "4 min read",
    author: "Marcus Sterling",
    excerpt: "Private open-air sanctuaries with dedicated butler service and crystal glassware."
  },
  {
    id: 7,
    title: "The Rare Harvest: Autumn White Truffles & Barolo Cellar Mastery",
    category: "Seasonal Gazette",
    topics: ["whitetruffles", "barolo", "seasonal", "wine", "gastronomy"],
    url: "blog-details-7.html",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80",
    readTime: "8 min read",
    author: "Antoine Dubois",
    excerpt: "Exclusive deep-dive masterclass into Piedmont white truffles and vintage Barolo pairings."
  }
];

function initBlogGazette() {
  const searchInput = document.getElementById('blog-search-input');
  const categorySelect = document.getElementById('blog-category-select');
  const topicPills = document.querySelectorAll('.topic-pill');
  const cards = document.querySelectorAll('.blog-article-card');
  const clearBtn = document.getElementById('blog-search-clear-btn');
  const filterStatus = document.getElementById('blog-filter-status');
  const filterMsg = document.getElementById('blog-filter-message');
  const resetBtn = document.getElementById('blog-reset-filter-btn');
  const noResults = document.getElementById('blog-no-results');
  const emptyResetBtn = document.getElementById('blog-empty-reset-btn');

  if (!cards.length && !searchInput) return;

  let currentTopic = 'all';
  let currentCategory = 'all';
  let currentSearch = '';

  function applyFilters(shouldScroll = false) {
    let visibleCount = 0;
    const query = currentSearch.toLowerCase().trim();

    cards.forEach(card => {
      const title = (card.getAttribute('data-title') || '').toLowerCase();
      const cat = (card.getAttribute('data-category') || '').toLowerCase();
      const topics = (card.getAttribute('data-topics') || '').toLowerCase();
      const excerpt = (card.getAttribute('data-excerpt') || '').toLowerCase();

      // Check Category
      const matchCat = (currentCategory === 'all' || cat === currentCategory.toLowerCase());

      // Check Topic
      const matchTopic = (currentTopic === 'all' || topics.includes(currentTopic.toLowerCase()));

      // Check Search text
      const matchSearch = !query ||
        title.includes(query) ||
        cat.includes(query) ||
        topics.includes(query) ||
        excerpt.includes(query);

      if (matchCat && matchTopic && matchSearch) {
        card.classList.remove('hidden');
        card.style.display = '';
        visibleCount++;
      } else {
        card.classList.add('hidden');
        card.style.display = 'none';
      }
    });

    // Update Clear Button on search input
    if (clearBtn) {
      if (currentSearch) {
        clearBtn.classList.remove('hidden');
      } else {
        clearBtn.classList.add('hidden');
      }
    }

    // Update Status Banner
    const isFiltered = (currentTopic !== 'all' || currentCategory !== 'all' || currentSearch !== '');
    if (filterStatus) {
      if (isFiltered && visibleCount > 0) {
        filterStatus.classList.remove('hidden');
        let parts = [];
        if (currentTopic !== 'all') parts.push(`Topic: #${currentTopic}`);
        if (currentCategory !== 'all') parts.push(`Category: ${currentCategory}`);
        if (currentSearch) parts.push(`Query: "${currentSearch}"`);
        if (filterMsg) {
          filterMsg.innerHTML = `Showing <strong>${visibleCount}</strong> ${visibleCount === 1 ? 'chronicle' : 'chronicles'} (${parts.join(' • ')})`;
        }
      } else {
        filterStatus.classList.add('hidden');
      }
    }

    // Show/hide zero results box
    if (noResults) {
      if (visibleCount === 0) {
        noResults.classList.remove('hidden');
      } else {
        noResults.classList.add('hidden');
      }
    }

    if (shouldScroll) {
      const grid = document.getElementById('blog-posts-section') || document.getElementById('blog-posts-grid');
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Topic pills click
  topicPills.forEach(pill => {
    pill.addEventListener('click', () => {
      topicPills.forEach(p => {
        p.classList.remove('active');
      });
      pill.classList.add('active');

      currentTopic = pill.getAttribute('data-topic') || 'all';
      applyFilters(true);
    });
  });

  // Search input live
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      applyFilters(false);
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyFilters(true);
      }
    });
  }

  // Category select
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      currentCategory = e.target.value;
      applyFilters(true);
    });
  }

  // Clear search input button
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearch = '';
      applyFilters(false);
    });
  }

  // Reset filters
  const resetAll = () => {
    currentTopic = 'all';
    currentCategory = 'all';
    currentSearch = '';
    if (searchInput) searchInput.value = '';
    if (categorySelect) categorySelect.value = 'all';
    topicPills.forEach(p => {
      if (p.getAttribute('data-topic') === 'all') {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
    applyFilters(false);
  };

  if (resetBtn) resetBtn.addEventListener('click', resetAll);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);

  // Check URL parameters on load
  const urlParams = new URLSearchParams(window.location.search);
  const qParam = urlParams.get('q') || urlParams.get('search');
  const topicParam = urlParams.get('topic');
  const catParam = urlParams.get('category');

  if (qParam || topicParam || catParam) {
    if (qParam && searchInput) {
      searchInput.value = qParam;
      currentSearch = qParam;
    }
    if (topicParam) {
      currentTopic = topicParam.toLowerCase().replace('#', '');
      topicPills.forEach(p => {
        if ((p.getAttribute('data-topic') || '').toLowerCase() === currentTopic) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }
    if (catParam && categorySelect) {
      categorySelect.value = catParam;
      currentCategory = catParam;
    }
    setTimeout(() => {
      applyFilters(true);
    }, 200);
  }
}

// Global submit handler for blog details search widget
window.submitGazetteSearch = function (formEl) {
  const input = formEl.querySelector('input[name="q"]') || formEl.querySelector('#gazette-detail-search-input');
  if (input && input.value.trim()) {
    window.location.href = `blog.html?q=${encodeURIComponent(input.value.trim())}`;
  } else {
    window.location.href = `blog.html`;
  }
};

function initBlogDetailsSearch() {
  const searchInput = document.getElementById('gazette-detail-search-input');
  const dropdown = document.getElementById('gazette-search-results-dropdown');
  if (!searchInput || !dropdown) return;

  const renderResults = (query) => {
    const q = query.toLowerCase().trim();
    if (!q) {
      dropdown.classList.add('hidden');
      dropdown.innerHTML = '';
      return;
    }

    const matches = AURA_BLOG_ARTICLES.filter(art => {
      return art.title.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q) ||
        art.author.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.topics.some(t => t.includes(q) || q.includes(t));
    });

    if (matches.length === 0) {
      dropdown.innerHTML = `
        <div class="p-3 text-center text-xs text-gray-400">
          <p class="mb-1">No stories found for "<span class="text-amber-400">${query}</span>"</p>
          <a href="blog.html?q=${encodeURIComponent(query)}" class="text-amber-400 font-bold hover:underline">Search all on Blog &rarr;</a>
        </div>
      `;
      dropdown.classList.remove('hidden');
      return;
    }

    dropdown.innerHTML = `
      <div class="px-2 py-1 text-[10px] font-serif uppercase tracking-widest text-amber-400 border-b border-gray-800 mb-1 flex items-center justify-between">
        <span>Gazette Matches (${matches.length})</span>
        <a href="blog.html?q=${encodeURIComponent(query)}" class="text-gray-400 hover:text-white normal-case font-sans">View all &rarr;</a>
      </div>
      <div class="space-y-1">
        ${matches.map(art => `
          <a href="${art.url}" class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-zinc-900 transition group text-left">
            <img src="${art.image}" alt="${art.title}" class="w-10 h-10 rounded-md object-cover shrink-0 border border-amber-500/20 group-hover:border-amber-400">
            <div class="flex-1 min-w-0">
              <span class="text-[9px] uppercase tracking-wider text-amber-400 font-bold block">${art.category}</span>
              <h5 class="text-xs text-white group-hover:text-amber-300 font-serif font-bold truncate transition">${art.title}</h5>
              <span class="text-[10px] text-gray-400 block">${art.author} • ${art.readTime}</span>
            </div>
          </a>
        `).join('')}
      </div>
    `;
    dropdown.classList.remove('hidden');
  };

  searchInput.addEventListener('input', (e) => {
    renderResults(e.target.value);
  });

  searchInput.addEventListener('focus', (e) => {
    if (e.target.value.trim()) {
      renderResults(e.target.value);
    }
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
}

/* ===================================================================
   15. Social Share Story Actions (Twitter, Facebook, LinkedIn - No Popup Windows)
   =================================================================== */
window.shareStory = function (platform, event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  const url = window.location.href;
  const title = document.title || 'AURA SKY Luxury Rooftop Restaurant & Lounge';

  if (platform === 'facebook' || platform === 'fb') {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    if (typeof showToast === 'function') {
      showToast('Opening Facebook', 'Connecting to Facebook...', 'info');
    }
  } else if (platform === 'twitter' || platform === 'x') {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    if (typeof showToast === 'function') {
      showToast('Opening Twitter', 'Connecting to Twitter...', 'info');
    }
  } else if (platform === 'linkedin') {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    if (typeof showToast === 'function') {
      showToast('Opening LinkedIn', 'Connecting to LinkedIn...', 'info');
    }
  }
};

/* ===================================================================
   16. Leave a Thought Comment Form Validation (Mandatory min. 2 letters)
   =================================================================== */
window.submitCommentForm = function (form) {
  const nameInput = form.querySelector('input[name="fullname"]') || form.querySelector('input[type="text"]');
  const fullName = nameInput ? nameInput.value.trim() : '';

  if (fullName.length < 2) {
    if (typeof showToast === 'function') {
      showToast('Validation Error', 'Full Name is mandatory and must contain at least 2 letters.', 'warning');
    }
    if (nameInput) {
      nameInput.focus();
      nameInput.classList.add('border-red-500');
      setTimeout(() => nameInput.classList.remove('border-red-500'), 2500);
    }
    return false;
  }

  if (typeof showToast === 'function') {
    showToast('Reflection Received', `Thank you, ${fullName}! Your reflection is awaiting moderation.`, 'success');
  }
  form.reset();
  return true;
};



/* ===================================================================
   17. Dynamic Automatic Active Page Navigation Highlighter
   =================================================================== */
function initActiveNavHighlighter() {
  const currentPath = window.location.pathname;
  let filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (!filename || filename === '' || filename === '/') {
    filename = 'index.html';
  }
  filename = filename.split('?')[0].split('#')[0];

  const desktopLinks = document.querySelectorAll('header nav a');
  const mobileLinks = document.querySelectorAll('#mobileMenu a');

  const checkLink = (link) => {
    const href = link.getAttribute('href');
    if (!href) return false;
    const linkFile = href.split('?')[0].split('#')[0];

    if (linkFile === filename) return true;
    if ((filename === 'index.html' || filename === '') && (linkFile === 'index.html' || linkFile === '')) return true;
    if (filename.startsWith('blog-details') && linkFile === 'blog.html') return true;
    if (filename.startsWith('service-details') && linkFile === 'services.html') return true;
    return false;
  };

  desktopLinks.forEach(link => {
    if (checkLink(link)) {
      if (link.classList.contains('dropdown-link')) {
        link.classList.add('active');
        link.classList.remove('nav-active');
      } else {
        link.classList.add('nav-active', 'active');
        link.classList.remove('text-white');
      }
      const group = link.closest('.dropdown-group');
      if (group) {
        group.classList.add('active');
        const trigger = group.querySelector('button');
        if (trigger) {
          trigger.classList.add('nav-active', 'active');
          trigger.classList.remove('text-white');
        }
      }
    } else {
      if (link.classList.contains('dropdown-link')) {
        link.classList.remove('active', 'nav-active');
      }
    }
  });

  mobileLinks.forEach(link => {
    if (checkLink(link)) {
      link.classList.add('nav-active', 'active');
      link.classList.remove('text-white', 'text-gray-300');
    }
  });

  if (filename === 'index.html' || filename === 'index-2.html' || filename === '') {
    const homeGroup = document.querySelector('header nav .dropdown-group');
    if (homeGroup) {
      homeGroup.classList.add('active');
      const trigger = homeGroup.querySelector('button');
      if (trigger) {
        trigger.classList.add('nav-active', 'active');
        trigger.classList.remove('text-white');
      }
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initActiveNavHighlighter);
} else {
  initActiveNavHighlighter();
}

/* Legacy cleanup: ensure the retired Aurora 54 Spritz sublabel never renders,
   even when an older cached copy of the page markup is reused. */
function removeLegacyAuroraSublabel() {
  document.querySelectorAll('span').forEach(function (el) {
    var text = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (/^Roku Gin\s*&\s*Blood Orange$/i.test(text)) {
      el.remove();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removeLegacyAuroraSublabel);
} else {
  removeLegacyAuroraSublabel();
}
