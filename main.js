const accordionItemHeader = document.querySelectorAll(".accordian-item-header");
accordionItemHeader.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        const accordionBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains('active')){
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }
        else{
            accordionBody.style.maxHeight = 0;
        }
    });
});