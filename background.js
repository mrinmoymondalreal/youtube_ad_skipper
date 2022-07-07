document.addEventListener('keydown', logKey);

function logKey(e) {
    if(e.keyCode==83){
        if(document.querySelector(".ytp-ad-skip-button")) document.querySelector(".ytp-ad-skip-button").click();
        if(document.querySelector('a[class="ytp-title-link yt-uix-sessionlink ytp-title-fullerscreen-link"]').innerHTML){
            if(document.querySelector('a[class="ytp-title-link yt-uix-sessionlink ytp-title-fullerscreen-link"]').innerHTML !== document.querySelector('h1 yt-formatted-string[class="style-scope ytd-watch-metadata"]').innerHTML){
                var f;
                document.querySelectorAll("video").forEach(e=>{if(e.currentTime > 0) f = e;});
                f.currentTime = f.duration;
                document.querySelector(".ytp-ad-skip-button").click();
            }
        }
    }
}