function generateExcuse() {
  const subjects = ["A lonely merchant", "My crazy neighbor", "A stray cat", "A wizard", "A time traveler"];
  const actions = ["kicked", "stole", "burned", "teleported", "transformed"];
  const objects = ["my car", "my homework", "my shoes", "my phone", "my sandwich"];
  const locations = ["near the toilet", "in the park", "at my house", "on the moon", "under the bed"];
  
  let excuse = `${subjects[Math.floor(Math.random() * subjects.length)]} ` +
               `${actions[Math.floor(Math.random() * actions.length)]} ` +
               `${objects[Math.floor(Math.random() * objects.length)]} ` +
               `${locations[Math.floor(Math.random() * locations.length)]}`;
  

  document.getElementById("excuse").innerText = excuse;
}

window.onload = generateExcuse;
