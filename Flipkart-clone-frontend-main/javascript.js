const boxes = document.querySelectorAll('.offerimg-subtxt1,.viewallbtn');

  function handleMouseOver(event) {
    event.target.style.textDecoration = 'underline';
  }

  function handleMouseOut(event) {
    event.target.style.textDecoration = 'none';
  }

  boxes.forEach(box => {
    box.addEventListener('mouseover', handleMouseOver);
    box.addEventListener('mouseout', handleMouseOut);
  });

  const hoverableDivs = document.querySelectorAll(".offerimg1, .offerimg2,.offerimg3, .offerimg4,.offerimg5, .offerimg6,.offerimg7, .offerimg8");

  hoverableDivs.forEach((hoverDiv) => {
    hoverDiv.addEventListener("mouseenter", () => {
      hoverDiv.style.borderColor= "#ee3b3b"; 
    });
  
    hoverDiv.addEventListener("mouseleave", () => {
      hoverDiv.style.borderColor = "black"; 
    });
  });
  
