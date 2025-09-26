  
        // Home Page Module
        const HomePage = (() => {
            const load = () => {
                const content = document.getElementById('content');
                content.innerHTML = '';
                
                const heroSection = document.createElement('div');
                heroSection.className = 'hero-section';
                
                // Hero Content
                const heroContent = document.createElement('div');
                heroContent.className = 'hero-content animate-slideInLeft';
                
                const heroTitle = document.createElement('h1');
                heroTitle.className = 'hero-title';
                heroTitle.textContent = 'ÉLITE CUISINE';
                
                const heroSubtitle = document.createElement('h2');
                heroSubtitle.className = 'hero-subtitle';
                heroSubtitle.textContent = 'Where Culinary Art Meets Perfection';
                
                const heroDescription = document.createElement('p');
                heroDescription.className = 'hero-description';
                heroDescription.textContent = 'Experience the pinnacle of gastronomic excellence at Élite Cuisine. Our Michelin-starred chef crafts each dish with precision, passion, and the finest seasonal ingredients sourced from local artisans. From the moment you step through our doors, you\'ll be transported to a world where every bite tells a story of culinary mastery and refined elegance.';
                
                heroContent.appendChild(heroTitle);
                heroContent.appendChild(heroSubtitle);
                heroContent.appendChild(heroDescription);
                
                // Hero Image
                const heroImage = document.createElement('div');
                heroImage.className = 'hero-image animate-slideInRight';
                
                const img = document.createElement('img');
                img.src = 'https://placehold.co/600x500/8B4513/FFFFFF?text=Gourmet+Dish';
                img.alt = 'Gourmet Restaurant Dish';
                
                const imageOverlay = document.createElement('div');
                imageOverlay.className = 'image-overlay';
                imageOverlay.textContent = '"Perfection is not attainable, but if we chase perfection we can catch excellence."';
                
                heroImage.appendChild(img);
                heroImage.appendChild(imageOverlay);
                
                heroSection.appendChild(heroContent);
                heroSection.appendChild(heroImage);
                content.appendChild(heroSection);
            };
            
            return { load };
        })();

        // Menu Page Module
        const MenuPage = (() => {
            const load = () => {
                const content = document.getElementById('content');
                content.innerHTML = '';
                
                // Menu Intro
                const menuIntro = document.createElement('div');
                menuIntro.className = 'menu-intro animate-fadeInUp';
                
                const menuTitle = document.createElement('h1');
                menuTitle.className = 'menu-title';
                menuTitle.textContent = 'Our Exquisite Menu';
                
                menuIntro.appendChild(menuTitle);
                content.appendChild(menuIntro);
                
                // Menu Sections
                const menuSection = document.createElement('div');
                menuSection.className = 'menu-section';
                
                // Appetizers
                const appetizers = document.createElement('div');
                appetizers.className = 'menu-category';
                
                const appetizersTitle = document.createElement('h2');
                appetizersTitle.className = 'category-title';
                appetizersTitle.textContent = 'Appetizers';
                
                const appetizerItems = [
                    { name: 'Truffle Arancini', description: 'Crispy risotto balls infused with black truffle, served with aged parmesan foam', price: '$18' },
                    { name: 'Seared Scallops', description: 'Pan-seared Hokkaido scallops with citrus beurre blanc and caviar', price: '$24' },
                    { name: 'Foie Gras Torchon', description: 'House-cured foie gras with brioche toast and seasonal fruit compote', price: '$28' },
                    { name: 'Artisanal Charcuterie', description: 'Curated selection of house-cured meats, artisanal cheeses, and house-made preserves', price: '$32' }
                ];
                
                appetizerItems.forEach((item, index) => {
                    const menuItem = document.createElement('div');
                    menuItem.className = 'menu-item';
                    menuItem.style.animationDelay = `${index * 0.1}s`;
                    
                    const itemInfo = document.createElement('div');
                    itemInfo.className = 'item-info';
                    
                    const itemName = document.createElement('h3');
                    itemName.className = 'item-name';
                    itemName.textContent = item.name;
                    
                    const itemDescription = document.createElement('p');
                    itemDescription.className = 'item-description';
                    itemDescription.textContent = item.description;
                    
                    const itemPrice = document.createElement('div');
                    itemPrice.className = 'item-price';
                    itemPrice.textContent = item.price;
                    
                    itemInfo.appendChild(itemName);
                    itemInfo.appendChild(itemDescription);
                    menuItem.appendChild(itemInfo);
                    menuItem.appendChild(itemPrice);
                    appetizers.appendChild(menuItem);
                });
                
                appetizers.appendChild(appetizersTitle);
                
                // Main Courses
                const mains = document.createElement('div');
                mains.className = 'menu-category';
                
                const mainsTitle = document.createElement('h2');
                mainsTitle.className = 'category-title';
                mainsTitle.textContent = 'Main Courses';
                
                const mainItems = [
                    { name: 'Herb-Crusted Rack of Lamb', description: 'New Zealand lamb with rosemary crust, served with roasted heirloom vegetables and red wine jus', price: '$48' },
                    { name: 'Pan-Seared Duck Breast', description: 'Liberty Farms duck breast with cherry gastrique, truffle mashed potatoes, and seasonal greens', price: '$42' },
                    { name: 'Wild Mushroom Risotto', description: 'Arborio rice with foraged wild mushrooms, aged parmesan, and white truffle oil', price: '$36' },
                    { name: 'Wagyu Beef Tenderloin', description: 'A5 Japanese Wagyu with black garlic purée, roasted bone marrow, and microgreens', price: '$85' }
                ];
                
                mainItems.forEach((item, index) => {
                    const menuItem = document.createElement('div');
                    menuItem.className = 'menu-item';
                    menuItem.style.animationDelay = `${index * 0.1}s`;
                    
                    const itemInfo = document.createElement('div');
                    itemInfo.className = 'item-info';
                    
                    const itemName = document.createElement('h3');
                    itemName.className = 'item-name';
                    itemName.textContent = item.name;
                    
                    const itemDescription = document.createElement('p');
                    itemDescription.className = 'item-description';
                    itemDescription.textContent = item.description;
                    
                    const itemPrice = document.createElement('div');
                    itemPrice.className = 'item-price';
                    itemPrice.textContent = item.price;
                    
                    itemInfo.appendChild(itemName);
                    itemInfo.appendChild(itemDescription);
                    menuItem.appendChild(itemInfo);
                    menuItem.appendChild(itemPrice);
                    mains.appendChild(menuItem);
                });
                
                mains.appendChild(mainsTitle);
                
                // Desserts
                const desserts = document.createElement('div');
                desserts.className = 'menu-category';
                
                const dessertsTitle = document.createElement('h2');
                dessertsTitle.className = 'category-title';
                dessertsTitle.textContent = 'Desserts';
                
                const dessertItems = [
                    { name: 'Chocolate Soufflé', description: 'Grand cru chocolate soufflé with Tahitian vanilla bean ice cream', price: '$16' },
                    { name: 'Crème Brûlée', description: 'Classic vanilla bean crème brûlée with caramelized sugar crust', price: '$14' },
                    { name: 'Seasonal Fruit Tart', description: 'House-made pâte sucrée with seasonal fruits and vanilla pastry cream', price: '$15' },
                    { name: 'Cheese Selection', description: 'Curated selection of artisanal cheeses with house-made accompaniments', price: '$22' }
                ];
                
                dessertItems.forEach((item, index) => {
                    const menuItem = document.createElement('div');
                    menuItem.className = 'menu-item';
                    menuItem.style.animationDelay = `${index * 0.1}s`;
                    
                    const itemInfo = document.createElement('div');
                    itemInfo.className = 'item-info';
                    
                    const itemName = document.createElement('h3');
                    itemName.className = 'item-name';
                    itemName.textContent = item.name;
                    
                    const itemDescription = document.createElement('p');
                    itemDescription.className = 'item-description';
                    itemDescription.textContent = item.description;
                    
                    const itemPrice = document.createElement('div');
                    itemPrice.className = 'item-price';
                    itemPrice.textContent = item.price;
                    
                    itemInfo.appendChild(itemName);
                    itemInfo.appendChild(itemDescription);
                    menuItem.appendChild(itemInfo);
                    menuItem.appendChild(itemPrice);
                    desserts.appendChild(menuItem);
                });
                
                desserts.appendChild(dessertsTitle);
                
                menuSection.appendChild(appetizers);
                menuSection.appendChild(mains);
                menuSection.appendChild(desserts);
                content.appendChild(menuSection);
            };
            
            return { load };
        })();

        // Contact Page Module
        const ContactPage = (() => {
            const load = () => {
                const content = document.getElementById('content');
                content.innerHTML = '';
                
                // Contact Intro
                const contactIntro = document.createElement('div');
                contactIntro.className = 'contact-intro animate-fadeInUp';
                
                const contactTitle = document.createElement('h1');
                contactTitle.className = 'contact-title';
                contactTitle.textContent = 'Visit Us';
                
                contactIntro.appendChild(contactTitle);
                content.appendChild(contactIntro);
                
                // Contact Sections
                const contactSection = document.createElement('div');
                contactSection.className = 'contact-section';
                
                // Contact Info
                const contactInfo = document.createElement('div');
                contactInfo.className = 'contact-info';
                
                const contactDetails = document.createElement('div');
                contactDetails.className = 'contact-details';
                
                const contactItems = [
                    { icon: 'fas fa-map-marker-alt', text: '123 Gourmet Avenue, Culinary District, New York, NY 10001' },
                    { icon: 'fas fa-phone', text: '(555) 123-4567' },
                    { icon: 'fas fa-envelope', text: 'reservations@elitecuisine.com' },
                    { icon: 'fas fa-clock', text: 'Monday - Thursday: 5:00 PM - 10:00 PM<br>Friday - Saturday: 5:00 PM - 11:00 PM<br>Sunday: Closed' }
                ];
                
                contactItems.forEach((item, index) => {
                    const contactDetail = document.createElement('div');
                    contactDetail.className = 'contact-detail';
                    contactDetail.style.animationDelay = `${index * 0.1}s`;
                    
                    const contactIcon = document.createElement('div');
                    contactIcon.className = 'contact-icon';
                    contactIcon.innerHTML = `<i class="${item.icon}"></i>`;
                    
                    const contactText = document.createElement('div');
                    contactText.className = 'contact-text';
                    contactText.innerHTML = item.text;
                    
                    contactDetail.appendChild(contactIcon);
                    contactDetail.appendChild(contactText);
                    contactDetails.appendChild(contactDetail);
                });
                
                contactInfo.appendChild(contactDetails);
                
                // Map
                const mapContainer = document.createElement('div');
                mapContainer.className = 'map-container';
                
                const mapPlaceholder = document.createElement('div');
                mapPlaceholder.className = 'map-placeholder';
                mapPlaceholder.innerHTML = '<i class="fas fa-map-marked-alt" style="font-size: 3rem; margin-bottom: 20px;"></i><br>Élite Cuisine Restaurant<br>123 Gourmet Avenue<br>New York, NY 10001';
                
                mapContainer.appendChild(mapPlaceholder);
                
                contactSection.appendChild(contactInfo);
                contactSection.appendChild(mapContainer);
                content.appendChild(contactSection);
            };
            
            return { load };
        })();

        // Tab Switching Logic with Animations
        document.addEventListener('DOMContentLoaded', () => {
            const navButtons = document.querySelectorAll('.nav-btn');
            const content = document.getElementById('content');
            
            // Load home page initially
            HomePage.load();
            
            navButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Update active button
                    navButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    
                    // Add fade out animation
                    content.style.opacity = '0';
                    content.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        // Load corresponding page
                        const tab = button.dataset.tab;
                        switch(tab) {
                            case 'home':
                                HomePage.load();
                                break;
                            case 'menu':
                                MenuPage.load();
                                break;
                            case 'contact':
                                ContactPage.load();
                                break;
                        }
                        
                        // Add fade in animation
                        content.style.opacity = '1';
                        content.style.transform = 'translateY(0)';
                    }, 300);
                });
            });
        });
  
  