const section = document.querySelector('section');

const inserirDados = (items) => {
  for(let i = 0; i < items.length; i++){
    const item = items[i];

    const div = document.createElement('div');

    const imageFrame = document.createElement('div');
    imageFrame.style.backgroundImage = `url(${item.image})`;
    imageFrame.classList.add('image-frame')

    const title = document.createElement('h2');
    title.innerHTML = item.title;
    title.classList.add('curso');

    const description = document.createElement('p');
    description.innerHTML = item.description;


    div.appendChild(imageFrame);
    div.appendChild(title);
    div.appendChild(description);

    section.appendChild(div);
  }

}

inserirDados(data);
