function clearInput() {
    document.getElementById("search-box").value = '';
}

// search functionality
const searchBox = document.getElementById('search-box');
const items = document.querySelectorAll('#item-list li');
searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase().trim();
    items.forEach(item => {
        const match = item.textContent.toLowerCase().includes(query);
        item.style.display = match ? '' : 'none';
  });
});