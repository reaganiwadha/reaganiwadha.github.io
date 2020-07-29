//github.com/reaganiwadha

let data

fetch('https://api.covid19api.com/total/country/indonesia/status/confirmed')
    .then(res => res.json())
    .then(data => {
        data = data[data.length - 1]
        updateData(data)
    })

// setInterval(function(){
    
// }, 10000)

function updateData(data){
    document.querySelector('#number').innerHTML = data.Cases.toLocaleString() + " Kasus"
    document.querySelector('#lastfetched').innerHTML = 'Data diambil secara langsung dari covid19api.com'
}