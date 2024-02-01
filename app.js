const themeToggleElem = document.querySelector('.theme-switcher');
const toggleElem = document.querySelector('.toggle');

function toggleHandler() {
    const lightIcon = themeToggleElem.querySelectorAll('.light-icon path');
    const darkIcon = themeToggleElem.querySelector('.dark-icon path');
    const l1 = document.querySelector('.l1');

    if (document.body.classList.contains('dark')) {
        toggleElem.classList.remove('slideRight');
        toggleElem.classList.add('slideLeft');
        darkIcon.setAttribute('fill', '#9F9F9F');
        lightIcon.forEach(p => p.setAttribute('fill', '#FF7F48'));
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        l1.style.overflow = 'visible';
    } else {
        toggleElem.classList.remove('slideLeft');
        toggleElem.classList.add('slideRight');
        darkIcon.setAttribute('fill', '#f7bc1b');
        lightIcon.forEach(p => p.setAttribute('fill', '#9F9F9F'));
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        l1.style.overflow = 'hidden';
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

document.querySelector('.cw-2').addEventListener('click', () => {
    // window.location = 'https://chiurocky.github.io/allies-proto/';
    window.open('https://chiurocky.github.io/cw-proto-mobile/', '');
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

document.querySelector('.cw-desktop').addEventListener('click', () => {
    window.location = './prj/cw';
    // window.open('./prj/cw', '');
})

document.querySelector('.alibaba').addEventListener('click', () => {
    window.location = './prj/alibaba';
    // window.open('./prj/alibaba', '');
})

document.querySelector('.allies').addEventListener('click', () => {
    window.location = './prj/allies';
    // window.open('./prj/allies', '');
})

document.querySelector('.chase-pay').addEventListener('click', () => {
    window.open('https://www.vox.com/2015/10/26/11620042/chase-announces-chase-pay-its-own-digital-wallet', '');
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


// document.querySelector('.blender').addEventListener('click', () => {
//     window.location = './prj/blender-sculpt';
//     // window.open('./prj/blender-sculpt.html', '_blank');
// })

// SURPRISE 

const linksArr = [
    'https://nevalalee.wordpress.com/2016/04/05/the-coco-chanel-rule/',
    'https://medium.com/designing-atlassian/when-design-becomes-a-cargo-cult-2bb9a50aad53',
    'https://www.themarginalian.org/2019/07/09/emma-willard/',
    'https://www.forbes.com/sites/forbesfinancecouncil/2017/10/19/on-building-a-faster-horse-design-thinking-for-disruption/?sh=433aa79149f9'
]


// // SEATTLE TIME

// function updateSeattleTime() {
//     // Create a new Date object with the current time
//     const currentTime = new Date();

//     // Set the time zone to Pacific Time (UTC-8)
//     currentTime.setHours(currentTime.getHours() - 8);

//     // Format the time as HH:mm:ss
//     const formattedTime = currentTime.toLocaleTimeString('en-US', { hour12: true });

//     // Display the formatted time on the webpage
//     document.getElementById('seattleTime').textContent = formattedTime;

//     console.log(formattedTime);
// }

// // Update the time every second (1000 milliseconds)
// setInterval(updateSeattleTime, 1000);

// // Initial call to set the time immediately when the page loads
// updateSeattleTime();