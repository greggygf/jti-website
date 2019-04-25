<?php
include "../config/connection.php";

function khs($con, $idUser)
{
  $khs = "select a.*, b.* from tabel_khs a, tabel_matkul b, tabel_mahasiswa c, tabel_user d where a.id_matkul=b.id_matkul and a.id_mahasiswa=c.id_mahasiswa and c.id_user=d.id_user and d.id_user='$idUser' and a.id_semester=c.id_semester";
  $resultKhs = mysqli_query($con, $khs);
  return $resultKhs;
}

function filterKhs($con, $idUser, $idSemester)
{
  $filterKhs = "select a.*, b.* from tabel_khs a, tabel_matkul b, tabel_mahasiswa c, tabel_user d where a.id_matkul=b.id_matkul and a.id_mahasiswa=c.id_mahasiswa and c.id_user=d.id_user and d.id_user='$idUser' and a.id_semester=$idSemester";
  $resultFilterKhs = mysqli_query($con, $filterKhs);
  return $resultFilterKhs;
}

function cekSemester($con, $idUser){
    $cekSemester="select a.id_semester from tabel_semester a, tabel_mahasiswa b where a.id_semester=b.id_semester and b.id_user='$idUser'";
    $resultCekSemester=mysqli_query($con, $cekSemester);
    $row=mysqli_fetch_assoc($resultCekSemester);
    return $row["id_semester"];
}

function semester($con){
    $semester="select * from tabel_semester";
    $resultSemester = mysqli_query($con, $semester);
    return $resultSemester;
}

function indeksSemester($con, $idUser){
    $idSemester=cekSemester($con, $idUser);
    $indeksSemester = "select sum(a.nilai) as indeksSemester from tabel_khs a, tabel_matkul b, tabel_mahasiswa c, tabel_user d where a.id_matkul=b.id_matkul and a.id_mahasiswa=c.id_mahasiswa and c.id_user=d.id_user and d.id_user='$idUser' and a.id_semester=$idSemester";
    $resultIndeksSemester = mysqli_query($con, $indeksSemester);
    $rowIndeksSemester=mysqli_fetch_assoc($resultIndeksSemester);
    return $rowIndeksSemester["indeksSemester"];
}
function rataRataSemester($con, $idUser){
    $idSemester = cekSemester($con, $idUser);
    $rataRataSemester = "select count $resultIndeksSemester = mysqli_query($con, $indeksSemester), tabel_user d where a.id_matkul=b.id_matkul";
}
?>