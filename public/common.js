if (console) {
    console.crx = function crx(...text) {
        console.log('%cChromeExtension：' + text.join(''), 'background:rgb(51, 103, 214);color:#FFF;padding:1px 4px;border-radius:4px;')
    }
}
