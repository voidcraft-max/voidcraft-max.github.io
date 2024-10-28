$(document).ready(function() {
    function updateDarkMode() {
        var isChecked = $("#darkModeCheckbox").is(":checked");
        if (isChecked) {
            const body = document.querySelector('body');
            //body.style.backgroundColor = '#141414';
            //body.style.color = '#f1f1f1';
            body.style = 'background: linear-gradient(39deg, rgba(0,0,0,1) 0%, rgba(128,3,251,1) 20%, rgba(107,6,255,1) 40%, rgba(88,31,255,1) 60%, rgba(43,0,255,1) 80%, rgba(0,0,0,1) 100%);';
            // linear-gradient(39deg, rgba(0,0,0,1) 0%, rgba(128,3,251,1) 20%, rgba(107,6,255,1) 40%, rgba(88,31,255,1) 60%, rgba(43,0,255,1) 80%, rgba(0,0,0,1) 100%);

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
            //body.style.backgroundColor = '#f1f1f1';
            //body.style.color = 'black';
            body.style = 'background: linear-gradient(100deg, rgba(0,0,0,1) 0%, rgba(128,3,251,1) 20%, rgba(107,6,255,1) 40%, rgba(88,31,255,1) 60%, rgba(43,0,255,1) 80%, rgba(0,0,0,1) 100%);';
            // linear-gradient(39deg, rgba(0,0,0,1) 0%, rgba(128,3,251,1) 20%, rgba(107,6,255,1) 40%, rgba(88,31,255,1) 60%, rgba(43,0,255,1) 80%, rgba(0,0,0,1) 100%);

            const paragraphs = document.querySelectorAll('p');
            paragraphs.forEach(function(p) {
                p.style.color = 'black';
            });

            const headTwo = document.querySelector('h2');
            headTwo.style.color = 'black';

            const head = document.querySelector('h1');
            head.style.color = 'black';
            
            const foot = document.querySelector('.footer');
            foot.style.backgroundColor = '#ddd';

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
