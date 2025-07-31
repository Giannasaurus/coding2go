const create = (tag) => document.createElement(tag);

function renderItems() {
    const wrapper = create('div');
    let items = [];

    for (let i = 0; i < 100; i++) {
        const item = create('p');
        item.innerText = `Item ${i}`;
        items.push(item);
    }
}

renderItems();