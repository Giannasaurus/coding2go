const create = (element) => document.createElement(element);
const queryAll = (element) => document.querySelectorAll(element);

function renderItems() {
    const wrapper = create('div');
    const items = [];

    for (let i = 1; i <= 25; i++) {
        const item = create('p');
        item.innerText = `Item ${i}`;
        item.classList.add('item', 'item-style');
        items.push(item);
    }

    wrapper.append(...items);
    document.querySelector('body').appendChild(wrapper);

    return items;
}

const renderedItems = renderItems();

const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
        if (item.isIntersecting) {
            console.log(item.target);
            item.target.classList.add('show');
        } else {
            item.target.classList.remove('show');
        }
    })
}, {});

renderedItems.forEach((item) => observer.observe(item));