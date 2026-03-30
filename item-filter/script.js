function clearInput() {
    document.getElementById("search-box").value = '';
    document.getElementById("search-clear-btn").style.display = 'none';
}

// search functionality
const searchBox = document.getElementById('search-box');
const items = document.querySelectorAll('#item-list li');
searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase().trim();
    items.forEach(item => {
        const matches = item.textContent.toLowerCase().includes(query);
        item.style.display = matches ? '' : 'none';
  });
});
searchBox.addEventListener('input', () => {
    document.getElementById("search-clear-btn").style.display = searchBox.value ? 'inline' : 'none';
});