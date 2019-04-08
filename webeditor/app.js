

window.onload = function(){
    document.querySelector("#run").addEventListener("click",function(){
        let mf = document.getElementById("myFrame").contentWindow.document;
        let t_html = document.getElementById("html").value;
        let t_css = document.getElementById("css").value;
        let t_js = document.getElementById("js").value;

        mf.open();
        mf.writeln(t_html);
        mf.close();
    });
}