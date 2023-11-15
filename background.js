document.addEventListener('keydown', logKey);

function logKey(e) {
    if(e.keyCode==83){
        if(document.querySelector(`button[class="ytp-ad-skip-button-modern ytp-button"]`)) document.querySelector(`button[class="ytp-ad-skip-button-modern ytp-button"]`).click();
        if(document.querySelector('a[class="ytp-title-link yt-uix-sessionlink ytp-title-fullerscreen-link"]').innerHTML){
            while(document.querySelector('a[class="ytp-title-link yt-uix-sessionlink ytp-title-fullerscreen-link"]').innerHTML !== document.querySelector('h1 yt-formatted-string[class="style-scope ytd-watch-metadata"]').innerHTML){
                var f;
                document.querySelectorAll("video").forEach(e=>{if(e.currentTime > 0) f = e;});
                f.currentTime = f.duration;
                document.querySelector(`button[class="ytp-ad-skip-button-modern ytp-button"]`).click();
            }
        }
    }
}

function automaticSkip(){
    elementToObserve = document.querySelector('a[class="ytp-title-link yt-uix-sessionlink ytp-title-fullerscreen-link"]');

    observer = new MutationObserver(function(mutationsList, observer) {
        if(document.querySelector(`button[class="ytp-ad-skip-button-modern ytp-button"]`)) document.querySelector(`button[class="ytp-ad-skip-button-modern ytp-button"]`).click();
        if(document.querySelector('a[class="ytp-title-link yt-uix-sessionlink ytp-title-fullerscreen-link"]').innerHTML){
            while(document.querySelector('a[class="ytp-title-link yt-uix-sessionlink ytp-title-fullerscreen-link"]').innerHTML !== document.querySelector('h1 yt-formatted-string[class="style-scope ytd-watch-metadata"]').innerHTML){
                var f;
                document.querySelectorAll("video").forEach(e=>{if(e.currentTime > 0) f = e;});
                f.currentTime = f.duration;
                console.log("SKIPPED");
                document.querySelector(`button[class="ytp-ad-skip-button-modern ytp-button"]`).click();
            }
        }
    });
    
    observer.observe(elementToObserve, {characterData: false, childList: true, attributes: false});
}

automaticSkip();