if (window) {
    // console.log('injected...')
    // console.log(window.databus)
    window.addEventListener('message', e => {
        if (e.data && e.data.switch && e.data.host) {
        // if (e.data && e.data.switch && e.data.host && !location.search.includes('simData=1')) {
            console.log(e.data)
            // console.log(window)

            function openBypass(original_function) {
                return function(method, url, async) {
                    this.requestURL = url
                    this.requestURL = this.requestURL.replace('http://api-dev.yunkezan.com/', 'http://localhost:666/')
                    this.requestURL = this.requestURL.replace('http://queue-dev.yunkezan.com/', 'http://localhost:666/')
                    // console.log('***********===> ', this.requestURL)
                    return original_function.call(this, method, this.requestURL, async)
                }
            }
            XMLHttpRequest.prototype.open = openBypass(XMLHttpRequest.prototype.open)
        }
    })
    window.Vue.mixin({
        mounted() {
            drawLine()
        },
        updated() {
            drawLine()
        }
    })

    function drawLine() {
        return false
        document.querySelectorAll('*').forEach(function(a) {
            a.style.outline = '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16)
        })
    }
}
