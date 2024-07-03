document.addEventListener('DOMContentLoaded', () => {
    const headerContainer1 = document.getElementById('headerContainer1');
    const headBar = document.getElementById('headBar');

    window.addEventListener('scroll', () => {
        var headerContainer1Bottom = headerContainer1.offsetHeight;

        if (window.scrollY >= headerContainer1Bottom) {
            headBar.style.position = 'fixed';
            headBar.style.top = '0';

            headerContainer1.style.marginBottom = '80px';
        } else {
            headBar.style.position = 'relative';

            headerContainer1.style.marginBottom = '0px';
        }
    });
});
