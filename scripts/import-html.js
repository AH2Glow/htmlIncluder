(() => {
    const components = Array.from(document.querySelectorAll("component"));

    const includeComponent = (component) => {
        if (!component) return;

        fetch(component.getAttribute("link"))
            .then((res) => res.text())
            .then((html) => {
                component.insertAdjacentHTML("afterend", html);
                component.remove();
                includeComponent(components.shift());
            });
    };

    includeComponent(components.shift());
})();
