// Exercise 1
function findWords(){

    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
   
    let dog_names = ["Max","HAS","PuRple","dog"]
    console.log('test')
    


    for (let i = 0; i < dog_names.length; i++){
        if (dog_string.includes(dog_names[i])){
            console.log("Matched dog_name " + dog_names[i])
        
        } else {
            console.log('none')
        }

    }
}
findWords()

// Exercise 2
function replaceEvens(arr){
    let array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
    let itemtoreplacewith = "even index";
    console.log(array);
    array.splice(0,1, itemtoreplacewith);
    console.log(array);
    array.splice(2,1, itemtoreplacewith);
    console.log(array)
    array.splice(4,1, itemtoreplacewith);
    console.log(array)
}
replaceEvens()