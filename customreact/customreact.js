function customRender(reactElement, container){
    
}

const reactElement ={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: ' CLick me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)