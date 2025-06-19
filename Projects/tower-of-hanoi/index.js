let moveCount = 0;
let totalDiscs = 3;
let towers = [];
let draggedDisc = null;
let sourceTowerId = null;

function startGame() {
  moveCount = 0;
  document.getElementById("moveCount").textContent = moveCount;
  totalDiscs = parseInt(document.getElementById("discCount").value);
  document.getElementById("minMoves").textContent = Math.pow(2, totalDiscs) - 1;

  // Clear towers
  for (let i = 1; i <= 3; i++) {
    const tower = document.getElementById("tower" + i);
    tower.innerHTML = "";
  }

  // Create discs
  const tower1 = document.getElementById("tower1");
  for (let i = totalDiscs; i >= 1; i--) {
    const disc = document.createElement("div");
    disc.className = "disc";
    disc.dataset.size = i;
    disc.style.bottom = `${(totalDiscs - i) * 22}px`;
    disc.setAttribute("draggable", true);
    disc.addEventListener("dragstart", handleDragStart);
    tower1.appendChild(disc);
  }

  towers = [
    document.getElementById("tower1"),
    document.getElementById("tower2"),
    document.getElementById("tower3")
  ];

  // Add event listeners
  towers.forEach(tower => {
    tower.addEventListener("dragover", handleDragOver);
    tower.addEventListener("drop", handleDrop);
  });

  // Hide prompt
  document.getElementById("solutionPrompt").classList.add("d-none");
}

function handleDragStart(e) {
  draggedDisc = e.target;
  sourceTowerId = draggedDisc.parentElement.id;
  e.dataTransfer.setData("text/plain", draggedDisc.dataset.size);
}

function handleDragOver(e) {
  e.preventDefault(); // Needed to allow drop
}

function handleDrop(e) {
  e.preventDefault();
  const targetTower = e.currentTarget;

  if (!draggedDisc || targetTower.id === sourceTowerId) return;

  const topDisc = [...targetTower.children].filter(c => c.classList.contains("disc")).at(-1);
  const draggedSize = parseInt(draggedDisc.dataset.size);
  const topSize = topDisc ? parseInt(topDisc.dataset.size) : Infinity;

  if (draggedSize < topSize) {
    targetTower.appendChild(draggedDisc);
    adjustDiscPosition(targetTower);
    moveCount++;
    updateMoveCount();
    checkWin();
  } else {
    alert("Invalid move: You can only place smaller discs on top of larger ones.");
  }
}

function adjustDiscPosition(tower) {
  const discs = [...tower.children].filter(c => c.classList.contains("disc"));
  discs.forEach((disc, idx) => {
    disc.style.bottom = `${idx * 22}px`;
  });
}

function updateMoveCount() {
  document.getElementById("moveCount").textContent = moveCount;
}

function checkWin() {
  const finalTower = document.getElementById("tower3");
  const allDiscs = [...finalTower.children].filter(c => c.classList.contains("disc"));
  const msg = document.getElementById("msg");
  if (allDiscs.length === totalDiscs) {
    if (moveCount === Math.pow(2, totalDiscs) - 1) {
        msg.textContent = "🎉 Congratulations! You solved it in minimum steps.";
    } else {
      document.getElementById("solutionPrompt").classList.remove("d-none");
    }
  }
}

function showSolution() {
  alert("Showing optimal solution...");
  // Optional: implement animated solution here
  hanoiSolver(totalDiscs, 'tower1', 'tower3', 'tower2');
}

// Just logs solution — animation can be added later
function hanoiSolver(n, from, to, aux) {
  if (n === 0) return;
  hanoiSolver(n - 1, from, aux, to);
  console.log(`Move disc ${n} from ${from} to ${to}`);
  hanoiSolver(n - 1, aux, to, from);
}
