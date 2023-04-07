async function loadHtmlFile(url, targetElementId) {
    try {
      const response = await fetch(url);
      const htmlContent = await response.text();
      document.getElementById(targetElementId).innerHTML = htmlContent;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
    }
  }
  
  // Load and insert the content of your static HTML files into the index.html
  loadHtmlFile('grid.html', 'page1-container');
  loadHtmlFile('flex.html', 'page2-container');