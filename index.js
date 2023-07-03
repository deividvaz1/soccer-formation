  function escolherImagem(jogadorClass) {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = () => handleImageSelection(event, jogadorClass);
      input.click();
  }

  function handleImageSelection(event, jogadorClass) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function (event) {
          const imageDataURL = event.target.result;
          const jogadorDiv = document.querySelector(`.${jogadorClass}`);
          const addElement = jogadorDiv.querySelector('.add');
          const trashIcon = jogadorDiv.querySelector('.fa-trash');

          jogadorDiv.style.backgroundImage = `url('${imageDataURL}')`;
          jogadorDiv.style.backgroundSize = 'cover';
          jogadorDiv.style.backgroundPosition = 'center';
          addElement.style.display = 'none';
          trashIcon.style.display = 'block';

          localStorage.setItem(jogadorClass, imageDataURL);
      };

      reader.readAsDataURL(file);
  }

  function apagarImagem(jogadorClass) {
      const jogadorDiv = document.querySelector(`.${jogadorClass}`);
      const addElement = jogadorDiv.querySelector('.add');
      const trashIcon = jogadorDiv.querySelector('.fa-trash');

      jogadorDiv.style.backgroundImage = '';
      addElement.style.display = 'block';
      trashIcon.style.display = 'none';

      localStorage.removeItem(jogadorClass);
  }

  window.onload = function () {
      const jogadores = document.querySelectorAll('.jogador');
      jogadores.forEach((jogadorDiv) => {
          const jogadorClass = jogadorDiv.classList[1];
          const imageDataURL = localStorage.getItem(jogadorClass);

          if (imageDataURL) {
              const addElement = jogadorDiv.querySelector('.add');
              const trashIcon = jogadorDiv.querySelector('.fa-trash');

              jogadorDiv.style.backgroundImage = `url('${imageDataURL}')`;
              jogadorDiv.style.backgroundSize = 'cover';
              jogadorDiv.style.backgroundPosition = 'center';
              addElement.style.display = 'none';
              trashIcon.style.display = 'block';
          }
      });
  };
