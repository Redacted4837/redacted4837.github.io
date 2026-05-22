window.addEventListener("pageshow", (e) => {
    if (e.persisted) {
        document.body.classList.add("hidden");
    }
    setTimeout(() => {
        document.body.classList.remove("hidden");
    }, 20);
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (!href || href.startsWith("#") || link.target === "_blank" || href.startsWith("mailto:") || href.startsWith("tel:")) {
                return;
            }
            e.preventDefault();
            document.body.classList.add("hidden");
            setTimeout(() => {
                window.location.href = href;
            }, 350);
        });
    });
});