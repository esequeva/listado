document.addEventListener("DOMContentLoaded", function() {
        const agregarButton = document.getElementById("agregar");
        const limpiarButton = document.getElementById("limpiar");
        const contenedor = document.getElementById("contenedor");
        const itemInput = document.getElementById("item");
      
        // Cargar elementos almacenados en el localStorage al cargar la página
        const storedItems = JSON.parse(localStorage.getItem("items")) || [];
        storedItems.forEach(function(itemText) {
          addItemToList(itemText);
        });
      
        agregarButton.addEventListener("click", function() {
          const newItemText = itemInput.value.trim();
          //Borra espacios en blanco
      
          if (newItemText !== "") {
            addItemToList(newItemText);
      
            // Guardar el elemento en el localStorage
            const storedItems = JSON.parse(localStorage.getItem("items")) || [];
            storedItems.push(newItemText);
            localStorage.setItem("items", JSON.stringify(storedItems));
      
            itemInput.value = ""; // Limpiar el input después de agregar
            document.getElementById("item").focus();
          }
        });
      
        limpiarButton.addEventListener("click", function() {
          // Limpiar la lista en la página
          contenedor.innerHTML = "";
      
          // Limpiar el localStorage
          localStorage.removeItem("items");
          document.getElementById("item").focus();
        });
      
        function addItemToList(itemText) {
          const newItem = document.createElement("li");
          newItem.classList.add("list-group-item");
          newItem.textContent = itemText;
          contenedor.appendChild(newItem);
          document.getElementById("item").focus();
        }
      });
  