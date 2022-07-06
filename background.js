document.addEventListener('keydown', logKey);

function logKey(e) {
    if(e.keyCode==83){
        if(document.querySelector(".ytp-ad-skip-button")) document.querySelector(".ytp-ad-skip-button").click();
        if(document.querySelector('a[class="ytp-title-link yt-uix-sessionlink ytp-title-fullerscreen-link"]').innerHTML){
            if(document.querySelector('a[class="ytp-title-link yt-uix-sessionlink ytp-title-fullerscreen-link"]').innerHTML !== document.querySelector('h1 yt-formatted-string[class="style-scope ytd-watch-metadata"]').innerHTML){
                document.querySelector("video").currentTime = document.querySelector("video").duration;
                console.log("skipped");
                if(document.querySelector(".ytp-ad-skip-button")) document.querySelector(".ytp-ad-skip-button").click();
            }
        }
    }
}