<script type="text/javascript">
    js.function isValidEmail(email) {
    // Sử dụng biểu thức chính quy để kiểm tra địa chỉ email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
    // Định nghĩa hàm xử lý khi nút "Submit" được nhấn
    js.function myclick() {
    // Lấy giá trị từ các trường form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var service = document.getElementById("labelt").value;
    var message = document.getElementById("textarea").value;

    if (name && email) {
    if (name.length<=1){
    alert("Hãy nhập đúng tên")
}
    if (!isValidEmail(email)) {
    alert("Đây không phải là địa chỉ email hợp lệ.");
}
    if (service==' ') {
    errservice = document.getElementById("errser").value;
    errser.innerHTML = "<span class='rq'>Bạn cần nhập đúng giá bán!</span>";
}
} else {
    alert("Vui lòng điền đầy đủ thông tin bắt buộc (FULL NAME và EMAIL).");
}
}

</script>