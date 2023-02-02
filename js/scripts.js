var tagmanegerarray = [
    { "domain": "baazigaronlinebook.art", "id": "GTM-NZGRD9D" },
    { "domain": "baazigaronlinebook.cc", "id": "GTM-5S3QZK6" },
    { "domain": "baazigaronlinebook.co.uk", "id": "GTM-PM4TXQG" },
    { "domain": "baazigaronlinebook.com", "id": "GTM-MMG5TR6" },
    { "domain": "baazigaronlinebook.digital", "id": "GTM-TDC4NVL" },
    { "domain": "baazigaronlinebook.info", "id": "GTM-W4FK6LC" },
    { "domain": "baazigaronlinebook.ink", "id": "GTM-T4GHLJX" },
    { "domain": "baazigaronlinebook.life", "id": "GTM-KSJDFDW" },
    { "domain": "baazigaronlinebook.live", "id": "GTM-TRPH94F" },
    { "domain": "baazigaronlinebook.me", "id": "GTM-57TZB4G" },

]



var my_awesome_script = document.createElement('script');
var loaction = window.location.origin;
console.log(location)
var newScript = document.createElement("script");



tagmanegerarray.forEach(element => {

    if (loaction.indexOf(element.domain) > -1) {
        my_awesome_script.setAttribute('src', (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', element.id));
    }

    document.head.appendChild(my_awesome_script);
});

// #################
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});