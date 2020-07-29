//github.com/reaganiwadha
//ini js bisa di import bisa engga, situs nya tetep work cuma data nya ga dinamis aja 😄

fetch('https://api.covid19api.com/total/country/indonesia/status/confirmed')
    .then(res => res.json())
    .then(data => {
        let lastData = data[data.length - 1]
        updateData(lastData)
    })

function updateData(data){
    document.querySelector('#number').innerHTML = data.Cases.toLocaleString() + " Kasus"
    document.querySelector('#lastfetched').innerHTML = 'Data diambil secara langsung dari covid19api.com'
}