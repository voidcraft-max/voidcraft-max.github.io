function addGoogleAnalyticsTags() {
    var currentDomain = window.location.hostname;
    var trackingId;

    switch (currentDomain) {
        case "eaglercraftx1-8.github.io":
            // GitHub Pages Analytics
            trackingId = "G-C44R8LD9MC";
            break;
        case "eaglercraftx1-8.netlify.app":
            // Netlify Analytics
            trackingId = "G-0R2ZXFSYVT";
            break;
        case "eaglercraftx1-8.onrender.com":
            // Render Analytics
            trackingId = "G-MND1TVBSXV";
            break;
        case "client1.eaglercraft.win":
            // GitHub Pages / Client 1
            trackingId = "G-SGELV1H17J";
            break;
        default:
            // Fallback Analytics
            trackingId = "G-81F615LDEZ";
    }

    if (trackingId) {
        var analyticsScript = document.createElement('script');
        analyticsScript.async = true;
        analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        document.head.appendChild(analyticsScript);

        var scriptContent = document.createElement('script');
        scriptContent.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('
