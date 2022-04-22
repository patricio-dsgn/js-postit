const post = document.querySelectorAll('.post-it');


const styles = [
    'post-it-v1',
    'post-it-v2',
    'post-it-v3',
    'post-it-v4'
]




let styleCurrent = '';
let stylePrev = '';

post.forEach(element => {

    while(styleCurrent==stylePrev){
        const random = Math.floor(Math.random() * styles.length);
        styleCurrent = styles[random];
    }
    stylePrev = styleCurrent;
    element.classList.add(styleCurrent);
    // console.log(element);
});

