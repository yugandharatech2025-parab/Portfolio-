(function () {
  var btn = document.getElementById("copy-mail");
  var email = "yugandhara.tech2025@gmail.com";

  if (!btn) return;

  function copyWithFallback() {
    var field = document.createElement("textarea");
    field.value = email;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.left = "-9999px";
    document.body.appendChild(field);
    field.select();
    var copied = false;
    try { copied = document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(field);
    return copied;
  }

  btn.addEventListener("click", function () {
    function showResult(copied) {
      btn.textContent = copied ? "Copied" : "Copy failed";
      setTimeout(function () { btn.textContent = "Copy"; }, 1600);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        navigator.clipboard.writeText(email).then(function () {
          showResult(true);
        }, function () {
          showResult(copyWithFallback());
        });
      } catch (e) {
        showResult(copyWithFallback());
      }
    } else {
      showResult(copyWithFallback());
    }
  });
  document.querySelectorAll('a[aria-disabled="true"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });
})();
