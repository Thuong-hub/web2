document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("supportForm");
  const responseDiv = document.getElementById("response");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      responseDiv.innerHTML = "<p style='color: red;'>Vui lòng điền đầy đủ thông tin.</p>";
      return;
    }

    // Mô phỏng gửi yêu cầu thành công
    responseDiv.innerHTML = `<p style='color: green;'>Cảm ơn ${name}, chúng tôi sẽ phản hồi sớm nhất có thể qua email ${email}.</p>`;

    form.reset();
  });
});
