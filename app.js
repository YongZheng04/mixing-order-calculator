document.addEventListener('DOMContentLoaded', () => {
  // Function to load CSV data from Google Sheets
  async function loadSheet(url) {
    return new Promise((resolve, reject) => {
      Papa.parse(url, {
        download: true,
        header: true,
        complete: (result) => resolve(result.data),
        error: (error) => reject(error)
      });
    });
  }

  // Load data from Google Sheets and initialize global variables
  async function loadData() {
    try {
      // Replace these URLs with the published CSV URLs from Google Sheets
      const nutrientNonAsahi = await loadSheet('https://docs.google.com/spreadsheets/d/e/2PACX-1vR2a_aIz6qbRz1tvdFpwJmJABRdrda7VvR3uAxdI2U7HQmYMsW9eak6n3OjF1s3hFQ3MquMYEAcAQRQ/pub?gid=0&single=true&output=csv');
      const nutrientAsahi = await loadSheet('https://docs.google.com/spreadsheets/d/e/2PACX-1vR2a_aIz6qbRz1tvdFpwJmJABRdrda7VvR3uAxdI2U7HQmYMsW9eak6n3OjF1s3hFQ3MquMYEAcAQRQ/pub?gid=1709300494&single=true&output=csv');
      const materialPriority = await loadSheet('https://docs.google.com/spreadsheets/d/e/2PACX-1vR2a_aIz6qbRz1tvdFpwJmJABRdrda7VvR3uAxdI2U7HQmYMsW9eak6n3OjF1s3hFQ3MquMYEAcAQRQ/pub?gid=1604551484&single=true&output=csv');
      const materialPrices = await loadSheet('https://docs.google.com/spreadsheets/d/e/2PACX-1vR2a_aIz6qbRz1tvdFpwJmJABRdrda7VvR3uAxdI2U7HQmYMsW9eak6n3OjF1s3hFQ3MquMYEAcAQRQ/pub?gid=1516469959&single=true&output=csv');
      const asahiPrices = await loadSheet('https://docs.google.com/spreadsheets/d/e/2PACX-1vR2a_aIz6qbRz1tvdFpwJmJABRdrda7VvR3uAxdI2U7HQmYMsW9eak6n3OjF1s3hFQ3MquMYEAcAQRQ/pub?gid=1918293291&single=true&output=csv');
      const itemsData = await loadSheet('https://docs.google.com/spreadsheets/d/e/2PACX-1vR2a_aIz6qbRz1tvdFpwJmJABRdrda7VvR3uAxdI2U7HQmYMsW9eak6n3OjF1s3hFQ3MquMYEAcAQRQ/pub?gid=1793591807&single=true&output=csv');
      const itemMaterials = await loadSheet('https://docs.google.com/spreadsheets/d/e/2PACX-1vR2a_aIz6qbRz1tvdFpwJmJABRdrda7VvR3uAxdI2U7HQmYMsW9eak6n3OjF1s3hFQ3MquMYEAcAQRQ/pub?gid=90869555&single=true&output=csv');

      // Convert to original data.js format
      window.nutrientContributionsNonAsahi = nutrientNonAsahi.reduce((acc, row) => ({
        ...acc,
        [row.Material]: { N: +row.N || 0, P2O5: +row.P2O5 || 0, K2O: +row.K2O || 0, MgO: +row.MgO || 0 }
      }), {});
      window.nutrientContributionsAsahi = {
        ...window.nutrientContributionsNonAsahi,
        ...nutrientAsahi.reduce((acc, row) => ({
          ...acc,
          [row.Material]: { N: +row.N || 0, P2O5: +row.P2O5 || 0, K2O: +row.K2O || 0, MgO: +row.MgO || 0 }
        }), {})
      };
      window.materialPriority = materialPriority.map(row => ({
        name: row.Name,
        divisibleBy: +row.DivisibleBy || 25
      }));
      window.materialPrices = materialPrices.reduce((acc, row) => ({
        ...acc,
        [row.Material]: +row.Price || 0
      }), {});
      window.asahiPrices = asahiPrices.reduce((acc, row) => ({
        ...acc,
        [row.Material]: +row.Price || 0
      }), {});
      window.items = itemsData.reduce((acc, row) => {
        const materials = itemMaterials
          .filter(m => m['Item Name'] === row['Item Name'])
          .map(m => ({
            material: m.Material,
            percentage: +m.Percentage || 0
          }));
        return {
          ...acc,
          [row['Item Name']]: {
            bagPrice: +row['Bag Price'] || 0,
            materials,
            nutrients: {
              N: +row.N || 0,
              P2O5: +row.P2O5 || 0,
              K2O: +row.K2O || 0,
              MgO: +row.MgO || 0
            }
          }
        };
      }, {});

      // Validate data
      if (Object.keys(window.materialPrices).length === 0 ||
          Object.keys(window.items).length === 0 ||
          Object.keys(window.nutrientContributionsAsahi).length === 0 ||
          Object.keys(window.nutrientContributionsNonAsahi).length === 0) {
        throw new Error('One or more data sets are empty.');
      }
    } catch (error) {
      console.error('Error loading data from Google Sheets:', error);
      alert('Failed to load data from Google Sheets. Please check the sheet URLs and ensure they are published correctly.');
      return false;
    }
    return true;
  }

  // Initialize Select2 for itemName
  $('#itemName').select2({
    placeholder: "-- Select an item --",
    allowClear: true,
    width: '100%'
  });

  const itemName = document.getElementById("itemName");
  const bagCostField = document.getElementById("bagCost");
  const materialCostField = document.getElementById("materialCost");
  const mixingCostField = document.getElementById("mixingCost");
  const transportOutField = document.getElementById("transportOut");
  const totalCostField = document.getElementById("totalCost");
  const grossProfitField = document.getElementById("grossProfit");
  const gpMarginField = document.getElementById("gpMargin");
  const sellingPriceInput = document.getElementById("sellingPrice");
  const tonnageInput = document.getElementById("tonnage");
  const commissionInput = document.getElementById("commission");
  const transportInField = document.getElementById("transportIn");
  const materialTableBody = document.getElementById("materialTableBody");
  const mixingLocation = document.getElementById("mixingLocation");
  const solveBtn = document.getElementById("solve-btn");
  const addBtn = document.getElementById("add-btn");
  const totalRatio = document.getElementById("totalRatio");

  let materialRows = [];

  // Parse nutrient values from item name or use manual values from data.js
  function parseNutrientValues(itemName) {
    if (items[itemName]?.nutrients) {
      const { N, P2O5, K2O, MgO } = items[itemName].nutrients;
      const total = (N || 0) + (P2O5 || 0) + (K2O || 0) + (MgO || 0);
      return { N, P2O5, K2O, MgO, total };
    }
    const match = itemName.match(/(\d+)-(\d+)-(\d+)-(\d+)/);
    if (match) {
      const [, N, P2O5, K2O, MgO] = match.map(Number);
      const total = N + P2O5 + K2O + MgO;
      return { N, P2O5, K2O, MgO, total };
    }
    return { N: 0, P2O5: 0, K2O: 0, MgO: 0, total: 0 };
  }

  // Populate itemName dropdown in alphabetical order
  function populateItemDropdown() {
    const sortedItems = Object.keys(items).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    const options = sortedItems.map(item => 
      `<option value="${item}">${item}</option>`
    ).join("");
    itemName.innerHTML = `<option value="" disabled selected>--Select an item--</option>${options}`;
  }

  // Add material row with optional material and ratio parameters
  function addMaterialRow(material = "", ratio = "0") {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td data-label="">
        <select class="material-select" style="width: 100%">
          <option value="">-- Select --</option>
          ${Object.keys(materialPrices).map(m => `<option value="${m}">${m}</option>`).join("")}
        </select>
      </td>
      <td data-label="">
        <input type="range" class="input-ratio" min="0" max="1000" step="1" value="${ratio}">
        <input type="number" class="ratio-value" min="0" max="1000" step="1" value="${ratio}">
      </td>
      <td data-label=""><input type="number" class="unit-price" min="0" step="0.01" value="0.00"></td>
      <td data-label=""><span class="total-cost">0.00</span></td>
      <td data-label="Action"><button class="remove-btn">Remove</button></td>
    `;
    materialTableBody.appendChild(row);
    materialRows.push(row);

    const materialSelect = $(row).find(".material-select");
    materialSelect.select2({
      width: '100%',
      dropdownAutoWidth: true
    });
    if (material) {
      materialSelect.val(material).trigger('change.select2');
      updateMaterialPrice(row, material);
    }
    materialSelect.on('select2:select', () => {
      const selectedMaterial = materialSelect.val();
      updateMaterialPrice(row, selectedMaterial);
      recalculateCosts();
      recalculateNutrients();
    });

    const rangeInput = row.querySelector(".input-ratio");
    const numberInput = row.querySelector(".ratio-value");
    rangeInput.addEventListener("input", () => {
      numberInput.value = rangeInput.value;
      recalculateCosts();
      recalculateNutrients();
    });
    rangeInput.addEventListener("touchmove", () => {
      numberInput.value = rangeInput.value;
      recalculateCosts();
      recalculateNutrients();
    });
    numberInput.addEventListener("input", () => {
      let val = parseInt(numberInput.value, 10);
      if (isNaN(val) || val < 0) val = 0;
      if (val > 1000) val = 1000;
      numberInput.value = val;
      rangeInput.value = val;
      recalculateCosts();
      recalculateNutrients();
    });

    const unitPriceInput = row.querySelector(".unit-price");
    unitPriceInput.addEventListener("input", () => {
      recalculateCosts();
    });

    row.querySelector(".remove-btn").addEventListener("click", () => {
      row.remove();
      materialRows = materialRows.filter(r => r !== row);
      recalculateCosts();
      recalculateNutrients();
    });
  }

  // Update material price based on mixing location
  function updateMaterialPrice(row, material) {
    const isAsahi = mixingLocation.value === "ASAHI";
    const price = isAsahi && asahiPrices[material] !== undefined ? asahiPrices[material] : materialPrices[material] !== undefined ? materialPrices[material] : 0;
    row.querySelector(".unit-price").value = price.toFixed(2);
  }

  // Update all material prices in the table when mixing location changes
  function updateAllMaterialPrices() {
    materialRows.forEach(row => {
      const materialSelect = $(row).find(".material-select");
      const selectedMaterial = materialSelect.val();
      if (selectedMaterial) {
        updateMaterialPrice(row, selectedMaterial);
      }
    });
    recalculateCosts();
    recalculateNutrients();
  }

  // Recalculate nutrient values based on materials and mixing location
  function recalculateNutrients() {
    const isAsahi = mixingLocation.value === "ASAHI";
    const contributions = isAsahi ? nutrientContributionsAsahi : nutrientContributionsNonAsahi;
    let calculated = { N: 0, P2O5: 0, K2O: 0, MgO: 0 };
    let totalInput = 0;

    materialRows.forEach(row => {
      const material = row.querySelector(".material-select").value;
      const ratio = parseFloat(row.querySelector(".input-ratio").value) || 0;
      totalInput += ratio;
      if (material && contributions[material]) {
        const factor = ratio / 1000;
        calculated.N += factor * (contributions[material].N || 0);
        calculated.P2O5 += factor * (contributions[material].P2O5 || 0);
        calculated.K2O += factor * (contributions[material].K2O || 0);
        calculated.MgO += factor * (contributions[material].MgO || 0);
      }
    });

    const total = calculated.N + calculated.P2O5 + calculated.K2O + calculated.MgO;
    const expectedValues = parseNutrientValues(itemName.value) || { N: 0, P2O5: 0, K2O: 0, MgO: 0, total: 0 };

    // Update values
    document.getElementById("expectedN").textContent = expectedValues.N.toFixed(1) || "0.0";
    document.getElementById("calculatedN").textContent = calculated.N.toFixed(1);
    document.getElementById("expectedP2O5").textContent = expectedValues.P2O5.toFixed(1) || "0.0";
    document.getElementById("calculatedP2O5").textContent = calculated.P2O5.toFixed(1);
    document.getElementById("expectedK2O").textContent = expectedValues.K2O.toFixed(1) || "0.0";
    document.getElementById("calculatedK2O").textContent = calculated.K2O.toFixed(1);
    document.getElementById("expectedMgO").textContent = expectedValues.MgO.toFixed(1) || "0.0";
    document.getElementById("calculatedMgO").textContent = calculated.MgO.toFixed(1);
    document.getElementById("expectedTotal").textContent = expectedValues.total.toFixed(1) || "0.0";
    document.getElementById("calculatedTotal").textContent = total.toFixed(1);

    // Check for differences and apply classes
    const rows = document.querySelectorAll("#nutrientTable tbody tr");
    rows.forEach(row => {
      const nutrient = row.querySelector(".nutrient-name").textContent;
      const expected = parseFloat(row.querySelector("td:nth-child(2) .nutrient-value").textContent) || 0;
      const calculated = parseFloat(row.querySelector("td:nth-child(3) .nutrient-value").textContent) || 0;
      if (Math.abs(expected - calculated) > 0.01) {
        row.classList.add("different");
      } else {
        row.classList.remove("different");
      }
      if (calculated > expected && expected !== 0) {
        row.classList.add("exceeds-expected");
      } else {
        row.classList.remove("exceeds-expected");
      }
    });
  }

  // Recalculate costs
  function recalculateCosts() {
    let totalMaterialCost = 0;
    let totalInput = 0;

    materialRows.forEach(row => {
      const ratio = parseFloat(row.querySelector(".input-ratio").value) || 0;
      const price = parseFloat(row.querySelector(".unit-price").value) || 0;
      const cost = ratio * price / 1000;
      row.querySelector(".total-cost").textContent = cost.toFixed(2);
      totalMaterialCost += cost;
      totalInput += ratio;
    });

    totalRatio.textContent = totalInput.toFixed(0);
    totalRatio.style.color = totalInput === 1000 ? "green" : "red";
    materialCostField.value = totalMaterialCost.toFixed(2);
    updateTotals();
  }

  // Update totals for price table
  function updateTotals() {
    const material = parseFloat(materialCostField.value) || 0;
    const mixing = parseFloat(mixingCostField.value) || 0;
    const bag = parseFloat(bagCostField.value) || 0;
    const tin = parseFloat(transportInField.value) || 0;
    const tout = parseFloat(transportOutField.value) || 0;
    const comm = parseFloat(commissionInput.value) || 0;
    const total = material + mixing + bag + tin + tout + comm;
    totalCostField.value = total.toFixed(2);
    const selling = parseFloat(sellingPriceInput.value) || 0;
    const tonnage = parseFloat(tonnageInput.value) || 0;
    const grossProfit = (selling - total) * tonnage;
    grossProfitField.value = grossProfit.toFixed(2);
    if (tonnage > 0 && selling > 0) {
      const margin = (grossProfit / (tonnage * selling)) * 100;
      gpMarginField.value = margin.toFixed(2);
    } else {
      gpMarginField.value = "";
    }
  }

  // Initialize app after loading data
  async function initializeApp() {
    const dataLoaded = await loadData();
    if (!dataLoaded) {
      return; // Stop initialization if data loading failed
    }

    // Original data validation
    if (typeof materialPrices === 'undefined' || typeof items === 'undefined' || 
        typeof nutrientContributionsAsahi === 'undefined' || typeof nutrientContributionsNonAsahi === 'undefined') {
      console.error('Error: Data is not loaded or contains invalid data. Please ensure all required data is fetched correctly.');
      alert('Data loading error. Please check if the Google Sheets data is correctly formatted.');
      return;
    }

    // Initialize dropdown and event listeners
    populateItemDropdown();
    $('#itemName').on('select2:select', () => {
      const selectedValue = itemName.value;
      bagCostField.value = items[selectedValue]?.bagPrice.toFixed(2) || "";
      // Populate expected nutrient values
      const expectedNutrients = parseNutrientValues(selectedValue);
      document.getElementById("expectedN").textContent = expectedNutrients.N.toFixed(1);
      document.getElementById("expectedP2O5").textContent = expectedNutrients.P2O5.toFixed(1);
      document.getElementById("expectedK2O").textContent = expectedNutrients.K2O.toFixed(1);
      document.getElementById("expectedMgO").textContent = expectedNutrients.MgO.toFixed(1);
      document.getElementById("expectedTotal").textContent = expectedNutrients.total.toFixed(1);
      // Clear existing rows
      materialTableBody.innerHTML = "";
      materialRows = [];
      // Add rows for the selected item's materials
      if (items[selectedValue]?.materials) {
        items[selectedValue].materials.forEach(({ material, percentage }) => {
          addMaterialRow(material, (percentage * 1000).toFixed(0));
        });
      }
      recalculateCosts();
      recalculateNutrients();
    });
    $('#itemName').on('select2:unselect', () => {
      bagCostField.value = "";
      materialTableBody.innerHTML = "";
      materialRows = [];
      document.getElementById("expectedN").textContent = "";
      document.getElementById("expectedP2O5").textContent = "";
      document.getElementById("expectedK2O").textContent = "";
      document.getElementById("expectedMgO").textContent = "";
      document.getElementById("expectedTotal").textContent = "";
      document.getElementById("calculatedN").textContent = "";
      document.getElementById("calculatedP2O5").textContent = "";
      document.getElementById("calculatedK2O").textContent = "";
      document.getElementById("calculatedMgO").textContent = "";
      document.getElementById("calculatedTotal").textContent = "";
      totalRatio.textContent = "0";
      totalRatio.style.color = "red";
      recalculateCosts();
    });

    addBtn.addEventListener("click", () => addMaterialRow());

    mixingLocation.addEventListener("change", () => {
      const val = mixingLocation.value;
      let cost = 0;
      if (["ASAHI", "NSBK", "WIV"].includes(val)) cost = 120;
      else if (["HSK", "JENJAROM"].includes(val)) cost = 25;
      else if (val === "ORIENTAL") cost = 150;
      mixingCostField.value = cost.toFixed(2);
      updateAllMaterialPrices();
      recalculateNutrients();
      updateTotals();
    });

    document.getElementById("delivery").addEventListener("change", () => {
      const val = document.getElementById("delivery").value;
      transportOutField.value = val === "Deld" ? "70.00" : "0.00";
      updateTotals();
    });

    [sellingPriceInput, tonnageInput, commissionInput].forEach(el => {
      el.addEventListener("input", updateTotals);
    });

    // Use solveBtn.addEventListener make sure input ratio 25/50
    solveBtn.addEventListener("click", () => {
      try {
        // Validate materialPriority from data.js
        if (typeof materialPriority === 'undefined') {
          console.error('Error: materialPriority is not defined in data.js');
          alert('Data error: Please ensure materialPriority is defined in the Google Sheet.');
          return;
        }

        // Get mixing location and nutrient contributions
        const isAsahi = mixingLocation.value === "ASAHI";
        const contributions = isAsahi ? nutrientContributionsAsahi : nutrientContributionsNonAsahi;
        const nutrients = ['N', 'P2O5', 'K2O', 'MgO'];
        const n = materialRows.length;

        // Ensure at least one material is selected
        if (n === 0) {
          alert("Please add at least one material to solve.");
          return;
        }

        // Ensure an item is selected
        if (!itemName.value) {
          alert("Please select an item to solve for nutrient targets.");
          return;
        }

        // Get selected materials and sort by priority
        const materials = materialRows.map(row => row.querySelector(".material-select").value);
        const sortedMaterials = materials
          .map((mat, idx) => ({ mat, idx }))
          .sort((a, b) => {
            const aPriority = materialPriority.findIndex(p => p.name === a.mat) !== -1 ? materialPriority.findIndex(p => p.name === a.mat) : materialPriority.length;
            const bPriority = materialPriority.findIndex(p => p.name === b.mat) !== -1 ? materialPriority.findIndex(p => p.name === b.mat) : materialPriority.length;
            return aPriority - bPriority;
          });

        // Build matrix A (nutrient contributions in priority order)
        const A = nutrients.map(nut => sortedMaterials.map(m => contributions[m.mat]?.[nut] || 0));
        const exp = nutrients.map(nut => parseFloat(document.getElementById(`expected${nut === 'P2O5' ? 'P2O5' : nut}`).textContent) || 0);

        // Validate expected nutrient values
        if (exp.some(val => isNaN(val) || val < 0)) {
          alert("Invalid expected nutrient values. Please check the selected item.");
          return;
        }

        // Use least squares with sum constraint (sum of ratios = 1)
        const AT = A[0].map((_, col) => A.map(row => row[col])); // Transpose A
        const ATA = AT.map(row => row.map((_, col) => row.reduce((acc, val, i) => acc + val * A[i][col], 0)));

        // Add constraint: sum of ratios = 1
        const S = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            S[i][j] = ATA[i][j];
          }
          S[i][n] = 1;
          S[n][i] = 1;
        }
        S[n][n] = 0;

        const ATexp = AT.map(row => row.reduce((acc, val, i) => acc + val * exp[i], 0));
        const b = ATexp.concat(1);

        // Solve system S * x = b
        const f = solveSystem(S, b).slice(0, n);

        // Ensure non-negative ratios and scale to 1000kg
        let ratios = f.map(v => Math.max(v, 0));
        let sum = ratios.reduce((a, b) => a + b, 0);
        ratios = sum > 0 ? ratios.map(v => (v / sum) * 1000) : Array(n).fill(1000 / n);

        // Prioritize higher-priority materials
        let remaining = { N: exp[0], P2O5: exp[1], K2O: exp[2], MgO: exp[3], total: 1000 };
        let adjustedRatios = new Array(n).fill(0);
        for (let i = 0; i < sortedMaterials.length; i++) {
          const mat = sortedMaterials[i].mat;
          const origIdx = sortedMaterials[i].idx;
          const contrib = contributions[mat] || { N: 0, P2O5: 0, K2O: 0, MgO: 0 };
          let maxRatio = remaining.total;
          nutrients.forEach((nut) => {
            if (contrib[nut] > 0) {
              const maxForNutrient = (remaining[nut] / (contrib[nut] / 1000)) || Infinity;
              maxRatio = Math.min(maxRatio, maxForNutrient);
            }
          });
          // Use original least-squares ratio if it doesn't exceed nutrient limits
          const lsRatio = ratios[i];
          maxRatio = Math.min(maxRatio, lsRatio, remaining.total);
          if (maxRatio > 0) {
            adjustedRatios[origIdx] = maxRatio;
            nutrients.forEach((nut) => {
              remaining[nut] -= (maxRatio / 1000) * (contrib[nut] || 0);
            });
            remaining.total -= maxRatio;
          }
        }

        // Distribute any remaining total to materials with non-zero ratios
        if (remaining.total > 0.01 && adjustedRatios.some(r => r > 0)) {
          const nonZeroCount = adjustedRatios.filter(r => r > 0).length;
          const extraPerMaterial = remaining.total / nonZeroCount;
          adjustedRatios = adjustedRatios.map((r, i) => {
            const origIdx = sortedMaterials.find(m => m.idx === i)?.idx || i;
            return r > 0 ? r + extraPerMaterial : r;
          });
        }

        // Adjust for rounding to ensure exact 1000kg with divisibility
        let total = adjustedRatios.reduce((a, b) => a + b, 0);
        if (Math.abs(total - 1000) > 0.01) {
          const factor = 1000 / total;
          adjustedRatios = adjustedRatios.map(v => v * factor);
        }

        // Round ratios to nearest multiple of divisibleBy value
        let rounded = adjustedRatios.map((v, i) => {
          const mat = sortedMaterials[i].mat;
          const priority = materialPriority.find(p => p.name === mat) || { divisibleBy: 25 };
          const div = priority.divisibleBy || 25;
          return Math.round(v / div) * div;
        });

        // Correct sum to exactly 1000
        let sum_rounded = rounded.reduce((a, b) => a + b, 0);
        if (sum_rounded !== 1000) {
          const diff = 1000 - sum_rounded;
          const maxIndex = sortedMaterials[0].idx; // Adjust highest-priority material
          const mat = sortedMaterials[0].mat;
          const priority = materialPriority.find(p => p.name === mat) || { divisibleBy: 25 };
          const div = priority.divisibleBy || 25;
          // Adjust to nearest multiple of div
          const current = rounded[maxIndex];
          const adjust = Math.round((current + diff) / div) * div;
          rounded[maxIndex] = adjust;
        }

        // Update ratios in table
        materialRows.forEach((row, i) => {
          const rangeInput = row.querySelector(".input-ratio");
          const numberInput = row.querySelector(".ratio-value");
          rangeInput.value = rounded[i];
          numberInput.value = rounded[i];
        });

        // Recalculate nutrients and costs
        recalculateNutrients();
        recalculateCosts();
      } catch (error) {
        console.error("Solve error:", error);
        alert("Error solving the system. Please ensure valid materials and nutrient data.");
      }
    });

    // Gaussian elimination to solve S x = b
    function solveSystem(matrix, b) {
      const n = matrix.length;
      const aug = matrix.map((row, i) => [...row, b[i]]);

      for (let p = 0; p < n; p++) {
        let max = p;
        for (let i = p + 1; i < n; i++) {
          if (Math.abs(aug[i][p]) > Math.abs(aug[max][p])) {
            max = i;
          }
        }
        [aug[p], aug[max]] = [aug[max], aug[p]];

        if (Math.abs(aug[p][p]) < 1e-10) {
          console.warn("Matrix is singular or nearly singular");
          continue;
        }

        for (let i = p + 1; i < n; i++) {
          const alpha = aug[i][p] / aug[p][p];
          for (let j = p; j <= n; j++) {
            aug[i][j] -= alpha * aug[p][j];
          }
        }
      }

      const x = new Array(n).fill(0);
      for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(aug[i][i]) < 1e-10) {
          x[i] = 0;
          continue;
        }
        let sum = 0;
        for (let j = i + 1; j < n; j++) {
          sum += aug[i][j] * x[j];
        }
        x[i] = (aug[i][n] - sum) / aug[i][i];
      }
      return x;
    }
  }

  // Start the app
  initializeApp();
});
