function toggleProjects(){
    var toggleProjects =
        document.getElementById("toggleProjects");      //go to the list of projects
    if(toggleProjects.style.display == 'none'){
        toggleProjects.style.display = 'block'
    }
    else{
        toggleProjects.style.display = 'none'
    }
}

function toggleMaterial(){
    var classMaterial = 
        document.getElementById("toggleMaterial");        //go to the list of material
    if(classMaterial.style.display == 'none'){
        classMaterial.style.display = 'block'
    }
    else{
        classMaterial.style.display = 'none'
    }
}
