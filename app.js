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
    window.open('https://chiurocky.github.io/asset-dash/', '_blank');
})

document.querySelector('.allies').addEventListener('click', () => {
    window.open('./prj/allies.html', '_blank');
})

// PROJECTS DETAILS

// document.querySelector('.rc-icon').addEventListener('click', () => {
//     window.open('https://chiurocky.github.io/portfolio/', '');
// })

// const rcIcons = document.querySelectorAll('.rc-icon');
// rcIcons.forEach(i => {
//     i.addEventListener('click', () => {
//         window.open('https://chiurocky.github.io/portfolio/', '');
//     })
// })

document.querySelector('.maze').addEventListener('click', () => {
    window.open('./prj/maze.html', '_blank');
})

document.querySelector('.instapaper').addEventListener('click', () => {
    window.open('./prj/instapaper.html', '_blank');
})

document.querySelector('.cw').addEventListener('click', () => {
    window.open('./prj/cw.html', '_blank');
})

document.querySelector('.alibaba').addEventListener('click', () => {
    window.open('./prj/alibaba', '_blank');
})

document.querySelector('.alibaba').addEventListener('click', () => {
    window.open('./prj/allies.html', '_blank');
})

document.querySelector('.mealpal').addEventListener('click', () => {
    window.open('./prj/mealpal.html', '_blank');
})

// document.querySelectorAll('.dribbble').addEventListener('click', () => {
//     window.open('https://dribbble.com/chiurocky', '_blank');
// })

const dribz = document.querySelectorAll('.dribbble');
dribz.forEach(d => {
    d.addEventListener('click', () => {
        window.open('https://dribbble.com/chiurocky', '_blank');
    })
})

document.querySelector('.blender').addEventListener('click', () => {
    window.open('./prj/blender-sculpt.html', '_blank');
})
