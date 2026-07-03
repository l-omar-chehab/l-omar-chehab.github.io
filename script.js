document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    if (nav && !nav.querySelector('a[href$="group.html"]')) {
        const prefix = window.location.pathname.includes('/notes/') || window.location.pathname.includes('/teaching/') ? '../' : '';
        const current = document.title.split('|').pop().trim().toLowerCase();
        const items = [
            ['Home', 'index.html'],
            ['Research', 'research.html'],
            ['Group', 'group.html'],
            ['Talks', 'talks.html'],
            ['Notes', 'notes.html'],
            ['Teaching', 'teaching.html']
        ];
        nav.innerHTML = items.map(([label, href]) => {
            const id = current === label.toLowerCase() || (label === 'Home' && !document.title.includes('|')) ? ' id="current"' : '';
            return `<a href="${prefix}${href}"${id}>${label}</a>`;
        }).join('\n                ');
    }

    const tags = document.querySelectorAll('.tag');
    const publications = document.querySelectorAll('.publication-item');
    const resetFilterButton = document.querySelector('.reset-filter');
    if (!tags.length || !publications.length || !resetFilterButton) return;

    let activeTag = null;
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const selectedTag = this.getAttribute('data-tag');
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                resetFilterButton.style.display = 'none';
                activeTag = null;
                publications.forEach(publication => publication.classList.remove('hidden'));
                return;
            }

            tags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            activeTag = selectedTag;
            resetFilterButton.style.display = 'inline-block';
            publications.forEach(publication => {
                const pubTags = publication.getAttribute('data-tags').split(',');
                publication.classList.toggle('hidden', !pubTags.includes(selectedTag));
            });
        });
    });

    resetFilterButton.addEventListener('click', function() {
        publications.forEach(publication => publication.classList.remove('hidden'));
        tags.forEach(tag => tag.classList.remove('active'));
        activeTag = null;
        this.style.display = 'none';
    });
});
