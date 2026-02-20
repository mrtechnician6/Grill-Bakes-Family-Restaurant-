<script>
    let currentItem = "";

    // 1. Dynamic Greeting based on Nepal Time
    window.onload = function() {
        const hour = new Date().getHours();
        let greeting = "";
        if (hour < 12) greeting = "Good Morning! Ready for Breakfast?";
        else if (hour < 17) greeting = "Good Afternoon! Hungry for Lunch?";
        else greeting = "Good Evening! Time for a Delicious Dinner?";
        
        document.querySelector('.hero p').innerText = greeting;
    };

    // 2. Navigation Functions
    function openNav() { document.getElementById("myNav").style.width = "100%"; }
    function closeNav() { document.getElementById("myNav").style.width = "0%"; }

    // 3. Modal Logic
    function openModal(item) {
        currentItem = item;
        document.getElementById("orderModal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("orderModal").style.display = "none";
    }

    // 4. WhatsApp Order Integration
    function sendOrder(type) {
        const phone = "9779804650880";
        const message = `Namaste Grill %26 Bakes! 🙏%0A%0AI would like to order:%0A✅ *Item:* ${currentItem}%0A🍽️ *Type:* ${type}%0A%0APlease let me know the total price!`;
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        closeModal();
    }

    // Close Modal on outside click
    window.onclick = function(event) {
        const modal = document.getElementById("orderModal");
        if (event.target == modal) { closeModal(); }
    }

    // 5. Scroll Reveal Effect
    window.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    });
</script>
