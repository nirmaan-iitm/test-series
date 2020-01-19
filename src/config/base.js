function basefunc(x){
    var base
    console.log(window.location.hostname)
    if(window.location.hostname === "nirmaan-iitm.github.io"){
        base = "/test-series".concat("/",x)
    }
    else{
        base  = "".concat('/',x)
    }
    console.log(base)
    return base
}

export default basefunc