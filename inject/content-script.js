console.crx('CRX===>')
// 向页面注入JS
function injectCustomJs(jsPath) {
    jsPath = jsPath || 'inject/inject.js'
    var temp = document.createElement('script')
    temp.setAttribute('type', 'text/javascript')
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath)
    temp.onload = function() {
        chrome.storage.sync.get({
            switch: true,
            host: 'dvb-dev.yaochufa.com',
        }, store => {
            console.crx('初始化switch：', store.switch)
            console.crx('初始化host：', store.host)
            window.postMessage({
                switch: store.switch,
                host: store.host,
            }, '*')
        })
    }
    document.head.appendChild(temp)
}
injectCustomJs()
