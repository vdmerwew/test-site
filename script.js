// Existing toggleMenu function (unchanged)
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    
    if (navLinks && hamburger) {
        navLinks.classList.toggle('show');
        const isOpen = navLinks.classList.contains('show');
        hamburger.setAttribute('aria-expanded', isOpen);
    }
}

// Existing loader fade-out (unchanged)
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    }
});

// Existing back-to-top button logic (unchanged)
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Existing info-box and content-area logic for box-container (unchanged)
const boxes = document.querySelectorAll('.info-box');
const contents = document.querySelectorAll('.content-area');

function showContent(targetId) {
    contents.forEach(content => content.classList.remove('active'));
    boxes.forEach(box => box.classList.remove('active'));

    const targetContent = document.getElementById(targetId);
    const targetBox = document.querySelector(`.info-box[data-target="${targetId}"]`);
    
    if (targetContent) {
        targetContent.classList.add('active');
        // targetContent.scrollIntoView({ behavior: 'smooth' }); // ❌ remove or comment this
    }
    if (targetBox) {
        targetBox.classList.add('active');
    }
}


boxes.forEach(box => {
    box.addEventListener('click', () => {
        const targetId = box.dataset.target;
        showContent(targetId);
    });
});

// Modified navbarLinks event listener
const navbarLinks = document.querySelectorAll('nav a[href*="#"]');

navbarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        const href = this.getAttribute('href');
        const [targetPage, targetId] = href.split('#');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        if (targetPage && targetPage !== currentPage) {
            event.preventDefault();
            sessionStorage.setItem("scrollTarget", targetId);
            window.location.href = targetPage; // No hash in URL
            return;
        }

        // Same page scroll
        if (targetId) {
            event.preventDefault();
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                if (!targetElement.closest('.box-container')) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                if (targetElement.classList.contains('content-area')) {
                    showContent(targetId);
                }
            }
        }
    });
});


// Modified window.load event listener
window.addEventListener('load', () => {
    const savedTarget = sessionStorage.getItem("scrollTarget");
    if (savedTarget) {
        sessionStorage.removeItem("scrollTarget");

        // Delay scroll to prevent browser layout jumping
        setTimeout(() => {
            const targetElement = document.getElementById(savedTarget);
            if (targetElement) {
                if (!targetElement.closest('.box-container')) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                if (targetElement.classList.contains('content-area')) {
                    showContent(savedTarget);
                }
            }
        }, 100); // Delay helps after full render
    } else if (boxes.length > 0) {
        showContent(boxes[0].dataset.target);
    }
});



const bios = {
    neil: `Having recently embarked on a new chapter, we've immigrated to the breathtakingly beautiful city of Cape Town, making our way from the UK via a sojourn in Spain. Our journey with Australian Shepherds spans the last 24 years, a period deeply immersed in both the art of breeding and the thrill of showing these remarkable dogs. For us, the health and overall wellbeing of our Aussies have always been, and continue to be, paramount in every decision we make. While my heart initially belonged to the intelligent and agile Border Collies, it was the captivating charm and versatility of the Australian Shepherd that ultimately stole my heart. Now, I have the distinct honour and responsibility of serving as the Chairman of the Australian Shepherd Club of Western Cape, a role I approach with a firm commitment to openness and transparency in all our endeavours. Our home here in Cape Town is a lively and loving one, shared with our wonderful family of four Australian Shepherds and two cherished feline companions.`,
    penny: `As a founding member, she was there from the very beginning, helping to shape the club's vision and growth. Her dedication to the breed runs deep, evidenced by a lifetime spent with these intelligent and loyal dogs – a remarkable nine Aussies have shared her life. Beyond her role as a breeder, Penny is also very involved in the show ring, proudly exhibiting her dogs and contributing to the breed's presence and recognition. Her hands-on experience in showing further enriches her understanding of the breed standard and makes her a valuable resource and a passionate advocate within the club.`,
    lizell: `Formerly the club treasurer and now proudly serving as secretary, she’s been a cornerstone of the team from day one.Lizelle’s love affair with Australian Shepherds began 22 years ago when she met an Aussie named Mathilda for the first time —and everything changed. Captivated by their intelligence, loyalty, and those expressive eyes that seem to understand your every thought, she knew she’d found her breed. Since then, she’s had the joy (and occasional chaos!) of sharing life with three Aussies, each one deepening her admiration for their spirited nature, emotional sensitivity, and endless energy.For Lizelle, they’re more than pets—they’re companions, confidants, and co-adventurers. Her Aussies share their home with a vibrant crew of three Pomeranians and four cats, creating a household full of personality and paw prints.With a heart fully committed to the breed and a passion for community, Lizelle is always ready to support the club and celebrate the dogs who bring us all together.
`,
    tracey: `Her deep commitment to Australian Shepherds is clear through her active involvement over the past three years and her enjoyment of showing herding dogs. In addition to her dedication to the breed, Tracey has achieved multiple significant wins in the show ring. Sharing her home with two Shetland Sheepdogs and a cat, her helpful nature is also consistently valued by those around her.`,
    gabi: `Gabi's journey in the world of purebred dogs began many years ago in the exciting realm of child and junior handling. It was there that her deep affection for Australian Shepherds first blossomed, nurtured by her beloved Aussies who have since crossed the rainbow bridge. That early passion has only grown stronger, leading Gabi to a successful show career as a professional handler. Her expertise and genuine love for the breed shine through in the show ring. As a founding member of the Australian Shepherd Club, Gabi's dedication to the breed extends far beyond her professional endeavours, shaping and supporting the community that celebrates these remarkable dogs. Gabi's generosity extends beyond her expertise in the show ring and her commitment to the breed and the club; she is always willing to lend a helping hand to newcomers and fellow enthusiasts alike. Her early years, a vibrant tapestry woven with the thrill of sledding huskies – a passion inherited from her parents – instilled in her a deep appreciation for the bond between humans and animals. Today, as a parent herself, Gabi beams with pride as her daughter follows in her footsteps, blossoming into a huge animal lover, ensuring that this legacy of connection and care continues to flourish.`,
    melani: `Melani Nezar has been a keystone of the Australian Shepherd Club Western Cape since its re-establishment. For the past six years, she served as our dedicated Secretary. In 2025, Melani stepped down from her secretarial role to embrace the joyous arrival of her twin daughters. Balancing a bustling household filled with both children and dogs understandably required her full attention. Professionally, Melani is a doctor, a career that speaks to her sharp intellect, dedication, and meticulous nature – qualities she undoubtedly brought to her service within the club. She served with great vision and enthusiasm, playing a vital role in the club's organization and development. Over her tenure as Secretary, Melani amassed a wealth of club knowledge and also possesses a strong understanding of the Australian Shepherd breed. Her contributions have been invaluable, and her passion for the club and the breed has left a lasting positive mark on our community. Melani shares her home with thirteen Australian Shepherds and Max, her beloved Jack Russel Terrier.`,
    angie: `Having recently relocated to the beautiful city of Cape Town from the UK, my husband and I bring with us 24 years of deep involvement with Australian Shepherds. For eight of those years, we proudly held the position of top Australian Shepherd breeders in the UK, culminating in the esteemed title of top all-breeds breeder in 2015. My passion for the breed and my commitment to excellence have led to extensive judging engagements across Europe. As a qualified herding judge and a breed specialist in the UK, I've had the distinct honour of judging at the prestigious Crufts show on two separate occasions. Furthermore, my judging experience extends to World Shows, European Shows, and numerous Club specialty shows around the globe. My passion for canine excellence extends beyond Australian Shepherds. Earlier in my involvement with purebreds, I had the pleasure of owning magnificent Old English Sheepdogs. I fondly recall the rewarding experience of personally grooming these impressive dogs in preparation for shows, a hands-on approach that deepened my understanding of breed-specific needs and presentation. Our home here in Cape Town is currently shared with our beloved family of four Australian Shepherds and two cherished cats.`,
   chris: `As a founding member of the revitalized club in 2018, Chris dedicated the past seven years (until 2025) to serving as our esteemed Chairman. His leadership during this period has been instrumental in the club's growth and success, guiding us from strength to strength. In 2025, Chris made the decision to step down from his role as Chairman to embrace the joyous arrival of his twin daughters. While his daily leadership may have changed, his impact on the club remains profound. Chris is considered an integral part of the club's foundation and ongoing spirit. His extensive knowledge of the Australian Shepherd breed is highly valued by our members. Chris possesses a deep understanding of their temperament, health, and breed standards, readily sharing his insights and experience. A true testament to his love for dogs, Chris is the proud owner of an impressive pack: thirteen Australian Shepherds and one cherished Jack Russell Terrier, who holds the distinction of being his very first canine companion. Chris's personal experience and dedication to his dogs enrich our club and underscore his commitment to the well-being of all dogs, particularly our beloved Aussies.`,
    judy: `Judy Hirsch's connection to our club stretches back to its very foundation in June 2008, marking her as a long-standing and integral member from the very beginning. Her introduction to the captivating world of Australian Shepherds came through her daughter, whose profound adoration for the breed ignited a similar passion within Judy. Since then, Judy has wholeheartedly embraced the Aussie life, having shared her home and heart with six of these intelligent and loyal dogs. Currently, her household is a lively haven to four beloved Australian Shepherds, each undoubtedly a cherished member of her family. Judy's unwavering dedication and deep affection for her Aussies truly exemplify what it means to be a devoted "Aussie mom," and her enduring presence continues to enrich our club's community and history.`
};

const modal = document.getElementById('bio-modal');
const closeBtn = document.querySelector('.close-btn');

if (modal && closeBtn) {
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const member = button.getAttribute('data-member');
            document.getElementById('modal-text').innerText = bios[member];
            modal.style.display = 'block';
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
