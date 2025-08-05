// 背景图片轮换脚本

// 图片数组 - 使用background文件夹中的所有图片
const backgroundImages = [
    'background/1.jpg',
    'background/2.jpg',
    'background/3.jpg',
    'background/4.jpg',
    'background/5.jpg',
    'background/6.jpg',
    'background/7.jpg',
    'background/8.jpg',
    'background/9.jpg',
    'background/10.jpg',
    'background/11.jpg',
    'background/12.jpg'
];

// 当前图片索引
let currentImageIndex = 0;

// 轮换间隔（毫秒）
const rotationInterval = 15000; // 15秒

// 设置背景图片
function setBackgroundImage() {
    document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.transition = 'background-image 2s ease-in-out';

    // 生成随机索引，确保与当前索引不同
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * backgroundImages.length);
    } while (newIndex === currentImageIndex);
    
    currentImageIndex = newIndex;
}

// 页面加载时设置初始背景
window.addEventListener('DOMContentLoaded', () => {
    // 初始加载时随机选择一张图片
    currentImageIndex = Math.floor(Math.random() * backgroundImages.length);
    setBackgroundImage();
    // 设置定时器，每隔15秒更换背景
    setInterval(setBackgroundImage, rotationInterval);
});