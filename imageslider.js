const image_array=['a.jpg','b.jpeg','c.jpeg','de.jpeg','e.jpeg','r.jpeg','s.jpg','sa.jpg','su.jpeg']
let array_length=image_array.length
let i=0
let set=setInterval(slider,5000)

function slider(){
    i++
    i=i%array_length
    // i=0%8=0
    // 1%8=1
    // 2%8=2
    // 3%8=3
    // 4%8=4
    // 5%8=5
    // 6%8=6
    // 7%8=7
    // 8%8=0
    
    document.getElementById('image').src=`Image/${image_array[i]}`
}
function next(){
    i++
    i=i%array_length
    document.getElementById('image').src=`Image/${image_array[i]}`

}
function prev(){
    i--
    if(i<0){
        i=array_length-1  //9-1=8
    }
    document.getElementById('image').src=`Image/${image_array[i]}`
}
function stops(){
    clearInterval(set)
}
function starts(){
    set=setInterval(slider,5000)
}