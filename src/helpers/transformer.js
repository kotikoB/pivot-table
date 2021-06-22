export function transformData(data) {
  return data.reduce(
    (acc, row) => {
      const category = row.category;
      const subCategory = row.subCategory;
      const state = row.state;
      const profit = row.profit;

      if (acc[category]) {
        if (acc[category][subCategory]) {
          if (acc[category][subCategory][state]) {
            acc[category][subCategory][state] += profit;
          } else {
            acc[category][subCategory][state] = profit;
          }
        } else {
          acc[category][subCategory] = [];
        }
      } else {
        acc[row.category] = {};
      }

      acc.states[state] = 0;
      return acc;
    },
    { states: {} }
  );
}

export function getStates(transformedData) {
  return Object.keys(transformedData.states).sort();
}

export function getTotals(states, categories) {
  const totals = {};
  states.forEach((state) => {
    const sum = Object.keys(categories).reduce((acc, category) => {
      if (category !== "states") {
        acc += categories[category][state];
      }
      return acc;
    }, 0);
    totals[state] = sum;
  });

  return totals;
}

export function getCategories(formated) {
  const categories = {};

  Object.keys(formated).forEach((category) => {
    categories[category] = {};
    Object.keys(formated[category]).forEach((subCategory) => {
      Object.keys(formated[category][subCategory]).forEach((state) => {
        const value = formated[category][subCategory][state];
        if (categories[category][state]) {
          categories[category][state] += value;
        } else {
          categories[category][state] = value;
        }
      });
    });
  });

  return categories;
}
