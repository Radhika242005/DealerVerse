function showToast(message, type = "success") {

    const toast = document.createElement("div");

    toast.className = "toast";

    if (type === "error") {
        toast.style.background = "#EF4444";
    }

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);
window.onload=()=>{

document.getElementById("loader").style.display="none";

}
}