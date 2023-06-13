window.onload = function () {
  const form = document.querySelector("form")

  form.onsubmit = function (event) {
    event.preventDefault();

    let voterInfo = document.getElementById("voter");
    voterInfo.setAttribute("class", "hidden");
    let nonVoter = document.getElementById("non-voter")
    nonVoter.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);

    
    if (age >= 18) {
      voterInfo.removeAttribute("class");
    } else {
      nonVoter.removeAttribute("class");
    }
  };
};