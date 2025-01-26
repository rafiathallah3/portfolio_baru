function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("deskripsi");
    el.textContent = el.textContent.replace("%tahunrek%", getAge("2006-05-26"))

    const berapaProject = document.getElementById("berapaProject");
    console.log(document.getElementById("projects").childNodes[3].childNodes)
    berapaProject.textContent = `(${parseInt(document.getElementById("projects").childNodes[3].childNodes.length / 2)})`;

    const berapaSertifikat = document.getElementById("berapaSertifikat")
    berapaSertifikat.textContent = `(${parseInt(document.getElementById("certifications").childNodes[3].childNodes.length / 2)})`
});