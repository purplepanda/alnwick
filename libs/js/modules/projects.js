$(document).ready(function() {    
    var projectData = [{
            id: 0,
            title: "The Crown Jewels Exhibition",
            location: "HM Tower of London, England",
            description: "From concept through closeout, the restoration and upgrade of the Waterloo Building included a new display for the English Crown Jewels and was completed to budget and a preset opening date. Undisturbed visitor access to the old exhibition was provided during construction while maintaining environmental conditions for the artifacts and State-of-the-art security.", 
            thumb: {
                src: "/libs/img/projects/01thumb.jpg",
                alt: "HM Tower of London"
            },
            images: [{
                imgSrc: "/libs/img/projects/01A.jpg", 
                altText: "HM Tower of London"
            }, {
                imgSrc: "/libs/img/projects/01C.jpg", 
                altText: "HM Tower of London, The heart of the collection"     
            }, {
                imgSrc: "/libs/img/projects/01CC.jpg", 
                altText: "HM Tower of London"     
            }, {
                imgSrc: "/libs/img/projects/01CCC.jpg", 
                altText: "HM Tower of London. Preparing for Royal opening"     
            }], 
            type: "cultural-institutional"
        }, {
            id: 1,
            title: "Ardsley Country Club",
            location: "Ardsley, New York",
            description: "A catastrophic fire rendered the building unusable. However, the Club saw the silver lining in this calamity and used the opportunity to significantly expand their space and facilities offered to Club members. This required developing two designs to satisfy the insurance carrier's needs.", 
            thumb: {
                src: "/libs/img/projects/02thumb.jpg",
                alt: "Ardsley Country Club devestated by fire"
            },
            images: [{
                imgSrc: "/libs//img/projects/02A.jpg", 
                altText: "Ardsley Country Club devestated by fire"
            }, {
                imgSrc: "/libs/img/projects/02AA.jpg", 
                altText: "Ardsley Country Club fire damage"     
            }, {
                imgSrc: "/libs/img/projects/02B.jpg", 
                altText: "Ardsley Country Club bird's eye view"     
            }, {
                imgSrc: "/libs/img/projects/02C.jpg", 
                altText: "Ardsley Country Club work completed"     
            }], 
            type: "disaster-recovery"
        },  {
            id: 2,
            title: "Canary Wharf Phase I</br>KPF & SOM buildings",
            location: "London, England",
            description: "Both buildings had to achieve the highest level of quality within a very tight timeframe and budget. All challenged by extremely limited access available as the initial phase if infrastructure was being built all around.",
            thumb: {
                src: "/libs/img/projects/03thumb.jpg",
                alt: "Canary Wharf, KPF's FC4 and FC6"
            },
            images: [{
                imgSrc: "/libs/img/projects/03A.jpg", 
                altText: "Canary Wharf Map"
            }, {
                imgSrc: "/libs/img/projects/03C.jpg", 
                altText: "Canary Wharf, KPF's FC4 and FC6"     
            }, {
                imgSrc: "/libs/img/projects/03CC.jpg", 
                altText: "Canary Wharf, SOM's FC2"     
            }],  
            type: "commercial-residential"
        }, {
            id: 3,
            title: "The Museum of Modern Art",
            location: "New York, New York",
            description: "In multiple construction phases, New York's favorite Museum has provided greater and improved visitor experiences since its 2004 reopening.",
            thumb: {
                src: "/libs/img/projects/04thumb.jpg",
                alt: "Museum of Modern Art Cullman Wing"
            },
            images: [{
                imgSrc: "/libs/img/projects/04B.jpg", 
                altText: "Museum of Modern Art Cullman Wing"
            }, {
                imgSrc: "/libs/img/projects/04C.jpg", 
                altText: "Museum of Modern Art Cullman Wing"    
            }, {
                imgSrc: "/libs/img/projects/04CC.jpg", 
                altText: "Museum of Modern Art Galleries"     
            }, {
                imgSrc: "/libs/img/projects/04CCC.jpg", 
                altText: "Museum of Modern Art Gallery"     
            }, {
                imgSrc: "/libs/img/projects/04CCCC.jpg", 
                altText: "Museum of Modern Art Atrium"     
            }, {
                imgSrc: "/libs/img/projects/04D.jpg", 
                altText: "Planned new MoMA galleries, 53 West 53rd Street"     
            }, {
                imgSrc: "/libs/img/projects/04DD.jpg", 
                altText: "Museum of Modern Art Garden"     
            }],   
            type: "cultural-institutional"
        }, {
            id: 4,
            title: "The Joseph Bruno Trust",
            location: "Queens, New York",
            description: "After the fire, the debris needed to be cleared out under ACM rules causing some delay to rebuilding. The Trust used the opportunity to design a building fit to serve this area's up-and-coming status.", 
            thumb: {
                src: "/libs/img/projects/05thumb.jpg",
                alt: "The Joseph Bruno Trust Building fire damaged"
            },
            images: [{
                imgSrc: "/libs/img/projects/05A.jpg", 
                altText: "The Joseph Bruno Trust Building fire damaged"
            }, {
                imgSrc: "/libs/img/projects/05C.jpg", 
                altText: "The Joseph Bruno Trust Building completed"     
            }], 
            type: "disaster-recovery"
        }, {
            id: 5,
            title: "EDSI",
            location: "Washington Heights & Jackson Heights, New York",
            description: "Small footprint high quality fit-out needed to be completed in short duration to achieve funding. The new facilities train and encourage first generation and younger residents into NYC's workforce.", 
            thumb: {
                src: "/libs/img/projects/06thumb.jpg",
                alt: "EDSI Reception, Washington Heights"
            },
            images: [{
                imgSrc: "/libs/img/projects/06C.jpg", 
                altText: "Reception, Jackson Heights"
            }, {
                imgSrc: "/libs/img/projects/06CC.jpg", 
                altText: "Reception, Washington Heights"     
            }], 
            type: "commercial-residential"
        }, {
            id: 6,
            title: "World Trade Center</br>Memorial Museum",
            location: "New York, New York",
            description: "Getting the new building out of the ground provided the impetus to drive forward to a suitably Grand opening.",
            thumb: {
                src: "/libs/img/projects/07thumb.jpg",
                alt: "World Trade Center Memorial Museum"
            },
            images: [{
                imgSrc: "/libs/img/projects/07B.jpg", 
                altText: "World Trade Center Memorial Museum"
            }, {
                imgSrc: "/libs/img/projects/07C.jpg", 
                altText: "World Trade Center Memorial Museum - the intent"     
            }], 
            type: "cultural-institutional"
        }, {
            id: 7,
            title: "100 11th Avenue",
            location: "New York, New York",
            description: "Super Storm Sandy did her worst. The building held out until City power was shut down, and then the lower floors became inundated; destroying all mechanical and electrical equipment.  The building was one of the first to be allowed re-occupation.", 
            thumb: {
                src: "/libs/img/projects/08thumb.jpg",
                alt: "100 11th Avenue Super Storm Sandy"
            },
            images: [{
                imgSrc: "/libs/img/projects/08A.jpg", 
                altText: "100 11th Avenue Super Storm Sandy"
            }, {
                imgSrc: "/libs/img/projects/08AA.jpg", 
                altText: "100 11th Avenue Super Storm Sandy"     
            }], 
            type: "disaster-recovery"
        }, {
            id: 8,
            title: "Canary Wharf</br>Conceptual Logistics Planning",
            location: "London, England",
            description: "The logistical planning was key to the success of the first phase of Canary Wharf's development.  Plan properly for the 6,500/day workforce that would be needed; and provide suitable supply routes that do not overwhelm the existing infrastructure and populous.", 
            thumb: {
                src: "/libs/img/projects/09thumb.jpg",
                alt: "Canary Wharf"
            },
            images: [{
                imgSrc: "/libs/img/projects/09A.jpg", 
                altText: "Canary Wharf, West India Docks 1992-1993"
            }, {
                imgSrc: "/libs/img/projects/09AA.jpg", 
                altText: "Canary Wharf, West India Docks 1992-1993"     
            }, {
                imgSrc: "/libs/img/projects/09B.jpg", 
                altText: "Canary Wharf"     
            }, {
                imgSrc: "/libs/img/projects/09C.jpg", 
                altText: "Canary Wharf"     
            }, {
                imgSrc: "/libs/img/projects/09CC.jpg", 
                altText: "Canary Wharf"     
            }], 
            type: "commercial-residential"
        }, {
            id: 9,
            title: "Cadman Plaza General Post Office Adaptive Reuse",
            location: "Brooklyn, New York",
            description: "Cadman Plaza's elegant granite building saw significant adaption and improvements while allowing USPS to continue their daily operations from with in.",
            thumb: {
                src: "/libs/img/projects/10thumb.jpg",
                alt: "Cadman Plaza General Post Office"
            },
            images: [{
                imgSrc: "/libs/img/projects/10A.jpg", 
                altText: "Cadman Plaza General Post Office"
            }, {
                imgSrc: "/libs/img/projects/10AA.jpg", 
                altText: "Cadman Plaza General Post Office"     
            }], 
            type: "cultural-institutional"
        }, {
            id: 10,
            title: "Rego Park",
            location: "Queens, New York",
            description: "Damage can occur when exuberant neighbors don't take care.", 
            thumb: {
                src: "/libs/img/projects/11thumb.jpg",
                alt: "Rego Park, Queens, New York"
            },
            images: [{
                imgSrc: "/libs/img/projects/11A.jpg", 
                altText: "Rego Park, Queens, New York"
            }, {
                imgSrc: "/libs/img/projects/11B.jpg", 
                altText: "Rego Park, Queens, New York"     
            }], 
            type: "disaster-recovery"
        }, {
            id: 11,
            title: "Atturaif Living Museum",
            location: "Riyadh, Saudi Arabia",
            description: "Changing the team part way through a sensitive project poses challenges. Thoughtful dialogue allows for the transition to occur without too much friction.", 
            thumb: {
                src: "/libs/img/projects/12thumb.jpg",
                alt: "Atturaif Living Museum, Riyadh, Saudi Arabia"
            },
            images: [{
                imgSrc: "/libs/img/projects/12B.jpg", 
                altText: "Atturaif Living Museum, Riyadh, Saudi Arabia"
            }, {
                imgSrc: "/libs/img/projects/12C.jpg", 
                altText: "Atturaif Living Museum, Riyadh, Saudi Arabia"     
            }], 
            type: "transition-resolution"
        }, {
            id: 12,
            title: "Trump Village #3",
            location: "Brooklyn, New York",
            description: "Having been secure for decades, Sandy was just too powerful to be resisted. MEP services were seriously compromised once she had passed.",
            thumb: {
                src: "/libs/img/projects/14thumb.jpg",
                alt: "Trump Village #3, Brooklyn, New York"
            },
            images: [{
                imgSrc: "/libs/img/projects/14A.jpg", 
                altText: "Trump Village #3, Brooklyn, New York"
            }], 
            type: "disaster-recovery"
        }, {
            id: 13,
            title: "High School for Law",
            location: "Queens, New York",
            description: "NYC's first new High School in decades, the innovative design - allowing for two double floor height gymnasia, one above the other, and the student cafeteria sitting above them - proved quite a construction challenge.",
            thumb: {
                src: "/libs/img/projects/15thumb.jpg",
                alt: "High School for Law, Queens, New York"
            },
            images: [{
                imgSrc: "/libs/img/projects/15B.jpg", 
                altText: "High School for Law, Queens, New York"
            }, {
                imgSrc: "/libs/img/projects/15BB.jpg", 
                altText: "High School for Law, Queens, New York"     
            }], 
            type: "cultural-institutional"
        }, {
            id: 14,
            title: "Battery Park City Authority, Pier 'A'",
            location: "New York, New York",
            description: "This Pier took the full force of Sandy.  Presented well, the insurance claim was settled promptly.",
            thumb: {
                src: "/libs/img/projects/16thumb.jpg",
                alt: "Battery Park City Authority, Pier 'A'"
            },
            images: [{
                imgSrc: "/libs/img/projects/16A.jpg", 
                altText: "Battery Park City Authority, Pier 'A'"
            }, {
                imgSrc: "/libs/img/projects/16B.jpg", 
                altText: "Battery Park City Authority, Pier 'A'"
            }], 
            type: "disaster-recovery"
        }, {
            id: 15,
            title: "Tren Urbano",
            location: "San Juan, Puerto Rico",
            description: "Planning for the construction phase during design development was key to this project's successful delivery.", 
            thumb: {
                src: "/libs/img/projects/17thumb.jpg",
                alt: "Tren Urbano, San Juan, Puerto Rico"
            },
            images: [{
                imgSrc: "/libs/img/projects/17A.jpg", 
                altText: "Tren Urbano, San Juan, Puerto Rico"
            }, {
                imgSrc: "/libs/img/projects/17B.jpg", 
                altText: "Tren Urbano, San Juan, Puerto Rico"     
            }], 
            type: "cultural-institutional"
        }, {
            id: 16,
            title: "Coney Island Commons",
            location: "Brooklyn, New York",
            description: "In construction at the time of the storm, this project suffered the full effects of Sandy's might. Its claim was settled promptly.", 
            thumb: {
                src: "/libs/img/projects/18thumb.jpg",
                alt: "Super Storm Sandy filled the pool prematurely! Coney Island Commons, Brooklyn, New York"
            },
            images: [{
                imgSrc: "/libs/img/projects/18B.jpg", 
                altText: "Super Storm Sandy filled the pool prematurely! Coney Island Commons, Brooklyn, New York"
            }], 
            type: "disaster-recovery"
        }, {
            id: 17,
            title: "Canal Street",
            location: "New York, New York",
            description: "Freezing during cold winters can have really damaging effects.",
            thumb: {
                src: "/libs/img/projects/20thumb.jpg",
                alt: "Frozen sprinkler pipe flooding, Canal Street, New York, New York"
            },
            images: [{
                imgSrc: "/libs/img/projects/20B.jpg", 
                altText: "Frozen sprinkler pipe flooding, Canal Street, New York, New York"
            }], 
            type: "disaster-recovery"
        }
    ];


    function createProjectTiles(data) {
        $(data).each(function(idx, item) {

            var images = item.images,
                carouselDiv = $("<div/>", { "class" : "project__carousel-wrapper" });

            $(images).each(function (idx, img) {
                var img     = $("<img/>", { "src" : img.imgSrc, "alt" : img.altText }),
                    imgDiv  = $("<div/>", { "class" : "project__carousel-item", "html" : img });

                $(carouselDiv).append(imgDiv);
            });

                      
            var projectTile = $("<div/>", { "class" : "project",
                                            "data-type" : item.type }), 
                image       = $("<img/>", { "src"   : item.thumb.src,
                                            "alt"   : item.thumb.alt }),
                imageDiv    = $("<a/>",   { "href"  : "#img"+idx,
                                            "class" : "project__image",
                                            "rel"   : "modal:open",
                                            "html"  : image }),
                modalDiv    = $("<div/>", { "id"    : "img"+idx,
                                            "class" : "modal",
                                            "html"  : carouselDiv }),
                title       = $("<h2/>",  { "class" : "project__info-title",
                                            "html"  : item.title }),
                location    = $("<h5/>",  { "class" : "project__info-location",
                                            "html"  : item.location }),
                description = $("<p/>",   { "class" : "project__info-description",
                                            "html"  : item.description }),
                infoDiv     = $("<div/>", { "class" : "project__info",
                                            "html"  : title });

            infoDiv.append(location).append(description);
            projectTile.append(imageDiv).append(modalDiv).append(infoDiv);

            $('.projects').append(projectTile); 
        });
    }

    createProjectTiles(projectData);
    
    $("a[href*='#img']").on("click", function () {
        var carousel = $(this).parent('.project').find('.project__carousel-wrapper');

        carousel.slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
        });
    });
});
