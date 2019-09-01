document.getElementById('navbar-toggler').addEventListener('click', function() {
    anime ({
        targets: '.hamburger',
        rotate: {
            value: [0, 90],
            duration: 2000,
            easing: 'easeInOutSine',
            loop: 4,
          },
    
    })
})
