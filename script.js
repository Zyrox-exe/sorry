function toggleMore() {
    const moreContent = document.getElementById('more-content');
    const button = document.getElementById('show-more');
    
    if (moreContent.classList.contains('hidden')) {
        moreContent.classList.remove('hidden');
        button.textContent = 'Show Less';
    } else {
        moreContent.classList.add('hidden');
        button.textContent = 'Show More';
    }
}
