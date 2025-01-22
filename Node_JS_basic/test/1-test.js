const assert = require("assert");
const { spawn } = require("child_process");

describe("Test du script 1-stdin.js", () => {
  it("devrait afficher le nom entré", done => {
    const child = spawn("node", ["1-stdin.js"]);

    let output = "";

    // Ecouter et enregistrer les données envoyées à la sortie standard
    child.stdout.on("data", data => {
      output += data.toString();
    });

    // Simuler l'entrée de l'utilisateur
    child.stdin.write("Johan\n");

    child.on("close", code => {
      assert(output.includes("Your name is Johan"));
      assert(output.includes("This important software is now closing"));
      done(); // Fin du test
    });
  });
});
