var scrollY = 0;
var scrollPos = 0;

export default function checkIntersection(){
    let targets = document.getElementsByClassName('intersect');
    targets = [...targets];

    let options = {
        threshold: 0.5
    }
    
    let observer = new IntersectionObserver(handleIntersect,options);
    targets.forEach(target => {
        observer.observe(target);
        
    });
}

function handleIntersect(ele){
    if(ele[0].isIntersecting && scrollY == 0){
        ele[0].target.classList.add('intersecting');
    }

    else if(scrollY === 1 && !ele[0].isIntersecting){
        ele[0].target.classList.remove('intersecting');
    }

    else if(ele[0].target.id === 'skill-set'){
        ele[0].target.classList.add('intersecting');

    }
}



window.onscroll = (e) => {
    if((document.body.getBoundingClientRect()).top > scrollPos) scrollY = 1;
    else scrollY = 0;
    scrollPos = (document.body.getBoundingClientRect()).top;
}