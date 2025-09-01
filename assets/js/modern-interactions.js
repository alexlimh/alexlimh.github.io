/*!
 * Modern Interactions - Enhanced JavaScript for personal site
 */

(function() {
  'use strict';

  // Intersection Observer for scroll animations
  function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe elements that should fade in on scroll
      document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        observer.observe(el);
      });
    }
  }

  // Enhanced smooth scrolling for anchor links
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Loading animations with stagger
  function initLoadingAnimations() {
    // Add staggered delay classes to publication cards
    document.querySelectorAll('.publication-card').forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add staggered delay classes to news items
    document.querySelectorAll('.news-item').forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
    });

    // Add staggered delay classes to social links
    document.querySelectorAll('.social-link').forEach((link, index) => {
      link.style.animationDelay = `${index * 0.05}s`;
    });
  }

  // Copy to clipboard functionality
  function initCopyToClipboard() {
    document.querySelectorAll('[data-copy]').forEach(button => {
      button.addEventListener('click', async function() {
        const textToCopy = this.getAttribute('data-copy');
        
        try {
          await navigator.clipboard.writeText(textToCopy);
          
          // Visual feedback
          const originalText = this.textContent;
          this.textContent = 'Copied!';
          this.classList.add('copied');
          
          setTimeout(() => {
            this.textContent = originalText;
            this.classList.remove('copied');
          }, 2000);
          
        } catch (err) {
          console.warn('Failed to copy text: ', err);
        }
      });
    });
  }

  // Enhanced button ripple effects
  function initRippleEffects() {
    document.querySelectorAll('.btn, button').forEach(button => {
      button.addEventListener('click', function(e) {
        // Create ripple element
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // Parallax scrolling effect
  function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length > 0) {
      let ticking = false;
      
      function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
          element.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
        
        ticking = false;
      }
      
      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }
      
      window.addEventListener('scroll', requestTick);
    }
  }

  // Theme toggle functionality (if needed in future)
  function initThemeToggle() {
    const themeToggle = document.querySelector('#theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
      });

      // Load saved theme
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
      }
    }
  }

  // Enhanced navigation
  function initNavigation() {
    const nav = document.querySelector('.masthead');
    if (nav) {
      let lastScrollTop = 0;
      
      window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          // Scrolling down & past header
          nav.style.transform = 'translateY(-100%)';
        } else {
          // Scrolling up or at top
          nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
      });
    }
  }

  // Preload critical images
  function preloadImages() {
    const images = [
      '/images/headshot.png',
      '/images/profile.png',
      '/images/bio-photo.jpg'
    ];
    
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  // Analytics helpers (privacy-friendly)
  function trackInteraction(category, action, label) {
    // Only track if analytics is enabled and consent given
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
  }

  // Add interaction tracking to key elements
  function initAnalytics() {
    // Track paper link clicks
    document.querySelectorAll('.btn-paper').forEach(btn => {
      btn.addEventListener('click', function() {
        const paperTitle = this.closest('.publication-card')?.querySelector('.paper-title')?.textContent;
        trackInteraction('Publications', 'paper_click', paperTitle);
      });
    });

    // Track code link clicks
    document.querySelectorAll('.btn-code').forEach(btn => {
      btn.addEventListener('click', function() {
        const paperTitle = this.closest('.publication-card')?.querySelector('.paper-title')?.textContent;
        trackInteraction('Publications', 'code_click', paperTitle);
      });
    });

    // Track social link clicks
    document.querySelectorAll('.social-link__item').forEach(link => {
      link.addEventListener('click', function() {
        const platform = this.title || this.href;
        trackInteraction('Social', 'social_click', platform);
      });
    });
  }

  // Initialize everything when DOM is ready
  function init() {
    initScrollAnimations();
    initSmoothScrolling();
    initLoadingAnimations();
    initCopyToClipboard();
    initRippleEffects();
    initParallax();
    initThemeToggle();
    initNavigation();
    preloadImages();
    initAnalytics();
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Add CSS for ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    .btn, button {
      position: relative;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);

})();