document.addEventListener('DOMContentLoaded', function() {
  // Add copy-to-clipboard links to all headers
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function(heading) {
    // Skip if heading is empty or already has an id with a link
    if (!heading.textContent.trim() || heading.querySelector('.header-link')) {
      return;
    }
    
    // Generate ID from heading text if it doesn't have one
    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    }
    
    // Create the link element
    const link = document.createElement('a');
    link.className = 'header-link';
    link.href = '#' + heading.id;
    link.textContent = '🔗';
    link.title = 'Copy link to this section';
    link.onclick = function(e) {
      e.preventDefault();
      const url = window.location.href.split('#')[0] + '#' + heading.id;
      navigator.clipboard.writeText(url).then(function() {
        link.textContent = '✓';
        setTimeout(function() {
          link.textContent = '🔗';
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy to clipboard:', err);
      });
    };
    
    heading.appendChild(link);
  });
});
