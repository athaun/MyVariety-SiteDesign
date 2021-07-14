
function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}


let navbar = `
<!-- Top navbar navigation thing -->
<div class="navbar">
    <div class="container flexbox">
        <div class="logo">
            <h1><a href="${lp}/index.html">My<span>Variety</span></a></h1>
        </div>
        <nav>
            <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#" target="_blank">Contact Us</a></li>
            </ul>
        </nav>
    </div>
</div>
`;

add("body", navbar);
