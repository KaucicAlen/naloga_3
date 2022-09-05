const categories = [
  { id: 0, name: "Set sports", sports: [] },
  { id: 1, name: "Competition sports", sports: [] },
  { id: 2, name: "Other", sports: [] }
];

const sports = [
  { id: 2, name: "Golf", category: 1 },
  { id: 3, name: "Formula 1", category: 1 },
  { id: 0, name: "Tennis", category: 0 },
  { id: 5, name: "Hockey", category: 2 },
  { id: 1, name: "Squash", category: 0 },
  { id: 4, name: "Soccer", category: 2 }
];

categories.forEach((categorie) => {
  sports.forEach((sport) => {
    if (categorie.id === sport.category) {
      categorie.sports.push(sport);
    }
  });
});

console.log(categories);

// This is the expected result
const result = [
  {
    id: 0,
    name: "Set sports",
    sports: [
      { id: 0, name: "Tennis", category: 0 },
      { id: 1, name: "Squash", category: 0 }
    ]
  },
  {
    id: 1,
    name: "Competition sports",
    sports: [
      { id: 2, name: "Golf", category: 1 },
      { id: 3, name: "Formula 1", category: 1 }
    ]
  },
  {
    id: 2,
    name: "Other",
    sports: [
      { id: 4, name: "Soccer", category: 2 },
      { id: 5, name: "Hockey", category: 2 }
    ]
  }
];
