// console.log('injected...')
// console.log(window.Vue)
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
