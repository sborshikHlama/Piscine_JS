window.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('article');

    window.addEventListener('scroll', () => {
        let firstVisibleArticle = null;
        console.log(articles);
        articles.forEach(article => {
            const rect = article.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight) {
                if (!firstVisibleArticle || rect.top < firstVisibleArticle.getBoundingClientRect().top) {
                    firstVisibleArticle = article;
                }
            }
        });

        articles.forEach(article => {
            if (article === firstVisibleArticle) {
                article.style.transform = 'scale(1.1)';
                article.style.backgroundColor = 'lightblue';
            } else {
                article.style.transform = 'scale(1)';
                article.style.backgroundColor = '';
            }
        });
    });
});
