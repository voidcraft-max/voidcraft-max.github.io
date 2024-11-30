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
            
            const foot = document.querySelector('.footer');
            foot.style.backgroundColor = '#8cbfbf';
            foot.style.color = '#ffffff';
            const gitBtn = document.querySelector('.source-btn');
            gitBtn.style.backgroundColor = '#333333';
            const buttons = document.querySelectorAll('button');
            buttons.forEach(function(button) {
                button.style.backgroundColor = '#4caf50';
            });
            const versionTexts = document.querySelectorAll('.version-text');
            versionTexts.forEach(function(vt) {
                vt.style.color = 'black';
            });
        }
    }
    $("#darkModeCheckbox").on("change", function() {
        updateDarkMode();
    });
    updateDarkMode();
});
