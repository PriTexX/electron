const { ipcRenderer, algorithms } = window.modules;

(function closeButton() {
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    ipcRenderer.send("close-window", "mainWin");
  });

  const minimizeBtn = document.querySelector(".minimize-btn");
  minimizeBtn.addEventListener("click", () => {
    ipcRenderer.send("minimize-window", "mainWin");
  });

  minimizeBtn.addEventListener("mouseenter", () => {
    minimizeBtn.classList.add("hover");
  });

  minimizeBtn.addEventListener("mouseleave", () => {
    minimizeBtn.classList.remove("hover");
  });
})();
(function taskbar() {
  let currentActive = document.querySelector(".active");
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((element) => {
    element.addEventListener("click", () => {
      currentActive.classList.remove("active");
      element.classList.add("active");
      currentActive = element;
    });
  });
})();
function tooltip() {
  const tooltip = document.querySelector(".tooltip__tip");
  tooltip.addEventListener("mouseenter", () => {
    const tooltipBar = tooltip.querySelector(".tip");
    const handler = () => {
      tooltipBar.classList.add("show-tip");
      setTimeout(() => {
        tooltipBar.classList.add("show-tip2");
      }, 1);
    };
    let i = setTimeout(handler, 400);
    tooltip.onmouseleave = () => {
      clearTimeout(i);
      tooltipBar.classList.remove("show-tip2");
      setTimeout(() => {
        tooltipBar.classList.remove("show-tip");
      }, 500);
      tooltip.onmouseleave = null;
    };
  });
}
function fileChange() {
  const fileSelectBtn = document.querySelector(".file__input-btn");
  const fileInput = document.querySelector(".file__input");
  const inputText = document.querySelector(".file__input-text");
  fileSelectBtn.addEventListener("click", () => {
    fileInput.click();
  });
  fileInput.addEventListener("change", () => {
    if (fileInput.value) {
      inputText.innerText = fileInput.value.match(
        /[\/\\]([\w\d\s\.\-(\)]+)$/
      )[1];
    } else {
      inputText.innerText = "Файл не выбран";
    }
  });
}
function clearButton() {
  const clearBtn = document.querySelector(".clear-btn");
  const answerField = document.querySelector(".answer-field");
  const fileInputText = document.querySelector(".file__input-text");
  const input = document.querySelector(".value__input");

  clearBtn.addEventListener("click", () => {
    answerField.innerText = "";
    fileInputText.innerHTML = "Файл не выбран";
    input.value = "";
  });
}
(function submitButton() {
  function readFile(object, type, args) {
    let file = object.files[0];
    let reader = new FileReader();
    reader.onload = function () {
      answer = algorithms[type](reader.result, ...args);
      const answerField = document.querySelector(".answer-field");
      answerField.innerText = answer;
    };
    reader.readAsText(file);
  }
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", () => {
    let seq = document.querySelector(".value__input").value;
    if (seq == "XXX") {
      const answerField = document.querySelector(".answer-field");
      let text =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quasi suscipit nobis nam autem voluptatum consequatur. Sint, asperiores itaque, laudantium quas eos fugit unde illo obcaecati temporibus earum ipsum ipsam, at in aliquam cum quo laboriosam quia maiores doloribus. Corrupti a cumque, eius accusamus placeat maxime consectetur aperiam commodi quasi quidem magni debitis nostrum inventore, quia doloribus laborum nisi, quibusdam rem repellendus facere possimus neque excepturi. Deserunt architecto, blanditiis, atque adipisci aspernatur dignissimos ea consectetur quisquam neque, at ab delectus? Possimus repellat quas hic, debitis ratione quibusdam itaque repudiandae, labore beatae animi, tenetur nobis vel praesentium ipsa? Distinctio esse neque dolore autem voluptatem maiores deleniti enim quasi, qui non cupiditate ea blanditiis temporibus asperiores iusto, delectus culpa iure commodi quo alias obcaecati. Repellat distinctio esse dolorem, facilis earum ipsa voluptas. Sed facere officiis cumque, ea assumenda saepe sit doloremque repudiandae, id mollitia praesentium quia optio ut voluptatibus eaque in sint possimus est molestiae eius. Deserunt ipsam repellendus, neque rerum sit, vitae iste corporis laboriosam a magni, illo harum hic doloribus perferendis id optio asperiores eius alias necessitatibus facere adipisci provident! Libero maxime earum odio facilis officia cum sequi exercitationem sunt incidunt aspernatur pariatur perferendis at porro, animi ipsa ad temporibus iusto rem repudiandae architecto voluptatem facere necessitatibus fuga? Similique, minima fugit assumenda ducimus facilis commodi impedit nisi quidem nam culpa pariatur aliquam ex recusandae soluta facere tempore iusto at quis. Autem aliquid accusantium expedita ea? Ipsam itaque amet doloremque deserunt vero adipisci labore expedita consequuntur? Numquam expedita mollitia iusto laboriosam iste corporis, dolorem cupiditate pariatur nihil similique molestiae sit, amet inventore quaerat unde praesentium nesciunt excepturi ad porro quas facere quis dolor consequatur! Culpa, eos! Voluptate corporis magni doloribus harum fugiat nostrum iure labore eligendi? Quia, id laudantium! Quasi excepturi id consequatur exercitationem porro optio, minus obcaecati quos repudiandae placeat recusandae eius ratione rem, quia aliquid cumque dolores quae, quidem illum officiis expedita sint quibusdam iure! Nam tempora rem, aut a culpa delectus, cumque totam magnam dolor ipsum blanditiis beatae odio ratione necessitatibus ipsa quis consequuntur officiis cum! Enim ducimus saepe repellendus officia ullam eos consequatur est assumenda tempora velit! Sed in, distinctio quasi ea voluptatum quidem sit pariatur minus reiciendis, nesciunt laborum officiis at nostrum laboriosam consequuntur rem doloremque voluptatem a quod possimus cum. Doloremque totam laudantium nam eaque omnis, dolor enim possimus repellat officia sit quod reiciendis odit ad, dolore consequuntur praesentium porro quas tenetur. A, incidunt? Voluptas voluptates dolore nulla aut consectetur necessitatibus aliquid quasi maiores enim iste. Sit cupiditate magni vero repellat veniam repellendus optio doloremque et dolorum exercitationem modi ea corporis error ab, eius impedit voluptatum, repudiandae suscipit molestiae dolores? Delectus aliquam a reprehenderit quidem at id provident corrupti molestiae eos voluptatem consequuntur amet possimus itaque nesciunt placeat ad voluptatum consectetur iure libero, similique eveniet fugit impedit adipisci? Molestias, cupiditate, suscipit dolorum deserunt vitae cumque labore temporibus placeat, voluptate officia quae? Blanditiis dolor sapiente repellendus, necessitatibus cupiditate nihil illo harum facilis animi, dignissimos perspiciatis quos minima! In itaque laboriosam inventore maxime optio velit tenetur veniam repellendus unde ipsa ullam, aliquam magnam officiis commodi illum sed at labore officia ex sequi accusamus. Impedit rem et, cumque eum reiciendis dolor incidunt nemo voluptatibus velit officiis repudiandae nam reprehenderit vel tenetur maxime delectus id ipsum iste. Possimus facere, corporis asperiores illo, eos impedit similique eum at quae dolor voluptas cumque cupiditate quibusdam aliquid, aperiam ipsa tempore quisquam nobis odio consectetur. Hic ipsam, ea deleniti eius voluptate adipisci minima voluptatum, pariatur facere tenetur, aspernatur quod est blanditiis amet eos voluptatibus vitae mollitia perferendis reiciendis dignissimos sunt obcaecati esse! Nostrum asperiores veniam, cupiditate harum omnis ullam quia ea velit nesciunt exercitationem eius voluptate quasi? Omnis natus veritatis nesciunt molestias, inventore laudantium harum aperiam impedit optio, officia ipsam deserunt numquam laboriosam sunt doloribus quidem at quam voluptas obcaecati fugiat ipsa, rerum delectus libero officiis. Incidunt dolore fuga cumque voluptatum nam adipisci, optio harum excepturi, perspiciatis alias at cum ratione rem fugiat id nostrum ad asperiores quas aliquid. Aperiam perferendis itaque blanditiis labore corporis ratione aspernatur dignissimos ex magnam architecto amet ipsam repudiandae incidunt delectus beatae reiciendis qui praesentium laboriosam, sed odit eum, facilis quae! Magnam vitae, aliquam, mollitia voluptatum laudantium omnis natus, dignissimos quibusdam quaerat maxime hic soluta porro dicta commodi.";
      answerField.innerText = text;
      return 0;
    }
    const type = document.querySelector(".select").value;
    const file = document.querySelector(".file__input");

    runFile({ file: file, type: type, args: [seq] });
  });

  function runFile(options = { file: null, type: null, args: [] }) {
    const { file, type, args } = options;
    readFile(file, type, args);
  }
})();

let htmlForm = `
      <div class="form__24">
        <div class="tooltip">
            <span>Выберите тип задания</span>
            <div class="tooltip__tip"> ?
                <span class='tip'>"1" - Определите длинну самой длинной последовательности вида: ABC<br>"2" - Максимальное кол-во идущих подряд символов<br>(два соседних различны)<br>
                "3" - Определите количество строк, в которых буква X встречается чаще, чем буква Y
                </span>
            </div>
        </div>
        <select class="select">
            <option value="1">1 тип</option>
            <option value="2">2 тип</option>
            <option value="3">3 тип</option>
        </select>
        <div class="input__name">Введите значение<br>(если нужно)</div>
        <input type="text" class="value__input">
        <div class="file__name">Выберите файл<br>(если нужно)</div>
        <div class="file-input-container">
            <input type="file" class="file__input" hidden='hidden'>
            <div class="file__input-btn">Выбрать файл</div>
        </div>
        <div class="file__input-text">Файл не выбран</div>
        <div class="fakee"></div>
    </div>
    `;

const tasksList = document.querySelector(".tasks-list");
tasksList.addEventListener("click", (event) => {
  const header = document.querySelector(".main-content__header");
  const num = event.target.innerText.slice(0, 2);
  const form = document.querySelector(".var__form-container");
  header.innerText = `${num} задание ЕГЭ`;
  if (num == "24") {
    form.innerHTML = htmlForm;
    fileChange();
    clearButton();
    tooltip();
  } else {
    form.innerHTML = "";
  }
});

window.onload = () => {
  const activeTask = document.querySelector(".active");
  const header = document.querySelector(".main-content__header");
  const form = document.querySelector(".var__form-container");
  const num = activeTask.innerText.slice(0, 2);
  header.innerText = `${num} задание ЕГЭ`;
  if (num == "24") {
    form.innerHTML = htmlForm;
    fileChange();
    clearButton();
    tooltip();
  } else {
    form.innerHTML = "";
  }
};
