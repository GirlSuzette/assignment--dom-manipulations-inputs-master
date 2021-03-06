document
  .querySelector("#reset-field-btn")
  .addEventListener("click", function () {
    // TASK #1
    var deleteInput = document.querySelector("#reset-field input");
    deleteInput.value = "";
  });

document
  .querySelector("#validate-field-btn")
  .addEventListener("click", function () {
    // TASK #2
    var text = document.querySelector("#validate-field input");
    var validate = text.value;
    var sms = document.querySelector(".flash-message");
    if (validate.length < 6) {
      sms.textContent = "input not long enough";
      sms.classList.add("invalid")
      sms.classList.remove("valid")

    } else if (validate.length >= 6) {
      sms.innerHTML = "Field Valid";
      sms.classList.add("valid")
      sms.classList.remove("invalid")
    }
  });

document
  .querySelector("#calculate-items-btn")
  .addEventListener("click", function () {
    // TASK #3
    var sum = 0;
    var inputs = document.querySelectorAll(".item-input")
    inputs.forEach(function (list) {
      if (list.checked === true) {
        var subTotal = Math.floor(list.value)
        sum += subTotal
      }
    });
    document.querySelector('.sum-total').textContent = "$" + sum;
  });

document
  .querySelector("#select-to-show-more-btn")
  .addEventListener("click", function () {
    // TASK #4
    var carsModel = document.querySelectorAll('.selection');
    var content = carsModel[0].options[carsModel[0].selectedIndex];
    img = (content.dataset.img)
    document.querySelector(".model").textContent = content.value;
    document.querySelector(".msrp").textContent = content.dataset.msrp;
    document.querySelector(".mpg").textContent = content.dataset.mpg;
    document.querySelector(".edmunds").textContent = content.dataset.edmunds;


    var imgBox = document.querySelector(".img-box img");
    if (imgBox) {
      imgBox.setAttribute("src", "./images/" + img);
    } else {
      parent.innerHTML = '';
      var image = document.createElement("img");
      image.setAttribute("src", "./images/" + img);
      var imageParent = document.querySelector(".img-box");
      imageParent.appendChild(image);
    }

  });