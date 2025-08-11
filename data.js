// Start from here is all the manual insert (Item Name, Material Name, Price,etc)

//This is for Part 2 (Nutrient Table). 
//This is for BOMP&L table start from F18.
//You can change every number or add new material.
//After you change the code, click "Ctrl" + "S" to save the file.
const nutrientContributionsNonAsahi = {
  "GAS": { N: 21, P2O5: 0, K2O: 0, MgO: 0 },
  "AS": { N: 21, P2O5: 0, K2O: 0, MgO: 0 },
  "GAC": { N: 25, P2O5: 0, K2O: 0, MgO: 0 },
  "AC": { N: 25, P2O5: 0, K2O: 0, MgO: 0 },
  "G.Urea": { N: 46, P2O5: 0, K2O: 0, MgO: 0 },
  "Urea": { N: 46, P2O5: 0, K2O: 0, MgO: 0 },
  "MAP": { N: 10, P2O5: 50, K2O: 0, MgO: 0 },
  "DAP": { N: 18, P2O5: 46, K2O: 0, MgO: 0 },
  "GRP": { N: 0, P2O5: 27, K2O: 0, MgO: 0 },
  "ERP": { N: 0, P2O5: 27, K2O: 0, MgO: 0 },
  "PRP": { N: 0, P2O5: 27, K2O: 0, MgO: 0 },
  "G.MOP": { N: 0, P2O5: 0, K2O: 60, MgO: 0 },
  "MOP": { N: 0, P2O5: 0, K2O: 60, MgO: 0 },
  "G.Kieserite (W)": { N: 0, P2O5: 0, K2O: 0, MgO: 27 },
  "G.Kieserite (P)": { N: 0, P2O5: 0, K2O: 0, MgO: 27 },
  "Kieserite": { N: 0, P2O5: 0, K2O: 0, MgO: 27 },
  "Magnesium Oxide": { N: 0, P2O5: 0, K2O: 0, MgO: 0 }
  //<-- If have new material & number, add here.
}; 
//Because O&T only have 2 diffrent number, so just do that two only.
const nutrientContributionsAsahi = {
  ...nutrientContributionsNonAsahi,
  "PRP": { N: 0, P2O5: 29, K2O: 0, MgO: 0 },
  "Magnesium Oxide": { N: 0, P2O5: 0, K2O: 0, MgO: 80 }
  //<-- You can add here if have diferrent number with BOMP&L table.
};

// This part is for material's name and price.
// After you change the code, click "Ctrl" + "S" to save the file.
const materialPrices = {
// Total materials: 27.
  "12-12-18": 1887.62,
  "13-8-21-3": 1910.59,
  "15-15-15": 2052.37,
  "16-16-16+12S": 3300.00,
  "AC": 476.67,
  "AS": 582.24,
  "Borate" : 3735.58,
  "CLAY": 0,
  "ERP": 436.49,
  "G.Kieserite (P)": 756.54,
  "G.Kieserite (W)": 667.70,
  "G.MOP": 1792.91,
  "G.Urea": 1962.88,
  "GAC": 579.00,
  "GAS": 0,
  "GML": 134.54,
  "GRP": 784.16,
  "Kieserite": 592.98,
  "Magnesium Anh": 3020.49,
  "Magnesium Mono": 4800.06,
  "Magnesium Oxide": 0,
  "MAP": 2296.50,
  "MOP": 1450.00,
  "NP 20-20": 1709.62,
  "PRP": 3478.85,
  "Urea": 2628.54,
  "Zinc Copper": 6799.87,
  // "Material Name": Price,
  // Remove the "//" after you done adding.
  // <--- Paste the format here if you have more materials to add.
};
//Below this is for ASAHI mixing location price.
const asahiPrices = {
  "AC": 550.00,
  "Borate": 3800.00,
  "CLAY": 300.00,
  "ERP": 560.00,
  "GML": 170.00,
  "Kieserite": 700.00,
  "MAP": 3000.00,
  "MOP": 1630.00,
  "Manganese Mono": 4500.00,
  "Magnesium Oxide": 900.00,
  "PRP": 630.00,
  "Urea": 2000.00,
  "Zinc Copper": 3800.00,
  // "Material Name": Price,
  // Remove the "//" after you done adding.
  // <--- Paste the format here if you have more materials to add.
};

//This is for Item Name, Materials, percentage & nutrients.
//Total Items: 97
//After you change the code, click "Ctrl" + "S" to save the file.
//Format:

//"Item Name": {
//   bagPrice: (Bag Price),
//   materials: [
//     { material: "(Material Name 1)", percentage: (Number) },
//     ],
//     nutrients: {
//       N: number,
//       P2O5: number,
//       K2O: number,
//       MgO: number
//   }
// },

const items = {
  // BB-05
  "GRANULAR P-MgO (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GRP", percentage: 0.5 },
      { material: "G.Kieserite (W)", percentage: 0.5 }
    ],
    nutrients: {
      N: 0,
      P2O5: 13.5,
      K2O: 0,
      MgO: 13.5
    }
  },

  // BB-08
  "BULK BLEND 15-15-6-4+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "G.Kieserite (W)", percentage: 0.1 },
      { material: "GAC", percentage: 0.45 },
      { material: "G.MOP", percentage: 0.1 },
      { material: "GRP", percentage: 0.35 }
    ],
    nutrients: {
      N: 15,
      P2O5: 15,
      K2O: 6,
      MgO: 4
    }
  },

  // BB-09
  "BULK BLEND 15-7-18-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "G.MOP", percentage: 0.3 },
      { material: "G.Kieserite (W)", percentage: 0.1 },
      { material: "GAC", percentage: 0.35 },
      { material: "G.Urea", percentage: 0.05 },
      { material: "GRP", percentage: 0.2 }
    ],
    nutrients: {
      N: 15,
      P2O5: 7,
      K2O: 18,
      MgO: 2
    }
  },

   // BB-10
  "NK BB (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "G.Kieserite (W)", percentage: 0.1 },
      { material: "GAC", percentage: 0.5 },
      { material: "G.MOP", percentage: 0.4 }
    ],
    nutrients: {
      N: 0,
      P2O5: 0,
      K2O: 0,
      MgO: 0
    }
  },

  // BB-101
  "BULK BLEND 13-6-27-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "G.MOP", percentage: 0.3 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.Kieserite (W)", percentage: 0.1 }
    ],
    nutrients: {
      N: 13,
      P2O5: 6,
      K2O: 27,
      MgO: 3
    }
  },

  // BB-102
  "NK BULK BLEND 10.5-30 (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.45 },
      { material: "G.MOP", percentage: 0.4 },
      { material: "G.Kieserite (W)", percentage: 0.15 }
    ],
    nutrients: {
      N: 10.50,
      P2O5: 0,
      K2O: 30,
      MgO: 0
    }
  },

  // BB-103
  "BULK BLEND 12-12-17-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.25 },
      { material: "G.Kieserite (W)", percentage: 0.1 },
      { material: "G.Kieserite (P)", percentage: 0.05 }
    ],
    nutrients: {
      N: 12,
      P2O5: 12,
      K2O: 17,
      MgO: 2
    }
  },

   // BB-104
  "BULK BLEND 12-6-22-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.3 },
      { material: "G.Kieserite (W)", percentage: 0.1 }
    ],
    nutrients: {
      N: 12,
      P2O5: 6,
      K2O: 22,
      MgO: 3
    }
  },

  // BB-105
  "BULK BLEND 12-5-24-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.3 },
      { material: "G.Kieserite (W)", percentage: 0.1 }
    ],
    nutrients: {
      N: 12,
      P2O5: 5,
      K2O: 24,
      MgO: 3
    }
  },

   // BB-106
  "BULK BLEND 10-5-21-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.25 },
      { material: "G.Kieserite (W)", percentage: 0.15 }
    ],
    nutrients: {
      N: 10,
      P2O5: 5,
      K2O: 21,
      MgO: 3
    }
  }, 

   // BB-107
  "BULK BLEND 15-15-15+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.325 },
      { material: "G.Urea", percentage: 0.05 },
      { material: "GRP", percentage: 0.4 },
      { material: "G.MOP", percentage: 0.225 }
    ],
    nutrients: {
      N: 15,
      P2O5: 15,
      K2O: 15,
      MgO: 0
    }
  },

  // BB-108
  "BULK BLEND 10-5-25-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.2 },
      { material: "G.Kieserite (W)", percentage: 0.2 }
    ],
    nutrients: {
      N: 10,
      P2O5: 5,
      K2O: 25,
      MgO: 3
    }
  },

  // BB-109
  "BULK BLEND 12-6-23-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.3 },
      { material: "GAS", percentage: 0.1 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.25 },
      { material: "G.Kieserite (W)", percentage: 0.15 }
    ],
    nutrients: {
      N: 12,
      P2O5: 6,
      K2O: 23,
      MgO: 3
    } 
  },

  // BB-11
  "BULK BLEND 11-5-21-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.45 },
      { material: "GRP", percentage: 0.15 },
      { material: "G.MOP", percentage: 0.3 },
      { material: "G.Kieserite (W)", percentage: 0.1 }
    ],
    nutrients: {
      N: 11,
      P2O5: 5,
      K2O: 21,
      MgO: 2
    }
  },

  // BB-110
  "BULK BLEND 12-5-25-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.35 },
      { material: "GAS", percentage: 0.1 },
      { material: "GRP", percentage: 0.15 },
      { material: "G.MOP", percentage: 0.35 },
      { material: "G.Kieserite (W)", percentage: 0.05 }
    ],
    nutrients: {
      N: 12,
      P2O5: 5,
      K2O: 25,
      MgO: 2
    }
  },

  // BB-112
  "BULK BLEND 10-6-23-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.2 },
      { material: "G.Kieserite (W)", percentage: 0.2 }
    ],
    nutrients: {
      N: 10,
      P2O5: 6,
      K2O: 23,
      MgO: 3
    }
  },

  // BB-12
  "BULK BLEND 12-6-24-2.5+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.3 },
      { material: "G.MOP", percentage: 0.175 },
      { material: "G.Kieserite (W)", percentage: 0.125 }
    ],
    nutrients: {
      N: 12,
      P2O5: 6,
      K2O: 24,
      MgO: 2.5
    }
  },

  // BB-14
  "SPECIAL BB (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.24 },
      { material: "G.Kieserite (W)", percentage: 0.16 }
    ],
    nutrients: {
      N: 0,
      P2O5: 0,
      K2O: 0,
      MgO: 0
    }
  },

  // BB-15
  "BULK BLEND 13-10-21-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.325 },
      { material: "G.Kieserite (W)", percentage: 0.075 }
    ],
    nutrients: {
      N: 13,
      P2O5: 10,
      K2O: 21,
      MgO: 2
    }
  },

  // BB-17
  "BULK BLEND 11-5-20-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.175 },
      { material: "G.MOP", percentage: 0.3 },
      { material: "G.Kieserite (W)", percentage: 0.125 }
    ],
    nutrients: {
      N: 11,
      P2O5: 5,
      K2O: 20,
      MgO: 3
    }
  },

  // BB-19
  "BULK BLEND 10-5-21-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.3 },
      { material: "G.Kieserite (W)", percentage: 0.1 }
    ],
    nutrients: {
      N: 10,
      P2O5: 5,
      K2O: 21,
      MgO: 3
    }
  },

  // BB-24
  "BULK BLEND 12-5-25-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.45 },
      { material: "GRP", percentage: 0.15 },
      { material: "G.MOP", percentage: 0.35 },
      { material: "G.Kieserite (W)", percentage: 0.05 }
    ],
    nutrients: {
      N: 12,
      P2O5: 5,
      K2O: 25,
      MgO: 3
    }
  },

  // BB-25
  "BULK BLEND 10-6-24-4+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.35 },
      { material: "GRP", percentage: 0.15 },
      { material: "G.MOP", percentage: 0.35 },
      { material: "G.Kieserite (W)", percentage: 0.15 }
      ],
    nutrients: {
      N: 10,
      P2O5: 6,
      K2O: 24,
      MgO: 4
    }
  },

   // BB-26
  "WHITE HORSE BULK BLEND (12-6-22-3) (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.3 },
      { material: "G.MOP", percentage: 0.1 },
      { material: "G.Kieserite (P)", percentage: 0.1 },
      { material: "G.Kieserite (W)", percentage: 0.1 }
    ],
    nutrients: {
      N: 12,
      P2O5: 6,
      K2O: 22,
      MgO: 3
    }
  },

  // BB-27
  "WHITE HORSE BULK BLEND (12-12-17-2) (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.3 },
      { material: "G.MOP", percentage: 0.1 },
      { material: "G.Kieserite (W)", percentage: 0.2 }
    ],
    nutrients: {
      N: 12,
      P2O5: 12,
      K2O: 17,
      MgO: 2
    }
  },
  
  // CBB-03
  "COMPOUND BB 15-15-6-4+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "NP 20-20", percentage: 0.7 },
      { material: "G.Kieserite (W)", percentage: 0.1 },
      { material: "G.MOP", percentage: 0.2 }
    ],
    nutrients: {
      N: 15,
      P2O5: 15,
      K2O: 6,
      MgO: 4
    }
  },

  // CBB-05
  "COMPOUND BB 15-15-15+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "15-15-15", percentage: 0.85 },
      { material: "G.Kieserite (W)", percentage: 0.15 }
    ],
    nutrients: {
      N: 15,
      P2O5: 15,
      K2O: 15,
      MgO: 0
    }
  },

  // CBB-10
  "COMPOUND BB 15-5-25-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.5 },
      { material: "GRP", percentage: 0.1 },
      { material: "G.MOP", percentage: 0.35 },
      { material: "G.Kieserite (W)", percentage: 0.05 }
      ],
    nutrients: {
      N: 15,
      P2O5: 5,
      K2O: 25,
      MgO: 2
    }
  },

  // CBB-401
  "COMPOUND BB 10-10-27-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "NP 20-20", percentage: 0.5 },
      { material: "G.MOP", percentage: 0.35 },
      { material: "G.Kieserite (W)", percentage: 0.15 }
      ],
    nutrients: {
      N: 10,
      P2O5: 10,
      K2O: 27,
      MgO: 2
    }
  },

  // CBB-403
  "COMPOUND BB 10-10-30+B+TE (50KG)": {
    bagPrice: 60.00,
    materials: [
      { material: "G.MOP", percentage: 0.5 },
      { material: "NP 20-20", percentage: 0.5 }
    ],
    nutrients: {
      N: 10,
      P2O5: 10,
      K2O: 30,
      MgO: 0
    }
  },

  // CBB-404
  "COMPOUND BB 13-13-21+B+TE (50KG)": {
    bagPrice: 60.00,
    materials: [
      { material: "NP 20-20", percentage: 0.65 },
      { material: "G.MOP", percentage: 0.35 }
    ],
    nutrients: {
      N: 13,
      P2O5: 13,
      K2O: 21,
      MgO: 0
    }
  },

  // CCOMP-01
  "COMPACTED COMPOUND 11-5-21-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AS", percentage: 0.4 },
      { material: "ERP", percentage: 0.2 },
      { material: "MOP", percentage: 0.25 },
      { material: "Kieserite", percentage: 0.15 }
    ],
    nutrients: {
      N: 11,
      P2O5: 5,
      K2O: 21,
      MgO: 2
    }
  },

  // CCOMP-06
  "COMPACTED COMPOUND NP (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.4 },
      { material: "GML", percentage: 0.1 },
      { material: "Kieserite", percentage: 0.1 }
    ],
    nutrients: {
      N: 0,
      P2O5: 0,
      K2O: 0,
      MgO: 0
    }
  },

  // CCOMP-07
  "COMPACTED NK 12-33-3 MGO (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.45 },
      { material: "MOP", percentage: 0.45 },
      { material: "Kieserite", percentage: 0.1 }
    ],
    nutrients: {
      N: 12,
      P2O5: 0,
      K2O: 33,
      MgO: 3
    }
  },

  // CCOMP-08
  "COMPACTED COMPOUND 15-7-18-2 (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.2 },
      { material: "MOP", percentage: 0.25 },
      { material: "Kieserite", percentage: 0.05 },
      { material: "GML", percentage: 0.1 }
      ],
    nutrients: {
      N: 15,
      P2O5: 7,
      K2O: 18,
      MgO: 2
    }
  },

  // CCOMP-11
  "COMP NK 10.5/30 (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.425 },
      { material: "MOP", percentage: 0.475 },
      { material: "GML", percentage: 0.05 },
      { material: "CLAY", percentage: 0.05 }
    ],
    nutrients: {
      N: 10.5,
      P2O5: 0,
      K2O: 30,
      MgO: 0
    }
  },

  // CCOMP-12
  "COMPACTION 10-6-20-3+0.5B (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.325},
      { material: "ERP", percentage: 0.18},
      { material: "MAP", percentage: 0.05 },
      { material: "MOP", percentage: 0.325 },
      { material: "Kieserite", percentage: 0.1 },
      { material: "Borate", percentage: 0.02 }
    ],
    nutrients: {
      N: 10,
      P2O5: 6,
      K2O: 20,
      MgO: 3
    }
  },

  // CCOMP-13
  "COMPACTED COMPOUND 13-6-27-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.3 },
      { material: "Urea", percentage: 0.1 },
      { material: "MAP", percentage: 0.05 },
      { material: "PRP", percentage: 0.1 },
      { material: "MOP", percentage: 0.425 },
      { material: "Magnesium Oxide", percentage: 0.025 }
    ],
    nutrients: {
      N: 13,
      P2O5: 6,
      K2O: 27,
      MgO: 3
    }
  },

  // CCOMP-14
  "COMPACTED COMPOUND 12-5-24-3+TE (50KG)": {
    bagPrice: 0.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.15 },
      { material: "MOP", percentage: 0.35 },
      { material: "Kieserite", percentage: 0.1 }
    ],
    nutrients: {
      N: 12,
      P2O5: 5,
      K2O: 24,
      MgO: 3
    }
  },

  // CCOMP-15
  "COMPACTED COMPOUND 10-5-21-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AS", percentage: 0.4 },
      { material: "ERP", percentage: 0.15 },
      { material: "MOP", percentage: 0.25 },
      { material: "Kieserite", percentage: 0.1 },
      { material: "GML", percentage: 0.1 }
      ],
    nutrients: {
      N: 10,
      P2O5: 5,
      K2O: 21,
      MgO: 3
    }
  },

  // CCOMP-16
  "COMPACT (8.3/6.1/19.5/2.5) AS (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.25 },
      { material: "ERP", percentage: 0.35 },
      { material: "MOP", percentage: 0.1 },
      { material: "Kieserite", percentage: 0.1 },
      { material: "GML", percentage: 0.2 }
      ],
    nutrients: {
      N: 8.3,
      P2O5: 6.1,
      K2O: 19.5,
      MgO: 2.5
    }
  },

  // CCOMP-301
  "COMPACTED COMPOUND 12-12-17-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.3 },
      { material: "Urea", percentage: 0.05 },
      { material: "PRP", percentage: 0.175 },
      { material: "MAP", percentage: 0.125 },
      { material: "MOP", percentage: 0.275 },
      { material: "Kieserite", percentage: 0.075 },
    ],
    nutrients: {
      N: 12,
      P2O5: 12,
      K2O: 17,
      MgO: 2
    }
  },

  // CCOMP-302
  "COMPACTED COMPOUND 12-6-22-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "MOP", percentage: 0.325 },
      { material: "Kieserite", percentage: 0.1 },
      { material: "PRP", percentage: 0.175 }
    ],
    nutrients: {
      N: 12,
      P2O5: 6,
      K2O: 22,
      MgO: 3
    }
  },

  // CCOMP-303
  "COMPACTED COMPOUND 10-5-21-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AS", percentage: 0.45 },
      { material: "ERP", percentage: 0.175 },
      { material: "MOP", percentage: 0.3 },
      { material: "Kieserite", percentage: 0.075 }
    ],
    nutrients: {
      N: 10,
      P2O5: 5,
      K2O: 21,
      MgO: 2
    }
  },

  // CCOMP-304
  "COMPACTED COMPOUND 15-15-6-4+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "Urea", percentage: 0.1 },
      { material: "AC", percentage: 0.35 },
      { material: "MAP", percentage: 0.1 },
      { material: "MOP", percentage: 0.1 },
      { material: "PRP", percentage: 0.25 },
      { material: "Kieserite", percentage: 0.1 }
    ],
    nutrients: {
      N: 15,
      P2O5: 15,
      K2O: 6,
      MgO: 4
    }
  },

  // CCOMP-305
  "COMPACTED COMPOUND 15-15-15+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.3 },
      { material: "Urea", percentage: 0.1 },
      { material: "MAP", percentage: 0.2 },
      { material: "PRP", percentage: 0.15 },
      { material: "MOP", percentage: 0.25 }
    ],
    nutrients: {
      N: 15,
      P2O5: 15,
      K2O: 15,
      MgO: 0
    }
  },

  // CCOMP-306
  "COMPACTED GRANULAR 10:5:20:3%B2O3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.175 },
      { material: "MOP", percentage: 0.325 },
      { material: "Kieserite", percentage: 0.1 }
    ],
    nutrients: {
      N: 10,
      P2O5: 5,
      K2O: 20,
      MgO: 3
    }
  },

  // CCOMP-309
  "COMPACTED COMPOUND 10-6-23-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "PRP", percentage: 0.175 },
      { material: "MOP", percentage: 0.325 },
      { material: "Kieserite", percentage: 0.1 }
    ],
    nutrients: {
      N: 10,
      P2O5: 6,
      K2O: 23,
      MgO: 3
    }
  },

  // CCOMP-310
  "COMPACTED COMPOUND 10-5-20-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.2 },
      { material: "MOP", percentage: 0.3 },
      { material: "Kieserite", percentage: 0.1 }
    ],
    nutrients: {
      N: 10,
      P2O5: 5,
      K2O: 20,
      MgO: 2
    }
  },

  // CCOMP-311
  "COMPACTED COMPOUND NK 11/26 (50KG)": {
    bagPrice: 35.00,
    materials: [
      { material: "AC", percentage: 0.35 },
      { material: "Urea", percentage: 0.05 },
      { material: "MOP", percentage: 0.45 },
      { material: "GML", percentage: 0.1 },
      { material: "Kieserite", percentage: 0.05 }
    ],
    nutrients: {
      N: 11,
      P2O5: 0,
      K2O: 26,
      MgO: 0
    }
  },

  // CCOMP-314
  "COMPACTED COMPOUND NK 10.5-30-4 MGO(50KG)": {
    bagPrice: 0.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "MOP", percentage: 0.475 },
      { material: "Kieserite", percentage: 0.1 },
      { material: "GML", percentage: 0.025 }
      ],
    nutrients: {
      N: 10.5,
      P2O5: 0,
      K2O: 30,
      MgO: 4
    }
  },

  // CCOMP-316
  "COMPACTED COMPOUND 11-5.5-21.5-2.75+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.2 },
      { material: "MOP", percentage: 0.3 },
      { material: "Kieserite", percentage: 0.05 },
      { material: "GML", percentage: 0.05 }
    ],
    nutrients: {
      N: 11,
      P2O5: 5.5,
      K2O: 21.5,
      MgO: 2.75
    }
  },

  // CCOMP-317
  "COMPACTED COMPOUND 13-7-21-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.375 },
      { material: "Urea", percentage: 0.05 },
      { material: "PRP", percentage: 0.2 },
      { material: "MOP", percentage: 0.325 },
      { material: "GML", percentage: 0.05 }
    ],
    nutrients: {
      N: 13,
      P2O5: 7,
      K2O: 21,
      MgO: 3
    }
  },

  // CCOMP-318
  "COMPACTED COMPOUND 10-5-24-3+TE (50KG)": {
    bagPrice: 0.00,
    materials: [
      { material: "AC", percentage: 0.3 },
      { material: "Urea", percentage: 0.05 },
      { material: "MAP", percentage: 0.005 },
      { material: "GML", percentage: 0.055 },
      { material: "ERP", percentage: 0.175 },
      { material: "MOP", percentage: 0.375 },
      { material: "Magnesium Oxide", percentage: 0.03 },
      { material: "Borate", percentage: 0.01 }
      ],
    nutrients: {
      N: 10,
      P2O5: 5,
      K2O: 24,
      MgO: 3
    }
  },

  // CCOMP-319
  "COMPACTED COMPOUND NK 10/21+ZN+MN": {
    bagPrice: 0.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "GML", percentage: 0.05 },
      { material: "MOP", percentage: 0.35 },
      { material: "CLAY", percentage: 0.1 },
      { material: "Zinc Copper", percentage: 0.05 },
      { material: "Manganese Mono", percentage: 0.05 }
    ],
    nutrients: {
      N: 10,
      P2O5: 0,
      K2O: 21,
      MgO: 0
    }
  },

  // CCOMP-320
  "COMPACTED COMPOUND 10-5-25-3+TE": {
    bagPrice: 0.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.175 },
      { material: "MOP", percentage: 0.375 },
      { material: "Kieserite", percentage: 0.05 }
        ],
    nutrients: {
      N: 10,
      P2O5: 5,
      K2O: 25,
      MgO: 3
    }
  },

  // CMIX-503
  "COMPOUND MIX 10-10-24-3+TE (50KG)": {
    bagPrice: 0.00,
    materials: [
      { material: "NP 20-20", percentage: 0.5 },
      { material: "G.MOP", percentage: 0.4 },
      { material: "G.Kieserite (W)", percentage: 0.1 }
    ],
    nutrients: {
      N: 10,
      P2O5: 10,
      K2O: 24,
      MgO: 3
    }
  },

  // LCOMP-03
  "SPECIAL COMPOUND": {
    bagPrice: 40.00,
    materials: [
      { material: "Kieserite", percentage: 0.1 },
      { material: "MOP", percentage: 0.4 },
      { material: "22-10-8", percentage: 0.5 }
      ],
    nutrients: {
      N: 0,
      P2O5: 0,
      K2O: 0,
      MgO: 0
    }
  },

  // LCOMP-601
  "COMPOUND 12-6-22-3": {
    bagPrice: 40.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.2 },
      { material: "MOP", percentage: 0.3 },
      { material: "Kieserite", percentage: 0.1 }
      ],
    nutrients: {
      N: 12,
      P2O5: 6,
      K2O: 22,
      MgO: 3
    }
  },

  // MIX-01
  "MIXTURE 13-5-18-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.35 },
      { material: "G.Urea", percentage: 0.05 },
      { material: "ERP", percentage: 0.125 },
      { material: "MOP", percentage: 0.275 },
      { material: "Kieserite", percentage: 0.1 },
      { material: "GML", percentage: 0.1 }
    ],
    nutrients: {
      N: 13,
      P2O5: 5,
      K2O: 18,
      MgO: 2
    }
  },

  // MIX-05
  "P-MgO (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "ERP", percentage: 0.4 },
      { material: "GRP", percentage: 0.1 },
      { material: "Kieserite", percentage: 0.4 },
      { material: "GML", percentage: 0.1 }
    ],
    nutrients: {
      N: 0,
      P2O5: 15,
      K2O: 0,
      MgO: 15
    }
  },

  // MIX-06
  "MIXTURE (SPECIAL) (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "G.Urea", percentage: 0.05 },
      { material: "AS", percentage: 0.4 },
      { material: "ERP", percentage: 0.2 },
      { material: "MOP", percentage: 0.3 },
      { material: "GML", percentage: 0.05 }
    ],
    nutrients: {
      N: 0,
      P2O5: 0,
      K2O: 0,
      MgO: 0
    }
  },

  // MIX-07
  "NK MIX (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AS", percentage: 0.5 },
      { material: "MOP", percentage: 0.4 },
      { material: "GML", percentage: 0.1 }
    ],
    nutrients: {
      N: 0,
      P2O5: 11.6,
      K2O: 0,
      MgO: 27
    }
  },

  // MIX-08
  "NK MIX 23/30 (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "G.Urea", percentage: 0.45 },
      { material: "MOP", percentage: 0.45 },
      { material: "GML", percentage: 0.1 }
    ],
    nutrients: {
      N: 23,
      P2O5: 0,
      K2O: 30,
      MgO: 0
    }
  },

  // MIX-09
  "MIX 2 (10.8-1.5-28.2+B) (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "AS", percentage: 0.05 },
      { material: "MOP", percentage: 0.45 },
      { material: "GML", percentage: 0.1 }
    ],
    nutrients: {
      N: 2,
      P2O5: 10.8,
      K2O: 1.5,
      MgO: 28.2
    }
  },

  // MIX-11
  "MIXTURE 8.3-6.1-19.5-2.5+0.5B (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AS", percentage: 0.35 },
      { material: "ERP", percentage: 0.225 },
      { material: "MOP", percentage: 0.325 },
      { material: "Kieserite", percentage: 0.1 },
    ],
    nutrients: {
      N: 8.3,
      P2O5: 6.1,
      K2O: 19.5,
      MgO: 2.5
    }
  },

  // MIX-13
  "MIXTURE 10-5-22-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "G.Kieserite (W)", percentage: 0.1 },
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.175 },
      { material: "MOP", percentage: 0.325 }
    ],
    nutrients: {
      N: 10,
      P2O5: 5,
      K2O: 22,
      MgO: 3
    }
  },

  // MIX-16
  "MIXTURE 15-15-15+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AS", percentage: 0.4 },
      { material: "ERP", percentage: 0.15 },
      { material: "MOP", percentage: 0.25 },
      { material: "Kieserite", percentage: 0.1 },
      { material: "GML", percentage: 0.1 }
    ],
    nutrients: {
      N: 15,
      P2O5: 15,
      K2O: 15,
      MgO: 0
    }
  },

  // MIX-17
  "MIXTURE 15-15-6-4+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AS", percentage: 0.4},
      { material: "ERP", percentage: 0.45 },
      { material: "MOP", percentage: 0.1 },
      { material: "Kieserite", percentage: 0.05 }
    ],
    nutrients: {
      N: 15,
      P2O5: 15,
      K2O: 6,
      MgO: 4
    }
  },

  // MIX-18
  "MIXTURE 13-6-18-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AS", percentage: 0.4 },
      { material: "ERP", percentage: 0.15 },
      { material: "MOP", percentage: 0.25 },
      { material: "Kieserite", percentage: 0.1 },
      { material: "GML", percentage: 0.1 }
    ],
    nutrients: {
      N: 13,
      P2O5: 6,
      K2O: 18,
      MgO: 3
    }
  },

  // MIX-19
  "MIXTURE 9-6-18-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.025 },
      { material: "AS", percentage: 0.4 },
      { material: "ERP", percentage: 0.2 },
      { material: "MOP", percentage: 0.3 },
      { material: "Kieserite", percentage: 0.075 }
    ],
    nutrients: {
      N: 9,
      P2O5: 6,
      K2O: 18,
      MgO: 2
    }
  },

  // MIX-201
  "MIXTURE 13-6-27-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.2 },
      { material: "MOP", percentage: 0.35 },
      { material: "Kieserite", percentage: 0.05 }
    ],
    nutrients: {
      N: 13,
      P2O5: 6,
      K2O: 27,
      MgO: 3
    }
  },

  // MIX-202
  "NK MIXTURE 10.5-30 (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AS", percentage: 0.5 },
      { material: "MOP", percentage: 0.4 },
      { material: "GML", percentage: 0.1 }
    ],
    nutrients: {
      N: 10.5,
      P2O5: 0,
      K2O: 30,
      MgO: 0
    }
  },

  // MIX-203
  "MIXTURE 12-12-17-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.3 },
      { material: "Urea", percentage: 0.1 },
      { material: "ERP", percentage: 0.2 },
      { material: "MOP", percentage: 0.35 },
      { material: "Kieserite", percentage: 0.05 }
    ],
    nutrients: {
      N: 12,
      P2O5: 12,
      K2O: 17,
      MgO: 2
    }
  },

  // MIX-204
  "MIXTURE 12-6-22-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AS", percentage: 0.3 },
      { material: "Urea", percentage: 0.1 },
      { material: "ERP", percentage: 0.2 },
      { material: "MOP", percentage: 0.35 },
      { material: "Kieserite", percentage: 0.05 }
    ],
    nutrients: {
      N: 12,
      P2O5: 6,
      K2O: 22,
      MgO: 3
    }
  },

  // MIX-205
  "MIXTURE 12-5-24-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.2 },
      { material: "MOP", percentage: 0.35 },
      { material: "Kieserite", percentage: 0.05 }
    ],
    nutrients: {
      N: 15,
      P2O5: 5,
      K2O: 24,
      MgO: 3
    }
  },

  // MIX-206
  "MIXTURE 10-5-21-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.2 },
      { material: "MOP", percentage: 0.325 },
      { material: "Kieserite", percentage: 0.075 }
    ],
    nutrients: {
      N: 10,
      P2O5: 5,
      K2O: 21,
      MgO: 3
    }
  },

  // MIX-21
  "MIXTURE 11-5-20-3+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GRP", percentage: 0.1 },
      { material: "G.Kieserite (W)", percentage: 0.1 },
      { material: "AC", percentage: 0.2 },
      { material: "AS", percentage: 0.25 },
      { material: "ERP", percentage: 0.1 },
      { material: "MOP", percentage: 0.25 }
    ],
    nutrients: {
      N: 11,
      P2O5: 5,
      K2O: 20,
      MgO: 3
    }
  },

  // MIX-22
  "MIXTURE 15-9-18+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "G.Urea", percentage: 0.05 },
      { material: "AS", percentage: 0.35 },
      { material: "ERP", percentage: 0.3 },
      { material: "MOP", percentage: 0.3 }
    ],
    nutrients: {
      N: 15,
      P2O5: 9,
      K2O: 18,
      MgO: 0
    }
  },

  // MIX-24
  "P.MgO+B (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "ERP", percentage: 0.4 },
      { material: "Kieserite", percentage: 0.4 },
      { material: "GML", percentage: 0.2 }
    ],
    nutrients: {
      N: 0,
      P2O5: 13.5,
      K2O: 0,
      MgO: 13
    }
  },

  // MIX-26
  "MIXTURE 10-6-18-2+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GRP", percentage: 0.1 },
      { material: "G.Kieserite (W)", percentage: 0.1 },
      { material: "AC", percentage: 0.4 },
      { material: "ERP", percentage: 0.1 },
      { material: "MOP", percentage: 0.3 }
    ],
    nutrients: {
      N: 10,
      P2O5: 6,
      K2O: 18,
      MgO: 2
    }
  },

  // MIX-27
  "MIX X (8.4-14.5-7.2-2.1) (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "AS", percentage: 0.3 },
      { material: "ERP", percentage: 0.3 },
      { material: "MAP", percentage: 0.15 },
      { material: "MOP", percentage: 0.1 },
      { material: "Kieserite", percentage: 0.05 }
    ],
    nutrients: {
      N: 8.4,
      P2O5: 14.5,
      K2O: 7.2,
      MgO: 2.1
    }
  },

  // MIX-28
  "MIX J (9.5-11.9-13.2) (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GRP", percentage: 0.15 },
      { material: "AC", percentage: 0.35 },
      { material: "ERP", percentage: 0.15 },
      { material: "MAP", percentage: 0.1 },
      { material: "MOP", percentage: 0.25 }
    ],
    nutrients: {
      N: 9.5,
      P2O5: 11.9,
      K2O: 13.2,
      MgO: 0
    }
  },

  // MIX-31
  "MIXTURE 9-5-19-2.5+1B (25KG)": {
    bagPrice: 32.00,
    materials: [
      { material: "AS", percentage: 0.45 },
      { material: "ERP", percentage: 0.175 },
      { material: "MOP", percentage: 0.3 },
      { material: "Kieserite", percentage: 0.075 }
    ],
    nutrients: {
      N: 9,
      P2O5: 5,
      K2O: 19,
      MgO: 2.5
    }
  },

  // MIX-32
  "MIXTURE 10-5-25-2+B+TE (50KG)": {
    bagPrice: 32.00,
    materials: [
      { material: "MOP", percentage: 0.3 },
      { material: "AC", percentage: 0.3 },
      { material: "GAC", percentage: 0.1 },
      { material: "ERP", percentage: 0.2 },
      { material: "G.Kieserite (W)", percentage: 0.1 }
    ],
    nutrients: {
      N: 10,
      P2O5: 5,
      K2O: 25,
      MgO: 2
    }
  },

  // MIX-33
  "MIXTURE 10.5-5.25-21-2.5+TE (50KG)": {
    bagPrice: 30.00,
    materials: [
      { material: "GAC", percentage: 0.1 },
      { material: "AC", percentage: 0.3 },
      { material: "ERP", percentage: 0.175 },
      { material: "MOP", percentage: 0.325 },
      { material: "Kieserite", percentage: 0.05 },
      { material: "GML", percentage: 0.05 }
    ],
    nutrients: {
      N: 10.5,
      P2O5: 5.25,
      K2O: 21,
      MgO: 2.5
    }
  },

  // MIX-34
  "MIX J (9.5-10.4-13.2) (50KG)": {
    bagPrice: 0.00,
    materials: [
      { material: "AC", percentage: 0.375 },
      { material: "ERP", percentage: 0.375 },
      { material: "MOP", percentage: 0.2 },
      { material: "GML", percentage: 0.05 }
    ],
    nutrients: {
      N: 9.5,
      P2O5: 10.4,
      K2O: 13.2,
      MgO: 0
    }
  },

  // OEM-01
  "RED ARROW 12-5-24-3+TE (50KG)": {
    bagPrice: 32.00,
    materials: [
      { material: "GAC", percentage: 0.4},
      { material: "GRP", percentage: 0.25 },
      { material: "G.MOP", percentage: 0.2 },
      { material: "G.Kieserite (W)", percentage: 0.15 }
    ],
    nutrients: {
      N: 12,
      P2O5: 5,
      K2O: 24,
      MgO: 3
    }
  },

  // OEM-03
  "WINPALM 12-6-24-2.5+TE (50KG)": {
    bagPrice: 32.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.3 },
      { material: "G.Kieserite (W)", percentage: 0.1 }
    ],
    nutrients: {
      N: 12,
      P2O5: 6,
      K2O: 24,
      MgO: 2.5
    }
  },

  // OEM-05
  "WINPALM 13-6-27-3+TE (50KG)": {
    bagPrice: 32.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.3 },
      { material: "G.Kieserite (W)", percentage: 0.1 }
    ],
    nutrients: {
      N: 13,
      P2O5: 6,
      K2O: 27,
      MgO: 3
    }
  },

  // OEM-07
  "WINPALM 12-5-24-3+TE (50KG)": {
    bagPrice: 32.00,
    materials: [
      { material: "GAC", percentage: 0.4},
      { material: "G.Kieserite (W)", percentage: 0.05 },
      { material: "ERP", percentage: 0.2 },
      { material: "GRP", percentage: 0.2 },
      { material: "MOP", percentage: 0.15 }
    ],
    nutrients: {
      N: 12,
      P2O5: 5,
      K2O: 24,
      MgO: 3
    }
  },

  // OEM-08
  "WINPALM 12-12-17-2+TE (50KG)": {
    bagPrice: 32.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.25 },
      { material: "G.Kieserite (W)", percentage: 0.15 }
    ],
    nutrients: {
      N: 12,
      P2O5: 12,
      K2O: 17,
      MgO: 2
    }
  },

  // OEM-09
  "WINPALM 15-15-6-4+TE (50KG)": {
    bagPrice: 32.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.45 },
      { material: "G.MOP", percentage: 0.1 },
      { material: "G.Kieserite (W)", percentage: 0.05 }
    ],
    nutrients: {
      N: 15,
      P2O5: 15,
      K2O: 6,
      MgO: 4
    }
  },

  // OEM-10
  "WINPALM 11-3-30-3+0.5B (50KG)": {
    bagPrice: 32.00,
    materials: [
      { material: "G.Kieserite (W)", percentage: 0.15 },
      { material: "AS", percentage: 0.4 },
      { material: "ERP", percentage: 0.1 },
      { material: "MOP", percentage: 0.3 },
      { material: "GML", percentage: 0.05 }
    ],
    nutrients: {
      N: 11,
      P2O5: 3,
      K2O: 30,
      MgO: 3
    }
  },

  // OEM-11
  "BULK BLEND 12-12-17-2+TE (50KG)-NEL": {
    bagPrice: 32.00,
    materials: [
      { material: "GAC", percentage: 0.4 },
      { material: "GRP", percentage: 0.2 },
      { material: "G.MOP", percentage: 0.25 },
      { material: "G.Kieserite (W)", percentage: 0.15 }
    ],
    nutrients: {
      N: 12,
      P2O5: 12,
      K2O: 17,
      MgO: 2
    }
  },

  // OEM-12
  "P-MgO (50KG) - NEL": {
    bagPrice: 32.00,
    materials: [
      { material: "ERP", percentage: 0.4 },
      { material: "GRP", percentage: 0.1 },
      { material: "Kieserite", percentage: 0.4 },
      { material: "GML", percentage: 0.1 }
    ],
    nutrients: {
      N: 0,
      P2O5: 15,
      K2O: 0,
      MgO: 15
    }
  },

  // OEM-20
  "WINPALM 12-6-22-3+TE (50KG)": {
    bagPrice: 45.00,
    materials: [
      { material: "GAC", percentage: 0.3 },
      { material: "GRP", percentage: 0.3 },
      { material: "G.MOP", percentage: 0.1 },
      { material: "G.Kieserite (W)", percentage: 0.3 }
    ],
    nutrients: {
      N: 12,
      P2O5: 6,
      K2O: 22,
      MgO: 3
    }
  },

  // <-- Paste the format here if you have more items to add.
  // The "//" icon need remove after you done edit.

};