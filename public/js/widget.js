(function () {
    const id = document.querySelector("#script").getAttribute("data-id");

    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", `http://localhost:3000/use-third-site?id=${id}`);
    ifrm.style.height = "480px";
    ifrm.classList.add("col-md-6")
    document.body.appendChild(ifrm);
})();