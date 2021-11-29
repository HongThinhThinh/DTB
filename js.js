function tinhDiem() {

    document.getElementById("img").style.transform = "translateX(100%)";
    document.getElementById("rs").style.transform = "translateY(-280%)";
    document.getElementById("img").style.clipPath = "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)";
    document.getElementById("img").style.transition = " all 0.9s"
    document.getElementById("rs").style.transition = " all 0.9s"
    var toan = document.getElementById('toan').value;
    var li = document.getElementById('li').value;
    var hoa = document.getElementById('Hoa').value;
    diemToan = Number(toan)
    diemli = Number(li)
    diemHoa = Number(hoa)

    var dtb = (diemToan + diemli + diemHoa) / 3;
    document.getElementById('rs').textContent = (" ĐTB là: " + dtb.toFixed(0))
    document.getElementById('rs').style.opacity = "1"


}
function reset() {

    document.getElementById("img").style.transform = "translateX(0)";
    document.getElementById("rs").style.transform = "translateY(-180px)";
    document.getElementById("img").style.clipPath = "none";

    document.getElementById('rs').textContent = ""

    var toan = document.getElementById('toan').value = "";
    var li = document.getElementById('li').value = "";
    var hoa = document.getElementById('Hoa').value = "";
    document.getElementById('rs').style.opacity = "0"

}