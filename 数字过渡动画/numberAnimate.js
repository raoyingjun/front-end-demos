// window.numberAnimate = function (options) {
//     let { from, to, progress, complete } = options
//     let diff = from > to ? -1 : 1
//     function cb() {
//         progress(from)
//         if (from === to) return complete()
//         from += diff
//         requestAnimationFrame(cb)
//     }
//     cb()
// }
window.numberAnimate = function (options) {
    let { from, to, progress, complete } = options
    function cb() {
        progress(from)
        if (from === to) return complete()
        let step = (to - from) / 20
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        from += step
        requestAnimationFrame(cb)
    }
    cb()
}