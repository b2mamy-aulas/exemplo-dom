const section = document.querySelector('section');

const inserirDados = (items) => {
  for(let i = 0; i < items.length; i++){
    const item = items[i];

    const div = document.createElement('div');
    div.classList.add('courseContainer');

    const imageFrame = document.createElement('div');
    imageFrame.style.backgroundImage = `url(${item.image})`;
    imageFrame.classList.add('image-frame')

    const title = document.createElement('h2');
    title.innerHTML = item.title;
    title.classList.add('courseTitle');

    const description = document.createElement('p');
    description.innerHTML = item.description;
    description.classList.add('description');

    imageFrame.appendChild(title);
    imageFrame.appendChild(description);
    div.appendChild(imageFrame);

    div.onclick = () => mostrarModal(div);

    section.appendChild(div);
  }
}

const mostrarModal = (div) => {
  const event = div;

  const container = document.querySelector('article');
  const modal = document.querySelector('.modal');

  const url = document.createElement('a');
  url.innerHTML = "clique no site do curso";
  url.href = event.url;
  url.setAttribute('target', '_blank');
  modal.appendChild(url);

  const button = document.createElement('button');
  button.innerHTML = "X";
  modal.appendChild(button);

  button.onclick = () => {
    esconderModal(modal);
    modal.innerHTML = "";
  }

  container.classList.remove('oculta');
  container.style.backgroundColor = "red";
  container.style.width = "200px";
  container.style.height = "200px";

  const esconderModal = () => {
    container.classList.add('oculta');
  }
};

inserirDados(data);
