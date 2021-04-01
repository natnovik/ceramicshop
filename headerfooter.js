const header = document.querySelector(`.header`);
header.innerHTML = `
<div id="logo">
<a href="index.html">CeramicShop</a>
</div>
<div class="header-links">
<a href="./shop.html">Shop</a>
<a target="new" href="./bag.html">Bag</a>
<a href="./clients.html">Clients</a>
</div>`;

const footer = document.querySelector(`.footer`);
footer.innerHTML = `<div class="madeby">
<li><a target="new" href="#">© 2020 NatalliaNovik</a></li>
</div>
<ul class="zone_social_media">
<li class="social"><a target="new" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
</li>
<li class="social"><a target="new" href="https://twitter.com/home"><i class="fab fa-twitter"></i></a>
</li>
<li class="social"><a target="new" href="https://www.instagram.com/natgeo/?hl=fr"><i class="fab fa-instagram"></i></a></li>
<li class="social"><a target="new" href="https://www.pinterest.fr/"><i class="fab fa-pinterest"></i></a>
</li>
</ul>`;