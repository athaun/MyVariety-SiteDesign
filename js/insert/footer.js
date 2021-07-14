function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}

let footer = `
<!-- Footer -->
<footer class="footer">
    <div class="container grid">
        <div class="logo">
            <h1>My<span>Variety</span></h1>
            <p>Thanks to <a target="_blank" href="https://icons8.com">Icons8</a> for the icon set used in this page.</p>
        </div>
        <nav>
            <ul class="flexbox">
                <li><a href="#" target="_blank">Jobs</a></li>
                <li><a href="#" target="_blank">About Us</a></li>
                <li><a href="#" target="_blank">Privacy Policy</a></li>
            </ul>
        </nav>
        <br>
    </div>
</footer>
`;

// <li><label class="switch tooltip">                
//     <input type="checkbox" id="dark" onclick="toggleDark()">
//     <span class="slider round"></span>
//     <span class="tooltiptext">Dark Mode</span>
// </li></label>    

add("body", footer);



function toggleDark () {
    if (document.querySelector("#dark").checked) {
        add("head", `<link id="darkThemeImport" href="${lp}/css/darkTheme.css" rel="stylesheet" type="text/css">`);
        localStorage.setItem("darkreader", "enabled");
    } else {
        document.querySelector('#darkThemeImport').remove();
        localStorage.setItem("darkreader", "disabled");
    }
}

function checkDarkPreferences () {
    getBaseUrl();
    if (localStorage.getItem("darkreader") == "enabled") {
        add("head", `<link id="darkThemeImport" href="${lp}/css/darkTheme.css" rel="stylesheet" type="text/css">`);
        document.querySelector("#dark").checked = true;
        // console.log("User preference dark mode enabled");
    } else {
        // document.querySelector('#darkThemeImport').remove();
        // console.log("User preference dark mode disabled");
    }
}

window.onload = checkDarkPreferences;