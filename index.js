let rulesBtn = document.getElementById('rules-btn')
let modal = document.getElementById('rules-wrapper')
let modalOverlay = document.getElementById('rules-overlay')
let closeBtn = document.getElementById('close-btn')

// rules modal
rulesBtn.addEventListener("click", function() {
    modalOverlay.classList.toggle('closed')
    modal.classList.toggle('closed')

})
closeBtn.addEventListener("click", function() {
    modalOverlay.classList.toggle('closed')
    modal.classList.toggle('closed')
})

