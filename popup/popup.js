const $switch = $('#switch')
const $input = $('#host')
const $ss = $('#ss')

// $('#btn').addEventListener('click', () => {
//     console.log($input.value)
// })

$switch.addEventListener('change', () => {
    save()
})

let debounce = null

$input.addEventListener('input', () => {
    clearTimeout(debounce)
    debounce = setTimeout(() => {
        save()
    }, 500)
})

chrome.storage.sync.get({
    switch: true,
    host: 'dvb-dev.yaochufa.com',
}, store => {
    console.log('初始化host：', store.host)
    $switch.checked = store.switch
    $input.value = store.host
})

function $(selector) {
    return document.querySelector(selector)
}

let flag = null

function save() {
    chrome.storage.sync.set({
        switch: $switch.checked,
        host: $input.value,
    }, () => {
        $ss.style.display = 'block'
        clearTimeout(flag)
        flag = setTimeout(() => {
            $ss.style.display = 'none'
        }, 1000)
    })
}
