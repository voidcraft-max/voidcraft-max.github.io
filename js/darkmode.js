$(document).ready(function() {
    function updateDarkMode() {
        var isChecked = $("#darkModeCheckbox").is(":checked");
        if (isChecked) {
            const body = document.querySelector('body');
            body.style.backgroundColor = '#141414';
            body.style.color = '#f1f1f1';
            body.style.backgroundImage= 'none';  
            const paragraphs = document.querySelectorAll('p');
            paragraphs.forEach(function(p) {
                p.style.color = '#f1f1f1';
            });
            const headTwo = document.querySelector('h2');
            headTwo.style.color = '#f1f1f1';
            const head = document.querySelector('h1');
            head.style.color = '#f1f1f1';
            head.classList.add('text-shadow');
            head.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
            
            const foot = document.querySelector('.footer');
            foot.style.backgroundColor = '#010101';
            const gitBtn = document.querySelector('.source-btn');
            gitBtn.style.backgroundColor = '#ff6847';
            
            const buttons = document.querySelectorAll('button');
            buttons.forEach(function(button) {
                button.style.backgroundColor = '#30d3d2';
            });
            const versionTexts = document.querySelectorAll('.version-text');
            versionTexts.forEach(function(vt) {
                vt.style.color = '#f1f1f1';
            });
            const dZone = document.querySelector('.danger-zone');
            dZone.style.color = '#ff6847';
            const dZoneText = document.querySelector('.modal');
            dZoneText.style.p.color = '#ff3c00';
        } else {
            const body = document.querySelector('body');
            body.style.backgroundColor = '#f1f1f1';
            body.style.color = 'black';
            body.style.backgroundImage= "url('/images/snow1.jpg')";  
            const paragraphs = document.querySelectorAll('p');
            paragraphs.forEach(function(p) {
                p.style.color = 'black';
            });
            const headTwo = document.querySelector('h2');
            headTwo.style.color = 'black';
            const head = document.querySelector('h1');
            head.style.color = 'black';
            head.classList.remove('text-shadow');
            head.style.textShadow = '-0px 0 white, 0 0px white, 0px 0 white, 0 -0px white';
            
            const foot = document.querySelector('.footer');
            foot.style.backgroundColor = '#8cbfbf';
            foot.style.color = '#ffffff';
            const gitBtn = document.querySelector('.source-btn');
            gitBtn.style.backgroundColor = '#0095ff';
            const buttons = document.querySelectorAll('button');
            buttons.forEach(function(button) {
                button.style.backgroundColor = '#0095ff';
            });
            const versionTexts = document.querySelectorAll('.version-text');
            versionTexts.forEach(function(vt) {
                vt.style.color = 'black';
            });
            const dZone = document.querySelector('.danger-zone');
            dZone.style.color = '#010101';
            const dZoneText = document.querySelector('.modal');
            dZoneText.style.p.color = '#010101';
        }
    }
    $("#darkModeCheckbox").on("change", function() {
        updateDarkMode();
    });
    updateDarkMode();
});
