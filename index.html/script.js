<script>
        // Função para mostrar e esconder informações extras sobre você
        function toggleInfo() {
            var moreInfo = document.getElementById("moreInfo");
            var button = document.getElementById("showMoreBtn");

            if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
                moreInfo.style.display = "block";
                button.textContent = "Mostrar menos"; // Mudar o texto do botão
            } else {
                moreInfo.style.display = "none";
                button.textContent = "Mostrar mais"; // Restaurar o texto do botão
            }
        }
    </script>