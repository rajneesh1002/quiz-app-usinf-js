const question = [
    {
        'que': 'which of the following is markeup langauge',
        'a': 'html',
        'b': 'css',
        'c': 'javascript',
        'd': 'react',
        'correct_ans': 'a'
    },
    {
        'que': 'what year javascript was launched',
        'a': '1996',
        'b': '1994',
        'c': '1995',
        'd': '1993',
        'correct_ans': 'a'
    }
]
let index =0;
let total=question.length;
let right = 0;
let wrong = 0;
const questionbox=document.getElementById("quesbox")
const optioninput= document.querySelectorAll('.options')
const loadquestions = ()=>{
    if(index ===total){
        return endquiz();
    }
    reset();
    const data=question[index]
    questionbox.innerText=` ${index+1}) ${data.que}`;
    optioninput[0].nextElementSibling.innerText=data.a;
    optioninput[1].nextElementSibling.innerText=data.b;
    optioninput[2].nextElementSibling.innerText=data.c;
    optioninput[3].nextElementSibling.innerText=data.d;
}
const submitquiz = ()=>{
    const data=question[index]
    const ans= getAnswer()
    if(ans === data.correct_ans){
        right++;
    }else{
        wrong++
    }
    index++;
    loadquestions();
    return;
}
const getAnswer =()=>{
    let answer;
    optioninput.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
            }
            
        }
    )
    return answer;
}
const reset=()=>{
    optioninput.forEach(
        (input) => {
            input.checked =false;
        }
    )
}
const endquiz=()=>{
    document.getElementById('box').innerHTML = `
        <h3> thank yu=ou for giving the quiz </h3>
        <h2> ${right}/${total} are correct </h2>
    `
}
loadquestions();