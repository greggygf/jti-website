function Cobacoba(){
    var usernameMahasiswaAdmin = document.getElementById("usernameMahasiswaAdmin").value;

    var passwordMahasiswaAdmin = document.getElementById("passwordMahasiswaAdmin").value;

    var fileid = document.getElementById("fileid").value;

    var nimMahasiswaAdmin = document.getElementById("nimMahasiswaAdmin").value;

    var namaMahasiswaAdmin = document.getElementById("namaMahasiswaAdmin").value;

    var tempatlahirMahasiswaAdmin = document.getElementById("tempatlahirMahasiswaAdmin").value;

    var alamatMahasiswaAdmin = document.getElementById("alamatMahasiswaAdmin").value;

    var kelasMahasiswaAdmin = document.getElementById("kelasMahasiswaAdmin").value;
    
    if(usernameMahasiswaAdmin==""){
        document.getElementById("usernameMahasiswaAdminBlank").innerHTML="*Masukkan Username";
    }

    else if(usernameMahasiswaAdmin!=""){
        document.getElementById("usernameMahasiswaAdminBlank").innerHTML="";
    }


    if(passwordMahasiswaAdmin==""){
        document.getElementById("passwordMahasiswaAdminBlank").innerHTML="*Masukkan Password";
    }

    else if(passwordMahasiswaAdmin!=""){
        document.getElementById("passwordMahasiswaAdminBlank").innerHTML="";
    }

    if(fileid==""){
        document.getElementById("fileidMahasiswaAdminBlank").innerHTML="*Upload File Gambar";
    }

    else if(fileid!=""){
        document.getElementById("fileidMahasiswaAdminBlank").innerHTML="";
    }

    if(nimMahasiswaAdmin==""){
        document.getElementById("nimMahasiswaAdminBlank").innerHTML="*Masukkan NIM";
    }

    else if(nimMahasiswaAdmin!=""){
        document.getElementById("nimMahasiswaAdminBlank").innerHTML="";
    }


    if(namaMahasiswaAdmin==""){
        document.getElementById("namaMahasiswaAdminBlank").innerHTML="*Masukkan Nama Mahasiswa";
    }

    else if(namaMahasiswaAdmin!=""){
        document.getElementById("namaMahasiswaAdminBlank").innerHTML="";
    }


    if(tempatlahirMahasiswaAdmin==""){
        document.getElementById("tempatlahirMahasiswaAdminBlank").innerHTML="*Masukkan Tempat Lahir Mahasiswa";
    }

    else if(usernameMahasiswaAdmin!=""){
        document.getElementById("tempatlahirMahasiswaAdminBlank").innerHTML="";
    }


    if(alamatMahasiswaAdmin==""){
        document.getElementById("alamatMahasiswaAdminBlank").innerHTML="*Masukkan Alamat Mahasiswa";
    }

    else if(alamatMahasiswaAdmin!=""){
        document.getElementById("alamatMahasiswaAdminBlank").innerHTML="";
    }


    if(kelasMahasiswaAdmin==""){
        document.getElementById("kelasMahasiswaAdminBlank").innerHTML="*Masukkan Kelas Mahasiswa";
    }

    else if(kelasMahasiswaAdmin!=""){
        document.getElementById("kelasMahasiswaAdminBlank").innerHTML="";
    }
}

function setup() {
    document.getElementById('buttonid').addEventListener('click', openDialog);
    function openDialog() {
        document.getElementById('fileid').click();
    }

    /*document.getElementById('fileid').addEventListener('change', submitForm);
    function submitForm() {
        document.getElementById('formAdminMahasiswa').submit();
    }*/
}

function preview_images(event) {
    var reader = new FileReader();
    reader.onload = function() {
      var output = document.getElementById("fotoPrevMahasiswaAdmin");
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  function showFilesSizes() {
    var input, file;
  
    input = document.getElementById("fileid");
  
    file = input.files[0];
  
    if (file.size > 1000000) {
      document.getElementById("fileidMahasiswaAdminBlank").innerHTML = "* Ukuran melebihi 1 MB";
    } else if (file.size < 1000000) {
      document.getElementById("fileidMahasiswaAdminBlank").innerHTML = "";
    }
  }