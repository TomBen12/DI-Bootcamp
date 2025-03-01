function myMove() {
  const animateDiv = document.getElementById("animate");
  const containerDiv = document.getElementById("container");

  let positionLeft = parseInt(animateDiv.style.left) || 0;
  const rightWall = containerDiv.clientWidth - animateDiv.clientWidth;
  const moveID = setInterval(() => {
    if (positionLeft >= rightWall) {
      clearInterval(moveID);
      return;
    }
    positionLeft += 1;
    animateDiv.style.left = positionLeft + "px";
  }, 1);
}
