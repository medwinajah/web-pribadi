const navigasi=document.getElementById('navigasi');
// console.log(navigasi);

const hamburger=document.getElementById('label');

// const checkBox=document.getElementById('hamburger');
// console.log(hamburger);

const body=document.getElementById('body');


hamburger.addEventListener('click', function(e){
    // navigasi.style.display='flex'
    // checkBox.style.display='none';
    e.stopPropagation();
   navigasi.classList.toggle('activeNavigasi')

});

navigasi.addEventListener('click', (e)=>{
e.stopPropagation();


})

document.addEventListener('click', ()=>{
    navigasi.classList.remove('activeNavigasi');
})


// Home Start
const prof=["Mahasiswa Teknik Informatika","Junior Front End", "Junior Full Stack Developer","Programer","Mahasiswa Teknik Informatika"]


const tempatProfesi=document.getElementById('profesi');

let index=0;

function tampilkan(){
    index++;
    if(index< prof.length){
        const array=prof[index];
        tempatProfesi.textContent=`${array}`;
    }else{
        index=0;
    }
}

setInterval(tampilkan,2000);
// Home End



