    const searchBox = document.getElementById("searchBox");
    const table = document.getElementById("studentTable");
    const rows = table.getElementsByTagName("tr");
    const noResults = document.querySelector(".no-results");

    searchBox.addEventListener("keyup", function () {
      const filter = searchBox.value.toLowerCase();
      let visibleCount = 0;

      for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let match = false;

        for (let j = 0; j < cells.length; j++) {
          if (cells[j].innerText.toLowerCase().includes(filter)) {
            match = true;
            break;
          }
        }

        if (match) {
          rows[i].style.display = "";
          visibleCount++;
        } else {
          rows[i].style.display = "none";
        }
      }

      noResults.style.display = visibleCount === 0 ? "block" : "none";
    });