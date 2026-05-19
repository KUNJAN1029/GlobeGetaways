const destinationData = {
    bali: {
        name: "Bali, Indonesia",
        shortName: "Bali",
        image: "images/bali.jpg",
        badge: "Beach Escape",
        description: "A wellness-meets-adventure island retreat with ocean views, temple culture, and slow luxury.",
        longDescription: "Bali is ideal for travelers who want their trip to feel both restorative and exciting. Think sunrise walks, beach clubs, waterfalls, local craft villages, and a rhythm that balances relaxation with discovery.",
        price: "$599",
        duration: "6 days curated",
        facts: [
            { label: "Best Season", value: "April to October" },
            { label: "Ideal Pace", value: "Relaxed adventure" },
            { label: "Popular For", value: "Couples and creators" }
        ],
        highlights: ["Beach stays", "Temple visits", "Sunset dining"],
        itinerary: [
            { day: "Day 1", title: "Arrival and beachside reset", text: "Private transfer, check-in, and an easy first evening by the ocean." },
            { day: "Day 2", title: "Ubud culture trail", text: "Rice terraces, artisan studios, and a curated local dining experience." },
            { day: "Day 3", title: "Waterfall and wellness day", text: "A scenic inland route with spa time and relaxed exploration." }
        ],
        inclusions: ["Boutique stay", "Private airport transfer", "Daily breakfast", "Guided cultural day", "Travel support"],
        travelers: ["Couples", "Solo travelers", "Small groups"],
        gallery: [
            { src: "images/gallery-bali-1.jpg", alt: "Bali coast and resort view" },
            { src: "images/gallery-bali-2.jpg", alt: "Bali travel lifestyle scene" },
            { src: "images/gallery-bali-3.jpg", alt: "Bali cinematic travel mood" }
        ],
        faqs: [
            { question: "Is Bali better for couples or solo travelers?", answer: "It works very well for both. Couples usually prefer beach clubs and private villa upgrades, while solo travelers often enjoy wellness-focused stays and social day tours." },
            { question: "Can the itinerary include beach time and Ubud together?", answer: "Yes. That is one of the most common customizations, and we can balance coastal relaxation with inland culture." },
            { question: "Do I need a long trip for Bali?", answer: "No. Even 5 to 6 days works well if we keep the route focused and avoid too many hotel changes." }
        ],
        query: "bali"
    },
    patagonia: {
        name: "Patagonia, Argentina",
        shortName: "Patagonia",
        image: "images/Patagonia.png",
        badge: "Mountain Adventure",
        description: "A dramatic expedition for travelers who want glacier views, trekking routes, and cinematic landscapes.",
        longDescription: "Patagonia is built for people who love wide-open nature and stronger outdoor energy. It combines iconic hikes, clean mountain air, and boutique lodges that soften the edge of a true adventure trip.",
        price: "$799",
        duration: "8 days curated",
        facts: [
            { label: "Best Season", value: "November to March" },
            { label: "Ideal Pace", value: "Active exploration" },
            { label: "Popular For", value: "Hikers and photographers" }
        ],
        highlights: ["Glacier trails", "Lodge stays", "Epic viewpoints"],
        itinerary: [
            { day: "Day 1", title: "Arrival and basecamp check-in", text: "Settle into your lodge and prepare for the week ahead." },
            { day: "Day 2", title: "Signature trail experience", text: "A guided route through Patagonia's most photogenic scenery." },
            { day: "Day 3", title: "Glacier and lake circuit", text: "A high-impact day focused on nature, pace, and unforgettable views." }
        ],
        inclusions: ["Mountain lodge", "Regional transfers", "Trail guide", "Breakfast and trail snacks", "Trip support"],
        travelers: ["Adventure seekers", "Nature lovers", "Friend groups"],
        gallery: [
            { src: "images/gallery-patagonia-1.jpg", alt: "Patagonia mountains and hiking route" },
            { src: "images/gallery-patagonia-2.jpg", alt: "Patagonia cinematic sky and landscape" },
            { src: "images/gallery-patagonia-3.jpg", alt: "Patagonia travel planning and exploration mood" }
        ],
        faqs: [
            { question: "How physically demanding is this Patagonia trip?", answer: "We can shape it from soft adventure to a more active trekking format. The base version is moderate and adjustable." },
            { question: "What should I pack?", answer: "Layers, wind-resistant outerwear, hiking shoes, and a good day bag are the essentials. We can send a full packing list after inquiry." },
            { question: "Can this work for first-time adventure travelers?", answer: "Yes, especially if we prioritize scenic routes and shorter guided hikes over intense trekking days." }
        ],
        query: "patagonia"
    },
    tokyo: {
        name: "Tokyo, Japan",
        shortName: "Tokyo",
        image: "images/tokyo.png",
        badge: "Culture and City",
        description: "A layered city break blending neon districts, heritage neighborhoods, food culture, and design-led stays.",
        longDescription: "Tokyo is a precision-crafted city experience. You get a mix of quiet shrines, fast nightlife, incredible food, and style-forward hotels that make every part of the trip feel intentional.",
        price: "$649",
        duration: "5 days curated",
        facts: [
            { label: "Best Season", value: "March to May" },
            { label: "Ideal Pace", value: "Fast and immersive" },
            { label: "Popular For", value: "Food and culture lovers" }
        ],
        highlights: ["City districts", "Food scenes", "Design hotels"],
        itinerary: [
            { day: "Day 1", title: "Arrival and skyline intro", text: "Check-in, neighborhood walk, and first-night city views." },
            { day: "Day 2", title: "Classic Tokyo contrasts", text: "Markets, shrines, shopping streets, and evening dining." },
            { day: "Day 3", title: "Creative district day", text: "Explore art, cafes, and contemporary city culture." }
        ],
        inclusions: ["Central hotel", "Airport transfer", "Transit guidance", "Food district experience", "Travel concierge"],
        travelers: ["City explorers", "Food lovers", "Creative travelers"],
        gallery: [
            { src: "images/gallery-tokyo-1.jpg", alt: "Tokyo city street and skyline scene" },
            { src: "images/gallery-tokyo-2.jpg", alt: "Tokyo cinematic travel atmosphere" },
            { src: "images/gallery-tokyo-3.jpg", alt: "Tokyo lifestyle and planning scene" }
        ],
        faqs: [
            { question: "Is Tokyo difficult to navigate for first-time visitors?", answer: "Not with the right structure. We include neighborhood guidance, transfer support, and a simple arrival plan." },
            { question: "Can I add a day trip from Tokyo?", answer: "Yes. Popular add-ons include Hakone, Nikko, and Fuji-area scenic escapes." },
            { question: "Does this trip work for food-focused travelers?", answer: "Very well. We can shape the route around markets, local dining, and chef-led experiences." }
        ],
        query: "tokyo"
    },
    serengeti: {
        name: "Serengeti, Tanzania",
        shortName: "Serengeti",
        image: "images/Serengeti.png",
        badge: "Wildlife Journey",
        description: "A high-impact safari escape with golden-hour game drives, premium camps, and unforgettable wildlife encounters.",
        longDescription: "The Serengeti is all about presence. It is one of those destinations where the scale of the landscape and the rhythm of the wildlife make every day feel rare, cinematic, and deeply memorable.",
        price: "$899",
        duration: "7 days curated",
        facts: [
            { label: "Best Season", value: "June to October" },
            { label: "Ideal Pace", value: "Immersive safari" },
            { label: "Popular For", value: "Wildlife and luxury seekers" }
        ],
        highlights: ["Game drives", "Luxury camp", "Sunset safari"],
        itinerary: [
            { day: "Day 1", title: "Arrival and camp welcome", text: "Transfer into the reserve and settle into your safari camp." },
            { day: "Day 2", title: "Morning and evening drives", text: "Track wildlife through prime viewing hours with expert guides." },
            { day: "Day 3", title: "Bush breakfast and open plains", text: "A signature day designed around timing, light, and movement." }
        ],
        inclusions: ["Safari camp", "Guided drives", "All meals", "Park logistics", "On-ground support"],
        travelers: ["Luxury couples", "Wildlife photographers", "Bucket-list travelers"],
        gallery: [
            { src: "images/gallery-serengeti-1.jpg", alt: "Serengeti wildlife and plains view" },
            { src: "images/gallery-serengeti-2.jpg", alt: "Serengeti golden sky and safari atmosphere" },
            { src: "images/gallery-serengeti-3.jpg", alt: "Serengeti travel planning and camp mood" }
        ],
        faqs: [
            { question: "When is the best time for wildlife viewing?", answer: "The dry season is strongest overall, but timing can be adjusted based on migration interest and your preferred pace." },
            { question: "Is this itinerary family-friendly?", answer: "Yes, for older children especially. We can adapt lodge choices and drive times to suit family travel." },
            { question: "What level of comfort should I expect?", answer: "The default version is premium and comfortable, with excellent guides, well-run camps, and thoughtful service." }
        ],
        query: "serengeti"
    },
    barcelona: {
        name: "Barcelona, Spain",
        shortName: "Barcelona",
        image: "images/barcelona.png",
        badge: "Urban Escape",
        description: "A Mediterranean city break packed with design, architecture, beaches, and vibrant street life.",
        longDescription: "Barcelona is a strong fit for travelers who want culture without slowing down too much. It brings together beach energy, walkable neighborhoods, standout food, and iconic architecture in one easy trip.",
        price: "$549",
        duration: "5 days curated",
        facts: [
            { label: "Best Season", value: "April to June" },
            { label: "Ideal Pace", value: "Balanced city leisure" },
            { label: "Popular For", value: "Friends and couples" }
        ],
        highlights: ["Architecture", "Tapas nights", "Beach afternoons"],
        itinerary: [
            { day: "Day 1", title: "Arrival and Gothic Quarter stroll", text: "Ease into the city with a walk through historic streets." },
            { day: "Day 2", title: "Gaudi and city culture", text: "A day focused on architecture, art, and rooftop views." },
            { day: "Day 3", title: "Mediterranean leisure day", text: "Markets, beach time, and a slow evening dining plan." }
        ],
        inclusions: ["Boutique hotel", "Breakfast", "City orientation", "Curated dining suggestions", "Support team"],
        travelers: ["Couples", "Friend groups", "First-time Europe visitors"],
        gallery: [
            { src: "images/gallery-barcelona-1.jpg", alt: "Barcelona architecture and street scene" },
            { src: "images/gallery-barcelona-2.jpg", alt: "Barcelona travel mood and city atmosphere" },
            { src: "images/gallery-barcelona-3.jpg", alt: "Barcelona planning and lifestyle image" }
        ],
        faqs: [
            { question: "Can I mix sightseeing with a slower beach day?", answer: "Yes. Barcelona is perfect for balancing architecture, food, and lighter Mediterranean downtime." },
            { question: "Is this a good short European break?", answer: "Absolutely. It works especially well for 4 to 5 nights with a focused city plan." },
            { question: "Can football or event tickets be added?", answer: "Yes, subject to schedule and availability. We can include major local experiences as add-ons." }
        ],
        query: "barcelona"
    },
    maldives: {
        name: "Maldives",
        shortName: "Maldives",
        image: "images/Maldives.png",
        badge: "Island Luxury",
        description: "A polished tropical retreat built around privacy, overwater stays, and effortless luxury.",
        longDescription: "The Maldives works best when you want pure escape. It is a slower, softer experience centered on ocean views, premium resort service, water activities, and uninterrupted calm.",
        price: "$1299",
        duration: "6 days curated",
        facts: [
            { label: "Best Season", value: "December to April" },
            { label: "Ideal Pace", value: "Slow luxury" },
            { label: "Popular For", value: "Honeymoons and anniversaries" }
        ],
        highlights: ["Overwater villas", "Private dining", "Ocean activities"],
        itinerary: [
            { day: "Day 1", title: "Seaplane arrival and villa check-in", text: "Begin with a scenic transfer and a relaxed resort welcome." },
            { day: "Day 2", title: "Ocean and wellness day", text: "Choose between snorkeling, spa time, or simply slowing down." },
            { day: "Day 3", title: "Signature sunset experience", text: "A curated day ending with a premium private dining moment." }
        ],
        inclusions: ["Resort stay", "Breakfast and dinner", "Airport transfers", "Water activity credit", "Guest support"],
        travelers: ["Couples", "Luxury travelers", "Celebration trips"],
        gallery: [
            { src: "images/gallery-maldives-1.jpg", alt: "Maldives overwater villa and sea view" },
            { src: "images/gallery-maldives-2.jpg", alt: "Maldives cinematic sky and ocean atmosphere" },
            { src: "images/gallery-maldives-3.jpg", alt: "Maldives travel lifestyle scene" }
        ],
        faqs: [
            { question: "Is the Maldives only for honeymoon trips?", answer: "No. It is also great for birthdays, anniversary trips, and travelers who simply want a quiet luxury reset." },
            { question: "Can I choose between beach villa and overwater villa?", answer: "Yes. We can price both options and suggest the best fit for your budget and travel style." },
            { question: "Are activities included?", answer: "Core inclusions vary by resort, but we can package dining, transfers, snorkeling, and wellness add-ons." }
        ],
        query: "maldives"
    }
};

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });

            const openNavbar = document.querySelector(".navbar-collapse.show");
            if (openNavbar && window.bootstrap) {
                window.bootstrap.Collapse.getOrCreateInstance(openNavbar).hide();
            }
        });
    });
}

function setupCounters() {
    const counters = document.querySelectorAll(".stat-counter");
    if (!counters.length) {
        return;
    }

    const animateCounter = (element, target) => {
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = current.toLocaleString();
        }, 30);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
                entry.target.classList.add("animated");
                animateCounter(entry.target, Number.parseInt(entry.target.dataset.target, 10));
            }
        });
    }, { threshold: 0.2 });

    counters.forEach((counter) => observer.observe(counter));
}

function getDestinationSlug(value) {
    if (!value) {
        return null;
    }

    const normalized = value.trim().toLowerCase();
    const aliases = {
        bali: "bali",
        patagonia: "patagonia",
        tokyo: "tokyo",
        serengeti: "serengeti",
        barcelona: "barcelona",
        maldives: "maldives"
    };

    return aliases[normalized] || null;
}

function setMinDate() {
    const today = new Date().toISOString().split("T")[0];
    document.querySelectorAll('input[type="date"]').forEach((input) => {
        input.min = today;
    });
}

function setupBookingForm() {
    const form = document.getElementById("bookingForm");
    if (!form) {
        return;
    }

    const feedback = document.getElementById("bookingFeedback");
    const modalElement = document.getElementById("bookingModal");
    const summary = document.getElementById("bookingSummary");
    const resultLink = document.getElementById("bookingResultLink");
    const modal = modalElement && window.bootstrap ? new window.bootstrap.Modal(modalElement) : null;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const destination = formData.get("destination");
        const slug = getDestinationSlug(destination);

        if (!form.checkValidity() || !slug) {
            form.classList.add("was-validated");
            if (feedback) {
                feedback.textContent = slug ? "Please complete all booking fields." : "Choose one of the listed destinations so we can match the right trip.";
                feedback.classList.add("is-visible");
            }
            return;
        }

        const selectedTrip = destinationData[slug];
        const departureDate = new Date(formData.get("departure_date"));
        const formattedDate = departureDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        if (feedback) {
            feedback.textContent = `Trip request ready for ${selectedTrip.name}.`;
            feedback.classList.add("is-visible");
        }

        if (summary) {
            summary.innerHTML = `
                <div class="summary-row"><span>Destination</span><strong>${selectedTrip.name}</strong></div>
                <div class="summary-row"><span>Departure</span><strong>${formattedDate}</strong></div>
                <div class="summary-row"><span>Duration</span><strong>${formData.get("duration")}</strong></div>
                <div class="summary-row"><span>Travelers</span><strong>${formData.get("travelers")}</strong></div>
                <div class="summary-row"><span>Style</span><strong>${formData.get("style")}</strong></div>
            `;
        }

        if (resultLink) {
            resultLink.href = `destination.html?place=${selectedTrip.query}&date=${encodeURIComponent(formData.get("departure_date"))}&travelers=${encodeURIComponent(formData.get("travelers"))}&style=${encodeURIComponent(formData.get("style"))}`;
        }

        const emailSubject = `Trip inquiry for ${selectedTrip.name}`;
        const emailBody = [
            `Hello GlobeGetaways,`,
            ``,
            `I would like a custom trip plan for ${selectedTrip.name}.`,
            `Departure date: ${formattedDate}`,
            `Duration: ${formData.get("duration")}`,
            `Travelers: ${formData.get("travelers")}`,
            `Travel style: ${formData.get("style")}`,
            ``,
            `Please share availability and next steps.`
        ].join("\n");
        window.location.href = `mailto:hello@globegetaways.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        if (modal) {
            modal.show();
        }
    });
}

function renderDestinationPage() {
    const title = document.getElementById("detailTitle");
    if (!title) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const slug = getDestinationSlug(params.get("place")) || "bali";
    const destination = destinationData[slug];

    document.title = `${destination.name} | GlobeGetaways`;
    document.getElementById("detailBadge").textContent = destination.badge;
    title.textContent = destination.name;
    document.getElementById("detailDescription").textContent = destination.description;
    document.getElementById("detailLongDescription").textContent = destination.longDescription;
    document.getElementById("detailImage").src = destination.image;
    document.getElementById("detailImage").alt = destination.name;
    document.getElementById("detailPrice").textContent = destination.price;
    document.getElementById("detailDuration").textContent = destination.duration;

    const highlights = document.getElementById("detailHighlights");
    highlights.innerHTML = destination.highlights.map((item) => `<span><i class="fa-solid fa-check"></i>${item}</span>`).join("");

    const facts = document.getElementById("detailFacts");
    facts.innerHTML = destination.facts.map((fact) => `
        <div class="fact-card">
            <span>${fact.label}</span>
            <strong>${fact.value}</strong>
        </div>
    `).join("");

    const snapshotList = document.getElementById("snapshotList");
    const queryStyle = params.get("style");
    const queryDate = params.get("date");
    const queryTravelers = params.get("travelers");
    snapshotList.innerHTML = `
        <div class="snapshot-item"><strong>Starting Price</strong><span>${destination.price}</span></div>
        <div class="snapshot-item"><strong>Duration</strong><span>${destination.duration}</span></div>
        <div class="snapshot-item"><strong>Recommended Style</strong><span>${queryStyle || destination.facts[1].value}</span></div>
        <div class="snapshot-item"><strong>Suggested Group</strong><span>${queryTravelers || destination.travelers[0]}</span></div>
        <div class="snapshot-item"><strong>Target Departure</strong><span>${queryDate || "Flexible dates"}</span></div>
    `;

    const itinerary = document.getElementById("itineraryList");
    itinerary.innerHTML = destination.itinerary.map((item) => `
        <article class="itinerary-item">
            <span class="itinerary-day">${item.day}</span>
            <div>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </div>
        </article>
    `).join("");

    const gallery = document.getElementById("galleryGrid");
    if (gallery) {
        gallery.innerHTML = destination.gallery.map((item, index) => `
            <figure class="gallery-card gallery-card-${index + 1}">
                <img src="${item.src}" alt="${item.alt}">
            </figure>
        `).join("");
    }

    const inclusions = document.getElementById("inclusionList");
    inclusions.innerHTML = destination.inclusions.map((item) => `<li><i class="fa-solid fa-check"></i>${item}</li>`).join("");

    const travelerTags = document.getElementById("travelerTags");
    travelerTags.innerHTML = destination.travelers.map((item) => `<span>${item}</span>`).join("");

    const faqList = document.getElementById("faqList");
    if (faqList) {
        faqList.innerHTML = destination.faqs.map((item, index) => `
            <details class="faq-item" ${index === 0 ? "open" : ""}>
                <summary>${item.question}</summary>
                <p>${item.answer}</p>
            </details>
        `).join("");
    }

    const departureInput = document.getElementById("guestDate");
    if (departureInput && queryDate) {
        departureInput.value = queryDate;
    }

    const travelerInput = document.getElementById("guestTravelers");
    if (travelerInput && queryTravelers) {
        travelerInput.value = queryTravelers;
    }
}

function setupDetailInquiryForm() {
    const form = document.getElementById("detailInquiryForm");
    if (!form) {
        return;
    }

    const feedback = document.getElementById("detailFormFeedback");
    const title = document.getElementById("detailTitle");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            if (feedback) {
                feedback.textContent = "Please fill in your contact details so we can send the custom quote.";
                feedback.classList.add("is-visible");
            }
            return;
        }

        const name = form.elements.name.value.trim();
        const destination = title ? title.textContent : "your destination";
        const email = form.elements.email.value.trim();
        const departureDate = form.elements.departure_date.value;
        const travelers = form.elements.travelers.value;
        const notes = form.elements.notes.value.trim() || "No additional notes.";
        if (feedback) {
            feedback.textContent = `Thanks, ${name}. Your ${destination} inquiry is ready for the travel team.`;
            feedback.classList.add("is-visible");
        }

        const emailSubject = `Custom quote request for ${destination}`;
        const emailBody = [
            `Hello GlobeGetaways,`,
            ``,
            `I would like a custom quote for ${destination}.`,
            `Name: ${name}`,
            `Email: ${email}`,
            `Departure date: ${departureDate || "Flexible"}`,
            `Travelers: ${travelers}`,
            `Notes: ${notes}`,
            ``,
            `Please contact me with itinerary options and pricing.`
        ].join("\n");
        window.location.href = `mailto:hello@globegetaways.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        form.reset();
        setMinDate();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setMinDate();
    setupSmoothScroll();
    setupCounters();
    setupBookingForm();
    renderDestinationPage();
    setupDetailInquiryForm();
});
