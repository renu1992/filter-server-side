import {
  toDataSourceRequestString,
  toODataString,
  isCompositeFilterDescriptor
} from "@progress/kendo-data-query";

const state = {
  filter: {
    logic: "and",
    filters: [
      { field: "name", operator: "startswith", value: "p", ignoreCase: true },
      { field: "subcategory", operator: "eq", value: "Meat" }
    ]
  }
};

console.log(toDataSourceRequestString(state));
console.log(toODataString(state));

// target syntax:
// filter[logic]=and&filter[filters][0][field]=title&filter[filters][0][operator]=eq&filter[filters][0][value]=POST_TITLE
const parseFilter = filter1 => {
  let serialized ='';
  filter1.filters.forEach((filter, index) => {
    console.log("index",index);
  
    let logic='';
    if(index>0){
      logic=`${filter1.logic}`.toUpperCase();
    }  console.log("logic",logic);
    serialized +=logic+
      `${filter.field}$` +
      `${filter.operator}$` +
      `${filter.value}`;
  });

  return serialized.slice(0, -1);
};

console.log(parseFilter(state.filter));
