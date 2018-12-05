chrome.storage.local.get({
    img: '',
}, store => {
    if (store.img) {
        document.querySelector('#bg').style.backgroundImage = `url(${store.img})`
    }
})
document.querySelector('#file').addEventListener('change', function(e) {
    let file = this.files[0]
    // console.log(file)
    if(file.size >= 4 * 1024 * 1024 || !/^image\/.+/.test(file.type)) {
        alert('大于5M的图片不能选噢.')
        return false
    }
    let reader = new FileReader()
    reader.onload = function(e) {
        try {
            chrome.storage.local.set({
                img: e.target.result,
            }, () => {
                document.querySelector('#bg').style.backgroundImage = `url(${e.target.result})`
            })
        } catch (err) {
            alert('保存图片失败了')
        }

    }
    reader.readAsDataURL(file)
})
