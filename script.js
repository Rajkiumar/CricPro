document.addEventListener('DOMContentLoaded', function () {
    function handlePlayerLinkClick(event) {
        event.preventDefault();
        var playerImageURL = event.target.href;
        var modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        var closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', function () {
            document.body.removeChild(modalContainer);
        });
        var playerImage = document.createElement('img');
        playerImage.src = playerImageURL;
        playerImage.alt = 'Player Image';
        var rect = event.target.getBoundingClientRect();
        var scrollY = window.scrollY || window.pageYOffset;
        modalContainer.style.top = rect.bottom + scrollY + 'px';
        modalContainer.style.left = rect.left + 'px';
        modalContainer.appendChild(closeButton);
        modalContainer.appendChild(playerImage);
        document.body.appendChild(modalContainer);
        modalContainer.addEventListener('click', function () {
            document.body.removeChild(modalContainer);
        });
    }
    var playerLinks = document.querySelectorAll('.player');
    playerLinks.forEach(function (link) {
        link.addEventListener('click', handlePlayerLinkClick);
    });
});
