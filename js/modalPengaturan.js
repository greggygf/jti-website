
/** punya nya modal pengaturan */ 

function Coba() {
    var foto = document.getElementById("foto").value;
    var passwordLama = document.getElementById("passwordLama").value;
    var passwordBaru = document.getElementById("passwordBaru").value;
    var konfirmasiPassword = document.getElementById("konfirmasiPassword").value;
  
    if (
      foto == "" ||
      passwordLama == "" ||
      passwordBaru == "" ||
      konfirmasiPassword == ""
    ) {
      document.getElementById("Blank").innerHTML =
        "* Terdapat kolom yang belum diisi";
    } else if (
      foto != "" ||
      passwordLama != "" ||
      passwordBaru != "" ||
      konfirmasiPassword != ""
    ) {
      document.getElementById("Blank").innerHTML = "";
  
      if (konfirmasiPassword != passwordBaru) {
        document.getElementById("konfirmasipasswordSalah").innerHTML =
          "* Konfirmasi password tidak sesuai";
      } else if (konfirmasiPassword == passwordBaru) {
        document.getElementById("konfirmasipasswordSalah").innerHTML = "";
      }
    }
  }
  
  function reset_Blank() {
    var foto = document.getElementById("foto").value;
    var passwordLama = document.getElementById("passwordLama").value;
    var passwordBaru = document.getElementById("passwordBaru").value;
    var konfirmasiPassword = document.getElementById("konfirmasiPassword").value;
  
    if (
      foto != "" &&
      passwordLama != "" &&
      passwordBaru != "" &&
      konfirmasiPassword != ""
    ) {
      document.getElementById("Blank").innerHTML = "";
    }
  }
  
  function showFilesSize() {
    var input, file;
  
    input = document.getElementById("foto");
  
    file = input.files[0];
  
    if (file.size > 1000000) {
      document.getElementById("fotoSize").innerHTML = "* Ukuran melebihi 1 MB";
    } else if (file.size < 1000000) {
      document.getElementById("fotoSize").innerHTML = "";
    }
  }
  
  function reset_Size() {
    var input, file;
  
    input = document.getElementById("foto");
  
    file = input.files[0];
  
    if (file.size < 8000000) {
      document.getElementById("fotoSize").innerHTML = "";
    }
  }
  
  function reset_Check() {
    var input = document.getElementById("foto");
  
    var filePath = input.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  
    if (allowedExtensions.exec(filePath)) {
      document.getElementById("fotoType").innerHTML = "";
      fileInput.value = "";
      return true;
    }
  }
  
  function checkFoto() {
    var input = document.getElementById("foto");
  
    var filePath = input.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  
    if (!allowedExtensions.exec(filePath)) {
      document.getElementById("fotoType").innerHTML =
        "* Ekstensi file tidak sesuai";
      fileInput.value = "";
      return false;
    } else {
      document.getElementById("fotoType").innerHTML = "";
    }
  }
  
  function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function() {
      var output = document.getElementById("fotoPrev");
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  
  //   Popover
  $(function() {
    $('[data-toggle="popover"]').popover();
  });
  
  function showPasswordLama() {
    var password = document.getElementById("passwordLama");
    if (password.type == "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  
    var eye = document.getElementById("eyeA").classList;
    if (eye.contains("fa-eye")) {
      eye.remove("fa-eye");
      eye.add("fa-eye-slash");
    } else {
      eye.remove("fa-eye-slash");
      eye.add("fa-eye");
    }
  }
  
  function showPasswordBaru() {
    var password = document.getElementById("passwordBaru");
    if (password.type == "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  
    var eye = document.getElementById("eyeB").classList;
    if (eye.contains("fa-eye")) {
      eye.remove("fa-eye");
      eye.add("fa-eye-slash");
    } else {
      eye.remove("fa-eye-slash");
      eye.add("fa-eye");
    }
  }
  
  function showPasswordKonfirmasi() {
    var password = document.getElementById("konfirmasiPassword");
    if (password.type == "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  
    var eye = document.getElementById("eyeC").classList;
    if (eye.contains("fa-eye")) {
      eye.remove("fa-eye");
      eye.add("fa-eye-slash");
    } else {
      eye.remove("fa-eye-slash");
      eye.add("fa-eye");
    }
  }
  
  /* $(".custom-file-input").on("change", function() {
    var fileName = $(this)
      .val()
      .split("\\")
      .pop();
    $(this)
      .siblings(".custom-file-label")
      .addClass("selected")
      .html(nanana);
  }); */
  
  /**  akhir dari punya nya modal pengaturan **/
  