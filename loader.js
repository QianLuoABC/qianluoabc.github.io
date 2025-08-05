// 加载动画控制脚本
window.addEventListener('load', function() {
    // 创建加载动画元素
    const loaderContainer = document.createElement('div');
    loaderContainer.className = 'loader-container';
    
    const loader = document.createElement('div');
    loader.className = 'loader';
    
    loaderContainer.appendChild(loader);
    document.body.appendChild(loaderContainer);
    
    // 页面加载完成后隐藏加载动画
    setTimeout(function() {
        loaderContainer.classList.add('hidden');
    }, 500);
});