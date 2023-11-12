const themeToggleElem = document.querySelector('.theme-switcher');
const toggleElem = document.querySelector('.toggle');

function toggleHandler() {
    const lightIcon = themeToggleElem.querySelectorAll('.light-icon path');
    const darkIcon = themeToggleElem.querySelector('.dark-icon path');

    if (document.body.classList.contains('dark')) {
        toggleElem.classList.remove('slideRight');
        toggleElem.classList.add('slideLeft');
        darkIcon.setAttribute('fill', '#9F9F9F');
        lightIcon.forEach(p => p.setAttribute('fill', '#FF7F48'));
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    } else {
        toggleElem.classList.remove('slideLeft');
        toggleElem.classList.add('slideRight');
        darkIcon.setAttribute('fill', '#f7bc1b');
        lightIcon.forEach(p => p.setAttribute('fill', '#9F9F9F'));
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }
}

themeToggleElem.addEventListener('click', () => {
    toggleHandler();
    // document.body.classList.toggle('dark');
})

document.querySelector('.assetdash').addEventListener('click', () => {
    // window.location = 'https://chiurocky.github.io/asset-dash/';
    window.open('https://chiurocky.github.io/asset-dash/', '');
})

document.querySelector('.allies').addEventListener('click', () => {
    window.location = './prj/allies';
    // window.open('./prj/allies.html', '');
})

document.querySelector('.allies-2').addEventListener('click', () => {
    // window.location = 'https://chiurocky.github.io/allies-proto/';
    window.open('https://chiurocky.github.io/allies-proto/', '');
})

// PROJECTS DETAILS

// document.querySelector('.rc-icon').addEventListener('click', () => {
//     window.location('https://chiurocky.github.io/portfolio/', '');
// })

// const rcIcons = document.querySelectorAll('.rc-icon-btn');
// rcIcons.forEach(i => {
//     i.addEventListener('click', () => {
//         window.location = 'https://chiurocky.github.io/portfolio/';
//         // window.open('https://chiurocky.github.io/portfolio/', '');
//     })
// })

// document.querySelector('.maze').addEventListener('click', () => {
//     window.open('./prj/maze', '_blank');
// })

const mazez = document.querySelectorAll('.maze');
mazez.forEach(m => {
    m.addEventListener('click', () => {
        window.location = './prj/maze';
        // window.open('./prj/maze', '');
    })
})

document.querySelector('.instapaper').addEventListener('click', () => {
    window.location = './prj/instapaper';
    // window.open('./prj/instapaper', '');
})

document.querySelector('.cw').addEventListener('click', () => {
    window.location = './prj/cw';
    // window.open('./prj/cw', '');
})

document.querySelector('.alibaba').addEventListener('click', () => {
    window.location = './prj/alibaba';
    // window.open('./prj/alibaba', '');
})

document.querySelector('.alibaba').addEventListener('click', () => {
    window.location = './prj/allies';
    // window.open('./prj/allies', '');
})

// document.querySelector('.mealpal').addEventListener('click', () => {
//     window.open('./prj/mealpal', '_blank');
// })

const mealz = document.querySelectorAll('.mealpal');
mealz.forEach(m => {
    m.addEventListener('click', () => {
        window.location = './prj/mealpal';
        // window.open('./prj/mealpal', '');
    })
})

// document.querySelectorAll('.dribbble').addEventListener('click', () => {
//     window.open('https://dribbble.com/chiurocky', '_blank');
// })

const dribz = document.querySelectorAll('.dribbble');
dribz.forEach(d => {
    d.addEventListener('click', () => {
        // window.location = 'https://dribbble.com/chiurocky';
        window.open('https://dribbble.com/chiurocky', '');
    })
})

document.querySelector('.blender').addEventListener('click', () => {
    window.location = './prj/blender-sculpt';
    // window.open('./prj/blender-sculpt.html', '_blank');
})
