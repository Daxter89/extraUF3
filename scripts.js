
document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.tab');
    var panels = document.querySelectorAll('.panel');

    function activateTab(tab) {
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        panels.forEach(p => p.hidden = true);

        tab.setAttribute('aria-selected', 'true');
        document.getElementById(tab.getAttribute('aria-controls')).hidden = false;
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            activateTab(tab);
        });
    });

    // Activate first tab by default
    activateTab(tabs[0]);
});