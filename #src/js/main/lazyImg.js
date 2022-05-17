window.onload = () => {
    const options = {
        // родитель целевого элемента - область просмотра
        root: null,
        // без отступов
        rootMargin: '0px',
        // процент пересечения - половина изображения
        threshold: 0.5
    }

    // создаем наблюдатель
    const observer = new IntersectionObserver((entries, observer) => {
        // для каждой записи-целевого элемента
        entries.forEach(entry => {
            // если элемент является наблюдаемым
            if (entry.isIntersecting) {
                const lazyImg = entry.target
                observer.unobserve(lazyImg)
            }
        })
    }, options)

    // с помощью цикла следим за всеми img на странице
    const arr = document.querySelectorAll('img')
    arr.forEach(i => {
        observer.observe(i)
    })


    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }


    let observer2 = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');

    for (let elm of elements) {
        observer2.observe(elm);
    }

}