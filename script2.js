function toggleMode() {
       
    let html = document.documentElement

    if(html.classList.contains("root")) {
        html.classList.remove("sakura")
        html.classList.remove("sasuk")
        html.classList.remove("kakashi")
    } else {
        html.classList.add("root")
    }
}

function toggleMode1() {
    let html = document.documentElement

    if(html.classList.contains("sakura")) {
        html.classList.remove("sakura")
        html.classList.remove("sasuk")
        html.classList.remove("kakashi")
    } else {
        html.classList.add("sakura")
    }
}

function toggleMode2() {
    let html = document.documentElement

    if(html.classList.contains("sasuk")) {
        html.classList.remove("sasuk")
        html.classList.remove("kakashi")
        html.classList.remove("sakura")
    } else {
        html.classList.add("sasuk")
    }
}

function toggleMode3() {
    let html = document.documentElement

    if(html.classList.contains("kakashi")) {
        html.classList.remove("kakashi")
        html.classList.remove("sakura")
        html.classList.remove("sasuk")
    } else {
        html.classList.add("kakashi")
    }
}