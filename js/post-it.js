function test(words) {
    var n = words.split(" ");
    return n[n.length - 1];

}




const post = document.querySelectorAll('.post-it');


const rotateCss = [
    // style="transform: rotate(2deg) translate(-20px, 0);"
    '-4deg',
    '-3deg',
    '-2deg',
    '0deg',
    '2deg',
    '3deg',
    '4deg',
];

const translateCss = [
    // style="transform: rotate(2deg) translate(-20px, 0);"
    '-15px',
    '-10px',
    '-5px',
    '0px',
    '5px',
    '10px',
    '15px',
];

let ran_rotateCss = '';
let ran_translateCss = '';



// let words = 'lorem vsfvsd vdzg s f g dfgfdsg';
// let x = test(words);
// console.log(x);

post.forEach(element => {

    //while(ran_translateCss==ran_translateCss_prev){
    let ran_rotateCss = Math.floor(Math.random() * rotateCss.length);
    let ran_translateCss = Math.floor(Math.random() * translateCss.length);
    //     styleCurrent = styles[random];
    //     styleCurrent = styles[random];
    //}
    //ran_translateCss_prev = ran_translateCss;
    // element.classList.add(styleCurrent);
    // style="transform: rotate(2deg) translate(-20px, 0);"

    element.style.transform += "rotate("+ran_rotateCss+"deg)";
    element.style.transform += "translate("+ran_translateCss+", 0)";

    let tag = test(element.innerHTML);
    console.log(ran_translateCss);
    element.classList.add('post-'+tag);

    // console.log(test(element));
});

