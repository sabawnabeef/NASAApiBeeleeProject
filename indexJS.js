const nasa = document.querySelector('search');
const dateAPOD = document.querySelector('#dateAPOD');
dateAPOD.addEventListener('change', getDataAPOD)
const libTEXT = document.querySelector('#libTEXT');
libTEXT.addEventListener('change', getDataTEXT);
const marsROV = document.querySelector('#rovDATE');
rovDATE.addEventListener('change', getDataROVER);



function getDataAPOD() {
    const dateAPOD = document.querySelector('#dateAPOD').value;
    console.log(dateAPOD);

    const urlAPOD = `https://api.nasa.gov/planetary/apod?api_key=Q2ERFdTGjdCgEeJXYumvdEBz7Cx32YWrAcwZwat5&date=${dateAPOD}`;

    fetch(urlAPOD)
    .then(res => res.json())
    .then(data => {
            console.log(data);
            console.log(data.title);
            console.log(data.date);
            console.log(data.hdurl);
            console.log(data.explanation);

            if(data.media_type === 'image'){
                apodTITLE.innerHTML = `<h4> ${data.title} </h4>`;
                apodDATE.innerHTML = `<p> ${data.date} </p>`;
                apodIMG.innerHTML = `<img src = ${data.hdurl}>`;
                apodEXP.innerHTML = `<p> ${data.explanation} </p>`;
                apodVID.innerHTML = ``;
                apodVID.innerHTML = ``;
            }else if (data.media_type === 'video'){
                apodVID.innerHTML = `<iframe src = ${data.url}> </iframe>`
                apodTITLE.innerHTML = `<h4> ${data.title} </h4>`;
                apodDATE.innerHTML = `<p> ${data.date} </p>`;
                apodEXP.innerHTML = `<p> ${data.explanation} </p>`;
                apodIMG.innerHTML = ``;
            }else{
                apodTITLE.innerHTML = `<h4>There is No Data! Please pick another DATE!</h4>`;
                apodDATE.innerHTML = `<p> </p>`;
                apodIMG.innerHTML = ``;
                apodEXP.innerHTML = `<p>  </p>`;
                apodVID.innerHTML = ``;
            }
        

    }).catch(err =>{

    });
}


function getDataTEXT(){
    const libTEXT = document.querySelector('#libTEXT').value;
    console.log(libTEXT);

    const urllibTEXT = `https://images-api.nasa.gov/search?q=${libTEXT}&media_type=image`;
    fetch(urllibTEXT)
    .then(res => res.json())
    .then(data => {
        if(data.collection.metadata.total_hits === 0){
            console.log('No Data!');
            textTITLE1.innerHTML = `<h4> No Data!</h4>`;
            textTITLE2.innerHTML = `<h4>  </h4>`;
            textTITLE3.innerHTML = `<h4>  </h4>`;
            textIMAGE1.innerHTML = ``;
            textIMAGE2.innerHTML = ``;
            textIMAGE3.innerHTML = ``;
            textDESC1.innerHTML = `<p>  </p>`;
            textDESC2.innerHTML = `<p> </p>`;
            textDESC3.innerHTML = `<p> </p>`;
        } else{

            if(data.collection.metadata.total_hits >= 3){
                textTITLE1.innerHTML = `<h4> ${data.collection.items[0].data[0].title} </h4>`;
                textTITLE2.innerHTML = `<h4> ${data.collection.items[1].data[0].title} </h4>`;
                textTITLE3.innerHTML = `<h4> ${data.collection.items[2].data[0].title} </h4>`;
                textIMAGE1.innerHTML = `<img src = ${data.collection.items[0].links[0].href}>`;
                textIMAGE2.innerHTML = `<img src = ${data.collection.items[1].links[0].href}>`;
                textIMAGE3.innerHTML = `<img src = ${data.collection.items[2].links[0].href}>`;
                textDESC1.innerHTML = `<p> ${data.collection.items[0].data[0].description} </p>`;
                textDESC2.innerHTML = `<p> ${data.collection.items[1].data[0].description} </p>`;
                textDESC3.innerHTML = `<p> ${data.collection.items[2].data[0].description} </p>`;
                console.log(data.collection.items[0].data[0].description);
                console.log(data.collection.items[0].links[0].href);
                console.log(data.collection.items[1].links[0].href);
                console.log(data.collection.items[2].links[0].href);
            }else if(data.collection.metadata.total_hits >= 2){
                textTITLE1.innerHTML = `<h4> ${data.collection.items[0].data[0].title} </h4>`;
                textTITLE2.innerHTML = `<h4> ${data.collection.items[1].data[0].title} </h4>`;
                textIMAGE1.innerHTML = `<img src = ${data.collection.items[0].links[0].href}>`;
                textIMAGE2.innerHTML = `<img src = ${data.collection.items[1].links[0].href}>`;
                textDESC1.innerHTML = `<p> ${data.collection.items[0].data[0].description} </p>`;
                textDESC2.innerHTML = `<p> ${data.collection.items[1].data[0].description} </p>`;

                textTITLE3.innerHTML = ``;  
                textIMAGE3.innerHTML = ``;
                textDESC3.innerHTML = ``;

            }else{
                textTITLE1.innerHTML = `<h4> ${data.collection.items[0].data[0].title} </h4>`;
                textIMAGE1.innerHTML = `<img src = ${data.collection.items[0].links[0].href}>`;
                textDESC1.innerHTML = `<p> ${data.collection.items[0].data[0].description} </p>`;
                
                textTITLE2.innerHTML = ``;  
                textIMAGE2.innerHTML = ``;
                textDESC2.innerHTML = ``;
                textTITLE3.innerHTML = ``;  
                textIMAGE3.innerHTML = ``;
                textDESC3.innerHTML = ``;
            }
        console.log(data);
        console.log(data.collection.items[0].data[0].title);
        console.log(data.collection.items[0].href);
        textTITLE1.innerHTML = `<h4> ${data.collection.items[0].data[0].title} </h4>`;
        textTITLE2.innerHTML = `<h4> ${data.collection.items[1].data[0].title} </h4>`;
        textTITLE3.innerHTML = `<h4> ${data.collection.items[2].data[0].title} </h4>`;
        textIMAGE1.innerHTML = `<img src = ${data.collection.items[0].links[0].href}>`;
        textIMAGE2.innerHTML = `<img src = ${data.collection.items[1].links[0].href}>`;
        textIMAGE3.innerHTML = `<img src = ${data.collection.items[2].links[0].href}>`;
        textDESC1.innerHTML = `<p> ${data.collection.items[0].data[0].description} </p>`;
        textDESC2.innerHTML = `<p> ${data.collection.items[1].data[0].description} </p>`;
        textDESC3.innerHTML = `<p> ${data.collection.items[2].data[0].description} </p>`;
        console.log(data.collection.items[0].data[0].description);
        console.log(data.collection.items[0].links[0].href);
        console.log(data.collection.items[1].links[0].href);
        console.log(data.collection.items[2].links[0].href);
        }
        
        
    }).catch(err => {
        console.log(err);
    });

}

function getDataROVER(){
    const rovDATE = document.querySelector('#rovDATE').value;
    console.log(rovDATE);
    
    const rovURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${rovDATE}&api_key=TW2gKVuRv5p91L6HbaZ5cnLbH9vhqB1ECZgBO0bP`;
    fetch(rovURL)
    .then(res => res.json())
    .then( data => {

        if(data.photos.length >= 1){
            console.log(data);
            console.log(data.photos[0].img_src);
            console.log(data.photos[0].rover.name);
            console.log(data.photos[0].rover.status);
            console.log(data.photos[0].rover.landing_date);
            console.log(data.photos[0].rover.launch_date);

            rovTITLE.innerHTML = `<h4>NAME: ${data.photos[0].rover.name}</h4>`;
            rovSTATS.innerHTML = `<p>STATUS: ${data.photos[0].rover.status}</p>`;
            rovLAND.innerHTML = `<p>STATUS: ${data.photos[0].rover.landing_date}</p>`;
            rovLAUNCH.innerHTML = `<p>STATUS: ${data.photos[0].rover.launch_date}</p>`;
            rovIMG.innerHTML = `<img src = "${data.photos[0].img_src}">`;
        }else{
            rovTITLE.innerHTML = `<h4>There is no Data! Please pick another Date.</h4>`;
            rovSTATS.innerHTML = `<p></p>`;
            rovLAND.innerHTML = `<p></p>`;
            rovLAUNCH.innerHTML = `<p></p>`;
            rovIMG.innerHTML = ``;
        }
        
    })
    .catch(err =>{
        console.log(err);
    })
}


const tick = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    time.innerHTML = `<a>${h} : ${m}: ${s}</a>`;
    console.log(h, m, s)


};

setInterval(tick, 1000);
const time = document.querySelector('#navTIME');
