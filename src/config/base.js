function basefunc(x){
    var base
    if (window.location.hostname === "localhost"){
        base = "".concat("/",x)
    }else{
        base = "/test-series".concat("/",x)
    }
    return base
}

export default basefunc