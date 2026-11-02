document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const requiredInputs = form.querySelectorAll('[required]');
            let isValid = true;
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = '';
                }
            });
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields correctly.');
            }
        });
    });

    const mainContent = document.querySelector('main');
    const productSection = document.querySelector('main article') ? document.querySelector('main article').parentNode : null;
    if (productSection && document.title.includes('Products')) {
        const searchContainer = document.createElement('div');
        searchContainer.style.marginBottom = '20px';
        searchContainer.innerHTML = '<input type="text" id="product-search" placeholder="Search performance parts..." style="width:100%;padding:10px;font-size:16px;box-sizing:border-box;">';
        mainContent.insertBefore(searchContainer, productSection);

        const searchInput = document.getElementById('product-search');
        const articles = productSection.querySelectorAll('article');

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            articles.forEach(article => {
                const text = article.textContent.toLowerCase();
                if (text.includes(query)) {
                    article.style.display = '';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    }

    const images = document.querySelectorAll('main img');
    if (images.length > 0) {
        const lightbox = document.createElement('div');
        lightbox.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);display:none;justify-content:center;align-items:center;z-index:9999;cursor:pointer;';
        const lightboxImg = document.createElement('img');
        lightboxImg.style.cssText = 'max-width:90%;max-height:90%;border-radius:4px;';
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        images.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightbox.style.display = 'flex';
            });
        });

        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }
});